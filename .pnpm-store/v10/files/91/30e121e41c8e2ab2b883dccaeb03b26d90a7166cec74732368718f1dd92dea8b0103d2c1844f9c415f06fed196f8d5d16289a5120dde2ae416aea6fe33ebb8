"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStylish = useStylish;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
function useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish,
    proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return (0, _proProvider.useStyle)('ProLayoutHeaderStylish', function (token) {
    var stylishToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    if (!stylish) return [];
    return [(0, _defineProperty2.default)({}, "div".concat(token.proComponentsCls, "-layout"), (0, _defineProperty2.default)({}, "".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken)))];
  });
}