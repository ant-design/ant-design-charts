"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutDegree = exports.getInDegree = exports.default = void 0;
var degree = function degree(graphData) {
  var degrees = {};
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  nodes.forEach(function (node) {
    degrees[node.id] = {
      degree: 0,
      inDegree: 0,
      outDegree: 0
    };
  });
  edges.forEach(function (edge) {
    degrees[edge.source].degree++;
    degrees[edge.source].outDegree++;
    degrees[edge.target].degree++;
    degrees[edge.target].inDegree++;
  });
  return degrees;
};
var _default = degree;
/**
 * 获取指定节点的入度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
exports.default = _default;
var getInDegree = function getInDegree(graphData, nodeId) {
  var nodeDegree = degree(graphData);
  if (nodeDegree[nodeId]) {
    return degree(graphData)[nodeId].inDegree;
  }
  return 0;
};
/**
 * 获取指定节点的出度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */
exports.getInDegree = getInDegree;
var getOutDegree = function getOutDegree(graphData, nodeId) {
  var nodeDegree = degree(graphData);
  if (nodeDegree[nodeId]) {
    return degree(graphData)[nodeId].outDegree;
  }
  return 0;
};
exports.getOutDegree = getOutDegree;