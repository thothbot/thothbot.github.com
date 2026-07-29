import * as THREE from 'three';
import { BaseScene } from '../core/BaseScene';
import { GlobeSurfaceShader } from '../shaders/GlobeSurfaceShader';
import { GlobeCloudShader } from '../shaders/GlobeCloudShader';
import { GlobeAtmosphereShader } from '../shaders/GlobeAtmosphereShader';

type HazardKind = 'fire' | 'flood' | 'heat' | 'drought' | 'storm' | 'quake';

interface WorldEvent {
  name: string;
  hazard: string;
  score: number;
  lon: number;
  lat: number;
  kind: HazardKind;
}

interface Sweep {
  origin: THREE.Vector3;
  color: THREE.Color;
  start: number;
  duration: number;
  reach: number;
  active: boolean;
}

const HAZARD_COLORS: Record<HazardKind, number> = {
  fire: 0xff7a3c,
  flood: 0x4ec3ff,
  heat: 0xffc14d,
  drought: 0xffd694,
  storm: 0x7ce0ff,
  quake: 0xff6b7a,
};

// Ordered so consecutive entries sit on different continents: the readout walks
// the list, and a clustered list would keep it pinned to one region
const EVENTS: WorldEvent[] = [
  { name: 'Rotterdam', hazard: 'Coastal flood', score: 78, lon: 4.5, lat: 51.9, kind: 'flood' },
  { name: 'Khartoum', hazard: 'Extreme heat', score: 89, lon: 32.5, lat: 15.6, kind: 'heat' },
  { name: 'Reykjavik', hazard: 'Storm surge', score: 49, lon: -21.9, lat: 64.1, kind: 'storm' },
  { name: 'Basra', hazard: 'Extreme heat', score: 90, lon: 47.8, lat: 30.5, kind: 'heat' },
  { name: 'Seville', hazard: 'Drought', score: 81, lon: -6.0, lat: 37.4, kind: 'drought' },
  { name: 'Lagos', hazard: 'Coastal flood', score: 79, lon: 3.4, lat: 6.5, kind: 'flood' },
  { name: 'Salekhard', hazard: 'Permafrost thaw', score: 66, lon: 66.6, lat: 66.5, kind: 'storm' },
  { name: 'Athens', hazard: 'Wildfire', score: 86, lon: 23.7, lat: 38.0, kind: 'fire' },
  { name: 'Dakar', hazard: 'Coastal erosion', score: 66, lon: -17.4, lat: 14.7, kind: 'flood' },
  { name: 'Tehran', hazard: 'Water stress', score: 79, lon: 51.4, lat: 35.7, kind: 'drought' },
  { name: 'Nuuk', hazard: 'Ice sheet loss', score: 58, lon: -51.7, lat: 64.2, kind: 'storm' },
  { name: 'Milan', hazard: 'Heat stress', score: 64, lon: 9.2, lat: 45.5, kind: 'heat' },
  { name: 'Nairobi', hazard: 'Drought', score: 72, lon: 36.8, lat: -1.3, kind: 'drought' },
  { name: 'Alexandria', hazard: 'Sea-level rise', score: 85, lon: 29.9, lat: 31.2, kind: 'flood' },
  { name: "St. John's", hazard: 'Storm surge', score: 63, lon: -52.7, lat: 47.6, kind: 'storm' },
  { name: 'Kinshasa', hazard: 'River flood', score: 76, lon: 15.3, lat: -4.3, kind: 'flood' },
  { name: 'Istanbul', hazard: 'Seismic', score: 76, lon: 29.0, lat: 41.0, kind: 'quake' },
  { name: 'Bamako', hazard: 'Drought', score: 84, lon: -8.0, lat: 12.6, kind: 'drought' },
  { name: 'Tashkent', hazard: 'Heat stress', score: 73, lon: 69.2, lat: 41.3, kind: 'heat' },
  { name: 'Lisbon', hazard: 'Wildfire', score: 69, lon: -9.1, lat: 38.7, kind: 'fire' },
  { name: 'Antananarivo', hazard: 'Cyclone', score: 82, lon: 47.5, lat: -18.9, kind: 'storm' },
  { name: 'Boston', hazard: 'Coastal flood', score: 71, lon: -71.1, lat: 42.4, kind: 'flood' },
  { name: "N'Djamena", hazard: 'Drought', score: 87, lon: 15.0, lat: 12.1, kind: 'drought' },
  { name: 'Gdansk', hazard: 'Sea-level rise', score: 57, lon: 18.6, lat: 54.4, kind: 'flood' },
  { name: 'Karachi', hazard: 'Extreme heat', score: 88, lon: 67.0, lat: 24.9, kind: 'heat' },
  { name: 'Marrakesh', hazard: 'Water stress', score: 76, lon: -8.0, lat: 31.6, kind: 'drought' },
  { name: 'Longyearbyen', hazard: 'Ice loss', score: 61, lon: 15.6, lat: 78.2, kind: 'storm' },
  { name: 'Naples', hazard: 'Wildfire', score: 77, lon: 14.3, lat: 40.8, kind: 'fire' },
  { name: 'Mogadishu', hazard: 'Drought', score: 83, lon: 45.3, lat: 2.0, kind: 'drought' },
  { name: 'Ponta Delgada', hazard: 'Storm surge', score: 55, lon: -25.7, lat: 37.7, kind: 'storm' },
  { name: 'Odesa', hazard: 'Sea-level rise', score: 61, lon: 30.7, lat: 46.5, kind: 'flood' },
  { name: 'Luanda', hazard: 'Coastal flood', score: 68, lon: 13.2, lat: -8.8, kind: 'flood' },
  { name: 'Nukus', hazard: 'Water stress', score: 88, lon: 59.6, lat: 42.5, kind: 'drought' },
  { name: 'Bergen', hazard: 'Extreme rainfall', score: 53, lon: 5.3, lat: 60.4, kind: 'storm' },
  { name: 'Recife', hazard: 'Coastal flood', score: 74, lon: -34.9, lat: -8.1, kind: 'flood' },
  { name: 'Arkhangelsk', hazard: 'Permafrost thaw', score: 52, lon: 40.5, lat: 64.5, kind: 'storm' },
  { name: 'Valencia', hazard: 'Flash flood', score: 74, lon: -0.4, lat: 39.5, kind: 'flood' },
  { name: 'Addis Ababa', hazard: 'Drought', score: 70, lon: 38.7, lat: 9.0, kind: 'drought' },
];

// Slot 0 carries the site currently under analysis, the rest are ambient traffic
const EVENT_SLOTS = 6;
const SWEEP_DURATION = 8.4;
// One full sweep per site: the readout moves on exactly when the sweep hits zero,
// so nothing is ever cut off mid-animation
const FEATURE_DWELL = SWEEP_DURATION;
const AMBIENT_INTERVAL = 2.3;
// The camera sees down to dot 0.28 at this distance, so this reaches almost the limb
const FACING_SPAWN = 0.30;
// Roughly 18 degrees of arc: keeps concurrent sweeps from piling into one region
const MIN_SEPARATION = Math.cos(0.32);

const GLOBE_RADIUS = 1;
const CLOUD_RADIUS = 1.006;
const CLOUD_DRIFT = 0.0016;
const CLOUD_SPIN = 0.012;
const ATMOSPHERE_RADIUS = 1.055;
// Key light kept close to the camera axis so Europe stays readable
const SUN_DIRECTION = new THREE.Vector3(0.28, 0.30, 0.92).normalize();
const VIEW_LON = 14;
const VIEW_LAT = 46;
const BASE_ROTATION_Y = THREE.MathUtils.degToRad(-(90 + VIEW_LON));
const BASE_ROTATION_X = THREE.MathUtils.degToRad(VIEW_LAT * 0.82);

function scoreColor(score: number): THREE.Color {
  if (score >= 78) return new THREE.Color(0xff6b52);
  if (score >= 62) return new THREE.Color(0xffb648);
  return new THREE.Color(0x4ddbc4);
}

// Same parametrisation as SphereGeometry, so events land exactly on the texture
function lonLatToDirection(lon: number, lat: number): THREE.Vector3 {
  const phi = THREE.MathUtils.degToRad(lon + 180);
  const theta = THREE.MathUtils.degToRad(90 - lat);
  return new THREE.Vector3(
    -Math.cos(phi) * Math.sin(theta),
    Math.cos(theta),
    Math.sin(phi) * Math.sin(theta)
  );
}

export default class GlobeScene extends BaseScene {
  private globeGroup!: THREE.Group;
  private surface!: THREE.Mesh;
  private clouds!: THREE.Mesh;
  private atmosphere!: THREE.Mesh;

  private surfaceMaterial!: THREE.ShaderMaterial;
  private cloudMaterial!: THREE.ShaderMaterial;
  private atmosphereMaterial!: THREE.ShaderMaterial;

  private eventDirections: THREE.Vector3[] = EVENTS.map((event) =>
    lonLatToDirection(event.lon, event.lat)
  );
  private sweeps: Sweep[] = Array.from({ length: EVENT_SLOTS }, () => ({
    origin: new THREE.Vector3(0, 1, 0),
    color: new THREE.Color(0xffffff),
    start: 0,
    duration: SWEEP_DURATION,
    reach: 0.16,
    active: false,
  }));
  private ambientIndices: number[] = new Array(EVENT_SLOTS).fill(-1);
  private featureIndex = 0;
  private nextFeature = 0;
  private nextAmbient = 0.6;
  private featureStrength = 0;
  private cameraDir = new THREE.Vector3(0, 0, 1);

  private timer = new THREE.Timer();
  private textures: THREE.Texture[] = [];

  private pointer = new THREE.Vector2(0, 0);
  private tilt = new THREE.Vector2(0, 0);
  private onPointerMove = (event: PointerEvent): void => {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  };

  async setup(): Promise<void> {
    this.setupCamera();
    await this.loadTextures();
    this.createGlobe();

    window.addEventListener('pointermove', this.onPointerMove);
  }

  private setupCamera(): void {
    this.camera.fov = 34;
    this.camera.near = 0.01;
    this.camera.far = 100;
    this.camera.lookAt(0, 0, 0);
    this.applyFraming();
  }

  private applyFraming(): void {
    const compact = window.innerWidth < 768;
    this.camera.position.set(0, 0, compact ? 4.6 : 3.55);
    this.camera.updateProjectionMatrix();

    if (this.globeGroup) {
      this.globeGroup.position.set(compact ? 0 : 0.2, compact ? 0 : -0.12, 0);
    }
  }

  private loadTexture(loader: THREE.TextureLoader, url: string, srgb: boolean): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (texture) => {
          texture.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
          texture.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
          texture.wrapS = THREE.RepeatWrapping;
          this.textures.push(texture);
          resolve(texture);
        },
        undefined,
        reject
      );
    });
  }

  private surfaceTexture!: THREE.Texture;
  private oceanTexture!: THREE.Texture;
  private cloudTexture!: THREE.Texture;

  private async loadTextures(): Promise<void> {
    const loader = new THREE.TextureLoader();
    const [surface, ocean, clouds] = await Promise.all([
      this.loadTexture(loader, '/assets/textures/planets/earth_atmos_2048.webp', true),
      this.loadTexture(loader, '/assets/textures/planets/earth_specular_2048.webp', false),
      this.loadTexture(loader, '/assets/textures/planets/earth_clouds_1024.webp', true),
    ]);

    this.surfaceTexture = surface;
    this.oceanTexture = ocean;
    this.cloudTexture = clouds;
  }

  private createGlobe(): void {
    this.globeGroup = new THREE.Group();

    this.surfaceMaterial = new THREE.ShaderMaterial({
      vertexShader: GlobeSurfaceShader.vertexShader,
      fragmentShader: GlobeSurfaceShader.fragmentShader,
      uniforms: {
        uSurface: { value: this.surfaceTexture },
        uOceanMask: { value: this.oceanTexture },
        uTime: { value: 0 },
        uSunDirection: { value: SUN_DIRECTION.clone() },
        uLandTint: { value: new THREE.Color(0xfff0dc) },
        uOceanDeep: { value: new THREE.Color(0x10437f) },
        uOceanShallow: { value: new THREE.Color(0x3f9ad4) },
        uCameraDir: { value: new THREE.Vector3(0, 0, 1) },
        uFeature: { value: new THREE.Vector4(0, 1, 0, 0) },
        uFeatureColor: { value: new THREE.Color(0xffb648) },
        uClouds: { value: this.cloudTexture },
        uCloudDrift: { value: CLOUD_DRIFT },
        uCloudSpin: { value: 0 },
        uEvents: {
          value: Array.from({ length: EVENT_SLOTS }, () => new THREE.Vector4(0, 1, 0, -1)),
        },
        uEventColors: {
          value: Array.from({ length: EVENT_SLOTS }, () => new THREE.Vector4(1, 1, 1, 0.16)),
        },
      },
      glslVersion: THREE.GLSL3,
    });

    this.surface = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_RADIUS, 96, 64), this.surfaceMaterial);
    this.globeGroup.add(this.surface);

    this.cloudMaterial = new THREE.ShaderMaterial({
      vertexShader: GlobeCloudShader.vertexShader,
      fragmentShader: GlobeCloudShader.fragmentShader,
      uniforms: {
        uClouds: { value: this.cloudTexture },
        uTime: { value: 0 },
        uDrift: { value: CLOUD_DRIFT },
        uOpacity: { value: 0.72 },
        uSunDirection: { value: SUN_DIRECTION.clone() },
        uCloudTint: { value: new THREE.Color(0xf1f6ff) },
        // Shared with the surface, so the deck lights up over the same events
        uEvents: this.surfaceMaterial.uniforms.uEvents,
        uEventColors: this.surfaceMaterial.uniforms.uEventColors,
        uCameraDir: this.surfaceMaterial.uniforms.uCameraDir,
      },
      transparent: true,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });

    this.clouds = new THREE.Mesh(new THREE.SphereGeometry(CLOUD_RADIUS, 72, 48), this.cloudMaterial);
    this.clouds.renderOrder = 1;
    this.globeGroup.add(this.clouds);

    this.atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: GlobeAtmosphereShader.vertexShader,
      fragmentShader: GlobeAtmosphereShader.fragmentShader,
      uniforms: {
        uColor: { value: new THREE.Color(0x4d9bff) },
        uSunDirection: { value: SUN_DIRECTION.clone() },
        uIntensity: { value: 1.35 },
      },
      transparent: true,
      side: THREE.BackSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      glslVersion: THREE.GLSL3,
    });

    this.atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(ATMOSPHERE_RADIUS, 64, 40),
      this.atmosphereMaterial
    );
    this.atmosphere.renderOrder = 2;
    this.globeGroup.add(this.atmosphere);

    // Bring Europe to the front and push the globe into the right half of the section
    this.globeGroup.rotation.y = BASE_ROTATION_Y;
    this.globeGroup.rotation.x = BASE_ROTATION_X;
    this.applyFraming();

    this.scene.add(this.globeGroup);
  }

  // --- events ---------------------------------------------------------------

  private isFacing(index: number, threshold: number): boolean {
    return this.eventDirections[index].dot(this.cameraDir) > threshold;
  }

  private launchSweep(slot: number, index: number, elapsed: number, featured: boolean): void {
    const event = EVENTS[index];
    const sweep = this.sweeps[slot];

    sweep.origin.copy(this.eventDirections[index]);
    sweep.color.setHex(HAZARD_COLORS[event.kind]);
    sweep.start = elapsed;
    sweep.duration = SWEEP_DURATION;
    // Severity reads as reach, so the worst sites paint the widest sweep
    sweep.reach = (0.13 + (event.score / 100) * 0.09) * (featured ? 1.3 : 1.0);
    sweep.active = true;
  }

  private advanceFeature(elapsed: number): void {
    if (elapsed >= this.nextFeature) {
      // Step to the next site that is actually in view, keep the current one otherwise
      for (let step = 1; step <= EVENTS.length; step++) {
        const candidate = (this.featureIndex + step) % EVENTS.length;
        if (this.isFacing(candidate, FACING_SPAWN)) {
          this.featureIndex = candidate;
          break;
        }
      }

      this.nextFeature = elapsed + FEATURE_DWELL;
      (this.surfaceMaterial.uniforms.uFeatureColor.value as THREE.Color).copy(
        scoreColor(EVENTS[this.featureIndex].score)
      );
      this.launchSweep(0, this.featureIndex, elapsed, true);
    }

    // Marker rises and settles back inside the dwell, so it is already at zero by
    // the time the readout jumps to the next site
    const phase = 1 - (this.nextFeature - elapsed) / FEATURE_DWELL;
    this.featureStrength =
      THREE.MathUtils.smoothstep(phase, 0, 0.12) * (1 - THREE.MathUtils.smoothstep(phase, 0.86, 1));

    const feature = this.surfaceMaterial.uniforms.uFeature.value as THREE.Vector4;
    const direction = this.eventDirections[this.featureIndex];
    feature.set(direction.x, direction.y, direction.z, this.featureStrength);
  }

  private spawnAmbient(elapsed: number): void {
    if (elapsed < this.nextAmbient) return;
    this.nextAmbient = elapsed + AMBIENT_INTERVAL;

    const busy = new Set(this.ambientIndices);
    busy.add(this.featureIndex);

    // Everything already painting: a new sweep has to keep its distance from these
    const taken: THREE.Vector3[] = [this.eventDirections[this.featureIndex]];
    for (let i = 1; i < EVENT_SLOTS; i++) {
      if (this.sweeps[i].active) taken.push(this.sweeps[i].origin);
    }

    const candidates: number[] = [];
    for (let i = 0; i < EVENTS.length; i++) {
      if (busy.has(i) || !this.isFacing(i, FACING_SPAWN)) continue;

      const direction = this.eventDirections[i];
      if (taken.some((origin) => direction.dot(origin) > MIN_SEPARATION)) continue;

      candidates.push(i);
    }
    if (candidates.length === 0) return;

    // Only a slot that has already faded all the way out may be reused, so a live
    // sweep is never overwritten and cut short
    const slot = this.sweeps.findIndex((sweep, i) => i > 0 && !sweep.active);
    if (slot < 0) return;

    const index = candidates[Math.floor(Math.random() * candidates.length)];
    this.ambientIndices[slot] = index;
    this.launchSweep(slot, index, elapsed, false);
  }

  // Retire finished sweeps before anything is scheduled, so freed slots are
  // available to the same frame that needs them
  private expireSweeps(elapsed: number): void {
    const events = this.surfaceMaterial.uniforms.uEvents.value as THREE.Vector4[];

    this.sweeps.forEach((sweep, i) => {
      if (!sweep.active) return;
      if (elapsed - sweep.start < sweep.duration) return;

      sweep.active = false;
      events[i].w = -1;
      if (i > 0) this.ambientIndices[i] = -1;
    });
  }

  private writeEventUniforms(elapsed: number): void {
    const events = this.surfaceMaterial.uniforms.uEvents.value as THREE.Vector4[];
    const colors = this.surfaceMaterial.uniforms.uEventColors.value as THREE.Vector4[];

    this.sweeps.forEach((sweep, i) => {
      if (!sweep.active) {
        events[i].w = -1;
        return;
      }

      const progress = (elapsed - sweep.start) / sweep.duration;
      events[i].set(sweep.origin.x, sweep.origin.y, sweep.origin.z, progress);
      colors[i].set(sweep.color.r, sweep.color.g, sweep.color.b, sweep.reach);
    });
  }

  protected handleResize(): void {
    super.handleResize();
    const { width, height } = this.container.getBoundingClientRect();
    this.applyFraming();
  }

  update(_time: number): void {
    this.timer.update();
    const elapsed = this.timer.getElapsed();

    if (!this.surfaceMaterial) return;

    this.surfaceMaterial.uniforms.uTime.value = elapsed;
    this.cloudMaterial.uniforms.uTime.value = elapsed;

    this.tilt.x += (this.pointer.y * 0.06 - this.tilt.x) * 0.04;
    this.tilt.y += (this.pointer.x * 0.10 - this.tilt.y) * 0.04;

    this.globeGroup.rotation.x = BASE_ROTATION_X + this.tilt.x;
    this.globeGroup.rotation.y = BASE_ROTATION_Y + this.tilt.y + elapsed * 0.006;
    this.clouds.rotation.y = elapsed * CLOUD_SPIN;
    // Same spin expressed in uv, so the surface can undo it when it samples the deck
    this.surfaceMaterial.uniforms.uCloudSpin.value = this.clouds.rotation.y / (Math.PI * 2);
    this.globeGroup.updateMatrixWorld(true);

    // Which way the camera looks, in the globe's own frame: everything the event
    // scheduler needs to know about what is currently on the visible hemisphere
    this.cameraDir.copy(this.camera.position);
    this.globeGroup.worldToLocal(this.cameraDir);
    this.cameraDir.normalize();
    (this.surfaceMaterial.uniforms.uCameraDir.value as THREE.Vector3).copy(this.cameraDir);

    this.expireSweeps(elapsed);
    this.advanceFeature(elapsed);
    this.spawnAmbient(elapsed);
    this.writeEventUniforms(elapsed);
  }

  dispose(): void {
    super.dispose();
    window.removeEventListener('pointermove', this.onPointerMove);
    this.surfaceMaterial?.dispose();
    this.cloudMaterial?.dispose();
    this.atmosphereMaterial?.dispose();
    this.surface?.geometry.dispose();
    this.clouds?.geometry.dispose();
    this.atmosphere?.geometry.dispose();
    this.textures.forEach((texture) => texture.dispose());
  }
}
