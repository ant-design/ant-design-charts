"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
  var _token$layout, _token$layout2;
  return (0, _defineProperty2.default)({}, token.componentCls, {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    '.anticon': {
      color: 'inherit'
    },
    '&-main': {
      display: 'flex',
      height: '100%',
      paddingInlineStart: '16px',
      '&-left': (0, _defineProperty2.default)({
        display: 'flex',
        alignItems: 'center'
      }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
        marginInlineEnd: 16,
        marginInlineStart: -8
      })
    },
    '&-wide': {
      maxWidth: 1152,
      margin: '0 auto'
    },
    '&-logo': {
      position: 'relative',
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      overflow: 'hidden',
      '> *:first-child': {
        display: 'flex',
        alignItems: 'center',
        minHeight: '22px',
        fontSize: '22px'
      },
      '> *:first-child > img': {
        display: 'inline-block',
        height: '32px',
        verticalAlign: 'middle'
      },
      '> *:first-child > h1': {
        display: 'inline-block',
        marginBlock: 0,
        marginInline: 0,
        lineHeight: '24px',
        marginInlineStart: 6,
        fontWeight: '600',
        fontSize: '16px',
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorHeaderTitle,
        verticalAlign: 'top'
      }
    },
    '&-menu': {
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 6,
      paddingBlock: 6,
      lineHeight: "".concat(Math.max((((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56) - 12, 40), "px")
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProLayoutTopNavHeader', function (token) {
    var topNavHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genTopNavHeaderStyle(topNavHeaderToken)];
  });
}