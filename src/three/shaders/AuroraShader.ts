export const AuroraCompositeShader = {
  vertexShader: /* glsl */ `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D uScene;
    uniform vec2 uResolution;

    void main() {
      gl_FragColor = texture2D(uScene, gl_FragCoord.xy / uResolution);
    }
  `,
};

export const AuroraShader = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform float uAspect;
    uniform float uIntensity;
    uniform vec2 uParallax;

    varying vec2 vUv;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 4; i++) {
        v += a * noise(p);
        p = p * 2.03 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return v;
    }

    float fbm2(vec2 p) {
      return (0.5 * noise(p) + 0.25 * noise(p * 2.03 + vec2(1.7, 9.2))) / 0.75;
    }

    float curtain(vec2 p, float y, float amp, float freq, float phase, float thickness, float speed, float tilt) {
      float t = uTime * speed + phase;
      float wave = y
        + tilt * (p.x - uAspect * 0.5)
        + amp * sin(p.x * freq + t)
        + amp * 0.45 * sin(p.x * freq * 2.1 - t * 1.3)
        + (fbm2(vec2(p.x * 1.2 + t * 0.12, phase)) - 0.5) * amp * 1.6;

      float d = (p.y - wave) / thickness;
      float body = exp(-d * d) + exp(-max(-d, 0.0) * 0.9) * 0.28;

      float rays = fbm(vec2(p.x * 5.0 + p.y * 3.4 + phase * 3.0, p.y * 0.9 - uTime * 0.05));
      rays = mix(0.40, pow(clamp(rays, 0.0, 1.0), 1.6), 0.82);

      float coarse = fbm2(vec2(p.x * 0.85 - uTime * 0.03 + phase, phase * 0.5));
      coarse = pow(clamp(coarse * 1.25, 0.0, 1.0), 1.8);

      return body * (0.28 + 1.35 * rays) * (0.22 + 1.35 * coarse);
    }

    float starLayer(vec2 p, float scale, float threshold, float speed, float seed) {
      vec2 g = p * scale + seed;
      vec2 id = floor(g);
      vec2 f = fract(g);

      float h = hash21(id + seed);
      float alive = step(threshold, h);

      vec2 c = vec2(hash21(id + 3.17 + seed), hash21(id + 7.71 + seed));
      float d = length(f - c);
      float core = smoothstep(0.18, 0.0, d);
      float twinkle = 0.5 + 0.5 * sin(uTime * speed + h * 90.0);

      return alive * core * core * (0.3 + 0.7 * twinkle) * (0.35 + 0.65 * h);
    }

    void main() {
      vec2 uv = vUv + uParallax;
      vec2 sky = vec2(uv.x * uAspect, uv.y);

      vec3 col = vec3(0.010, 0.012, 0.030);

      float dust = fbm2(sky * 1.8 + vec2(uTime * 0.008, 0.0));
      col += vec3(0.055, 0.030, 0.120) * dust * 0.55;
      col += vec3(0.020, 0.060, 0.075) * smoothstep(1.0, 0.0, length((uv - vec2(0.62, 0.95)) * vec2(uAspect * 0.45, 1.1)));

      float stars = starLayer(sky, 150.0, 0.955, 2.3, 0.0)
                  + starLayer(sky, 95.0, 0.968, 1.6, 11.3) * 1.25
                  + starLayer(sky, 58.0, 0.980, 1.1, 27.9) * 1.8;
      col += vec3(0.82, 0.88, 1.0) * stars * (0.30 + 0.70 * smoothstep(-0.1, 0.7, uv.y));

      vec3 emerald = vec3(0.30, 1.00, 0.70);
      vec3 teal = vec3(0.24, 0.78, 1.00);
      vec3 violet = vec3(0.60, 0.32, 1.00);
      vec3 magenta = vec3(0.86, 0.34, 0.92);

      float band1 = curtain(sky, 0.74, 0.090, 1.05, 0.0, 0.065, 0.16, 0.10);
      float band2 = curtain(sky, 0.88, 0.070, 0.85, 2.4, 0.060, 0.12, -0.07);
      float band3 = curtain(sky, 0.60, 0.060, 1.70, 4.8, 0.032, 0.22, 0.14);
      float band4 = curtain(sky, 0.26, 0.045, 1.20, 1.2, 0.070, 0.09, -0.05);

      float leftEnv = smoothstep(0.85, 0.05, uv.x);
      float rightEnv = smoothstep(0.05, 0.75, uv.x);

      col += emerald * band1 * (0.34 + 0.50 * leftEnv);
      col += teal * band1 * 0.16;
      col += violet * band2 * (0.18 + 0.48 * leftEnv);
      col += magenta * band2 * (0.08 + 0.24 * leftEnv);
      col += emerald * band3 * (0.10 + 0.22 * rightEnv);
      col += teal * band3 * 0.10;
      col += mix(violet, emerald, 0.45) * band4 * 0.14;

      col *= 1.0 - 0.42 * smoothstep(0.40, -0.05, uv.y);
      col *= mix(1.0, 0.72, smoothstep(0.48, 1.0, uv.x));

      float vignette = smoothstep(1.30, 0.30, length((uv - 0.5) * vec2(uAspect * 0.52, 1.0)));
      col *= mix(0.72, 1.0, vignette);

      col += vec3(0.030, 0.085, 0.090) * smoothstep(0.85, 0.0, length((uv - vec2(0.30, 0.05)) * vec2(uAspect * 0.40, 1.5)));

      col = 1.0 - exp(-col * 1.45);

      gl_FragColor = vec4(max(col * uIntensity, 0.0), 1.0);
    }
  `,
};
