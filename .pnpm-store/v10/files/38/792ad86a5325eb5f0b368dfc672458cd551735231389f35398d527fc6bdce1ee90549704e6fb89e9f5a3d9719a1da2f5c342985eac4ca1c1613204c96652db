import { AABB } from '@antv/g';
import { Vector2 } from './vector';
type Min = Vector2;
type Max = Vector2;
export type Bounds = [Min, Max];
export declare function parseAABB(min2: AABB): Bounds;
/**
 * Whether the `point` in `bounds`.
 * @param point
 * @param bounds
 * @param threshold
 */
export declare function isInBounds(point: Vector2, bounds: Bounds, threshold?: number): boolean;
/**
 * Whether `b1` is overflow from `b2`.
 * @param b1
 * @param b2
 * @param threshold The threshold to determine whether the bounds is overflowed, default is 0.
 */
export declare function isOverflow(b1: Bounds, b2: Bounds, threshold?: number): boolean;
/**
 * Whether `b1` is overlap with `b2`.
 * @param b1
 * @param b2
 * @returns
 */
export declare function isOverlap(b1: Bounds, b2: Bounds): boolean;
export {};
