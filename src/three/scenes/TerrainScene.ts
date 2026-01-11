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
import { HorizontalTiltShiftShader } from '../shaders/HorizontalTiltShiftShader';
import { VerticalTiltShiftShader } from '../shaders/VerticalTiltShiftShader';
import { NormalShader } from '../shaders/NormalShader';
import { TerrainShader } from '../shaders/TerrainShader';
import { GammaCorrectionShader } from '../shaders/GammaCorrectionShader';

interface Bird {
  mesh: THREE.Mesh;
  mixer: THREE.AnimationMixer;
  speed: number;
}

const FOG_COLOR = 0x000000;

export default class TerrainScene extends BaseScene {
  private static readonly BLUR_AMOUNT = 6;
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

  private clock = new THREE.Clock();

  async setup(): Promise<void> {
    this.screenWidth = this.renderer.domElement.width || window.innerWidth;
    this.screenHeight = this.renderer.domElement.height || window.innerHeight;

    this.setupCamera();
    this.setupScene();
    this.setupLights();
    this.setupRenderTargets();
    await this.setupTerrain();
    this.setupComposer();
    this.setupBirds();
  }

  private setupCamera(): void {
    this.camera.fov = 40;
    this.camera.near = 2;
    this.camera.far = 4000;
    this.camera.position.set(-1200, 500, 1200);
    this.camera.lookAt(0, 300, 0);
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
    this.scene.add(new THREE.AmbientLight(0x555555));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.15);
    directionalLight.position.set(500, 2000, 0);
    this.scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff4400, 1.5);
    pointLight.position.set(0, 0, 0);
    this.scene.add(pointLight);
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
      uDisplacementScale: { value: 375.0 },
      uRepeatOverlay: { value: new THREE.Vector2(6, 6) },
      uOffset: { value: new THREE.Vector2(0, 0) },
      ambientLightColor: { value: new THREE.Color(0x555555) },
      directionalLightColor: { value: new THREE.Color(0xffffff) },
      directionalLightIntensity: { value: 1.15 },
      directionalLightDirection: { value: new THREE.Vector3(500, 2000, 0).normalize() },
      pointLightColor: { value: new THREE.Color(0xff4400) },
      pointLightIntensity: { value: 1.5 },
      pointLightPosition: { value: new THREE.Vector3(0, 0, 0) },
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
    this.terrain.position.set(0, -125, 0);
    this.terrain.rotation.x = -Math.PI / 2;
    this.scene.add(this.terrain);
  }

  private setupBirds(): void {
    const loader = new GLTFLoader();
    const startX = -3000;

    const addBird = (
      path: string,
      speed: number,
      x: number,
      y: number,
      z: number
    ): void => {
      loader.load(path, (gltf) => {
        const mesh = gltf.scene.children[0] as THREE.Mesh;
        mesh.position.set(x, y, z);
        mesh.rotation.y = Math.PI / 2;
        mesh.castShadow = true;

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
      0.6,
      0.4,
      0.85
    );
    this.composer.addPass(bloomPass);

    const bleachPass = new ShaderPass(BleachBypassShader);
    bleachPass.uniforms.opacity.value = 0.4;
    this.composer.addPass(bleachPass);

    const hblur = new ShaderPass(HorizontalTiltShiftShader);
    hblur.uniforms.h.value = TerrainScene.BLUR_AMOUNT / this.screenWidth;
    hblur.uniforms.r.value = 0.5;
    this.composer.addPass(hblur);

    const vblur = new ShaderPass(VerticalTiltShiftShader);
    vblur.uniforms.v.value = TerrainScene.BLUR_AMOUNT / this.screenHeight;
    vblur.uniforms.r.value = 0.5;
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
    const delta = this.clock.getDelta();

    if (!this.terrain) return;

    this.updateNoise(delta);
    this.updateBirds(delta);

    this.renderer.setRenderTarget(null);
    this.composer.render();
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
    this.composer?.dispose();
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
