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
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    '&&': {
      padding: 24
    }
  }, "".concat(token.antCls, "-form-item"), {
    marginBlock: 0
  }), "".concat(token.proComponentsCls, "-form-group-title"), {
    marginBlock: 0
  }), '&-row', {
    rowGap: 24,
    '&-split': (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.proComponentsCls, "-form-group"), {
      display: 'flex',
      alignItems: 'center',
      gap: token.marginXS
    }), '&:last-child', {
      marginBlockEnd: 12
    }),
    '&-split-line': {
      '&:after': {
        position: 'absolute',
        width: '100%',
        content: '""',
        height: 1,
        insetBlockEnd: -12,
        borderBlockEnd: "1px dashed ".concat(token.colorSplit)
      }
    }
  }), '&-collapse-button', {
    display: 'flex',
    alignItems: 'center',
    color: token.colorPrimary
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('QueryFilter', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}