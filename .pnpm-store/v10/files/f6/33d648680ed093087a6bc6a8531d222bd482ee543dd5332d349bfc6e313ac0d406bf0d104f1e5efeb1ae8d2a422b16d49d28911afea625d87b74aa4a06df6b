"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _unionFind = _interopRequireDefault(require("./structs/union-find"));
var _binaryHeap = _interopRequireDefault(require("./structs/binary-heap"));
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Prim algorithm，use priority queue，复杂度 O(E+V*logV), V: 节点数量，E: 边的数量
 * refer: https://en.wikipedia.org/wiki/Prim%27s_algorithm
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 */
var primMST = function primMST(graphData, weight) {
  var selectedEdges = [];
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  if (nodes.length === 0) {
    return selectedEdges;
  }
  // 从nodes[0]开始
  var currNode = nodes[0];
  var visited = new Set();
  visited.add(currNode);
  // 用二叉堆维护距已加入节点的其他节点的边的权值
  var compareWeight = function compareWeight(a, b) {
    if (weight) {
      return a.weight - b.weight;
    }
    return 0;
  };
  var edgeQueue = new _binaryHeap.default(compareWeight);
  (0, _util.getEdgesByNodeId)(currNode.id, edges).forEach(function (edge) {
    edgeQueue.insert(edge);
  });
  while (!edgeQueue.isEmpty()) {
    // 选取与已加入的结点之间边权最小的结点
    var currEdge = edgeQueue.delMin();
    var source = currEdge.source;
    var target = currEdge.target;
    if (visited.has(source) && visited.has(target)) continue;
    selectedEdges.push(currEdge);
    if (!visited.has(source)) {
      visited.add(source);
      (0, _util.getEdgesByNodeId)(source, edges).forEach(function (edge) {
        edgeQueue.insert(edge);
      });
    }
    if (!visited.has(target)) {
      visited.add(target);
      (0, _util.getEdgesByNodeId)(target, edges).forEach(function (edge) {
        edgeQueue.insert(edge);
      });
    }
  }
  return selectedEdges;
};
/**
 * Kruskal algorithm，复杂度 O(E*logE), E: 边的数量
 * refer: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @return IEdge[] 返回构成MST的边的数组
 */
var kruskalMST = function kruskalMST(graphData, weight) {
  var selectedEdges = [];
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  if (nodes.length === 0) {
    return selectedEdges;
  }
  // 若指定weight，则将所有的边按权值从小到大排序
  var weightEdges = edges.map(function (edge) {
    return edge;
  });
  if (weight) {
    weightEdges.sort(function (a, b) {
      return a.weight - b.weight;
    });
  }
  var disjointSet = new _unionFind.default(nodes.map(function (n) {
    return n.id;
  }));
  // 从权值最小的边开始，如果这条边连接的两个节点于图G中不在同一个连通分量中，则添加这条边
  // 直到遍历完所有点或边
  while (weightEdges.length > 0) {
    var curEdge = weightEdges.shift();
    var source = curEdge.source;
    var target = curEdge.target;
    if (!disjointSet.connected(source, target)) {
      selectedEdges.push(curEdge);
      disjointSet.union(source, target);
    }
  }
  return selectedEdges;
};
/**
 * 最小生成树
 * refer: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @param algo 'prim' | 'kruskal' 算法类型
 * @return EdgeConfig[] 返回构成MST的边的数组
 */
var minimumSpanningTree = function minimumSpanningTree(graphData, weight, algo) {
  var algos = {
    prim: primMST,
    kruskal: kruskalMST
  };
  if (!algo) return kruskalMST(graphData, weight);
  return algos[algo](graphData, weight);
};
var _default = minimumSpanningTree;
exports.default = _default;