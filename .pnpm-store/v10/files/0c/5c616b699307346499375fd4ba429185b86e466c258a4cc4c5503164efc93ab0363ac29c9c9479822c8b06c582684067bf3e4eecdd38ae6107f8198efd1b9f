"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var _default = require("./default");
var _simple = require("./simple");
var genAppsLogoComponentsStyle = function genAppsLogoComponentsStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return (0, _defineProperty2.default)({}, token.componentCls, {
    '&-icon': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingInline: 4,
      paddingBlock: 0,
      fontSize: 14,
      lineHeight: '14px',
      height: 28,
      width: 28,
      cursor: 'pointer',
      color: (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextAppListIcon,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextAppListIconHover,
        backgroundColor: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgAppListIconHover
      },
      '&-active': {
        color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextAppListIconHover,
        backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgAppListIconHover
      }
    },
    '&-item-title': {
      marginInlineStart: '16px',
      marginInlineEnd: '8px',
      marginBlockStart: 0,
      marginBlockEnd: '12px',
      fontWeight: 600,
      color: 'rgba(0, 0, 0, 0.88)',
      fontSize: 16,
      opacity: 0.85,
      lineHeight: 1.5,
      '&:first-child': {
        marginBlockStart: 12
      }
    },
    '&-popover': (0, _defineProperty2.default)({}, "".concat(token.antCls, "-popover-arrow"), {
      display: 'none'
    }),
    '&-simple': (0, _simple.genAppsLogoComponentsSimpleListStyle)(token),
    '&-default': (0, _default.genAppsLogoComponentsDefaultListStyle)(token)
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('AppsLogoComponents', function (token) {
    var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genAppsLogoComponentsStyle(proCardToken)];
  });
}