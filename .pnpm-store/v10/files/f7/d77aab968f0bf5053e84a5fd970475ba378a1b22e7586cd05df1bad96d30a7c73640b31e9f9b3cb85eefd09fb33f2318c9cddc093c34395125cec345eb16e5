"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _util = require("@antv/util");
var _nodeProperties = require("./utils/node-properties");
var _dataPreprocessing = require("./utils/data-preprocessing");
var _vector = _interopRequireDefault(require("./utils/vector"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// 获取质心
var getCentroid = function getCentroid(distanceType, allPropertiesWeight, index) {
  var centroid = [];
  switch (distanceType) {
    case _types.DistanceType.EuclideanDistance:
      centroid = allPropertiesWeight[index];
      break;
    default:
      centroid = [];
      break;
  }
  return centroid;
};
/**
 *  k-means算法 根据节点之间的距离将节点聚类为K个簇
 * @param data 图数据
 * @param k 质心（聚类中心）个数
 * @param propertyKey 属性的字段名
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 * @param distanceType 距离类型 默认节点属性的欧式距离
 */
var kMeans = function kMeans(data, k, propertyKey, involvedKeys, uninvolvedKeys, distanceType) {
  if (k === void 0) {
    k = 3;
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
  if (distanceType === void 0) {
    distanceType = _types.DistanceType.EuclideanDistance;
  }
  var _a = data.nodes,
    nodes = _a === void 0 ? [] : _a,
    _b = data.edges,
    edges = _b === void 0 ? [] : _b;
  var defaultClusterInfo = {
    clusters: [{
      id: "0",
      nodes: nodes
    }],
    clusterEdges: []
  };
  // 距离类型为欧式距离且没有属性时，直接return
  if (distanceType === _types.DistanceType.EuclideanDistance && !nodes.every(function (node) {
    return node.hasOwnProperty(propertyKey);
  })) {
    return defaultClusterInfo;
  }
  // 所有节点属性集合
  var properties = [];
  // 所有节点属性one-hot特征向量集合
  var allPropertiesWeight = [];
  if (distanceType === _types.DistanceType.EuclideanDistance) {
    properties = (0, _nodeProperties.getAllProperties)(nodes, propertyKey);
    allPropertiesWeight = (0, _dataPreprocessing.oneHot)(properties, involvedKeys, uninvolvedKeys);
  }
  if (!allPropertiesWeight.length) {
    return defaultClusterInfo;
  }
  var allPropertiesWeightUniq = (0, _util.uniq)(allPropertiesWeight.map(function (item) {
    return item.join('');
  }));
  // 当输入节点数量或者属性集合的长度小于k时，k调整为其中最小的值
  var finalK = Math.min(k, nodes.length, allPropertiesWeightUniq.length);
  // 记录节点的原始index，与allPropertiesWeight对应
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].originIndex = i;
  }
  // 初始化质心（聚类中心）
  var centroids = [];
  var centroidIndexList = [];
  var clusters = [];
  for (var i = 0; i < finalK; i++) {
    if (i === 0) {
      // 随机选取质心（聚类中心）
      var randomIndex = Math.floor(Math.random() * nodes.length);
      switch (distanceType) {
        case _types.DistanceType.EuclideanDistance:
          centroids[i] = allPropertiesWeight[randomIndex];
          break;
        default:
          centroids[i] = [];
          break;
      }
      centroidIndexList.push(randomIndex);
      clusters[i] = [nodes[randomIndex]];
      nodes[randomIndex].clusterId = String(i);
    } else {
      var maxDistance = -Infinity;
      var maxDistanceNodeIndex = 0;
      var _loop_1 = function _loop_1(m) {
        if (!centroidIndexList.includes(m)) {
          var totalDistance = 0;
          for (var j = 0; j < centroids.length; j++) {
            // 求节点到质心的距离（默认节点属性的欧式距离）
            var distance = 0;
            switch (distanceType) {
              case _types.DistanceType.EuclideanDistance:
                distance = (0, _dataPreprocessing.getDistance)(allPropertiesWeight[nodes[m].originIndex], centroids[j], distanceType);
                break;
              default:
                break;
            }
            totalDistance += distance;
          }
          // 节点到各质心的平均距离（默认欧式距离）
          var avgDistance = totalDistance / centroids.length;
          // 记录到已有质心最远的的距离和节点索引
          if (avgDistance > maxDistance && !centroids.find(function (centroid) {
            return (0, _util.isEqual)(centroid, getCentroid(distanceType, allPropertiesWeight, nodes[m].originIndex));
          })) {
            maxDistance = avgDistance;
            maxDistanceNodeIndex = m;
          }
        }
      };
      // 选取与已有质心平均距离最远的点做为新的质心
      for (var m = 0; m < nodes.length; m++) {
        _loop_1(m);
      }
      centroids[i] = getCentroid(distanceType, allPropertiesWeight, maxDistanceNodeIndex);
      centroidIndexList.push(maxDistanceNodeIndex);
      clusters[i] = [nodes[maxDistanceNodeIndex]];
      nodes[maxDistanceNodeIndex].clusterId = String(i);
    }
  }
  var iterations = 0;
  while (true) {
    for (var i = 0; i < nodes.length; i++) {
      var minDistanceIndex = 0;
      var minDistance = Infinity;
      if (!(iterations === 0 && centroidIndexList.includes(i))) {
        for (var j = 0; j < centroids.length; j++) {
          // 求节点到质心的距离（默认节点属性的欧式距离）
          var distance = 0;
          switch (distanceType) {
            case _types.DistanceType.EuclideanDistance:
              distance = (0, _dataPreprocessing.getDistance)(allPropertiesWeight[i], centroids[j], distanceType);
              break;
            default:
              break;
          }
          // 记录节点最近的质心的索引
          if (distance < minDistance) {
            minDistance = distance;
            minDistanceIndex = j;
          }
        }
        // 从原来的类别删除节点
        if (nodes[i].clusterId !== undefined) {
          for (var n = clusters[Number(nodes[i].clusterId)].length - 1; n >= 0; n--) {
            if (clusters[Number(nodes[i].clusterId)][n].id === nodes[i].id) {
              clusters[Number(nodes[i].clusterId)].splice(n, 1);
            }
          }
        }
        // 将节点划分到距离最小的质心（聚类中心）所对应的类中
        nodes[i].clusterId = String(minDistanceIndex);
        clusters[minDistanceIndex].push(nodes[i]);
      }
    }
    // 是否存在质心（聚类中心）移动
    var centroidsEqualAvg = false;
    for (var i = 0; i < clusters.length; i++) {
      var clusterNodes = clusters[i];
      var totalVector = new _vector.default([]);
      for (var j = 0; j < clusterNodes.length; j++) {
        totalVector = totalVector.add(new _vector.default(allPropertiesWeight[clusterNodes[j].originIndex]));
      }
      // 计算每个类别的均值向量
      var avgVector = totalVector.avg(clusterNodes.length);
      // 如果均值向量不等于质心向量
      if (!avgVector.equal(new _vector.default(centroids[i]))) {
        centroidsEqualAvg = true;
        // 移动/更新每个类别的质心（聚类中心）到该均值向量
        centroids[i] = avgVector.getArr();
      }
    }
    iterations++;
    // 如果每个节点都归属了类别，且不存在质心（聚类中心）移动或者迭代次数超过1000，则停止
    if (nodes.every(function (node) {
      return node.clusterId !== undefined;
    }) && centroidsEqualAvg || iterations >= 1000) {
      break;
    }
  }
  // get the cluster edges
  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var _a, _b;
    var source = edge.source,
      target = edge.target;
    var sourceClusterId = (_a = nodes.find(function (node) {
      return node.id === source;
    })) === null || _a === void 0 ? void 0 : _a.clusterId;
    var targetClusterId = (_b = nodes.find(function (node) {
      return node.id === target;
    })) === null || _b === void 0 ? void 0 : _b.clusterId;
    var newEdgeId = "".concat(sourceClusterId, "---").concat(targetClusterId);
    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  return {
    clusters: clusters,
    clusterEdges: clusterEdges
  };
};
var _default = kMeans;
exports.default = _default;