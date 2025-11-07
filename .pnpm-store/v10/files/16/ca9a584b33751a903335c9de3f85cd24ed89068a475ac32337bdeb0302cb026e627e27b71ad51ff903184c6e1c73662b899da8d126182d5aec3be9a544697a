import type { CanvasLike } from '..';
/**
 * used in following scenes:
 * - g `ctx.measureText`
 * - g-plugin-canvas-picker `ctx.isPointInPath`
 * - g-plugin-device-renderer `ctx.createLinearGradient` and generate texture
 *
 * @see https://blog.scottlogic.com/2020/03/19/offscreen-canvas.html
 */
export declare class OffscreenCanvasCreator {
    private canvas;
    private context;
    /**
     * @returns new canvas instance
     */
    static createCanvas(): HTMLCanvasElement | OffscreenCanvas | null;
    getOrCreateCanvas(offscreenCanvas: CanvasLike, contextAttributes?: CanvasRenderingContext2DSettings): CanvasLike;
    getOrCreateContext(offscreenCanvas: CanvasLike, contextAttributes?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
}
//# sourceMappingURL=OffscreenCanvasCreator.d.ts.map