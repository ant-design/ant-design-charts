"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _util = require("@antv/util");
var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));
var _vector = _interopRequireDefault(require("./utils/vector"));
var _nodeProperties = require("./utils/node-properties");
var _dataPreprocessing = require("./utils/data-preprocessing");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getModularity = function getModularity(nodes, adjMatrix, ks, m) {
  var length = adjMatrix.length;
  var param = 2 * m;
  var modularity = 0;
  for (var i = 0; i < length; i++) {
    var clusteri = nodes[i].clusterId;
    for (var j = 0; j < length; j++) {
      var clusterj = nodes[j].clusterId;
      if (clusteri !== clusterj) continue;
      var entry = adjMatrix[i][j] || 0;
      var ki = ks[i] || 0;
      var kj = ks[j] || 0;
      modularity += entry - ki * kj / param;
    }
  }
  modularity *= 1 / param;
  return modularity;
};
// 模块惯性度，衡量属性相似度
var getInertialModularity = function getInertialModularity(nodes, allPropertiesWeight) {
  if (nodes === void 0) {
    nodes = [];
  }
  var length = nodes.length;
  var totalProperties = new _vector.default([]);
  for (var i = 0; i < length; i++) {
    totalProperties = totalProperties.add(new _vector.default(allPropertiesWeight[i]));
  }
  // 均值向量
  var avgProperties = totalProperties.avg(length);
  avgProperties.normalize();
  // 节点集合的方差: 节点v与均值向量的平方欧式距离之和
  var variance = 0;
  for (var i = 0; i < length; i++) {
    var propertiesi = new _vector.default(allPropertiesWeight[i]);
    var squareEuclideanDistance = propertiesi.squareEuclideanDistance(avgProperties);
    variance += squareEuclideanDistance;
  }
  // 任意两点间的欧式平方距离
  var squareEuclideanDistanceInfo = [];
  nodes.forEach(function () {
    squareEuclideanDistanceInfo.push([]);
  });
  for (var i = 0; i < length; i++) {
    var propertiesi = new _vector.default(allPropertiesWeight[i]);
    nodes[i]['clusterInertial'] = 0;
    for (var j = 0; j < length; j++) {
      if (i === j) {
        squareEuclideanDistanceInfo[i][j] = 0;
        continue;
      }
      var propertiesj = new _vector.default(allPropertiesWeight[j]);
      squareEuclideanDistanceInfo[i][j] = propertiesi.squareEuclideanDistance(propertiesj);
      nodes[i]['clusterInertial'] += squareEuclideanDistanceInfo[i][j];
    }
  }
  // 计算模块惯性度
  var inertialModularity = 0;
  var param = 2 * length * variance;
  for (var i = 0; i < length; i++) {
    var clusteri = nodes[i].clusterId;
    for (var j = 0; j < length; j++) {
      var clusterj = nodes[j].clusterId;
      if (i === j || clusteri !== clusterj) continue;
      var inertial = nodes[i].clusterInertial * nodes[j].clusterInertial / Math.pow(param, 2) - squareEuclideanDistanceInfo[i][j] / param;
      inertialModularity += inertial;
    }
  }
  return Number(inertialModularity.toFixed(4));
};
/**
 * 社区发现 louvain 算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param threshold 差值阈值
 * @param inertialModularity 是否使用惯性模块度（即节点属性相似性）
 * @param propertyKey 属性的字段名
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 * @param inertialWeight 惯性模块度权重
 */
var louvain = function louvain(graphData, directed, weightPropertyName, threshold, inertialModularity, propertyKey, involvedKeys, uninvolvedKeys, inertialWeight) {
  if (directed === void 0) {
    directed = false;
  }
  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }
  if (threshold === void 0) {
    threshold = 0.0001;
  }
  if (inertialModularity === void 0) {
    inertialModularity = false;
  }
  if (propertyKey === void 0) {
    propertyKey = undefined;
  }
  if (involvedKeys === void 0) {
    involvedKeys = [];
  }
  if (uninvolvedKeys === void 0) {
    uninvolvedKeys = ['id'];
  }
  if (inertialWeight === void 0) {
    inertialWeight = 1;
  }
  // the origin data
  var _a = graphData.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = graphData.edges,
    edges = _b === void 0 ? [] : _b;
  var allPropertiesWeight = [];
  if (inertialModularity) {
    nodes.forEach(function (node, index) {
      node.properties = node.properties || {};
      node.originIndex = index;
    });
    var nodeTypeInfo_1 = [];
    if (nodes.every(function (node) {
      return node.hasOwnProperty('nodeType');
    })) {
      nodeTypeInfo_1 = Array.from(new Set(nodes.map(function (node) {
        return node.nodeType;
      })));
      nodes.forEach(function (node) {
        node.properties.nodeType = nodeTypeInfo_1.findIndex(function (nodeType) {
          return nodeType === node.nodeType;
        });
      });
    }
    // 所有节点属性集合
    var properties = (0, _nodeProperties.getAllProperties)(nodes, propertyKey);
    // 所有节点属性one-hot特征向量集合
    allPropertiesWeight = (0, _dataPreprocessing.oneHot)(properties, involvedKeys, uninvolvedKeys);
  }
  var uniqueId = 1;
  var clusters = {};
  var nodeMap = {};
  // init the clusters and nodeMap
  nodes.forEach(function (node, i) {
    var cid = String(uniqueId++);
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
  var adjMatrix = (0, _adjacentMatrix.default)(graphData, directed);
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
  // the sum of the weights of all edges in the graph
  var m = 0;
  adjMatrix.forEach(function (row, i) {
    var k = 0;
    var iid = nodes[i].id;
    neighbors[iid] = {};
    row.forEach(function (entry, j) {
      if (!entry) return;
      k += entry;
      var jid = nodes[j].id;
      neighbors[iid][jid] = entry;
      m += entry;
    });
    ks.push(k);
  });
  m /= 2;
  var totalModularity = Infinity;
  var previousModularity = Infinity;
  var iter = 0;
  var finalNodes = [];
  var finalClusters = {};
  while (true) {
    if (inertialModularity && nodes.every(function (node) {
      return node.hasOwnProperty('properties');
    })) {
      totalModularity = getModularity(nodes, adjMatrix, ks, m) + getInertialModularity(nodes, allPropertiesWeight) * inertialWeight;
    } else {
      totalModularity = getModularity(nodes, adjMatrix, ks, m);
    }
    // 第一次迭代previousModularity直接赋值
    if (iter === 0) {
      previousModularity = totalModularity;
      finalNodes = nodes;
      finalClusters = clusters;
    }
    var increaseWithinThreshold = totalModularity > 0 && totalModularity > previousModularity && totalModularity - previousModularity < threshold;
    // 总模块度增加才更新最优解
    if (totalModularity > previousModularity) {
      finalNodes = nodes.map(function (node) {
        return {
          node: node,
          clusterId: node.clusterId
        };
      });
      finalClusters = (0, _util.clone)(clusters);
      previousModularity = totalModularity;
    }
    // whether to terminate the iterations
    if (increaseWithinThreshold || iter > 100) {
      break;
    }
    ;
    iter++;
    // pre compute some values for current clusters
    Object.keys(clusters).forEach(function (clusterId) {
      // sum of weights of edges to nodes in cluster
      var sumTot = 0;
      edges.forEach(function (edge) {
        var source = edge.source,
          target = edge.target;
        var sourceClusterId = nodeMap[source].node.clusterId;
        var targetClusterId = nodeMap[target].node.clusterId;
        if (sourceClusterId === clusterId && targetClusterId !== clusterId || targetClusterId === clusterId && sourceClusterId !== clusterId) {
          sumTot = sumTot + (edge[weightPropertyName] || 1);
        }
      });
      clusters[clusterId].sumTot = sumTot;
    });
    // move the nodes to increase the delta modularity
    nodes.forEach(function (node, i) {
      var selfCluster = clusters[node.clusterId];
      var bestIncrease = 0;
      var bestCluster;
      var commonParam = ks[i] / (2 * m);
      // sum of weights of edges from node to nodes in cluster
      var kiin = 0;
      var selfClusterNodes = selfCluster.nodes;
      selfClusterNodes.forEach(function (scNode) {
        var scNodeIdx = nodeMap[scNode.id].idx;
        kiin += adjMatrix[i][scNodeIdx] || 0;
      });
      // the modurarity for **removing** the node i from the origin cluster of node i
      var removeModurarity = kiin - selfCluster.sumTot * commonParam;
      // nodes for **removing** node i into this neighbor cluster
      var selfClusterNodesAfterRemove = selfClusterNodes.filter(function (scNode) {
        return scNode.id !== node.id;
      });
      var propertiesWeightRemove = [];
      selfClusterNodesAfterRemove.forEach(function (nodeRemove, index) {
        propertiesWeightRemove[index] = allPropertiesWeight[nodeRemove.originIndex];
      });
      // the inertialModularity for **removing** the node i from the origin cluster of node i
      var removeInertialModularity = getInertialModularity(selfClusterNodesAfterRemove, allPropertiesWeight) * inertialWeight;
      // the neightbors of the node
      var nodeNeighborIds = neighbors[node.id];
      Object.keys(nodeNeighborIds).forEach(function (neighborNodeId) {
        var neighborNode = nodeMap[neighborNodeId].node;
        var neighborClusterId = neighborNode.clusterId;
        // if the node and the neighbor of node are in the same cluster, reutrn
        if (neighborClusterId === node.clusterId) return;
        var neighborCluster = clusters[neighborClusterId];
        var clusterNodes = neighborCluster.nodes;
        // if the cluster is empty, remove the cluster and return
        if (!clusterNodes || !clusterNodes.length) return;
        // sum of weights of edges from node to nodes in cluster
        var neighborClusterKiin = 0;
        clusterNodes.forEach(function (cNode) {
          var cNodeIdx = nodeMap[cNode.id].idx;
          neighborClusterKiin += adjMatrix[i][cNodeIdx] || 0;
        });
        // the modurarity for **adding** node i into this neighbor cluster
        var addModurarity = neighborClusterKiin - neighborCluster.sumTot * commonParam;
        // nodes for **adding** node i into this neighbor cluster
        var clusterNodesAfterAdd = clusterNodes.concat([node]);
        var propertiesWeightAdd = [];
        clusterNodesAfterAdd.forEach(function (nodeAdd, index) {
          propertiesWeightAdd[index] = allPropertiesWeight[nodeAdd.originIndex];
        });
        // the inertialModularity for **adding** node i into this neighbor cluster
        var addInertialModularity = getInertialModularity(clusterNodesAfterAdd, allPropertiesWeight) * inertialWeight;
        // the increase modurarity is the difference between addModurarity and removeModurarity
        var increase = addModurarity - removeModurarity;
        if (inertialModularity) {
          increase = addModurarity + addInertialModularity - (removeModurarity + removeInertialModularity);
        }
        // find the best cluster to move node i into
        if (increase > bestIncrease) {
          bestIncrease = increase;
          bestCluster = neighborCluster;
        }
      });
      // if found a best cluster to move into
      if (bestIncrease > 0) {
        bestCluster.nodes.push(node);
        var previousClusterId_1 = node.clusterId;
        node.clusterId = bestCluster.id;
        // move the node to the best cluster
        var nodeInSelfClusterIdx = selfCluster.nodes.indexOf(node);
        // remove from origin cluster
        selfCluster.nodes.splice(nodeInSelfClusterIdx, 1);
        // update sumTot for clusters
        // sum of weights of edges to nodes in cluster
        var neighborClusterSumTot_1 = 0;
        var selfClusterSumTot_1 = 0;
        edges.forEach(function (edge) {
          var source = edge.source,
            target = edge.target;
          var sourceClusterId = nodeMap[source].node.clusterId;
          var targetClusterId = nodeMap[target].node.clusterId;
          if (sourceClusterId === bestCluster.id && targetClusterId !== bestCluster.id || targetClusterId === bestCluster.id && sourceClusterId !== bestCluster.id) {
            neighborClusterSumTot_1 = neighborClusterSumTot_1 + (edge[weightPropertyName] || 1);
          }
          if (sourceClusterId === previousClusterId_1 && targetClusterId !== previousClusterId_1 || targetClusterId === previousClusterId_1 && sourceClusterId !== previousClusterId_1) {
            selfClusterSumTot_1 = selfClusterSumTot_1 + (edge[weightPropertyName] || 1);
          }
        });
        // the nodes of the clusters to move into and remove are changed, update their sumTot
        bestCluster.sumTot = neighborClusterSumTot_1;
        selfCluster.sumTot = selfClusterSumTot_1;
      }
    });
  }
  // delete the empty clusters, assign increasing clusterId
  var newClusterIdMap = {};
  var clusterIdx = 0;
  Object.keys(finalClusters).forEach(function (clusterId) {
    var cluster = finalClusters[clusterId];
    if (!cluster.nodes || !cluster.nodes.length) {
      delete finalClusters[clusterId];
      return;
    }
    var newId = String(clusterIdx + 1);
    if (newId === clusterId) {
      return;
    }
    cluster.id = newId;
    cluster.nodes = cluster.nodes.map(function (item) {
      return {
        id: item.id,
        clusterId: newId
      };
    });
    finalClusters[newId] = cluster;
    newClusterIdMap[clusterId] = newId;
    delete finalClusters[clusterId];
    clusterIdx++;
  });
  // restore node clusterId
  finalNodes.forEach(function (nodeInfo) {
    var node = nodeInfo.node,
      clusterId = nodeInfo.clusterId;
    if (!node) return;
    node.clusterId = clusterId;
    if (node.clusterId && newClusterIdMap[node.clusterId]) node.clusterId = newClusterIdMap[node.clusterId];
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
    if (!sourceClusterId || !targetClusterId) return;
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
  Object.keys(finalClusters).forEach(function (clusterId) {
    clustersArray.push(finalClusters[clusterId]);
  });
  return {
    clusters: clustersArray,
    clusterEdges: clusterEdges
  };
};
var _default = louvain;
exports.default = _default;