import * as THREE from 'three';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

export class TesseractLineMaterial extends LineMaterial {
  constructor(parameters?: {
    color?: number;
    linewidth?: number;
    resolution?: THREE.Vector2;
    transparent?: boolean;
    opacity?: number;
  }) {
    super(parameters);

    this.uniforms.uMinWidth = { value: 1.0 };
    this.uniforms.uMaxWidth = { value: 5.0 };
    this.uniforms.uNearDist = { value: 2.0 };
    this.uniforms.uFarDist = { value: 8.0 };

    this.onBeforeCompile = (shader) => {
      shader.uniforms.uMinWidth = this.uniforms.uMinWidth;
      shader.uniforms.uMaxWidth = this.uniforms.uMaxWidth;
      shader.uniforms.uNearDist = this.uniforms.uNearDist;
      shader.uniforms.uFarDist = this.uniforms.uFarDist;

      shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        `uniform float uMinWidth;
        uniform float uMaxWidth;
        uniform float uNearDist;
        uniform float uFarDist;
        void main() {`
      );

      shader.vertexShader = shader.vertexShader.replace(
        'vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );',
        `vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
        float avgZ = ( -start.z + -end.z ) * 0.5;
        float depthFactor = clamp( ( uFarDist - avgZ ) / ( uFarDist - uNearDist ), 0.0, 1.0 );
        float dynamicWidth = mix( uMinWidth, uMaxWidth, depthFactor );`
      );

      shader.vertexShader = shader.vertexShader.replace(
        /float w = linewidth/g,
        'float w = dynamicWidth'
      );
    };
  }

  get minWidth(): number {
    return this.uniforms.uMinWidth.value as number;
  }

  set minWidth(value: number) {
    this.uniforms.uMinWidth.value = value;
  }

  get maxWidth(): number {
    return this.uniforms.uMaxWidth.value as number;
  }

  set maxWidth(value: number) {
    this.uniforms.uMaxWidth.value = value;
  }

  get nearDist(): number {
    return this.uniforms.uNearDist.value as number;
  }

  set nearDist(value: number) {
    this.uniforms.uNearDist.value = value;
  }

  get farDist(): number {
    return this.uniforms.uFarDist.value as number;
  }

  set farDist(value: number) {
    this.uniforms.uFarDist.value = value;
  }
}
