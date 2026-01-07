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
    display: 'inline-flex',
    alignItems: 'center',
    maxWidth: '100%',
    '&-icon': {
      display: 'block',
      marginInlineStart: '4px',
      cursor: 'pointer',
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-title': {
      display: 'inline-flex',
      flex: '1'
    },
    '&-subtitle ': {
      marginInlineStart: 8,
      color: token.colorTextSecondary,
      fontWeight: 'normal',
      fontSize: token.fontSize,
      whiteSpace: 'nowrap'
    },
    '&-title-ellipsis': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'keep-all'
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('LabelIconTip', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}