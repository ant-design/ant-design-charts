import createWorker from './createWorker';
import { ALGORITHM } from './constant';
/**
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
var getAdjMatrixAsync = function getAdjMatrixAsync(graphData, directed) {
  return createWorker(ALGORITHM.getAdjMatrix).apply(void 0, [graphData, directed]);
};
/**
 * 图的连通分量
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
var connectedComponentAsync = function connectedComponentAsync(graphData, directed) {
  return createWorker(ALGORITHM.connectedComponent).apply(void 0, [graphData, directed]);
};
/**
 * 获取节点的度
 * @param graphData 图数据
 */
var getDegreeAsync = function getDegreeAsync(graphData) {
  return createWorker(ALGORITHM.getDegree)(graphData);
};
/**
 * 获取节点的入度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
var getInDegreeAsync = function getInDegreeAsync(graphData, nodeId) {
  return createWorker(ALGORITHM.getInDegree)(graphData, nodeId);
};
/**
 * 获取节点的出度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
var getOutDegreeAsync = function getOutDegreeAsync(graphData, nodeId) {
  return createWorker(ALGORITHM.getOutDegree)(graphData, nodeId);
};
/**
 * 检测图中的(有向) Cycle
 * @param graphData 图数据
 */
var detectCycleAsync = function detectCycleAsync(graphData) {
  return createWorker(ALGORITHM.detectCycle)(graphData);
};
/**
 * 检测图中的(无向) Cycle
 * @param graphData 图数据
 */
var detectAllCyclesAsync = function detectAllCyclesAsync(graphData) {
  return createWorker(ALGORITHM.detectAllCycles)(graphData);
};
/**
 * 检测图中的所有(有向) Cycle
 * @param graphData 图数据
 */
var detectAllDirectedCycleAsync = function detectAllDirectedCycleAsync(graphData) {
  return createWorker(ALGORITHM.detectAllDirectedCycle)(graphData);
};
/**
 * 检测图中的所有(无向) Cycle
 * @param graphData 图数据
 */
var detectAllUndirectedCycleAsync = function detectAllUndirectedCycleAsync(graphData) {
  return createWorker(ALGORITHM.detectAllUndirectedCycle)(graphData);
};
/**
 * Dijkstra's algorithm, See {@link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm}
 * @param graphData 图数据
 */
var dijkstraAsync = function dijkstraAsync(graphData, source, directed, weightPropertyName) {
  return createWorker(ALGORITHM.dijkstra).apply(void 0, [graphData, source, directed, weightPropertyName]);
};
/**
 * 查找两点之间的所有路径
 * @param graphData 图数据
 * @param start 路径起始点ID
 * @param end 路径终点ID
 * @param directed 是否为有向图
 */
var findAllPathAsync = function findAllPathAsync(graphData, start, end, directed) {
  return createWorker(ALGORITHM.findAllPath).apply(void 0, [graphData, start, end, directed]);
};
/**
 * 查找两点之间的所有路径
 * @param graphData 图数据
 * @param start 路径起始点ID
 * @param end 路径终点ID
 * @param directed 是否为有向图
 * @param weightPropertyName 边权重的属名称，若数据中没有权重，则默认每条边权重为 1
 */
var findShortestPathAsync = function findShortestPathAsync(graphData, start, end, directed, weightPropertyName) {
  return createWorker(ALGORITHM.findShortestPath).apply(void 0, [graphData, start, end, directed, weightPropertyName]);
};
/**
 * Floyd–Warshall algorithm, See {@link https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm}
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
var floydWarshallAsync = function floydWarshallAsync(graphData, directed) {
  return createWorker(ALGORITHM.floydWarshall).apply(void 0, [graphData, directed]);
};
/**
 * 标签传播算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param maxIteration 最大迭代次数
 */
var labelPropagationAsync = function labelPropagationAsync(graphData, directed, weightPropertyName, maxIteration) {
  if (maxIteration === void 0) {
    maxIteration = 1000;
  }
  return createWorker(ALGORITHM.labelPropagation)(graphData, directed, weightPropertyName, maxIteration);
};
/**
 * 社区发现 louvain 算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param threshold
 */
var louvainAsync = function louvainAsync(graphData, directed, weightPropertyName, threshold) {
  return createWorker(ALGORITHM.louvain)(graphData, directed, weightPropertyName, threshold);
};
/**
 * 最小生成树，See {@link https://en.wikipedia.org/wiki/Kruskal%27s_algorithm}
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @param algo 'prim' | 'kruskal' 算法类型
 * @return EdgeConfig[] 返回构成MST的边的数组
 */
var minimumSpanningTreeAsync = function minimumSpanningTreeAsync(graphData, weight, algo) {
  return createWorker(ALGORITHM.minimumSpanningTree).apply(void 0, [graphData, weight, algo]);
};
/**
 * PageRank https://en.wikipedia.org/wiki/PageRank
 * refer: https://github.com/anvaka/ngraph.pagerank
 * @param graph
 * @param epsilon 判断是否收敛的精度值，默认 0.000001
 * @param linkProb 阻尼系数（dumping factor），指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85
 */
var pageRankAsync = function pageRankAsync(graphData, epsilon, linkProb) {
  return createWorker(ALGORITHM.pageRank).apply(void 0, [graphData, epsilon, linkProb]);
};
/**
 * 获取指定节点的所有邻居
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 * @param type 邻居类型
 */
var getNeighborsAsync = function getNeighborsAsync(nodeId, edges, type) {
  return createWorker(ALGORITHM.getNeighbors).apply(void 0, [nodeId, edges, type]);
};
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
var GADDIAsync = function GADDIAsync(graphData, pattern, directed, k, length, nodeLabelProp, edgeLabelProp) {
  if (directed === void 0) {
    directed = false;
  }
  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }
  if (edgeLabelProp === void 0) {
    edgeLabelProp = 'cluster';
  }
  return createWorker(ALGORITHM.GADDI).apply(void 0, [graphData, pattern, directed, k, length, nodeLabelProp, edgeLabelProp]);
};
export { getAdjMatrixAsync, connectedComponentAsync, getDegreeAsync, getInDegreeAsync, getOutDegreeAsync, detectCycleAsync, detectAllCyclesAsync, detectAllDirectedCycleAsync, detectAllUndirectedCycleAsync, dijkstraAsync, findAllPathAsync, findShortestPathAsync, floydWarshallAsync, labelPropagationAsync, louvainAsync, minimumSpanningTreeAsync, pageRankAsync, getNeighborsAsync, GADDIAsync };