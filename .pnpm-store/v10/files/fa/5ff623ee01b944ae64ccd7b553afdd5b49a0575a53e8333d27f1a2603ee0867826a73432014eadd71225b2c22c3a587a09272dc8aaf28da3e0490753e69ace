import { clone } from "@antv/util";
import { Graph, VACANT_NODE_LABEL, VACANT_GRAPH_ID, VACANT_EDGE_LABEL } from "./struct";
var DFSedge = /** @class */function () {
  function DFSedge(fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.nodeEdgeNodeLabel = {
      nodeLabel1: fromNodeLabel || VACANT_NODE_LABEL,
      edgeLabel: edgeLabel || VACANT_EDGE_LABEL,
      nodeLabel2: toNodeLabel || VACANT_NODE_LABEL
    };
  }
  DFSedge.prototype.equalTo = function (other) {
    return this.fromNode === other.formNode && this.toNode === other.toNode && this.nodeEdgeNodeLabel === other.nodeEdgeNodeLabel;
  };
  DFSedge.prototype.notEqualTo = function (other) {
    return !this.equalTo(other);
  };
  return DFSedge;
}();
// DFScode 是 DESedge 的数组
var DFScode = /** @class */function () {
  function DFScode() {
    this.rmpath = [];
    this.dfsEdgeList = [];
  }
  DFScode.prototype.equalTo = function (other) {
    var aLength = this.dfsEdgeList.length;
    var bLength = other.length;
    if (aLength !== bLength) return false;
    for (var i = 0; i < aLength; i++) {
      if (this.dfsEdgeList[i] !== other[i]) return false;
    }
    return true;
  };
  DFScode.prototype.notEqualTo = function (other) {
    return !this.equalTo(other);
  };
  /** 增加一条 edge 到 DFScode */
  DFScode.prototype.pushBack = function (fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel) {
    this.dfsEdgeList.push(new DFSedge(fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel));
    return this.dfsEdgeList;
  };
  /** 根据 dfs 构建图 */
  DFScode.prototype.toGraph = function (graphId, directed) {
    if (graphId === void 0) {
      graphId = VACANT_GRAPH_ID;
    }
    if (directed === void 0) {
      directed = false;
    }
    var graph = new Graph(graphId, true, directed);
    this.dfsEdgeList.forEach(function (dfsEdge) {
      var fromNodeId = dfsEdge.fromNode;
      var toNodeId = dfsEdge.toNode;
      var _a = dfsEdge.nodeEdgeNodeLabel,
        nodeLabel1 = _a.nodeLabel1,
        edgeLabel = _a.edgeLabel,
        nodeLabel2 = _a.nodeLabel2;
      if (nodeLabel1 !== VACANT_NODE_LABEL) graph.addNode(fromNodeId, nodeLabel1);
      if (nodeLabel2 !== VACANT_NODE_LABEL) graph.addNode(toNodeId, nodeLabel2);
      if (nodeLabel1 !== VACANT_NODE_LABEL && nodeLabel2 !== nodeLabel1) graph.addEdge(undefined, fromNodeId, toNodeId, edgeLabel);
    });
    return graph;
  };
  // 建立 rightmost path
  DFScode.prototype.buildRmpath = function () {
    this.rmpath = [];
    var oldFrom = undefined;
    var selfLength = this.dfsEdgeList.length;
    for (var i = selfLength - 1; i >= 0; i--) {
      var dfsEdge = this.dfsEdgeList[i];
      var fromNodeIdx = dfsEdge.fromNode;
      var toNodeIdx = dfsEdge.toNode;
      if (fromNodeIdx < toNodeIdx && (oldFrom === undefined || toNodeIdx === oldFrom)) {
        this.rmpath.push(i);
        oldFrom = fromNodeIdx;
      }
    }
    return this.rmpath;
  };
  DFScode.prototype.getNodeNum = function () {
    var nodeMap = {};
    this.dfsEdgeList.forEach(function (dfsEdge) {
      if (!nodeMap[dfsEdge.fromNode]) nodeMap[dfsEdge.fromNode] = true;
      if (!nodeMap[dfsEdge.toNode]) nodeMap[dfsEdge.toNode] = true;
    });
    return Object.keys(nodeMap).length;
  };
  return DFScode;
}();
var History = /** @class */function () {
  function History(pdfs) {
    this.his = {};
    this.nodesUsed = {};
    this.edgesUsed = {};
    this.edges = [];
    if (!pdfs) return;
    while (pdfs) {
      var e = pdfs.edge;
      this.edges.push(e);
      this.nodesUsed[e.from] = 1;
      this.nodesUsed[e.to] = 1;
      this.edgesUsed[e.id] = 1;
      pdfs = pdfs.preNode;
    }
    // 倒序
    this.edges = this.edges.reverse();
  }
  History.prototype.hasNode = function (node) {
    return this.nodesUsed[node.id] === 1;
  };
  History.prototype.hasEdge = function (edge) {
    return this.edgesUsed[edge.id] === 1;
  };
  return History;
}();
var GSpan = /** @class */function () {
  function GSpan(_a) {
    var graphs = _a.graphs,
      _b = _a.minSupport,
      minSupport = _b === void 0 ? 2 : _b,
      _c = _a.minNodeNum,
      minNodeNum = _c === void 0 ? 1 : _c,
      _d = _a.maxNodeNum,
      maxNodeNum = _d === void 0 ? 4 : _d,
      _e = _a.top,
      top = _e === void 0 ? 10 : _e,
      _f = _a.directed,
      directed = _f === void 0 ? false : _f,
      _g = _a.verbose,
      verbose = _g === void 0 ? false : _g;
    // -------- 第零步，初始化-------
    this.graphs = graphs;
    this.dfsCode = new DFScode();
    this.support = 0;
    this.frequentSize1Subgraphs = [];
    this.frequentSubgraphs = [];
    this.minSupport = minSupport;
    this.top = top;
    this.directed = directed;
    this.counter = 0;
    // TODO? timestamp = {}
    this.maxNodeNum = maxNodeNum;
    this.minNodeNum = minNodeNum;
    this.verbose = verbose;
    if (this.maxNodeNum < this.minNodeNum) this.maxNodeNum = this.minNodeNum;
    this.reportDF = []; // matrix
  }
  // Line 352
  GSpan.prototype.findForwardRootEdges = function (graph, fromNode) {
    var _this = this;
    var result = [];
    var nodeMap = graph.nodeMap;
    fromNode.edges.forEach(function (edge) {
      if (_this.directed || fromNode.label <= nodeMap[edge.to].label) result.push(edge);
    });
    return result;
  };
  GSpan.prototype.findBackwardEdge = function (graph, edge1, edge2, history) {
    if (!this.directed && edge1 === edge2) return null;
    var nodeMap = graph.nodeMap;
    var edge2To = nodeMap[edge2.to];
    var edge2ToEdges = edge2To.edges;
    var edgeLength = edge2ToEdges.length;
    for (var i = 0; i < edgeLength; i++) {
      var edge = edge2ToEdges[i];
      if (history.hasEdge(edge) || edge.to !== edge1.from) continue;
      if (!this.directed) {
        if (edge1.label < edge.label || edge1.label === edge.label && nodeMap[edge1.to].label <= nodeMap[edge2.to].label) {
          return edge;
        }
      } else {
        if (nodeMap[edge1.from].label < nodeMap[edge2.to].label || nodeMap[edge1.from].label === nodeMap[edge2.to].label && edge1.label <= edge.label) {
          return edge;
        }
      }
    }
    return null;
  };
  GSpan.prototype.findForwardPureEdges = function (graph, rightmostEdge, minNodeLabel, history) {
    var result = [];
    var rightmostEdgeToId = rightmostEdge.to;
    var edges = graph.nodeMap[rightmostEdgeToId].edges;
    var edgeLength = edges.length;
    for (var i = 0; i < edgeLength; i++) {
      var edge = edges[i];
      var toNode = graph.nodeMap[edge.to];
      if (minNodeLabel <= toNode.label && !history.hasNode(toNode)) {
        result.push(edge);
      }
    }
    return result;
  };
  GSpan.prototype.findForwardRmpathEdges = function (graph, rightmostEdge, minNodeLabel, history) {
    var result = [];
    var nodeMap = graph.nodeMap;
    var toNodeLabel = nodeMap[rightmostEdge.to].label;
    var fromNode = nodeMap[rightmostEdge.from];
    var edges = fromNode.edges;
    var edgeLength = edges.length;
    for (var i = 0; i < edgeLength; i++) {
      var edge = edges[i];
      var newToNodeLabel = nodeMap[edge.to].label;
      if (rightmostEdge.to === edge.to || minNodeLabel > newToNodeLabel || history.hasNode(nodeMap[edge.to])) {
        continue;
      }
      if (rightmostEdge.label < edge.label || rightmostEdge.label === edge.label && toNodeLabel <= newToNodeLabel) {
        result.push(edge);
      }
    }
    return result;
  };
  GSpan.prototype.getSupport = function (projected) {
    var graphMap = {};
    projected.forEach(function (pro) {
      if (!graphMap[pro.graphId]) graphMap[pro.graphId] = true;
    });
    return Object.keys(graphMap).length;
  };
  GSpan.prototype.findMinLabel = function (obj) {
    var minLabel = undefined;
    Object.keys(obj).forEach(function (nodeEdgeNodeLabel) {
      var _a = obj[nodeEdgeNodeLabel],
        nodeLabel1 = _a.nodeLabel1,
        edgeLabel = _a.edgeLabel,
        nodeLabel2 = _a.nodeLabel2;
      if (!minLabel) {
        minLabel = {
          nodeLabel1: nodeLabel1,
          edgeLabel: edgeLabel,
          nodeLabel2: nodeLabel2
        };
        return;
      }
      if (nodeLabel1 < minLabel.nodeLabel1 || nodeLabel1 === minLabel.nodeLabel1 && edgeLabel < minLabel.edgeLabel || nodeLabel1 === minLabel.nodeLabel1 && edgeLabel === minLabel.edgeLabel && nodeLabel2 < minLabel.nodeLabel2) {
        minLabel = {
          nodeLabel1: nodeLabel1,
          edgeLabel: edgeLabel,
          nodeLabel2: nodeLabel2
        };
      }
    });
    return minLabel;
  };
  GSpan.prototype.isMin = function () {
    var _this = this;
    var dfsCode = this.dfsCode;
    if (this.verbose) console.log("isMin checking", dfsCode);
    if (dfsCode.dfsEdgeList.length === 1) return true;
    var directed = this.directed;
    var graph = dfsCode.toGraph(VACANT_GRAPH_ID, directed);
    var nodeMap = graph.nodeMap;
    var dfsCodeMin = new DFScode();
    var root = {};
    graph.nodes.forEach(function (node) {
      var forwardEdges = _this.findForwardRootEdges(graph, node);
      forwardEdges.forEach(function (edge) {
        var otherNode = nodeMap[edge.to];
        var nodeEdgeNodeLabel = "".concat(node.label, "-").concat(edge.label, "-").concat(otherNode.label);
        if (!root[nodeEdgeNodeLabel]) root[nodeEdgeNodeLabel] = {
          projected: [],
          nodeLabel1: node.label,
          edgeLabel: edge.label,
          nodeLabel2: otherNode.label
        };
        var pdfs = {
          graphId: graph.id,
          edge: edge,
          preNode: null
        };
        root[nodeEdgeNodeLabel].projected.push(pdfs);
      });
    });
    // 比较 root 中每一项的 nodeEdgeNodeLabel 大小，按照 nodeLabel1、edgeLabe、nodeLabel2 的顺序比较
    var minLabel = this.findMinLabel(root); // line 419
    if (!minLabel) return;
    dfsCodeMin.dfsEdgeList.push(new DFSedge(0, 1, minLabel.nodeLabel1, minLabel.edgeLabel, minLabel.nodeLabel2));
    // line 423
    var projectIsMin = function projectIsMin(projected) {
      // right most path
      var rmpath = dfsCodeMin.buildRmpath();
      var minNodeLabel = dfsCodeMin.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
      var maxToC = dfsCodeMin.dfsEdgeList[rmpath[0]].toNode; // node id
      var backwardRoot = {};
      var flag = false,
        newTo = 0;
      var end = directed ? -1 : 0; // 遍历到 1 还是到 0
      var _loop_1 = function _loop_1(i) {
        if (flag) return "break";
        // line 435
        projected.forEach(function (p) {
          var history = new History(p);
          var backwardEdge = _this.findBackwardEdge(graph, history.edges[rmpath[i]], history.edges[rmpath[0]], history);
          if (backwardEdge) {
            // Line 441
            if (!backwardRoot[backwardEdge.label]) {
              backwardRoot[backwardEdge.label] = {
                projected: [],
                edgeLabel: backwardEdge.label
              };
            }
            backwardRoot[backwardEdge.label].projected.push({
              graphId: graph.id,
              edge: backwardRoot,
              preNode: p
            });
            newTo = dfsCodeMin.dfsEdgeList[rmpath[i]].fromNode;
            flag = true;
          }
        });
      };
      for (var i = rmpath.length - 1; i > end; i--) {
        var state_1 = _loop_1(i);
        if (state_1 === "break") break;
      }
      if (flag) {
        var minBackwardEdgeLabel = _this.findMinLabel(backwardRoot);
        dfsCodeMin.dfsEdgeList.push(new DFSedge(maxToC, newTo, VACANT_NODE_LABEL, minBackwardEdgeLabel.edgeLabel, VACANT_NODE_LABEL));
        var idx_1 = dfsCodeMin.dfsEdgeList.length - 1;
        if (_this.dfsCode.dfsEdgeList[idx_1] !== dfsCodeMin.dfsEdgeList[idx_1]) return false;
        return projectIsMin(backwardRoot[minBackwardEdgeLabel.edgeLabel].projected);
      }
      var forwardRoot = {};
      flag = false;
      var newFrom = 0;
      projected.forEach(function (p) {
        var history = new History(p);
        var forwardPureEdges = _this.findForwardPureEdges(graph, history.edges[rmpath[0]], minNodeLabel, history);
        if (forwardPureEdges.length > 0) {
          flag = true;
          newFrom = maxToC;
          forwardPureEdges.forEach(function (edge) {
            var key = "".concat(edge.label, "-").concat(nodeMap[edge.to].label);
            if (!forwardRoot[key]) forwardRoot[key] = {
              projected: [],
              edgeLabel: edge.label,
              nodeLabel2: nodeMap[edge.to].label
            };
            forwardRoot[key].projected.push({
              graphId: graph.id,
              edge: edge,
              preNode: p
            });
          });
        }
      });
      var pathLength = rmpath.length;
      var _loop_2 = function _loop_2(i) {
        if (flag) return "break";
        var value = rmpath[i];
        projected.forEach(function (p) {
          var history = new History(p);
          var forwardRmpathEdges = _this.findForwardRmpathEdges(graph, history.edges[value], minNodeLabel, history);
          if (forwardRmpathEdges.length > 0) {
            flag = true;
            newFrom = dfsCodeMin.dfsEdgeList[value].fromNode;
            forwardRmpathEdges.forEach(function (edge) {
              var key = "".concat(edge.label, "-").concat(nodeMap[edge.to].label);
              if (!forwardRoot[key]) forwardRoot[key] = {
                projected: [],
                edgeLabel: edge.label,
                nodeLabel2: nodeMap[edge.to].label
              };
              forwardRoot[key].projected.push({
                graphId: graph.id,
                edge: edge,
                preNode: p
              });
            });
          }
        });
      };
      for (var i = 0; i < pathLength; i++) {
        var state_2 = _loop_2(i);
        if (state_2 === "break") break;
      }
      if (!flag) return true;
      var forwardMinEdgeNodeLabel = _this.findMinLabel(forwardRoot);
      dfsCodeMin.dfsEdgeList.push(new DFSedge(newFrom, maxToC + 1, VACANT_NODE_LABEL, forwardMinEdgeNodeLabel.edgeLabel, forwardMinEdgeNodeLabel.nodeLabel2));
      var idx = dfsCodeMin.dfsEdgeList.length - 1;
      if (dfsCode.dfsEdgeList[idx] !== dfsCodeMin.dfsEdgeList[idx]) return false;
      return projectIsMin(forwardRoot["".concat(forwardMinEdgeNodeLabel.edgeLabel, "-").concat(forwardMinEdgeNodeLabel.nodeLabel2)].projected);
    };
    var key = "".concat(minLabel.nodeLabel1, "-").concat(minLabel.edgeLabel, "-").concat(minLabel.nodeLabel2);
    return projectIsMin(root[key].projected);
  };
  GSpan.prototype.report = function () {
    if (this.dfsCode.getNodeNum() < this.minNodeNum) return;
    this.counter++;
    var graph = this.dfsCode.toGraph(this.counter, this.directed);
    this.frequentSubgraphs.push(clone(graph));
  };
  GSpan.prototype.subGraphMining = function (projected) {
    var _this = this;
    var support = this.getSupport(projected);
    if (support < this.minSupport) return;
    if (!this.isMin()) return;
    this.report();
    var nodeNum = this.dfsCode.getNodeNum();
    var rmpath = this.dfsCode.buildRmpath();
    var maxToC = this.dfsCode.dfsEdgeList[rmpath[0]].toNode;
    var minNodeLabel = this.dfsCode.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
    var forwardRoot = {};
    var backwardRoot = {};
    projected.forEach(function (p) {
      var graph = _this.graphs[p.graphId];
      var nodeMap = graph.nodeMap;
      var history = new History(p);
      // backward Line 526
      for (var i = rmpath.length - 1; i >= 0; i--) {
        var backwardEdge = _this.findBackwardEdge(graph, history.edges[rmpath[i]], history.edges[rmpath[0]], history);
        if (backwardEdge) {
          var key = "".concat(_this.dfsCode.dfsEdgeList[rmpath[i]].fromNode, "-").concat(backwardEdge.label);
          if (!backwardRoot[key]) backwardRoot[key] = {
            projected: [],
            toNodeId: _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode,
            edgeLabel: backwardEdge.label
          };
          backwardRoot[key].projected.push({
            graphId: p.graphId,
            edge: backwardEdge,
            preNode: p
          });
        }
      }
      // pure forward
      if (nodeNum >= _this.maxNodeNum) return;
      var forwardPureEdges = _this.findForwardPureEdges(graph, history.edges[rmpath[0]], minNodeLabel, history);
      forwardPureEdges.forEach(function (edge) {
        var key = "".concat(maxToC, "-").concat(edge.label, "-").concat(nodeMap[edge.to].label);
        if (!forwardRoot[key]) forwardRoot[key] = {
          projected: [],
          fromNodeId: maxToC,
          edgeLabel: edge.label,
          nodeLabel2: nodeMap[edge.to].label
        };
        forwardRoot[key].projected.push({
          graphId: p.graphId,
          edge: edge,
          preNode: p
        });
      });
      var _loop_3 = function _loop_3(i) {
        var forwardRmpathEdges = _this.findForwardRmpathEdges(graph, history.edges[rmpath[i]], minNodeLabel, history);
        forwardRmpathEdges.forEach(function (edge) {
          var key = "".concat(_this.dfsCode.dfsEdgeList[rmpath[i]].fromNode, "-").concat(edge.label, "-").concat(nodeMap[edge.to].label);
          if (!forwardRoot[key]) forwardRoot[key] = {
            projected: [],
            fromNodeId: _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode,
            edgeLabel: edge.label,
            nodeLabel2: nodeMap[edge.to].label
          };
          forwardRoot[key].projected.push({
            graphId: p.graphId,
            edge: edge,
            preNode: p
          });
        });
      };
      // rmpath forward
      for (var i = 0; i < rmpath.length; i++) {
        _loop_3(i);
      }
    });
    // backward
    Object.keys(backwardRoot).forEach(function (key) {
      var _a = backwardRoot[key],
        toNodeId = _a.toNodeId,
        edgeLabel = _a.edgeLabel;
      _this.dfsCode.dfsEdgeList.push(new DFSedge(maxToC, toNodeId, "-1", edgeLabel, "-1"));
      _this.subGraphMining(backwardRoot[key].projected);
      _this.dfsCode.dfsEdgeList.pop();
    });
    // forward
    Object.keys(forwardRoot).forEach(function (key) {
      var _a = forwardRoot[key],
        fromNodeId = _a.fromNodeId,
        edgeLabel = _a.edgeLabel,
        nodeLabel2 = _a.nodeLabel2;
      _this.dfsCode.dfsEdgeList.push(new DFSedge(fromNodeId, maxToC + 1, VACANT_NODE_LABEL, edgeLabel, nodeLabel2));
      _this.subGraphMining(forwardRoot[key].projected);
      _this.dfsCode.dfsEdgeList.pop();
    });
  };
  GSpan.prototype.generate1EdgeFrequentSubGraphs = function () {
    var graphs = this.graphs;
    var directed = this.directed;
    var minSupport = this.minSupport;
    var frequentSize1Subgraphs = this.frequentSize1Subgraphs;
    var nodeLabelCounter = {},
      nodeEdgeNodeCounter = {};
    // 保存各个图和各自节点的关系 map，key 格式为 graphKey-node类型
    var nodeLableCounted = {};
    // 保存各个图和各自边的关系 map，key 格式为 graphKey-fromNode类型-edge类型-toNode类型
    var nodeEdgeNodeLabelCounted = {};
    Object.keys(graphs).forEach(function (key) {
      // Line 271
      var graph = graphs[key];
      var nodeMap = graph.nodeMap;
      // 遍历节点，记录对应图 与 每个节点的 label 到 nodeLableCounted
      graph.nodes.forEach(function (node, i) {
        // Line 272
        var nodeLabel = node.label;
        var graphNodeKey = "".concat(key, "-").concat(nodeLabel);
        if (!nodeLableCounted[graphNodeKey]) {
          var counter = nodeLabelCounter[nodeLabel] || 0;
          counter++;
          nodeLabelCounter[nodeLabel] = counter;
        }
        nodeLableCounted[graphNodeKey] = {
          graphKey: key,
          label: nodeLabel
        };
        // 遍历该节点的所有边，记录各个图和各自边的关系到 nodeEdgeNodeLabelCounted. Line 276
        node.edges.forEach(function (edge) {
          var nodeLabel1 = nodeLabel;
          var nodeLabel2 = nodeMap[edge.to].label;
          if (!directed && nodeLabel1 > nodeLabel2) {
            var tmp = nodeLabel2;
            nodeLabel2 = nodeLabel1;
            nodeLabel1 = tmp;
          }
          var edgeLabel = edge.label;
          var graphNodeEdgeNodeKey = "".concat(key, "-").concat(nodeLabel1, "-").concat(edgeLabel, "-").concat(nodeLabel2);
          var nodeEdgeNodeKey = "".concat(nodeLabel1, "-").concat(edgeLabel, "-").concat(nodeLabel2);
          if (!nodeEdgeNodeCounter[nodeEdgeNodeKey]) {
            var counter = nodeEdgeNodeCounter[nodeEdgeNodeKey] || 0;
            counter++;
            nodeEdgeNodeCounter[nodeEdgeNodeKey] = counter; // Line281
          }

          nodeEdgeNodeLabelCounted[graphNodeEdgeNodeKey] = {
            graphId: key,
            nodeLabel1: nodeLabel1,
            edgeLabel: edgeLabel,
            nodeLabel2: nodeLabel2
          };
        });
      });
    });
    // 计算频繁的节点
    Object.keys(nodeLabelCounter).forEach(function (label) {
      var count = nodeLabelCounter[label];
      if (count < minSupport) return;
      var g = {
        nodes: [],
        edges: []
      };
      g.nodes.push({
        id: "0",
        label: label
      });
      frequentSize1Subgraphs.push(g);
      // if (minNodeNum <= 1) reportSize1 TODO
    });

    return frequentSize1Subgraphs;
  };
  GSpan.prototype.run = function () {
    var _this = this;
    // -------- 第一步, _generate_1edge_frequent_subgraphs：频繁的单个节点-------
    this.frequentSize1Subgraphs = this.generate1EdgeFrequentSubGraphs();
    if (this.maxNodeNum < 2) return;
    var graphs = this.graphs;
    var directed = this.directed;
    // PDFS 数组的 map Line 304
    var root = {};
    Object.keys(graphs).forEach(function (graphId) {
      var graph = graphs[graphId];
      var nodeMap = graph.nodeMap;
      // Line 306
      graph.nodes.forEach(function (node) {
        var forwardRootEdges = _this.findForwardRootEdges(graph, node);
        // Line 308
        forwardRootEdges.forEach(function (edge) {
          var toNode = nodeMap[edge.to];
          var nodeEdgeNodeLabel = "".concat(node.label, "-").concat(edge.label, "-").concat(toNode.label);
          if (!root[nodeEdgeNodeLabel]) root[nodeEdgeNodeLabel] = {
            projected: [],
            nodeLabel1: node.label,
            edgeLabel: edge.label,
            nodeLabel2: toNode.label
          };
          var pdfs = {
            graphId: graphId,
            edge: edge,
            preNode: null
          };
          root[nodeEdgeNodeLabel].projected.push(pdfs);
        });
      });
    });
    // Line 313
    Object.keys(root).forEach(function (nodeEdgeNodeLabel) {
      var _a = root[nodeEdgeNodeLabel],
        projected = _a.projected,
        nodeLabel1 = _a.nodeLabel1,
        edgeLabel = _a.edgeLabel,
        nodeLabel2 = _a.nodeLabel2;
      _this.dfsCode.dfsEdgeList.push(new DFSedge(0, 1, nodeLabel1, edgeLabel, nodeLabel2));
      _this.subGraphMining(projected);
      _this.dfsCode.dfsEdgeList.pop();
    });
  };
  return GSpan;
}();
var formatGraphs = function formatGraphs(graphs, directed, nodeLabelProp, edgeLabelProp) {
  var result = {};
  Object.keys(graphs).forEach(function (key, i) {
    var graph = graphs[key];
    var fGraph = new Graph(i, true, directed);
    var nodeIdxMap = {};
    graph.nodes.forEach(function (node, j) {
      fGraph.addNode(j, node[nodeLabelProp]);
      nodeIdxMap[node.id] = j;
    });
    graph.edges.forEach(function (edge, k) {
      var sourceIdx = nodeIdxMap[edge.source];
      var targetIdx = nodeIdxMap[edge.target];
      fGraph.addEdge(-1, sourceIdx, targetIdx, edge[edgeLabelProp]);
    });
    if (fGraph && fGraph.getNodeNum()) result[fGraph.id] = fGraph;
  });
  return result;
};
var toGraphDatas = function toGraphDatas(graphs, nodeLabelProp, edgeLabelProp) {
  var result = [];
  graphs.forEach(function (graph) {
    var graphData = {
      nodes: [],
      edges: []
    };
    graph.nodes.forEach(function (node) {
      var _a;
      graphData.nodes.push((_a = {
        id: "".concat(node.id)
      }, _a[nodeLabelProp] = node.label, _a));
    });
    graph.edges.forEach(function (edge) {
      var _a;
      graphData.edges.push((_a = {
        source: "".concat(edge.from),
        target: "".concat(edge.to)
      }, _a[edgeLabelProp] = edge.label, _a));
    });
    result.push(graphData);
  });
  return result;
};
var DEFAULT_LABEL_NAME = "cluster";
/**
 * gSpan 频繁子图计算算法（frequent graph mining）
 * @param params 参数
 */
var gSpan = function gSpan(params) {
  // ------- 将图数据 GraphData 的 map 转换为格式 -------
  var graphs = params.graphs,
    _a = params.directed,
    directed = _a === void 0 ? false : _a,
    _b = params.nodeLabelProp,
    nodeLabelProp = _b === void 0 ? DEFAULT_LABEL_NAME : _b,
    _c = params.edgeLabelProp,
    edgeLabelProp = _c === void 0 ? DEFAULT_LABEL_NAME : _c;
  var formattedGraphs = formatGraphs(graphs, directed, nodeLabelProp, edgeLabelProp);
  var minSupport = params.minSupport,
    maxNodeNum = params.maxNodeNum,
    minNodeNum = params.minNodeNum,
    verbose = params.verbose,
    top = params.top;
  // ------- 初始化与执行算法 -------
  var algoParams = {
    graphs: formattedGraphs,
    minSupport: minSupport,
    maxNodeNum: maxNodeNum,
    minNodeNum: minNodeNum,
    top: top,
    verbose: verbose,
    directed: directed
  };
  var calculator = new GSpan(algoParams);
  calculator.run();
  var result = toGraphDatas(calculator.frequentSubgraphs, nodeLabelProp, edgeLabelProp);
  return result;
};
export default gSpan;