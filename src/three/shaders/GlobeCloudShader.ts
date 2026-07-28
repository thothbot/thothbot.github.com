export const GlobeCloudShader = {
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

    uniform sampler2D uClouds;
    uniform float uTime;
    uniform float uDrift;
    uniform float uOpacity;
    uniform vec3 uSunDirection;
    uniform vec3 uCloudTint;

    // Same slots the surface uses, so the deck lights up over a live event
    uniform vec4 uEvents[EVENT_COUNT];
    uniform vec4 uEventColors[EVENT_COUNT];
    uniform vec3 uCameraDir;

    in vec2 vUv;
    in vec3 vNormal;
    in vec3 vViewDir;
    in vec3 vObjectNormal;

    out vec4 fragColor;

    void main() {
      // Two offset samples drifting at different rates keep the deck alive
      float a = texture(uClouds, vUv + vec2(uTime * uDrift, 0.0)).a;
      // Second deck is flipped north to south, so the two layers never read as
      // the same pattern sliding over itself
      float b = texture(uClouds, vec2(vUv.x * 1.03 - uTime * uDrift * 0.6, 1.0 - vUv.y)).a;
      float cover = clamp(a * 0.9 + b * 0.5, 0.0, 1.0);

      // Gamma below one thickens the deck without turning thin wisps into haze
      cover = pow(cover, 0.6);

      vec3 normal = normalize(vNormal);
      float sun = dot(normal, normalize(uSunDirection));
      float day = smoothstep(-0.35, 0.4, sun);

      // Silver lining where the terminator grazes the cloud tops
      float terminator = exp(-abs(sun) * 6.0);
      float grazing = pow(1.0 - clamp(dot(normal, normalize(vViewDir)), 0.0, 1.0), 2.0);

      vec3 color = uCloudTint * (0.48 + 1.05 * day) + vec3(1.0, 0.72, 0.52) * terminator * 0.4;
      color += vec3(0.6, 0.78, 1.0) * grazing * 0.3;

      // --- events scattering up through the deck --------------------------------
      vec3 objectNormal = normalize(vObjectNormal);
      vec3 glow = vec3(0.0);

      for (int i = 0; i < EVENT_COUNT; i++) {
        float progress = uEvents[i].w;
        if (progress < 0.0) continue;

        vec3 origin = uEvents[i].xyz;
        float angle = acos(clamp(dot(objectNormal, origin), -1.0, 1.0));

        float reach = uEventColors[i].a;
        float radius = reach * (1.0 - pow(1.0 - progress, 2.4));

        // Soft, wide and blurry: light diffusing through cloud, not a hard ring
        float halo = 1.0 - smoothstep(0.0, radius * 0.55, abs(angle - radius));
        float body = 1.0 - smoothstep(radius * 0.2, radius * 1.15, angle);

        float life = smoothstep(0.0, 0.10, progress) * (1.0 - smoothstep(0.45, 1.0, progress));
        float facing = smoothstep(-0.02, 0.32, dot(origin, uCameraDir));

        glow += uEventColors[i].rgb * (halo * 0.85 + body * 0.55) * life * facing;
      }

      // Thicker cloud catches more of the light from below
      color += glow * (0.5 + 1.6 * cover) * 2.4;

      float alpha = cover * uOpacity * (0.3 + 0.85 * day);
      if (alpha < 0.004) discard;

      fragColor = vec4(color, alpha);
    }
  `,
};
