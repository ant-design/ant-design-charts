import type { BaseStyleProps, Cursor } from '@antv/g';
import type { RuntimeContext } from '../runtime/types';
import type { EdgeDirection, ID, IElementDragEvent, Point, Prefix, State, Vector2 } from '../types';
import { ShortcutKey } from '../utils/shortcut';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 拖拽元素交互配置项
 *
 * <en/> Drag element behavior options
 */
export interface DragElementOptions extends BaseBehaviorOptions, Prefix<'shadow', BaseStyleProps> {
    /**
     * <zh/> 是否启用拖拽动画
     *
     * <en/> Whether to enable drag animation
     * @defaultValue true
     */
    animation?: boolean;
    /**
     * <zh/> 是否启用拖拽节点的功能，默认可以拖拽 node 和 combo
     *
     * <en/> Whether to enable the function of dragging the node，default can drag node and combo
     * @defaultValue ['node', 'combo'].includes(event.targetType)
     */
    enable?: boolean | ((event: IElementDragEvent) => boolean);
    /**
     * <zh/> 触发拖拽的方式
     * 支持按下组合键才能触发拖拽元素
     *
     * <en/> The way to trigger drag element
     * Support triggering by pressing a combination of keys
     */
    trigger?: ShortcutKey;
    /**
     * <zh/> 拖拽操作效果
     * - `'link'`: 将拖拽元素置入为目标元素的子元素
     * - `'move'`: 移动元素并更新父元素尺寸
     * - `'none'`: 仅更新拖拽目标位置，不做任何额外操作
     *
     * <en/> Drag operation effect
     * - `'link'`: Place the drag element as a child element of the target element
     * - `'move'`: Move the element and update the parent element size
     * - `'none'`: Only update the drag target position, no additional operations
     * @remarks
     * <zh/> combo 元素可作为元素容器置入 node 或 combo 元素
     *
     * <en/> The combo element can be placed as an element container into the node or combo element
     * @defaultValue 'move'
     */
    dropEffect?: 'link' | 'move' | 'none';
    /**
     * <zh/> 节点选中的状态，启用多选时会基于该状态查找选中的节点
     *
     * <en/> The state name of the selected node, when multi-selection is enabled, the selected nodes will be found based on this state
     * @defaultValue 'selected'
     */
    state?: State;
    /**
     * <zh/> 拖拽时隐藏的边
     * - `'none'`: 不隐藏
     * - `'out'`: 隐藏以节点为源节点的边
     * - `'in'`: 隐藏以节点为目标节点的边
     * - `'both'`: 隐藏与节点相关的所有边
     * - `'all'`: 隐藏图中所有边
     *
     * <en/> Edges hidden during dragging
     * - `'none'`: do not hide
     * - `'out'`: hide the edges with the node as the source node
     * - `'in'`: hide the edges with the node as the target node
     * - `'both'`: hide all edges related to the node
     * - `'all'`: hide all edges in the graph
     * @remarks
     * <zh/> 使用幽灵节点时不会隐藏边
     *
     * <en/> Edges will not be hidden when using the drag shadow
     * @defaultValue 'none'
     */
    hideEdge?: 'none' | 'all' | EdgeDirection;
    /**
     * <zh/> 是否启用幽灵节点，即用一个图形代替节点跟随鼠标移动
     *
     * <en/> Whether to enable the drag shadow, that is, use a shape to replace the node to follow the mouse movement
     */
    shadow?: boolean;
    /**
     * <zh/> 完成拖拽时的回调
     *
     * <en/> Callback when dragging is completed
     */
    onFinish?: (ids: ID[]) => void;
    /**
     * <zh/> 指针样式
     *
     * <en/> Cursor style
     */
    cursor?: {
        /**
         * <zh/> 默认指针样式
         *
         * <en/> Default cursor style
         */
        default?: Cursor;
        /**
         * <zh/> 可抓取指针样式
         *
         * <en/> Cursor style that can be grabbed
         */
        grab: Cursor;
        /**
         * <zh/> 抓取中指针样式
         *
         * <en/> Cursor style when grabbing
         */
        grabbing: Cursor;
    };
}
/**
 * <zh/> 拖拽元素交互
 *
 * <en/> Drag element behavior
 */
export declare class DragElement extends BaseBehavior<DragElementOptions> {
    static defaultOptions: Partial<DragElementOptions>;
    protected enable: boolean;
    private enableElements;
    protected target: ID[];
    private shadow?;
    private shadowOrigin;
    private hiddenEdges;
    private isDragging;
    private shortcut;
    constructor(context: RuntimeContext, options: DragElementOptions);
    /**
     * <zh/> 更新元素拖拽配置
     *
     * <en/> Update the element dragging configuration
     * @param options - <zh/> 配置项 | <en/> options
     * @internal
     */
    update(options: Partial<DragElementOptions>): void;
    private bindEvents;
    /**
     * <zh/> 获取当前选中的节点 id 集合
     *
     * <en/> Get the id collection of the currently selected node
     * @param currTarget - <zh/> 当前拖拽目标元素 id 集合 | <en/> The id collection of the current drag target element
     * @returns <zh/> 当前选中的节点 id 集合 | <en/> The id collection of the currently selected node
     * @internal
     */
    protected getSelectedNodeIDs(currTarget: ID[]): string[];
    /**
     * Get the delta of the drag
     * @param event - drag event object
     * @returns delta
     * @internal
     */
    protected getDelta(event: IElementDragEvent): Vector2 | import("../types").Vector3;
    /**
     * <zh/> 拖拽开始时的回调
     *
     * <en/> Callback when dragging starts
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     * @internal
     */
    protected onDragStart(event: IElementDragEvent): void;
    /**
     * <zh/> 拖拽过程中的回调
     *
     * <en/> Callback when dragging
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     * @internal
     */
    protected onDrag(event: IElementDragEvent): void;
    /**
     * <zh/> 元素拖拽结束的回调
     *
     * <en/> Callback when dragging ends
     * @internal
     */
    protected onDragEnd(): void;
    /**
     * <zh/> 拖拽放下的回调
     *
     * <en/> Callback when dragging is released
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     */
    private onDrop;
    private setCursor;
    /**
     * <zh/> 当前按键是否和 trigger 配置一致
     *
     * <en/> Is the current key consistent with the trigger configuration
     * @returns <zh/> 是否一致 | <en/> Is consistent
     * @internal
     */
    protected isKeydown(): boolean;
    /**
     * <zh/> 验证元素是否允许拖拽
     *
     * <en/> Verify if the element is allowed to be dragged
     * @param event - <zh/> 拖拽事件对象 | <en/> drag event object
     * @returns <zh/> 是否允许拖拽 | <en/> Whether to allow dragging
     * @internal
     */
    protected validate(event: IElementDragEvent): boolean;
    protected clampByRotation([dx, dy]: Point): Vector2;
    /**
     * <zh/> 移动元素
     *
     * <en/> Move the element
     * @param ids - <zh/> 元素 id 集合 | <en/> element id collection
     * @param offset <zh/> 偏移量 | <en/> offset
     * @internal
     */
    protected moveElement(ids: ID[], offset: Point): Promise<void>;
    private moveShadow;
    private createShadow;
    private showEdges;
    /**
     * Hide the edge
     * @internal
     */
    protected hideEdge(): void;
    private unbindEvents;
    destroy(): void;
}
