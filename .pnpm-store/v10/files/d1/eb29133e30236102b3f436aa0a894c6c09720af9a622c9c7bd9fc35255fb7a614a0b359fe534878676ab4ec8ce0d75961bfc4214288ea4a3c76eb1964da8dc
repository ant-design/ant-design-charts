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
    '&-chart': {
      display: 'flex',
      flexDirection: 'column',
      marginBlockStart: 8,
      marginBlockEnd: 8,
      '&-left': {
        marginBlockStart: 0,
        marginInlineEnd: '16px'
      },
      '&-right': {
        marginBlockStart: 0,
        marginInlineStart: '16px'
      }
    },
    '&-content': {
      display: 'flex',
      flexDirection: 'column',
      '&-horizontal': (0, _defineProperty2.default)({
        flexDirection: 'row'
      }, "".concat(token.componentCls, "-chart"), {
        alignItems: 'center',
        alignSelf: 'flex-start'
      })
    },
    '&-footer': {
      marginBlockStart: 8,
      paddingBlockStart: '16px',
      borderBlockStart: "rgba(0, 0, 0, 0.08) solid ".concat(token.colorBorder)
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('StatisticCard', function (token) {
    var proListToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proListToken)];
  });
}