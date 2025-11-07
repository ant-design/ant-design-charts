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
  var progressBgCls = "".concat(token.antCls, "-progress-bg");
  return (0, _defineProperty2.default)({}, token.componentCls, {
    '&-multiple': {
      paddingBlockStart: 6,
      paddingBlockEnd: 12,
      paddingInline: 8
    },
    '&-progress': {
      '&-success': (0, _defineProperty2.default)({}, progressBgCls, {
        backgroundColor: token.colorSuccess
      }),
      '&-error': (0, _defineProperty2.default)({}, progressBgCls, {
        backgroundColor: token.colorError
      }),
      '&-warning': (0, _defineProperty2.default)({}, progressBgCls, {
        backgroundColor: token.colorWarning
      })
    },
    '&-rule': {
      display: 'flex',
      alignItems: 'center',
      '&-icon': {
        '&-default': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '14px',
          height: '22px',
          '&-circle': {
            width: '6px',
            height: '6px',
            backgroundColor: token.colorTextSecondary,
            borderRadius: '4px'
          }
        },
        '&-loading': {
          color: token.colorPrimary
        },
        '&-error': {
          color: token.colorError
        },
        '&-success': {
          color: token.colorSuccess
        }
      },
      '&-text': {
        color: token.colorText
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('InlineErrorFormItem', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}