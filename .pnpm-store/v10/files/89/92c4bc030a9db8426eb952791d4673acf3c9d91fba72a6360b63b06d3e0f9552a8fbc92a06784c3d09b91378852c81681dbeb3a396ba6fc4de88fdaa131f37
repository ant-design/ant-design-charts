import { clone } from '@antv/util';
import degree from './degree';
/**
 *  k-core算法 找出符合指定核心度的紧密关联的子图结构
 * @param graphData 图数据
 * @param k 核心度数
 */
var kCore = function kCore(graphData, k) {
  var _a;
  if (k === void 0) {
    k = 1;
  }
  var data = clone(graphData);
  var _b = data.nodes,
    nodes = _b === void 0 ? [] : _b;
  var _c = data.edges,
    edges = _c === void 0 ? [] : _c;
  var _loop_1 = function _loop_1() {
    // 获取图中节点的度数
    var degrees = degree({
      nodes: nodes,
      edges: edges
    });
    var nodeIds = Object.keys(degrees);
    // 按照度数进行排序
    nodeIds.sort(function (a, b) {
      var _a, _b;
      return ((_a = degrees[a]) === null || _a === void 0 ? void 0 : _a.degree) - ((_b = degrees[b]) === null || _b === void 0 ? void 0 : _b.degree);
    });
    var minIndexId = nodeIds[0];
    if (!nodes.length || ((_a = degrees[minIndexId]) === null || _a === void 0 ? void 0 : _a.degree) >= k) {
      return "break";
    }
    var originIndex = nodes.findIndex(function (node) {
      return node.id === minIndexId;
    });
    // 移除度数小于k的节点
    nodes.splice(originIndex, 1);
    // 移除度数小于k的节点相关的边
    edges = edges.filter(function (edge) {
      return !(edge.source === minIndexId || edge.target === minIndexId);
    });
  };
  while (true) {
    var state_1 = _loop_1();
    if (state_1 === "break") break;
  }
  return {
    nodes: nodes,
    edges: edges
  };
};
export default kCore;