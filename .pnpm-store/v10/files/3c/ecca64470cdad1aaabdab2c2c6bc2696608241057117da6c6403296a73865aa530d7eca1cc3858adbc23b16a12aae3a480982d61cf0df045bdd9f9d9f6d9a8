"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genProStyle = function genProStyle(token) {
  return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.componentCls, "-label"), {
    cursor: 'pointer'
  }), "".concat(token.componentCls, "-overlay"), {
    minWidth: '200px',
    marginBlockStart: '4px'
  }), "".concat(token.componentCls, "-content"), {
    paddingBlock: 16,
    paddingInline: 16
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('FilterDropdown', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}