import { CommonEvent } from '../constants';
import type { RuntimeContext } from '../runtime/types';
import type { ID, IPointerEvent } from '../types';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 展开/收起元素交互配置项
 *
 * <en/> Collapse/Expand combo behavior options
 */
export interface CollapseExpandOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用动画
     *
     * <en/> Whether to enable animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * <zh/> 是否启用展开/收起功能
     *
     * <en/> Whether to enable the expand/collapse function
     * @defaultValue true
     */
    enable?: boolean | ((event: IPointerEvent) => boolean);
    /**
     * <zh/> 触发方式
     *
     * <en/> Trigger method
     * @defaultValue 'dblclick'
     */
    trigger?: CommonEvent.CLICK | CommonEvent.DBLCLICK;
    /**
     * <zh/> 完成收起时的回调
     *
     * <en/> Callback when collapse is completed
     */
    onCollapse?: (id: ID) => void;
    /**
     * <zh/> 完成展开时的回调
     *
     * <en/> Callback when expand is completed
     */
    onExpand?: (id: ID) => void;
    /**
     * <zh/> 是否对准目标元素，避免视图偏移
     *
     * <en/> Whether to focus on the target element to avoid view offset
     */
    align?: boolean;
}
/**
 * <zh/> 展开/收起元素交互
 *
 * <en/> Collapse/Expand Element behavior
 * @remarks
 * <zh/> 通过操作展开/收起元素。
 *
 * <en/> Expand/collapse elements by operation.
 */
export declare class CollapseExpand extends BaseBehavior<CollapseExpandOptions> {
    static defaultOptions: Partial<CollapseExpandOptions>;
    constructor(context: RuntimeContext, options: CollapseExpandOptions);
    update(options: Partial<CollapseExpandOptions>): void;
    private bindEvents;
    private unbindEvents;
    private onCollapseExpand;
    private validate;
    destroy(): void;
}
