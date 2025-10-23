import type { RuntimeContext } from '../runtime/types';
import type { ComboData, EdgeData, NodeData } from '../spec';
import type { Element, ElementDatum, IEvent, NodeCentralityOptions, Padding } from '../types';
import type { BaseBehaviorOptions } from './base-behavior';
import { BaseBehavior } from './base-behavior';
/**
 * <zh/> 标签自适应显示配置项
 *
 * <en/> Auto Adapt Label Options
 */
export interface AutoAdaptLabelOptions extends BaseBehaviorOptions {
    /**
     * <zh/> 是否启用
     *
     * <en/> Whether to enable
     * @defaultValue `true`
     */
    enable?: boolean | ((event: IEvent) => boolean);
    /**
     * <zh/> 根据元素的重要性从高到低排序，重要性越高的元素其标签显示优先级越高。一般情况下 combo > node > edge
     *
     * <en/> Sort elements by their importance in descending order; elements with higher importance have higher label display priority; usually combo > node > edge
     */
    sort?: (elementA: ElementDatum, elementB: ElementDatum) => -1 | 0 | 1;
    /**
     * <zh/> 根据节点的重要性从高到低排序，重要性越高的节点其标签显示优先级越高。内置几种中心性算法，也可以自定义排序函数。需要注意，如果设置了 `sort`，则 `sortNode` 不会生效
     *
     * <en/> Sort nodes by importance in descending order; nodes with higher importance have higher label display priority. Several centrality algorithms are built in, and custom sorting functions can also be defined. It should be noted that if `sort` is set, `sortNode` will not take effect
     * @defaultValue { type: 'degree' }
     */
    sortNode?: NodeCentralityOptions | ((nodeA: NodeData, nodeB: NodeData) => -1 | 0 | 1);
    /**
     * <zh/> 根据边的重要性从高到低排序，重要性越高的边其标签显示优先级越高。默认按照数据先后进行排序。需要注意，如果设置了 `sort`，则 `sortEdge` 不会生效
     *
     * <en/> Sort edges by importance in descending order; edges with higher importance have higher label display priority. By default, they are sorted according to the data. It should be noted that if `sort` is set, `sortEdge` will not take effect
     */
    sortEdge?: (edgeA: EdgeData, edgeB: EdgeData) => -1 | 0 | 1;
    /**
     * <zh/> 根据群组的重要性从高到低排序，重要性越高的群组其标签显示优先级越高。默认按照数据先后进行排序。需要注意，如果设置了 `sort`，则 `sortCombo` 不会生效
     *
     * <en/> Sort combos by importance in descending order; combos with higher importance have higher label display priority. By default, they are sorted according to the data. It should be noted that if `sort` is set, `sortCombo` will not take effect
     */
    sortCombo?: (comboA: ComboData, comboB: ComboData) => -1 | 0 | 1;
    /**
     * <zh/> 设置标签的内边距，用于判断标签是否重叠，以避免标签显示过于密集
     *
     * <en/> Set the padding of the label to determine whether the label overlaps to avoid the label being displayed too densely
     * @defaultValue 0
     */
    padding?: Padding;
    /**
     * <zh/> 节流时间
     *
     * <en/> Throttle time
     * @defaultValue 32
     */
    throttle?: number;
}
/**
 * <zh/> 标签自适应显示
 *
 * <en/> Auto Adapt Label
 * @remarks
 * <zh/> 标签自适应显示是一种动态标签管理策略，旨在根据当前可视范围的空间分配、节点重要性等因素，智能调整哪些标签应显示或隐藏。通过对可视区域的实时分析，确保用户在不同的交互场景下获得最相关最清晰的信息展示，同时避免视觉过载和信息冗余。
 *
 * <en/ >Label Adaptive Display is a dynamic label management strategy designed to intelligently adjust which labels should be shown or hidden based on factors such as the spatial allocation of the current viewport and node importance. By analyzing the visible area in real-time, it ensures that users receive the most relevant and clear information display in various interactive scenarios, while avoiding visual overload and information redundancy.
 */
export declare class AutoAdaptLabel extends BaseBehavior<AutoAdaptLabelOptions> {
    static defaultOptions: Partial<AutoAdaptLabelOptions>;
    constructor(context: RuntimeContext, options: AutoAdaptLabelOptions);
    update(options: Partial<AutoAdaptLabelOptions>): void;
    /**
     * <zh/> 检查当前包围盒是否有足够的空间进行展示；如果与已经展示的包围盒有重叠，则不会展示
     *
     * <en/> Check whether the current bounding box has enough space to display; if it overlaps with the displayed bounding box, it will not be displayed
     * @param bbox - bbox
     * @param bboxes - occupied bboxes which are already shown
     * @returns whether the bbox is overlapping with the bboxes or outside the viewpointBounds
     */
    private isOverlapping;
    private occupiedBounds;
    private detectLabelCollision;
    private getLabelElements;
    private getLabelElementsInView;
    private hideLabelIfExceedViewport;
    private nodeCentralities;
    private sortNodesByCentrality;
    protected sortLabelElementsInView: (labelElements: Element[]) => Element[];
    private labelElementsInView;
    private isFirstRender;
    protected onToggleVisibility: (event: IEvent) => void;
    private hiddenElements;
    private hideLabel;
    private showLabel;
    protected onTransform: () => void;
    private enableToggle;
    private toggle;
    private onBeforeRender;
    private onAfterRender;
    private bindEvents;
    private unbindEvents;
    private validate;
    destroy(): void;
}
