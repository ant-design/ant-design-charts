import { Edge as IEdge, Graph as IGraph, Node as INode } from '@antv/graphlib';
import type { Size } from './util/size';
/**
 * <zh/> 节点数据
 *
 * <en/> Node data
 */
export interface NodeData {
    /**
     * <zh/> 节点x轴坐标
     *
     * <en/> Node x coordinate
     */
    x?: number;
    /**
     * <zh/> 节点y轴坐标
     *
     * <en/> Node y coordinate
     */
    y?: number;
    /**
     * <zh/> 节点z轴坐标
     *
     * <en/> Node z coordinate
     */
    z?: number;
    /**
     * <zh/> 节点大小（直径)
     *
     * <en/> Node size (diameter)
     */
    size?: number | number[];
    [key: string]: any;
}
/**
 * <zh/> 边数据
 *
 * <en/> Edge data
 */
export interface EdgeData {
    weight?: number;
    [keys: string]: any;
}
export interface OutNodeData extends NodeData {
    x: number;
    y: number;
}
export interface OutEdgeData extends EdgeData {
}
export type Node = INode<NodeData>;
export type Edge = IEdge<EdgeData>;
export type OutNode = INode<OutNodeData>;
export type OutEdge = IEdge<OutEdgeData>;
export type IndexMap = {
    [nodeId: string]: number;
};
export type Graph = IGraph<NodeData, EdgeData>;
export type PointTuple = [number, number] | [number, number, number];
export type Point = {
    x: number;
    y: number;
    z?: number;
};
export type Matrix = number[];
export type LayoutMapping = {
    nodes: OutNode[];
    edges: OutEdge[];
};
export interface Layout<LayoutOptions> {
    /**
     * <zh/> 传入数据并执行布局计算,结果写入原始数据
     *
     * <en/> Passes in the data and performs the layout calculation, modifying the original data
     * @param graph - <zh/> 规范化数据 | <en/> Normalized data
     * @param options - <zh/> 布局配置 | <en/> Layout options
     * @returns Promise<void>
     */
    assign(graph: Graph, options?: LayoutOptions): Promise<void>;
    /**
     * <zh/> 传入数据并执行布局计算，且结果不写入原始数据，作为返回值
     *
     * <en/> Passes in the data and performs the layout calculation, and the result is not written to the original data, but returned as a value
     * @param graph - <zh/> 规范化数据 | <en/> Normalized data
     * @param options - <zh/> 布局配置 | <en/> Layout options
     * @returns <zh/> 布局结果 | <en/> Layout result
     */
    execute(graph: Graph, options?: LayoutOptions): Promise<LayoutMapping>;
    /**
     * <zh/> 布局计算的配置项
     *
     * <en/> Layout calculation configuration item
     */
    options: LayoutOptions;
    /**
     * <zh/> 布局id
     *
     * <en/> Layout id
     */
    id: string;
}
export declare function isLayoutWithIterations(layout: any): layout is LayoutWithIterations<any>;
export interface LayoutWithIterations<LayoutOptions> extends Layout<LayoutOptions> {
    /**
     * Some layout algorithm has n iterations so that the simulation needs to be stopped at any time.
     * This method is useful for running the simulation manually.
     * @see https://github.com/d3/d3-force#simulation_stop
     */
    stop: () => void;
    /**
     * Manually steps the simulation by the specified number of iterations.
     * @see https://github.com/d3/d3-force#simulation_tick
     */
    tick: (iterations?: number) => LayoutMapping;
}
export interface LayoutSupervisor {
    execute(): Promise<LayoutMapping>;
    stop(): void;
    kill(): void;
    isRunning(): boolean;
}
/**
 * <zh/> 环形 Circular 布局配置
 *
 * <en/> Circular layout configuration
 */
export interface CircularLayoutOptions {
    /**
     * <zh/> 布局的中心
     *
     * <en/> Layout center
     */
    center?: PointTuple;
    /**
     * <zh/> 布局的宽度
     *
     * <en/> Layout width
     */
    width?: number;
    /**
     * <zh/> 布局的高度
     *
     * <en/> Layout height
     */
    height?: number;
    /**
     * <zh/> 圆的半径
     *
     * <en/> Circle radius
     * @remarks
     * <zh/> 若设置了 radius，则 startRadius 与 endRadius 不生效
     *
     * <en/> If radius is set, startRadius and endRadius will not take effect
     * @defaultValue null
     */
    radius?: number | null;
    /**
     * <zh/> 螺旋状布局的起始半径
     *
     * <en/> Spiral layout start radius
     * @defaultValue null
     */
    startRadius?: number | null;
    /**
     * <zh/> 螺旋状布局的结束半径
     *
     * <en/> Spiral layout end radius
     * @defaultValue null
     */
    endRadius?: number | null;
    /**
     * <zh/> 是否顺时针排列
     *
     * <en/> Whether to arrange clockwise
     * @defaultValue true
     */
    clockwise?: boolean;
    /**
     * <zh/> 节点在环上的分段数（几个段将均匀分布）
     *
     * <en/> Number of segments (how many segments will be evenly distributed)
     * @remarks
     * <zh/> 在 endRadius - startRadius != 0 时生效
     *
     * <en/> It takes effect when endRadius - startRadius != 0
     * @defaultValue 1
     */
    divisions?: number;
    /**
     * <zh/> 节点在环上排序的依据
     * - null: 直接使用数据中的顺序
     * - 'topology': 按照拓扑排序
     * - 'topology-directed': 按照拓扑排序（有向图）
     * - 'degree': 按照度数大小排序
     * <en/> Sorting basis of nodes on the ring
     * - null: Use the order in the data directly
     * - 'topology': Sort according to topological order
     * - 'topology-directed': Sort according to topological order (directed graph)
     * - 'degree': Sort according to degree size
     * @defaultValue null
     */
    ordering?: 'topology' | 'topology-directed' | 'degree' | null;
    /**
     * <zh/> 从第一个节点到最后节点之间相隔多少个 2*PI
     *
     * <en/> The distance between the first node and the last node is separated by how many 2*PI
     * @defaultValue 1
     */
    angleRatio?: number;
    /**
     * <zh/> 起始角度
     *
     * <en/> Start angle
     */
    startAngle?: number;
    /**
     * <zh/> 结束角度
     *
     * <en/> End angle
     */
    endAngle?: number;
    /**
     * <zh/> 环与环之间最小间距，用于调整半径
     *
     * <en/> Minimum spacing between rings, used to adjust the radius
     */
    nodeSpacing?: ((node?: Node) => number) | number;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> Node size (diameter). Used for collision detection when nodes overlap
     */
    nodeSize?: Size | ((nodeData: Node) => Size);
}
export interface GridLayoutOptions {
    /**
     * <zh/> 网格布局的总宽度
     *
     * <en/> Total width of grid layout
     * @remarks
     * <zh/> 在 G6 中使用当前容器的宽度作为 grid 布局 width 的默认值。单独使用此布局时默认值为 300
     *
     * <en/> The width of the grid layout is the default value of the current container width in G6. The default value is 300 when this layout is used alone
     * @defaultValue 300
     */
    width?: number;
    /**
     * <zh/> 网格布局的总高度
     *
     * <en/> Total height of grid layout
     * @remarks
     * <zh/> 在 G6 中使用当前容器的高度作为 grid 布局 height 的默认值。单独使用此布局时默认值为 300
     *
     * <en/> The height of the grid layout is the default value of the current container height in G6. The default value is 300 when this layout is used alone
     * @defaultValue 300
     */
    height?: number;
    /**
     * <zh/> 网格开始位置（左上角）
     *
     * <en/> Grid layout starting position (upper left corner)
     * @defaultValue [0, 0]
     *
     */
    begin?: PointTuple;
    /**
     * <zh/> 是否防止重叠
     *
     * <en/> Whether to prevent overlap
     * @remarks
     * <zh/> 必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测
     *
     * <en/> Must be used with the following properties: nodeSize or data.size in the data. When data.size is set or nodeSize is configured with the same value as the current graph node size in the layout, the collision detection of node overlap can be performed
     * @defaultValue false
     */
    preventOverlap?: boolean;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> Node size (diameter). Used for collision detection when nodes overlap
     */
    nodeSize?: Size | ((nodeData: Node) => Size);
    /**
     * <zh/> 避免重叠时节点的间距 padding。preventOverlap 为 true 时生效
     *
     * <en/> Padding between nodes to prevent overlap. It takes effect when preventOverlap is true
     * @defaultValue 10
     */
    preventOverlapPadding?: number;
    /**
     * <zh/> 为 false 时表示利用所有可用画布空间，为 true 时表示利用最小的画布空间
     *
     * <en/> When false, it means to use all available canvas space. When true, it means to use the smallest canvas space
     * @defaultValue false
     */
    condense?: boolean;
    /**
     * <zh/> 网格的行数，为 undefined 时算法根据节点数量、布局空间、cols（若指定）自动计算
     *
     * <en/> Number of rows in the grid. It is calculated automatically when it is undefined and the number of nodes, layout space, and cols (if specified) are specified
     * @defaultValue 10
     */
    rows?: number;
    /**
     * <zh/> 网格的列数，为 undefined 时算法根据节点数量、布局空间、rows（若指定）自动计算
     *
     * <en/> Number of columns in the grid. It is calculated automatically when it is undefined and the number of nodes, layout space, and rows (if specified) are specified
     * @defaultValue undefined
     */
    cols?: number;
    /**
     * <zh/> 指定排序的依据（节点属性名），数值越高则该节点被放置得越中心。若为 undefined，则会计算节点的度数，度数越高，节点将被放置得越中心
     *
     * <en/> Specify the basis for sorting (node attribute name). The higher the value, the more the node will be placed in the center. If it is undefined, the degree of the node will be calculated, and the higher the degree, the more the node will be placed in the center
     * @defaultValue undefined
     */
    sortBy?: string;
    /**
     * <zh/> 指定每个节点所在的行和列
     *
     * <en/> Specify the row and column where each node is located
     * @defaultValue undefined
     */
    position?: (node?: Node) => {
        row?: number;
        col?: number;
    };
    /**
     * <zh/> 环与环之间最小间距，用于调整半径
     *
     * <en/> Minimum spacing between rings, used to adjust the radius
     */
    nodeSpacing?: ((node?: Node) => number) | number;
}
/**
 * <zh/> 随机布局配置
 *
 * <en/> Random layout configuration
 */
export interface RandomLayoutOptions {
    /**
     * <zh/> 布局的中心
     *
     * <en/> Layout center
     */
    center?: PointTuple;
    /**
     * <zh/> 布局的宽度范围
     *
     * <en/> Layout width range
     */
    width?: number;
    /**
     * <zh/> 布局的高度范围
     *
     * <en/> Layout height range
     */
    height?: number;
}
/**
 * <zh/> MDS 高维数据降维布局配置
 *
 * <en/> MDS layout configuration for high-dimensional data dimensionality reduction
 */
export interface MDSLayoutOptions {
    /**
     * <zh/> 圆形布局的中心位置
     *
     * <en/> Center position of circular layout
     */
    center?: PointTuple;
    /**
     * <zh/> 边的理想长度，可以理解为边作为弹簧在不受力下的长度
     *
     * <en/> Ideal length of the edge, which can be understood as the length of the edge as a spring under no force
     * @defaultValue 200
     */
    linkDistance?: number;
}
/**
 * <zh/> Concentric 同心圆布局配置
 *
 * <en/> Concentric layout configuration
 */
export interface ConcentricLayoutOptions {
    /**
     * <zh/> 圆形布局的中心位置,默认为当前容器的中心位置
     *
     * <en/> Center position of circular layout, defaults to the center position of the current container
     */
    center?: PointTuple;
    /**
     * <zh/> 是否防止重叠
     *
     * <en/> Whether to prevent overlap
     * @remarks
     * <zh/> 必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测
     *
     * <en/> Must be used with the following properties, and only when the data.size property is set in the data or the nodeSize value configured with the same size as the current graph node is configured in the layout, can the node overlap collision detection be performed
     * @defaultValue false
     */
    preventOverlap?: boolean;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> Node size (diameter). Used for collision detection when preventing node overlap
     */
    nodeSize?: Size | ((nodeData: Node) => Size);
    /**
     * <zh/> 第一个节点与最后一个节点之间的弧度差
     *
     * <en/> The difference in radians between the first and last nodes
     * @remarks
     * <zh/> 若为 undefined ，则将会被设置为 2 * Math.PI * (1 - 1 / |level.nodes|) ，其中 level.nodes 为该算法计算出的每一层的节点，|level.nodes| 代表该层节点数量
     *
     * <en/> If undefined, it will be set to 2 * Math.PI * (1 - 1 / |level.nodes|), where level.nodes is the number of nodes in each layer calculated by this algorithm, and |level.nodes| represents the number of nodes in this layer
     * @defaultValue undefined
     */
    sweep?: number;
    /**
     * <zh/> 环与环之间的距离是否相等
     *
     * <en/> Whether the distance between rings is equal
     * @defaultValue false
     */
    equidistant?: boolean;
    /**
     * <zh/> 开始布局节点的弧度
     *
     * <en/> The starting angle of the layout node
     * @defaultValue 3 / 2 * Math.PI
     */
    startAngle?: number;
    /**
     * <zh/> 是否按照顺时针排列
     *
     * <en/> Whether to arrange in clockwise order
     * @defaultValue false
     */
    clockwise?: boolean;
    /**
     * <zh/> 每一层同心值的求和
     *
     * <en/> The sum of the concentric values of each layer
     * @remarks
     * <zh/> 若为 undefined，则将会被设置为 maxValue / 4 ，其中 maxValue 为最大的排序依据的属性值。例如，若 sortBy 为 'degree'，则 maxValue 为所有节点中度数最大的节点的度数
     *
     * <en/> If undefined, it will be set to maxValue / 4, where maxValue is the largest value of the sortBy attribute. For example, if sortBy is 'degree', maxValue is the degree of the node with the largest degree in all nodes
     * @defaultValue undefined
     */
    maxLevelDiff?: number;
    /**
     * <zh/> 指定排序的依据（节点属性名）
     *
     * <en/> Specify the basis for sorting (node attribute name)
     * @remarks
     * <zh/> 数值越高则该节点被放置得越中心。若为 undefined，则会计算节点的度数，度数越高，节点将被放置得越中心
     *
     * <en/> The higher the value, the more the node will be placed in the center. If undefined, the degree of the node will be calculated, and the higher the degree, the more the node will be placed in the center
     * @defaultValue undefined
     */
    sortBy?: string;
    /**
     * <zh/> 布局的宽度，默认使用容器宽度
     *
     * <en/> The width of the layout, defaults to the container width
     */
    width?: number;
    /**
     * <zh/> 布局的高度，默认使用容器高度
     *
     * <en/> The height of the layout, defaults to the container height
     */
    height?: number;
    /**
     * <zh/> 环与环之间最小间距，用于调整半径
     *
     * <en/> Minimum spacing between rings, used to adjust the radius
     * @defaultValue 10
     */
    nodeSpacing?: number | number[] | ((node?: Node) => number);
}
/**
 * <zh/> Radial 辐射布局的配置项
 *
 * <en/> Configuration items for Radial layout
 */
export interface RadialLayoutOptions {
    /**
     * <zh/> 圆形布局的中心位置,默认为当前容器的中心位置
     *
     * <en/> The center position of the circular layout, defaults to the center position of the current container
     */
    center?: PointTuple;
    /**
     * <zh/> 布局的宽度，默认使用容器宽度
     *
     * <en/> The width of the layout, defaults to the container width
     */
    width?: number;
    /**
     * <zh/> 布局的高度，默认使用容器高度
     *
     * <en/> The height of the layout, defaults to the container height
     */
    height?: number;
    /**
     * <zh/> 边长度
     *
     * <en/> Edge length
     * @defaultValue 50
     */
    linkDistance?: number;
    /**
     * <zh/> 停止迭代到最大迭代数
     *
     * <en/> Stop iterating until the maximum iteration number is reached
     * @defaultValue 1000
     */
    maxIteration?: number;
    /**
     * <zh/> 辐射的中心点
     * - string: 节点 id
     * - Node: 节点本身
     * - null: 数据中第一个节点
     * <en/> The center point of the radiation
     * - string: node id
     * - Node: node itself
     * - null: the first node in the data
     */
    focusNode?: string | Node | null;
    /**
     * <zh/> 每一圈距离上一圈的距离。默认填充整个画布，即根据图的大小决定
     *
     * <en/> The distance between each ring. Defaults to filling the entire canvas, i.e., determined by the size of the graph
     * @defaultValue 100
     */
    unitRadius?: number | null;
    /**
     * <zh/> 是否防止重叠
     *
     * <en/> Whether to prevent overlap
     * @remarks
     * <zh/> 必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测
     *
     * <en/> Must be used with the following properties: nodeSize or data.size in the node data. Only when data.size or nodeSize with the same value as the current graph node size is set in the layout configuration, can the collision detection of node overlap be performed
     * @defaultValue false
     */
    preventOverlap?: boolean;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> Node size (diameter). Used for collision detection when preventing node overlap
     */
    nodeSize?: Size | ((nodeData: Node) => Size);
    /**
     * <zh/> preventOverlap 为 true 时生效, 防止重叠时节点边缘间距的最小值。可以是回调函数, 为不同节点设置不同的最小间距
     *
     * <en/> Effective when preventOverlap is true. The minimum edge spacing when preventing node overlap. It can be a callback function, and set different minimum spacing for different nodes
     * @defaultValue 10
     */
    nodeSpacing?: number | ((nodeData: Node) => number);
    /**
     * <zh/> 防止重叠步骤的最大迭代次数
     *
     * <en/> Maximum iteration number of the prevent overlap step
     * @defaultValue 200
     */
    maxPreventOverlapIteration?: number;
    /**
     * <zh/> 是否必须是严格的 radial 布局，及每一层的节点严格布局在一个环上。preventOverlap 为 true 时生效。
     *
     * <en/> Whether it must be a strict radial layout, that is, each layer of nodes strictly layout on a ring. Effective when preventOverlap is true.
     * @remarks
     * <zh/> 当 preventOverlap 为 true，且 strictRadial 为 false 时，有重叠的节点严格沿着所在的环展开，但在一个环上若节点过多，可能无法完全避免节点重叠 当 preventOverlap 为 true，且 strictRadial 为 true 时，允许同环上重叠的节点不严格沿着该环布局，可以在该环的前后偏移以避免重叠
     *
     * <en/> When preventOverlap is true and strictRadial is false, overlapping nodes are strictly laid out along the ring they are in. However, if there are too many nodes on a ring, it may not be possible to completely avoid node overlap. When preventOverlap is true and strictRadial is true, overlapping nodes on the same ring are allowed to be laid out not strictly along the ring, and can be offset before and after the ring to avoid overlap
     * @defaultValue true
     */
    strictRadial?: boolean;
    /**
     * <zh/> 同层节点布局后相距远近的依据
     *
     * <en/> The basis for the distance between nodes in the same layer after layout
     * @remarks
     * <zh/> 默认 undefined ，表示根据数据的拓扑结构（节点间最短路径）排布，即关系越近/点对间最短路径越小的节点将会被尽可能排列在一起；'data' 表示按照节点在数据中的顺序排列，即在数据顺序上靠近的节点将会尽可能排列在一起；也可以指定为节点数据中的某个字段名，例如 'cluster'、'name' 等（必须在数据的 data 中存在）
     *
     * <en/> The default is undefined, which means arranging based on the topological structure of the data (the shortest path between nodes). Nodes that are closer in proximity or have a smaller shortest path between them will be arranged as close together as possible. 'data' indicates arranging based on the order of nodes in the data, so nodes that are closer in the data order will be arranged as close together as possible. You can also specify a field name in the node data, such as 'cluster' or 'name' (it must exist in the data of the graph)
     * @defaultValue undefined
     */
    sortBy?: string;
    /**
     * <zh/> 同层节点根据 sortBy 排列的强度，数值越大，sortBy 指定的方式计算出距离越小的越靠近。sortBy 不为 undefined 时生效
     *
     * <en/> The strength of arranging nodes according to sortBy. The larger the value, the closer the nodes that sortBy specifies are arranged. It takes effect when sortBy is not undefined
     * @defaultValue 10
     */
    sortStrength?: number;
}
/**
 * <zh/> D3 Force 力导布局配置项
 *
 * <en/> D3 Force layout configuration item
 */
export interface D3ForceLayoutOptions {
    /**
     * <zh/> 布局的中心位置,默认为当前容器的中心位置
     *
     * <en/> The center position of the layout, the default is the center position of the current container
     */
    center?: PointTuple;
    /**
     * <zh/> 边长度
     * - number: 边长度固定值
     * - (edge: Edge) => number: 边长度回调函数，根据不同边设置不同的边长度
     * <en/> Edge length
     * - number: fixed edge length
     * - (edge: Edge) => number: edge length callback function, set different edge lengths according to different edges
     * @defaultValue 50
     */
    linkDistance?: number | ((edge?: Edge) => number);
    /**
     * <zh/> 边的作用力，范围是 0 到 1，默认根据节点的出入度自适应
     * - number: 边的作用力固定值
     * - (edge: Edge) => number: 边的作用力回调函数，根据不同边设置不同的边作用力
     * <en/> Edge strength, the range is 0 to 1, and it adapts automatically according to the in-out degree of the node
     * - number: fixed edge strength
     * - (edge: Edge) => number: edge strength callback function, set different edge strengths according to different edges
     */
    edgeStrength?: number | ((edge?: Edge) => number);
    /**
     * <zh/> 聚类节点作用力。负数代表斥力
     * - number: 聚类节点作用力固定值
     * - (node: Node) => number: 聚类节点作用力回调函数，根据不同节点设置不同的聚类节点作用力
     * <en/> Cluster node strength. Negative numbers represent repulsion
     * - number: fixed cluster node strength
     * - (node: Node) => number: cluster node strength callback function, set different cluster node strengths according to different nodes
     * @defaultValue -1
     */
    nodeStrength?: number | ((node?: Node) => number);
    /**
     * <zh/> 是否防止重叠
     *
     * <en/> Whether to prevent overlap
     * @remarks
     * <zh/> 必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测
     *
     * <en/> Must be used with the following properties: nodeSize or data.size in the node data. Only when data.size or nodeSize with the same value as the current graph node size is set in the layout configuration, can the collision detection of node overlapping be performed
     * @defaultValue false
     */
    preventOverlap?: boolean;
    /**
     * <zh/> 防止重叠的力强度，范围 [0, 1]
     *
     * <en/> The force strength of preventing overlap, the range is [0, 1]
     * @defaultValue 1
     */
    collideStrength?: number;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> Node size (diameter). Used for collision detection when preventing node overlapping
     */
    nodeSize?: Size | ((node?: Node) => Size);
    /**
     * <zh/> preventOverlap 为 true 时生效, 防止重叠时节点边缘间距的最小值。可以是回调函数, 为不同节点设置不同的最小间距
     *
     * <en/> It takes effect when preventOverlap is true. The minimum spacing of the node edge when preventing node overlapping. It can be a callback function, and set different minimum spacing for different nodes
     */
    nodeSpacing?: number | ((node?: Node) => number);
    /**
     * <zh/> 当前的迭代收敛阈值
     *
     * <en/> The convergence threshold of the current iteration
     * @defaultValue 0.3
     */
    alpha?: number;
    /**
     * <zh/> 迭代阈值的衰减率。范围 [0, 1]。0.028 对应迭代数为 300
     *
     * <en/> The decay rate of the iteration threshold. The range is [0, 1]. 0.028 corresponds to iteration number 300
     * @defaultValue 0.028
     */
    alphaDecay?: number;
    /**
     * <zh/> 停止迭代的阈值
     *
     * <en/> The threshold to stop iteration
     * @defaultValue 0.001
     */
    alphaMin?: number;
    /**
     * <zh/> 是否按照聚类信息布局
     *
     * <en/> Whether to layout according to the clustering information
     * @defaultValue false
     */
    clustering?: boolean;
    /**
     * <zh/> 聚类节点作用力。负数代表斥力
     *
     * <en/> Clustering node force. Negative numbers represent repulsion
     * @defaultValue -1
     */
    clusterNodeStrength?: number;
    /**
     * <zh/> 聚类边作用力
     *
     * <en/> Clustering edge force
     * @defaultValue 0.1
     */
    clusterEdgeStrength?: number;
    /**
     * <zh/> 聚类边长度
     *
     * <en/> Clustering edge length
     * @defaultValue 100
     */
    clusterEdgeDistance?: number;
    /**
     * <zh/> 聚类节点大小 / 直径，直径越大，越分散
     *
     * <en/> Clustering node size / diameter. Diameter larger means more scattered
     * @defaultValue 10
     */
    clusterNodeSize?: number;
    /**
     * <zh/> 用于 foci 的力
     *
     * <en/> Force for foci
     * @defaultValue 0.8
     */
    clusterFociStrength?: number;
    /**
     * <zh/> 自定义 force 方法，若不指定，则使用 d3.js 的方法
     *
     * <en/> Custom force method, if not specified, use the method of d3.js
     */
    forceSimulation?: any;
    /**
     * <zh/> 每一次迭代的回调函数，返回值为这一次迭代的布局结果
     *
     * <en/> The callback function called every iteration, and the return value is the layout result of this iteration
     * @param data - <zh/> 布局结果，包含节点和边的位置信息
     */
    onTick?: (data: LayoutMapping) => void;
}
/**
 * <zh/> 向心力配置，包括叶子节点、离散点、其他节点的向心中心及向心力大小
 *
 * <en/> Centripetal configuration, including the center of the leaf node, the center of the scattered point, and the center of the other nodes
 */
export interface CentripetalOptions {
    /**
     * <zh/> 叶子节点（即度数为 1 的节点）受到的向心力大小
     * - number: 固定向心力大小
     * - ((node: Node, nodes: Node[], edges: Edge[]) => number): 可根据节点、边的情况返回不同的值
     * <en/> The centripetal force of the leaf node (i.e., the node with degree 1)
     * - number: fixed centripetal force size
     * - ((node: Node, nodes: Node[], edges: Edge[]) => number): return different values according to the node, edge, and situation
     * @defaultValue 2
     */
    leaf?: number | ((node: Node, nodes: Node[], edges: Edge[]) => number);
    /**
     * <zh/> 离散节点（即度数为 0 的节点）受到的向心力大小
     * - number: 固定向心力大小
     * - ((node: Node, nodes: Node[], edges: Edge[]) => number): 可根据节点情况返回不同的值
     * <en/> The centripetal force of the scattered node (i.e., the node with degree 0)
     * - number: fixed centripetal force size
     * - ((node: Node) => number): return different values according to the node situation
     * @defaultValue 2
     */
    single?: number | ((node: Node) => number);
    /**
     * <zh/> 除离散节点、叶子节点以外的其他节点（即度数 > 1 的节点）受到的向心力大小
     * - number: 固定向心力大小
     * - ((node: Node) => number): 可根据节点的情况返回不同的值
     * <en/> The centripetal force of the other nodes (i.e., the node with degree > 1)
     * - number: fixed centripetal force size
     * - ((node: Node) => number): return different values according to the node situation
     * @defaultValue 1
     */
    others?: number | ((node: Node) => number);
    /**
     * <zh/> 向心力发出的位置，可根据节点、边的情况返回不同的值、默认为图的中心
     *
     * <en/> The position where the centripetal force is emitted, which can return different values according to the node, edge, and situation. The default is the center of the graph
     */
    center?: (node: Node, nodes: Node[], edges: Edge[], width: number, height: number) => {
        x: number;
        y: number;
        z?: number;
        centerStrength?: number;
    };
}
/**
 * <zh/>ComboCombined  复合布局配置项
 *
 * <en/> ComboCombined layout configuration item
 */
export interface ComboCombinedLayoutOptions {
    /**
     * <zh/> 布局的中心、默认为图的中心
     *
     * <en/> The center of the layout, default to the center of the graph
     */
    center?: PointTuple;
    /**
     * <zh/> 节点大小（直径）。用于碰撞检测
     *
     * <en/> The size of the node (diameter). Used for collision detection
     * @remarks
     * <zh/> 若不指定，则根据传入的节点的 size 属性计算。若即不指定，节点中也没有 size，则默认大小为 10
     *
     * <en/> If not specified, it will be calculated based on the size attribute of the incoming node. If neither is specified, the default size is 10
     * @defaultValue 10
     */
    nodeSize?: number | number[] | ((d?: Node) => number);
    /**
     * <zh/> preventNodeOverlap 或 preventOverlap 为 true 时生效, 防止重叠时节点/ combo 边缘间距的最小值。可以是回调函数, 为不同节点设置不同的最小间距
     *
     * <en/> It takes effect when preventNodeOverlap or preventOverlap is true. The minimum spacing between nodes when overlapping is prevented. It can be a callback function, and different minimum spacing can be set for different nodes
     */
    spacing?: number | ((d?: Node) => number);
    /**
     * <zh/> 最外层的布局算法，默认为 force
     *
     * <en/> The outermost layout algorithm, default to force
     * @example
     * ```ts
     * import { ForceLayout } from '@antv/layout';
     *
     * outerLayout: new ForceLayout({
     * gravity: 1,
     * factor: 2,
     * linkDistance: (edge: any, source: any, target: any) => {
     * const nodeSize = ((source.size?.[0] || 30) + (target.size?.[0] || 30)) / 2;
     * return Math.min(nodeSize * 1.5, 700);
     *   }
     *  });
     * ```
     * @defaultValue ForceLayout
     */
    outerLayout?: Layout<any>;
    /**
     * <zh/> combo 内部的布局算法，需要使用同步的布局算法，默认为 concentric
     *
     * <en/> The layout algorithm inside the combo, which needs to use a synchronized layout algorithm, default to concentric
     * @example
     * ```ts
     * import { ConcentricLayout } from '@antv/layout';
     *
     * innerLayout: new ConcentricLayout({
     *  sortBy: 'id'
     *  });
     * ```
     * @defaultValue ConcentricLayout
     */
    innerLayout?: Layout<any>;
    /**
     * <zh/>  Combo 内部的 padding 值，不用于渲染，仅用于计算力。推荐设置为与视图上 combo 内部 padding 值相同的值
     *
     * <en/> The padding value inside the combo, which is not used for rendering, but only for calculating force. It is recommended to set it to the same value as the combo internal padding value on the view
     * @defaultValue 10
     */
    comboPadding?: ((d?: unknown) => number) | number | number[] | undefined;
    /**
     * <zh/> treeKey
     *
     * <en/> treeKey
     */
    treeKey?: string;
}
/**
 * <zh/> 公共力导向布局配置项
 *
 * <en/> Common force layout configuration items
 */
interface CommonForceLayoutOptions {
    /**
     * <zh/> 布局的维度，2D 渲染时指定为 2；若为 3D 渲染可指定为 3，则将多计算 z 轴的布局
     *
     * <en/> The dimensions of the layout, specify 2 for 2D rendering; if it is 3D rendering, specify 3 to calculate the layout of the z axis
     * @defaultValue 2
     */
    dimensions?: number;
    /**
     * <zh/> 布局的中心点，默认为图的中心
     *
     * <en/> The center point of the layout, default to the center of the graph
     */
    center?: PointTuple;
    /**
     * <zh/> 当一次迭代的平均/最大/最小（根据distanceThresholdMode决定）移动长度小于该值时停止迭代。数字越小，布局越收敛，所用时间将越长
     *
     * <en/> When the average/max/min (depending on distanceThresholdMode) movement length of one iteration is less than this value, the iteration will stop. The smaller the number, the more converged the layout, and the longer the time it takes to use
     * @defaultValue 0.4
     */
    minMovement?: number;
    /**
     * <zh/> 最大迭代次数，若为 0 则将自动调整
     *
     * <en/> Maximum number of iterations, if it is 0, it will be automatically adjusted
     * @defaultValue 0
     */
    maxIteration?: number;
    /**
     * <zh/> minMovement 的使用条件
     * - 'mean': 平均移动距离小于 minMovement 时停止迭代
     * - 'max': 最大移动距离小于时 minMovement 时停止迭代
     * - 'min': 最小移动距离小于时 minMovement 时停止迭代
     * <en/> The condition for using minMovement
     * - 'mean': The average movement distance is less than minMovement when stopped iterating
     * - 'max': The maximum movement distance is less than minMovement when stopped iterating
     * - 'min': The minimum movement distance is less than minMovement when stopped iterating
     * @defaultValue 'mean'
     */
    distanceThresholdMode?: 'mean' | 'max' | 'min';
    /**
     * <zh/> 最大距离
     *
     * <en/> Maximum distance
     */
    maxDistance?: number;
}
export interface ForceLayoutOptions extends CommonForceLayoutOptions {
    /**
     * <zh/> 布局的宽度、默认为画布宽度
     *
     * <en/> The width of the layout, default to the width of the canvas
     */
    width?: number;
    /**
     * <zh/> 布局的高度、默认为画布高度
     *
     * <en/> The height of the layout, default to the height of the canvas
     */
    height?: number;
    /**
     * <zh/> 边的长度
     * - number: 固定长度
     * - ((edge?: Edge, source?: any, target?: any) => number): 根据边的信息返回长度
     * <en/> The length of the edge
     * - number: fixed length
     * - ((edge?: Edge, source?: any, target?: any) => number): return length according to the edge information
     * @defaultValue 200
     */
    linkDistance?: number | ((edge?: Edge, source?: any, target?: any) => number);
    /**
     * <zh/> 节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用
     *
     * <en/> The force of the node, positive numbers represent the attraction force between nodes, and negative numbers represent the repulsion force between nodes
     * @defaultValue 1000
     */
    nodeStrength?: number | ((d?: Node) => number);
    /**
     * <zh/> 边的作用力（引力）大小
     *
     * <en/> The size of the force of the edge (attraction)
     * @defaultValue 50
     */
    edgeStrength?: number | ((d?: Edge) => number);
    /**
     * <zh/> 是否防止重叠，必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测
     *
     * <en/> Whether to prevent overlap, must be used with the following properties nodeSize or data.size in the node data, and only when the data.size is set in the data or the nodeSize value is configured with the same value as the current graph node size in the layout configuration, can the node overlap collision detection be performed
     * @defaultValue true
     */
    preventOverlap?: boolean;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> The size of the node (diameter). Used for collision detection when preventing node overlap
     */
    nodeSize?: Size | ((d?: Node) => Size);
    /**
     * <zh/> preventOverlap 为 true 时生效, 防止重叠时节点边缘间距的最小值。可以是回调函数, 为不同节点设置不同的最小间距
     *
     * <en/> It is effective when preventOverlap is true. The minimum spacing of the node edge when preventing overlap. It can be a callback function to set different minimum spacing for different nodes
     */
    nodeSpacing?: number | ((d?: Node) => number);
    /**
     * <zh/> 阻尼系数，取值范围 [0, 1]。数字越大，速度降低得越慢
     *
     * <en/> Damping coefficient, the range of the value is [0, 1]. The larger the number, the slower the speed will decrease
     * @defaultValue 0.9
     */
    damping?: number;
    /**
     * <zh/> 一次迭代的最大移动长度
     *
     * <en/> The maximum movement length of one iteration
     * @defaultValue 200
     */
    maxSpeed?: number;
    /**
     * <zh/> 库伦系数，斥力的一个系数，数字越大，节点之间的斥力越大
     *
     * <en/> Coulomb's coefficient, a coefficient of repulsion, the larger the number, the larger the repulsion between nodes
     * @defaultValue 0.005
     */
    coulombDisScale?: number;
    /**
     * <zh/> 中心力大小，指所有节点被吸引到 center 的力。数字越大，布局越紧凑
     *
     * <en/> The size of the center force, which attracts all nodes to the center. The larger the number, the more compact the layout
     * @defaultValue 10
     */
    gravity?: number;
    /**
     * <zh/> 斥力系数，数值越大，斥力越大
     *
     * <en/> The repulsion coefficient, the larger the number, the larger the repulsion
     * @defaultValue 1
     */
    factor?: number;
    /**
     * <zh/> 控制每个迭代节点的移动速度
     *
     * <en/> Control the movement speed of each iteration node
     * @defaultValue 0.02
     */
    interval?: number;
    /**
     * <zh/> 向心力配置，包括叶子节点、离散点、其他节点的向心中心及向心力大小
     *
     * <en/> Centripetal configuration, including the centripetal center of leaf nodes, discrete points, and the centripetal center of other nodes
     */
    centripetalOptions?: CentripetalOptions;
    /**
     * <zh/> 是否需要叶子结点聚类
     *
     * <en/> Whether to cluster leaf nodes
     * @remarks
     * <zh/> 若为 true，则 centripetalOptions.single 将为 100；centripetalOptions.leaf 将使用 getClusterNodeStrength 返回值；getClusterNodeStrength.center 将为叶子节点返回当前所有叶子节点的平均中心
     *
     * <en/> If it is true, centripetalOptions.single will be 100; centripetalOptions.leaf will use the return value of getClusterNodeStrength; getClusterNodeStrength.center will be the average center of all leaf nodes
     * @defaultValue false
     */
    leafCluster?: boolean;
    /**
     * <zh/> 是否需要全部节点聚类
     *
     * <en/> Whether to cluster all nodes
     * @remarks
     * <zh/> 若为 true，将使用 nodeClusterBy 配置的节点数据中的字段作为聚类依据。 centripetalOptions.single、centripetalOptions.leaf、centripetalOptions.others 将使用 getClusterNodeStrength 返回值；leaf、centripetalOptions.center 将使用当前节点所属聚类中所有节点的平均中心
     *
     * <en/> If it is true, the node data configured by nodeClusterBy will be used as the clustering basis. centripetalOptions.single, centripetalOptions.leaf, centripetalOptions.others will use the return value of getClusterNodeStrength; leaf、centripetalOptions.center will use the average center of all nodes in the current cluster
     * @defaultValue false
     */
    clustering?: boolean;
    /**
     * <zh/> 指定节点数据中的字段名称作为节点聚类的依据，clustering 为 true 时生效，自动生成 centripetalOptions，可配合 clusterNodeStrength 使用
     *
     * <en/> Specify the field name of the node data as the clustering basis for the node, and it takes effect when clustering is true. You can combine it with clusterNodeStrength to use it
     */
    nodeClusterBy?: string;
    /**
     * <zh/> 配合 clustering 和 nodeClusterBy 使用，指定聚类向心力的大小
     *
     * <en/> Use it with clustering and nodeClusterBy to specify the size of the centripetal force of the cluster
     * @defaultValue 20
     */
    clusterNodeStrength?: number | ((node: Node) => number);
    /**
     * <zh/> 防止重叠的力强度，范围 [0, 1]
     *
     * <en/> The strength of the force that prevents overlap, range [0, 1]
     * @defaultValue 1
     */
    collideStrength?: number;
    /**
     * <zh/> 每一次迭代的回调函数
     *
     * <en/> The callback function for each iteration
     * @param data - <zh/> 布局数据 | <en/> Layout data
     */
    onTick?: (data: LayoutMapping) => void;
    /**
     * <zh/> 每个节点质量的回调函数，如参为节点内部流转数据，返回值为质量大小
     *
     * <en/> The callback function for the mass of each node, if the parameter is the internal circulation data of the node, the return value is the size of the mass
     * @param node - <zh/> 节点数据 | <en/> Node data
     * @returns <zh/> 节点质量大小 | <en/> Mass size of the node
     */
    getMass?: (node?: Node) => number;
    /**
     * <zh/> 每个节点中心力的 x、y、强度的回调函数，若不指定，则没有额外中心力
     *
     * <en/> The callback function for the center force of each node, if not specified, there will be no additional center force
     * @param node - <zh/> 节点数据 | <en/> Node data
     * @param degree - <zh/> 节点度数 | <en/> Node degree
     * @returns <zh/> 中心力 x、y、强度 | <en/> Center force x、y、strength
     */
    getCenter?: (node?: Node, degree?: number) => number[];
    /**
     * <zh/> 每个迭代的监控信息回调，energy 表示布局的收敛能量。若配置可能带来额外的计算能量性能消耗，不配置则不计算
     *
     * <en/> The callback function for monitoring information of each iteration, energy indicates the convergence energy of the layout. If not configured, it will not calculate
     * @param params - <zh/> 监控信息 | <en/> Monitoring information
     */
    monitor?: (params: {
        energy: number;
        nodes: Node[];
        edges: Edge[];
        iterations: number;
    }) => void;
}
/**
 * <zh/> ForceAtlas2 力导向布局配置
 *
 * <en/> ForceAtlas2 layout configuration
 */
export interface ForceAtlas2LayoutOptions extends CommonForceLayoutOptions {
    /**
     * <zh/> 布局的宽度，默认使用容器宽度
     *
     * <en/> The width of the layout, default to use the container width
     */
    width?: number;
    /**
     * <zh/> 布局的高度，默认使用容器高度
     *
     * <en/> The height of the layout, default to use the container height
     */
    height?: number;
    /**
     * <zh/> 斥力系数，可用于调整布局的紧凑程度。kr 越大，布局越松散
     *
     * <en/> The repulsive coefficient, which can be used to adjust the compactness of the layout. The larger kr is, the more relaxed the layout is
     * @defaultValue 5
     */
    kr?: number;
    /**
     * <zh/> 重力系数。kg 越大，布局越聚集在中心
     *
     * <en/> The gravitational coefficient. The larger kg is, the more clustered the layout is in the center
     * @defaultValue 1
     */
    kg?: number;
    /**
     * <zh/> 控制迭代过程中，节点移动的速度
     *
     * <en/> Control the speed of node movement during iteration
     * @defaultValue 0.1
     */
    ks?: number;
    /**
     * <zh/> 迭代过程中，最大的节点移动的速度上限
     *
     * <en/> The upper limit of the maximum node movement speed during iteration
     * @defaultValue 10
     */
    ksmax?: number;
    /**
     * <zh/> 迭代接近收敛时停止震荡的容忍度
     *
     * <en/> The tolerance for stopping oscillation when iteration is close to convergence
     * @defaultValue 0.1
     */
    tao?: number;
    /**
     * <zh/> 聚类模式、'linlog' 模式下，聚类将更加紧凑
     * - 'nornal'：普通模式
     * - 'linlog'：linlog模式
     * <en/> Clustering mode, the clustering will be more compact in the 'linlog' mode
     * - 'normal'：normal mode
     * - 'linlog'：linlog mode
     * @defaultValue 'normal'
     */
    mode?: 'normal' | 'linlog';
    /**
     * <zh/> 是否防止重叠
     *
     * <en/> Whether to prevent overlap
     * @remarks
     * <zh/> 必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测
     *
     * <en/> Must be used with the following properties: nodeSize or data.size in the node data. Only when data.size or nodeSize with the same value as the current graph node size is set in the layout configuration, can the collision detection of node overlap be performed
     * @defaultValue false
     */
    preventOverlap?: boolean;
    /**
     * <zh/> 是否打开 hub 模式。若为 true，相比与出度大的节点，入度大的节点将会有更高的优先级被放置在中心位置
     *
     * <en/> Whether to open the hub mode. If true, nodes with high out-degree will have higher priority than nodes with high in-degree to be placed in the center
     * @defaultValue false
     */
    dissuadeHubs?: boolean;
    /**
     * <zh/> 是否打开 barnes hut 加速，即四叉树加速
     *
     * <en/> Whether to open the barnes hut acceleration, that is, the quad tree acceleration
     * @remarks
     * <zh/> 由于每次迭代需要更新构建四叉树，建议在较大规模图上打开。默认情况下为 undefined，当节点数量大于 250 时它将会被激活。设置为 false 则不会自动被激活
     *
     * <en/> It is recommended to open it on large-scale graphs. By default, it will be activated when the number of nodes is greater than 250. Setting it to false will not be activated automatically
     */
    barnesHut?: boolean;
    /**
     * <zh/> 是否开启自动剪枝模式
     *
     * <en/> Whether to enable the automatic pruning mode
     * @remarks
     * <zh/> 默认情况下为 undefined，当节点数量大于 100 时它将会被激活。注意，剪枝能够提高收敛速度，但可能会降低图的布局质量。设置为 false 则不会自动被激活
     *
     * <en/> By default, it will be activated when the number of nodes is greater than 100. Note that pruning can improve the convergence speed, but it may reduce the layout quality of the graph. Setting it to false will not be activated automatically
     */
    prune?: boolean;
    /**
     * <zh/> 节点大小（直径）。用于防止节点重叠时的碰撞检测
     *
     * <en/> Node size (diameter). Used for collision detection when preventing node overlap
     */
    nodeSize?: Size | ((node?: Node) => Size);
    /**
     * <zh/> 每一次迭代的回调函数
     *
     * <en/> The callback function for each iteration
     * @param data - <zh/> 当前迭代的布局数据 | <en/> Current layout data
     */
    onTick?: (data: LayoutMapping) => void;
}
/**
 * <zh/> Fruchterman 力导布局配置项
 *
 * <en/> Fruchterman force layout configuration
 */
export interface FruchtermanLayoutOptions extends CommonForceLayoutOptions {
    /**
     * <zh/> 布局的宽度，默认使用容器宽度
     *
     * <en/> The width of the layout, defaults to the container width
     */
    width?: number;
    /**
     * <zh/> 布局的高度，默认使用容器高度
     *
     * <en/> The height of the layout, defaults to the container height
     */
    height?: number;
    /**
     * <zh/> 中心力大小，指所有节点被吸引到 center 的力。数字越大，布局越紧凑
     *
     * <en/> The size of the center force, which means the force that all nodes are attracted to the center. The larger the number, the more compact the layout
     * @defaultValue 10
     */
    gravity?: number;
    /**
     * <zh/> 每次迭代节点移动的速度。速度太快可能会导致强烈震荡
     *
     * <en/> The speed at which the node moves in each iteration. A speed that is too fast may cause strong oscillations
     * @defaultValue 5
     */
    speed?: number;
    /**
     * <zh/> 是否按照聚类布局
     *
     * <en/> Whether to layout according to clustering
     * @defaultValue false
     */
    clustering?: boolean;
    /**
     * <zh/> 聚类内部的重力大小，影响聚类的紧凑程度，在 clustering 为 true 时生效
     *
     * <en/> The size of the gravity inside the cluster, which affects the compactness of the cluster, and it takes effect when clustering is true
     * @defaultValue 10
     */
    clusterGravity?: number;
    /**
     * <zh/> 聚类布局依据的节点数据 data 中的字段名，cluster: true 时使用
     *
     * <en/> The field name of the node data data in the data, which is used when cluster is true
     * @defaultValue 'cluster'
     */
    nodeClusterBy?: string;
    /**
     * <zh/> 每一次迭代的回调函数
     *
     * <en/> The callback function for each iteration
     * @param data - <zh/> 当前迭代的布局数据 | <en/> Current layout data
     */
    onTick?: (data: LayoutMapping) => void;
}
export {};
