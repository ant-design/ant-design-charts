import { AABB } from '@antv/g';
import type { FitViewOptions, ID, Point, TransformOptions, ViewportAnimationEffectTiming } from '../types';
import type { RuntimeContext } from './types';
export declare class ViewportController {
    private context;
    private get padding();
    private get paddingOffset();
    constructor(context: RuntimeContext);
    private get camera();
    private landmarkCounter;
    private createLandmark;
    private getAnimation;
    getCanvasSize(): [number, number];
    /**
     * <zh/> 获取画布中心坐标
     *
     * <en/> Get the center coordinates of the canvas
     * @returns - <zh/> 画布中心坐标 | <en/> Center coordinates of the canvas
     * @remarks
     * <zh/> 基于画布的宽高计算中心坐标，不受视口变换影响
     *
     * <en/> Calculate the center coordinates based on the width and height of the canvas, not affected by the viewport transformation
     */
    getCanvasCenter(): Point;
    /**
     * <zh/> 当前视口中心坐标
     *
     * <en/> Current viewport center coordinates
     * @returns - <zh/> 视口中心坐标 | <en/> Viewport center coordinates
     * @remarks
     * <zh/> 以画布原点为原点，受到视口变换影响
     *
     * <en/> With the origin of the canvas as the origin, affected by the viewport transformation
     */
    getViewportCenter(): Point;
    getGraphCenter(): Point;
    getZoom(): number;
    getRotation(): number;
    private getTranslateOptions;
    private getRotateOptions;
    private getZoomOptions;
    private transformResolver?;
    transform(options: TransformOptions, animation?: ViewportAnimationEffectTiming): Promise<void>;
    fitView(options?: FitViewOptions, animation?: ViewportAnimationEffectTiming): Promise<void>;
    fitCenter(options: FocusOptions): Promise<void>;
    focusElements(ids: ID[], options?: FocusOptions): Promise<void>;
    private focus;
    /**
     * <zh/> 获取画布元素在视口中的包围盒
     *
     * <en/> Get the bounding box of the canvas element in the viewport
     * @param bbox - <zh/> 画布元素包围盒 | <en/> Canvas element bounding box
     * @returns - <zh/> 视口中的包围盒 | <en/> Bounding box in the viewport
     */
    getBBoxInViewport(bbox: AABB): AABB;
    /**
     * <zh/> 判断点或包围盒是否在视口中
     *
     * <en/> Determine whether the point or bounding box is in the viewport
     * @param target - <zh/> 点或包围盒 | <en/> Point or bounding box
     * @param complete - <zh/> 是否完全在视口中 | <en/> Whether it is completely in the viewport
     * @param tolerance - <zh/> 视口外的容差 | <en/> Tolerance outside the viewport
     * @returns - <zh/> 是否在视口中 | <en/> Whether it is in the viewport
     */
    isInViewport(target: Point | AABB, complete?: boolean, tolerance?: number): boolean;
    cancelAnimation(): void;
}
export interface FocusOptions {
    /**
     * <zh/> 动画配置
     *
     * <en/> Animation configuration
     */
    animation?: ViewportAnimationEffectTiming;
    /**
     * <zh/> 使用子图形计算包围盒
     *
     * <en/> Calculate the bounding box by using sub-shapes
     */
    shapes?: string;
    /**
     * <zh/> 对齐位置，默认为画布中心
     *
     * <en/> Alignment position, default is the center of the canvas
     */
    position?: Point;
}
