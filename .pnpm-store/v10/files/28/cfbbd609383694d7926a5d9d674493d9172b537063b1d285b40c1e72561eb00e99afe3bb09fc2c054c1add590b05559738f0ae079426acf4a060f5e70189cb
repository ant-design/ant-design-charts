"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genGlobalHeaderStyle = function genGlobalHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3;
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    position: 'relative',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    marginBlock: 0,
    marginInline: 16,
    height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
    boxSizing: 'border-box',
    '> a': {
      height: '100%'
    }
  }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
    marginInlineEnd: 16
  }), '&-collapsed-button', {
    minHeight: '22px',
    color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorHeaderTitle,
    fontSize: '18px',
    marginInlineEnd: '16px'
  }), '&-logo', {
    position: 'relative',
    marginInlineEnd: '16px',
    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      minHeight: '22px',
      fontSize: '20px'
    },
    img: {
      height: '28px'
    },
    h1: {
      height: '32px',
      marginBlock: 0,
      marginInline: 0,
      marginInlineStart: 8,
      fontWeight: '600',
      color: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorHeaderTitle) || token.colorTextHeading,
      fontSize: '18px',
      lineHeight: '32px'
    },
    '&-mix': {
      display: 'flex',
      alignItems: 'center'
    }
  }), '&-logo-mobile', {
    minWidth: '24px',
    marginInlineEnd: 0
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProLayoutGlobalHeader', function (token) {
    var GlobalHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genGlobalHeaderStyle(GlobalHeaderToken)];
  });
}