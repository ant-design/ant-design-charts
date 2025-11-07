import { mat4 } from 'gl-matrix';
type RectangleLike = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare class Rectangle implements DOMRect {
    x: number;
    y: number;
    width: number;
    height: number;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/fromRect_static
     */
    static fromRect(rect: RectangleLike): Rectangle;
    /**
     * will return a new rect instance
     */
    static applyTransform(rect: Rectangle, matrix: mat4): Rectangle;
    left: number;
    right: number;
    top: number;
    bottom: number;
    constructor(x: number, y: number, width: number, height: number);
    toJSON(): void;
}
export {};
//# sourceMappingURL=Rectangle.d.ts.map