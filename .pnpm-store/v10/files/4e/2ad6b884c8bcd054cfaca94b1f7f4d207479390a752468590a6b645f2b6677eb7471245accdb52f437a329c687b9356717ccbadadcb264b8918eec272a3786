"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genProLayoutHeaderStyle = function genProLayoutHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4;
  return (0, _defineProperty2.default)({}, "".concat(token.proComponentsCls, "-layout"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-layout-header").concat(token.componentCls), {
    height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
    lineHeight: "".concat(((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56, "px"),
    // hitu 用了这个属性，不能删除哦 @南取
    zIndex: 19,
    width: '100%',
    paddingBlock: 0,
    paddingInline: 0,
    borderBlockEnd: "1px solid ".concat(token.colorSplit),
    backgroundColor: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgHeader) || 'rgba(255, 255, 255, 0.4)',
    WebkitBackdropFilter: 'blur(8px)',
    backdropFilter: 'blur(8px)',
    transition: 'background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    '&-fixed-header': {
      position: 'fixed',
      insetBlockStart: 0,
      width: '100%',
      zIndex: 100,
      insetInlineEnd: 0
    },
    '&-fixed-header-scroll': {
      backgroundColor: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgScrollHeader) || 'rgba(255, 255, 255, 0.8)'
    },
    '&-header-actions': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16',
      cursor: 'pointer',
      '& &-item': {
        paddingBlock: 0,
        paddingInline: 8,
        '&:hover': {
          color: token.colorText
        }
      }
    },
    '&-header-realDark': {
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)'
    },
    '&-header-actions-header-action': {
      transition: 'width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
    }
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProLayoutHeader', function (token) {
    var ProLayoutHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutHeaderStyle(ProLayoutHeaderToken)];
  });
}