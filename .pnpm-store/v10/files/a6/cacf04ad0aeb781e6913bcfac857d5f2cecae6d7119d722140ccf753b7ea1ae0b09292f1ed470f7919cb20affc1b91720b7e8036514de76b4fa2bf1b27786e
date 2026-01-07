var adjMatrix = function adjMatrix(graphData, directed) {
  var nodes = graphData.nodes,
    edges = graphData.edges;
  var matrix = [];
  // map node with index in data.nodes
  var nodeMap = {};
  if (!nodes) {
    throw new Error("invalid nodes data!");
  }
  if (nodes) {
    nodes.forEach(function (node, i) {
      nodeMap[node.id] = i;
      var row = [];
      matrix.push(row);
    });
  }
  if (edges) {
    edges.forEach(function (edge) {
      var source = edge.source,
        target = edge.target;
      var sIndex = nodeMap[source];
      var tIndex = nodeMap[target];
      if (!sIndex && sIndex !== 0 || !tIndex && tIndex !== 0) return;
      matrix[sIndex][tIndex] = 1;
      if (!directed) {
        matrix[tIndex][sIndex] = 1;
      }
    });
  }
  return matrix;
};
export default adjMatrix;