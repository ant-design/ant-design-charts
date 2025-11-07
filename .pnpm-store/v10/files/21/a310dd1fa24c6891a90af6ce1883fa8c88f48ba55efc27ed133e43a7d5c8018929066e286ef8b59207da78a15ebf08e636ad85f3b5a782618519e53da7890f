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
    '&-title': {
      marginBlockEnd: token.marginXL,
      fontWeight: 'bold'
    },
    '&-container': (0, _defineProperty2.default)({
      flexWrap: 'wrap',
      maxWidth: '100%'
    }, "> div".concat(token.antCls, "-space-item"), {
      maxWidth: '100%'
    }),
    '&-twoLine': (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
      display: 'block',
      width: '100%'
    }, "".concat(token.componentCls, "-title"), {
      width: '100%',
      margin: '8px 0'
    }), "".concat(token.componentCls, "-container"), {
      paddingInlineStart: 16
    }), "".concat(token.antCls, "-space-item,").concat(token.antCls, "-form-item"), {
      width: '100%'
    }), "".concat(token.antCls, "-form-item"), {
      '&-control': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '&-input': {
          alignItems: 'center',
          justifyContent: 'flex-end',
          '&-content': {
            flex: 'none'
          }
        }
      }
    })
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProFormGroup', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}