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
  return (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-pro"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form:not(").concat(token.antCls, "-form-horizontal)"), (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)({}, "&-item:not(".concat(token.componentCls, "-item-show-label)"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form-item-label"), {
    display: 'none'
  }))))), token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)({
    maxWidth: '100%',
    '&-item': {
      '&&-show-label': (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form-item-label"), {
        display: 'inline-block'
      }),
      '&&-default:first-child': {
        'div:first-of-type': (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form-item"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form-item-label"), {
          display: 'inline-block'
        }))
      },
      '&&-default:not(:first-child)': {
        'div:first-of-type': (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form-item"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-form-item-label"), {
          display: 'none'
        }))
      }
    },
    '&-action': {
      display: 'flex',
      height: token.controlHeight,
      marginBlockEnd: token.marginLG,
      lineHeight: token.controlHeight + 'px',
      '&-small': {
        height: token.controlHeightSM,
        lineHeight: token.controlHeightSM
      }
    },
    '&-action-icon': {
      marginInlineStart: 8,
      cursor: 'pointer',
      transition: 'color 0.3s ease-in-out',
      '&:hover': {
        color: token.colorPrimaryTextHover
      }
    }
  }, "".concat(token.proComponentsCls, "-card ").concat(token.proComponentsCls, "-card-extra"), (0, _defineProperty2.default)({}, token.componentCls, {
    '&-action': {
      marginBlockEnd: 0
    }
  })), '&-creator-button-top', {
    marginBlockEnd: 24
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProFormList', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}