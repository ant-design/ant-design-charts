import type { DisplayObject } from '../../../shapes';
import { getBounds } from './bounds';
/**
 * Detect whether line-line collision.
 * From: https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
 */
declare function lineToLine(line1: number[], line2: number[]): boolean;
declare function intersectBoxLine(box: number[] /** 八个顶点 */, line: number[]): boolean;
export declare const IntersectUtils: {
    lineToLine: typeof lineToLine;
    intersectBoxLine: typeof intersectBoxLine;
    getBounds: typeof getBounds;
};
/**
 * 检测两个 DisplayObject 是否相交
 */
export declare function intersect(a: DisplayObject<any>, b: DisplayObject<any>, margin?: number[]): boolean;
export {};
