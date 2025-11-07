import type { BaseStyleProps, DisplayObject, RenderingPlugin, RenderingPluginContext, GlobalRuntime } from '@antv/g-lite';
import { Point } from '@antv/g-lite';
export type PointInPathPicker<T extends BaseStyleProps> = (displayObject: DisplayObject<T>, point: Point, isClipPath: boolean, isPointInPath: (displayObject: DisplayObject<T>, point: Point) => boolean, context: RenderingPluginContext, runtime: GlobalRuntime) => boolean;
/**
 * pick shape(s) with Mouse/Touch event
 *
 * 1. find AABB with r-tree
 * 2. do math calculation with geometry in an accurate way
 */
export declare class CanvasPickerPlugin implements RenderingPlugin {
    static tag: string;
    private context;
    private runtime;
    apply(context: RenderingPluginContext, runtime: GlobalRuntime): void;
    private pick;
    private isHit;
    /**
     * use native picking method
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/isPointInPath
     */
    private isPointInPath;
}
//# sourceMappingURL=CanvasPickerPlugin.d.ts.map