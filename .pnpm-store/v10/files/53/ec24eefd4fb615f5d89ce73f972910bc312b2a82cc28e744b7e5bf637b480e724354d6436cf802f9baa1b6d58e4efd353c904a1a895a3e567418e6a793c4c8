import type { BaseStyleProps, DisplayObject, DisplayObjectConfig, Group } from '@antv/g';
import type { CategoricalPalette } from '../../palettes/types';
import type { NodeData } from '../../spec';
import type { ID, Node, NodeBadgeStyleProps, NodeLabelStyleProps, NodePortStyleProps, Point, Port, PortStyleProps, Prefix, Size } from '../../types';
import { BaseElement } from '../base-element';
import type { BadgeStyleProps, BaseShapeStyleProps, IconStyleProps, LabelStyleProps } from '../shapes';
/**
 * <zh/> 节点通用样式配置项
 *
 * <en/> Base node style props
 */
export interface BaseNodeStyleProps extends BaseShapeStyleProps, Prefix<'label', NodeLabelStyleProps>, Prefix<'halo', BaseStyleProps>, Prefix<'icon', IconStyleProps>, Prefix<'badge', BadgeStyleProps>, Prefix<'port', PortStyleProps> {
    /**
     * <zh/> x 坐标
     *
     * <en/> The x-coordinate of node
     */
    x?: number;
    /**
     * <zh/> y 坐标
     *
     * <en/> The y-coordinate of node
     */
    y?: number;
    /**
     * <zh/> z 坐标
     *
     * <en/> The z-coordinate of node
     */
    z?: number;
    /**
     * <zh/> 节点大小，快捷设置节点宽高
     * - 若值为数字，则表示节点的宽度、高度以及深度相同为指定值
     * - 若值为数组，则按数组元素依次表示节点的宽度、高度以及深度
     *
     * <en/> The size of node, which is a shortcut to set the width and height of node
     * - If the value is a number, it means the width, height, and depth of the node are the same as the specified value
     * - If the value is an array, it means the width, height, and depth of the node are represented by the array elements in turn
     */
    size?: Size;
    /**
     * <zh/> 当前节点/组合是否展开
     *
     * <en/> Whether the current node/combo is expanded
     */
    collapsed?: boolean;
    /**
     * <zh/> 子节点实例
     *
     * <en/> The instance of the child node
     * @remarks
     * <zh/> 仅在树图中生效
     *
     * <en/> Only valid in the tree graph
     * @ignore
     */
    childrenNode?: ID[];
    /**
     * <zh/> 子节点数据
     *
     * <en/> The data of the child node
     * @remarks
     * <zh/> 仅在树图中生效。如果当前节点为收起状态，children 可能为空，通过 childrenData 能够获取完整的子元素数据
     *
     * <en/> Only valid in the tree graph. If the current node is collapsed, children may be empty, and the complete child element data can be obtained through childrenData
     * @ignore
     */
    childrenData?: NodeData[];
    /**
     * <zh/> 是否显示节点标签
     *
     * <en/> Whether to show the node label
     * @defaultValue true
     */
    label?: boolean;
    /**
     * <zh/> 是否显示节点光晕
     *
     * <en/> Whether to show the node halo
     * @defaultValue false
     */
    halo?: boolean;
    /**
     * <zh/> 是否显示节点图标
     *
     * <en/> Whether to show the node icon
     * @defaultValue true
     */
    icon?: boolean;
    /**
     * <zh/> 是否显示节点徽标
     *
     * <en/> Whether to show the node badge
     * @defaultValue true
     */
    badge?: boolean;
    /**
     * <zh/> 是否显示连接桩
     *
     * <en/> Whether to show the node port
     * @defaultValue true
     */
    port?: boolean;
    /**
     * <zh/> 连接桩配置项，支持配置多个连接桩
     *
     * <en/> Port configuration, supports configuring multiple ports
     * @example
     * ```json
     * {
     *    port: true,
     *    ports: [
     *      { key: 'top', placement: [0.5, 0], r: 4, stroke: '#31d0c6', fill: '#fff' },
     *      { key: 'bottom', placement: [0.5, 1], r: 4, stroke: '#31d0c6', fill: '#fff' },
     *    ],
     * }
     * ```
     */
    ports?: NodePortStyleProps[];
    /**
     * <zh/> 徽标
     *
     * <en/> Badge
     * @example
     * ```json
     * {
     *    badge: true,
     *    badges: [
     *      { text: 'A', placement: 'right-top'},
     *      { text: 'Important', placement: 'right' },
     *      { text: 'Notice', placement: 'right-bottom' },
     *    ],
     *    badgePalette: ['#7E92B5', '#F4664A', '#FFBE3A'],
     * }
     * ```
     */
    badges?: NodeBadgeStyleProps[];
    /**
     * <zh/> 徽标的背景色板
     *
     * <en/> Badge background color palette
     */
    badgePalette?: CategoricalPalette;
}
/**
 * <zh/> 节点元素的基类
 *
 * <en/> Base node class
 * @remarks
 * <zh/> 自定义节点时，建议将此类作为基类。这样，你只需要关注如何实现 keyShape 的绘制逻辑
 *
 * <zh/> 设计文档：https://www.yuque.com/antv/g6/gl1iof1xpzg6ed98
 *
 * <en/> When customizing a node, it is recommended to use this class as the base class. This way, you can directly focus on how to implement the drawing logic of keyShape
 *
 * <en/> Design document: https://www.yuque.com/antv/g6/gl1iof1xpzg6ed98
 */
export declare abstract class BaseNode<S extends BaseNodeStyleProps = BaseNodeStyleProps> extends BaseElement<S> implements Node {
    type: string;
    static defaultStyleProps: Partial<BaseNodeStyleProps>;
    constructor(options: DisplayObjectConfig<S>);
    protected getSize(attributes?: S & import("@antv/g").BaseCustomElementStyleProps): import("../../types").Vector3;
    protected getKeyStyle(attributes: Required<S>): any;
    protected getLabelStyle(attributes: Required<S>): false | LabelStyleProps;
    protected getHaloStyle(attributes: Required<S>): any;
    protected getIconStyle(attributes: Required<S>): false | IconStyleProps;
    protected getBadgesStyle(attributes: Required<S>): Record<string, NodeBadgeStyleProps | false>;
    protected getBadgeStyle(style: NodeBadgeStyleProps): NodeBadgeStyleProps;
    protected getPortsStyle(attributes: Required<S>): Record<string, PortStyleProps | false>;
    protected getPortXY(attributes: Required<S>, style: NodePortStyleProps): Point;
    /**
     * Get the ports for the node.
     * @returns Ports shape map.
     */
    getPorts(): Record<string, Port>;
    /**
     * Get the center point of the node.
     * @returns The center point of the node.
     */
    getCenter(): Point;
    /**
     * Get the point on the outer contour of the node that is the intersection with a line starting in the center the ending in the point `p`.
     * @param point - The point to intersect with the node.
     * @param useExtendedLine - Whether to use the extended line.
     * @returns The intersection point.
     */
    getIntersectPoint(point: Point, useExtendedLine?: boolean): Point;
    protected drawHaloShape(attributes: Required<S>, container: Group): void;
    protected drawIconShape(attributes: Required<S>, container: Group): void;
    protected drawBadgeShapes(attributes: Required<S>, container: Group): void;
    protected drawPortShapes(attributes: Required<S>, container: Group): void;
    protected drawLabelShape(attributes: Required<S>, container: Group): void;
    protected abstract drawKeyShape(attributes: Required<S>, container: Group): DisplayObject | undefined;
    private _drawKeyShape;
    render(attributes?: Required<S>, container?: Group): void;
    update(attr?: Partial<S>): void;
    protected onframe(): void;
}
