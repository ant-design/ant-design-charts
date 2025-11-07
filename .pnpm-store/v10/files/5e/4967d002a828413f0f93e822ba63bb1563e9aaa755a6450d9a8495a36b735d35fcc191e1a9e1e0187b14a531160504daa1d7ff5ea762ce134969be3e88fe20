import type { EdgeData, GraphData } from '../spec';
import type { EdgeDirection, ID, NodeCentralityOptions } from '../types';
export type CentralityResult = Map<ID, number>;
export declare const getNodeCentralities: (graphData: GraphData, getRelatedEdgesData: (id: ID, direction?: EdgeDirection) => EdgeData[], centrality: NodeCentralityOptions) => CentralityResult;
export declare const initCentralityResult: (graphData: GraphData) => CentralityResult;
/**
 * <zh/> 计算图中每个节点的中介中心性
 *
 * <en/> Calculate the betweenness centrality for each node in the graph
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @param weightPropertyName - <zh/> 边的权重属性名 | <en/>The weight property name of the edge
 * @returns <zh/> 每个节点的中介中心性值 | <en/>The betweenness centrality for each node
 */
export declare const computeNodeBetweennessCentrality: (graphData: GraphData, directed?: boolean, weightPropertyName?: string) => CentralityResult;
/**
 * <zh/> 计算图中每个节点的接近中心性
 *
 * <en/> Calculate the closeness centrality for each node in the graph
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @param weightPropertyName - <zh/> 边的权重属性名 | <en/>The weight property name of the edge
 * @returns <zh/> 每个节点的接近中心性值 | <en/>The closeness centrality for each node
 */
export declare const computeNodeClosenessCentrality: (graphData: GraphData, directed?: boolean, weightPropertyName?: string) => CentralityResult;
/**
 * <zh/> 计算图中每个节点的 PageRank 中心性
 *
 * <en/> Calculate the PageRank centrality for each node in the graph
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param epsilon - <zh/> PageRank 算法的收敛容差 | <en/>The convergence tolerance of the PageRank algorithm
 * @param linkProb - <zh/> PageRank 算法的阻尼系数，指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85 | <en/>The damping factor of the PageRank algorithm, which refers to the probability that a user will continue to visit the next node linked to a node at any time, with an empirical value of 0.85
 * @returns <zh/> 每个节点的 PageRank 中心性值 | <en/>The PageRank centrality for each node
 */
export declare const computeNodePageRankCentrality: (graphData: GraphData, epsilon?: number, linkProb?: number) => CentralityResult;
/**
 * <zh/> 计算图中每个节点的特征向量中心性
 *
 * <en/> Calculate the eigenvector centrality for each node in the graph.
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @returns 每个节点的特征向量中心性值 The eigenvector centrality for each node.
 */
export declare const computeNodeEigenvectorCentrality: (graphData: GraphData, directed?: boolean) => CentralityResult;
/**
 * <zh/> 创建图的邻接矩阵
 *
 * <en/> Create the adjacency matrix for the graph.
 * @param graphData - <zh/> 图数据 | <en/>Graph data
 * @param directed - <zh/> 是否为有向图 | <en/>Whether the graph is directed
 * @returns <zh/> 邻接矩阵 | <en/>The adjacency matrix
 */
export declare const createAdjacencyMatrix: (graphData: GraphData, directed?: boolean) => number[][];
