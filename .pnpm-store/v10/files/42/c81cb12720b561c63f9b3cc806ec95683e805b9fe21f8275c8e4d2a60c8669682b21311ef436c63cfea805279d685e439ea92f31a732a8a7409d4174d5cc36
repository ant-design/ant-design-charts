"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genProListStyle = function genProListStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, {
    '&-icon': {
      marginInlineEnd: 8,
      color: token.colorTextSecondary,
      cursor: 'grab !important',
      padding: 4,
      fontSize: 12,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: token.colorText,
        backgroundColor: token.colorInfoBg
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('DragSortTable', function (token) {
    var proListToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProListStyle(proListToken)];
  });
}