import type { DisplayObject } from '../shapes';
export declare class BBox {
    x: number;
    y: number;
    width: number;
    height: number;
    get bottom(): number;
    get left(): number;
    get right(): number;
    get top(): number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    static fromRect(other: DOMRect): BBox;
    toJSON(): {
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /**
     * 点是否在 bbox 中
     * @param p
     */
    isPointIn(x: number, y: number): boolean;
}
export declare function getRenderBBox(element: DisplayObject): BBox;
