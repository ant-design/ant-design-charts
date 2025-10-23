import { __spreadArray } from "tslib";
import floydWarshall from './floydWarshall';
import gSpan from './gSpan/gSpan';
import dijkstra from './dijkstra';
import { uniqueId } from './util';
/**
 * 为 graphData 中每个节点生成邻居单元数组
 * @param graphData
 * @param spm
 * @param nodeLabelProp
 * @param k k-近邻
 */
var findKNeighborUnits = function findKNeighborUnits(graphData, spm, nodeLabelProp, k) {
  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }
  if (k === void 0) {
    k = 2;
  }
  var units = [];
  var nodes = graphData.nodes;
  spm.forEach(function (row, i) {
    units.push(findKNeighborUnit(nodes, row, i, nodeLabelProp, k));
  });
  return units;
};
var findKNeighborUnit = function findKNeighborUnit(nodes, row, i, nodeLabelProp, k) {
  var unitNodeIdxs = [i];
  var neighbors = [];
  var labelCountMap = {};
  row.forEach(function (v, j) {
    if (v <= k && i !== j) {
      unitNodeIdxs.push(j);
      neighbors.push(nodes[j]);
      var label = nodes[j][nodeLabelProp];
      if (!labelCountMap[label]) labelCountMap[label] = {
        count: 1,
        dists: [v]
      };else {
        labelCountMap[label].count++;
        labelCountMap[label].dists.push(v);
      }
    }
  });
  // 将 labelCountMap 中的 dists 按照从小到大排序，方便后面使用
  Object.keys(labelCountMap).forEach(function (label) {
    labelCountMap[label].dists = labelCountMap[label].dists.sort(function (a, b) {
      return a - b;
    });
  });
  return {
    nodeIdx: i,
    nodeId: nodes[i].id,
    nodeIdxs: unitNodeIdxs,
    neighbors: neighbors,
    neighborNum: unitNodeIdxs.length - 1,
    nodeLabelCountMap: labelCountMap
  };
};
/**
 * 随机寻找点对，满足距离小于 k
 * @param k 参数 k，表示 k-近邻
 * @param nodeNum 参数 length
 * @param maxNodePairNum 寻找点对的数量不超过 maxNodePairNum
 * @param spm 最短路径矩阵
 */
var findNodePairsRandomly = function findNodePairsRandomly(k, nodeNum, maxNodePairNum, kNeighborUnits, spm) {
  // 每个节点需要随机找出的点对数
  var nodePairNumEachNode = Math.ceil(maxNodePairNum / nodeNum);
  var nodePairMap = {};
  var foundNodePairCount = 0;
  // 遍历节点，为每个节点随机找出 nodePairNumEachNode 个点对，满足距离小于 k。找到的点对数量超过 maxNodePairNum 或所有节点遍历结束时终止
  kNeighborUnits.forEach(function (unit, i) {
    // 若未达到 nodePairNumEachNode，或循环次数小于最大循环次数(2 * nodeNum)，继续循环
    var nodePairForICount = 0;
    var outerLoopCount = 0;
    var neighbors = unit.nodeIdxs; // the first one is the center node
    var neighborNum = unit.neighborNum - 1;
    while (nodePairForICount < nodePairNumEachNode) {
      // 另一端节点在节点数组中的的 index
      var oidx = neighbors[1 + Math.floor(Math.random() * neighborNum)];
      var innerLoopCount = 0;
      // 若随机得到的另一端 idx 不符合条件，则继续 random。条件是不是同一个节点、这个点对没有被记录过、距离小于 k
      while (nodePairMap["".concat(i, "-").concat(oidx)] || nodePairMap["".concat(oidx, "-").concat(i)]) {
        oidx = Math.floor(Math.random() * nodeNum);
        innerLoopCount++;
        if (innerLoopCount > 2 * nodeNum) break; // 循环次数大于最大循环次数(2 * nodeNum)跳出循环，避免死循环
      }

      if (innerLoopCount < 2 * nodeNum) {
        // 未达到最大循环次数，说明找到了合适的另一端
        nodePairMap["".concat(i, "-").concat(oidx)] = {
          start: i,
          end: oidx,
          distance: spm[i][oidx]
        };
        nodePairForICount++;
        foundNodePairCount++;
        // 如果当前找到的点对数量达到了上限，返回结果
        if (foundNodePairCount >= maxNodePairNum) return nodePairMap;
      }
      outerLoopCount++;
      if (outerLoopCount > 2 * nodeNum) break; // 循环次数大于最大循环次数(2 * nodeNum)跳出循环，避免死循环
    }
    // 这个节点没有找到足够 nodePairNumEachNode 的点对。更新 nodePairNumEachNode，让后续节点找更多的点对
    if (nodePairForICount < nodePairNumEachNode) {
      var gap = nodePairNumEachNode - nodePairForICount;
      nodePairNumEachNode = (nodePairNumEachNode + gap) / (nodeNum - i - 1);
    }
  });
  return nodePairMap;
};
/**
 * 计算所有 nodePairMap 中节点对的相交邻居诱导子图
 * @param nodePairMap 节点对 map，key 为 node1.id-node2.id，value 为 { startNodeIdx, endNodeIdx, distance }
 * @param neighborUnits 每个节点的邻居元数组
 * @param graphData 原图数据
 * @param edgeMap 边的 map，方便检索
 * @param cachedInducedGraphMap 缓存的结果，下次进入该函数将继续更新该缓存，若 key 在缓存中存在则不需要重复计算
 */
var getIntersectNeighborInducedGraph = function getIntersectNeighborInducedGraph(nodePairMap, neighborUnits, graphData, cachedInducedGraphMap) {
  var nodes = graphData.nodes;
  if (!cachedInducedGraphMap) cachedInducedGraphMap = {};
  Object.keys(nodePairMap).forEach(function (key) {
    var _a, _b;
    if (cachedInducedGraphMap && cachedInducedGraphMap[key]) return;
    cachedInducedGraphMap[key] = {
      nodes: [],
      edges: []
    };
    var pair = nodePairMap[key];
    var startUnitNodeIds = (_a = neighborUnits[pair.start]) === null || _a === void 0 ? void 0 : _a.nodeIdxs;
    var endUnitNodeIds = (_b = neighborUnits[pair.end]) === null || _b === void 0 ? void 0 : _b.nodeIdxs;
    if (!startUnitNodeIds || !endUnitNodeIds) return; // 不存在邻元，返回空图
    var endSet = new Set(endUnitNodeIds);
    var intersect = startUnitNodeIds.filter(function (x) {
      return endSet.has(x);
    }); // 可能会爆栈（在 1580 + 6 nodes full-connected 时出现）
    if (!intersect || !intersect.length) return; // 没有交集，返回空图
    var intersectIdMap = {};
    var intersectLength = intersect.length;
    for (var i = 0; i < intersectLength; i++) {
      var node = nodes[intersect[i]];
      cachedInducedGraphMap[key].nodes.push(node); // 将交集中的点加入诱导子图
      intersectIdMap[node.id] = true;
    }
    // 遍历所有边数据，如果边的两端都在交集中，将该边加入诱导子图
    graphData.edges.forEach(function (edge) {
      if (intersectIdMap[edge.source] && intersectIdMap[edge.target]) cachedInducedGraphMap[key].edges.push(edge);
    });
  });
  return cachedInducedGraphMap;
};
/**
 * 计算 strcutre 在 graph 上的匹配数量
 * @param graph 图数据
 * @param structure 目前支持只有两个节点一条边的最简单结构
 * @param nodeLabelProp 节点类型字段名
 * @param edgeLabelProp 边类型字段名
 */
var getMatchedCount = function getMatchedCount(graph, structure, nodeLabelProp, edgeLabelProp) {
  var _a, _b;
  var nodeMap = {};
  graph.nodes.forEach(function (node) {
    nodeMap[node.id] = node;
  });
  var count = 0;
  if (!((_a = structure === null || structure === void 0 ? void 0 : structure.edges) === null || _a === void 0 ? void 0 : _a.length) || ((_b = structure === null || structure === void 0 ? void 0 : structure.nodes) === null || _b === void 0 ? void 0 : _b.length) < 2) return 0;
  graph.edges.forEach(function (e) {
    var sourceLabel = nodeMap[e.source][nodeLabelProp];
    var targetLabel = nodeMap[e.target][nodeLabelProp];
    var strNodeLabel1 = structure === null || structure === void 0 ? void 0 : structure.nodes[0][nodeLabelProp];
    var strNodeLabel2 = structure === null || structure === void 0 ? void 0 : structure.nodes[1][nodeLabelProp];
    var strEdgeLabel = structure === null || structure === void 0 ? void 0 : structure.edges[0][edgeLabelProp];
    if (e[edgeLabelProp] !== strEdgeLabel) return;
    if (sourceLabel === strNodeLabel1 && targetLabel === strNodeLabel2 || sourceLabel === strNodeLabel2 && targetLabel === strNodeLabel1) {
      count++;
    }
  });
  return count;
};
/**
 * structures 中寻找最具有代表性的一个。这个结构是使得 matchedCountMap 的分组方式类内间距最小，类间间距最大
 * @param matchedCountMap 每个 structure 分类后的各图匹配数量，格式 { [strcture.idx]: { [interInducedGraphKey]: count } }
 * @param structureNum strcuture 个数，与 matchedCountMap.length 对应
 * @param structures
 */
var findRepresentStructure = function findRepresentStructure(matchedCountMap, structureNum, structures) {
  var maxOffset = Infinity,
    representClusterType = 0;
  var _loop_1 = function _loop_1(i) {
    // 一种分组的 map，key 是 intGraph 的 key，value 是 structures[i] 的匹配个数
    var countMapI = matchedCountMap[i];
    // 按照 value 为该组排序，生成 keys 的数组：
    var sortedGraphKeys = Object.keys(countMapI).sort(function (a, b) {
      return countMapI[a] - countMapI[b];
    });
    // 共 100 个 graphKeys，将 graphKeys 按顺序分为 groupNum 组
    var groupNum = 10;
    var clusters = []; // 总共有 groupNum 个项
    sortedGraphKeys.forEach(function (key, j) {
      if (!clusters[j % groupNum]) clusters[j % groupNum] = {
        graphs: [],
        totalCount: 0,
        aveCount: 0
      };
      clusters[j % groupNum].graphs.push(key);
      clusters[j % groupNum].totalCount += countMapI[key];
    });
    // 计算 cluster 与 cluster 之间的距离 innerDist，每个 cluster 内部的距离 intraDist
    var aveIntraDist = 0; // 该类的类内平均值
    var aveCounts = []; // 类内平均匹配数量，将用于计算类间距离
    clusters.forEach(function (graphsInCluster) {
      // 类内均值
      var aveCount = graphsInCluster.totalCount / graphsInCluster.graphs.length;
      graphsInCluster.aveCount = aveCount;
      aveCounts.push(aveCount);
      // 对于每类，计算类内间距平均值
      var aveIntraPerCluster = 0;
      var graphsNum = graphsInCluster.length;
      graphsInCluster.graphs.forEach(function (graphKey1, j) {
        var graph1Count = countMapI[graphKey1];
        graphsInCluster.graphs.forEach(function (graphKey2, k) {
          if (j === k) return;
          aveIntraPerCluster += Math.abs(graph1Count - countMapI[graphKey2]);
        });
      });
      aveIntraPerCluster /= graphsNum * (graphsNum - 1) / 2;
      aveIntraDist += aveIntraPerCluster;
    });
    aveIntraDist /= clusters.length;
    // 用类内均值计算类间距
    var aveInterDist = 0; // 类间间距平均值
    aveCounts.forEach(function (aveCount1, j) {
      aveCounts.forEach(function (aveCount2, k) {
        if (j === k) return;
        aveInterDist += Math.abs(aveCount1 - aveCount2);
      });
      aveInterDist /= aveCounts.length * (aveCounts.length - 1) / 2;
    });
    // 寻找 (类间间距均值-类内间距均值) 最大的一种分组方式（对应的 structure 就是最终要找的唯一 DS(G)）
    var offset = aveInterDist - aveIntraDist;
    if (maxOffset < offset) {
      maxOffset = offset;
      representClusterType = i;
    }
  };
  for (var i = 0; i < structureNum; i++) {
    _loop_1(i);
  }
  return {
    structure: structures[representClusterType],
    structureCountMap: matchedCountMap[representClusterType]
  };
};
var getNodeMaps = function getNodeMaps(nodes, nodeLabelProp) {
  var nodeMap = {},
    nodeLabelMap = {};
  nodes.forEach(function (node, i) {
    nodeMap[node.id] = {
      idx: i,
      node: node,
      degree: 0,
      inDegree: 0,
      outDegree: 0
    };
    var label = node[nodeLabelProp];
    if (!nodeLabelMap[label]) nodeLabelMap[label] = [];
    nodeLabelMap[label].push(node);
  });
  return {
    nodeMap: nodeMap,
    nodeLabelMap: nodeLabelMap
  };
};
var getEdgeMaps = function getEdgeMaps(edges, edgeLabelProp, nodeMap) {
  var edgeMap = {},
    edgeLabelMap = {};
  edges.forEach(function (edge, i) {
    edgeMap["".concat(uniqueId)] = {
      idx: i,
      edge: edge
    };
    var label = edge[edgeLabelProp];
    if (!edgeLabelMap[label]) edgeLabelMap[label] = [];
    edgeLabelMap[label].push(edge);
    var sourceNode = nodeMap[edge.source];
    if (sourceNode) {
      sourceNode.degree++;
      sourceNode.outDegree++;
    }
    var targetNode = nodeMap[edge.target];
    if (targetNode) {
      targetNode.degree++;
      targetNode.inDegree++;
    }
  });
  return {
    edgeMap: edgeMap,
    edgeLabelMap: edgeLabelMap
  };
};
/**
 * 输出最短路径的 map，key 为 sourceNode.id-targetNode.id，value 为这两个节点的最短路径长度
 * @param nodes
 * @param spm
 * @param directed
 */
var getSpmMap = function getSpmMap(nodes, spm, directed) {
  var length = spm.length;
  var map = {};
  spm.forEach(function (row, i) {
    var start = directed ? 0 : i + 1;
    var iId = nodes[i].id;
    for (var j = start; j < length; j++) {
      if (i === j) continue;
      var jId = nodes[j].id;
      var dist = row[j];
      map["".concat(iId, "-").concat(jId)] = dist;
      if (!directed) map["".concat(jId, "-").concat(iId)] = dist;
    }
  });
  return map;
};
/**
 * 计算一对节点（node1，node2）的 NDS 距离
 * @param graph 原图数据
 * @param node1
 * @param node2
 */
var getNDSDist = function getNDSDist(graph, node1, node2, nodeMap, spDist, kNeighborUnits, structure, nodeLabelProp, edgeLabelProp, cachedNDSMap, cachedInterInducedGraph) {
  var _a;
  var key = "".concat(node1.id, "-").concat(node2.id);
  if (cachedNDSMap && cachedNDSMap[key]) return cachedNDSMap[key];
  var interInducedGraph = cachedInterInducedGraph ? cachedInterInducedGraph[key] : undefined;
  // 若没有缓存相交邻居诱导子图，计算
  if (!interInducedGraph) {
    var pairMap = (_a = {}, _a[key] = {
      start: nodeMap[node1.id].idx,
      end: nodeMap[node2.id].idx,
      distance: spDist
    }, _a);
    cachedInterInducedGraph = getIntersectNeighborInducedGraph(pairMap, kNeighborUnits, graph, cachedInterInducedGraph);
    interInducedGraph = cachedInterInducedGraph[key];
  }
  return getMatchedCount(interInducedGraph, structure, nodeLabelProp, edgeLabelProp);
};
/**
 * 计算 pattern 上绩点的度数并存储到 minPatternNodeLabelDegreeMap
 */
var stashPatternNodeLabelDegreeMap = function stashPatternNodeLabelDegreeMap(minPatternNodeLabelDegreeMap, neighborLabel, patternNodeMap, patternNodeLabelMap) {
  var _a, _b, _c;
  var minPatternNodeLabelDegree = (_a = minPatternNodeLabelDegreeMap[neighborLabel]) === null || _a === void 0 ? void 0 : _a.degree;
  var minPatternNodeLabelInDegree = (_b = minPatternNodeLabelDegreeMap[neighborLabel]) === null || _b === void 0 ? void 0 : _b.inDegree;
  var minPatternNodeLabelOutDegree = (_c = minPatternNodeLabelDegreeMap[neighborLabel]) === null || _c === void 0 ? void 0 : _c.outDegree;
  if (minPatternNodeLabelDegreeMap[neighborLabel] === undefined) {
    minPatternNodeLabelDegree = Infinity;
    minPatternNodeLabelInDegree = Infinity;
    minPatternNodeLabelOutDegree = Infinity;
    patternNodeLabelMap[neighborLabel].forEach(function (patternNodeWithLabel) {
      var patternNodeDegree = patternNodeMap[patternNodeWithLabel.id].degree;
      if (minPatternNodeLabelDegree > patternNodeDegree) minPatternNodeLabelDegree = patternNodeDegree;
      var patternNodeInDegree = patternNodeMap[patternNodeWithLabel.id].inDegree;
      if (minPatternNodeLabelInDegree > patternNodeInDegree) minPatternNodeLabelInDegree = patternNodeInDegree;
      var patternNodeOutDegree = patternNodeMap[patternNodeWithLabel.id].outDegree;
      if (minPatternNodeLabelOutDegree > patternNodeOutDegree) minPatternNodeLabelOutDegree = patternNodeOutDegree;
    });
    minPatternNodeLabelDegreeMap[neighborLabel] = {
      degree: minPatternNodeLabelDegree,
      inDegree: minPatternNodeLabelInDegree,
      outDegree: minPatternNodeLabelOutDegree
    };
  }
  return {
    minPatternNodeLabelDegree: minPatternNodeLabelDegree,
    minPatternNodeLabelInDegree: minPatternNodeLabelInDegree,
    minPatternNodeLabelOutDegree: minPatternNodeLabelOutDegree
  };
};
/**
 * GADDI 模式匹配
 * @param graphData 原图数据
 * @param pattern 搜索图（需要在原图上搜索的模式）数据
 * @param directed 是否计算有向图，默认 false
 * @param k 参数 k，表示 k-近邻
 * @param length 参数 length
 * @param nodeLabelProp 节点数据中代表节点标签（分类信息）的属性名。默认为 cluster
 * @param edgeLabelProp 边数据中代表边标签（分类信息）的属性名。默认为 cluster
 */
var GADDI = function GADDI(graphData, pattern, directed, k, length, nodeLabelProp, edgeLabelProp) {
  var _a;
  if (directed === void 0) {
    directed = false;
  }
  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }
  if (edgeLabelProp === void 0) {
    edgeLabelProp = 'cluster';
  }
  if (!graphData || !graphData.nodes) return;
  // 分为三步：
  // 0. 预计算：节点/边数，邻接矩阵、最短路径矩阵
  // 1. 处理原图 graphData。再分为 1~5 小步
  // 2. 匹配
  // console.log("----- stage-pre: preprocessing -------");
  // -------- 第零步，预计算：节点/边数，邻接矩阵、最短路径矩阵-------
  var nodeNum = graphData.nodes.length;
  if (!nodeNum) return;
  // console.log("----- stage-pre.1: calc shortest path matrix for graph -------");
  var spm = floydWarshall(graphData, directed);
  // console.log(
  //   "----- stage-pre.2: calc shortest path matrix for pattern -------"
  // );
  var patternSpm = floydWarshall(pattern, directed);
  // console.log(
  //   "----- stage-pre.3: calc shortest path matrix map for graph -------"
  // );
  var spmMap = getSpmMap(graphData.nodes, spm, directed);
  // console.log(
  //   "----- stage-pre.4: calc shortest path matrix map for pattern -------"
  // );
  var patternSpmMap = getSpmMap(pattern.nodes, patternSpm, directed);
  // console.log("----- stage-pre.5: establish maps -------");
  // 节点的 map，以 id 为 id 映射，方便后续快速检索
  var _b = getNodeMaps(graphData.nodes, nodeLabelProp),
    nodeMap = _b.nodeMap,
    nodeLabelMap = _b.nodeLabelMap;
  var _c = getNodeMaps(pattern.nodes, nodeLabelProp),
    patternNodeMap = _c.nodeMap,
    patternNodeLabelMap = _c.nodeLabelMap;
  // 计算节点度数
  getEdgeMaps(graphData.edges, edgeLabelProp, nodeMap);
  var patternEdgeLabelMap = getEdgeMaps(pattern.edges, edgeLabelProp, patternNodeMap).edgeLabelMap;
  // 若未指定 length，自动计算 pattern 半径（最短路径最大值）
  var patternSpmSpread = [];
  patternSpm === null || patternSpm === void 0 ? void 0 : patternSpm.forEach(function (row) {
    patternSpmSpread = patternSpmSpread.concat(row);
  });
  if (!length) length = Math.max.apply(Math, __spreadArray(__spreadArray([], patternSpmSpread, false), [2], false));
  if (!k) k = length;
  // console.log("params", directed, length, k);
  // console.log("----- stage-pre.6: calc k neighbor units -------");
  // 计算每个节点的 k 邻元集合
  var kNeighborUnits = findKNeighborUnits(graphData, spm, nodeLabelProp, k);
  var patternKNeighborUnits = findKNeighborUnits(pattern, patternSpm, nodeLabelProp, k);
  // console.log(
  //   "----- stage0: going to processing graph and find intersect neighbor induced graphs -------"
  // );
  // console.log("----- stage0.1: going to select random node pairs -------");
  // -------- 第一步，处理原图 graphData-------
  // 1.1. 随机选择最多 100 个点对，满足距离小于 Length 和 k
  // 当 graphData 少于 20 个节点，则不能找出 100 个点对，只找出不多于 n(n-1)/2 个点对
  var maxNodePairNum = Math.min(100, nodeNum * (nodeNum - 1) / 2);
  var nodePairsMap = findNodePairsRandomly(k, nodeNum, maxNodePairNum, kNeighborUnits, spm);
  // console.log(
  //   "----- stage0.2: going to calculate intersect neighbor induced graphs -------"
  // );
  // 1.2. 生成上面节点对的相应相交邻居诱导子图。格式为 {'beginNodeIdx-endNodeIdx': {nodes: [], edges: []}}
  var intGMap = getIntersectNeighborInducedGraph(nodePairsMap, kNeighborUnits, graphData);
  // 1.3. 使用 gSpan 算法（frequent graph mining）计算 ISIntG 的前 10 个频率最高的子结构（3-4条边）
  var top = 10,
    minSupport = 1,
    minNodeNum = 1,
    maxNodeNum = 4;
  var params = {
    graphs: intGMap,
    nodeLabelProp: nodeLabelProp,
    edgeLabelProp: edgeLabelProp,
    minSupport: minSupport,
    minNodeNum: minNodeNum,
    maxNodeNum: maxNodeNum,
    directed: directed
  };
  // console.log(
  //   "----- stage1: (gSpan) going to find frequent structure dsG -------"
  // );
  // console.log("----- stage1.1: going to run gSpan -------");
  // 暂时假设生成的 sub structure 都只有一条边
  var freStructures = gSpan(params).slice(0, top);
  // structureNum 可能小于 top
  var structureNum = freStructures.length;
  // 1.4. 计算上述 10 个子结构在 intGMap 中每个诱导子图的匹配个数
  var matchedCountMap = [];
  freStructures.forEach(function (structure, i) {
    matchedCountMap[i] = {};
    Object.keys(intGMap).forEach(function (key) {
      var graph = intGMap[key];
      var subStructureCount = getMatchedCount(graph, structure, nodeLabelProp, edgeLabelProp);
      matchedCountMap[i][key] = subStructureCount;
    });
  });
  // console.log(
  //   "----- stage1.1: going to find the most represent strucutre -------"
  // );
  // 1.5. 对于每个子结构，根据匹配个数为 intGMap 中的诱导子图分组，生成 structureNum 种分组
  // 计算每种分组的类间距和类内间距，找到类间距最大、类内间距最小的一种分组，这种分组对应的子结构被选为唯一代表性子结构 DS(G)
  var _d = findRepresentStructure(matchedCountMap, structureNum, freStructures),
    dsG = _d.structure,
    ndsDist = _d.structureCountMap;
  // -------- 第二步，匹配-------
  // 2.1 找到从 Q 中的一个节点作为起始节点，寻找 G 中的匹配。这个其实节点的标签可以在 G 中找到最多的节点
  var beginPNode = pattern.nodes[0],
    candidates = [],
    label = (_a = pattern.nodes[0]) === null || _a === void 0 ? void 0 : _a[nodeLabelProp],
    maxNodeNumWithSameLabel = -Infinity;
  pattern.nodes.forEach(function (node) {
    var pLabel = node[nodeLabelProp];
    var nodesWithSameLabel = nodeLabelMap[pLabel];
    if ((nodesWithSameLabel === null || nodesWithSameLabel === void 0 ? void 0 : nodesWithSameLabel.length) > maxNodeNumWithSameLabel) {
      maxNodeNumWithSameLabel = nodesWithSameLabel.length;
      candidates = nodesWithSameLabel;
      label = pLabel;
      beginPNode = node;
    }
  });
  // console.log("----- stage2: going to find candidates -------");
  // 全局缓存，避免重复计算
  var minPatternNodeLabelDegreeMap = {}; // key 是 label，value 是该 label 节点的最小度数
  var patternIntGraphMap = {},
    patternNDSDist = {},
    // key 为 node.id-node.id
    patternNDSDistMap = {}; // key 为 node.id-label2，value nds距离值数组（按从大到小排序，无需关心具体对应哪个 node2）
  // 2.2.2 对于 Q 中的另一个标签的 k 个节点，计算它们到 node 的最短路径以及 NDS 距离
  var patternSpDist = {};
  var patternSpDistBack = {};
  Object.keys(patternNodeLabelMap).forEach(function (label2, j) {
    patternSpDist[label2] = [];
    if (directed) {
      patternSpDistBack[label2] = [];
    }
    var maxDist = -Infinity;
    var patternNodesWithLabel2 = patternNodeLabelMap[label2];
    var patternNodePairMap = {};
    patternNodesWithLabel2.forEach(function (nodeWithLabel2) {
      var dist = patternSpmMap["".concat(beginPNode.id, "-").concat(nodeWithLabel2.id)];
      dist && patternSpDist[label2].push(dist);
      if (maxDist < dist) maxDist = dist;
      patternNodePairMap["".concat(beginPNode.id, "-").concat(nodeWithLabel2.id)] = {
        start: 0,
        end: patternNodeMap[nodeWithLabel2.id].idx,
        distance: dist
      };
      if (directed) {
        var distBack = patternSpmMap["".concat(nodeWithLabel2.id, "-").concat(beginPNode.id)];
        distBack && patternSpDistBack[label2].push(distBack);
      }
    });
    // spDist[label2] 按照从小到大排序
    patternSpDist[label2] = patternSpDist[label2].sort(function (a, b) {
      return a - b;
    });
    if (directed) patternSpDistBack[label2] = patternSpDistBack[label2].sort(function (a, b) {
      return a - b;
    });
    // 计算 Q 中所有 label2 节点到 beginPNode 的 NDS 距离
    // 所有 label2 节点到 beginPNode 的邻居相交诱导子图：
    // key: node1.id-node2.id
    patternIntGraphMap = getIntersectNeighborInducedGraph(patternNodePairMap, patternKNeighborUnits, pattern, patternIntGraphMap);
    // pattern 中 beginNode 到当前 label2 节点 的 NDS 距离（数组，无需关心具体对应到哪个节点）
    var currentPatternNDSDistArray = [];
    Object.keys(patternNodePairMap).forEach(function (key) {
      if (patternNDSDist[key]) {
        currentPatternNDSDistArray.push(patternNDSDist[key]);
        return; // 缓存过则不需要再次计算
      }

      var patternIntGraph = patternIntGraphMap[key];
      patternNDSDist[key] = getMatchedCount(patternIntGraph, dsG, nodeLabelProp, edgeLabelProp);
      currentPatternNDSDistArray.push(patternNDSDist[key]);
    });
    // 根据值为 currentPatternNDSDist 从大到小排序
    currentPatternNDSDistArray = currentPatternNDSDistArray.sort(function (a, b) {
      return b - a;
    });
    patternNDSDistMap["".concat(beginPNode.id, "-").concat(label2)] = currentPatternNDSDistArray;
    if (label2 === label) return;
    var candidatesNum = (candidates === null || candidates === void 0 ? void 0 : candidates.length) || 0;
    var _loop_4 = function _loop_4(m) {
      var cNode = candidates[m];
      // prune1：若 candidates 中节点 cNode 的 kNeighborUnits 中标签为 label2 的节点个数少于 pattern 中 label2 个数，删去它
      var graphNeighborUnit = kNeighborUnits[nodeMap[cNode.id].idx];
      var graphNeighborUnitCountMap = graphNeighborUnit.nodeLabelCountMap[label2];
      var patternLabel2Num = patternNodeLabelMap[label2].length;
      if (!graphNeighborUnitCountMap || graphNeighborUnitCountMap.count < patternLabel2Num) {
        candidates.splice(m, 1);
        return "continue";
      }
      // prune2：若 candidates 中节点 cNode 到 kNeighborUnits 中标签为 label2 的节点最短路径大于 patternSpDist[label2]，删去它
      // (prune2 规则即：candidate 相关的最短路径的最大 spDist[label2].length 个，按照大小顺序依次和 patternSpDist[label2] 中的值比较，只要遇到一个是 G > Q 的，就删去这个 candidate)
      var prune2Invalid = false;
      for (var n = 0; n < patternLabel2Num; n++) {
        if (graphNeighborUnitCountMap.dists[n] > patternSpDist[label2][n]) {
          prune2Invalid = true;
          break;
        }
      }
      if (prune2Invalid) {
        candidates.splice(m, 1);
        return "continue";
      }
      // prune3：若 candidates 中节点 cNode 到 kNeighborUnits 中标签为 label2 的节点 NDS 距离小于 patternNDSDist[beginNode.id-label2]，删去它
      // TODO：prune3，currentPatternNDSDistArray 与 currentNDSDist 的比较
      // 计算 G 中所有 label2 节点到 cNode 的 NDS 距离
      // 所有 label2 节点到 cNode 的邻居相交诱导子图：
      var cNodePairMap = {};
      graphNeighborUnit.neighbors.forEach(function (neighborNode) {
        var dist = spmMap["".concat(cNode.id, "-").concat(neighborNode.id)];
        cNodePairMap["".concat(cNode.id, "-").concat(neighborNode.id)] = {
          start: nodeMap[cNode.id].idx,
          end: nodeMap[neighborNode.id].idx,
          distance: dist
        };
      });
      // 更新 intGMap
      intGMap = getIntersectNeighborInducedGraph(cNodePairMap, kNeighborUnits, graphData, intGMap);
      // candidate 到它周围 label2 节点的 NDS 距离, key 是 node.id-node.id
      var currentNDSDistArray = [];
      Object.keys(cNodePairMap).forEach(function (key) {
        if (ndsDist[key]) {
          currentNDSDistArray.push(ndsDist[key]);
          return; // 缓存过则不需要再次计算
        }

        var intGraph = intGMap[key];
        ndsDist[key] = getMatchedCount(intGraph, dsG, nodeLabelProp, edgeLabelProp);
        currentNDSDistArray.push(ndsDist[key]);
      });
      // 根据值为 currentNDSDistArray 从大到小排序
      currentNDSDistArray = currentNDSDistArray.sort(function (a, b) {
        return b - a;
      });
      var prune3Invalid = false;
      for (var n = 0; n < patternLabel2Num; n++) {
        if (currentNDSDistArray[n] < currentPatternNDSDistArray[n]) {
          prune3Invalid = true;
          break;
        }
      }
      if (prune3Invalid) {
        candidates.splice(m, 1);
        return "continue";
      }
    };
    for (var m = candidatesNum - 1; m >= 0; m--) {
      _loop_4(m);
    }
  });
  var candidateGraphs = [];
  // console.log(
  //   "----- stage3: going to splice neighbors for each candidate graph -------"
  // );
  // candidates 经过筛选后，以每个 candidate 为中心，生成 Length-neighbor 的邻居诱导子图
  // 并在诱导子图中去除不可能在 Q 上找到匹配的点：在 Q 上不存在的 label，其他 label 到 candidate 的最大最短距离符合 Q、NDS 距离符合 Q
  candidates === null || candidates === void 0 ? void 0 : candidates.forEach(function (candidate) {
    var nodeIdx = nodeMap[candidate.id].idx;
    var lengthNeighborUnit = findKNeighborUnit(graphData.nodes, spm[nodeIdx], nodeIdx, nodeLabelProp, length);
    var neighborNodes = lengthNeighborUnit.neighbors;
    // 删除不可能找到匹配的邻居点
    var neighborNum = neighborNodes.length;
    var unmatched = false;
    for (var i = neighborNum - 1; i >= 0; i--) {
      // 如果通过裁剪，符合条件的节点数量已过少，说明不能匹配这个 candidate 相关的图
      if (neighborNodes.length + 1 < pattern.nodes.length) {
        unmatched = true;
        return;
      }
      var neighborNode = neighborNodes[i];
      var neighborLabel = neighborNode[nodeLabelProp];
      // prune1: 若该邻居点的 label 不存在于 pattern 中，移除这个点
      if (!patternNodeLabelMap[neighborLabel] || !patternNodeLabelMap[neighborLabel].length) {
        neighborNodes.splice(i, 1);
        continue;
      }
      // prune2: 若该邻居点到 candidate 的最短路径比和它有相同 label 的节点到 beginPNode 的最大最短路径长度长，移除这个点
      // prune2.1: 如果没有这个标签到 beginPNode 的距离记录，说明 pattern 上（可能 beginPNode 是这个 label）没有其他这个 label 的节点
      if (!patternSpDist[neighborLabel] || !patternSpDist[neighborLabel].length) {
        neighborNodes.splice(i, 1);
        continue;
      }
      var key = "".concat(candidate.id, "-").concat(neighborNode.id);
      // prune2.2
      var distToCandidate = spmMap[key];
      var idx = patternSpDist[neighborLabel].length - 1;
      var maxDistWithLabelInPattern = patternSpDist[neighborLabel][idx]; // patternSpDist[neighborLabel] 已经按照从小到大排序
      if (distToCandidate > maxDistWithLabelInPattern) {
        neighborNodes.splice(i, 1);
        continue;
      }
      if (directed) {
        var keyBack = "".concat(neighborNode.id, "-").concat(candidate.id);
        var distFromCandidate = spmMap[keyBack];
        idx = patternSpDistBack[neighborLabel].length - 1;
        var maxBackDistWithLabelInPattern = patternSpDistBack[neighborLabel][idx];
        if (distFromCandidate > maxBackDistWithLabelInPattern) {
          neighborNodes.splice(i, 1);
          continue;
        }
      }
      // prune3: 若该邻居点到 candidate 的 NDS 距离比和它有相同 label 的节点到 beginPNode 的最小 NDS 距离小，移除这个点
      var ndsToCandidate = ndsDist[key] ? ndsDist[key] : getNDSDist(graphData, candidate, neighborNode, nodeMap, distToCandidate, kNeighborUnits, dsG, nodeLabelProp, edgeLabelProp, ndsDist, intGMap);
      var patternKey = "".concat(beginPNode.id, "-").concat(neighborLabel);
      var minNdsWithLabelInPattern = patternNDSDistMap[patternKey][patternNDSDistMap[patternKey].length - 1]; // patternNDSDist[key] 一定存在
      if (ndsToCandidate < minNdsWithLabelInPattern) {
        neighborNodes.splice(i, 1);
        continue;
      }
      // prune4: 若该邻居点的度数小于 pattern 同 label 节点最小度数，删去该点
      var _a = stashPatternNodeLabelDegreeMap(minPatternNodeLabelDegreeMap, neighborLabel, patternNodeMap, patternNodeLabelMap),
        minPatternNodeLabelDegree = _a.minPatternNodeLabelDegree,
        minPatternNodeLabelInDegree = _a.minPatternNodeLabelInDegree,
        minPatternNodeLabelOutDegree = _a.minPatternNodeLabelOutDegree;
      if (nodeMap[neighborNode.id].degree < minPatternNodeLabelDegree) {
        neighborNodes.splice(i, 1);
        continue;
      }
    }
    // 节点在个数上符合匹配（不少于 pattern 的节点个数），现在筛选相关边
    if (!unmatched) {
      candidateGraphs.push({
        nodes: [candidate].concat(neighborNodes)
      });
    }
  });
  // console.log(
  //   "----- stage4: going to splice edges and neighbors for each candidate graph -------"
  // );
  var undirectedLengthsToBeginPNode = dijkstra(pattern, beginPNode.id, false).length;
  var undirectedLengthsToBeginPNodeLabelMap = {};
  if (directed) {
    Object.keys(undirectedLengthsToBeginPNode).forEach(function (nodeId) {
      var nodeLabel = patternNodeMap[nodeId].node[nodeLabelProp];
      if (!undirectedLengthsToBeginPNodeLabelMap[nodeLabel]) undirectedLengthsToBeginPNodeLabelMap[nodeLabel] = [undirectedLengthsToBeginPNode[nodeId]];else undirectedLengthsToBeginPNodeLabelMap[nodeLabel].push(undirectedLengthsToBeginPNode[nodeId]);
    });
    Object.keys(undirectedLengthsToBeginPNodeLabelMap).forEach(function (pLabel) {
      undirectedLengthsToBeginPNodeLabelMap[pLabel].sort(function (a, b) {
        return a - b;
      });
    });
  } else {
    undirectedLengthsToBeginPNodeLabelMap = patternSpDist;
  }
  // 现在 candidateGraphs 里面只有节点，进行边的筛选
  var candidateGraphNum = candidateGraphs.length;
  var _loop_2 = function _loop_2(i) {
    var candidateGraph = candidateGraphs[i];
    var candidate = candidateGraph.nodes[0];
    var candidateNodeLabelCountMap = {};
    var candidateNodeMap = {};
    candidateGraph.nodes.forEach(function (node, q) {
      candidateNodeMap[node.id] = {
        idx: q,
        node: node,
        degree: 0,
        inDegree: 0,
        outDegree: 0
      };
      var cNodeLabel = node[nodeLabelProp];
      if (!candidateNodeLabelCountMap[cNodeLabel]) candidateNodeLabelCountMap[cNodeLabel] = 1;else candidateNodeLabelCountMap[cNodeLabel]++;
    });
    // 根据 candidate 和 neighborNodes 中的节点生成 G 的诱导子图
    // 即，将 graphData 上两端都在 candidateGraph.nodes 中的边放入 candidateEdges
    var candidateEdges = [];
    var edgeLabelCountMap = {};
    graphData.edges.forEach(function (edge) {
      if (candidateNodeMap[edge.source] && candidateNodeMap[edge.target]) {
        candidateEdges.push(edge);
        if (!edgeLabelCountMap[edge[edgeLabelProp]]) edgeLabelCountMap[edge[edgeLabelProp]] = 1;else edgeLabelCountMap[edge[edgeLabelProp]]++;
        candidateNodeMap[edge.source].degree++;
        candidateNodeMap[edge.target].degree++;
        candidateNodeMap[edge.source].outDegree++;
        candidateNodeMap[edge.target].inDegree++;
      }
    });
    // prune：若有一个 edgeLabel 在 candidateGraph 上的个数少于 pattern，去除该图
    var pattenrEdgeLabelNum = Object.keys(patternEdgeLabelMap).length;
    var prunedByEdgeLabel = false;
    for (var e = 0; e < pattenrEdgeLabelNum; e++) {
      var label_1 = Object.keys(patternEdgeLabelMap)[e];
      if (!edgeLabelCountMap[label_1] || edgeLabelCountMap[label_1] < patternEdgeLabelMap[label_1].length) {
        prunedByEdgeLabel = true;
        break;
      }
    }
    if (prunedByEdgeLabel) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
    // 遍历 candidateEdges，进行边的筛选
    var candidateEdgeNum = candidateEdges.length;
    // prune：若边数过少，去除该图
    if (candidateEdgeNum < pattern.edges.length) {
      candidateGraphs.splice(i, 1);
      return "break";
    }
    var candidateGraphInvalid = false;
    var _loop_5 = function _loop_5(e) {
      var edge = candidateEdges[e];
      var edgeLabel = edge[edgeLabelProp];
      var patternEdgesWithLabel = patternEdgeLabelMap[edgeLabel];
      // prune 1: 若边的 label 不存在于 pattern 边 label 中，去除该边
      if (!patternEdgesWithLabel || !patternEdgesWithLabel.length) {
        edgeLabelCountMap[edgeLabel]--;
        // 若这个 label 的 count 减少之后，该 label 的边数不足，去除该图
        if (patternEdgesWithLabel && edgeLabelCountMap[edgeLabel] < patternEdgesWithLabel.length) {
          candidateGraphInvalid = true;
          return "break";
        }
        candidateEdges.splice(e, 1);
        candidateNodeMap[edge.source].degree--;
        candidateNodeMap[edge.target].degree--;
        candidateNodeMap[edge.source].outDegree--;
        candidateNodeMap[edge.target].inDegree--;
        return "continue";
      }
      // prune 2: 若边的 label +两端 label 的三元组关系不能在 pattern 中找到，去除该边
      var sourceLabel = candidateNodeMap[edge.source].node[nodeLabelProp];
      var targetLabel = candidateNodeMap[edge.target].node[nodeLabelProp];
      var edgeMatched = false;
      patternEdgesWithLabel.forEach(function (patternEdge) {
        var patternSource = patternNodeMap[patternEdge.source].node;
        var patternTarget = patternNodeMap[patternEdge.target].node;
        if (patternSource[nodeLabelProp] === sourceLabel && patternTarget[nodeLabelProp] === targetLabel) edgeMatched = true;
        if (!directed && patternSource[nodeLabelProp] === targetLabel && patternTarget[nodeLabelProp] === sourceLabel) edgeMatched = true;
      });
      if (!edgeMatched) {
        edgeLabelCountMap[edgeLabel]--;
        // 若这个 label 的 count 减少之后，该 label 的边数不足，去除该图
        if (patternEdgesWithLabel && edgeLabelCountMap[edgeLabel] < patternEdgesWithLabel.length) {
          candidateGraphInvalid = true;
          return "break";
        }
        candidateEdges.splice(e, 1);
        candidateNodeMap[edge.source].degree--;
        candidateNodeMap[edge.target].degree--;
        candidateNodeMap[edge.source].outDegree--;
        candidateNodeMap[edge.target].inDegree--;
        return "continue";
      }
    };
    for (var e = candidateEdgeNum - 1; e >= 0; e--) {
      var state_2 = _loop_5(e);
      if (state_2 === "break") break;
    }
    // prune2: 删除边的过程中，发现边数过少/边 label 数过少时，去除该图
    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
    candidateGraph.edges = candidateEdges;
    var lengthsToCandidate = dijkstra(candidateGraph, candidateGraph.nodes[0].id, false).length;
    Object.keys(lengthsToCandidate).reverse().forEach(function (targetId) {
      if (targetId === candidateGraph.nodes[0].id || candidateGraphInvalid) return;
      // prune4: 通过上述裁剪，可能导致该邻居子图变为不连通。裁剪掉目前在这个邻居子图中和 candidate（第一个节点）不连通的节点
      if (lengthsToCandidate[targetId] === Infinity) {
        var targetNodeLabel = candidateNodeMap[targetId].node[nodeLabelProp];
        candidateNodeLabelCountMap[targetNodeLabel]--;
        if (candidateNodeLabelCountMap[targetNodeLabel] < patternNodeLabelMap[targetNodeLabel].length) {
          candidateGraphInvalid = true;
          return;
        }
        var idx = candidateGraph.nodes.indexOf(candidateNodeMap[targetId].node);
        candidateGraph.nodes.splice(idx, 1);
        candidateNodeMap[targetId] = undefined;
        return;
      }
      // prune5: 经过边裁剪后，可能又出现了最短路径过长的节点 （比 pattern 中同 label 的节点到 beginNode 最大最短距离远），删去这些节点
      var nLabel = nodeMap[targetId].node[nodeLabelProp];
      if (!undirectedLengthsToBeginPNodeLabelMap[nLabel] || !undirectedLengthsToBeginPNodeLabelMap[nLabel].length || lengthsToCandidate[targetId] > undirectedLengthsToBeginPNodeLabelMap[nLabel][undirectedLengthsToBeginPNodeLabelMap[nLabel].length - 1]) {
        var targetNodeLabel = candidateNodeMap[targetId].node[nodeLabelProp];
        candidateNodeLabelCountMap[targetNodeLabel]--;
        if (candidateNodeLabelCountMap[targetNodeLabel] < patternNodeLabelMap[targetNodeLabel].length) {
          candidateGraphInvalid = true;
          return;
        }
        var idx = candidateGraph.nodes.indexOf(candidateNodeMap[targetId].node);
        candidateGraph.nodes.splice(idx, 1);
        candidateNodeMap[targetId] = undefined;
      }
    });
    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
    var degreeChanged = true;
    var loopCount = 0;
    while (degreeChanged && !candidateGraphInvalid) {
      degreeChanged = false;
      // candidate 度数不足，删去该图
      var condition = directed ? candidateNodeMap[candidate.id].degree < patternNodeMap[beginPNode.id].degree || candidateNodeMap[candidate.id].inDegree < patternNodeMap[beginPNode.id].inDegree || candidateNodeMap[candidate.id].outDegree < patternNodeMap[beginPNode.id].outDegree : candidateNodeMap[candidate.id].degree < patternNodeMap[beginPNode.id].degree;
      if (condition) {
        candidateGraphInvalid = true;
        break;
      }
      // candidate label 个数不足，删去该图
      if (candidateNodeLabelCountMap[candidate[nodeLabelProp]] < patternNodeLabelMap[candidate[nodeLabelProp]].length) {
        candidateGraphInvalid = true;
        break;
      }
      // prune6：去除度数过小的节点
      var currentCandidateNodeNum = candidateGraph.nodes.length;
      for (var o = currentCandidateNodeNum - 1; o >= 0; o--) {
        var cgNode = candidateGraph.nodes[o];
        var nodeDegree = candidateNodeMap[cgNode.id].degree;
        var nodeInDegree = candidateNodeMap[cgNode.id].inDegree;
        var nodeOutDegree = candidateNodeMap[cgNode.id].outDegree;
        var cNodeLabel = cgNode[nodeLabelProp];
        var _e = stashPatternNodeLabelDegreeMap(minPatternNodeLabelDegreeMap, cNodeLabel, patternNodeMap, patternNodeLabelMap),
          minPatternNodeLabelDegree = _e.minPatternNodeLabelDegree,
          minPatternNodeLabelInDegree = _e.minPatternNodeLabelInDegree,
          minPatternNodeLabelOutDegree = _e.minPatternNodeLabelOutDegree;
        var deleteCondition = directed ? nodeDegree < minPatternNodeLabelDegree || nodeInDegree < minPatternNodeLabelInDegree || nodeOutDegree < minPatternNodeLabelOutDegree : nodeDegree < minPatternNodeLabelDegree;
        if (deleteCondition) {
          candidateNodeLabelCountMap[cgNode[nodeLabelProp]]--;
          // 节点 label 个数不足
          if (candidateNodeLabelCountMap[cgNode[nodeLabelProp]] < patternNodeLabelMap[cgNode[nodeLabelProp]].length) {
            candidateGraphInvalid = true;
            break;
          }
          candidateGraph.nodes.splice(o, 1);
          candidateNodeMap[cgNode.id] = undefined;
          degreeChanged = true;
        }
      }
      if (candidateGraphInvalid || !degreeChanged && loopCount !== 0) break;
      // 经过 prune5 节点裁剪，删去端点已经不在 candidateGraph 中的边
      candidateEdgeNum = candidateEdges.length;
      for (var y = candidateEdgeNum - 1; y >= 0; y--) {
        var cedge = candidateEdges[y];
        if (!candidateNodeMap[cedge.source] || !candidateNodeMap[cedge.target]) {
          candidateEdges.splice(y, 1);
          var edgeLabel = cedge[edgeLabelProp];
          edgeLabelCountMap[edgeLabel]--;
          if (candidateNodeMap[cedge.source]) {
            candidateNodeMap[cedge.source].degree--;
            candidateNodeMap[cedge.source].outDegree--;
          }
          if (candidateNodeMap[cedge.target]) {
            candidateNodeMap[cedge.target].degree--;
            candidateNodeMap[cedge.target].inDegree--;
          }
          // 边 label 数量不足
          if (patternEdgeLabelMap[edgeLabel] && edgeLabelCountMap[edgeLabel] < patternEdgeLabelMap[edgeLabel].length) {
            candidateGraphInvalid = true;
            break;
          }
          degreeChanged = true;
        }
      }
      loopCount++;
    }
    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
    // prune: 若节点/边数过少，节点/边 label 过少，去掉这个图
    if (candidateGraphInvalid || candidateGraph.nodes.length < pattern.nodes.length || candidateEdges.length < pattern.edges.length) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
  };
  for (var i = candidateGraphNum - 1; i >= 0; i--) {
    var state_1 = _loop_2(i);
    if (state_1 === "break") break;
  }
  // 此时已经生成的多个 candidateGraphs，可能有重复
  // console.log(
  //   "----- stage5: going to splice dulplicated candidate graphs -------"
  // );
  // 删去 candidateGraphs 中一模一样的子图，通过边的 node-node-edgeLabel 作为 key，这类边个数作为 value，进行匹配
  var currentLength = candidateGraphs.length;
  var _loop_3 = function _loop_3(i) {
    var cg1 = candidateGraphs[i];
    var cg1EdgeMap = {}; // [node1.id-node2.id-edge.label]: count
    cg1.edges.forEach(function (edge) {
      var key = "".concat(edge.source, "-").concat(edge.target, "-").concat(edge.label);
      if (!cg1EdgeMap[key]) cg1EdgeMap[key] = 1;else cg1EdgeMap[key]++;
    });
    var _loop_6 = function _loop_6(j) {
      var cg2 = candidateGraphs[j];
      var cg2EdgeMap = {}; // [node1.id-node2.id-edge.label]: count
      cg2.edges.forEach(function (edge) {
        var key = "".concat(edge.source, "-").concat(edge.target, "-").concat(edge.label);
        if (!cg2EdgeMap[key]) cg2EdgeMap[key] = 1;else cg2EdgeMap[key]++;
      });
      var same = true;
      if (Object.keys(cg2EdgeMap).length !== Object.keys(cg1EdgeMap).length) {
        same = false;
      } else {
        Object.keys(cg1EdgeMap).forEach(function (key) {
          if (cg2EdgeMap[key] !== cg1EdgeMap[key]) same = false;
        });
      }
      if (same) {
        candidateGraphs.splice(j, 1);
      }
    };
    for (var j = currentLength - 1; j > i; j--) {
      _loop_6(j);
    }
    currentLength = candidateGraphs.length;
  };
  for (var i = 0; i <= currentLength - 1; i++) {
    _loop_3(i);
  }
  return candidateGraphs;
};
export default GADDI;