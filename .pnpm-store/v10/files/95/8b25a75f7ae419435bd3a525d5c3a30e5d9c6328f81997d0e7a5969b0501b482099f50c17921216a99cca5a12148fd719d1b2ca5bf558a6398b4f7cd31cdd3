import type { DisplayObject, ParsedImageStyleProps, GlobalRuntime } from '@antv/g-lite';
import { type ImageCache } from '@antv/g-plugin-image-loader';
import { DefaultRenderer } from './Default';
import { CanvasRendererPlugin, type RenderState } from '../../CanvasRendererPlugin';
export declare class ImageRenderer extends DefaultRenderer {
    static renderFull(context: CanvasRenderingContext2D, parsedStyle: ParsedImageStyleProps, object: DisplayObject, data: {
        image: HTMLImageElement;
        drawRect: [number, number, number, number];
    }): void;
    private renderDownSampled;
    renderTile(context: CanvasRenderingContext2D, parsedStyle: ParsedImageStyleProps, object: DisplayObject, data: {
        src: string | HTMLImageElement;
        imageCache: ImageCache;
        imageRect: [number, number, number, number];
        drawRect: [number, number, number, number];
    }): void;
    render(context: CanvasRenderingContext2D, parsedStyle: ParsedImageStyleProps, object: DisplayObject): void;
    drawToContext(context: CanvasRenderingContext2D, object: DisplayObject, renderState: RenderState, plugin: CanvasRendererPlugin, runtime: GlobalRuntime): void;
}
//# sourceMappingURL=Image.d.ts.map