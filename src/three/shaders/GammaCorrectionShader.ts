export const GammaCorrectionShader = {
  uniforms: {
    tDiffuse: { value: null },
  },

  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    // Triangular-PDF noise of one least significant bit. Smooth dark gradients
    // quantise into visible steps at 8 bits, and this scatters the step edges
    // below the threshold where the eye picks them out as bands.
    float dither(vec2 p) {
      float a = fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      float b = fract(sin(dot(p + 41.7, vec2(12.9898, 78.233))) * 43758.5453);
      return (a + b - 1.0) / 255.0;
    }

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);

      // Gamma correction
      vec3 color = pow(tex.rgb, vec3(1.0 / 2.0));

      // Saturation boost (1.0 = normal, >1.0 = more saturated)
      float saturation = 1.7;
      float luminance = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(luminance), color, saturation);

      color += dither(gl_FragCoord.xy);

      gl_FragColor = vec4(color, tex.a);
    }
  `,
};
