import { CanvasContext, DisplayObject, GlobalRuntime, ParsedBaseStyleProps } from '@antv/g-lite';
import type { ImagePool } from '@antv/g-plugin-image-loader';
import { CanvasRendererPlugin, type RenderState } from '../../CanvasRendererPlugin';
import type { StyleRenderer } from './interfaces';
export declare const DEFAULT_STYLE: {
    globalAlpha: number;
    shadowBlur: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowColor: string;
    filter: "none";
    globalCompositeOperation: "source-over";
    strokeStyle: string;
    strokeOpacity: number;
    lineWidth: number;
    lineDash: any[];
    lineDashOffset: number;
    lineCap: "butt";
    lineJoin: "miter";
    miterLimit: number;
    fillStyle: string;
    fillOpacity: number;
};
export declare class OptimizedDefaultRenderer implements StyleRenderer {
    imagePool: ImagePool;
    constructor(imagePool: ImagePool);
    applyAttributesToContext(context: CanvasRenderingContext2D, object: DisplayObject): void;
    render(context: CanvasRenderingContext2D, parsedStyle: ParsedBaseStyleProps, object: DisplayObject, canvasContext: CanvasContext, plugin: CanvasRendererPlugin, runtime: GlobalRuntime): void;
    private applyCommonStyleToContext;
    private applyStrokeFillStyleToContext;
    applyStyleToContext(context: CanvasRenderingContext2D, object: DisplayObject, forceUpdate: boolean, renderState: RenderState): void;
    applyShadowAndFilterStyleToContext(context: CanvasRenderingContext2D, object: DisplayObject, hasShadow: boolean, renderState: RenderState): void;
    clearShadowAndFilterStyleForContext(context: CanvasRenderingContext2D, hasShadow: boolean, hasFilter: boolean, renderState: RenderState, onlyClearShadowFilter?: boolean): void;
    fillToContext(context: CanvasRenderingContext2D, object: DisplayObject, renderState: RenderState, plugin: CanvasRendererPlugin, runtime: GlobalRuntime): void;
    strokeToContext(context: CanvasRenderingContext2D, object: DisplayObject, renderState: RenderState, plugin: CanvasRendererPlugin, runtime: GlobalRuntime): void;
    drawToContext(context: CanvasRenderingContext2D, object: DisplayObject, renderState: RenderState, plugin: CanvasRendererPlugin, runtime: GlobalRuntime): void;
}
//# sourceMappingURL=OptimizedDefault.d.ts.map