export const GlobeSurfaceShader = {
  vertexShader: /* glsl */ `
    out vec2 vUv;
    out vec3 vNormal;
    out vec3 vViewDir;
    out vec3 vObjectNormal;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vObjectNormal = normalize(position);

      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vViewDir = normalize(-mv.xyz);

      gl_Position = projectionMatrix * mv;
    }
  `,

  fragmentShader: /* glsl */ `
    #define EVENT_COUNT 6

    uniform sampler2D uSurface;
    uniform sampler2D uOceanMask;
    uniform float uTime;
    uniform vec3 uSunDirection;
    uniform vec3 uLandTint;
    uniform vec3 uOceanDeep;
    uniform vec3 uOceanShallow;

    // xyz: unit direction of the event, w: sweep progress (negative when idle)
    uniform vec4 uEvents[EVENT_COUNT];
    // rgb: hazard colour, a: angular radius the sweep reaches
    uniform vec4 uEventColors[EVENT_COUNT];
    uniform vec3 uCameraDir;

    // The site currently holding the readout: xyz direction, w fade-in
    uniform vec4 uFeature;
    uniform vec3 uFeatureColor;

    // The cloud deck as the surface sees it from below
    uniform sampler2D uClouds;
    uniform float uCloudDrift;
    uniform float uCloudSpin;

    in vec2 vUv;
    in vec3 vNormal;
    in vec3 vViewDir;
    in vec3 vObjectNormal;

    out vec4 fragColor;

    // Graticule revealed by a sweep: meridians and parallels of the map itself
    float graticule(vec2 uv, float scale) {
      vec2 cell = vec2(uv.x * 36.0, uv.y * 18.0) * scale;
      vec2 d = abs(fract(cell - 0.5) - 0.5) / max(fwidth(cell), 1e-5);
      return 1.0 - smoothstep(0.0, 1.3, min(d.x, d.y));
    }

    // Reproduces the cloud layer's own sampling, undoing its independent spin, so
    // the surface knows exactly how much deck sits above this point
    float cloudCover() {
      vec2 cuv = vec2(vUv.x - uCloudSpin, vUv.y);
      float a = texture(uClouds, cuv + vec2(uTime * uCloudDrift, 0.0)).a;
      float b = texture(uClouds, vec2(cuv.x * 1.03 - uTime * uCloudDrift * 0.6, 1.0 - cuv.y)).a;
      return pow(clamp(a * 0.9 + b * 0.5, 0.0, 1.0), 0.6);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 objectNormal = normalize(vObjectNormal);
      vec3 surface = texture(uSurface, vUv).rgb;
      float ocean = texture(uOceanMask, vUv).r;
      float land = 1.0 - smoothstep(0.35, 0.6, ocean);

      float luma = dot(surface, vec3(0.299, 0.587, 0.114));

      // Continents: the plate itself, pushed up in saturation, then through an
      // exposure curve that lifts forest and tundra without clipping desert or ice
      vec3 saturated = clamp(mix(vec3(luma), surface, 1.2), 0.0, 1.0);
      vec3 landColor = uLandTint * (1.0 - exp(-saturated * 2.6));

      // Oceans: the plate is near-black there, so water gets an explicit depth ramp
      vec3 oceanColor = mix(uOceanDeep, uOceanShallow, smoothstep(0.01, 0.20, luma));

      vec3 base = mix(oceanColor, landColor, land);

      // Soft key light for shape only, never dark enough to hide the map
      float sun = dot(normal, normalize(uSunDirection));
      float day = smoothstep(-0.85, 0.55, sun);
      base *= mix(0.68, 0.96, day);

      // --- live events ---------------------------------------------------------
      float coarse = graticule(vUv, 1.0);
      float fine = graticule(vUv, 3.0);

      vec3 events = vec3(0.0);

      for (int i = 0; i < EVENT_COUNT; i++) {
        float progress = uEvents[i].w;
        if (progress < 0.0) continue;

        vec3 origin = uEvents[i].xyz;

        // Geodesic distance, so the ring wraps the sphere instead of projecting flat
        float angle = acos(clamp(dot(objectNormal, origin), -1.0, 1.0));

        float reach = uEventColors[i].a;
        float radius = reach * (1.0 - pow(1.0 - progress, 2.4));
        float d = angle / max(radius, 1e-4);

        // Constant screen-space edge, so rings stay crisp near the limb
        float width = max(fwidth(angle) * 1.5, 0.0024);
        float inside = 1.0 - smoothstep(radius - width, radius + width, angle);
        float ring = 1.0 - smoothstep(0.0, width * 2.2, abs(angle - radius));
        float echo = 1.0 - smoothstep(0.0, width * 3.0, abs(angle - radius * 0.55));

        // Grid reads strongest at the epicentre and thins out toward the edge,
        // the way the sweep leaves a trail behind the leading ring
        float grid = (coarse * 0.55 + fine * 0.45) * inside
          * (0.35 + 0.65 * (1.0 - smoothstep(0.3, 1.0, d)));
        float fill = inside * (0.07 + 0.11 * smoothstep(0.3, 1.0, d));

        // The point the event actually sits on
        float core = exp(-angle * angle * 2400.0) * (1.0 - smoothstep(0.55, 1.0, progress));

        // Rises quickly, then dissolves well before the ring reaches its full reach
        float life = smoothstep(0.0, 0.10, progress) * (1.0 - smoothstep(0.45, 1.0, progress));

        // Anything sliding past the limb dims out instead of shearing off the edge
        float facing = smoothstep(-0.02, 0.32, dot(origin, uCameraDir));

        vec3 tone = uEventColors[i].rgb;
        events += tone * (ring * 1.9 + echo * 0.3 + grid * 0.8 + fill) * life * facing;
        events += mix(tone, vec3(1.0), 0.45) * core * 1.6 * facing;
      }

      // --- site under analysis -------------------------------------------------
      if (uFeature.w > 0.001) {
        float a = acos(clamp(dot(objectNormal, uFeature.xyz), -1.0, 1.0));
        float w = max(fwidth(a) * 1.4, 0.0022);

        float inner = 1.0 - smoothstep(0.0, w * 2.0, abs(a - 0.030));
        float outer = 1.0 - smoothstep(0.0, w * 2.0, abs(a - (0.048 + 0.004 * sin(uTime * 2.2))));
        float pin = exp(-a * a * 9000.0);

        float facing = smoothstep(-0.02, 0.30, dot(uFeature.xyz, uCameraDir));
        events += uFeatureColor * (inner * 1.2 + outer * 0.55 + pin * 2.0) * uFeature.w * facing;
      }

      // Everything above happens on the ground, so the deck swallows it: what is
      // left over thick cloud is the diffuse glow the cloud layer itself adds
      events *= mix(1.0, 0.12, cloudCover());

      // --- limb ---------------------------------------------------------------
      float rim = pow(1.0 - clamp(dot(normal, normalize(vViewDir)), 0.0, 1.0), 3.0);
      vec3 limb = vec3(0.30, 0.55, 1.0) * rim * 0.45;

      fragColor = vec4(base + events + limb, 1.0);
    }
  `,
};
