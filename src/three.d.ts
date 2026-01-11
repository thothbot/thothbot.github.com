declare module 'three/addons/postprocessing/EffectComposer.js' {
  import { WebGLRenderer, WebGLRenderTarget } from 'three';
  export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
    addPass(pass: unknown): void;
    render(deltaTime?: number): void;
    setSize(width: number, height: number): void;
    dispose(): void;
  }
}

declare module 'three/addons/postprocessing/RenderPass.js' {
  import { Scene, Camera } from 'three';
  export class RenderPass {
    constructor(scene: Scene, camera: Camera);
    enabled: boolean;
    clear: boolean;
    clearDepth: boolean;
  }
}

declare module 'three/addons/postprocessing/ShaderPass.js' {
  export class ShaderPass {
    constructor(shader: unknown);
    uniforms: Record<string, { value: unknown }>;
    enabled: boolean;
    renderToScreen: boolean;
  }
}

declare module 'three/addons/postprocessing/UnrealBloomPass.js' {
  import { Vector2 } from 'three';
  export class UnrealBloomPass {
    constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
    strength: number;
    radius: number;
    threshold: number;
    enabled: boolean;
  }
}

declare module 'three/addons/lines/Line2.js' {
  import { Mesh, BufferGeometry, Material } from 'three';
  export class Line2 extends Mesh {
    constructor(geometry?: BufferGeometry, material?: Material);
    computeLineDistances(): this;
  }
}

declare module 'three/addons/lines/LineMaterial.js' {
  import { ShaderMaterial, Vector2 } from 'three';
  export class LineMaterial extends ShaderMaterial {
    constructor(parameters?: {
      color?: number;
      linewidth?: number;
      resolution?: Vector2;
      transparent?: boolean;
      opacity?: number;
      dashed?: boolean;
      dashScale?: number;
      dashSize?: number;
      gapSize?: number;
    });
    color: number;
    linewidth: number;
    resolution: Vector2;
    dashed: boolean;
    dashScale: number;
    dashSize: number;
    gapSize: number;
    uniforms: Record<string, { value: unknown }>;
    vertexShader: string;
    fragmentShader: string;
    needsUpdate: boolean;
    onBeforeCompile: (shader: {
      uniforms: Record<string, { value: unknown }>;
      vertexShader: string;
      fragmentShader: string;
    }) => void;
  }
}

declare module 'three/addons/lines/LineSegmentsGeometry.js' {
  import { InstancedBufferGeometry } from 'three';
  export class LineSegmentsGeometry extends InstancedBufferGeometry {
    constructor();
    setPositions(array: number[] | Float32Array): this;
    setColors(array: number[] | Float32Array): this;
    dispose(): void;
  }
}

declare module 'three/addons/loaders/GLTFLoader.js' {
  import { Loader, LoadingManager, Group, AnimationClip } from 'three';
  export interface GLTF {
    scene: Group;
    scenes: Group[];
    animations: AnimationClip[];
    asset: object;
  }
  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<GLTF>;
    parse(
      data: ArrayBuffer | string,
      path: string,
      onLoad: (gltf: GLTF) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
