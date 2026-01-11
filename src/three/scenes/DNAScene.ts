import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { BaseScene } from '../core/BaseScene';
import {
  HelixParticleShader,
  BasePairShader,
  StreakShader,
  BokehShader,
  FilmGrainShader,
} from '../shaders/DNAShader';

export default class DNAScene extends BaseScene {
  private helixGroup!: THREE.Group;
  private strandParticles!: THREE.Points;
  private basePairParticles!: THREE.Points;
  private streakParticles!: THREE.Points;
  private bokehFront!: THREE.Points;
  private bokehBack!: THREE.Points;

  private composer!: EffectComposer;
  private grainPass!: ShaderPass;

  private clock = new THREE.Clock();

  private readonly HELIX_RADIUS = 1.8;
  private readonly HELIX_HEIGHT = 5;
  private readonly TURN_HEIGHT = 5;
  private readonly BASE_PAIRS_PER_TURN = 10;

  private readonly STRAND_PARTICLES = 3000;
  private readonly STRAND_TUBE_RADIUS = 0.5;
  private readonly STRAND_DOT_SIZE = 0.5;
  private readonly STRAND_DOT_SIZE_VARIANCE = 3.0;

  private readonly BASE_PAIR_PARTICLES = 200;
  private readonly BASE_PAIR_TUBE_RADIUS = 0.10;
  private readonly BASE_PAIR_DOT_SIZE = 0.5;
  private readonly BASE_PAIR_DOT_SIZE_VARIANCE = 3.0;
  private readonly BASE_PAIR_GAP = 0.25;

  private readonly MERGE_PAIRS_COUNT = 2;
  private readonly MERGE_DURATION = 3.0;
  private readonly MERGE_INTERVAL = 3.0;

  private mergeStates: { pairIndex: number; progress: number; startTime: number }[] = [];
  private lastMergeTime = 0;
  private totalBasePairs = 0;

  private readonly STRAND_SOFTNESS = 0.2;
  private readonly STRAND_DOT_RADIUS = 0.1;
  private readonly STRAND_HALO_INTENSITY = 1.5;

  private readonly BASE_PAIR_SOFTNESS = 0.1;
  private readonly BASE_PAIR_DOT_RADIUS = 0.07;
  private readonly BASE_PAIR_HALO_INTENSITY = 1.0;

  private readonly GLOW_CORE_FALLOFF = 20.0;
  private readonly GLOW_HALO_FALLOFF = 6.0;
  private readonly GLOW_OPACITY = 1.0;

  setup(): void {
    this.setupCamera();
    this.createBokehParticles();
    this.createStreakParticles();
    this.createDNAHelix();
    this.setupComposer();
  }

  private setupCamera(): void {
    this.camera.fov = 45;
    this.camera.near = 0.1;
    this.camera.far = 100;
    this.camera.position.set(0, 0, 13);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();
  }

  private createDNAHelix(): void {
    this.helixGroup = new THREE.Group();
    this.helixGroup.position.set(0, 0, 0);
    this.helixGroup.rotation.x = 0.15;
    this.helixGroup.rotation.z = 0.1;

    this.createStrandParticles();
    this.createBasePairParticles();

    this.scene.add(this.helixGroup);
  }

  private createStrandParticles(): void {
    const count = this.STRAND_PARTICLES * 2;
    const positions = new Float32Array(count * 3);
    const brightness = new Float32Array(count);
    const phases = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let strand = 0; strand < 2; strand++) {
      const helixPhaseOffset = strand * Math.PI;

      for (let i = 0; i < this.STRAND_PARTICLES; i++) {
        const idx = strand * this.STRAND_PARTICLES + i;

        const t = Math.random();
        const helixAngle = t * Math.PI * 2 * (this.HELIX_HEIGHT / this.TURN_HEIGHT) + helixPhaseOffset;
        const y = t * this.HELIX_HEIGHT - this.HELIX_HEIGHT / 2;

        const centerX = Math.cos(helixAngle) * this.HELIX_RADIUS;
        const centerZ = Math.sin(helixAngle) * this.HELIX_RADIUS;

        const tangentX = -Math.sin(helixAngle);
        const tangentZ = Math.cos(helixAngle);

        const tubeAngle = Math.random() * Math.PI * 2;

        const normalX = tangentZ;
        const normalZ = -tangentX;

        const offsetX = normalX * Math.cos(tubeAngle) * this.STRAND_TUBE_RADIUS;
        const offsetY = Math.sin(tubeAngle) * this.STRAND_TUBE_RADIUS;
        const offsetZ = normalZ * Math.cos(tubeAngle) * this.STRAND_TUBE_RADIUS;

        positions[idx * 3] = centerX + offsetX + (Math.random() - 0.5) * 0.03;
        positions[idx * 3 + 1] = y + offsetY + (Math.random() - 0.5) * 0.03;
        positions[idx * 3 + 2] = centerZ + offsetZ + (Math.random() - 0.5) * 0.03;

        const facingCamera = Math.max(0, normalX * Math.cos(tubeAngle));
        brightness[idx] = 0.4 + facingCamera * 0.4 + Math.random() * 0.2;

        phases[idx] = Math.random() * Math.PI * 2;
        sizes[idx] = this.STRAND_DOT_SIZE + Math.random() * this.STRAND_DOT_SIZE_VARIANCE;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: HelixParticleShader.vertexShader,
      fragmentShader: HelixParticleShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSoftness: { value: this.STRAND_SOFTNESS },
        uDotRadius: { value: this.STRAND_DOT_RADIUS },
        uCoreFalloff: { value: this.GLOW_CORE_FALLOFF },
        uHaloFalloff: { value: this.GLOW_HALO_FALLOFF },
        uHaloIntensity: { value: this.STRAND_HALO_INTENSITY },
        uOpacity: { value: this.GLOW_OPACITY },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    this.strandParticles = new THREE.Points(geometry, material);
    this.helixGroup.add(this.strandParticles);
  }

  private createBasePairParticles(): void {
    const turns = this.HELIX_HEIGHT / this.TURN_HEIGHT;
    this.totalBasePairs = Math.floor(turns * this.BASE_PAIRS_PER_TURN);
    const particlesPerPair = this.BASE_PAIR_PARTICLES;
    const count = this.totalBasePairs * particlesPerPair * 2;

    const positions = new Float32Array(count * 3);
    const brightness = new Float32Array(count);
    const phases = new Float32Array(count);
    const sizes = new Float32Array(count);
    const tubeTs = new Float32Array(count);
    const mergeProgress = new Float32Array(count);
    const tubeDirArray = new Float32Array(count * 3);
    const pairIndices = new Float32Array(count);

    for (let bp = 0; bp < this.totalBasePairs; bp++) {
      const bpT = bp / this.totalBasePairs;
      const helixAngle = bpT * Math.PI * 2 * turns;
      const y = bpT * this.HELIX_HEIGHT - this.HELIX_HEIGHT / 2;

      const x1 = Math.cos(helixAngle) * this.HELIX_RADIUS;
      const z1 = Math.sin(helixAngle) * this.HELIX_RADIUS;
      const x2 = Math.cos(helixAngle + Math.PI) * this.HELIX_RADIUS;
      const z2 = Math.sin(helixAngle + Math.PI) * this.HELIX_RADIUS;

      const pairDirX = x2 - x1;
      const pairDirZ = z2 - z1;
      const pairLength = Math.sqrt(pairDirX * pairDirX + pairDirZ * pairDirZ);
      const pairNormX = pairDirX / pairLength;
      const pairNormZ = pairDirZ / pairLength;

      const perpX = -pairNormZ;
      const perpZ = pairNormX;

      for (let tube = 0; tube < 2; tube++) {
        const tubeStartX = tube === 0 ? x1 : x2;
        const tubeStartZ = tube === 0 ? z1 : z2;
        const tubeDirX = tube === 0 ? pairNormX : -pairNormX;
        const tubeDirZ = tube === 0 ? pairNormZ : -pairNormZ;
        const maxTubeLength = (pairLength / 2) - this.BASE_PAIR_GAP;

        for (let i = 0; i < particlesPerPair; i++) {
          const idx = bp * particlesPerPair * 2 + tube * particlesPerPair + i;

          const t = Math.random();
          const tubeAngle = Math.random() * Math.PI * 2;

          const centerX = tubeStartX + tubeDirX * maxTubeLength * t;
          const centerZ = tubeStartZ + tubeDirZ * maxTubeLength * t;

          const offsetX = perpX * Math.cos(tubeAngle) * this.BASE_PAIR_TUBE_RADIUS;
          const offsetY = Math.sin(tubeAngle) * this.BASE_PAIR_TUBE_RADIUS;
          const offsetZ = perpZ * Math.cos(tubeAngle) * this.BASE_PAIR_TUBE_RADIUS;

          positions[idx * 3] = centerX + offsetX + (Math.random() - 0.5) * 0.02;
          positions[idx * 3 + 1] = y + offsetY + (Math.random() - 0.5) * 0.02;
          positions[idx * 3 + 2] = centerZ + offsetZ + (Math.random() - 0.5) * 0.02;

          tubeTs[idx] = t;
          pairIndices[idx] = bp;
          mergeProgress[idx] = 0;

          tubeDirArray[idx * 3] = tubeDirX;
          tubeDirArray[idx * 3 + 1] = 0;
          tubeDirArray[idx * 3 + 2] = tubeDirZ;

          const facingCamera = Math.max(0, perpX * Math.cos(tubeAngle));
          brightness[idx] = 0.4 + facingCamera * 0.4 + Math.random() * 0.2;

          phases[idx] = Math.random() * Math.PI * 2;
          sizes[idx] = this.BASE_PAIR_DOT_SIZE + Math.random() * this.BASE_PAIR_DOT_SIZE_VARIANCE;
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('tubeT', new THREE.BufferAttribute(tubeTs, 1));
    geometry.setAttribute('mergeProgress', new THREE.BufferAttribute(mergeProgress, 1));
    geometry.setAttribute('tubeDir', new THREE.BufferAttribute(tubeDirArray, 3));
    geometry.setAttribute('pairIndex', new THREE.BufferAttribute(pairIndices, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: BasePairShader.vertexShader,
      fragmentShader: BasePairShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMaxGap: { value: this.BASE_PAIR_GAP },
        uSoftness: { value: this.BASE_PAIR_SOFTNESS },
        uDotRadius: { value: this.BASE_PAIR_DOT_RADIUS },
        uCoreFalloff: { value: this.GLOW_CORE_FALLOFF },
        uHaloFalloff: { value: this.GLOW_HALO_FALLOFF },
        uHaloIntensity: { value: this.BASE_PAIR_HALO_INTENSITY },
        uOpacity: { value: this.GLOW_OPACITY },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    this.basePairParticles = new THREE.Points(geometry, material);
    this.helixGroup.add(this.basePairParticles);
  }

  private createStreakParticles(): void {
    const count = 80;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const phases = new Float32Array(count);
    const lengths = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;

      speeds[i] = 0.3 + Math.random() * 0.4;
      phases[i] = Math.random();
      lengths[i] = 2.0 + Math.random() * 4.0;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('length', new THREE.BufferAttribute(lengths, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: StreakShader.vertexShader,
      fragmentShader: StreakShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    this.streakParticles = new THREE.Points(geometry, material);
    this.scene.add(this.streakParticles);
  }

  private createBokehParticles(): void {
    this.bokehBack = this.createBokehLayer(-15, -5, 25, 0.6);
    this.scene.add(this.bokehBack);

    this.bokehFront = this.createBokehLayer(5, 12, 20, 0.8);
    this.scene.add(this.bokehFront);
  }

  private createBokehLayer(zMin: number, zMax: number, count: number, sizeScale: number): THREE.Points {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const depths = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = zMin + Math.random() * (zMax - zMin);

      sizes[i] = (1.5 + Math.random() * 3.5) * sizeScale;
      phases[i] = Math.random() * Math.PI * 2;
      depths[i] = (positions[i * 3 + 2] - zMin) / (zMax - zMin);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('depth', new THREE.BufferAttribute(depths, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: BokehShader.vertexShader,
      fragmentShader: BokehShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    return new THREE.Points(geometry, material);
  }

  private setupComposer(): void {
    const width = this.renderer.domElement.width || window.innerWidth;
    const height = this.renderer.domElement.height || window.innerHeight;

    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    this.composer = new EffectComposer(this.renderer, renderTarget);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    this.grainPass = new ShaderPass({
      uniforms: FilmGrainShader.uniforms,
      vertexShader: FilmGrainShader.vertexShader,
      fragmentShader: FilmGrainShader.fragmentShader,
      glslVersion: THREE.GLSL3,
    });
    this.composer.addPass(this.grainPass);
  }

  update(_time: number): void {
    const elapsed = this.clock.getElapsedTime();

    this.updateHelix(elapsed);
    this.updateParticles(elapsed);
    this.updatePostProcessing(elapsed);

    this.renderer.setRenderTarget(null);
    this.composer.render();
  }

  private updateHelix(elapsed: number): void {
    this.helixGroup.rotation.y = elapsed * 0.08;

    const breathe = Math.sin(elapsed * 0.3) * 0.02 + 1.0;
    this.helixGroup.scale.setScalar(breathe);

    const tilt = Math.sin(elapsed * 0.15) * 0.03;
    this.helixGroup.rotation.z = 0.1 + tilt;

    const strandMaterial = this.strandParticles.material as THREE.ShaderMaterial;
    strandMaterial.uniforms.uTime.value = elapsed;

    const basePairMaterial = this.basePairParticles.material as THREE.ShaderMaterial;
    basePairMaterial.uniforms.uTime.value = elapsed;

    this.updateMergeAnimation(elapsed);
  }

  private updateMergeAnimation(elapsed: number): void {
    if (elapsed - this.lastMergeTime > this.MERGE_INTERVAL) {
      const availablePairs: number[] = [];
      for (let i = 0; i < this.totalBasePairs; i++) {
        let isAlreadyMerging = false;
        for (let j = 0; j < this.mergeStates.length; j++) {
          if (this.mergeStates[j].pairIndex === i) {
            isAlreadyMerging = true;
            break;
          }
        }
        if (!isAlreadyMerging) {
          availablePairs.push(i);
        }
      }

      const pairsToAdd = Math.min(this.MERGE_PAIRS_COUNT, availablePairs.length);
      for (let i = 0; i < pairsToAdd; i++) {
        const randomIdx = Math.floor(Math.random() * availablePairs.length);
        const pairIndex = availablePairs.splice(randomIdx, 1)[0];
        this.mergeStates.push({
          pairIndex,
          progress: 0,
          startTime: elapsed,
        });
      }
      this.lastMergeTime = elapsed;
    }

    const mergeAttr = this.basePairParticles.geometry.getAttribute('mergeProgress') as THREE.BufferAttribute;
    const pairIndexAttr = this.basePairParticles.geometry.getAttribute('pairIndex') as THREE.BufferAttribute;

    const completedMerges: number[] = [];

    for (let i = 0; i < this.mergeStates.length; i++) {
      const state = this.mergeStates[i];
      const animTime = elapsed - state.startTime;

      if (animTime < this.MERGE_DURATION) {
        state.progress = animTime / this.MERGE_DURATION;
      } else if (animTime < this.MERGE_DURATION * 2) {
        state.progress = 1 - (animTime - this.MERGE_DURATION) / this.MERGE_DURATION;
      } else {
        state.progress = 0;
        completedMerges.push(i);
      }
    }

    for (let i = completedMerges.length - 1; i >= 0; i--) {
      this.mergeStates.splice(completedMerges[i], 1);
    }

    for (let i = 0; i < mergeAttr.count; i++) {
      const pairIdx = pairIndexAttr.getX(i);
      let progress = 0;
      for (let j = 0; j < this.mergeStates.length; j++) {
        if (this.mergeStates[j].pairIndex === pairIdx) {
          progress = this.easeInOutCubic(this.mergeStates[j].progress);
          break;
        }
      }
      mergeAttr.setX(i, progress);
    }

    mergeAttr.needsUpdate = true;
  }

  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private updateParticles(elapsed: number): void {
    const streakMaterial = this.streakParticles.material as THREE.ShaderMaterial;
    streakMaterial.uniforms.uTime.value = elapsed;

    const bokehFrontMaterial = this.bokehFront.material as THREE.ShaderMaterial;
    bokehFrontMaterial.uniforms.uTime.value = elapsed;

    const bokehBackMaterial = this.bokehBack.material as THREE.ShaderMaterial;
    bokehBackMaterial.uniforms.uTime.value = elapsed;
  }

  private updatePostProcessing(elapsed: number): void {
    this.grainPass.uniforms.uTime.value = elapsed;
  }

  protected handleResize(): void {
    super.handleResize();

    if (this.composer) {
      const { width, height } = this.container.getBoundingClientRect();
      this.composer.setSize(width, height);
    }
  }

  dispose(): void {
    super.dispose();
    this.composer?.dispose();

    this.strandParticles?.geometry.dispose();
    (this.strandParticles?.material as THREE.Material)?.dispose();

    this.basePairParticles?.geometry.dispose();
    (this.basePairParticles?.material as THREE.Material)?.dispose();

    this.streakParticles?.geometry.dispose();
    (this.streakParticles?.material as THREE.Material)?.dispose();

    this.bokehFront?.geometry.dispose();
    (this.bokehFront?.material as THREE.Material)?.dispose();

    this.bokehBack?.geometry.dispose();
    (this.bokehBack?.material as THREE.Material)?.dispose();
  }
}
