import type { DisplayObject, RenderingPlugin, RenderingPluginContext, CanvasContext, GlobalRuntime } from '@antv/g-lite';
import type { CanvasRendererPluginOptions } from './interfaces';
export interface RenderState {
    restoreStack: DisplayObject[];
    prevObject: DisplayObject;
    currentContext: Map<keyof CanvasRenderingContext2D | 'lineDash', unknown>;
}
/**
 * support 2 modes in rendering:
 * * immediate
 * * delayed: render at the end of frame with dirty-rectangle
 */
export declare class CanvasRendererPlugin implements RenderingPlugin {
    #private;
    private canvasRendererPluginOptions;
    static tag: string;
    private context;
    private pathGeneratorFactory;
    constructor(canvasRendererPluginOptions: CanvasRendererPluginOptions);
    private renderQueue;
    private clearFullScreenLastFrame;
    private clearFullScreen;
    /**
     * view projection matrix
     */
    private vpMatrix;
    private dprMatrix;
    private tmpMat4;
    private vec3a;
    private vec3b;
    private vec3c;
    private vec3d;
    apply(context: RenderingPluginContext, runtime: GlobalRuntime): void;
    private clearRect;
    renderDisplayObjectOptimized(object: DisplayObject, context: CanvasRenderingContext2D, canvasContext: CanvasContext, renderState: RenderState, runtime: GlobalRuntime): void;
    renderDisplayObject(object: DisplayObject, context: CanvasRenderingContext2D, canvasContext: CanvasContext, renderState: RenderState, runtime: GlobalRuntime): void;
    private applyAttributesToContext;
    private convertAABB2Rect;
    /**
     * TODO: merge dirty rectangles with some strategies.
     * For now, we just simply merge all the rectangles into one.
     * @see https://idom.me/articles/841.html
     */
    private mergeDirtyAABBs;
    private saveDirtyAABB;
    private applyWorldTransform;
    private safeMergeAABB;
}
//# sourceMappingURL=CanvasRendererPlugin.d.ts.map