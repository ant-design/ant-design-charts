interface API {
    requestAnimationFrame: typeof requestAnimationFrame;
    cancelAnimationFrame: typeof cancelAnimationFrame;
    createCanvas: () => HTMLCanvasElement | OffscreenCanvas;
}
export interface SliceResult {
    tileSize: [number, number];
    /** [rows, cols] */
    gridSize: [number, number];
    /**
     * @example
     * ```
     * [
     *  // tileY=0
     *  [tileX=0, tileX=1, ...],
     *  // tileY=1
     *  [tileX=0, tileX=1, ...],
     * ]
     * ```
     */
    tiles: (null | {
        x: number;
        y: number;
        tileX: number;
        tileY: number;
        data: HTMLCanvasElement | OffscreenCanvas;
    })[][];
}
export declare class ImageSlicer {
    static api: API;
    static TASK_NUM_PER_FRAME: number;
    static rafId: ReturnType<typeof requestAnimationFrame>;
    static stop(api?: API): void;
    static executeTask(api?: API): void;
    static sliceImage(image: HTMLImageElement, sliceWidth: number, sliceHeight: number, rerender: () => void, overlap?: number, api?: API): SliceResult;
}
export {};
//# sourceMappingURL=ImageSlicer.d.ts.map