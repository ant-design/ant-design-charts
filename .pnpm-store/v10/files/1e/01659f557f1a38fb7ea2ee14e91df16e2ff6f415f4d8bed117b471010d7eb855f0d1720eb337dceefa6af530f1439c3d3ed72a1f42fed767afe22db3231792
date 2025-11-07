import type { PathStyleProps } from '@antv/g';
import type { RuntimeContext } from '../runtime/types';
import type { EdgeData } from '../spec';
import type { ID } from '../types';
import type { BaseTransformOptions } from './base-transform';
import { BaseTransform } from './base-transform';
import type { DrawData } from './types';
export interface ProcessParallelEdgesOptions extends BaseTransformOptions {
    /**
     * <zh/> 处理模式
     * - `'merge'`: 将平行边合并为一条边，适用于不需要区分平行边的情况
     * - '`bundle`': 每条边都会与其他所有平行边捆绑在一起，并通过改变曲率与其他边分开。如果一组平行边的数量是奇数，那么中心的边将被绘制为直线，其他的边将被绘制为曲线
     *
     * <en/> Processing mode
     * - '`merge`': Merge parallel edges into one edge which is suitable for cases where parallel edges do not need to be distinguished
     * - '`bundle`': Each edge will be bundled with all other parallel edges and separated from them by varying the curvature. If the number of parallel edges in a group is odd, the central edge will be drawn as a straight line, and the others will be drawn as curves
     * @defaultValue 'bundle'
     */
    mode: 'bundle' | 'merge';
    /**
     * <zh/> 考虑要处理的边，默认为全部边
     *
     * <en/> The edges to be handled, all edges by default
     */
    edges?: ID[];
    /**
     * <zh/> 边之间的距离，仅在捆绑模式下有效
     *
     * <en/> The distance between edges, only valid for bundling mode
     */
    distance?: number;
    /**
     * <zh/> 合并边的样式，仅在合并模式下有效
     *
     * <en/> The style of the merged edge, only valid for merging mode
     */
    style?: PathStyleProps | ((prev: EdgeData[]) => PathStyleProps);
}
/**
 * <zh/> 处理平行边，即多条边共享同一源节点和目标节点
 *
 * <en/> Process parallel edges which share the same source and target nodes
 * @remarks
 * <zh/> 平行边（Parallel Edges）是指在图结构中，两个节点之间存在多条边。这些边共享相同的源节点和目标节点，但可能代表不同的关系或属性。为了避免边的重叠和混淆，提供了两种处理平行边的方式：(1) 捆绑模式（bundle）：将平行边捆绑在一起，通过改变曲率与其他边分开；(2) 合并模式（merge）：将平行边合并为一条聚合。
 *
 * <en/> Parallel Edges refer to multiple edges existing between two nodes in a graph structure. These edges share the same source and target nodes but may represent different relationships or attributes. To avoid edge overlap and confusion, two methods are provided for handling parallel edges: (1) Bundle Mode: Bundles parallel edges together and separates them from other edges by altering their curvature; (2) Merge Mode: Merges parallel edges into a single aggregated edge.
 */
export declare class ProcessParallelEdges extends BaseTransform<ProcessParallelEdgesOptions> {
    static defaultOptions: Partial<ProcessParallelEdgesOptions>;
    private cacheMergeStyle;
    constructor(context: RuntimeContext, options: ProcessParallelEdgesOptions);
    /**
     * <zh/> 在每次绘制前处理平行边
     *
     * <en/> Process parallel edges before each drawing
     * @param input
     */
    beforeDraw(input: DrawData): DrawData;
    /**
     * <zh/> 获取受影响的平行边
     *
     * <en/> Get affected parallel edges
     * @param input
     */
    private getAffectedParallelEdges;
    protected applyBundlingStyle: (input: DrawData, edges: Map<ID, EdgeData>, distance: number) => void;
    private resetEdgeStyle;
    protected applyMergingStyle: (input: DrawData, edges: Map<ID, EdgeData>) => void;
}
/**
 * <zh/> 优化的按照端点分组方法，时间复杂度O(n)
 *
 * <en/> Optimized method to group by endpoints, time complexity O(n)
 * @param edges - <zh/> 边集合 | <en/> Edges
 * @returns <zh/> 端点分组后的边集合 | <en/> Edges grouped by endpoints
 */
export declare const groupByEndpoints: (edges: Map<ID, EdgeData>) => {
    edgeMap: Map<string, EdgeData[]>;
    reverses: Record<string, boolean>;
};
/**
 * <zh/> 获取平行边
 *
 * <en/> Get parallel edges
 * @param edge - <zh/> 目标边 | <en/> Target edge
 * @param edges - <zh/> 边集合 | <en/> Edges
 * @param containsSelf - <zh/> 输出结果是否包含目标边 | <en/> Whether the output result contains the target edge
 * @returns <zh/> 平行边集合 | <en/> Parallel edges
 */
export declare const getParallelEdges: (edge: EdgeData, edges: EdgeData[], containsSelf?: boolean) => EdgeData[];
/**
 * <zh/> 判断两条边是否平行
 *
 * <en/> Determine whether two edges are parallel
 * @param edge1 - <zh/> 边1 | <en/> Edge 1
 * @param edge2 - <zh/> 边2 | <en/> Edge 2
 * @returns <zh/> 是否平行 | <en/> Whether is parallel
 */
export declare const isParallelEdges: (edge1: EdgeData, edge2: EdgeData) => boolean;
