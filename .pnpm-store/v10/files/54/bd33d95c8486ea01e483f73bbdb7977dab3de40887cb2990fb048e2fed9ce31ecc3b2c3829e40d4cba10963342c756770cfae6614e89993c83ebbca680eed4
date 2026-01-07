"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _util = require("@antv/util");
var _nodeProperties = require("./utils/node-properties");
var _dataPreprocessing = require("./utils/data-preprocessing");
var _cosineSimilarity = _interopRequireDefault(require("./cosine-similarity"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 *  nodes-cosine-similarity算法 基于节点属性计算余弦相似度(基于种子节点寻找相似节点)
 * @param nodes 图节点数据
 * @param seedNode 种子节点
 * @param propertyKey 属性的字段名
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 */
var nodesCosineSimilarity = function nodesCosineSimilarity(nodes, seedNode, propertyKey, involvedKeys, uninvolvedKeys) {
  if (nodes === void 0) {
    nodes = [];
  }
  if (propertyKey === void 0) {
    propertyKey = undefined;
  }
  if (involvedKeys === void 0) {
    involvedKeys = [];
  }
  if (uninvolvedKeys === void 0) {
    uninvolvedKeys = [];
  }
  var similarNodes = (0, _util.clone)(nodes.filter(function (node) {
    return node.id !== seedNode.id;
  }));
  var seedNodeIndex = nodes.findIndex(function (node) {
    return node.id === seedNode.id;
  });
  // 所有节点属性集合
  var properties = (0, _nodeProperties.getAllProperties)(nodes, propertyKey);
  // 所有节点属性one-hot特征向量集合
  var allPropertiesWeight = (0, _dataPreprocessing.oneHot)(properties, involvedKeys, uninvolvedKeys);
  // 种子节点属性
  var seedNodeProperties = allPropertiesWeight[seedNodeIndex];
  var allCosineSimilarity = [];
  similarNodes.forEach(function (node, index) {
    if (node.id !== seedNode.id) {
      // 节点属性
      var nodeProperties = allPropertiesWeight[index];
      // 计算节点向量和种子节点向量的余弦相似度
      var cosineSimilarityValue = (0, _cosineSimilarity.default)(nodeProperties, seedNodeProperties);
      allCosineSimilarity.push(cosineSimilarityValue);
      node.cosineSimilarity = cosineSimilarityValue;
    }
  });
  // 将返回的节点按照余弦相似度大小排序
  similarNodes.sort(function (a, b) {
    return b.cosineSimilarity - a.cosineSimilarity;
  });
  return {
    allCosineSimilarity: allCosineSimilarity,
    similarNodes: similarNodes
  };
};
var _default = nodesCosineSimilarity;
exports.default = _default;