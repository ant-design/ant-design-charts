import type { AABB, DisplayObject, TextStyleProps } from '@antv/g';
import type { BaseShape, BaseShapeStyleProps } from '../elements/shapes';
import type { Combo, Edge, Element, Node, NodePortStyleProps, Placement, Point, TriangleDirection } from '../types';
import type { NodeLabelStyleProps, Port } from '../types/node';
/**
 * <zh/> 判断是否是 Node 的实例
 *
 * <en/> Judge whether the instance is Node
 * @param shape - <zh/> 实例 | <en/> instance
 * @returns <zh/> 是否是 Node 的实例 | <en/> whether the instance is Node
 */
export declare function isNode(shape: DisplayObject | Port): shape is Node;
/**
 * <zh/> 判断是否是 Edge 的实例
 *
 * <en/> Judge whether the instance is Edge
 * @param shape - <zh/> 实例 | <en/> instance
 * @returns <zh/> 是否是 Edge 的实例 | <en/> whether the instance is Edge
 */
export declare function isEdge(shape: DisplayObject): shape is Edge;
/**
 * <zh/> 判断是否是 Combo 的实例
 *
 * <en/> Judge whether the instance is Combo
 * @param shape - <zh/> 实例 | <en/> instance
 * @returns <zh/> 是否是 Combo 的实例 | <en/> whether the instance is Combo
 */
export declare function isCombo(shape: any): shape is Combo;
/**
 * <zh/> 判断是否是 Element 的实例
 *
 * <en/> Judge whether the instance is Element
 * @param shape - <zh/> 实例 | <en/> instance
 * @returns <zh/> 是否是 Element 的实例 | <en/> whether the instance is Element
 */
export declare function isElement(shape: any): shape is Element;
/**
 * <zh/> 判断两个节点是否相同
 *
 * <en/> Whether the two nodes are the same
 * @param node1 - <zh/> 节点1 | <en/> Node1
 * @param node2 - <zh/> 节点2 | <en/> Node2
 * @returns <zh/> 是否相同 | <en/> Whether the same
 */
export declare function isSameNode(node1: Node, node2: Node): boolean;
/**
 * Get the Port x, y by `position`.
 * @param bbox - BBox of element.
 * @param placement - The position relative with element.
 * @param portMap - The map of position.
 * @param isRelative - Whether the position in MAP is relative.
 * @returns [x, y]
 */
export declare function getPortXYByPlacement(bbox: AABB, placement?: Placement, portMap?: Record<string, Point>, isRelative?: boolean): Point;
/**
 * <zh/> 获取节点上的所有连接桩
 *
 * <en/> Get all ports
 * @param node - <zh/> 节点 | <en/> Node
 * @returns <zh/> 所有连接桩 | <en/> All Ports
 */
export declare function getAllPorts(node: Node): Record<string, Port>;
/**
 * <zh/> 是否为简单连接桩，如果是则不会额外绘制图形
 *
 * <en/> Whether it is a simple port, which will not draw additional graphics
 * @param portStyle - <zh/> 连接桩样式 | <en/> Port Style
 * @returns <zh/> 是否是简单连接桩 | <en/> Whether it is a simple port
 */
export declare function isSimplePort(portStyle: NodePortStyleProps): boolean;
/**
 * <zh/> 获取连接桩的位置
 *
 * <en/> Get the position of the port
 * @param port - <zh/> 连接桩 | <en/> Port
 * @returns <zh/> 连接桩的位置 | <en/> Port Position
 */
export declare function getPortPosition(port: Port): Point;
/**
 * <zh/> 查找起始连接桩和目标连接桩
 *
 * <en/> Find the source port and target port
 * @param sourceNode - <zh/> 起始节点 | <en/> Source Node
 * @param targetNode - <zh/> 目标节点 | <en/> Target Node
 * @param sourcePortKey - <zh/> 起始连接桩的 key | <en/> Source Port Key
 * @param targetPortKey - <zh/> 目标连接桩的 key | <en/> Target Port Key
 * @returns <zh/> 起始连接桩和目标连接桩 | <en/> Source Port and Target Port
 */
export declare function findPorts(sourceNode: Node, targetNode: Node, sourcePortKey?: string, targetPortKey?: string): [Port | undefined, Port | undefined];
/**
 * <zh/> 查找节点上的最有可能连接的连接桩
 *
 * <en/> Find the most likely connected port on the node
 * @remarks
 * 1. If `portKey` is specified, return the port.
 * 2. If `portKey` is not specified, return the port closest to the opposite connection points.
 * 3. If the node has no ports, return undefined.
 * @param node - <zh/> 节点 | <en/> Node
 * @param oppositeNode - <zh/> 对端节点 | <en/> Opposite Node
 * @param portKey - <zh/> 连接桩的键值（key） | <en/> Port Key
 * @param oppositePortKey - <zh/> 对端连接桩的 key | <en/> Opposite Port Key
 * @returns <zh/> 连接桩 | <en/> Port
 */
export declare function findPort(node: Node, oppositeNode: Node, portKey?: string, oppositePortKey?: string): Port | undefined;
/**
 * <zh/> 获取连接点, 即从节点或连接桩中心到另一端的连线在节点或连接桩边界上的交点
 *
 * <en/> Get the connection point
 * @param node - <zh/> 节点或连接桩 | <en/> Node or Port
 * @param opposite - <zh/> 对端的具体点或节点 | <en/> Opposite Point or Node
 * @returns <zh/> 连接点 | <en/> Connection Point
 */
export declare function getConnectionPoint(node: Port | Node | Combo, opposite: Node | Port): Point;
/**
 * <zh/> 获取连接桩的连接点，即从连接桩中心到另一端的连线在连接桩边界上的交点
 *
 * <en/> Get the connection point of the port
 * @param port - <zh/> 连接桩 | <en/> Port
 * @param opposite - <zh/> 对端的具体点或节点 | <en/> Opposite Point or Node
 * // @param oppositePort - <zh/> 对端连接桩 | <en/> Opposite Port
 * @returns <zh/> 连接桩的连接点 | <en/> Port Point
 */
export declare function getPortConnectionPoint(port: Port, opposite: Node | Port): Point;
/**
 * <zh/> 获取节点的连接点
 *
 * <en/> Get the Node Connection Point
 * @param nodeLike - <zh/> 节点或组合 | <en/> Node or Combo
 * @param opposite - <zh/> 对端的具体点或节点 | <en/> Opposite Point or Node
 * // @param oppositePort - <zh/> 对端连接桩 | <en/> Opposite Port
 * @returns <zh/> 节点的连接点 | <en/> Node Point
 */
export declare function getNodeConnectionPoint(nodeLike: Node | Combo, opposite: Node | Port): Point;
/**
 * Get the Text style by `position`.
 * @param bbox - BBox of element.
 * @param placement - The position relative with element.
 * @param offsetX - The offset x.
 * @param offsetY - The offset y.
 * @param isReverseBaseline - Whether reverse the baseline.
 * @returns Partial<TextStyleProps>
 */
export declare function getTextStyleByPlacement(bbox: AABB, placement?: NodeLabelStyleProps['placement'], offsetX?: number, offsetY?: number, isReverseBaseline?: boolean): Partial<TextStyleProps>;
/**
 * <zh/> 获取五角星的顶点
 *
 * <en/> Get Star Points
 * @param outerR - <zh/> 外半径 | <en/> outer radius
 * @param innerR - <zh/> 内半径 | <en/> inner radius
 * @returns <zh/> 五角星的顶点 | <en/> Star Points
 */
export declare function getStarPoints(outerR: number, innerR: number): Point[];
/**
 * Get Star Port Point.
 * @param outerR - outer radius
 * @param innerR - inner radius
 * @returns Port points for Star.
 */
export declare function getStarPorts(outerR: number, innerR: number): Record<string, Point>;
/**
 * <zh/> 获取三角形的顶点
 *
 * <en/> Get the points of a triangle
 * @param width - <zh/> 宽度 | <en/> width
 * @param height - <zh/> 高度 | <en/> height
 * @param direction - <zh/> 三角形的方向 | <en/> The direction of the triangle
 * @returns <zh/> 矩形的顶点 | <en/> The points of a rectangle
 */
export declare function getTrianglePoints(width: number, height: number, direction: TriangleDirection): Point[];
/**
 * <zh/> 获取三角形的连接桩
 *
 * <en/> Get the Ports of Triangle.
 * @param width - <zh/> 宽度 | <en/> width
 * @param height - <zh/> 高度 | <en/> height
 * @param direction - <zh/> 三角形的方向 | <en/> The direction of the triangle
 * @returns <zh/> 三角形的连接桩 | <en/> The Ports of Triangle
 */
export declare function getTrianglePorts(width: number, height: number, direction: TriangleDirection): Record<string, Point>;
/**
 * <zh/> 获取矩形的顶点
 *
 * <en/> Get the points of a rectangle
 * @param width - <zh/> 宽度 | <en/> width
 * @param height - <zh/> 高度 | <en/> height
 * @returns <zh/> 矩形的顶点 | <en/> The points of a rectangle
 */
export declare function getBoundingPoints(width: number, height: number): Point[];
/**
 * Get Diamond PathArray.
 * @param width - diamond width
 * @param height - diamond height
 * @returns The PathArray for G
 */
export declare function getDiamondPoints(width: number, height: number): Point[];
/**
 * <zh/> 元素是否可见
 *
 * <en/> Whether the element is visible
 * @param element - <zh/> 元素 | <en/> element
 * @returns <zh/> 是否可见 | <en/> whether the element is visible
 */
export declare function isVisible(element: DisplayObject): boolean;
/**
 * <zh/> 设置元素属性（优化性能）
 *
 * <en/> Set element attributes (optimize performance)
 * @param element - <zh/> 元素 | <en/> element
 * @param style - <zh/> 样式 | <en/> style
 */
export declare function setAttributes(element: BaseShape<any>, style: Partial<BaseShapeStyleProps> & Record<string, any>): void;
/**
 * <zh/> 更新图形样式
 *
 * <en/> Update shape style
 * @param shape - <zh/> 图形 | <en/> shape
 * @param style - <zh/> 样式 | <en/> style
 */
export declare function updateStyle<T extends DisplayObject>(shape: T, style: Record<string, unknown>): void;
/**
 * Get Hexagon PathArray
 * @param outerR - <zh/> 外接圆半径 | <en/> the  radius of circumscribed circle
 *  @returns The PathArray for G
 */
export declare function getHexagonPoints(outerR: number): Point[];
/**
 * <zh/> 将图形标记为即将销毁，用于在 element controller 中识别要销毁的元素
 *
 * <en/> Mark the element as to be destroyed, used to identify the element to be destroyed in the element controller
 * @param element - <zh/> 图形 | <en/> element
 */
export declare function markToBeDestroyed(element: DisplayObject): void;
/**
 * <zh/> 判断图形是否即将销毁
 *
 * <en/> Determine whether the element is to be destroyed
 * @param element - <zh/> 图形 | <en/> element
 * @returns <zh/> 是否即将销毁 | <en/> whether the element is to be destroyed
 */
export declare function isToBeDestroyed(element: DisplayObject | unknown): any;
