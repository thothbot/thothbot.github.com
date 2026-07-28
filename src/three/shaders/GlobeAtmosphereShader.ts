export const GlobeAtmosphereShader = {
  vertexShader: /* glsl */ `
    out vec3 vNormal;
    out vec3 vViewDir;
    out vec3 vWorldNormal;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldNormal = normalize(mat3(modelMatrix) * normal);

      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vViewDir = normalize(-mv.xyz);

      gl_Position = projectionMatrix * mv;
    }
  `,

  fragmentShader: /* glsl */ `
    uniform vec3 uColor;
    uniform vec3 uSunDirection;
    uniform float uIntensity;

    in vec3 vNormal;
    in vec3 vViewDir;
    in vec3 vWorldNormal;

    out vec4 fragColor;

    void main() {
      float fresnel = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), 3.2);
      float sun = clamp(dot(normalize(vWorldNormal), normalize(uSunDirection)) * 0.5 + 0.5, 0.0, 1.0);

      float intensity = fresnel * uIntensity * mix(0.25, 1.0, sun);
      if (intensity < 0.002) discard;

      fragColor = vec4(uColor * intensity, intensity);
    }
  `,
};
