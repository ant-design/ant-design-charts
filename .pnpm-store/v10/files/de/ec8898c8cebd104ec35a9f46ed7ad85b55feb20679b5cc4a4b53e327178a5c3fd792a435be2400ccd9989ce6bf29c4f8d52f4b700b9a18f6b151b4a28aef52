import type { RuntimeContext } from '../runtime/types';
import type { IElementEvent, ViewportAnimationEffectTiming } from '../types';
import { ShortcutKey } from '../utils/shortcut';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 聚焦元素交互配置项
 *
 * <en/> Focus element behavior options
 */
export interface FocusElementOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用动画以及动画配置
     *
     * <en/> Whether to enable animation
     */
    animation?: ViewportAnimationEffectTiming;
    /**
     * <zh/> 是否启用聚焦功能
     *
     * <en/> Whether to enable the function of focusing on the element
     * @defaultValue true
     */
    enable?: boolean | ((event: IElementEvent) => boolean);
    /**
     * <zh/> 触发聚焦的组合键
     * 支持按下组合键的同时点击元素才能触发聚焦
     *
     * <en/> The shortcut key to trigger focus
     * Focus can only be triggered when the element is clicked while the key combination is pressed.
     */
    trigger?: ShortcutKey;
}
/**
 * <zh/> 聚焦元素交互行为
 *
 * <en/> Focus element behavior
 * @remarks
 * <zh/> 点击元素时，将元素聚焦到视图中心。
 *
 * <en/> When an element is clicked, the element is focused to the center of the view.
 */
export declare class FocusElement extends BaseBehavior<FocusElementOptions> {
    static defaultOptions: Partial<FocusElementOptions>;
    private shortcut;
    constructor(context: RuntimeContext, options: FocusElementOptions);
    private bindEvents;
    private focus;
    private validate;
    /**
     * <zh/> 当前按键是否和 trigger 配置一致
     *
     * <en/> Is the current key consistent with the trigger configuration
     * @returns <zh/> 是否一致 | <en/> Is consistent
     * @internal
     */
    private isKeydown;
    private unbindEvents;
    destroy(): void;
}
