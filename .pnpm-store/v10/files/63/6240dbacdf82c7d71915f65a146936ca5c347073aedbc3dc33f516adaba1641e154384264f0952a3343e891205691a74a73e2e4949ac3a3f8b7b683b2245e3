"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genGridContentStyle = function genGridContentStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, {
    width: '100%',
    '&-wide': {
      maxWidth: 1152,
      margin: '0 auto'
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProLayoutGridContent', function (token) {
    var GridContentToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genGridContentStyle(GridContentToken)];
  });
}