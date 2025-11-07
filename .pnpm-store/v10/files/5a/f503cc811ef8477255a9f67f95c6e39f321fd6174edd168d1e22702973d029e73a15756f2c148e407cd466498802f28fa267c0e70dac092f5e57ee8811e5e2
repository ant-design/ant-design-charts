import { secondReg, dateReg } from '../constants/time';
// 获取所有属性并排序
export var getAllSortProperties = function getAllSortProperties(nodes, n) {
  if (nodes === void 0) {
    nodes = [];
  }
  if (n === void 0) {
    n = 100;
  }
  var propertyKeyInfo = {};
  nodes.forEach(function (node) {
    if (!node.properties) {
      return;
    }
    Object.keys(node.properties).forEach(function (propertyKey) {
      // 目前过滤只保留可以转成数值型的或日期型的, todo: 统一转成one-hot特征向量或者embedding
      if (propertyKey === 'id' || !"".concat(node.properties[propertyKey]).match(secondReg) && !"".concat(node.properties[propertyKey]).match(dateReg) && isNaN(Number(node.properties[propertyKey]))) {
        if (propertyKeyInfo.hasOwnProperty(propertyKey)) {
          delete propertyKeyInfo[propertyKey];
        }
        return;
      }
      if (propertyKeyInfo.hasOwnProperty(propertyKey)) {
        propertyKeyInfo[propertyKey] += 1;
      } else {
        propertyKeyInfo[propertyKey] = 1;
      }
    });
  });
  // 取top50的属性
  var sortKeys = Object.keys(propertyKeyInfo).sort(function (a, b) {
    return propertyKeyInfo[b] - propertyKeyInfo[a];
  });
  return sortKeys.length < n ? sortKeys : sortKeys.slice(0, n);
};
var processProperty = function processProperty(properties, propertyKeys) {
  return propertyKeys.map(function (key) {
    if (properties.hasOwnProperty(key)) {
      // // 可以转成数值的直接转成数值
      // if (!isNaN(Number(properties[key]))) {
      //   return Number(properties[key]);
      // }
      // // 时间型的转成时间戳
      // if (properties[key].match(secondReg) || properties[key].match(dateReg)) {
      //   // @ts-ignore
      //   return Number(Date.parse(new Date(properties[key]))) / 1000;
      // }
      return properties[key];
    }
    return 0;
  });
};
// 获取属性特征权重
export var getPropertyWeight = function getPropertyWeight(nodes) {
  var propertyKeys = getAllSortProperties(nodes);
  var allPropertiesWeight = [];
  for (var i = 0; i < nodes.length; i++) {
    allPropertiesWeight[i] = processProperty(nodes[i].properties, propertyKeys);
  }
  return allPropertiesWeight;
};
// 获取所有节点的属性集合
export var getAllProperties = function getAllProperties(nodes, key) {
  if (key === void 0) {
    key = undefined;
  }
  var allProperties = [];
  nodes.forEach(function (node) {
    if (key === undefined) {
      allProperties.push(node);
    }
    if (node[key] !== undefined) {
      allProperties.push(node[key]);
    }
  });
  return allProperties;
};
export default {
  getAllSortProperties: getAllSortProperties,
  getPropertyWeight: getPropertyWeight,
  getAllProperties: getAllProperties
};