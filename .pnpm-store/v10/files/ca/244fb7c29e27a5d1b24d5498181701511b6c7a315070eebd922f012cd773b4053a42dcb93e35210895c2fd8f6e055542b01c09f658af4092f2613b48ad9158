"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _louvain = _interopRequireDefault(require("./louvain"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 社区发现 i-louvain 算法：模块度 + 惯性模块度（即节点属性相似性）
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param threshold 差值阈值
 * @param propertyKey 属性的字段名
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 * @param inertialWeight 惯性模块度权重
 */
var iLouvain = function iLouvain(graphData, directed, weightPropertyName, threshold, propertyKey, involvedKeys, uninvolvedKeys, inertialWeight) {
  if (directed === void 0) {
    directed = false;
  }
  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }
  if (threshold === void 0) {
    threshold = 0.0001;
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
  return (0, _louvain.default)(graphData, directed, weightPropertyName, threshold, true, propertyKey, involvedKeys, uninvolvedKeys, inertialWeight);
};
var _default = iLouvain;
exports.default = _default;