/**
 * 获取指定节点的所有邻居
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 * @param type 邻居类型
 */
export var getNeighbors = function getNeighbors(nodeId, edges, type) {
  if (edges === void 0) {
    edges = [];
  }
  var currentEdges = edges.filter(function (edge) {
    return edge.source === nodeId || edge.target === nodeId;
  });
  if (type === 'target') {
    // 当前节点为 source，它所指向的目标节点
    var neighhborsConverter_1 = function neighhborsConverter_1(edge) {
      return edge.source === nodeId;
    };
    return currentEdges.filter(neighhborsConverter_1).map(function (edge) {
      return edge.target;
    });
  }
  if (type === 'source') {
    // 当前节点为 target，它所指向的源节点
    var neighhborsConverter_2 = function neighhborsConverter_2(edge) {
      return edge.target === nodeId;
    };
    return currentEdges.filter(neighhborsConverter_2).map(function (edge) {
      return edge.source;
    });
  }
  // 若未指定 type ，则返回所有邻居
  var neighhborsConverter = function neighhborsConverter(edge) {
    return edge.source === nodeId ? edge.target : edge.source;
  };
  return currentEdges.map(neighhborsConverter);
};
/**
 * 获取指定节点的出边
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 */
export var getOutEdgesNodeId = function getOutEdgesNodeId(nodeId, edges) {
  return edges.filter(function (edge) {
    return edge.source === nodeId;
  });
};
/**
 * 获取指定节点的边，包括出边和入边
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 */
export var getEdgesByNodeId = function getEdgesByNodeId(nodeId, edges) {
  return edges.filter(function (edge) {
    return edge.source === nodeId || edge.target === nodeId;
  });
};
/**
 * 生成唯一的 ID，规则是序号 + 时间戳
 * @param index 序号
 */
export var uniqueId = function uniqueId(index) {
  if (index === void 0) {
    index = 0;
  }
  var random1 = "".concat(Math.random()).split('.')[1].substr(0, 5);
  var random2 = "".concat(Math.random()).split('.')[1].substr(0, 5);
  return "".concat(index, "-").concat(random1).concat(random2);
};