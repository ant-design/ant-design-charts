"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genDividerStyle = function genDividerStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2.default)({}, componentCls, {
    '&-divider': {
      flex: 'none',
      width: token.lineWidth,
      marginInline: token.marginXS,
      marginBlock: token.marginLG,
      backgroundColor: token.colorSplit,
      '&-horizontal': {
        width: 'initial',
        height: token.lineWidth,
        marginInline: token.marginLG,
        marginBlock: token.marginXS
      }
    },
    '&&-size-small &-divider': {
      marginBlock: token.marginLG,
      marginInline: token.marginXS,
      '&-horizontal': {
        marginBlock: token.marginXS,
        marginInline: token.marginLG
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProCardDivider', function (token) {
    var proCardDividerToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genDividerStyle(proCardDividerToken)];
  });
}