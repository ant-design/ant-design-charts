import type { RectStyleProps } from '@antv/g';
import type { Graph } from '../runtime/graph';
import type { RuntimeContext } from '../runtime/types';
import type { ElementType, ID, IPointerEvent, Point, State } from '../types';
import type { ShortcutKey } from '../utils/shortcut';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 框选配置项
 *
 * <en/> Brush select options
 */
export interface BrushSelectOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用动画
     *
     * <en/> Whether to enable animation.
     * @defaultValue false
     */
    animation?: boolean;
    /**
     * <zh/> 是否启用框选功能
     *
     * <en/> Whether to enable Brush select element function.
     * @defaultValue true
     */
    enable?: boolean | ((event: IPointerEvent) => boolean);
    /**
     * <zh/> 可框选的元素类型
     *
     * <en/> Enable Elements type.
     * @defaultValue ['node', 'combo', 'edge']
     */
    enableElements?: ElementType[];
    /**
     * <zh/> 按下该快捷键配合鼠标点击进行框选
     *
     * <en/> Press this shortcut key to apply brush select with mouse click.
     * @remarks
     * <zh/> 注意，`trigger` 设置为 `['drag']` 时会导致 `drag-canvas` 行为失效。两者不可同时配置。
     *
     * <en/> Note that setting `trigger` to `['drag']` will cause the `drag-canvas` behavior to fail. The two cannot be configured at the same time.
     * @defaultValue ['shift']
     */
    trigger?: ShortcutKey;
    /**
     * <zh/> 被选中时切换到该状态
     *
     * <en/> The state to switch to when selected.
     * @defaultValue 'selected'
     */
    state?: State;
    /**
     * <zh/> 框选的选择模式
     * - `'union'`：保持已选元素的当前状态，并添加指定的 state 状态。
     * - `'intersect'`：如果已选元素已有指定的 state 状态，则保留；否则清除该状态。
     * - `'diff'`：对已选元素的指定 state 状态进行取反操作。
     * - `'default'`：清除已选元素的当前状态，并添加指定的 state 状态。
     *
     * <en/> Brush select mode
     * - `'union'`: Keep the current state of the selected elements and add the specified state.
     * - `'intersect'`: If the selected elements already have the specified state, keep it; otherwise, clearBrush it.
     * - `'diff'`: Perform a negation operation on the specified state of the selected elements.
     * - `'default'`: Clear the current state of the selected elements and add the specified state.
     * @defaultValue 'default'
     */
    mode?: 'union' | 'intersect' | 'diff' | 'default';
    /**
     * <zh/> 是否及时框选, 仅在框选模式为 `default` 时生效
     *
     * <en/> Whether to brush select immediately, only valid when the brush select mode is `default`
     * @defaultValue false
     */
    immediately?: boolean;
    /**
     * <zh/> 框选 框样式
     *
     * <en/> Timely screening.
     */
    style?: RectStyleProps;
    /**
     * <zh/> 框选元素状态回调。
     *
     * <en/> Callback when brush select elements.
     * @param states - 选中的元素状态
     */
    onSelect?: (states: Record<ID, State | State[]>) => void;
}
/**
 * <zh/> 框选一组元素
 *
 * <en/> Brush select elements
 */
export declare class BrushSelect extends BaseBehavior<BrushSelectOptions> {
    static defaultOptions: Partial<BrushSelectOptions>;
    private startPoint?;
    private endPoint?;
    private rectShape?;
    private shortcut?;
    constructor(context: RuntimeContext, options: BrushSelectOptions);
    /**
     * Triggered when the pointer is pressed
     * @param event - Pointer event
     * @internal
     */
    protected onPointerDown(event: IPointerEvent): void;
    /**
     * Triggered when the pointer is moved
     * @param event - Pointer event
     * @internal
     */
    protected onPointerMove(event: IPointerEvent): void;
    /**
     * Triggered when the pointer is released
     * @param event - Pointer event
     * @internal
     */
    protected onPointerUp(event: IPointerEvent): void;
    /**
     * <zh/> 清除状态
     *
     * <en/> Clear state
     * @internal
     */
    protected clearStates(): void;
    /**
     * <zh/> 清除画布上所有元素的状态
     *
     * <en/> Clear the state of all elements on the canvas
     * @internal
     */
    protected clearElementsStates(): void;
    /**
     * <zh/> 更新选中的元素状态
     *
     * <en/> Update the state of the selected elements
     * @param points - <zh/> 框选区域的顶点 | <en/> The vertex of the selection area
     * @internal
     */
    protected updateElementsStates(points: Point[]): void;
    /**
     * <zh/> 查找画布上在指定区域内显示的元素。当节点的包围盒中心在矩形内时，节点被选中；当边的两端节点在矩形内时，边被选中；当 combo 的包围盒中心在矩形内时，combo 被选中。
     *
     * <en/> Find the elements displayed in the specified area on the canvas. A node is selected if the center of its bbox is inside the rect; An edge is selected if both end nodes are inside the rect ;A combo is selected if the center of its bbox is inside the rect.
     * @param graph - <zh/> 图实例 | <en/> Graph instance
     * @param points - <zh/> 框选区域的顶点 | <en/> The vertex of the selection area
     * @param itemTypes - <zh/> 元素类型 | <en/> Element type
     * @returns <zh/> 选中的元素 ID 数组 | <en/> Selected element ID array
     * @internal
     */
    protected selector(graph: Graph, points: Point[], itemTypes: ElementType[]): ID[];
    private clearBrush;
    /**
     * <zh/> 当前按键是否和 trigger 配置一致
     *
     * <en/> Is the current key consistent with the trigger configuration
     * @returns <zh/> 是否一致 | <en/> Is consistent
     * @internal
     */
    protected isKeydown(): boolean;
    /**
     * <zh/> 验证是否启用框选
     *
     * <en/> Verify whether brush select is enabled
     * @param event - <zh/> 事件 | <en/> Event
     * @returns <zh/> 是否启用 | <en/> Whether to enable
     * @internal
     */
    protected validate(event: IPointerEvent): boolean;
    private bindEvents;
    private unbindEvents;
    /**
     * <zh/> 更新配置项
     *
     * <en/> Update configuration
     * @param options - <zh/> 配置项 | <en/> Options
     * @internal
     */
    update(options: Partial<BrushSelectOptions>): void;
    /**
     * <zh/> 销毁
     *
     * <en/> Destroy
     * @internal
     */
    destroy(): void;
}
export declare const getCursorPoint: (event: IPointerEvent, graph: Graph) => Point;
