function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import { v4 as uuidv4 } from 'uuid';
/**
 * 生成 uuid
 */
export var uuid = function uuid() {
  // 专门为测试环境使用
  if (window.IS_TEST_ENV) {
    return 'UUID';
  }
  return uuidv4().toUpperCase();
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
export var checkNoNull = function checkNoNull(json) {
  Object.values(json).forEach(function (value) {
    if (
    // 检查 NaN
    typeof value === 'number' && isNaN(value) ||
    // 检查 null
    value === null ||
    // 检查 undefined
    typeof value === 'undefined') {
      throw Error("\u5BF9\u8C61\u5B58\u5728\u7A7A\u503C: ".concat(JSON.stringify(json), "\n\u8BF7\u68C0\u67E5\u751F\u6210\u65B9\u6CD5\u662F\u5426\u6709\u9519\u8BEF...  "));
    }
    if (value && _typeof(value) === 'object') {
      checkNoNull(value);
    }
  });
};