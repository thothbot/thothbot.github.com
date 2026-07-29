import * as THREE from 'three';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { BaseScene } from '../core/BaseScene';
import { TesseractLineMaterial } from '../shaders/TesseractShader';
import { AuroraShader, AuroraCompositeShader } from '../shaders/AuroraShader';
import { CrystalGlassShader } from '../shaders/CrystalGlassShader';
import { StarPointShader } from '../shaders/StarPointShader';

interface Vertex4D {
  x: number;
  y: number;
  z: number;
  w: number;
}

interface Link {
  a: number;
  b: number;
  w: number;
}

const CAMERA_Z = 5;
const GROUP_SCALE = 0.6;
const EDGE_FLOOR = 0.5;
const CHORD_FLOOR = 0.30;
const EDGE_MID_FADE = 0.78;
const CHORD_MID_FADE = 0.30;
const AURORA_Z = -14;
const BREAKPOINT = 768;
const NODE_SIZE = 2.6;
const HALO_SIZE = 2.6;
const BASE_ROTATION = new THREE.Euler(0.34, -0.46, 0.17);
const REFERENCE_RADIUS = 2.15;

export default class HeroScene extends BaseScene {
  private tesseract!: THREE.Group;
  private aurora!: THREE.Mesh;
  private auroraMaterial!: THREE.ShaderMaterial;
  private auroraGeometry!: THREE.PlaneGeometry;
  private auroraScene!: THREE.Scene;
  private auroraCamera!: THREE.OrthographicCamera;
  private auroraTarget!: THREE.WebGLRenderTarget;
  private backdrop!: THREE.Mesh;
  private backdropMaterial!: THREE.ShaderMaterial;
  private backdropGeometry!: THREE.PlaneGeometry;
  private coreLines!: Line2;
  private glowLines!: Line2;
  private chordLines!: Line2;
  private nodes!: THREE.Points;
  private halos!: THREE.Points;
  private facets!: THREE.Mesh;
  private vertices: Vertex4D[] = [];
  private edgeIndices: Link[] = [];
  private chordIndices: Link[] = [];
  private faceIndices: number[][] = [];
  private projected: THREE.Vector3[] = [];
  private depthFactor: number[] = [];
  private coreMaterial!: TesseractLineMaterial;
  private glowMaterial!: LineMaterial;
  private chordMaterial!: TesseractLineMaterial;
  private nodeMaterial!: THREE.ShaderMaterial;
  private haloMaterial!: THREE.ShaderMaterial;
  private haloTexture!: THREE.Texture;
  private facetMaterial!: THREE.ShaderMaterial;
  private geometry!: LineSegmentsGeometry;
  private chordGeometry!: LineSegmentsGeometry;
  private facetGeometry!: THREE.BufferGeometry;
  private nodeGeometry!: THREE.BufferGeometry;
  private groupScale = GROUP_SCALE;
  private projectedRadius = REFERENCE_RADIUS;
  private fitScale = 1;

  private tmpVec = new THREE.Vector3();
  private rotationQuat = new THREE.Quaternion();
  private edgeA = new THREE.Vector3();
  private edgeB = new THREE.Vector3();
  private faceNormal = new THREE.Vector3();

  private pointer = new THREE.Vector2(0, 0);
  private tilt = new THREE.Vector2(0, 0);
  private onPointerMove = (e: PointerEvent): void => {
    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  setup(): void {
    this.camera.position.z = CAMERA_Z;
    this.camera.fov = 48;
    this.camera.updateProjectionMatrix();
    this.renderer.setClearColor(0x000000, 0);
    this.scene.background = null;

    this.createAurora();

    this.tesseract = new THREE.Group();
    this.tesseract.scale.setScalar(GROUP_SCALE);
    this.scene.add(this.tesseract);

    this.initVertices();
    this.initEdges();
    this.initFaces();
    for (let i = 0; i < this.vertices.length; i++) {
      this.projected.push(new THREE.Vector3());
      this.depthFactor.push(1);
    }

    this.computeProjection(0);
    this.createFacets();
    this.createGeometry();
    this.createNodes();
    this.layout();

    window.addEventListener('pointermove', this.onPointerMove);
  }

  private createAurora(): void {
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.auroraTarget = new THREE.WebGLRenderTarget(Math.max(size.x, 1), Math.max(size.y, 1), {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    });

    this.auroraGeometry = new THREE.PlaneGeometry(2, 2);
    this.auroraMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uAspect: { value: 1 },
        uIntensity: { value: 1 },
        uParallax: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: AuroraShader.vertexShader,
      fragmentShader: AuroraShader.fragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    this.auroraScene = new THREE.Scene();
    this.auroraCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.aurora = new THREE.Mesh(this.auroraGeometry, this.auroraMaterial);
    this.auroraScene.add(this.aurora);

    this.backdropGeometry = new THREE.PlaneGeometry(1, 1);
    this.backdropMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uScene: { value: this.auroraTarget.texture },
        uResolution: { value: size.clone() },
      },
      vertexShader: AuroraCompositeShader.vertexShader,
      fragmentShader: AuroraCompositeShader.fragmentShader,
      depthWrite: false,
      depthTest: false,
    });

    this.backdrop = new THREE.Mesh(this.backdropGeometry, this.backdropMaterial);
    this.backdrop.position.z = AURORA_Z;
    this.backdrop.renderOrder = -2;
    this.scene.add(this.backdrop);
  }

  private renderAurora(): void {
    this.renderer.setRenderTarget(this.auroraTarget);
    this.renderer.render(this.auroraScene, this.auroraCamera);
    this.renderer.setRenderTarget(null);
  }

  private syncResolution(): void {
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    this.auroraTarget.setSize(Math.max(size.x, 1), Math.max(size.y, 1));
    this.backdropMaterial.uniforms.uResolution.value.copy(size);
    if (this.facetMaterial) this.facetMaterial.uniforms.uResolution.value.copy(size);
  }

  private layout(): void {
    const { width, height } = this.container.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const aspect = width / height;
    const halfFov = (this.camera.fov * Math.PI) / 360;

    const backdropHalfHeight = Math.tan(halfFov) * (CAMERA_Z - AURORA_Z);
    this.backdrop.scale.set(backdropHalfHeight * aspect * 2.1, backdropHalfHeight * 2.1, 1);
    this.auroraMaterial.uniforms.uAspect.value = aspect;

    const halfHeight = Math.tan(halfFov) * CAMERA_Z;
    const halfWidth = halfHeight * aspect;
    const compact = width < BREAKPOINT;

    const scale = compact
      ? Math.min(halfHeight * 0.125, halfWidth * 0.22)
      : Math.min(halfHeight * 0.20, halfWidth * 0.23);

    this.groupScale = scale;
    this.tesseract.scale.setScalar(scale * this.fitScale);
    this.tesseract.position.set(compact ? 0 : -halfWidth * 0.48, compact ? halfHeight * 0.62 : 0, 0);
    this.nodeMaterial.uniforms.uSize.value = NODE_SIZE * (scale / GROUP_SCALE);
    this.haloMaterial.uniforms.uSize.value = HALO_SIZE * (scale / GROUP_SCALE);
  }

  private initVertices(): void {
    for (let i = 0; i < 16; i++) {
      this.vertices.push({
        x: (i & 1) ? 1 : -1,
        y: (i & 2) ? 1 : -1,
        z: (i & 4) ? 1 : -1,
        w: (i & 8) ? 1 : -1,
      });
    }
  }

  private initEdges(): void {
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        const diff = i ^ j;
        const bits = (diff & 1) + ((diff >> 1) & 1) + ((diff >> 2) & 1) + ((diff >> 3) & 1);
        if (bits === 1) {
          this.edgeIndices.push({ a: i, b: j, w: 1 });
        } else if (bits === 2) {
          this.chordIndices.push({ a: i, b: j, w: 0.45 });
        }
      }
    }
  }

  private initFaces(): void {
    const axes = [1, 2, 4, 8];
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 4; j++) {
        const rest = axes.filter((_, k) => k !== i && k !== j);
        for (let m = 0; m < 4; m++) {
          const base = ((m & 1) ? rest[0] : 0) | ((m & 2) ? rest[1] : 0);
          this.faceIndices.push([base, base | axes[i], base | axes[i] | axes[j], base | axes[j]]);
        }
      }
    }
  }

  private rotate4D(v: Vertex4D, angleXW: number, angleYW: number, angleZW: number, angleXY: number): Vertex4D {
    let { x, y, z, w } = v;

    let cos = Math.cos(angleXW);
    let sin = Math.sin(angleXW);
    let newX = x * cos - w * sin;
    let newW = x * sin + w * cos;
    x = newX;
    w = newW;

    cos = Math.cos(angleYW);
    sin = Math.sin(angleYW);
    let newY = y * cos - w * sin;
    newW = y * sin + w * cos;
    y = newY;
    w = newW;

    cos = Math.cos(angleZW);
    sin = Math.sin(angleZW);
    let newZ = z * cos - w * sin;
    newW = z * sin + w * cos;
    z = newZ;
    w = newW;

    cos = Math.cos(angleXY);
    sin = Math.sin(angleXY);
    newX = x * cos - y * sin;
    newY = x * sin + y * cos;
    x = newX;
    y = newY;

    return { x, y, z, w };
  }

  private computeProjection(time: number): void {
    const angleXW = time * 0.4;
    const angleYW = time * 0.3;
    const angleZW = time * 0.2;
    const angleXY = time * 0.15;

    let minDepth = Infinity;
    let maxDepth = -Infinity;
    let maxRadius = 0;
    const depths: number[] = [];

    for (let i = 0; i < this.vertices.length; i++) {
      const r = this.rotate4D(this.vertices[i], angleXW, angleYW, angleZW, angleXY);
      const distance = 2.7;
      const scale = distance / (distance - r.w);
      this.projected[i].set(r.x * scale, r.y * scale, r.z * scale);
      this.tmpVec.copy(this.projected[i]).applyQuaternion(this.rotationQuat);
      maxRadius = Math.max(maxRadius, Math.hypot(this.tmpVec.x, this.tmpVec.y));

      const depth = CAMERA_Z - this.projected[i].z * this.groupScale;
      depths.push(depth);
      if (depth < minDepth) minDepth = depth;
      if (depth > maxDepth) maxDepth = depth;
    }

    const range = Math.max(maxDepth - minDepth, 1e-3);
    for (let i = 0; i < depths.length; i++) {
      this.depthFactor[i] = (maxDepth - depths[i]) / range;
    }

    this.projectedRadius = maxRadius;
  }

  private createGeometry(): void {
    const { width, height } = this.container.getBoundingClientRect();
    const resolution = new THREE.Vector2(width, height);

    this.geometry = new LineSegmentsGeometry();
    this.geometry.setPositions(this.buildPositions(this.edgeIndices));
    this.geometry.setColors(this.buildColors(this.edgeIndices, EDGE_FLOOR, EDGE_MID_FADE));

    this.chordGeometry = new LineSegmentsGeometry();
    this.chordGeometry.setPositions(this.buildPositions(this.chordIndices));
    this.chordGeometry.setColors(this.buildColors(this.chordIndices, CHORD_FLOOR, CHORD_MID_FADE));

    this.glowMaterial = new LineMaterial({
      color: 0x9fd4ff,
      linewidth: 3.5,
      transparent: true,
      opacity: 0.07,
      resolution,
    });
    this.glowMaterial.vertexColors = true;
    this.glowMaterial.blending = THREE.AdditiveBlending;
    this.glowMaterial.depthWrite = false;
    this.glowMaterial.depthTest = false;

    this.coreMaterial = new TesseractLineMaterial({
      color: 0xdff2ff,
      linewidth: 2.0,
      transparent: true,
      opacity: 0.95,
      resolution,
    });
    this.coreMaterial.vertexColors = true;
    this.coreMaterial.blending = THREE.AdditiveBlending;
    this.coreMaterial.depthWrite = false;
    this.coreMaterial.depthTest = false;
    this.coreMaterial.minWidth = 0.55;
    this.coreMaterial.maxWidth = 3.0;
    this.coreMaterial.nearDist = 4.0;
    this.coreMaterial.farDist = 6.1;
    this.coreMaterial.minAlpha = 0.32;

    this.chordMaterial = new TesseractLineMaterial({
      color: 0xa8dcff,
      linewidth: 0.8,
      transparent: true,
      opacity: 0.6,
      resolution,
    });
    this.chordMaterial.vertexColors = true;
    this.chordMaterial.blending = THREE.AdditiveBlending;
    this.chordMaterial.depthWrite = false;
    this.chordMaterial.depthTest = false;
    this.chordMaterial.minWidth = 0.35;
    this.chordMaterial.maxWidth = 1.4;
    this.chordMaterial.nearDist = 4.0;
    this.chordMaterial.farDist = 6.1;
    this.chordMaterial.minAlpha = 0.3;

    this.glowLines = new Line2(this.geometry, this.glowMaterial);
    this.chordLines = new Line2(this.chordGeometry, this.chordMaterial);
    this.coreLines = new Line2(this.geometry, this.coreMaterial);
    this.tesseract.add(this.glowLines);
    this.tesseract.add(this.chordLines);
    this.tesseract.add(this.coreLines);
  }

  private createNodes(): void {
    this.nodeGeometry = new THREE.BufferGeometry();
    this.nodeGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(this.vertices.length * 3), 3)
    );
    this.nodeGeometry.setAttribute(
      'aDepth',
      new THREE.BufferAttribute(new Float32Array(this.vertices.length), 1)
    );

    this.nodeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xffffff) },
        uSpikeColor: { value: new THREE.Color(0x9fd8ff) },
        uOpacity: { value: 1.0 },
        uSpike: { value: 0.75 },
        uSize: { value: NODE_SIZE },
        uScale: { value: this.pointScale() },
        uMinScale: { value: 0.45 },
        uMaxScale: { value: 1.8 },
        uMinBright: { value: 0.45 },
      },
      vertexShader: StarPointShader.vertexShader,
      fragmentShader: StarPointShader.fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });

    this.haloTexture = this.createHaloTexture();
    this.haloMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: this.haloTexture },
        uColor: { value: new THREE.Color(0x7cc6ff) },
        uOpacity: { value: 0.28 },
        uSize: { value: HALO_SIZE },
        uScale: { value: this.pointScale() },
        uMinScale: { value: 0.35 },
        uMaxScale: { value: 1.9 },
        uMinBright: { value: 0.2 },
      },
      vertexShader: StarPointShader.vertexShader,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vBright;
        void main() {
          vec4 tex = texture2D(uTexture, gl_PointCoord);
          gl_FragColor = vec4(uColor * vBright, tex.a * vBright * uOpacity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
    });

    this.halos = new THREE.Points(this.nodeGeometry, this.haloMaterial);
    this.halos.renderOrder = -1;
    this.nodes = new THREE.Points(this.nodeGeometry, this.nodeMaterial);
    this.updateNodes();
    this.tesseract.add(this.halos);
    this.tesseract.add(this.nodes);
  }

  private pointScale(): number {
    return this.renderer.domElement.height * 0.5;
  }

  private createHaloTexture(): THREE.Texture {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,0.55)');
    gradient.addColorStop(0.12, 'rgba(255,255,255,0.30)');
    gradient.addColorStop(0.35, 'rgba(255,255,255,0.10)');
    gradient.addColorStop(0.7, 'rgba(255,255,255,0.02)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private buildPositions(links: Link[]): number[] {
    const positions: number[] = [];
    for (const { a, b } of links) {
      const pa = this.projected[a];
      const pb = this.projected[b];
      const mx = (pa.x + pb.x) * 0.5;
      const my = (pa.y + pb.y) * 0.5;
      const mz = (pa.z + pb.z) * 0.5;
      positions.push(pa.x, pa.y, pa.z, mx, my, mz, mx, my, mz, pb.x, pb.y, pb.z);
    }
    return positions;
  }

  private edgeBrightness(df: number, floor: number): number {
    return floor + Math.pow(df, 1.6) * (1 - floor);
  }

  private buildColors(links: Link[], floor: number, midFade: number): number[] {
    const colors: number[] = [];
    for (const { a, b, w } of links) {
      const ba = this.edgeBrightness(this.depthFactor[a], floor) * w;
      const bb = this.edgeBrightness(this.depthFactor[b], floor) * w;
      const bm = (ba + bb) * 0.5 * midFade;
      colors.push(ba, ba, ba, bm, bm, bm, bm, bm, bm, bb, bb, bb);
    }
    return colors;
  }

  private createFacets(): void {
    const count = this.faceIndices.length * 6;
    this.facetGeometry = new THREE.BufferGeometry();
    this.facetGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    this.facetGeometry.setAttribute('aDepth', new THREE.BufferAttribute(new Float32Array(count), 1));
    this.facetGeometry.setAttribute('aNormal', new THREE.BufferAttribute(new Float32Array(count * 3), 3));

    const quad = new Float32Array(count * 2);
    const corners = [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
    ];
    const order = [0, 1, 2, 0, 2, 3];
    for (let f = 0; f < this.faceIndices.length; f++) {
      for (let k = 0; k < 6; k++) {
        const c = corners[order[k]];
        quad[(f * 6 + k) * 2] = c[0];
        quad[(f * 6 + k) * 2 + 1] = c[1];
      }
    }
    this.facetGeometry.setAttribute('aQuad', new THREE.BufferAttribute(quad, 2));

    this.facetMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uScene: { value: this.auroraTarget.texture },
        uResolution: { value: this.renderer.getDrawingBufferSize(new THREE.Vector2()) },
        uTint: { value: new THREE.Color(0xbcd8ff) },
        uRimColor: { value: new THREE.Color(0xdcf1ff) },
        uRefract: { value: 0.12 },
        uReflect: { value: 0.50 },
        uIorR: { value: 1.16 },
        uIorG: { value: 1.21 },
        uIorB: { value: 1.27 },
        uOpacity: { value: 0.20 },
      },
      vertexShader: CrystalGlassShader.vertexShader,
      fragmentShader: CrystalGlassShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      side: THREE.DoubleSide,
    });

    this.facets = new THREE.Mesh(this.facetGeometry, this.facetMaterial);
    this.facets.renderOrder = -1;
    this.updateFacets();
    this.tesseract.add(this.facets);
  }

  private updateFacets(): void {
    const pos = this.facetGeometry.getAttribute('position') as THREE.BufferAttribute;
    const dep = this.facetGeometry.getAttribute('aDepth') as THREE.BufferAttribute;
    const nrm = this.facetGeometry.getAttribute('aNormal') as THREE.BufferAttribute;
    const order = [0, 1, 2, 0, 2, 3];

    for (let f = 0; f < this.faceIndices.length; f++) {
      const face = this.faceIndices[f];
      const p0 = this.projected[face[0]];
      const p1 = this.projected[face[1]];
      const p3 = this.projected[face[3]];

      this.edgeA.subVectors(p1, p0);
      this.edgeB.subVectors(p3, p0);
      this.faceNormal.crossVectors(this.edgeA, this.edgeB);
      if (this.faceNormal.lengthSq() > 1e-10) {
        this.faceNormal.normalize();
      } else {
        this.faceNormal.set(0, 0, 1);
      }

      for (let k = 0; k < 6; k++) {
        const index = f * 6 + k;
        const vertexIndex = face[order[k]];
        const p = this.projected[vertexIndex];
        pos.setXYZ(index, p.x, p.y, p.z);
        dep.setX(index, this.depthFactor[vertexIndex]);
        nrm.setXYZ(index, this.faceNormal.x, this.faceNormal.y, this.faceNormal.z);
      }
    }

    pos.needsUpdate = true;
    dep.needsUpdate = true;
    nrm.needsUpdate = true;
  }

  private updateNodes(): void {
    const pos = this.nodeGeometry.getAttribute('position') as THREE.BufferAttribute;
    const dep = this.nodeGeometry.getAttribute('aDepth') as THREE.BufferAttribute;
    for (let i = 0; i < this.projected.length; i++) {
      pos.setXYZ(i, this.projected[i].x, this.projected[i].y, this.projected[i].z);
      dep.setX(i, this.depthFactor[i]);
    }
    pos.needsUpdate = true;
    dep.needsUpdate = true;
  }

  protected handleResize(): void {
    super.handleResize();
    const { width, height } = this.container.getBoundingClientRect();
    this.coreMaterial?.resolution.set(width, height);
    this.glowMaterial?.resolution.set(width, height);
    this.chordMaterial?.resolution.set(width, height);
    if (this.nodeMaterial) {
      this.nodeMaterial.uniforms.uScale.value = this.pointScale();
      this.haloMaterial.uniforms.uScale.value = this.pointScale();
    }
    if (this.auroraTarget) this.syncResolution();
    if (this.tesseract) this.layout();
  }

  update(time: number): void {
    if (!this.tesseract) return;

    this.tilt.x += (this.pointer.y * 0.22 - this.tilt.x) * 0.05;
    this.tilt.y += (this.pointer.x * 0.28 - this.tilt.y) * 0.05;
    this.tesseract.rotation.set(
      BASE_ROTATION.x + this.tilt.x,
      BASE_ROTATION.y + this.tilt.y,
      BASE_ROTATION.z
    );
    this.rotationQuat.setFromEuler(this.tesseract.rotation);

    this.computeProjection(time);
    this.geometry.setPositions(this.buildPositions(this.edgeIndices));
    this.geometry.setColors(this.buildColors(this.edgeIndices, EDGE_FLOOR, EDGE_MID_FADE));
    this.chordGeometry.setPositions(this.buildPositions(this.chordIndices));
    this.chordGeometry.setColors(this.buildColors(this.chordIndices, CHORD_FLOOR, CHORD_MID_FADE));
    this.updateFacets();
    this.updateNodes();

    const desiredFit = REFERENCE_RADIUS / Math.max(this.projectedRadius, 1e-3);
    this.fitScale += (desiredFit - this.fitScale) * 0.06;
    this.tesseract.scale.setScalar(this.groupScale * this.fitScale);

    this.auroraMaterial.uniforms.uTime.value = time;
    this.auroraMaterial.uniforms.uParallax.value.set(this.tilt.y * -0.02, this.tilt.x * 0.02);
    this.renderAurora();
  }

  dispose(): void {
    super.dispose();
    window.removeEventListener('pointermove', this.onPointerMove);
    this.geometry?.dispose();
    this.chordGeometry?.dispose();
    this.facetGeometry?.dispose();
    this.facetMaterial?.dispose();
    this.nodeGeometry?.dispose();
    this.haloTexture?.dispose();
    this.auroraGeometry?.dispose();
    this.auroraMaterial?.dispose();
    this.backdropGeometry?.dispose();
    this.backdropMaterial?.dispose();
    this.auroraTarget?.dispose();
    (this.coreMaterial as THREE.Material)?.dispose();
    (this.glowMaterial as THREE.Material)?.dispose();
    (this.chordMaterial as THREE.Material)?.dispose();
    this.nodeMaterial?.dispose();
    this.haloMaterial?.dispose();
  }
}
