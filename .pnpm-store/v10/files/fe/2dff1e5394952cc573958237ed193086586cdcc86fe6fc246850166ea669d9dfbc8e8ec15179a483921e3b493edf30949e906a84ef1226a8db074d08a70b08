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
  return (0, _defineProperty2.default)({}, token.componentCls, {
    marginBlockEnd: 16,
    backgroundColor: (0, _proProvider.setAlpha)(token.colorTextBase, 0.02),
    borderRadius: token.borderRadius,
    border: 'none',
    '&-container': {
      paddingBlock: token.paddingSM,
      paddingInline: token.paddingLG
    },
    '&-info': {
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s',
      color: token.colorTextTertiary,
      '&-content': {
        flex: 1
      },
      '&-option': {
        minWidth: 48,
        paddingInlineStart: 16
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProTableAlert', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}