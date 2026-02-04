"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardLoading = void 0;
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var _proProvider = require("@ant-design/pro-provider");
var cardLoading = exports.cardLoading = new _cssinjs.Keyframes('card-loading', {
  '0%': {
    backgroundPosition: '0 50%'
  },
  '50%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
var genProStyle = function genProStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)({
    '&-loading': {
      overflow: 'hidden'
    },
    '&-loading &-body': {
      userSelect: 'none'
    }
  }, "".concat(token.componentCls, "-loading-content"), {
    width: '100%',
    p: {
      marginBlock: 0,
      marginInline: 0
    }
  }), "".concat(token.componentCls, "-loading-block"), {
    height: '14px',
    marginBlock: '4px',
    background: "linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))",
    backgroundSize: '600% 600%',
    borderRadius: token.borderRadius,
    animationName: cardLoading,
    animationDuration: '1.4s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProCardLoading', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}