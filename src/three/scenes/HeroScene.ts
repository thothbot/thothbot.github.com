import * as THREE from 'three';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { BaseScene } from '../core/BaseScene';
import { TesseractLineMaterial } from '../shaders/TesseractShader';

interface Vertex4D {
  x: number;
  y: number;
  z: number;
  w: number;
}

export default class HeroScene extends BaseScene {
  private tesseract!: THREE.Group;
  private lines!: Line2;
  private vertices: Vertex4D[] = [];
  private edgeIndices: [number, number][] = [];
  private material!: TesseractLineMaterial;
  private geometry!: LineSegmentsGeometry;

  setup(): void {
    this.camera.position.z = 5;

    this.renderer.setClearColor(0x000000, 0);
    this.scene.background = null;

    this.tesseract = new THREE.Group();
    this.tesseract.scale.setScalar(0.6);
    this.scene.add(this.tesseract);

    this.initVertices();
    this.initEdges();
    this.createGeometry();
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

  private project4Dto3D(v: Vertex4D): THREE.Vector3 {
    const distance = 2.5;
    const scale = distance / (distance - v.w);
    return new THREE.Vector3(v.x * scale, v.y * scale, v.z * scale);
  }

  private createGeometry(): void {
    const { width, height } = this.container.getBoundingClientRect();

    this.geometry = new LineSegmentsGeometry();

    const initialPositions = this.getInitialPositions();
    this.geometry.setPositions(initialPositions);

    this.material = new TesseractLineMaterial({
      color: 0xffffff,
      linewidth: 3,
      transparent: true,
      opacity: 0.9,
      resolution: new THREE.Vector2(width, height),
    });

    this.lines = new Line2(this.geometry, this.material);
    this.lines.computeLineDistances();
    this.tesseract.add(this.lines);
  }

  private getInitialPositions(): number[] {
    const positions: number[] = [];
    for (const [a, b] of this.edgeIndices) {
      const projA = this.project4Dto3D(this.vertices[a]);
      const projB = this.project4Dto3D(this.vertices[b]);
      positions.push(projA.x, projA.y, projA.z);
      positions.push(projB.x, projB.y, projB.z);
    }
    return positions;
  }

  protected handleResize(): void {
    super.handleResize();

    const { width, height } = this.container.getBoundingClientRect();

    if (this.material) {
      this.material.resolution.set(width, height);
    }
  }

  update(time: number): void {
    if (!this.tesseract) return;

    const angleXW = time * 0.4;
    const angleYW = time * 0.3;
    const angleZW = time * 0.2;
    const angleXY = time * 0.15;

    const positions: number[] = [];

    for (const [a, b] of this.edgeIndices) {
      const rotatedA = this.rotate4D(this.vertices[a], angleXW, angleYW, angleZW, angleXY);
      const rotatedB = this.rotate4D(this.vertices[b], angleXW, angleYW, angleZW, angleXY);
      const projA = this.project4Dto3D(rotatedA);
      const projB = this.project4Dto3D(rotatedB);

      positions.push(projA.x, projA.y, projA.z);
      positions.push(projB.x, projB.y, projB.z);
    }

    this.geometry.setPositions(positions);
    this.lines.computeLineDistances();
  }

  dispose(): void {
    super.dispose();
    this.geometry?.dispose();
    (this.material as THREE.Material)?.dispose();
  }
}
