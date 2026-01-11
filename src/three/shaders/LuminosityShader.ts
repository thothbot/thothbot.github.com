export const LuminosityShader = {
  vertexShader: /* glsl */ `
    out vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    in vec2 vUv;
    out vec4 fragColor;

    void main() {
      vec4 texel = texture(tDiffuse, vUv);
      float l = 0.2126 * texel.r + 0.7152 * texel.g + 0.0722 * texel.b;
      fragColor = vec4(l, l, l, texel.a);
    }
  `,
};
