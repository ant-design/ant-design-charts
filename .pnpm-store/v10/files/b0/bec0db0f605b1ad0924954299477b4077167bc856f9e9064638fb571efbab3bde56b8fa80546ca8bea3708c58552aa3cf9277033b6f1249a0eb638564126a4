"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _degree = _interopRequireDefault(require("./degree"));
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * PageRank https://en.wikipedia.org/wiki/PageRank
 * refer: https://github.com/anvaka/ngraph.pagerank
 * @param graph
 * @param epsilon 判断是否收敛的精度值，默认 0.000001
 * @param linkProb 阻尼系数（dumping factor），指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85
 */
var pageRank = function pageRank(graphData, epsilon, linkProb) {
  if (typeof epsilon !== 'number') epsilon = 0.000001;
  if (typeof linkProb !== 'number') linkProb = 0.85;
  var distance = 1;
  var leakedRank = 0;
  var maxIterations = 1000;
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var nodesCount = nodes.length;
  var currentRank;
  var curRanks = {};
  var prevRanks = {};
  // Initialize pageranks 初始化
  for (var j = 0; j < nodesCount; ++j) {
    var node = nodes[j];
    var nodeId = node.id;
    curRanks[nodeId] = 1 / nodesCount;
    prevRanks[nodeId] = 1 / nodesCount;
  }
  var nodeDegree = (0, _degree.default)(graphData);
  while (maxIterations > 0 && distance > epsilon) {
    leakedRank = 0;
    for (var j = 0; j < nodesCount; ++j) {
      var node = nodes[j];
      var nodeId = node.id;
      currentRank = 0;
      if (nodeDegree[node.id].inDegree === 0) {
        curRanks[nodeId] = 0;
      } else {
        var neighbors = (0, _util.getNeighbors)(nodeId, edges, 'source');
        for (var i = 0; i < neighbors.length; ++i) {
          var neighbor = neighbors[i];
          var outDegree = nodeDegree[neighbor].outDegree;
          if (outDegree > 0) currentRank += prevRanks[neighbor] / outDegree;
        }
        curRanks[nodeId] = linkProb * currentRank;
        leakedRank += curRanks[nodeId];
      }
    }
    leakedRank = (1 - leakedRank) / nodesCount;
    distance = 0;
    for (var j = 0; j < nodesCount; ++j) {
      var node = nodes[j];
      var nodeId = node.id;
      currentRank = curRanks[nodeId] + leakedRank;
      distance += Math.abs(currentRank - prevRanks[nodeId]);
      prevRanks[nodeId] = currentRank;
    }
    maxIterations -= 1;
  }
  return prevRanks;
};
var _default = pageRank;
exports.default = _default;