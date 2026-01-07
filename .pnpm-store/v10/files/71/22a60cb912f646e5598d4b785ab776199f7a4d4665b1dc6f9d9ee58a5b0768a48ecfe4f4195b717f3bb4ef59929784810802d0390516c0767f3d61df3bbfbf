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
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'flex',
    fontSize: token.fontSize,
    '& + &': {
      marginBlockStart: 4
    },
    '&-tip': {
      marginInlineStart: 4
    },
    '&-wrapper': (0, _defineProperty2.default)({
      display: 'flex',
      width: '100%'
    }, "".concat(token.componentCls, "-status"), {
      width: '14px'
    }),
    '&-icon': {
      marginInlineEnd: 16
    },
    '&-trend-icon': {
      width: 0,
      height: 0,
      borderInlineEnd: '3.5px solid transparent',
      borderBlockEnd: '9px solid #000',
      borderInlineStart: '3.5px solid transparent',
      '&-up': {
        transform: 'rotate(0deg)'
      },
      '&-down': {
        transform: 'rotate(180deg)'
      }
    },
    '&-content': (0, _defineProperty2.default)({
      width: '100%'
    }, "".concat(token.antCls, "-statistic-content"), {
      '&-value-int': {
        fontSize: token.fontSizeHeading3
      }
    }),
    '&-description': {
      width: '100%'
    }
  }, "".concat(token.antCls, "-statistic-title"), {
    color: token.colorText
  }), '&-trend-up', (0, _defineProperty2.default)({}, "".concat(token.antCls, "-statistic-content"), (0, _defineProperty2.default)({
    color: '#f5222d'
  }, "".concat(token.componentCls, "-trend-icon"), {
    borderBlockEndColor: '#f5222d'
  }))), '&-trend-down', (0, _defineProperty2.default)({}, "".concat(token.antCls, "-statistic-content"), (0, _defineProperty2.default)({
    color: '#389e0d'
  }, "".concat(token.componentCls, "-trend-icon"), {
    borderBlockEndColor: '#52c41a'
  }))), '& &-layout-horizontal', (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'flex',
    justifyContent: 'space-between'
  }, "".concat(token.antCls, "-statistic-title"), {
    marginBlockEnd: 0
  }), "".concat(token.antCls, "-statistic-content-value"), {
    fontWeight: 500
  }), "".concat(token.antCls, "-statistic-title,").concat(token.antCls, "-statistic-content,").concat(token.antCls, "-statistic-content-suffix,").concat(token.antCls, "-statistic-content-prefix,").concat(token.antCls, "-statistic-content-value-decimal"), {
    fontSize: token.fontSize
  })), '& &-layout-inline', (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'inline-flex',
    color: token.colorTextSecondary
  }, "".concat(token.antCls, "-statistic-title"), {
    marginInlineEnd: '6px',
    marginBlockEnd: 0
  }), "".concat(token.antCls, "-statistic-content"), {
    color: token.colorTextSecondary
  }), "".concat(token.antCls, "-statistic-title,").concat(token.antCls, "-statistic-content,").concat(token.antCls, "-statistic-content-suffix,").concat(token.antCls, "-statistic-content-prefix,").concat(token.antCls, "-statistic-content-value-decimal"), {
    fontSize: token.fontSizeSM
  })));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('Statistic', function (token) {
    var proListToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proListToken)];
  });
}