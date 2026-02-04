import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
/**
 * 将 stylish 中的 styles 取出作为 可复用的 string
 * @param stylish
 */
export var convertStylishToString = function convertStylishToString(stylish) {
  return Object.fromEntries(Object.entries(stylish).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return [key, value.styles];
  }));
};