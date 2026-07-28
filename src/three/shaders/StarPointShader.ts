export const StarPointShader = {
  vertexShader: /* glsl */ `
    attribute float aDepth;

    uniform float uSize;
    uniform float uScale;
    uniform float uMinScale;
    uniform float uMaxScale;
    uniform float uMinBright;

    varying float vBright;

    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      float s = uSize * mix(uMinScale, uMaxScale, aDepth);
      gl_PointSize = s * (uScale / -mv.z);
      vBright = mix(uMinBright, 1.0, pow(aDepth, 1.15));
      gl_Position = projectionMatrix * mv;
    }
  `,

  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    uniform vec3 uSpikeColor;
    uniform float uOpacity;
    uniform float uSpike;

    varying float vBright;

    void main() {
      vec2 p = gl_PointCoord * 2.0 - 1.0;
      float r = length(p);

      float core = exp(-r * 19.0);
      float airy = exp(-r * 6.5) * 0.20;

      float horizontal = exp(-abs(p.y) * 85.0) * exp(-abs(p.x) * 3.6);
      float vertical = exp(-abs(p.x) * 85.0) * exp(-abs(p.y) * 3.6);

      vec2 d = vec2(p.x + p.y, p.x - p.y) * 0.70710678;
      float diagonalA = exp(-abs(d.y) * 95.0) * exp(-abs(d.x) * 6.5);
      float diagonalB = exp(-abs(d.x) * 95.0) * exp(-abs(d.y) * 6.5);

      float spikes = (horizontal + vertical) * 0.9 + (diagonalA + diagonalB) * 0.32;
      float mask = smoothstep(1.05, 0.82, r);

      float intensity = (core + airy + spikes * uSpike) * mask;
      float alpha = intensity * vBright * uOpacity;
      if (alpha < 0.002) discard;

      vec3 col = mix(uSpikeColor, uColor, clamp(core * 2.0, 0.0, 1.0));
      gl_FragColor = vec4(col * vBright, alpha);
    }
  `,
};
