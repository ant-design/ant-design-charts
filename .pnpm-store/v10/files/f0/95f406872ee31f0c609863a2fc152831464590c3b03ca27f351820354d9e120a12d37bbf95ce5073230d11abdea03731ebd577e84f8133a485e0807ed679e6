import type { Canvas } from '@antv/g-lite';
import type { CanvasOptions, DownloadImageOptions } from './types';
export interface ImageExporterOptions {
    canvas: Canvas;
    defaultFilename?: string;
}
export declare class ImageExporter {
    private options;
    constructor(options: ImageExporterOptions);
    /**
     * return a HTMLCanvasElement which you can call `toDataURL` later
     *
     * @example
     * const canvas = await exporter.toCanvas();
     * canvas.toDataURL(); // data:
     */
    toCanvas(options?: Partial<CanvasOptions>): Promise<HTMLCanvasElement>;
    /**
     * generate data url for the whole viewport
     */
    private toDataURL;
    private isSVG;
    toSVGDataURL(): Promise<string>;
    downloadImage(options: DownloadImageOptions): void;
    private getOrCreateImage;
}
//# sourceMappingURL=ImageExporter.d.ts.map