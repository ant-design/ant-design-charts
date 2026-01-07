"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAllUndirectedCycle = exports.detectAllDirectedCycle = exports.detectAllCycles = exports.default = void 0;
var _dfs = _interopRequireDefault(require("./dfs"));
var _connectedComponent = _interopRequireWildcard(require("./connected-component"));
var _util = require("./util");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var detectDirectedCycle = function detectDirectedCycle(graphData) {
  var cycle = null;
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a;
  var dfsParentMap = {};
  // 所有没有被访问的节点集合
  var unvisitedSet = {};
  // 正在被访问的节点集合
  var visitingSet = {};
  // 所有已经被访问过的节点集合
  var visitedSet = {};
  // 初始化 unvisitedSet
  nodes.forEach(function (node) {
    unvisitedSet[node.id] = node;
  });
  var callbacks = {
    enter: function enter(_a) {
      var currentNode = _a.current,
        previousNode = _a.previous;
      if (visitingSet[currentNode]) {
        // 如果当前节点正在访问中，则说明检测到环路了
        cycle = {};
        var currentCycleNode = currentNode;
        var previousCycleNode = previousNode;
        while (previousCycleNode !== currentNode) {
          cycle[currentCycleNode] = previousCycleNode;
          currentCycleNode = previousCycleNode;
          previousCycleNode = dfsParentMap[previousCycleNode];
        }
        cycle[currentCycleNode] = previousCycleNode;
      } else {
        // 如果不存在正在访问集合中，则将其放入正在访问集合，并从未访问集合中删除
        visitingSet[currentNode] = currentNode;
        delete unvisitedSet[currentNode];
        // 更新 DSF parents 列表
        dfsParentMap[currentNode] = previousNode;
      }
    },
    leave: function leave(_a) {
      var currentNode = _a.current;
      // 如果所有的节点的子节点都已经访问过了，则从正在访问集合中删除掉，并将其移入到已访问集合中，
      // 同时也意味着当前节点的所有邻居节点都被访问过了
      visitedSet[currentNode] = currentNode;
      delete visitingSet[currentNode];
    },
    allowTraversal: function allowTraversal(_a) {
      var nextNode = _a.next;
      // 如果检测到环路则需要终止所有进一步的遍历，否则会导致无限循环遍历
      if (cycle) {
        return false;
      }
      // 仅允许遍历没有访问的节点，visitedSet 中的都已经访问过了
      return !visitedSet[nextNode];
    }
  };
  // 开始遍历节点
  while (Object.keys(unvisitedSet).length) {
    // 从第一个节点开始进行 DFS 遍历
    var firsetUnVisitedKey = Object.keys(unvisitedSet)[0];
    (0, _dfs.default)(graphData, firsetUnVisitedKey, callbacks);
  }
  return cycle;
};
/**
 * 检测无向图中的所有Base cycles
 * refer: https://www.codeproject.com/Articles/1158232/Enumerating-All-Cycles-in-an-Undirected-Graph
 * @param graph
 * @param nodeIds 节点 ID 的数组
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: INode}] 返回一组base cycles
 */
var detectAllUndirectedCycle = function detectAllUndirectedCycle(graphData, nodeIds, include) {
  var _a, _b;
  if (include === void 0) {
    include = true;
  }
  var allCycles = [];
  var components = (0, _connectedComponent.default)(graphData, false);
  // loop through all connected components
  for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
    var component = components_1[_i];
    if (!component.length) continue;
    var root = component[0];
    var rootId = root.id;
    var stack = [root];
    var parent_1 = (_a = {}, _a[rootId] = root, _a);
    var used = (_b = {}, _b[rootId] = new Set(), _b);
    // walk a spanning tree to find cycles
    while (stack.length > 0) {
      var curNode = stack.pop();
      var curNodeId = curNode.id;
      var neighbors = (0, _util.getNeighbors)(curNodeId, graphData.edges);
      var _loop_1 = function _loop_1(i) {
        var _c;
        var neighborId = neighbors[i];
        var neighbor = graphData.nodes.find(function (node) {
          return node.id === neighborId;
        });
        // const neighborId = neighbor.get('id');
        if (neighborId === curNodeId) {
          // 自环
          allCycles.push((_c = {}, _c[neighborId] = curNode, _c));
        } else if (!(neighborId in used)) {
          // visit a new node
          parent_1[neighborId] = curNode;
          stack.push(neighbor);
          used[neighborId] = new Set([curNode]);
        } else if (!used[curNodeId].has(neighbor)) {
          // a cycle found
          var cycleValid = true;
          var cyclePath = [neighbor, curNode];
          var p = parent_1[curNodeId];
          while (used[neighborId].size && !used[neighborId].has(p)) {
            cyclePath.push(p);
            if (p === parent_1[p.id]) break;else p = parent_1[p.id];
          }
          cyclePath.push(p);
          if (nodeIds && include) {
            // 如果有指定包含的节点
            cycleValid = false;
            if (cyclePath.findIndex(function (node) {
              return nodeIds.indexOf(node.id) > -1;
            }) > -1) {
              cycleValid = true;
            }
          } else if (nodeIds && !include) {
            // 如果有指定不包含的节点
            if (cyclePath.findIndex(function (node) {
              return nodeIds.indexOf(node.id) > -1;
            }) > -1) {
              cycleValid = false;
            }
          }
          // 把 node list 形式转换为 cycle 的格式
          if (cycleValid) {
            var cycle = {};
            for (var index = 1; index < cyclePath.length; index += 1) {
              cycle[cyclePath[index - 1].id] = cyclePath[index];
            }
            if (cyclePath.length) {
              cycle[cyclePath[cyclePath.length - 1].id] = cyclePath[0];
            }
            allCycles.push(cycle);
          }
          used[neighborId].add(curNode);
        }
      };
      for (var i = 0; i < neighbors.length; i += 1) {
        _loop_1(i);
      }
    }
  }
  return allCycles;
};
/**
 * Johnson's algorithm, 时间复杂度 O((V + E)(C + 1))$ and space bounded by O(V + E)
 * refer: https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF
 * refer: https://networkx.github.io/documentation/stable/_modules/networkx/algorithms/cycles.html#simple_cycles
 * @param graph
 * @param nodeIds 节点 ID 的数组
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: INode}] 返回所有的 simple cycles
 */
exports.detectAllUndirectedCycle = detectAllUndirectedCycle;
var detectAllDirectedCycle = function detectAllDirectedCycle(graphData, nodeIds, include) {
  if (include === void 0) {
    include = true;
  }
  var path = []; // stack of nodes in current path
  var blocked = new Set();
  var B = []; // remember portions of the graph that yield no elementary circuit
  var allCycles = [];
  var idx2Node = {};
  var node2Idx = {};
  // 辅助函数： unblock all blocked nodes
  var unblock = function unblock(thisNode) {
    var stack = [thisNode];
    while (stack.length > 0) {
      var node = stack.pop();
      if (blocked.has(node)) {
        blocked.delete(node);
        B[node.id].forEach(function (n) {
          stack.push(n);
        });
        B[node.id].clear();
      }
    }
  };
  var circuit = function circuit(node, start, adjList) {
    var closed = false; // whether a path is closed
    if (nodeIds && include === false && nodeIds.indexOf(node.id) > -1) return closed;
    path.push(node);
    blocked.add(node);
    var neighbors = adjList[node.id];
    for (var i = 0; i < neighbors.length; i += 1) {
      var neighbor = idx2Node[neighbors[i]];
      if (neighbor === start) {
        var cycle = {};
        for (var index = 1; index < path.length; index += 1) {
          cycle[path[index - 1].id] = path[index];
        }
        if (path.length) {
          cycle[path[path.length - 1].id] = path[0];
        }
        allCycles.push(cycle);
        closed = true;
      } else if (!blocked.has(neighbor)) {
        if (circuit(neighbor, start, adjList)) {
          closed = true;
        }
      }
    }
    if (closed) {
      unblock(node);
    } else {
      for (var i = 0; i < neighbors.length; i += 1) {
        var neighbor = idx2Node[neighbors[i]];
        if (!B[neighbor.id].has(node)) {
          B[neighbor.id].add(node);
        }
      }
    }
    path.pop();
    return closed;
  };
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a;
  // Johnson's algorithm 要求给节点赋顺序，先按节点在数组中的顺序
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];
    var nodeId = node.id;
    node2Idx[nodeId] = i;
    idx2Node[i] = node;
  }
  // 如果有指定包含的节点，则把指定节点排序在前，以便提早结束搜索
  if (nodeIds && include) {
    var _loop_2 = function _loop_2(i) {
      var nodeId = nodeIds[i];
      node2Idx[nodes[i].id] = node2Idx[nodeId];
      node2Idx[nodeId] = 0;
      idx2Node[0] = nodes.find(function (node) {
        return node.id === nodeId;
      });
      idx2Node[node2Idx[nodes[i].id]] = nodes[i];
    };
    for (var i = 0; i < nodeIds.length; i++) {
      _loop_2(i);
    }
  }
  // 返回 节点顺序 >= nodeOrder 的强连通分量的adjList
  var getMinComponentAdj = function getMinComponentAdj(components) {
    var _a;
    var minCompIdx;
    var minIdx = Infinity;
    // Find least component and the lowest node
    for (var i = 0; i < components.length; i += 1) {
      var comp = components[i];
      for (var j = 0; j < comp.length; j++) {
        var nodeIdx_1 = node2Idx[comp[j].id];
        if (nodeIdx_1 < minIdx) {
          minIdx = nodeIdx_1;
          minCompIdx = i;
        }
      }
    }
    var component = components[minCompIdx];
    var adjList = [];
    for (var i = 0; i < component.length; i += 1) {
      var node = component[i];
      adjList[node.id] = [];
      for (var _i = 0, _b = (0, _util.getNeighbors)(node.id, graphData.edges, 'target').filter(function (n) {
          return component.map(function (c) {
            return c.id;
          }).indexOf(n) > -1;
        }); _i < _b.length; _i++) {
        var neighbor = _b[_i];
        // 对自环情况 (点连向自身) 特殊处理：记录自环，但不加入adjList
        if (neighbor === node.id && !(include === false && nodeIds.indexOf(node.id) > -1)) {
          allCycles.push((_a = {}, _a[node.id] = node, _a));
        } else {
          adjList[node.id].push(node2Idx[neighbor]);
        }
      }
    }
    return {
      component: component,
      adjList: adjList,
      minIdx: minIdx
    };
  };
  var nodeIdx = 0;
  while (nodeIdx < nodes.length) {
    var subgraphNodes = nodes.filter(function (n) {
      return node2Idx[n.id] >= nodeIdx;
    });
    var sccs = (0, _connectedComponent.detectStrongConnectComponents)({
      nodes: subgraphNodes,
      edges: graphData.edges
    }).filter(function (component) {
      return component.length > 1;
    });
    if (sccs.length === 0) break;
    var scc = getMinComponentAdj(sccs);
    var minIdx = scc.minIdx,
      adjList = scc.adjList,
      component = scc.component;
    if (component.length > 1) {
      component.forEach(function (node) {
        B[node.id] = new Set();
      });
      var startNode = idx2Node[minIdx];
      // startNode 不在指定要包含的节点中，提前结束搜索
      if (nodeIds && include && nodeIds.indexOf(startNode.id) === -1) return allCycles;
      circuit(startNode, startNode, adjList);
      nodeIdx = minIdx + 1;
    } else {
      break;
    }
  }
  return allCycles;
};
/**
 * 查找图中所有满足要求的圈
 * @param graph
 * @param directed 是否为有向图
 * @param nodeIds 节点 ID 的数组，若不指定，则返回图中所有的圈
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: Node}] 包含所有环的数组，每个环用一个Object表示，其中key为节点id，value为该节点在环中指向的下一个节点
 */
exports.detectAllDirectedCycle = detectAllDirectedCycle;
var detectAllCycles = function detectAllCycles(graphData, directed, nodeIds, include) {
  if (include === void 0) {
    include = true;
  }
  if (directed) return detectAllDirectedCycle(graphData, nodeIds, include);
  return detectAllUndirectedCycle(graphData, nodeIds, include);
};
exports.detectAllCycles = detectAllCycles;
var _default = detectDirectedCycle;
exports.default = _default;