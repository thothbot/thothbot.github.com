export const TerrainShader = {
  vertexShader: /* glsl */ `
    uniform sampler2D tDisplacement;
    uniform sampler2D tNormal;
    uniform float uDisplacementScale;
    uniform vec2 uRepeatOverlay;
    uniform vec2 uOffset;

    out vec3 vNormal;
    out vec3 vViewPosition;
    out vec2 vUv;
    out vec3 vWorldPosition;

    void main() {
      vUv = uv * uRepeatOverlay + uOffset;

      vec3 displacedPosition = position;
      float displacement = texture(tDisplacement, uv).x;
      displacedPosition += normal * displacement * uDisplacementScale;

      vec4 worldPosition = modelMatrix * vec4(displacedPosition, 1.0);
      vWorldPosition = worldPosition.xyz;

      vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
      vViewPosition = -mvPosition.xyz;

      vec3 normalTex = texture(tNormal, uv).xyz * 2.0 - 1.0;
      vNormal = normalize(normalMatrix * normalTex);

      gl_Position = projectionMatrix * mvPosition;
    }
  `,

  fragmentShader: /* glsl */ `
    uniform sampler2D tNormal;
    uniform sampler2D tDiffuse1;
    uniform sampler2D tDiffuse2;
    uniform sampler2D tDetail;
    uniform sampler2D tSpecular;
    uniform sampler2D tDisplacement;

    uniform bool enableDiffuse1;
    uniform bool enableDiffuse2;
    uniform bool enableSpecular;

    uniform float uNormalScale;
    uniform vec2 uRepeatOverlay;

    uniform vec3 ambient;
    uniform vec3 diffuse;
    uniform vec3 specular;
    uniform float shininess;

    uniform vec3 ambientLightColor;
    uniform vec3 directionalLightColor;
    uniform float directionalLightIntensity;
    uniform vec3 directionalLightDirection;
    uniform vec3 pointLightColor;
    uniform float pointLightIntensity;
    uniform vec3 pointLightPosition;

    uniform vec3 fogColor;
    uniform float fogNear;
    uniform float fogFar;

    in vec3 vNormal;
    in vec3 vViewPosition;
    in vec2 vUv;
    in vec3 vWorldPosition;

    out vec4 fragColor;

    void main() {
      vec4 texColor = vec4(1.0);
      vec3 specularTex = vec3(1.0);

      if (enableDiffuse1 && enableDiffuse2) {
        vec4 texel1 = texture(tDiffuse1, vUv);
        vec4 texel2 = texture(tDiffuse2, vUv);
        float displacement = texture(tDisplacement, vUv / uRepeatOverlay).x;
        texColor = mix(texel1, texel2, displacement);
      } else if (enableDiffuse1) {
        texColor = texture(tDiffuse1, vUv);
      } else if (enableDiffuse2) {
        texColor = texture(tDiffuse2, vUv);
      }

      if (enableSpecular) {
        specularTex = texture(tSpecular, vUv).xyz;
      }

      vec3 normalTex = texture(tDetail, vUv).xyz * 2.0 - 1.0;
      normalTex.xy *= uNormalScale;
      normalTex = normalize(normalTex);

      vec3 normal = normalize(vNormal + normalTex.x * vec3(1.0, 0.0, 0.0) + normalTex.y * vec3(0.0, 1.0, 0.0));
      vec3 viewDir = normalize(vViewPosition);

      vec3 totalDiffuse = vec3(0.0);
      vec3 totalSpecular = vec3(0.0);

      vec3 dirLightDir = normalize((viewMatrix * vec4(directionalLightDirection, 0.0)).xyz);
      float dirDiffuseWeight = max(dot(normal, dirLightDir), 0.0);
      vec3 dirHalfVector = normalize(dirLightDir + viewDir);
      float dirSpecularWeight = specularTex.r * pow(max(dot(normal, dirHalfVector), 0.0), shininess);
      totalDiffuse += directionalLightColor * directionalLightIntensity * diffuse * dirDiffuseWeight;
      totalSpecular += directionalLightColor * directionalLightIntensity * specular * dirSpecularWeight * dirDiffuseWeight;

      vec4 pointLightPosView = viewMatrix * vec4(pointLightPosition, 1.0);
      vec3 pointLightDir = normalize(pointLightPosView.xyz + vViewPosition);
      float pointDistance = length(pointLightPosView.xyz + vViewPosition);
      float pointAttenuation = 1.0 / (1.0 + 0.00005 * pointDistance * pointDistance);
      float pointDiffuseWeight = max(dot(normal, pointLightDir), 0.0);
      vec3 pointHalfVector = normalize(pointLightDir + viewDir);
      float pointSpecularWeight = specularTex.r * pow(max(dot(normal, pointHalfVector), 0.0), shininess);
      totalDiffuse += pointLightColor * pointLightIntensity * diffuse * pointDiffuseWeight * pointAttenuation;
      totalSpecular += pointLightColor * pointLightIntensity * specular * pointSpecularWeight * pointDiffuseWeight * pointAttenuation;

      vec3 finalColor = texColor.rgb * (totalDiffuse + ambientLightColor * ambient + totalSpecular);

      float depth = gl_FragCoord.z / gl_FragCoord.w;
      float fogFactor = smoothstep(fogNear, fogFar, depth);

      fragColor = vec4(finalColor, 1.0 - fogFactor);
    }
  `,
};
