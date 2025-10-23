import { ID } from '@antv/graphlib';
import type { DagreAlign, DagreRankdir } from './antv-dagre/types';
import type { Graph as IGraph, Layout, LayoutMapping, Node, OutNode, PointTuple } from './types';
import type { Size } from './util/size';
/**
 * <zh/> 层次/流程图布局的配置项
 *
 * <en/> The configuration options for the hierarchical/flowchart layout
 */
export interface AntVDagreLayoutOptions {
    /**
     * <zh/> 布局的方向。T：top（上）；B：bottom（下）；L：left（左）；R：right（右）
     * - 'TB':从上至下布局
     * - 'BT':从下至上布局
     * - 'LR':从左至右布局
     * - 'RL':从右至左布局
     * <en/> The direction of the layout. T: top; B: bottom; L: left; R: right
     * - 'TB':from top to bottom
     * - 'BT':from bottom to top
     * - 'LR':from left to right
     * - 'RL':from right to left
     * @defaultValue 'TB'
     */
    rankdir?: DagreRankdir;
    /**
     * <zh/> 布局的模式
     *
     * <en/> The mode of the layout
     */
    ranker?: 'network-simplex' | 'tight-tree' | 'longest-path';
    /**
     * <zh/> 节点对齐方式 U：upper（上）；D：down（下）；L：left（左）；R：right（右）
     * - 'UL':对齐到左上角
     * - 'UR':对齐到右上角
     * - 'DL':对齐到左下角
     * - 'DR':对齐到右下角
     * - undefined:默认，中间对齐
     * <en/> The alignment of the nodes U: upper; D: down; L: left; R: right
     * - 'UL':align to left top
     * - 'UR':align to right top
     * - 'DL':align to left bottom
     * - 'DR':align to right bottom
     * - undefined:default, align to center
     * @defaultValue 'UL'
     */
    align?: DagreAlign;
    /**
     * <zh/> 布局的左上角对齐位置
     *
     * <en/> The position of the layout's top-left corner
     * @defaultValue undefined
     */
    begin?: PointTuple;
    /**
     * <zh/> 节点大小（直径）。
     *
     * <en/> The diameter of the node
     * @remarks
     * <zh/> 用于防止节点重叠时的碰撞检测
     *
     * <en/> Used for collision detection when nodes overlap
     * @defaultValue undefined
     */
    nodeSize?: Size | ((nodeData: Node) => Size);
    /**
     * <zh/> 节点间距（px）
     *
     * <en/> The horizontal gap between nodes (px)
     * @remarks
     * <zh/> 在 rankdir 为 'TB' 或 'BT' 时是节点的水平间距；在 rankdir 为 'LR' 或 'RL' 时代表节点的竖直方向间距。nodesepFunc 拥有更高的优先级
     *
     * <en/> The horizontal gap between nodes (px) in the case of rankdir is 'TB' or 'BT'. The vertical gap between nodes (px) in the case of rankdir is 'LR' or 'RL'. nodesepFunc has a higher priority
     * @defaultValue 50
     */
    nodesep?: number;
    /**
     * <zh/> 层间距（px）
     *
     * <en/> The vertical gap between levels (px)
     * @remarks
     * <zh/> 在 rankdir 为 'TB' 或 'BT' 时是竖直方向相邻层间距；在 rankdir 为 'LR' 或 'RL' 时代表水平方向相邻层间距。ranksepFunc 拥有更高的优先级
     *
     * <en/> The vertical gap between levels (px) in the case of rankdir is 'TB' or 'BT'. The horizontal gap between levels (px) in the case of rankdir is 'LR' or 'RL'. ranksepFunc has a higher priority
     * @defaultValue 50
     */
    ranksep?: number;
    /**
     * <zh/> 是否同时计算边上的的控制点位置
     *
     * <en/> Whether to calculate the control point position of the edge at the same time
     * @remarks
     * <zh/> 仅在边配置中使用了内置折线（type: 'polyline-edge'） 时，或任何将自定义消费了 data.controlPoints 字段作为控制点位置的边时生效。本质上就是给边数据增加了 data.controlPoints
     *
     * <en/> It only takes effect when the built-in polyline edge (type: 'polyline-edge') is used in the edge configuration, or any edge that consumes data.controlPoints as the control point position. In essence, it adds data.controlPoints to the edge data
     * @defaultValue false
     */
    controlPoints?: boolean;
    /**
     * <zh/> 同一层节点是否根据每个节点数据中的 parentId 进行排序，以防止 Combo 重叠
     *
     * <en/> Whether to sort nodes in the same layer according to the parentId in each node data to prevent Combo overlapping
     * @remarks
     * <zh/> 建议在有 Combo 的情况下配置
     *
     * <en/> It is recommended to configure when there is a Combo
     * @defaultValue false
     */
    sortByCombo?: boolean;
    /**
     * <zh/> 是否为边的label留位置
     *
     * <en/> Whether to leave space for the label of the edge
     * @remarks
     * <zh/> 这会影响是否在边中间添加dummy node
     *
     * <en/> It will affect whether to add a dummy node in the middle of the edge
     * @defaultValue true
     */
    edgeLabelSpace?: boolean;
    /**
     * <zh/> 同层节点顺序的参考数组，存放节点 id 值
     *
     * <en/> The reference array of the order of the nodes in the same layer, storing the node id value
     * @remarks
     * <zh/> 若未指定，则将按照 dagre 本身机制排列同层节点顺序
     *
     * <en/> If not specified, the same layer node order will be arranged according to the mechanism of dagre itself
     * @defaultValue false
     */
    nodeOrder?: string[];
    /**
     * <zh/> 是否基于 dagre 进行辐射布局
     *
     * <en/> Whether to use dagre for radial layout
     */
    radial?: boolean;
    /**
     * <zh/> 关注的节点
     * - ID: 节点 id
     * - Node: 节点实例
     * - null: 取消关注
     *
     * <en/> The focused node
     * - ID: node id
     * - Node: node instance
     * - null: cancel focus
     * @remarks
     * <zh/> radial 为 true 时生效
     *
     * <en/> It takes effect when radial is true
     */
    focusNode?: ID | Node | null;
    /**
     * <zh/> 布局计算时参考的节点位置
     *
     * <en/> The reference node position when calculating the layout
     * @remarks
     * <zh/> 一般用于切换数据时保证重新布局的连续性。在 G6 中，若是更新数据，则将自动使用已存在的布局结果数据作为输入
     *
     * <en/> It is generally used to ensure the continuity of the layout when switching data. In G6, if you update the data, the existing layout result data will be used as input automatically
     * @defaultValue undefined
     */
    preset?: OutNode[];
    /**
     * <zh/> 节点间距（px）的回调函数，通过该参数可以对不同节点设置不同的节点间距
     *
     * <en/> The callback function of the node spacing (px), which can be used to set different node spacing for different nodes
     * @remarks
     * <zh/> 在 rankdir 为 'TB' 或 'BT' 时是节点的水平间距；在 rankdir 为 'LR' 或 'RL' 时代表节点的竖直方向间距。优先级高于 nodesep，即若设置了 nodesepFunc，则 nodesep 不生效
     *
     * <en/> The horizontal spacing of the node in the case of rankdir is 'TB' or 'BT', and the vertical spacing of the node in the case of rankdir is 'LR' or 'RL'. The priority is higher than nodesep, that is, if nodesepFunc is set, nodesep does not take effect
     * @param d - <zh/> 节点实例 | <en/> Node instance
     */
    nodesepFunc?: (d?: Node) => number;
    /**
     * <zh/> 层间距（px）的回调函数
     *
     * <en/> The callback function of the layer spacing (px)
     * @remarks
     * <zh/> 在 rankdir 为 'TB' 或 'BT' 时是竖直方向相邻层间距；在 rankdir 为 'LR' 或 'RL' 时代表水平方向相邻层间距。优先级高于 nodesep，即若设置了 nodesepFunc，则 nodesep 不生效
     *
     * <en/> The vertical spacing of adjacent layers in the case of rankdir is 'TB' or 'BT', and the horizontal spacing of adjacent layers in the case of rankdir is 'LR' or 'RL'. The priority is higher than nodesep, that is, if nodesepFunc is set, nodesep does not take effect
     * @param d - <zh/> 节点实例 | <en/> Node instance
     */
    ranksepFunc?: (d?: Node) => number;
}
/**
 * <zh/> AntV 实现的 Dagre 布局
 *
 * <en/> AntV implementation of Dagre layout
 */
export declare class AntVDagreLayout implements Layout<AntVDagreLayoutOptions> {
    options: AntVDagreLayoutOptions;
    id: string;
    constructor(options?: AntVDagreLayoutOptions);
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph: IGraph, options?: AntVDagreLayoutOptions): Promise<LayoutMapping>;
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph: IGraph, options?: AntVDagreLayoutOptions): Promise<void>;
    private genericDagreLayout;
}
