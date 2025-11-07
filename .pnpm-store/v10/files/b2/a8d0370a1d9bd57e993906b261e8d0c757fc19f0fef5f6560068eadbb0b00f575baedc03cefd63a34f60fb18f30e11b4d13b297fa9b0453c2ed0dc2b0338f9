import { mat4, quat, vec2, vec3 } from 'gl-matrix';
/**
 * do RTS transformation for 2D/3D
 */
export interface Transform {
    /**
     * Update flag for the world transformation matrix
     *
     * ! This flag should usually not be updated manually, it should be derived from the parent node's `dirtyFlag` and its own `localDirtyFlag`
     */
    dirtyFlag: boolean;
    localDirtyFlag: boolean;
    /**
     * local space RTS
     */
    localPosition: vec3;
    localRotation: quat;
    localScale: vec3;
    localTransform: mat4;
    /**
     * @see https://www.w3.org/TR/css-transforms-1/#SkewDefined
     */
    localSkew: vec2;
    /**
     * world space RTS
     */
    position: vec3;
    rotation: quat;
    scaling: vec3;
    worldTransform: mat4;
    /**
     * the origin of scaling and rotation
     */
    origin: vec3;
}
export declare function updateLocalTransform(transform: Transform): void;
export declare function updateWorldTransform(transform: Transform, parentTransform: Transform): void;
//# sourceMappingURL=Transform.d.ts.map