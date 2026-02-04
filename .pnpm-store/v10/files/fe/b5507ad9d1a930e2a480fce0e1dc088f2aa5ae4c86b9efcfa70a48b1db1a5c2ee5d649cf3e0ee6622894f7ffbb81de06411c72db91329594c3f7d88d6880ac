"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObj = isPlainObj;
exports.transformKeySubmitValue = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));
var _react = _interopRequireDefault(require("react"));
var _isNil = require("../isNil");
var _merge2 = require("../merge");
/**
 * 暂时还不支持 Set和 Map 结构 判断是不是一个能遍历的对象
 *
 * @param itemValue
 * @returns Boolean
 */
function isPlainObj(itemValue) {
  if ((0, _typeof2.default)(itemValue) !== 'object') return false;

  /** Null 也要处理，不然omit空会失效 */
  if (itemValue === null) return true;
  if ( /*#__PURE__*/_react.default.isValidElement(itemValue)) return false;
  if (itemValue.constructor === RegExp) return false;
  if (itemValue instanceof Map) return false;
  if (itemValue instanceof Set) return false;
  if (itemValue instanceof HTMLElement) return false;
  if (itemValue instanceof Blob) return false;
  if (itemValue instanceof File) return false;
  if (Array.isArray(itemValue)) return false;
  return true;
}
var transformKeySubmitValue = exports.transformKeySubmitValue = function transformKeySubmitValue(values, dataFormatMapRaw) {
  var omit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // ignore nil transform
  var dataFormatMap = Object.keys(dataFormatMapRaw).reduce(function (ret, key) {
    var value = dataFormatMapRaw[key];
    if (!(0, _isNil.isNil)(value)) {
      // eslint-disable-next-line no-param-reassign
      ret[key] = value; // can't be undefined
    }
    return ret;
  }, {});
  if (Object.keys(dataFormatMap).length < 1) {
    return values;
  }
  if (typeof window === 'undefined') return values;
  // 如果 value 是 string | null | Array | Blob类型 其中之一，直接返回
  // 形如 {key: [File, File]} 的表单字段当进行第二次递归时会导致其直接越过 typeof value !== 'object' 这一判断 https://github.com/ant-design/pro-components/issues/2071
  if ((0, _typeof2.default)(values) !== 'object' || (0, _isNil.isNil)(values) || values instanceof Blob) {
    return values;
  }
  var finalValues = Array.isArray(values) ? [] : {};
  var gen = function gen(tempValues, parentsKey) {
    var isArrayValues = Array.isArray(tempValues);
    var result = isArrayValues ? [] : {};
    if (tempValues == null || tempValues === undefined) {
      return result;
    }
    Object.keys(tempValues).forEach(function (entityKey) {
      var transformForArray = function transformForArray(transformList, subItemValue) {
        if (!Array.isArray(transformList)) return entityKey;
        transformList.forEach(function (transform, idx) {
          // 如果不存在直接返回
          if (!transform) return;
          var subTransformItem = subItemValue === null || subItemValue === void 0 ? void 0 : subItemValue[idx];

          // 如果是个方法，把key设置为方法的返回值
          if (typeof transform === 'function') {
            subItemValue[idx] = transform(subItemValue, entityKey, tempValues);
          }
          if ((0, _typeof2.default)(transform) === 'object' && !Array.isArray(transform)) {
            Object.keys(transform).forEach(function (transformArrayItem) {
              var subTransformItemValue = subTransformItem === null || subTransformItem === void 0 ? void 0 : subTransformItem[transformArrayItem];
              if (typeof transform[transformArrayItem] === 'function' && subTransformItemValue) {
                var res = transform[transformArrayItem](subTransformItem[transformArrayItem], entityKey, tempValues);
                subTransformItem[transformArrayItem] = (0, _typeof2.default)(res) === 'object' ? res[transformArrayItem] : res;
              } else if ((0, _typeof2.default)(transform[transformArrayItem]) === 'object' && Array.isArray(transform[transformArrayItem]) && subTransformItemValue) {
                transformForArray(transform[transformArrayItem], subTransformItemValue);
              }
            });
          }
          if ((0, _typeof2.default)(transform) === 'object' && Array.isArray(transform) && subTransformItem) {
            transformForArray(transform, subTransformItem);
          }
        });
        return entityKey;
      };
      var key = parentsKey ? [parentsKey, entityKey].flat(1) : [entityKey].flat(1);
      var itemValue = tempValues[entityKey];
      var transformFunction = (0, _get.default)(dataFormatMap, key);
      var transform = function transform() {
        var tempKey,
          transformedResult,
          isTransformedResultPrimitive = false;

        /**
         * 先判断是否是方法，是的话执行后拿到值，如果是基本类型，则认为是直接 transform 为新的值，
         * 如果返回是 Object 则认为是 transform 为新的 {newKey: newValue}
         */
        if (typeof transformFunction === 'function') {
          transformedResult = transformFunction === null || transformFunction === void 0 ? void 0 : transformFunction(itemValue, entityKey, tempValues);
          var typeOfResult = (0, _typeof2.default)(transformedResult);
          if (typeOfResult !== 'object' && typeOfResult !== 'undefined') {
            tempKey = entityKey;
            isTransformedResultPrimitive = true;
          } else {
            tempKey = transformedResult;
          }
        } else {
          tempKey = transformForArray(transformFunction, itemValue);
        }

        // { [key:string]:any } 数组也能通过编译
        if (Array.isArray(tempKey)) {
          result = (0, _set.default)(result, tempKey, itemValue);
          return;
        }
        if ((0, _typeof2.default)(tempKey) === 'object' && !Array.isArray(finalValues)) {
          finalValues = (0, _merge.default)(finalValues, tempKey);
        } else if ((0, _typeof2.default)(tempKey) === 'object' && Array.isArray(finalValues)) {
          result = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, result), tempKey);
        } else if (tempKey !== null || tempKey !== undefined) {
          result = (0, _set.default)(result, [tempKey], isTransformedResultPrimitive ? transformedResult : itemValue);
        }
      };

      /** 如果存在转化器提前渲染一下 */
      if (transformFunction && typeof transformFunction === 'function') {
        transform();
      }
      if (typeof window === 'undefined') return;
      if (isPlainObj(itemValue)) {
        var genValues = gen(itemValue, key);
        if (Object.keys(genValues).length < 1) {
          return;
        }
        result = (0, _set.default)(result, [entityKey], genValues);
        return;
      }
      transform();
    });
    // namePath、transform在omit为false时需正常返回 https://github.com/ant-design/pro-components/issues/2901#issue-908097115
    return omit ? result : tempValues;
  };
  finalValues = Array.isArray(values) && Array.isArray(finalValues) ? (0, _toConsumableArray2.default)(gen(values)) : (0, _merge2.merge)({}, gen(values), finalValues);
  return finalValues;
};