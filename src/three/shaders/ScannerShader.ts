export const ScannerShader = {
  vertexShader: /* glsl */ `
    out vec3 vWorldNormal;
    out vec3 vLocalPosition;

    void main() {
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      vLocalPosition = position;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform vec3 uGradientColor1;
    uniform vec3 uGradientColor2;
    uniform vec3 uScanColor;
    uniform vec3 uEdgeColor;
    uniform vec3 uGridCenters[4];
    uniform float uScanDelays[4];
    uniform float uGridMaxRadius;
    uniform float uScanDuration;
    uniform vec3 uModelCenter;
    uniform vec3 uModelSize;

    in vec3 vWorldNormal;
    in vec3 vLocalPosition;

    out vec4 fragColor;

    float gridLines(vec2 coord, float scale) {
      vec2 grid = abs(fract(coord * scale - 0.5) - 0.5);
      float line = min(grid.x, grid.y);
      return 1.0 - smoothstep(0.0, 0.02, line);
    }

    void main() {
      vec3 worldNormal = normalize(vWorldNormal);


      // Border detection via world normals (non-Y faces = country borders)
      float borderFactor = 1.0 - abs(worldNormal.y);
      borderFactor = smoothstep(0.3, 0.7, borderFactor);

      // Multiple simultaneous scans
      float totalScanRing = 0.0;
      float totalGridEffect = 0.0;
      float totalInScanArea = 0.0;

      for (int i = 0; i < 4; i++) {
        float delayedTime = uTime - uScanDelays[i];
        if (delayedTime < 0.0) continue;

        float cycleTime = mod(delayedTime, uScanDuration);
        float scanProgress = cycleTime / uScanDuration;
        float currentRadius = scanProgress * uGridMaxRadius;

        // Fade out when scan reaches 50-70% of max size
        float scanFadeOut = 1.0 - smoothstep(0.5, 0.7, scanProgress);

        vec2 toCenter = vLocalPosition.xz - uGridCenters[i].xz;
        float distFromCenter = length(toCenter);

        float inScanArea = smoothstep(currentRadius, currentRadius - 2.0, distFromCenter) * scanFadeOut;
        totalInScanArea = max(totalInScanArea, inScanArea);

        float ringDist = abs(distFromCenter - currentRadius);
        float scanRing = smoothstep(1.5, 0.0, ringDist) * scanFadeOut;
        totalScanRing = max(totalScanRing, scanRing);

        float gridFade = smoothstep(currentRadius, currentRadius * 0.5, distFromCenter);
        totalGridEffect = max(totalGridEffect, inScanArea * gridFade);
      }

      // Main grid (large cells)
      float mainGrid = gridLines(vLocalPosition.xz, 0.1) * totalInScanArea * 0.7;

      // Sub grid (smaller cells)
      float subGrid = gridLines(vLocalPosition.xz, 0.4) * totalInScanArea * 0.35;

      float gridEffect = (mainGrid + subGrid) * totalGridEffect;

      // 45-degree gradient normalized to model bounds
      vec3 normalized = (vLocalPosition - uModelCenter) / uModelSize;
      float gradientT = (normalized.x - normalized.z) * 0.5 + 0.5;
      gradientT = clamp(gradientT, 0.0, 1.0);

      vec3 baseShaded = mix(uGradientColor1, uGradientColor2, gradientT) * 0.5;
      vec3 borderGlow = uEdgeColor * borderFactor * 0.8;
      vec3 scanEffect = uScanColor * (totalScanRing * 1.5 + gridEffect);

      vec3 finalColor = baseShaded + borderGlow + scanEffect;

      fragColor = vec4(finalColor, 1.0);
    }
  `,
};
