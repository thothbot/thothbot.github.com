import * as THREE from 'three';

export abstract class BaseScene {
  protected scene: THREE.Scene;
  protected camera: THREE.PerspectiveCamera;
  protected renderer: THREE.WebGLRenderer;
  protected container: HTMLElement;
  protected animationId: number | null = null;
  protected isActive = false;

  constructor(container: HTMLElement) {
    this.container = container;
    this.scene = new THREE.Scene();

    const { width, height } = container.getBoundingClientRect();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  protected handleResize(): void {
    const { width, height } = this.container.getBoundingClientRect();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  abstract setup(): void | Promise<void>;
  abstract update(time: number): void;

  start(): void {
    if (this.isActive) return;
    this.isActive = true;
    this.animate();
  }

  stop(): void {
    this.isActive = false;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private animate(): void {
    if (!this.isActive) return;

    this.animationId = requestAnimationFrame(() => this.animate());
    this.update(performance.now() * 0.001);
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.stop();
    this.renderer.dispose();
    window.removeEventListener('resize', this.handleResize.bind(this));
    this.container.removeChild(this.renderer.domElement);
  }
}
