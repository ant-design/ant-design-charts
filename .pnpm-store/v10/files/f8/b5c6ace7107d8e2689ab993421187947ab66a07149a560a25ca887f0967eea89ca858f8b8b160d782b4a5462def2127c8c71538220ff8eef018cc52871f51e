"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genLightFilterStyle = function genLightFilterStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, {
    lineHeight: '30px',
    // @see https://yuque.antfin-inc.com/tech-ui/topics/523
    '&::before': {
      display: 'block',
      height: 0,
      visibility: 'hidden',
      content: "'.'"
    },
    '&-small': {
      lineHeight: token.lineHeight
    },
    '&-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.marginXS
    },
    '&-item': (0, _defineProperty2.default)({
      whiteSpace: 'nowrap'
    }, "".concat(token.antCls, "-form-item"), {
      marginBlock: 0
    }),
    '&-line': {
      minWidth: '198px'
    },
    '&-line:not(:first-child)': {
      marginBlockStart: '16px',
      marginBlockEnd: 8
    },
    '&-collapse-icon': {
      width: token.controlHeight,
      height: token.controlHeight,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '&-effective': (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-collapse-icon"), {
      backgroundColor: token.colorBgTextHover
    })
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('LightFilter', function (token) {
    var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genLightFilterStyle(proCardToken)];
  });
}