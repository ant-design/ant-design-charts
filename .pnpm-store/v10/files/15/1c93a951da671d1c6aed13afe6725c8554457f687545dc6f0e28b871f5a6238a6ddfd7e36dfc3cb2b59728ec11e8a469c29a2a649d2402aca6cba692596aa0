"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genStepsFormStyle = function genStepsFormStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, {
    '&-container': {
      width: 'max-content',
      minWidth: '420px',
      maxWidth: '100%',
      margin: 'auto'
    },
    '&-steps-container': (0, _defineProperty2.default)({
      maxWidth: '1160px',
      margin: 'auto'
    }, "".concat(token.antCls, "-steps-vertical"), {
      height: '100%'
    }),
    '&-step': {
      display: 'none',
      marginBlockStart: '32px',
      '&-active': {
        display: 'block'
      },
      '> form': {
        maxWidth: '100%'
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('StepsForm', function (token) {
    var loginFormToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genStepsFormStyle(loginFormToken)];
  });
}