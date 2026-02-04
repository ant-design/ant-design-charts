import type { CanvasLike } from '../types';
export type DataURLType = 'image/png' | 'image/jpeg' | 'image/webp' | 'image/bmp';
/**
 * The created image data will have a resolution of 96dpi.
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL#%E5%8F%82%E6%95%B0
 */
export interface DataURLOptions {
    /**
     * The default type is image/png.
     */
    type: DataURLType;
    /**
     * The image quality between 0 and 1 for image/jpeg and image/webp.
     */
    encoderOptions: number;
}
export interface ContextService<Context> {
    init?: () => void;
    initAsync?: () => Promise<void>;
    destroy: () => void;
    getContext: () => Context | null;
    getDomElement: () => CanvasLike | null;
    getDPR: () => number;
    getBoundingClientRect: () => DOMRect | undefined;
    resize: (width: number, height: number) => void;
    applyCursorStyle: (cursor: string) => void;
    toDataURL: (options: Partial<DataURLOptions>) => Promise<string>;
}
//# sourceMappingURL=ContextService.d.ts.map