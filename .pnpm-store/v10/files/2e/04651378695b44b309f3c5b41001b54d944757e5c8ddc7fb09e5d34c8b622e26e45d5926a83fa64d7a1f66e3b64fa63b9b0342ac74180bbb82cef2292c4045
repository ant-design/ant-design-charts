import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
/* eslint-disable prefer-rest-params */

/**
 * 用于合并 n 个对象
 * @param  {any[]} ...rest
 * @returns T
 */
var merge = function merge() {
  var obj = {};
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  var il = rest.length;
  var key;
  var i = 0;
  for (; i < il; i += 1) {
    // eslint-disable-next-line no-restricted-syntax
    for (key in rest[i]) {
      if (rest[i].hasOwnProperty(key)) {
        if (_typeof(obj[key]) === 'object' && _typeof(rest[i][key]) === 'object' && obj[key] !== undefined && obj[key] !== null && !Array.isArray(obj[key]) && !Array.isArray(rest[i][key])) {
          obj[key] = _objectSpread(_objectSpread({}, obj[key]), rest[i][key]);
        } else {
          obj[key] = rest[i][key];
        }
      }
    }
  }
  return obj;
};
export { merge };