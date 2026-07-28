export const HelixParticleShader = {
  vertexShader: /* glsl */ `
    uniform float uTime;

    attribute float brightness;
    attribute float phase;
    attribute float size;

    out float vBrightness;
    out float vDepth;

    void main() {
      float pulse = sin(uTime * 0.8 + phase) * 0.15 + 0.85;
      vBrightness = brightness * pulse;

      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      // Spans only the depth the helix actually occupies, otherwise the cue is flat
      vDepth = smoothstep(-16.4, -12.8, mvPosition.z);

      float depthScale = 1.0 + vDepth * 0.5;
      gl_PointSize = size * depthScale * (280.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: /* glsl */ `
    uniform float uCoreFalloff;
    uniform float uHaloFalloff;
    uniform float uHaloIntensity;
    uniform float uSoftness;
    uniform float uDotRadius;
    uniform float uOpacity;
    uniform vec3 uColorNear;
    uniform vec3 uColorFar;
    uniform vec3 uLightDir;

    in float vBrightness;
    in float vDepth;

    layout(location = 0) out vec4 fragColor;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);

      float edgeWidth = mix(0.01, 0.1, uSoftness);
      float solid = smoothstep(uDotRadius + edgeWidth, uDotRadius - edgeWidth, dist);
      float soft = exp(-dist * dist * uCoreFalloff);
      float core = mix(solid, soft, uSoftness);

      float halo = exp(-dist * dist * uHaloFalloff) * uHaloIntensity * uSoftness;

      float baseValue = (core + halo) * vBrightness;
      float threshold = mix(0.3, 0.02, uSoftness * uSoftness);
      if (baseValue < threshold) discard;

      // Each speck is shaded as a small sphere, so the cloud reads as atoms
      // catching light instead of a flat smear of dots
      vec2 sphere = center * 2.0;
      float r2 = min(dot(sphere, sphere), 1.0);
      vec3 normal = vec3(sphere, sqrt(1.0 - r2) + 0.001);
      normal.y = -normal.y;
      normal = normalize(normal);

      vec3 light = normalize(uLightDir);
      float lambert = max(dot(normal, light), 0.0);
      float spec = pow(max(dot(reflect(-light, normal), vec3(0.0, 0.0, 1.0)), 0.0), 30.0);

      // Depth cueing: the far side of the helix falls away instead of sitting
      // as bright as the near side
      vec3 tone = mix(uColorFar, uColorNear, vDepth);
      vec3 shaded = tone * (0.30 + 0.85 * lambert) + vec3(0.85, 0.93, 1.0) * spec * 0.55;

      float intensity = baseValue * (0.32 + vDepth * 0.78);

      fragColor = vec4(shaded * intensity, baseValue * uOpacity);
    }
  `,
};

export const RungParticleShader = {
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform float uDotSize;

    attribute float brightness;
    attribute float phase;

    out float vBrightness;
    out float vDepth;

    void main() {
      float flicker = sin(uTime * 2.0 + phase * 10.0) * 0.1 + 0.9;
      vBrightness = brightness * flicker;

      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vDepth = smoothstep(-15.0, 5.0, mvPosition.z);

      gl_PointSize = uDotSize * (250.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: /* glsl */ `
    in float vBrightness;
    in float vDepth;

    layout(location = 0) out vec4 fragColor;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);

      float dot = exp(-dist * dist * 25.0);
      float intensity = dot * vBrightness * (0.5 + vDepth * 0.5);

      vec3 color = vec3(intensity * 0.85);
      float alpha = dot * vBrightness * 0.9;

      fragColor = vec4(color, alpha);
    }
  `,
};

export const StreakShader = {
  vertexShader: /* glsl */ `
    uniform float uTime;

    attribute float speed;
    attribute float phase;
    attribute float length;

    out float vAlpha;
    out float vLength;

    void main() {
      float cycle = mod(uTime * speed + phase, 1.0);
      vAlpha = sin(cycle * 3.14159) * 0.3;
      vLength = length;

      vec3 pos = position;
      pos.y -= cycle * 20.0;
      pos.y = mod(pos.y + 12.0, 24.0) - 12.0;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = length * (200.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: /* glsl */ `
    in float vAlpha;
    in float vLength;

    layout(location = 0) out vec4 fragColor;

    void main() {
      vec2 uv = gl_PointCoord - 0.5;

      float angle = -0.785398;
      float c = cos(angle);
      float s = sin(angle);
      vec2 rotated = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);

      float streak = exp(-rotated.x * rotated.x * 80.0);
      streak *= smoothstep(0.5, 0.0, abs(rotated.y));

      float intensity = streak * vAlpha * 0.6;

      fragColor = vec4(vec3(intensity), intensity);
    }
  `,
};

export const BokehShader = {
  vertexShader: /* glsl */ `
    uniform float uTime;

    attribute float size;
    attribute float phase;
    attribute float depth;

    out float vAlpha;
    out float vSize;

    void main() {
      float pulse = sin(uTime * 0.3 + phase) * 0.2 + 0.8;
      vAlpha = pulse * smoothstep(1.0, 0.0, depth) * 0.15;
      vSize = size;

      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: /* glsl */ `
    in float vAlpha;
    in float vSize;

    layout(location = 0) out vec4 fragColor;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);

      float ring = smoothstep(0.5, 0.35, dist) - smoothstep(0.35, 0.2, dist) * 0.5;
      float fill = smoothstep(0.5, 0.3, dist) * 0.3;

      float bokeh = (ring + fill) * vAlpha;

      fragColor = vec4(vec3(bokeh * 0.9), bokeh);
    }
  `,
};

export const BasePairShader = {
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform float uMaxGap;

    attribute float brightness;
    attribute float phase;
    attribute float size;
    attribute float tubeT;
    attribute float mergeProgress;
    attribute vec3 tubeDir;

    out float vBrightness;
    out float vDepth;
    out float vMerge;

    void main() {
      float pulse = sin(uTime * 0.8 + phase) * 0.15 + 0.85;
      vBrightness = brightness * pulse;
      vMerge = mergeProgress;

      vec3 mergeOffset = tubeDir * mergeProgress * uMaxGap * tubeT;
      vec3 animatedPos = position + mergeOffset;

      vec4 mvPosition = modelViewMatrix * vec4(animatedPos, 1.0);
      vDepth = smoothstep(-16.4, -12.8, mvPosition.z);

      float depthScale = 1.0 + vDepth * 0.5;
      gl_PointSize = size * depthScale * (280.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: /* glsl */ `
    uniform float uCoreFalloff;
    uniform float uHaloFalloff;
    uniform float uHaloIntensity;
    uniform float uSoftness;
    uniform float uDotRadius;
    uniform float uOpacity;
    uniform vec3 uColorNear;
    uniform vec3 uColorFar;
    uniform vec3 uLightDir;

    in float vBrightness;
    in float vDepth;
    in float vMerge;

    layout(location = 0) out vec4 fragColor;

    void main() {
      vec2 center = gl_PointCoord - 0.5;
      float dist = length(center);

      float edgeWidth = mix(0.01, 0.1, uSoftness);
      float solid = smoothstep(uDotRadius + edgeWidth, uDotRadius - edgeWidth, dist);
      float soft = exp(-dist * dist * uCoreFalloff);
      float core = mix(solid, soft, uSoftness);

      float halo = exp(-dist * dist * uHaloFalloff) * uHaloIntensity * uSoftness;

      float baseValue = (core + halo) * vBrightness;
      float threshold = mix(0.3, 0.02, uSoftness * uSoftness);
      if (baseValue < threshold) discard;

      vec2 sphere = center * 2.0;
      float r2 = min(dot(sphere, sphere), 1.0);
      vec3 normal = vec3(sphere, sqrt(1.0 - r2) + 0.001);
      normal.y = -normal.y;
      normal = normalize(normal);

      vec3 light = normalize(uLightDir);
      float lambert = max(dot(normal, light), 0.0);
      float spec = pow(max(dot(reflect(-light, normal), vec3(0.0, 0.0, 1.0)), 0.0), 30.0);

      vec3 tone = mix(uColorFar, uColorNear, vDepth);

      // The pair being read heats up, so the merge animation is finally visible
      tone = mix(tone, vec3(1.0, 0.93, 0.78), vMerge * 0.7);

      vec3 shaded = tone * (0.30 + 0.85 * lambert) + vec3(0.85, 0.93, 1.0) * spec * 0.55;
      float intensity = baseValue * (0.32 + vDepth * 0.78) * (1.0 + vMerge * 0.9);

      fragColor = vec4(shaded * intensity, baseValue * uOpacity);
    }
  `,
};

export const FilmGrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uIntensity: { value: 0.08 },
    uVignetteStrength: { value: 0.4 },
  },

  vertexShader: /* glsl */ `
    out vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uIntensity;
    uniform float uVignetteStrength;

    in vec2 vUv;

    float random(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture(tDiffuse, vUv);

      float grain = random(vUv + fract(uTime)) * 2.0 - 1.0;
      grain *= uIntensity;

      float specks = step(0.998, random(vUv * 100.0 + floor(uTime * 10.0)));
      specks *= 0.3;

      vec2 vignetteUv = vUv - 0.5;
      float vignette = 1.0 - dot(vignetteUv, vignetteUv) * uVignetteStrength;
      vignette = smoothstep(0.0, 1.0, vignette);

      vec3 result = color.rgb + grain + specks;
      result *= vignette;

      result = pow(result, vec3(0.95));

      pc_fragColor = vec4(result, color.a);
    }
  `,
};
