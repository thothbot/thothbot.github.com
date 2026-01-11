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

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);

      // Gamma correction
      vec3 color = pow(tex.rgb, vec3(1.0 / 2.0));

      // Saturation boost (1.0 = normal, >1.0 = more saturated)
      float saturation = 1.7;
      float luminance = dot(color, vec3(0.299, 0.587, 0.114));
      color = mix(vec3(luminance), color, saturation);

      gl_FragColor = vec4(color, tex.a);
    }
  `,
};
