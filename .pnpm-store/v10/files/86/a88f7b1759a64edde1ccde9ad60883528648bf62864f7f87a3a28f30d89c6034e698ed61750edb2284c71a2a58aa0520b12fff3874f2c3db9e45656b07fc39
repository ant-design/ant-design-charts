import type { quat, vec2 } from 'gl-matrix';
import { mat3, mat4, vec3, vec4 } from 'gl-matrix';
export declare function getAngle(angle?: number): number;
export declare function createVec3(x: number | vec2 | vec3 | vec4, y?: number, z?: number, clone?: boolean): vec3;
export declare function deg2rad(deg: number): number;
export declare function rad2deg(rad: number): number;
export declare function grad2deg(grads: number): number;
export declare function deg2turn(deg: number): number;
export declare function turn2deg(turn: number): number;
/**
 * decompose mat3
 * extract translation/scaling/rotation(in radians)
 *
 * gl-matrix didn't provide them for mat3, but we can
 * @see https://math.stackexchange.com/a/1463487
 * @see https://math.stackexchange.com/a/417813
 */
export declare function getScaling(out: vec2, mat: mat3): vec2;
export declare function getTranslation(out: vec2, mat: mat3): vec2;
export declare function getRotationInRadians(mat: mat3): number;
/**
 * @see https://github.com/toji/gl-matrix/issues/329
 * @see https://doc.babylonjs.com/divingDeeper/mesh/transforms/center_origin/rotation_conventions
 */
export declare function getEuler(out: vec3, quat: quat | mat4): vec3;
export declare function fromRotationTranslationScale(rotation: number, x: number, y: number, scaleX: number, scaleY: number): mat3;
export declare function makePerspective(out: mat4, left: number, right: number, top: number, bottom: number, near: number, far: number, zero?: boolean): mat4;
export declare function decompose(mat: mat3): number[];
export declare function decomposeMat4(matrix: mat4, translation: vec3, scale: vec3, skew: vec3, perspective: vec4, quaternion: vec4): boolean;
//# sourceMappingURL=math.d.ts.map