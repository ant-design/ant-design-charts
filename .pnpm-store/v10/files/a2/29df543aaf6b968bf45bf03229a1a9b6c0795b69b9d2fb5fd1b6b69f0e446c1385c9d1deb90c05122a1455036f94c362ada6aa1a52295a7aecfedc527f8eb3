import type { DisplayObject } from '../../../shapes';
import type { Point } from '../../../types';
import type { SeriesAttr } from '../../../util';
export declare class Bounds {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    constructor(x1: number, y1: number, x2: number, y2: number);
    get left(): number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get width(): number | undefined;
    get height(): number | undefined;
    rotatedPoints(radian: number, x: number, y: number): Point[];
    set(x1: number, y1: number, x2: number, y2: number): this;
    defined(key: 'left' | 'right' | 'top' | 'bottom' | 'x1' | 'x2' | 'y1' | 'y2'): boolean;
}
/**
 * Can't use getBounds directly since we should not use AABB here.
 */
export declare function getBounds(item: DisplayObject<any>, margin?: SeriesAttr): Point[];
