export const NormalShader = {
  vertexShader: /* glsl */ `
    out vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D heightMap;
    uniform vec2 resolution;
    uniform float height;
    in vec2 vUv;
    out vec4 fragColor;

    void main() {
      float val = texture(heightMap, vUv).x;
      float valU = texture(heightMap, vUv + vec2(1.0 / resolution.x, 0.0)).x;
      float valV = texture(heightMap, vUv + vec2(0.0, 1.0 / resolution.y)).x;

      vec3 normal = normalize(vec3(val - valU, val - valV, height));
      fragColor = vec4(0.5 * normal + 0.5, 1.0);
    }
  `,
};
