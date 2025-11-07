"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genFooterToolBarStyle = function genFooterToolBarStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, {
    position: 'fixed',
    insetInlineEnd: 0,
    bottom: 0,
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingInline: 24,
    paddingBlock: 0,
    boxSizing: 'border-box',
    lineHeight: '64px',
    /* A way to reset the style of the component. */
    backgroundColor: (0, _proProvider.setAlpha)(token.colorBgElevated, 0.6),
    borderBlockStart: "1px solid ".concat(token.colorSplit),
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)',
    color: token.colorText,
    transition: 'all 0.2s ease 0s',
    '&-left': {
      flex: 1,
      color: token.colorText
    },
    '&-right': {
      color: token.colorText,
      '> *': {
        marginInlineEnd: 8,
        '&:last-child': {
          marginBlock: 0,
          marginInline: 0
        }
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProLayoutFooterToolbar', function (token) {
    var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genFooterToolBarStyle(proCardToken)];
  });
}