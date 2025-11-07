import { __spreadArray } from "tslib";
import { isArray } from '@antv/util';
import { getOutEdgesNodeId, getEdgesByNodeId } from './util';
var minVertex = function minVertex(D, nodes, marks) {
  // 找出最小的点
  var minDis = Infinity;
  var minNode;
  for (var i = 0; i < nodes.length; i++) {
    var nodeId = nodes[i].id;
    if (!marks[nodeId] && D[nodeId] <= minDis) {
      minDis = D[nodeId];
      minNode = nodes[i];
    }
  }
  return minNode;
};
var dijkstra = function dijkstra(graphData, source, directed, weightPropertyName) {
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var nodeIds = [];
  var marks = {};
  var D = {};
  var prevs = {}; // key: 顶点, value: 顶点的前驱点数组（可能有多条等长的最短路径）
  nodes.forEach(function (node, i) {
    var id = node.id;
    nodeIds.push(id);
    D[id] = Infinity;
    if (id === source) D[id] = 0;
  });
  var nodeNum = nodes.length;
  var _loop_1 = function _loop_1(i) {
    // Process the vertices
    var minNode = minVertex(D, nodes, marks);
    var minNodeId = minNode.id;
    marks[minNodeId] = true;
    if (D[minNodeId] === Infinity) return "continue"; // Unreachable vertices cannot be the intermediate point
    var relatedEdges = [];
    if (directed) relatedEdges = getOutEdgesNodeId(minNodeId, edges);else relatedEdges = getEdgesByNodeId(minNodeId, edges);
    relatedEdges.forEach(function (edge) {
      var edgeTarget = edge.target;
      var edgeSource = edge.source;
      var w = edgeTarget === minNodeId ? edgeSource : edgeTarget;
      var weight = weightPropertyName && edge[weightPropertyName] ? edge[weightPropertyName] : 1;
      if (D[w] > D[minNode.id] + weight) {
        D[w] = D[minNode.id] + weight;
        prevs[w] = [minNode.id];
      } else if (D[w] === D[minNode.id] + weight) {
        prevs[w].push(minNode.id);
      }
    });
  };
  for (var i = 0; i < nodeNum; i++) {
    _loop_1(i);
  }
  prevs[source] = [source];
  // 每个节点存可能存在多条最短路径
  var paths = {};
  for (var target in D) {
    if (D[target] !== Infinity) {
      findAllPaths(source, target, prevs, paths);
    }
  }
  // 兼容之前单路径
  var path = {};
  for (var target in paths) {
    path[target] = paths[target][0];
  }
  return {
    length: D,
    path: path,
    allPath: paths
  };
};
export default dijkstra;
function findAllPaths(source, target, prevs, foundPaths) {
  if (source === target) {
    return [source];
  }
  if (foundPaths[target]) {
    return foundPaths[target];
  }
  var paths = [];
  for (var _i = 0, _a = prevs[target]; _i < _a.length; _i++) {
    var prev = _a[_i];
    var prevPaths = findAllPaths(source, prev, prevs, foundPaths);
    if (!prevPaths) return;
    for (var _b = 0, prevPaths_1 = prevPaths; _b < prevPaths_1.length; _b++) {
      var prePath = prevPaths_1[_b];
      if (isArray(prePath)) paths.push(__spreadArray(__spreadArray([], prePath, true), [target], false));else paths.push([prePath, target]);
    }
  }
  foundPaths[target] = paths;
  return foundPaths[target];
}