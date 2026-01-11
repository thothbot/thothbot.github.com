import { lazyLoader } from '../three/core/LazyLoader';

const sceneConfigs = [
  {
    sectionId: 'hero',
    canvasId: 'hero-canvas',
    loader: () => import('../three/scenes/HeroScene'),
  },
  {
    sectionId: 'geneease',
    canvasId: 'geneease-canvas',
    loader: () => import('../three/scenes/DNAScene'),
  },
  {
    sectionId: 'orbesg',
    canvasId: 'orbesg-canvas',
    loader: () => import('../three/scenes/EuropeMapScene'),
  },
  {
    sectionId: 'parallax',
    canvasId: 'parallax-canvas',
    loader: () => import('../three/scenes/TerrainScene'),
  },
];

export function initScenes(): void {
  sceneConfigs.forEach(({ sectionId, canvasId, loader }) => {
    lazyLoader.register({
      containerId: sectionId,
      canvasId,
      factory: async (container) => {
        const module = await loader();
        const SceneClass = module.default;
        return new SceneClass(container);
      },
    });
  });
}
