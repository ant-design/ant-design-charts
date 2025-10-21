import { GraphData, DegreeType, Matrix, ClusterData, EdgeConfig, NodeConfig } from '../types';
/**
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
declare const getAdjMatrixAsync: (graphData: GraphData, directed?: boolean) => Promise<Matrix[]>;
/**
 * 图的连通分量
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
declare const connectedComponentAsync: (graphData: GraphData, directed?: boolean) => Promise<NodeConfig[][]>;
/**
 * 获取节点的度
 * @param graphData 图数据
 */
declare const getDegreeAsync: (graphData: GraphData) => Promise<DegreeType>;
/**
 * 获取节点的入度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
declare const getInDegreeAsync: (graphData: GraphData, nodeId: string) => Promise<DegreeType>;
/**
 * 获取节点的出度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
declare const getOutDegreeAsync: (graphData: GraphData, nodeId: string) => Promise<DegreeType>;
/**
 * 检测图中的(有向) Cycle
 * @param graphData 图数据
 */
declare const detectCycleAsync: (graphData: GraphData) => Promise<{
    [key: string]: string;
}>;
/**
 * 检测图中的(无向) Cycle
 * @param graphData 图数据
 */
declare const detectAllCyclesAsync: (graphData: GraphData) => Promise<{
    [key: string]: string;
}>;
/**
 * 检测图中的所有(有向) Cycle
 * @param graphData 图数据
 */
declare const detectAllDirectedCycleAsync: (graphData: GraphData) => Promise<{
    [key: string]: string;
}>;
/**
 * 检测图中的所有(无向) Cycle
 * @param graphData 图数据
 */
declare const detectAllUndirectedCycleAsync: (graphData: GraphData) => Promise<{
    [key: string]: string;
}>;
/**
 * Dijkstra's algorithm, See {@link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm}
 * @param graphData 图数据
 */
declare const dijkstraAsync: (graphData: GraphData, source: string, directed?: boolean, weightPropertyName?: string) => Promise<{
    length: number;
    path: any;
    allPath: any;
}>;
/**
 * 查找两点之间的所有路径
 * @param graphData 图数据
 * @param start 路径起始点ID
 * @param end 路径终点ID
 * @param directed 是否为有向图
 */
declare const findAllPathAsync: (graphData: GraphData, start: string, end: string, directed?: boolean) => Promise<string[][]>;
/**
 * 查找两点之间的所有路径
 * @param graphData 图数据
 * @param start 路径起始点ID
 * @param end 路径终点ID
 * @param directed 是否为有向图
 * @param weightPropertyName 边权重的属名称，若数据中没有权重，则默认每条边权重为 1
 */
declare const findShortestPathAsync: (graphData: GraphData, start: string, end: string, directed?: boolean, weightPropertyName?: string) => Promise<{
    length: number;
    path: any;
    allPath: any;
}>;
/**
 * Floyd–Warshall algorithm, See {@link https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm}
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
declare const floydWarshallAsync: (graphData: GraphData, directed?: boolean) => Promise<Matrix[]>;
/**
 * 标签传播算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param maxIteration 最大迭代次数
 */
declare const labelPropagationAsync: (graphData: GraphData, directed: boolean, weightPropertyName: string, maxIteration?: number) => Promise<ClusterData>;
/**
 * 社区发现 louvain 算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param threshold
 */
declare const louvainAsync: (graphData: GraphData, directed: boolean, weightPropertyName: string, threshold: number) => Promise<ClusterData>;
/**
 * 最小生成树，See {@link https://en.wikipedia.org/wiki/Kruskal%27s_algorithm}
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @param algo 'prim' | 'kruskal' 算法类型
 * @return EdgeConfig[] 返回构成MST的边的数组
 */
declare const minimumSpanningTreeAsync: (graphData: GraphData, weight?: boolean, algo?: string) => Promise<EdgeConfig[]>;
/**
 * PageRank https://en.wikipedia.org/wiki/PageRank
 * refer: https://github.com/anvaka/ngraph.pagerank
 * @param graph
 * @param epsilon 判断是否收敛的精度值，默认 0.000001
 * @param linkProb 阻尼系数（dumping factor），指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85
 */
declare const pageRankAsync: (graphData: GraphData, epsilon?: number, linkProb?: number) => Promise<{
    [key: string]: number;
}>;
/**
 * 获取指定节点的所有邻居
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 * @param type 邻居类型
 */
declare const getNeighborsAsync: (nodeId: string, edges: EdgeConfig[], type?: 'target' | 'source' | undefined) => Promise<string[]>;
/**
 * GADDI 图模式匹配
 * @param graphData 原图数据
 * @param pattern 搜索图（需要在原图上搜索的模式）数据
 * @param directed 是否计算有向图，默认 false
 * @param k 参数 k，表示 k-近邻
 * @param length 参数 length
 * @param nodeLabelProp 节点数据中代表节点标签（分类信息）的属性名。默认为 cluster
 * @param edgeLabelProp 边数据中代表边标签（分类信息）的属性名。默认为 cluster
 */
declare const GADDIAsync: (graphData: GraphData, pattern: GraphData, directed: boolean, k: number, length: number, nodeLabelProp?: string, edgeLabelProp?: string) => Promise<GraphData[]>;
export { getAdjMatrixAsync, connectedComponentAsync, getDegreeAsync, getInDegreeAsync, getOutDegreeAsync, detectCycleAsync, detectAllCyclesAsync, detectAllDirectedCycleAsync, detectAllUndirectedCycleAsync, dijkstraAsync, findAllPathAsync, findShortestPathAsync, floydWarshallAsync, labelPropagationAsync, louvainAsync, minimumSpanningTreeAsync, pageRankAsync, getNeighborsAsync, GADDIAsync, };
