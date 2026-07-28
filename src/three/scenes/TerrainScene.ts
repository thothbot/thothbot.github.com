import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { BaseScene } from '../core/BaseScene';
import { NoiseShader } from '../shaders/NoiseShader';
import { LuminosityShader } from '../shaders/LuminosityShader';
import { BleachBypassShader } from '../shaders/BleachBypassShader';
import { VerticalTiltShiftShader } from '../shaders/VerticalTiltShiftShader';
import { NormalShader } from '../shaders/NormalShader';
import { TerrainShader } from '../shaders/TerrainShader';
import { SkyDomeShader } from '../shaders/SkyDomeShader';
import { GammaCorrectionShader } from '../shaders/GammaCorrectionShader';

interface Bird {
  mesh: THREE.Mesh;
  mixer: THREE.AnimationMixer;
  speed: number;
}

const HORIZON_COLOR = 0x1d2647;
const ZENITH_COLOR = 0x080a1c;
const MOON_COLOR = 0xdfeaff;
const FOG_COLOR = HORIZON_COLOR;

// Moonlight: shared by the sky dome, the terrain shader and the scene lights.
// Sitting well above the skyline, since a moon low enough to glow like a sunset
// is what made the previous pass read as physically wrong.
const MOON_DIRECTION = new THREE.Vector3(1710, 250, -892).normalize();

export default class TerrainScene extends BaseScene {
  private static readonly BLUR_AMOUNT = 3.0;
  private static readonly HEIGHTMAP_SIZE = 256;
  private static readonly TERRAIN_SIZE = 6000;
  private static readonly TERRAIN_SEGMENTS = 256;

  private screenWidth!: number;
  private screenHeight!: number;

  private cameraOrtho!: THREE.OrthographicCamera;
  private sceneRenderTarget!: THREE.Scene;

  private uniformsTerrain!: Record<string, THREE.IUniform>;
  private uniformsNoise!: typeof NoiseShader.uniforms;

  private heightMap!: THREE.WebGLRenderTarget;
  private normalMap!: THREE.WebGLRenderTarget;
  private specularMap!: THREE.WebGLRenderTarget;

  private terrain!: THREE.Mesh;
  private quadTarget!: THREE.Mesh;

  private materialHeightmap!: THREE.ShaderMaterial;
  private materialNormal!: THREE.ShaderMaterial;

  private composer!: EffectComposer;

  private birds: Bird[] = [];
  private sky!: THREE.Mesh;
  private skyMaterial!: THREE.ShaderMaterial;

  private timer = new THREE.Timer();

  // The section is named after parallax, so the camera demonstrates it
  private cameraBase = new THREE.Vector3(-1200, 500, 1200);
  private cameraTarget = new THREE.Vector3(0, 300, 0);
  private pointer = new THREE.Vector2(0, 0);
  private drift = new THREE.Vector2(0, 0);
  private onPointerMove = (event: PointerEvent): void => {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  async setup(): Promise<void> {
    this.screenWidth = this.renderer.domElement.width || window.innerWidth;
    this.screenHeight = this.renderer.domElement.height || window.innerHeight;

    this.setupCamera();
    this.setupScene();
    this.setupSky();
    this.setupLights();
    this.setupRenderTargets();
    await this.setupTerrain();
    this.setupComposer();
    this.setupBirds();

    window.addEventListener('pointermove', this.onPointerMove);
  }

  private setupSky(): void {
    this.skyMaterial = new THREE.ShaderMaterial({
      vertexShader: SkyDomeShader.vertexShader,
      fragmentShader: SkyDomeShader.fragmentShader,
      uniforms: {
        uZenith: { value: new THREE.Color(ZENITH_COLOR) },
        uHorizon: { value: new THREE.Color(HORIZON_COLOR) },
        uMoonColor: { value: new THREE.Color(MOON_COLOR) },
        uMoonDirection: { value: MOON_DIRECTION.clone() },
        uTime: { value: 0 },
      },
      side: THREE.BackSide,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    this.sky = new THREE.Mesh(new THREE.SphereGeometry(3600, 48, 32), this.skyMaterial);
    this.sky.renderOrder = -1;
    this.scene.add(this.sky);
  }

  private setupCamera(): void {
    this.camera.fov = 40;
    this.camera.near = 2;
    this.camera.far = 4000;
    this.camera.position.copy(this.cameraBase);
    this.camera.lookAt(this.cameraTarget);
    this.camera.updateProjectionMatrix();

    this.cameraOrtho = new THREE.OrthographicCamera(
      this.screenWidth / -2,
      this.screenWidth / 2,
      this.screenHeight / 2,
      this.screenHeight / -2,
      -10000,
      10000
    );
    this.cameraOrtho.position.z = 100;

    this.sceneRenderTarget = new THREE.Scene();
    this.sceneRenderTarget.add(this.cameraOrtho);
  }

  private setupScene(): void {
    this.scene.fog = new THREE.Fog(FOG_COLOR, 2000, 4000);
    this.renderer.setClearColor(FOG_COLOR, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.autoClear = false;
  }

  private setupLights(): void {
    this.scene.add(new THREE.AmbientLight(0x55659c));

    const moonLight = new THREE.DirectionalLight(0xd8e6ff, 3.0);
    moonLight.position.copy(MOON_DIRECTION).multiplyScalar(2000);
    this.scene.add(moonLight);

    const fillLight = new THREE.DirectionalLight(0x54608f, 0.7);
    fillLight.position.set(-1200, 700, 1200);
    this.scene.add(fillLight);
  }

  private setupRenderTargets(): void {
    const rx = TerrainScene.HEIGHTMAP_SIZE;
    const ry = TerrainScene.HEIGHTMAP_SIZE;

    const renderTargetParams: THREE.WebGLRenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      generateMipmaps: false,
    };

    this.heightMap = new THREE.WebGLRenderTarget(rx, ry, renderTargetParams);
    this.normalMap = new THREE.WebGLRenderTarget(rx, ry, renderTargetParams);

    this.specularMap = new THREE.WebGLRenderTarget(2048, 2048, {
      ...renderTargetParams,
      wrapS: THREE.RepeatWrapping,
      wrapT: THREE.RepeatWrapping,
    });

    const planeGeometry = new THREE.PlaneGeometry(this.screenWidth, this.screenHeight);
    this.quadTarget = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
    this.quadTarget.position.z = -500;
    this.sceneRenderTarget.add(this.quadTarget);
  }

  private async setupTerrain(): Promise<void> {
    const textureLoader = new THREE.TextureLoader();
    const rx = TerrainScene.HEIGHTMAP_SIZE;
    const ry = TerrainScene.HEIGHTMAP_SIZE;

    const loadTexture = (path: string): Promise<THREE.Texture> => {
      return new Promise((resolve, reject) => {
        textureLoader.load(path, resolve, undefined, reject);
      });
    };

    const [diffuseTexture1, diffuseTexture2, detailTexture] = await Promise.all([
      loadTexture('/assets/textures/terrain/grasslight-big.jpg'),
      loadTexture('/assets/textures/terrain/backgrounddetailed6.jpg'),
      loadTexture('/assets/textures/terrain/grasslight-big-nm.jpg'),
    ]);

    diffuseTexture1.wrapS = diffuseTexture1.wrapT = THREE.RepeatWrapping;
    diffuseTexture1.colorSpace = THREE.SRGBColorSpace;
    diffuseTexture2.wrapS = diffuseTexture2.wrapT = THREE.RepeatWrapping;
    diffuseTexture2.colorSpace = THREE.SRGBColorSpace;
    detailTexture.wrapS = detailTexture.wrapT = THREE.RepeatWrapping;

    this.applyShader(
      new THREE.ShaderMaterial({
        uniforms: { tDiffuse: { value: null } },
        vertexShader: LuminosityShader.vertexShader,
        fragmentShader: LuminosityShader.fragmentShader,
        glslVersion: THREE.GLSL3,
      }),
      diffuseTexture1,
      this.specularMap
    );

    this.uniformsNoise = {
      time: { value: 1.0 },
      scale: { value: new THREE.Vector2(1.5, 1.5) },
      offset: { value: new THREE.Vector2(0, 0) },
    };

    const uniformsNormal = {
      heightMap: { value: this.heightMap.texture },
      resolution: { value: new THREE.Vector2(rx, ry) },
      height: { value: 0.05 },
    };

    this.uniformsTerrain = {
      tNormal: { value: this.normalMap.texture },
      uNormalScale: { value: 3.5 },
      tDisplacement: { value: this.heightMap.texture },
      tDiffuse1: { value: diffuseTexture1 },
      tDiffuse2: { value: diffuseTexture2 },
      tSpecular: { value: this.specularMap.texture },
      tDetail: { value: detailTexture },
      enableDiffuse1: { value: true },
      enableDiffuse2: { value: true },
      enableSpecular: { value: true },
      diffuse: { value: new THREE.Color(0xffffff) },
      specular: { value: new THREE.Color(0xffffff) },
      ambient: { value: new THREE.Color(0xffffff) },
      shininess: { value: 30.0 },
      uNightGrade: { value: 0.66 },
      uDisplacementScale: { value: 190.0 },
      uRepeatOverlay: { value: new THREE.Vector2(6, 6) },
      uOffset: { value: new THREE.Vector2(0, 0) },
      ambientLightColor: { value: new THREE.Color(0x525e96) },
      directionalLightColor: { value: new THREE.Color(0xc8dcff) },
      directionalLightIntensity: { value: 2.7 },
      directionalLightDirection: { value: MOON_DIRECTION.clone() },
      pointLightColor: { value: new THREE.Color(0x5f7cc4) },
      pointLightIntensity: { value: 0.5 },
      pointLightPosition: { value: MOON_DIRECTION.clone().multiplyScalar(1400) },
      fogColor: { value: new THREE.Color(FOG_COLOR) },
      fogNear: { value: 2000.0 },
      fogFar: { value: 4000.0 },
    };

    this.materialHeightmap = new THREE.ShaderMaterial({
      ...NoiseShader,
      uniforms: this.uniformsNoise,
      glslVersion: THREE.GLSL3,
    });

    this.materialNormal = new THREE.ShaderMaterial({
      ...NormalShader,
      uniforms: uniformsNormal,
      glslVersion: THREE.GLSL3,
    });

    const materialTerrain = new THREE.ShaderMaterial({
      ...TerrainShader,
      uniforms: this.uniformsTerrain,
      glslVersion: THREE.GLSL3,
      transparent: true,
    });

    const geometryTerrain = new THREE.PlaneGeometry(
      TerrainScene.TERRAIN_SIZE,
      TerrainScene.TERRAIN_SIZE,
      TerrainScene.TERRAIN_SEGMENTS,
      TerrainScene.TERRAIN_SEGMENTS
    );
    geometryTerrain.computeTangents();

    this.terrain = new THREE.Mesh(geometryTerrain, materialTerrain);
    this.terrain.position.set(0, -40, 0);
    this.terrain.rotation.x = -Math.PI / 2;
    this.scene.add(this.terrain);
  }

  private setupBirds(): void {
    const loader = new GLTFLoader();
    const startX = -3000;

    const addBird = (path: string, speed: number, x: number, y: number, z: number): void => {
      loader.load(path, (gltf) => {
        const mesh = gltf.scene.children[0] as THREE.Mesh;
        mesh.position.set(x, y, z);
        mesh.rotation.y = Math.PI / 2;
        mesh.castShadow = true;

        mesh.traverse((child) => {
          const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (material && material.emissive) {
            material.emissive = new THREE.Color(0x3a3a44);
            material.emissiveIntensity = 0.7;
            material.needsUpdate = true;
          }
        });

        const mixer = new THREE.AnimationMixer(mesh);
        if (gltf.animations.length > 0) {
          mixer.clipAction(gltf.animations[0]).play();
        }

        this.birds.push({ mesh, mixer, speed });
        this.scene.add(mesh);
      });
    };

    addBird('/assets/models/gltf/parrot.glb', 250, startX - 500, 500, 700);
    addBird('/assets/models/gltf/parrot.glb', 250, startX - Math.random() * 500, 500, -200);
    addBird('/assets/models/gltf/parrot.glb', 250, startX - Math.random() * 500, 500, 200);
    addBird('/assets/models/gltf/parrot.glb', 250, startX - Math.random() * 500, 500, 1000);
    addBird('/assets/models/gltf/flamingo.glb', 500, startX - Math.random() * 500, 350, 40);
    addBird('/assets/models/gltf/stork.glb', 350, startX - Math.random() * 500, 350, 340);
  }

  private setupComposer(): void {
    const renderTarget = new THREE.WebGLRenderTarget(this.screenWidth, this.screenHeight, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      stencilBuffer: false,
    });

    this.composer = new EffectComposer(this.renderer, renderTarget);

    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.screenWidth, this.screenHeight),
      0.40,
      0.17,
      0.93
    );
    this.composer.addPass(bloomPass);

    const bleachPass = new ShaderPass(BleachBypassShader);
    bleachPass.uniforms.opacity.value = 0.15;
    this.composer.addPass(bleachPass);

    const vblur = new ShaderPass(VerticalTiltShiftShader);
    vblur.uniforms.v.value = TerrainScene.BLUR_AMOUNT / this.screenHeight;
    vblur.uniforms.r.value = 0.42;
    this.composer.addPass(vblur);

    const gammaPass = new ShaderPass(GammaCorrectionShader);
    this.composer.addPass(gammaPass);
  }

  private applyShader(
    material: THREE.ShaderMaterial,
    texture: THREE.Texture,
    target: THREE.WebGLRenderTarget
  ): void {
    material.uniforms.tDiffuse.value = texture;

    const sceneTmp = new THREE.Scene();
    const meshTmp = new THREE.Mesh(
      new THREE.PlaneGeometry(this.screenWidth, this.screenHeight),
      material
    );
    meshTmp.position.z = -500;
    sceneTmp.add(meshTmp);

    this.renderer.setRenderTarget(target);
    this.renderer.render(sceneTmp, this.cameraOrtho);
    this.renderer.setRenderTarget(null);
  }

  update(_time: number): void {
    this.timer.update();
    const delta = this.timer.getDelta();
    const elapsed = this.timer.getElapsed();

    if (!this.terrain) return;

    this.updateNoise(delta);
    this.updateBirds(delta);
    this.updateParallax(elapsed);

    this.renderer.setRenderTarget(null);
    this.composer.render();
  }

  private updateParallax(elapsed: number): void {
    this.drift.x += (this.pointer.x - this.drift.x) * 0.035;
    this.drift.y += (this.pointer.y - this.drift.y) * 0.035;

    const sway = Math.sin(elapsed * 0.07) * 90;

    this.camera.position.set(
      this.cameraBase.x + this.drift.x * 230 + sway,
      this.cameraBase.y - this.drift.y * 130,
      this.cameraBase.z + this.drift.x * 110
    );
    this.camera.lookAt(this.cameraTarget);

    // The dome rides with the camera, so it never shows its own parallax
    this.sky.position.copy(this.camera.position);
    this.skyMaterial.uniforms.uTime.value = elapsed;
  }

  private updateBirds(delta: number): void {
    for (const bird of this.birds) {
      bird.mixer.update(delta);
      bird.mesh.position.x += bird.speed * delta;

      if (bird.mesh.position.x > 2000) {
        bird.mesh.position.x = -1500 - Math.random() * 500;
      }
    }
  }

  private updateNoise(delta: number): void {
    this.uniformsNoise.offset.value.x += delta * 0.005;
    this.uniformsTerrain.uOffset.value.x = 4 * this.uniformsNoise.offset.value.x;

    this.quadTarget.material = this.materialHeightmap;
    this.renderer.setRenderTarget(this.heightMap);
    this.renderer.render(this.sceneRenderTarget, this.cameraOrtho);

    this.quadTarget.material = this.materialNormal;
    this.renderer.setRenderTarget(this.normalMap);
    this.renderer.render(this.sceneRenderTarget, this.cameraOrtho);
  }

  dispose(): void {
    super.dispose();
    window.removeEventListener('pointermove', this.onPointerMove);
    this.composer?.dispose();
    this.sky?.geometry.dispose();
    this.skyMaterial?.dispose();
    this.heightMap?.dispose();
    this.normalMap?.dispose();
    this.specularMap?.dispose();
    this.terrain?.geometry.dispose();
    (this.terrain?.material as THREE.Material)?.dispose();

    for (const bird of this.birds) {
      bird.mixer.stopAllAction();
      bird.mesh.geometry?.dispose();
      if (bird.mesh.material) {
        if (Array.isArray(bird.mesh.material)) {
          bird.mesh.material.forEach((m: THREE.Material) => m.dispose());
        } else {
          bird.mesh.material.dispose();
        }
      }
    }
    this.birds = [];
  }
}
