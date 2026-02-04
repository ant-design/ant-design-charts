import { getNeighbors } from "./util";
/**
 * Generate all connected components for an undirected graph
 * @param graph
 */
export var detectConnectedComponents = function detectConnectedComponents(graphData) {
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var allComponents = [];
  var visited = {};
  var nodeStack = [];
  var getComponent = function getComponent(node) {
    nodeStack.push(node);
    visited[node.id] = true;
    var neighbors = getNeighbors(node.id, edges);
    var _loop_1 = function _loop_1(i) {
      var neighbor = neighbors[i];
      if (!visited[neighbor]) {
        var targetNode = nodes.filter(function (node) {
          return node.id === neighbor;
        });
        if (targetNode.length > 0) {
          getComponent(targetNode[0]);
        }
      }
    };
    for (var i = 0; i < neighbors.length; ++i) {
      _loop_1(i);
    }
  };
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (!visited[node.id]) {
      // 对于无向图进行dfs遍历，每一次调用后都得到一个连通分量
      getComponent(node);
      var component = [];
      while (nodeStack.length > 0) {
        component.push(nodeStack.pop());
      }
      allComponents.push(component);
    }
  }
  return allComponents;
};
/**
 * Tarjan's Algorithm 复杂度  O(|V|+|E|)
 * For directed graph only
 * a directed graph is said to be strongly connected if "every vertex is reachable from every other vertex".
 * refer: http://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 * @param graph
 * @return a list of strongly connected components
 */
export var detectStrongConnectComponents = function detectStrongConnectComponents(graphData) {
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var nodeStack = [];
  var inStack = {}; // 辅助判断是否已经在stack中，减少查找开销
  var indices = {};
  var lowLink = {};
  var allComponents = [];
  var index = 0;
  var getComponent = function getComponent(node) {
    // Set the depth index for v to the smallest unused index
    indices[node.id] = index;
    lowLink[node.id] = index;
    index += 1;
    nodeStack.push(node);
    inStack[node.id] = true;
    // 考虑每个邻接点
    var neighbors = getNeighbors(node.id, edges, 'target').filter(function (n) {
      return nodes.map(function (node) {
        return node.id;
      }).indexOf(n) > -1;
    });
    var _loop_2 = function _loop_2(i) {
      var targetNodeID = neighbors[i];
      if (!indices[targetNodeID] && indices[targetNodeID] !== 0) {
        var targetNode = nodes.filter(function (node) {
          return node.id === targetNodeID;
        });
        if (targetNode.length > 0) {
          getComponent(targetNode[0]);
        }
        // tree edge
        lowLink[node.id] = Math.min(lowLink[node.id], lowLink[targetNodeID]);
      } else if (inStack[targetNodeID]) {
        // back edge, target node is in the current SCC
        lowLink[node.id] = Math.min(lowLink[node.id], indices[targetNodeID]);
      }
    };
    for (var i = 0; i < neighbors.length; i++) {
      _loop_2(i);
    }
    // If node is a root node, generate an SCC
    if (lowLink[node.id] === indices[node.id]) {
      var component = [];
      while (nodeStack.length > 0) {
        var tmpNode = nodeStack.pop();
        inStack[tmpNode.id] = false;
        component.push(tmpNode);
        if (tmpNode === node) break;
      }
      if (component.length > 0) {
        allComponents.push(component);
      }
    }
  };
  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var node = nodes_1[_i];
    if (!indices[node.id] && indices[node.id] !== 0) {
      getComponent(node);
    }
  }
  return allComponents;
};
export default function getConnectedComponents(graphData, directed) {
  if (directed) return detectStrongConnectComponents(graphData);
  return detectConnectedComponents(graphData);
}