import type { RuntimeContext } from '../runtime/types';
import type { IKeyboardEvent } from '../types';
import { ShortcutKey } from '../utils/shortcut';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 滚动画布交互配置项
 *
 * <en/> Scroll canvas behavior options
 */
export interface ScrollCanvasOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用滚动画布的功能
     *
     * <en/> Whether to enable the function of scrolling the canvas
     * @defaultValue true
     */
    enable?: boolean | ((event: WheelEvent | IKeyboardEvent) => boolean);
    /**
     * <zh/> 触发滚动的方式，默认使用指针滚动
     *
     * <en/> The way to trigger scrolling, default to scrolling with the pointer pressed
     */
    trigger?: {
        up: ShortcutKey;
        down: ShortcutKey;
        left: ShortcutKey;
        right: ShortcutKey;
    };
    /**
     * <zh/> 允许的滚动方向
     * - 默认情况下没有限制
     * - `'x'` : 只允许水平滚动
     * - `'y'` : 只允许垂直滚动
     *
     * <en/> The allowed rolling direction
     * - by default, there is no restriction
     * - `'x'`: only allow horizontal scrolling
     * - `'y'`: only allow vertical scrolling
     */
    direction?: 'x' | 'y';
    /**
     * <zh/> 可滚动的视口范围，默认最多可滚动一屏。可以分别设置上、右、下、左四个方向的范围，每个方向的范围在 [0, Infinity] 之间
     *
     * <en/> The scrollable viewport range allows you to scroll up to one screen by default. You can set the range for each direction (top, right, bottom, left) individually, with each direction's range between [0, Infinity]
     * @defaultValue 1
     */
    range?: number | number[];
    /**
     * <zh/> 滚动灵敏度
     *
     * <en/> Scroll sensitivity
     * @defaultValue 1
     */
    sensitivity?: number;
    /**
     * <zh/> 完成滚动时的回调
     *
     * <en/> Callback when scrolling is completed
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
 * <zh/> 滚动画布交互
 *
 * <en/> Scroll canvas behavior
 */
export declare class ScrollCanvas extends BaseBehavior<ScrollCanvasOptions> {
    static defaultOptions: Partial<ScrollCanvasOptions>;
    private shortcut;
    constructor(context: RuntimeContext, options: ScrollCanvasOptions);
    /**
     * <zh/> 更新配置
     *
     * <en/> Update options
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<ScrollCanvasOptions>): void;
    private bindEvents;
    get graphDom(): import("@antv/g").CanvasLike | null;
    private onWheel;
    private formatDisplacement;
    private clampByDirection;
    private clampByRange;
    private scroll;
    private validate;
    /**
     * <zh/> 销毁画布滚动
     *
     * <en/> Destroy the canvas scrolling
     */
    destroy(): void;
}
