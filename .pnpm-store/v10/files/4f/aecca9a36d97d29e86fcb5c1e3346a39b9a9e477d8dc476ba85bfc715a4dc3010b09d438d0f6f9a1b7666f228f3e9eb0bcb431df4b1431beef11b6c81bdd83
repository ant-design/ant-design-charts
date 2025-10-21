import { CanvasContext, CSSGradientValue, CSSRGB, DisplayObject, GlobalRuntime, ParsedBaseStyleProps, Pattern } from '@antv/g-lite';
import type { ImagePool } from '@antv/g-plugin-image-loader';
import { CanvasRendererPlugin } from '../../CanvasRendererPlugin';
import { OptimizedDefaultRenderer } from './OptimizedDefault';
export declare class DefaultRenderer extends OptimizedDefaultRenderer {
    render(context: CanvasRenderingContext2D, parsedStyle: ParsedBaseStyleProps, object: DisplayObject, canvasContext: CanvasContext, plugin: CanvasRendererPlugin, runtime: GlobalRuntime): void;
    private clearShadowAndFilter;
}
/**
 * apply before fill and stroke but only once
 */
export declare function setShadowAndFilter(object: DisplayObject, context: CanvasRenderingContext2D, hasShadow: boolean): void;
export declare function applyFill(context: CanvasRenderingContext2D, object: DisplayObject, fill: CSSRGB | CSSGradientValue[] | Pattern, fillRule: 'nonzero' | 'evenodd', canvasContext: CanvasContext, plugin: CanvasRendererPlugin, runtime: GlobalRuntime, imagePool: ImagePool, skipFill?: boolean): void;
export declare function applyStroke(context: CanvasRenderingContext2D, object: DisplayObject, stroke: CSSRGB | CSSGradientValue[] | Pattern, canvasContext: CanvasContext, plugin: CanvasRendererPlugin, runtime: GlobalRuntime, imagePool: ImagePool, skipStroke?: boolean): void;
//# sourceMappingURL=Default.d.ts.map