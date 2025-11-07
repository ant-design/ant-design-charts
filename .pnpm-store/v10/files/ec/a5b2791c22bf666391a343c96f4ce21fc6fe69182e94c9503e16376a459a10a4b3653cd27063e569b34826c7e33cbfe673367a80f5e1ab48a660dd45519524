import type { RuntimeContext } from '../runtime/types';
import type { IKeyboardEvent, IPointerEvent, Vector2, ViewportAnimationEffectTiming } from '../types';
import type { ShortcutKey } from '../utils/shortcut';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 拖拽画布交互配置项
 *
 * <en/> Drag canvas behavior options
 */
export interface DragCanvasOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用拖拽动画，仅在使用按键移动时有效
     *
     * <en/> Whether to enable the animation of dragging, only valid when using key movement
     */
    animation?: ViewportAnimationEffectTiming;
    /**
     * <zh/> 是否启用拖拽画布的功能
     *
     * <en/> Whether to enable the function of dragging the canvas
     * @defaultValue true
     */
    enable?: boolean | ((event: IPointerEvent | IKeyboardEvent) => boolean);
    /**
     * <zh/> 允许拖拽方向
     * - `'x'`: 只允许水平拖拽
     * - `'y'`: 只允许垂直拖拽
     * - `'both'`: 不受限制，允许水平和垂直拖拽
     *
     * <en/> Allowed drag direction
     * - `'x'`: Only allow horizontal drag
     * - `'y'`: Only allow vertical drag
     * - `'both'`: Allow horizontal and vertical drag
     * @defaultValue `'both'`
     */
    direction?: 'x' | 'y' | 'both';
    /**
     * <zh/> 可拖拽的视口范围，默认最多可拖拽一屏。可以分别设置上、右、下、左四个方向的范围，每个方向的范围在 [0, Infinity] 之间
     *
     * <en/> The draggable viewport range allows you to drag up to one screen by default. You can set the range for each direction (top, right, bottom, left) individually, with each direction's range between [0, Infinity]
     * @defaultValue Infinity
     */
    range?: number | number[];
    /**
     * <zh/> 触发拖拽的方式，默认使用指针按下拖拽
     *
     * <en/> The way to trigger dragging, default to dragging with the pointer pressed
     */
    trigger?: {
        up: ShortcutKey;
        down: ShortcutKey;
        left: ShortcutKey;
        right: ShortcutKey;
    };
    /**
     * <zh/> 触发一次按键移动的距离
     *
     * <en/> The distance of a single key movement
     * @defaultValue 10
     */
    sensitivity?: number;
    /**
     * <zh/> 完成拖拽时的回调
     *
     * <en/> Callback when dragging is completed
     */
    onFinish?: () => void;
}
/**
 * <zh/> 拖拽画布交互
 *
 * <en/> Drag canvas behavior
 */
export declare class DragCanvas extends BaseBehavior<DragCanvasOptions> {
    static defaultOptions: Partial<DragCanvasOptions>;
    private shortcut;
    private defaultCursor;
    constructor(context: RuntimeContext, options: DragCanvasOptions);
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<DragCanvasOptions>): void;
    private bindEvents;
    private isDragging;
    private onDragStart;
    private onDrag;
    private onDragEnd;
    private invokeOnFinish;
    private onTranslate;
    /**
     * <zh/> 平移画布
     *
     * <en/> Translate canvas
     * @param offset - <zh/> 平移距离 | <en/> Translation distance
     * @param animation - <zh/> 动画配置 | <en/> Animation configuration
     * @internal
     */
    protected translate(offset: Vector2, animation?: ViewportAnimationEffectTiming): Promise<void>;
    private clampByRotation;
    private clampByDirection;
    private clampByRange;
    private validate;
    private unbindEvents;
    destroy(): void;
}
