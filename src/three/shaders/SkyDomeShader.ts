export const SkyDomeShader = {
  vertexShader: /* glsl */ `
    out vec3 vDirection;

    void main() {
      vDirection = normalize(position);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform vec3 uZenith;
    uniform vec3 uHorizon;
    uniform vec3 uMoonColor;
    uniform vec3 uMoonDirection;
    uniform float uTime;

    in vec3 vDirection;

    out vec4 fragColor;

    // Same one-LSB triangular dither, applied where the gradient is first written
    // to an 8-bit target: banding baked in here cannot be undone downstream
    float dither(vec2 p) {
      float a = fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      float b = fract(sin(dot(p + 41.7, vec2(12.9898, 78.233))) * 43758.5453);
      return (a + b - 1.0) / 255.0;
    }

    float hash(vec2 p) {
      p = fract(p * vec2(0.3183099, 0.3678794) + vec2(0.71, 0.113));
      p += dot(p, p + 34.71);
      return fract(p.x * p.y);
    }

    // One magnitude class of stars, celled in spherical uv rather than in 3D:
    // a 3D cell only grazes the unit sphere, so most stars never got sampled.
    // Sharpness is tuned against pixels-per-radian, which is what sets the core
    // size on screen; too tight and the star falls between samples and vanishes.
    float starLayer(vec2 uv, float scale, float density, float sharpness) {
      vec2 p = uv * vec2(scale * 2.0, scale);
      vec2 cell = floor(p);

      float pick = hash(cell);
      if (pick < density) return 0.0;

      vec2 seat = vec2(hash(cell + 11.3), hash(cell + 23.7));
      vec2 delta = fract(p) - seat;
      float d2 = dot(delta, delta);

      // Brightness spread across the class, so a few stars carry the field
      float magnitude = (pick - density) / max(1.0 - density, 1e-4);
      float twinkle = 0.78 + 0.22 * sin(uTime * 1.6 + seat.x * 63.0);

      // Hard core sized under a pixel, with only a whisper of a halo. A wide
      // gaussian is what made them read as smudges rather than as points.
      float core = exp(-d2 * sharpness);
      float bloomlet = exp(-d2 * sharpness * 0.38) * 0.06;

      return (core + bloomlet) * magnitude * twinkle;
    }

    void main() {
      vec3 direction = normalize(vDirection);
      float height = direction.y;

      vec3 sky = mix(uHorizon, uZenith, smoothstep(-0.05, 0.30, height));

      // Angle rather than a dot threshold: the moon subtends half a degree, and
      // comparing cosines that close to 1.0 falls apart in float precision
      float angle = acos(clamp(dot(direction, normalize(uMoonDirection)), -1.0, 1.0));

      float horizonFade = smoothstep(-0.02, 0.13, height);
      float moonWash = 1.0 - exp(-angle * angle * 34.0);

      vec2 skyUv = vec2(
        atan(direction.z, direction.x) * 0.15915494 + 0.5,
        acos(clamp(direction.y, -1.0, 1.0)) * 0.31830989
      );

      float stars =
          starLayer(skyUv, 60.0, 0.968, 5000.0) * 1.00
        + starLayer(skyUv, 130.0, 0.955, 1100.0) * 0.66
        + starLayer(skyUv, 240.0, 0.944, 330.0) * 0.38;

      sky += vec3(0.82, 0.88, 1.0) * stars * horizonFade * moonWash * 1.05;

      // The moon: a small hard disc plus scattered light. Gaussians were the
      // problem here: they fall off fast enough to leave a visible rim, so the
      // glow read as a pasted-on ball. Real forward scattering decays as a power
      // of the angle, which has a bright centre and no edge at all.
      float disc = 1.0 - smoothstep(0.0080, 0.0098, angle);
      float aureole = 0.00112 / (pow(angle, 1.6) + 0.0016);
      float skyglow = 0.0248 / (angle + 0.45);

      sky = mix(sky, uMoonColor * 1.5, disc);
      sky += uMoonColor * (aureole + skyglow);

      // Cold haze sitting on the skyline
      sky += vec3(0.42, 0.52, 0.78) * exp(-abs(height) * 11.0) * 0.07;

      sky = mix(uHorizon * 0.6, sky, smoothstep(-0.18, 0.0, height));

      sky += dither(gl_FragCoord.xy);

      fragColor = vec4(sky, 1.0);
    }
  `,
};
