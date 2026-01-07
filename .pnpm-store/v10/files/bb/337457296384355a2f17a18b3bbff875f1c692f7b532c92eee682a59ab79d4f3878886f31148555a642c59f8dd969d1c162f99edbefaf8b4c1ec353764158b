export var VACANT_EDGE_ID = -1;
export var VACANT_NODE_ID = -1;
export var VACANT_EDGE_LABEL = "-1";
export var VACANT_NODE_LABEL = "-1";
export var VACANT_GRAPH_ID = -1;
export var AUTO_EDGE_ID = "-1";
var Edge = /** @class */function () {
  function Edge(id, from, to, label) {
    if (id === void 0) {
      id = VACANT_EDGE_ID;
    }
    if (from === void 0) {
      from = VACANT_NODE_ID;
    }
    if (to === void 0) {
      to = VACANT_NODE_ID;
    }
    if (label === void 0) {
      label = VACANT_EDGE_LABEL;
    }
    this.id = id;
    this.from = from;
    this.to = to;
    this.label = label;
  }
  return Edge;
}();
export { Edge };
var Node = /** @class */function () {
  function Node(id, label) {
    if (id === void 0) {
      id = VACANT_NODE_ID;
    }
    if (label === void 0) {
      label = VACANT_NODE_LABEL;
    }
    this.id = id;
    this.label = label;
    this.edges = [];
    this.edgeMap = {};
  }
  Node.prototype.addEdge = function (edge) {
    this.edges.push(edge);
    this.edgeMap[edge.id] = edge;
  };
  return Node;
}();
export { Node };
var Graph = /** @class */function () {
  function Graph(id, edgeIdAutoIncrease, directed) {
    if (id === void 0) {
      id = VACANT_NODE_ID;
    }
    if (edgeIdAutoIncrease === void 0) {
      edgeIdAutoIncrease = true;
    }
    if (directed === void 0) {
      directed = false;
    }
    this.id = id;
    this.edgeIdAutoIncrease = edgeIdAutoIncrease;
    this.edges = [];
    this.nodes = [];
    this.nodeMap = {};
    this.edgeMap = {};
    this.nodeLabelMap = {};
    this.edgeLabelMap = {};
    this.counter = 0;
    this.directed = directed;
  }
  Graph.prototype.getNodeNum = function () {
    return this.nodes.length;
  };
  Graph.prototype.addNode = function (id, label) {
    if (this.nodeMap[id]) return;
    var node = new Node(id, label);
    this.nodes.push(node);
    this.nodeMap[id] = node;
    if (!this.nodeLabelMap[label]) this.nodeLabelMap[label] = [];
    this.nodeLabelMap[label].push(id);
  };
  Graph.prototype.addEdge = function (id, from, to, label) {
    if (this.edgeIdAutoIncrease || id === undefined) id = this.counter++;
    if (this.nodeMap[from] && this.nodeMap[to] && this.nodeMap[to].edgeMap[id]) return;
    var edge = new Edge(id, from, to, label);
    this.edges.push(edge);
    this.edgeMap[id] = edge;
    this.nodeMap[from].addEdge(edge);
    if (!this.edgeLabelMap[label]) this.edgeLabelMap[label] = [];
    this.edgeLabelMap[label].push(edge);
    if (!this.directed) {
      var rEdge = new Edge(id, to, from, label);
      this.nodeMap[to].addEdge(rEdge);
      this.edgeLabelMap[label].push(rEdge);
    }
  };
  return Graph;
}();
export { Graph };