import * as THREE from 'three';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { BaseScene } from '../core/BaseScene';
import { TesseractLineMaterial } from '../shaders/TesseractShader';

interface Vertex4D {
  x: number;
  y: number;
  z: number;
  w: number;
}

const CAMERA_Z = 5;
const GROUP_SCALE = 0.6;
const EDGE_FLOOR = 0.5;

export default class HeroScene extends BaseScene {
  private tesseract!: THREE.Group;
  private coreLines!: Line2;
  private glowLines!: Line2;
  private nodes!: THREE.Points;
  private vertices: Vertex4D[] = [];
  private edgeIndices: [number, number][] = [];
  private projected: THREE.Vector3[] = [];
  private depthFactor: number[] = [];
  private coreMaterial!: TesseractLineMaterial;
  private glowMaterial!: LineMaterial;
  private nodeMaterial!: THREE.ShaderMaterial;
  private nodeTexture!: THREE.Texture;
  private geometry!: LineSegmentsGeometry;
  private nodeGeometry!: THREE.BufferGeometry;

  private pointer = new THREE.Vector2(0, 0);
  private tilt = new THREE.Vector2(0, 0);
  private onPointerMove = (e: PointerEvent): void => {
    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  setup(): void {
    this.camera.position.z = CAMERA_Z;
    this.renderer.setClearColor(0x000000, 0);
    this.scene.background = null;

    this.tesseract = new THREE.Group();
    this.tesseract.scale.setScalar(GROUP_SCALE);
    this.scene.add(this.tesseract);

    this.initVertices();
    this.initEdges();
    for (let i = 0; i < this.vertices.length; i++) {
      this.projected.push(new THREE.Vector3());
      this.depthFactor.push(1);
    }

    this.computeProjection(0);
    this.createGeometry();
    this.createNodes();

    window.addEventListener('pointermove', this.onPointerMove);
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
        if (diff === 1 || diff === 2 || diff === 4 || diff === 8) {
          this.edgeIndices.push([i, j]);
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
    const depths: number[] = [];

    for (let i = 0; i < this.vertices.length; i++) {
      const r = this.rotate4D(this.vertices[i], angleXW, angleYW, angleZW, angleXY);
      const distance = 2.5;
      const scale = distance / (distance - r.w);
      this.projected[i].set(r.x * scale, r.y * scale, r.z * scale);

      const depth = CAMERA_Z - this.projected[i].z * GROUP_SCALE;
      depths.push(depth);
      if (depth < minDepth) minDepth = depth;
      if (depth > maxDepth) maxDepth = depth;
    }

    const range = Math.max(maxDepth - minDepth, 1e-3);
    for (let i = 0; i < depths.length; i++) {
      this.depthFactor[i] = (maxDepth - depths[i]) / range;
    }
  }

  private createGeometry(): void {
    const { width, height } = this.container.getBoundingClientRect();
    const resolution = new THREE.Vector2(width, height);

    this.geometry = new LineSegmentsGeometry();
    this.geometry.setPositions(this.buildEdgePositions());
    this.geometry.setColors(this.buildEdgeColors());

    this.glowMaterial = new LineMaterial({
      color: 0xc3ccff,
      linewidth: 5,
      transparent: true,
      opacity: 0.06,
      resolution,
    });
    this.glowMaterial.vertexColors = true;
    this.glowMaterial.blending = THREE.AdditiveBlending;
    this.glowMaterial.depthWrite = false;
    this.glowMaterial.depthTest = false;

    this.coreMaterial = new TesseractLineMaterial({
      color: 0xffffff,
      linewidth: 3,
      transparent: true,
      opacity: 0.95,
      resolution,
    });
    this.coreMaterial.vertexColors = true;
    this.coreMaterial.minWidth = 0.6;
    this.coreMaterial.maxWidth = 6.0;
    this.coreMaterial.nearDist = 3.6;
    this.coreMaterial.farDist = 6.6;
    this.coreMaterial.minAlpha = 0.12;

    this.glowLines = new Line2(this.geometry, this.glowMaterial);
    this.coreLines = new Line2(this.geometry, this.coreMaterial);
    this.tesseract.add(this.glowLines);
    this.tesseract.add(this.coreLines);
  }

  private createNodes(): void {
    this.nodeTexture = this.createGlowTexture();
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
        uTexture: { value: this.nodeTexture },
        uColor: { value: new THREE.Color(0xe9e6ff) },
        uOpacity: { value: 0.95 },
        uSize: { value: 0.5 },
        uScale: { value: this.pointScale() },
        uMinScale: { value: 0.22 },
        uMaxScale: { value: 1.9 },
        uMinBright: { value: 0.12 },
      },
      vertexShader: `
        attribute float aDepth;
        uniform float uSize;
        uniform float uScale;
        uniform float uMinScale;
        uniform float uMaxScale;
        uniform float uMinBright;
        varying float vBright;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float s = uSize * mix(uMinScale, uMaxScale, aDepth);
          gl_PointSize = s * (uScale / -mv.z);
          vBright = mix(uMinBright, 1.0, pow(aDepth, 1.15));
          gl_Position = projectionMatrix * mv;
        }
      `,
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

    this.nodes = new THREE.Points(this.nodeGeometry, this.nodeMaterial);
    this.updateNodes();
    this.tesseract.add(this.nodes);
  }

  private pointScale(): number {
    return this.renderer.domElement.height * 0.5;
  }

  private createGlowTexture(): THREE.Texture {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.85)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.25)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  private buildEdgePositions(): number[] {
    const positions: number[] = [];
    for (const [a, b] of this.edgeIndices) {
      const pa = this.projected[a];
      const pb = this.projected[b];
      positions.push(pa.x, pa.y, pa.z, pb.x, pb.y, pb.z);
    }
    return positions;
  }

  private edgeBrightness(df: number): number {
    return EDGE_FLOOR + Math.pow(df, 1.6) * (1 - EDGE_FLOOR);
  }

  private buildEdgeColors(): number[] {
    const colors: number[] = [];
    for (const [a, b] of this.edgeIndices) {
      const ba = this.edgeBrightness(this.depthFactor[a]);
      const bb = this.edgeBrightness(this.depthFactor[b]);
      colors.push(ba, ba, ba, bb, bb, bb);
    }
    return colors;
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
    if (this.nodeMaterial) this.nodeMaterial.uniforms.uScale.value = this.pointScale();
  }

  update(time: number): void {
    if (!this.tesseract) return;

    this.computeProjection(time);
    this.geometry.setPositions(this.buildEdgePositions());
    this.geometry.setColors(this.buildEdgeColors());
    this.updateNodes();

    this.tilt.x += (this.pointer.y * 0.22 - this.tilt.x) * 0.05;
    this.tilt.y += (this.pointer.x * 0.28 - this.tilt.y) * 0.05;
    this.tesseract.rotation.x = this.tilt.x;
    this.tesseract.rotation.y = this.tilt.y;
  }

  dispose(): void {
    super.dispose();
    window.removeEventListener('pointermove', this.onPointerMove);
    this.geometry?.dispose();
    this.nodeGeometry?.dispose();
    this.nodeTexture?.dispose();
    (this.coreMaterial as THREE.Material)?.dispose();
    (this.glowMaterial as THREE.Material)?.dispose();
    this.nodeMaterial?.dispose();
  }
}
