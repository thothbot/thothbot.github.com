import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { BaseScene } from '../core/BaseScene';
import { ScannerShader } from '../shaders/ScannerShader';
import { GammaCorrectionShader } from '../shaders/GammaCorrectionShader';

export default class EuropeMapScene extends BaseScene {
  private pivot: THREE.Group | null = null;
  private europeModel: THREE.Group | null = null;
  private scannerMaterial!: THREE.ShaderMaterial;
  private composer!: EffectComposer;
  private dracoLoader!: DRACOLoader;
  private clock = new THREE.Clock();
  private modelCenter = new THREE.Vector3();
  private modelSize = new THREE.Vector3();
  private lastScanTimes = [0, 0, 0, 0];
  private scanDuration = 5.0;

  async setup(): Promise<void> {
    this.setupCamera();
    await this.loadModel();
    this.setupComposer();
  }

  private cameraDistance = 10;
  private minAngle = 50 * (Math.PI / 180);
  private maxAngle = 90 * (Math.PI / 180);

  private setupCamera(): void {
    this.camera.fov = 45;
    this.camera.near = 0.1;
    this.camera.far = 100;
    this.camera.position.set(0, this.cameraDistance, 0);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();
  }

  private async loadModel(): Promise<void> {
    this.dracoLoader = new DRACOLoader();
    this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(this.dracoLoader);

    this.scannerMaterial = new THREE.ShaderMaterial({
      vertexShader: ScannerShader.vertexShader,
      fragmentShader: ScannerShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uGradientColor1: { value: new THREE.Color(0xb8d4ff) },
        uGradientColor2: { value: new THREE.Color(0x3a38a8) },
        uScanColor: { value: new THREE.Color(0x22d3ee) },
        uEdgeColor: { value: new THREE.Color(0xaaaaaa) },
        uGridCenters: {
          value: [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, 0),
          ],
        },
        uScanDelays: { value: [0.0, 2.0, 3.5, 5.0] },
        uGridMaxRadius: { value: 60.0 },
        uScanDuration: { value: 5.0 },
        uModelCenter: { value: new THREE.Vector3() },
        uModelSize: { value: new THREE.Vector3(1, 1, 1) },
      },
      transparent: false,
      side: THREE.DoubleSide,
      depthWrite: true,
      depthTest: true,
      glslVersion: THREE.GLSL3,
    });

    return new Promise((resolve, reject) => {
      loader.load(
        '/assets/models/gltf/europe.glb',
        (gltf) => {
          this.europeModel = gltf.scene;

          this.europeModel.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.computeVertexNormals();
              child.material = this.scannerMaterial;
            }
          });

          const box = new THREE.Box3().setFromObject(this.europeModel);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          this.modelCenter.copy(center);
          this.modelSize.copy(size);

          this.scannerMaterial.uniforms.uModelCenter.value.copy(center);
          this.scannerMaterial.uniforms.uModelSize.value.copy(size);

          const centers = this.scannerMaterial.uniforms.uGridCenters.value;
          const delays = this.scannerMaterial.uniforms.uScanDelays.value;
          for (let i = 0; i < 4; i++) {
            this.setRandomScanCenter(centers[i]);
            delays[i] = i * (2 + Math.random() * 3);
            this.lastScanTimes[i] = -delays[i];
          }

          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 8 / maxDim;
          this.europeModel.scale.setScalar(scale);

          this.europeModel.position.x = -center.x * scale;
          this.europeModel.position.y = -center.y * scale;
          this.europeModel.position.z = -center.z * scale;

          this.pivot = new THREE.Group();
          this.pivot.add(this.europeModel);
          this.pivot.rotation.y = -Math.PI * 0.17;

          this.scene.add(this.pivot);
          resolve();
        },
        (progress) => {
          console.log('Loading europe.glb:', (progress.loaded / progress.total * 100).toFixed(0) + '%');
        },
        (error) => {
          console.error('Failed to load europe.glb:', error);
          reject(error);
        }
      );
    });
  }

  private setRandomScanCenter(target: THREE.Vector3): void {
    target.set(
      this.modelCenter.x + (Math.random() - 0.5) * this.modelSize.x * 0.6,
      this.modelCenter.y,
      this.modelCenter.z + (Math.random() - 0.5) * this.modelSize.z * 0.6
    );
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

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.8,
      0.3,
      0.7
    );
    this.composer.addPass(bloomPass);

    const gammaPass = new ShaderPass(GammaCorrectionShader);
    this.composer.addPass(gammaPass);
  }

  update(_time: number): void {
    const elapsed = this.clock.getElapsedTime();

    if (this.scannerMaterial) {
      this.scannerMaterial.uniforms.uTime.value = elapsed;

      const centers = this.scannerMaterial.uniforms.uGridCenters.value;
      const delays = this.scannerMaterial.uniforms.uScanDelays.value;

      for (let i = 0; i < 4; i++) {
        const delayedTime = elapsed - delays[i];
        if (delayedTime < 0) continue;

        const currentCycle = Math.floor(delayedTime / this.scanDuration);
        const lastCycle = Math.floor((this.lastScanTimes[i] + delays[i]) / this.scanDuration);

        if (currentCycle > lastCycle) {
          this.setRandomScanCenter(centers[i]);
          this.lastScanTimes[i] = elapsed - delays[i];
        }
      }
    }

    if (this.pivot) {
      this.pivot.rotation.z = Math.sin(elapsed * 0.15) * 0.05;
    }

    const angleT = (Math.sin(elapsed * 0.1) + 1) * 0.5;
    const currentAngle = this.minAngle + angleT * (this.maxAngle - this.minAngle);
    this.camera.position.y = Math.sin(currentAngle) * this.cameraDistance;
    this.camera.position.z = Math.cos(currentAngle) * this.cameraDistance;
    this.camera.lookAt(0, 0, 0);

    this.renderer.setRenderTarget(null);
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  dispose(): void {
    super.dispose();
    this.composer?.dispose();
    this.scannerMaterial?.dispose();
    this.dracoLoader?.dispose();

    if (this.europeModel) {
      this.europeModel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
        }
      });
    }
  }
}
