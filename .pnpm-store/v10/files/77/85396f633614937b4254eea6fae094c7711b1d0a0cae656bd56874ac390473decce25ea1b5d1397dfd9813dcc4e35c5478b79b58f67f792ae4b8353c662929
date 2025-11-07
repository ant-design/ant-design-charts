import type { RuntimeContext } from '../runtime/types';
import type { IKeyboardEvent, IPointerEvent, IWheelEvent, Point, ViewportAnimationEffectTiming } from '../types';
import type { ShortcutKey } from '../utils/shortcut';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 缩放画布交互配置项
 *
 * <en/> Zoom canvas behavior options
 */
export interface ZoomCanvasOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用缩放动画
     *
     * <en/> Whether to enable the animation of zooming
     * @defaultValue '{ duration: 200 }'
     */
    animation?: ViewportAnimationEffectTiming;
    /**
     * <zh/> 是否启用缩放画布的功能
     *
     * <en/> Whether to enable the function of zooming the canvas
     * @defaultValue true
     */
    enable?: boolean | ((event: IWheelEvent | IKeyboardEvent | IPointerEvent) => boolean);
    /**
     * <zh/> 缩放中心点(视口坐标)
     * - 默认情况下为鼠标位置中心
     *
     * <en/> zoom center(viewport coordinates)
     * - by default , the center is the mouse position center
     */
    origin?: Point;
    /**
     * <zh/> 触发缩放的方式
     * - ShortcutKey：组合快捷键，**默认使用滚轮缩放**，['Control'] 表示按住 Control 键滚动鼠标滚轮时触发缩放
     * - CombinationKey：缩放快捷键，例如 { zoomIn: ['Control', '+'], zoomOut: ['Control', '-'], reset: ['Control', '0'] }
     *
     * <en/> The way to trigger zoom
     * - ShortcutKey: Combination shortcut key, **default to zoom with the mouse wheel**, ['Control'] means zooming when holding down the Control key and scrolling the mouse wheel
     * - CombinationKey: Zoom shortcut key, such as { zoomIn: ['Control', '+'], zoomOut: ['Control', '-'], reset: ['Control', '0'] }
     */
    trigger?: ShortcutKey | {
        zoomIn: ShortcutKey;
        zoomOut: ShortcutKey;
        reset: ShortcutKey;
    };
    /**
     * <zh/> 缩放灵敏度
     *
     * <en/> Zoom sensitivity
     * @defaultValue 1
     */
    sensitivity?: number;
    /**
     * <zh/> 完成缩放时的回调
     *
     * <en/> Callback when zooming is completed
     */
    onFinish?: () => void;
    /**
     * <zh/> 是否阻止默认事件
     *
     * <en/> Whether to prevent the default event
     * @defaultValue true
     */
    preventDefault?: boolean;
}
/**
 * <zh/> 缩放画布交互
 *
 * <en/> Zoom canvas behavior
 */
export declare class ZoomCanvas extends BaseBehavior<ZoomCanvasOptions> {
    static defaultOptions: Partial<ZoomCanvasOptions>;
    private shortcut;
    constructor(context: RuntimeContext, options: ZoomCanvasOptions);
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<ZoomCanvasOptions>): void;
    private bindEvents;
    /**
     * <zh/> 缩放画布
     *
     * <en/> Zoom canvas
     * @param value - <zh/> 缩放值， > 0 放大， < 0 缩小 | <en/> Zoom value, > 0 zoom in, < 0 zoom out
     * @param event - <zh/> 事件对象 | <en/> Event object
     * @param animation - <zh/> 缩放动画配置 | <en/> Zoom animation configuration
     */
    protected zoom: (value: number, event: IWheelEvent | IKeyboardEvent | IPointerEvent, animation: ZoomCanvasOptions["animation"]) => Promise<void>;
    protected onReset: () => Promise<void>;
    /**
     * <zh/> 验证是否可以缩放
     *
     * <en/> Verify whether it can be zoomed
     * @param event - <zh/> 事件对象 | <en/> Event object
     * @returns <zh/> 是否可以缩放 | <en/> Whether it can be zoomed
     * @internal
     */
    protected validate(event: IWheelEvent | IKeyboardEvent | IPointerEvent): boolean;
    private preventDefault;
    /**
     * <zh/> 销毁缩放画布
     *
     * <en/> Destroy zoom canvas
     */
    destroy(): void;
}
