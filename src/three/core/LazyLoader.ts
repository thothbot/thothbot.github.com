import type { BaseScene } from './BaseScene';

type SceneFactory = (container: HTMLElement) => Promise<BaseScene> | BaseScene;

interface LazySceneConfig {
  containerId: string;
  canvasId?: string;
  factory: SceneFactory;
}

export class LazyLoader {
  private scenes: Map<string, BaseScene> = new Map();
  private loading: Set<string> = new Set();
  private observer: IntersectionObserver;
  private configs: Map<string, LazySceneConfig> = new Map();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const scene = this.scenes.get(id);

          if (entry.isIntersecting) {
            if (!scene && !this.loading.has(id)) {
              this.loadScene(id);
            } else if (scene) {
              scene.start();
            }
          } else if (scene) {
            scene.stop();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );
  }

  register(config: LazySceneConfig): void {
    this.configs.set(config.containerId, config);
    const container = document.getElementById(config.containerId);
    if (container) {
      this.observer.observe(container);
    }
  }

  private async loadScene(id: string): Promise<void> {
    const config = this.configs.get(id);
    if (!config) return;

    const canvasId = config.canvasId || id;
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    this.loading.add(id);

    try {
      const scene = await config.factory(canvas);
      await scene.setup();
      scene.start();
      this.scenes.set(id, scene);
    } catch (error) {
      console.error(`Failed to load scene for ${id}:`, error);
    } finally {
      this.loading.delete(id);
    }
  }

  dispose(): void {
    this.observer.disconnect();
    this.scenes.forEach((scene) => scene.dispose());
    this.scenes.clear();
  }
}

export const lazyLoader = new LazyLoader();
