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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBlock: token.marginLG,
    marginInline: 0,
    color: token.colorText,
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '38px'
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProCardOperation', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}