import { DisplayObject, GradientType, LinearGradient, Pattern, RadialGradient, Tuple3Number, Image, type CanvasContext, type GlobalRuntime } from '@antv/g-lite';
import { type SliceResult } from './ImageSlicer';
export interface ImageCache extends Partial<SliceResult> {
    img: HTMLImageElement;
    /** [width, height] */
    size: [number, number];
    downSampled?: ImageBitmap | HTMLImageElement;
    downSamplingRate?: number;
}
export type GradientParams = (LinearGradient & RadialGradient) & {
    width: number;
    height: number;
    /**
     * Top-left corner
     */
    min: [number, number];
    type: GradientType;
};
export declare class ImagePool {
    context: CanvasContext;
    private runtime;
    static isSupportTile: boolean;
    private gradientCache;
    private patternCache;
    constructor(context: CanvasContext, runtime: GlobalRuntime);
    getImageSync(src: Image['attributes']['src'], ref: DisplayObject, callback?: (cache: ImageCache) => void): ImageCache | null;
    getOrCreateImage(src: Image['attributes']['src'], ref: DisplayObject): Promise<ImageCache>;
    createDownSampledImage(src: Image['attributes']['src'], ref: DisplayObject): Promise<ImageCache>;
    createImageTiles(src: Image['attributes']['src'], tiles: [number, number][], rerender: () => void, ref: DisplayObject): Promise<ImageCache>;
    releaseImage(src: Image['attributes']['src'], ref: DisplayObject): void;
    releaseImageRef(ref: DisplayObject): void;
    getOrCreatePatternSync(object: DisplayObject, pattern: Pattern, context: CanvasRenderingContext2D, $offscreenCanvas: HTMLCanvasElement, dpr: number, min: Tuple3Number, callback: () => void): CanvasPattern;
    getOrCreateGradient(params: GradientParams, context: CanvasRenderingContext2D): CanvasGradient;
    private generateGradientKey;
    private generatePatternKey;
}
//# sourceMappingURL=ImagePool.d.ts.map