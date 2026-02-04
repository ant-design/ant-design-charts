import type { DisplayObject, DisplayObjectConfig, Group, PathStyleProps } from '@antv/g';
import { Path } from '@antv/g';
import type { PathArray } from '@antv/util';
import type { Edge, EdgeArrowStyleProps, EdgeBadgeStyleProps, EdgeLabelStyleProps, ID, Keyframe, LoopStyleProps, Node, Point, Prefix } from '../../types';
import { BaseElement } from '../base-element';
import type { BadgeStyleProps, BaseShapeStyleProps, LabelStyleProps } from '../shapes';
/**
 * <zh/> 边的通用样式属性
 *
 * <en/> Base style properties of the edge
 */
export interface BaseEdgeStyleProps extends BaseShapeStyleProps, Prefix<'label', EdgeLabelStyleProps>, Prefix<'halo', PathStyleProps>, Prefix<'badge', EdgeBadgeStyleProps>, Prefix<'startArrow', EdgeArrowStyleProps>, Prefix<'endArrow', EdgeArrowStyleProps>, Prefix<'loop', LoopStyleProps> {
    /**
     * <zh/> 是否显示边的标签
     *
     * <en/> Whether to display the label of the edge
     * @defaultValue true
     */
    label?: boolean;
    /**
     * <zh/> 是否启用自环边
     *
     * <en/> Whether to enable self-loop edge
     * @defaultValue true
     */
    loop?: boolean;
    /**
     * <zh/> 是否显示边的光晕
     *
     * <en/> Whether to display the halo of the edge
     * @defaultValue false
     */
    halo?: boolean;
    /**
     * <zh/> 是否显示边的徽标
     *
     * <en/> Whether to display the badge of the edge
     * @defaultValue true
     */
    badge?: boolean;
    /**
     * <zh/> 是否显示边的起始箭头
     *
     * <en/> Whether to display the start arrow of the edge
     * @defaultValue false
     */
    startArrow?: boolean;
    /**
     * <zh/> 是否显示边的结束箭头
     *
     * <en/> Whether to display the end arrow of the edge
     * @defaultValue false
     */
    endArrow?: boolean;
    /**
     * <zh/> 起始箭头的偏移量
     *
     * <en/> Offset of the start arrow
     */
    startArrowOffset?: number;
    /**
     * <zh/> 结束箭头的偏移量
     *
     * <en/> Offset of the end arrow
     */
    endArrowOffset?: number;
    /**
     * <zh/> 边的起点 ID
     *
     * <en/> The ID of the source node
     * @remarks
     * <zh/> 该属性指向物理意义上的起点，由 G6 内部维护，用户无需过多关注。通常情况下，`sourceNode` 与上一级的 `source` 属性一致。但在某些情况下，`sourceNode` 可能会被 G6 内部转换，例如在 Combo 收起时内部节点上的边会自动连接到父 Combo，此时 `sourceNode` 会变更为父 Combo 的 ID。
     *
     * <en/> This property concerning the physical origin, maintained internally by G6. In general, `sourceNode` corresponds to the `source` attribute of the parent level. However, in certain cases, such as when a Combo is collapsed and internal nodes are destroyed, corresponding edges will automatically connect to the parent Combo. At this point, `sourceNode` will be changed to the ID of the parent Combo
     */
    sourceNode: ID;
    /**
     * <zh/> 边的终点 shape
     *
     * <en/> The source shape. Represents the start of the edge
     */
    targetNode: ID;
    /**
     * <zh/> 边起始连接的 port
     *
     * <en/> The Port of the source node
     */
    sourcePort?: string;
    /**
     * <zh/> 边终点连接的 port
     *
     * <en/> The Port of the target node
     */
    targetPort?: string;
    /**
     * <zh/> 在 “起点” 处添加一个标记图形，其中 “起始点” 为边与起始节点的交点
     *
     * <en/> Add a marker at the "start point", where the "start point" is the intersection of the edge and the source node
     */
    markerStart?: DisplayObject | null;
    /**
     * <zh/> 调整 “起点” 处标记图形的位置，正偏移量向内，负偏移量向外
     *
     * <en/> Adjust the position of the marker at the "start point", positive offset inward, negative offset outward
     * @defaultValue 0
     */
    markerStartOffset?: number;
    /**
     * <zh/> 在 “终点” 处添加一个标记图形，其中 “终点” 为边与终止节点的交点
     *
     * <en/> Add a marker at the "end point", where the "end point" is the intersection of the edge and the target node
     */
    markerEnd?: DisplayObject | null;
    /**
     * <zh/> 调整 “终点” 处标记图形的位置，正偏移量向内，负偏移量向外
     *
     * <en/> Adjust the position of the marker at the "end point", positive offset inward, negative offset outward
     * @defaultValue 0
     */
    markerEndOffset?: number;
    /**
     * <zh/> 在路径除了 “起点” 和 “终点” 之外的每一个顶点上放置标记图形。在内部实现中，由于我们会把路径中部分命令转换成 C 命令，因此这些顶点实际是三阶贝塞尔曲线的控制点
     *
     * <en/> Place a marker on each vertex of the path except for the "start point" and "end point". In the internal implementation, because we will convert some commands in the path to C commands, these controlPoints are actually the control points of the cubic Bezier curve
     */
    markerMid?: DisplayObject | null;
    /**
     * <zh/> 3D 场景中生效，始终朝向屏幕，因此线宽不受透视投影影像
     *
     * <en/> Effective in 3D scenes, always facing the screen, so the line width is not affected by the perspective projection image
     * @defaultValue true
     */
    isBillboard?: boolean;
}
type ParsedBaseEdgeStyleProps = Required<BaseEdgeStyleProps>;
/**
 * <zh/> 边元素基类
 *
 * <en/> Base class of the edge
 */
export declare abstract class BaseEdge extends BaseElement<BaseEdgeStyleProps> implements Edge {
    type: string;
    static defaultStyleProps: Partial<BaseEdgeStyleProps>;
    constructor(options: DisplayObjectConfig<BaseEdgeStyleProps>);
    protected get sourceNode(): Node;
    protected get targetNode(): Node;
    protected getKeyStyle(attributes: ParsedBaseEdgeStyleProps): PathStyleProps;
    protected abstract getKeyPath(attributes: ParsedBaseEdgeStyleProps): PathArray;
    protected getLoopPath(attributes: ParsedBaseEdgeStyleProps): PathArray;
    protected getEndpoints(attributes: ParsedBaseEdgeStyleProps, optimize?: boolean, controlPoints?: Point[] | (() => Point[])): [Point, Point];
    protected getHaloStyle(attributes: ParsedBaseEdgeStyleProps): false | PathStyleProps;
    protected getLabelStyle(attributes: ParsedBaseEdgeStyleProps): false | LabelStyleProps;
    protected getBadgeStyle(attributes: ParsedBaseEdgeStyleProps): false | BadgeStyleProps;
    protected drawArrow(attributes: ParsedBaseEdgeStyleProps, type: 'start' | 'end'): void;
    private getArrowStyle;
    protected drawLabelShape(attributes: ParsedBaseEdgeStyleProps, container: Group): void;
    protected drawHaloShape(attributes: ParsedBaseEdgeStyleProps, container: Group): void;
    protected drawBadgeShape(attributes: ParsedBaseEdgeStyleProps, container: Group): void;
    protected drawSourceArrow(attributes: ParsedBaseEdgeStyleProps): void;
    protected drawTargetArrow(attributes: ParsedBaseEdgeStyleProps): void;
    protected drawKeyShape(attributes: ParsedBaseEdgeStyleProps, container: Group): Path | undefined;
    render(attributes?: Required<BaseEdgeStyleProps>, container?: Group): void;
    protected onframe(): void;
    animate(keyframes: Keyframe[], options?: number | KeyframeAnimationOptions): import("@antv/g").IAnimation | null;
}
export {};
