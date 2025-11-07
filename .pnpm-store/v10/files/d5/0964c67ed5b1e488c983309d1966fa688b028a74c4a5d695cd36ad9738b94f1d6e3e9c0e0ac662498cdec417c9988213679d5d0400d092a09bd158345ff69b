"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageRankAsync = exports.minimumSpanningTreeAsync = exports.louvainAsync = exports.labelPropagationAsync = exports.getOutDegreeAsync = exports.getNeighborsAsync = exports.getInDegreeAsync = exports.getDegreeAsync = exports.getAdjMatrixAsync = exports.floydWarshallAsync = exports.findShortestPathAsync = exports.findAllPathAsync = exports.dijkstraAsync = exports.detectCycleAsync = exports.detectAllUndirectedCycleAsync = exports.detectAllDirectedCycleAsync = exports.detectAllCyclesAsync = exports.connectedComponentAsync = exports.GADDIAsync = void 0;
var _createWorker = _interopRequireDefault(require("./createWorker"));
var _constant = require("./constant");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
var getAdjMatrixAsync = function getAdjMatrixAsync(graphData, directed) {
  return (0, _createWorker.default)(_constant.ALGORITHM.getAdjMatrix).apply(void 0, [graphData, directed]);
};
/**
 * 图的连通分量
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
exports.getAdjMatrixAsync = getAdjMatrixAsync;
var connectedComponentAsync = function connectedComponentAsync(graphData, directed) {
  return (0, _createWorker.default)(_constant.ALGORITHM.connectedComponent).apply(void 0, [graphData, directed]);
};
/**
 * 获取节点的度
 * @param graphData 图数据
 */
exports.connectedComponentAsync = connectedComponentAsync;
var getDegreeAsync = function getDegreeAsync(graphData) {
  return (0, _createWorker.default)(_constant.ALGORITHM.getDegree)(graphData);
};
/**
 * 获取节点的入度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
exports.getDegreeAsync = getDegreeAsync;
var getInDegreeAsync = function getInDegreeAsync(graphData, nodeId) {
  return (0, _createWorker.default)(_constant.ALGORITHM.getInDegree)(graphData, nodeId);
};
/**
 * 获取节点的出度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
exports.getInDegreeAsync = getInDegreeAsync;
var getOutDegreeAsync = function getOutDegreeAsync(graphData, nodeId) {
  return (0, _createWorker.default)(_constant.ALGORITHM.getOutDegree)(graphData, nodeId);
};
/**
 * 检测图中的(有向) Cycle
 * @param graphData 图数据
 */
exports.getOutDegreeAsync = getOutDegreeAsync;
var detectCycleAsync = function detectCycleAsync(graphData) {
  return (0, _createWorker.default)(_constant.ALGORITHM.detectCycle)(graphData);
};
/**
 * 检测图中的(无向) Cycle
 * @param graphData 图数据
 */
exports.detectCycleAsync = detectCycleAsync;
var detectAllCyclesAsync = function detectAllCyclesAsync(graphData) {
  return (0, _createWorker.default)(_constant.ALGORITHM.detectAllCycles)(graphData);
};
/**
 * 检测图中的所有(有向) Cycle
 * @param graphData 图数据
 */
exports.detectAllCyclesAsync = detectAllCyclesAsync;
var detectAllDirectedCycleAsync = function detectAllDirectedCycleAsync(graphData) {
  return (0, _createWorker.default)(_constant.ALGORITHM.detectAllDirectedCycle)(graphData);
};
/**
 * 检测图中的所有(无向) Cycle
 * @param graphData 图数据
 */
exports.detectAllDirectedCycleAsync = detectAllDirectedCycleAsync;
var detectAllUndirectedCycleAsync = function detectAllUndirectedCycleAsync(graphData) {
  return (0, _createWorker.default)(_constant.ALGORITHM.detectAllUndirectedCycle)(graphData);
};
/**
 * Dijkstra's algorithm, See {@link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm}
 * @param graphData 图数据
 */
exports.detectAllUndirectedCycleAsync = detectAllUndirectedCycleAsync;
var dijkstraAsync = function dijkstraAsync(graphData, source, directed, weightPropertyName) {
  return (0, _createWorker.default)(_constant.ALGORITHM.dijkstra).apply(void 0, [graphData, source, directed, weightPropertyName]);
};
/**
 * 查找两点之间的所有路径
 * @param graphData 图数据
 * @param start 路径起始点ID
 * @param end 路径终点ID
 * @param directed 是否为有向图
 */
exports.dijkstraAsync = dijkstraAsync;
var findAllPathAsync = function findAllPathAsync(graphData, start, end, directed) {
  return (0, _createWorker.default)(_constant.ALGORITHM.findAllPath).apply(void 0, [graphData, start, end, directed]);
};
/**
 * 查找两点之间的所有路径
 * @param graphData 图数据
 * @param start 路径起始点ID
 * @param end 路径终点ID
 * @param directed 是否为有向图
 * @param weightPropertyName 边权重的属名称，若数据中没有权重，则默认每条边权重为 1
 */
exports.findAllPathAsync = findAllPathAsync;
var findShortestPathAsync = function findShortestPathAsync(graphData, start, end, directed, weightPropertyName) {
  return (0, _createWorker.default)(_constant.ALGORITHM.findShortestPath).apply(void 0, [graphData, start, end, directed, weightPropertyName]);
};
/**
 * Floyd–Warshall algorithm, See {@link https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm}
 * @param graphData 图数据
 * @param directed 是否为有向图
 */
exports.findShortestPathAsync = findShortestPathAsync;
var floydWarshallAsync = function floydWarshallAsync(graphData, directed) {
  return (0, _createWorker.default)(_constant.ALGORITHM.floydWarshall).apply(void 0, [graphData, directed]);
};
/**
 * 标签传播算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param maxIteration 最大迭代次数
 */
exports.floydWarshallAsync = floydWarshallAsync;
var labelPropagationAsync = function labelPropagationAsync(graphData, directed, weightPropertyName, maxIteration) {
  if (maxIteration === void 0) {
    maxIteration = 1000;
  }
  return (0, _createWorker.default)(_constant.ALGORITHM.labelPropagation)(graphData, directed, weightPropertyName, maxIteration);
};
/**
 * 社区发现 louvain 算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param threshold
 */
exports.labelPropagationAsync = labelPropagationAsync;
var louvainAsync = function louvainAsync(graphData, directed, weightPropertyName, threshold) {
  return (0, _createWorker.default)(_constant.ALGORITHM.louvain)(graphData, directed, weightPropertyName, threshold);
};
/**
 * 最小生成树，See {@link https://en.wikipedia.org/wiki/Kruskal%27s_algorithm}
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @param algo 'prim' | 'kruskal' 算法类型
 * @return EdgeConfig[] 返回构成MST的边的数组
 */
exports.louvainAsync = louvainAsync;
var minimumSpanningTreeAsync = function minimumSpanningTreeAsync(graphData, weight, algo) {
  return (0, _createWorker.default)(_constant.ALGORITHM.minimumSpanningTree).apply(void 0, [graphData, weight, algo]);
};
/**
 * PageRank https://en.wikipedia.org/wiki/PageRank
 * refer: https://github.com/anvaka/ngraph.pagerank
 * @param graph
 * @param epsilon 判断是否收敛的精度值，默认 0.000001
 * @param linkProb 阻尼系数（dumping factor），指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85
 */
exports.minimumSpanningTreeAsync = minimumSpanningTreeAsync;
var pageRankAsync = function pageRankAsync(graphData, epsilon, linkProb) {
  return (0, _createWorker.default)(_constant.ALGORITHM.pageRank).apply(void 0, [graphData, epsilon, linkProb]);
};
/**
 * 获取指定节点的所有邻居
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 * @param type 邻居类型
 */
exports.pageRankAsync = pageRankAsync;
var getNeighborsAsync = function getNeighborsAsync(nodeId, edges, type) {
  return (0, _createWorker.default)(_constant.ALGORITHM.getNeighbors).apply(void 0, [nodeId, edges, type]);
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
exports.getNeighborsAsync = getNeighborsAsync;
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
  return (0, _createWorker.default)(_constant.ALGORITHM.GADDI).apply(void 0, [graphData, pattern, directed, k, length, nodeLabelProp, edgeLabelProp]);
};
exports.GADDIAsync = GADDIAsync;