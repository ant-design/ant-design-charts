import type { RuntimeContext } from '../runtime/types';
import type { EdgeDirection, Element, IPointerEvent, State } from '../types';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 悬浮元素交互配置项
 *
 * <en/> Hover element behavior options
 */
export interface HoverActivateOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用动画
     *
     * <en/> Whether to enable animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * <zh/> 是否启用悬浮元素的功能
     *
     * <en/> Whether to enable hover element function
     * @defaultValue true
     */
    enable?: boolean | ((event: IPointerEvent) => boolean);
    /**
     * <zh/> 激活元素的n度关系
     * - 默认为 `0`，表示只激活当前节点
     * - `1` 表示激活当前节点及其直接相邻的节点和边，以此类推
     *
     * <en/> N-degree relationship of the hovered element
     * - default to `0`, which means only the current node is activated
     * - `1` means the current node and its directly adjacent nodes and edges are activated, etc
     * @defaultValue 0
     */
    degree?: number | ((event: IPointerEvent) => number);
    /**
     * <zh/> 指定边的方向
     * - `'both'`: 表示激活当前节点的所有关系
     * - `'in'`: 表示激活当前节点的入边和入节点
     * - `'out'`: 表示激活当前节点的出边和出节点
     *
     * <en/> Specify the direction of the edge
     * - `'both'`: Activate all relationships of the current node
     * - `'in'`: Activate the incoming edges and nodes of the current node
     * - `'out'`: Activate the outgoing edges and nodes of the current node
     * @defaultValue 'both'
     */
    direction?: EdgeDirection;
    /**
     * <zh/> 激活元素的状态，默认为 `active`
     *
     * <en/> Active element state, default to`active`
     * @defaultValue 'active'
     */
    state?: State;
    /**
     * <zh/> 非激活元素的状态，默认为不改变
     *
     * <en/> Inactive element state, default to no change
     */
    inactiveState?: State;
    /**
     * <zh/> 当元素被悬停时的回调
     *
     * <en/> Callback when the element is hovered
     */
    onHover?: (event: IPointerEvent) => void;
    /**
     * <zh/> 当悬停结束时的回调
     *
     * <en/> Callback when the hover ends
     */
    onHoverEnd?: (event: IPointerEvent) => void;
}
/**
 * <zh/> 悬浮元素交互
 *
 * <en/> Hover element behavior
 * @remarks
 * <zh/> 当鼠标悬停在元素上时，可以激活元素的状态，例如高亮节点或边。
 *
 * <en/> When the mouse hovers over an element, you can activate the state of the element, such as highlighting nodes or edges.
 */
export declare class HoverActivate extends BaseBehavior<HoverActivateOptions> {
    static defaultOptions: Partial<HoverActivateOptions>;
    private isFrozen;
    constructor(context: RuntimeContext, options: HoverActivateOptions);
    private toggleFrozen;
    private bindEvents;
    private hoverElement;
    protected getActiveIds(event: IPointerEvent<Element>): string[];
    private updateElementsState;
    private getElementsState;
    private validate;
    private unbindEvents;
    destroy(): void;
}
