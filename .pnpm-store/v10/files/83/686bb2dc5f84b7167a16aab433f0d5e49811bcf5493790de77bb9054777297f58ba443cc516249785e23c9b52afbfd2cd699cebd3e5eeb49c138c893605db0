"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuid = exports.checkNoNull = void 0;
var _uuid = require("uuid");
/**
 * 生成 uuid
 */
const uuid = () => {
  // 专门为测试环境使用
  if (window.IS_TEST_ENV) {
    return 'UUID';
  }
  return (0, _uuid.v4)().toUpperCase();
};

/**
 * 排序 Object Keys
 * @param obj JSON 对象
 */
// export const sortObjectKeys = (obj: Object) => {
//   const keys = Object.keys(obj).sort();
//
//   return keys.reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});
// };

/**
 * 保证 JSON 没有 null 值
 * @param json
 */
exports.uuid = uuid;
const checkNoNull = json => {
  Object.values(json).forEach(value => {
    if (
    // 检查 NaN
    typeof value === 'number' && isNaN(value) ||
    // 检查 null
    value === null ||
    // 检查 undefined
    typeof value === 'undefined') {
      throw Error(`对象存在空值: ${JSON.stringify(json)}\n请检查生成方法是否有错误...  `);
    }
    if (value && typeof value === 'object') {
      checkNoNull(value);
    }
  });
};
exports.checkNoNull = checkNoNull;