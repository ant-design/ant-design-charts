import { uniq } from '@antv/util';
import { DistanceType } from '../types';
import Vector from './vector';
/**
 * 获取数据中所有的属性及其对应的值
 * @param dataList 数据集
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 */
export var getAllKeyValueMap = function getAllKeyValueMap(dataList, involvedKeys, uninvolvedKeys) {
  var keys = [];
  // 指定了参与计算的keys时，使用指定的keys
  if (involvedKeys === null || involvedKeys === void 0 ? void 0 : involvedKeys.length) {
    keys = involvedKeys;
  } else {
    // 未指定抽取的keys时，提取数据中所有的key
    dataList.forEach(function (data) {
      keys = keys.concat(Object.keys(data));
    });
    keys = uniq(keys);
  }
  // 获取所有值非空的key的value数组
  var allKeyValueMap = {};
  keys.forEach(function (key) {
    var value = [];
    dataList.forEach(function (data) {
      if (data[key] !== undefined && data[key] !== '') {
        value.push(data[key]);
      }
    });
    if (value.length && !(uninvolvedKeys === null || uninvolvedKeys === void 0 ? void 0 : uninvolvedKeys.includes(key))) {
      allKeyValueMap[key] = uniq(value);
    }
  });
  return allKeyValueMap;
};
/**
 * one-hot编码：数据特征提取
 * @param dataList 数据集
 * @param involvedKeys 参与计算的的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 */
export var oneHot = function oneHot(dataList, involvedKeys, uninvolvedKeys) {
  // 获取数据中所有的属性/特征及其对应的值
  var allKeyValueMap = getAllKeyValueMap(dataList, involvedKeys, uninvolvedKeys);
  var oneHotCode = [];
  if (!Object.keys(allKeyValueMap).length) {
    return oneHotCode;
  }
  // 获取所有的属性/特征值
  var allValue = Object.values(allKeyValueMap);
  // 是否所有属性/特征的值都是数值型
  var isAllNumber = allValue.every(function (value) {
    return value.every(function (item) {
      return typeof item === 'number';
    });
  });
  // 对数据进行one-hot编码
  dataList.forEach(function (data, index) {
    var code = [];
    Object.keys(allKeyValueMap).forEach(function (key) {
      var keyValue = data[key];
      var allKeyValue = allKeyValueMap[key];
      var valueIndex = allKeyValue.findIndex(function (value) {
        return keyValue === value;
      });
      var subCode = [];
      // 如果属性/特征所有的值都能转成数值型，不满足分箱，则直接用值（todo: 为了收敛更快，需做归一化处理）
      if (isAllNumber) {
        subCode.push(keyValue);
      } else {
        // 进行one-hot编码
        for (var i = 0; i < allKeyValue.length; i++) {
          if (i === valueIndex) {
            subCode.push(1);
          } else {
            subCode.push(0);
          }
        }
      }
      code = code.concat(subCode);
    });
    oneHotCode[index] = code;
  });
  return oneHotCode;
};
/**
 * getDistance：获取两个元素之间的距离
 * @param item
 * @param otherItem
 * @param distanceType 距离类型
 * @param graphData 图数据
 */
export var getDistance = function getDistance(item, otherItem, distanceType, graphData) {
  if (distanceType === void 0) {
    distanceType = DistanceType.EuclideanDistance;
  }
  var distance = 0;
  switch (distanceType) {
    case DistanceType.EuclideanDistance:
      distance = new Vector(item).euclideanDistance(new Vector(otherItem));
      break;
    default:
      break;
  }
  return distance;
};
export default {
  getAllKeyValueMap: getAllKeyValueMap,
  oneHot: oneHot,
  getDistance: getDistance
};