import type { mat4 } from 'gl-matrix';
import { Tuple3Number } from '../types';
import type { Plane } from './Plane';
/**
 * Axis-Aligned Bounding Box
 * 为了便于后续 Frustum Culling，通过查找表定义 p-vertex 和 n-vertex
 * @see https://github.com/antvis/GWebGPUEngine/issues/3
 */
export declare class AABB {
    static isEmpty(aabb: AABB): boolean;
    center: Tuple3Number;
    halfExtents: Tuple3Number;
    min: Tuple3Number;
    max: Tuple3Number;
    update(center: Tuple3Number, halfExtents: Tuple3Number): void;
    setMinMax(min: Tuple3Number, max: Tuple3Number): void;
    getMin(): Tuple3Number;
    getMax(): Tuple3Number;
    add(aabb: AABB): void;
    setFromTransformedAABB(aabb: AABB, m: mat4): void;
    intersects(aabb: AABB): boolean;
    intersection(aabb: AABB): AABB | null;
    /**
     * get n-vertex
     * @param plane plane of CullingVolume
     */
    getNegativeFarPoint(plane: Plane): Tuple3Number;
    /**
     * get p-vertex
     * @param plane plane of CullingVolume
     */
    getPositiveFarPoint(plane: Plane): Tuple3Number;
}
//# sourceMappingURL=AABB.d.ts.map