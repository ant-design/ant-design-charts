import getAdjMatrix from "./adjacent-matrix";
var floydWarshall = function floydWarshall(graphData, directed) {
  var adjacentMatrix = getAdjMatrix(graphData, directed);
  var dist = [];
  var size = adjacentMatrix.length;
  for (var i = 0; i < size; i += 1) {
    dist[i] = [];
    for (var j = 0; j < size; j += 1) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (adjacentMatrix[i][j] === 0 || !adjacentMatrix[i][j]) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = adjacentMatrix[i][j];
      }
    }
  }
  // floyd
  for (var k = 0; k < size; k += 1) {
    for (var i = 0; i < size; i += 1) {
      for (var j = 0; j < size; j += 1) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};
export default floydWarshall;