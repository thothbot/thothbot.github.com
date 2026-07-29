import type { BaseScene } from './BaseScene';

type SceneFactory = (container: HTMLElement) => Promise<BaseScene> | BaseScene;

interface LazySceneConfig {
  containerId: string;
  canvasId?: string;
  factory: SceneFactory;
}

// A full viewport of lead time. Fetching the chunk, decoding textures and
// linking twenty-odd shader programs does not fit in the 100px a section used
// to get, which is why scenes used to appear only once they were being looked at.
const PRELOAD_MARGIN = '100% 0px';

export class LazyLoader {
  private scenes: Map<string, BaseScene> = new Map();
  private loading: Set<string> = new Set();
  private visible: Set<string> = new Set();
  private configs: Map<string, LazySceneConfig> = new Map();

  private loadObserver: IntersectionObserver;
  private playObserver: IntersectionObserver;

  // Two scenes initialising at once would fight over the main thread and spend
  // the head start the wide margin just bought, so setups run one at a time.
  private queue: Promise<void> = Promise.resolve();

  constructor() {
    this.loadObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (!this.scenes.has(id) && !this.loading.has(id)) {
            this.enqueue(id);
          }
        });
      },
      { threshold: 0, rootMargin: PRELOAD_MARGIN }
    );

    // Kept separate and tight: with the preload margin on a single observer a
    // scene would keep rendering for a whole viewport after leaving the screen.
    this.playObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const scene = this.scenes.get(id);

          if (entry.isIntersecting) {
            this.visible.add(id);
            scene?.start();
          } else {
            this.visible.delete(id);
            scene?.stop();
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  register(config: LazySceneConfig): void {
    this.configs.set(config.containerId, config);
    const container = document.getElementById(config.containerId);
    if (container) {
      this.loadObserver.observe(container);
      this.playObserver.observe(container);
    }
  }

  private enqueue(id: string): void {
    this.loading.add(id);
    this.queue = this.queue.then(() => this.loadScene(id));
  }

  private async loadScene(id: string): Promise<void> {
    const config = this.configs.get(id);
    const canvas = config && document.getElementById(config.canvasId || id);
    if (!config || !canvas) {
      this.loading.delete(id);
      return;
    }

    try {
      const scene = await config.factory(canvas);
      await scene.setup();
      // Draws a frame while the canvas is still transparent, so the compile
      // stutter happens against an empty section rather than a visible one
      await scene.warmUp();

      this.scenes.set(id, scene);
      scene.reveal();

      // Whoever scrolled past while this was loading does not need frames for it
      if (this.visible.has(id)) scene.start();
    } catch (error) {
      console.error(`Failed to load scene for ${id}:`, error);
    } finally {
      this.loading.delete(id);
    }
  }

  dispose(): void {
    this.loadObserver.disconnect();
    this.playObserver.disconnect();
    this.scenes.forEach((scene) => scene.dispose());
    this.scenes.clear();
  }
}

export const lazyLoader = new LazyLoader();
