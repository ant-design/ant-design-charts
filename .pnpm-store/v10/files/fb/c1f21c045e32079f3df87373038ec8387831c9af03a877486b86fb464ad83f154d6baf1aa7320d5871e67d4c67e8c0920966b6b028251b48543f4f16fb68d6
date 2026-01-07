"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findShortestPath = exports.findAllPath = void 0;
var _dijkstra = _interopRequireDefault(require("./dijkstra"));
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var findShortestPath = function findShortestPath(graphData, start, end, directed, weightPropertyName) {
  var _a = (0, _dijkstra.default)(graphData, start, directed, weightPropertyName),
    length = _a.length,
    path = _a.path,
    allPath = _a.allPath;
  return {
    length: length[end],
    path: path[end],
    allPath: allPath[end]
  };
};
exports.findShortestPath = findShortestPath;
var findAllPath = function findAllPath(graphData, start, end, directed) {
  var _a;
  if (start === end) return [[start]];
  var _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var visited = [start];
  var isVisited = (_a = {}, _a[start] = true, _a);
  var stack = []; // 辅助栈，用于存储访问过的节点的邻居节点
  var allPath = [];
  var neighbors = directed ? (0, _util.getNeighbors)(start, edges, 'target') : (0, _util.getNeighbors)(start, edges);
  stack.push(neighbors);
  while (visited.length > 0 && stack.length > 0) {
    var children = stack[stack.length - 1];
    if (children.length) {
      var child = children.shift();
      if (child) {
        visited.push(child);
        isVisited[child] = true;
        neighbors = directed ? (0, _util.getNeighbors)(child, edges, 'target') : (0, _util.getNeighbors)(child, edges);
        stack.push(neighbors.filter(function (neighbor) {
          return !isVisited[neighbor];
        }));
      }
    } else {
      var node = visited.pop();
      isVisited[node] = false;
      stack.pop();
      continue;
    }
    if (visited[visited.length - 1] === end) {
      var path = visited.map(function (node) {
        return node;
      });
      allPath.push(path);
      var node = visited.pop();
      isVisited[node] = false;
      stack.pop();
    }
  }
  return allPath;
};
exports.findAllPath = findAllPath;