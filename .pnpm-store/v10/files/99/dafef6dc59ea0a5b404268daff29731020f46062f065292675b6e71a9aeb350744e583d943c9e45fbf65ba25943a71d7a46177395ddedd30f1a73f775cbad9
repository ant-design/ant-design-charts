import getAdjMatrix from './adjacent-matrix';
import { uniqueId } from './util';
/**
 * 标签传播算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param maxIteration 最大迭代次数
 */
var labelPropagation = function labelPropagation(graphData, directed, weightPropertyName, maxIteration) {
  if (directed === void 0) {
    directed = false;
  }
  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }
  if (maxIteration === void 0) {
    maxIteration = 1000;
  }
  // the origin data
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var clusters = {};
  var nodeMap = {};
  // init the clusters and nodeMap
  nodes.forEach(function (node, i) {
    var cid = uniqueId();
    node.clusterId = cid;
    clusters[cid] = {
      id: cid,
      nodes: [node]
    };
    nodeMap[node.id] = {
      node: node,
      idx: i
    };
  });
  // the adjacent matrix of calNodes inside clusters
  var adjMatrix = getAdjMatrix(graphData, directed);
  // the sum of each row in adjacent matrix
  var ks = [];
  /**
   * neighbor nodes (id for key and weight for value) for each node
   * neighbors = {
   *  id(node_id): { id(neighbor_1_id): weight(weight of the edge), id(neighbor_2_id): weight(weight of the edge), ... },
   *  ...
   * }
   */
  var neighbors = {};
  adjMatrix.forEach(function (row, i) {
    var k = 0;
    var iid = nodes[i].id;
    neighbors[iid] = {};
    row.forEach(function (entry, j) {
      if (!entry) return;
      k += entry;
      var jid = nodes[j].id;
      neighbors[iid][jid] = entry;
    });
    ks.push(k);
  });
  var iter = 0;
  var _loop_1 = function _loop_1() {
    var changed = false;
    nodes.forEach(function (node) {
      var neighborClusters = {};
      Object.keys(neighbors[node.id]).forEach(function (neighborId) {
        var neighborWeight = neighbors[node.id][neighborId];
        var neighborNode = nodeMap[neighborId].node;
        var neighborClusterId = neighborNode.clusterId;
        if (!neighborClusters[neighborClusterId]) neighborClusters[neighborClusterId] = 0;
        neighborClusters[neighborClusterId] += neighborWeight;
      });
      // find the cluster with max weight
      var maxWeight = -Infinity;
      var bestClusterIds = [];
      Object.keys(neighborClusters).forEach(function (clusterId) {
        if (maxWeight < neighborClusters[clusterId]) {
          maxWeight = neighborClusters[clusterId];
          bestClusterIds = [clusterId];
        } else if (maxWeight === neighborClusters[clusterId]) {
          bestClusterIds.push(clusterId);
        }
      });
      if (bestClusterIds.length === 1 && bestClusterIds[0] === node.clusterId) return;
      var selfClusterIdx = bestClusterIds.indexOf(node.clusterId);
      if (selfClusterIdx >= 0) bestClusterIds.splice(selfClusterIdx, 1);
      if (bestClusterIds && bestClusterIds.length) {
        changed = true;
        // remove from origin cluster
        var selfCluster = clusters[node.clusterId];
        var nodeInSelfClusterIdx = selfCluster.nodes.indexOf(node);
        selfCluster.nodes.splice(nodeInSelfClusterIdx, 1);
        // move the node to the best cluster
        var randomIdx = Math.floor(Math.random() * bestClusterIds.length);
        var bestCluster = clusters[bestClusterIds[randomIdx]];
        bestCluster.nodes.push(node);
        node.clusterId = bestCluster.id;
      }
    });
    if (!changed) return "break";
    iter++;
  };
  while (iter < maxIteration) {
    var state_1 = _loop_1();
    if (state_1 === "break") break;
  }
  // delete the empty clusters
  Object.keys(clusters).forEach(function (clusterId) {
    var cluster = clusters[clusterId];
    if (!cluster.nodes || !cluster.nodes.length) {
      delete clusters[clusterId];
    }
  });
  // get the cluster edges
  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var source = edge.source,
      target = edge.target;
    var weight = edge[weightPropertyName] || 1;
    var sourceClusterId = nodeMap[source].node.clusterId;
    var targetClusterId = nodeMap[target].node.clusterId;
    var newEdgeId = "".concat(sourceClusterId, "---").concat(targetClusterId);
    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].weight += weight;
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        weight: weight,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  var clustersArray = [];
  Object.keys(clusters).forEach(function (clusterId) {
    clustersArray.push(clusters[clusterId]);
  });
  return {
    clusters: clustersArray,
    clusterEdges: clusterEdges
  };
};
export default labelPropagation;