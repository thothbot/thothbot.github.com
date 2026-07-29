import * as THREE from 'three';

const REVEAL_MS = 600;

// These are full-bleed backdrops, so fragment cost scales with the whole viewport.
// Past roughly 1.75 the extra samples buy almost nothing on a backdrop while
// costing the square of the ratio in shading work.
const MAX_PIXEL_RATIO_DESKTOP = 1.75;
const MAX_PIXEL_RATIO_MOBILE = 1.25;
const MOBILE_BREAKPOINT = 768;

const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export abstract class BaseScene {
  protected scene: THREE.Scene;
  protected camera: THREE.PerspectiveCamera;
  protected renderer: THREE.WebGLRenderer;
  protected container: HTMLElement;
  protected animationId: number | null = null;
  protected isActive = false;
  private revealed = false;
  private wasRunning = false;
  private readonly onResize = (): void => this.handleResize();

  // Without preventDefault the browser will not attempt to give the context
  // back, and the canvas stays dead for the rest of the session. Four live
  // contexts on a phone make this a real possibility rather than a formality.
  private readonly onContextLost = (event: Event): void => {
    event.preventDefault();
    this.wasRunning = this.isActive;
    this.stop();
  };

  private readonly onContextRestored = (): void => {
    this.renderer.setPixelRatio(BaseScene.pixelRatio());
    this.handleResize();
    if (this.wasRunning) this.start();
  };

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
    this.renderer.setPixelRatio(BaseScene.pixelRatio());

    const canvas = this.renderer.domElement;
    // Held back until a warm-up frame has been drawn, so the scene fades in
    // instead of snapping on mid-way through its first compile
    canvas.style.opacity = '0';
    canvas.addEventListener('webglcontextlost', this.onContextLost);
    canvas.addEventListener('webglcontextrestored', this.onContextRestored);
    container.appendChild(canvas);

    window.addEventListener('resize', this.onResize);
  }

  protected static pixelRatio(): number {
    const cap =
      window.innerWidth < MOBILE_BREAKPOINT ? MAX_PIXEL_RATIO_MOBILE : MAX_PIXEL_RATIO_DESKTOP;
    return Math.min(window.devicePixelRatio, cap);
  }

  protected handleResize(): void {
    const { width, height } = this.container.getBoundingClientRect();
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  abstract setup(): void | Promise<void>;
  abstract update(time: number): void;

  // Scenes that post-process own the way their frame reaches the canvas. The
  // default writes the scene straight to the default framebuffer.
  protected render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  // Everything that would otherwise land on the first visible frame: program
  // linking, render target allocation, the first texture upload. compileAsync
  // covers the scene's own materials off the main thread where the driver
  // supports it; the warm-up frame catches what it cannot see, notably the
  // materials living inside post-processing passes.
  async warmUp(): Promise<void> {
    try {
      await this.renderer.compileAsync(this.scene, this.camera);
    } catch {
      // Best effort only. The warm-up frame below still does the work, just on
      // the main thread.
    }
    this.renderFrame();
  }

  reveal(): void {
    if (this.revealed) return;
    this.revealed = true;

    const canvas = this.renderer.domElement;
    if (prefersReducedMotion()) {
      canvas.style.opacity = '1';
      return;
    }

    canvas.style.transition = `opacity ${REVEAL_MS}ms ease-out`;
    requestAnimationFrame(() => {
      canvas.style.opacity = '1';
    });
  }

  start(): void {
    if (this.isActive) return;

    // The warm-up frame is already on screen. Someone who asked the system for
    // less motion gets that still image instead of a permanent animation loop.
    if (prefersReducedMotion()) return;

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

  private renderFrame(): void {
    this.update(performance.now() * 0.001);
    this.render();
  }

  private animate(): void {
    if (!this.isActive) return;

    this.animationId = requestAnimationFrame(() => this.animate());
    this.renderFrame();
  }

  dispose(): void {
    this.stop();
    const canvas = this.renderer.domElement;
    canvas.removeEventListener('webglcontextlost', this.onContextLost);
    canvas.removeEventListener('webglcontextrestored', this.onContextRestored);
    this.renderer.dispose();
    window.removeEventListener('resize', this.onResize);
    this.container.removeChild(canvas);
  }
}
