export const CrystalGlassShader = {
  vertexShader: /* glsl */ `
    attribute float aDepth;
    attribute vec3 aNormal;
    attribute vec2 aQuad;

    varying float vDepth;
    varying vec2 vQuad;
    varying vec3 vNormal;
    varying vec3 vEye;

    void main() {
      vDepth = aDepth;
      vQuad = aQuad;
      vNormal = normalize(normalMatrix * aNormal);

      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vEye = normalize(mv.xyz);

      gl_Position = projectionMatrix * mv;
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D uScene;
    uniform vec2 uResolution;
    uniform vec3 uTint;
    uniform vec3 uRimColor;
    uniform float uRefract;
    uniform float uReflect;
    uniform float uIorR;
    uniform float uIorG;
    uniform float uIorB;
    uniform float uOpacity;

    varying float vDepth;
    varying vec2 vQuad;
    varying vec3 vNormal;
    varying vec3 vEye;

    const int SAMPLES = 3;

    vec3 sampleSky(vec2 uv) {
      return texture2D(uScene, clamp(uv, 0.002, 0.998)).rgb;
    }

    void main() {
      vec3 eye = normalize(vEye);
      vec3 n = normalize(vNormal);
      if (dot(n, eye) > 0.0) n = -n;

      vec2 uv = gl_FragCoord.xy / uResolution;

      vec3 refractR = refract(eye, n, 1.0 / uIorR);
      vec3 refractG = refract(eye, n, 1.0 / uIorG);
      vec3 refractB = refract(eye, n, 1.0 / uIorB);

      vec3 refracted = vec3(0.0);
      for (int i = 0; i < SAMPLES; i++) {
        float slide = 1.0 + float(i) / float(SAMPLES) * 0.7;
        refracted.r += sampleSky(uv + refractR.xy * uRefract * slide).r;
        refracted.g += sampleSky(uv + refractG.xy * uRefract * slide).g;
        refracted.b += sampleSky(uv + refractB.xy * uRefract * slide).b;
      }
      refracted /= float(SAMPLES);

      vec3 reflected = sampleSky(uv + n.xy * uReflect);
      float lum = dot(reflected, vec3(0.299, 0.587, 0.114));
      reflected = mix(vec3(lum), reflected, 0.6) * 1.30;

      float fresnel = pow(1.0 - abs(dot(eye, n)), 3.0);
      float edge = min(min(vQuad.x, 1.0 - vQuad.x), min(vQuad.y, 1.0 - vQuad.y));
      float sheen = pow(clamp(1.0 - edge * 2.0, 0.0, 1.0), 3.0);

      vec3 lightDir = normalize(vec3(0.35, 0.65, 0.72));
      vec3 halfVec = normalize(lightDir - eye);
      float spec = pow(max(dot(n, halfVec), 0.0), 48.0);

      vec3 col = mix(refracted, reflected, clamp(0.30 + fresnel * 0.70, 0.0, 1.0)) * uTint;
      col += uRimColor * (fresnel * 0.45 + sheen * 0.35 + spec * 0.90);
      col *= 0.85 + 0.55 * sheen;

      float alpha = uOpacity * mix(0.30, 1.0, vDepth) * (0.30 + 1.15 * fresnel + 0.90 * sheen);

      gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.92));
    }
  `,
};
