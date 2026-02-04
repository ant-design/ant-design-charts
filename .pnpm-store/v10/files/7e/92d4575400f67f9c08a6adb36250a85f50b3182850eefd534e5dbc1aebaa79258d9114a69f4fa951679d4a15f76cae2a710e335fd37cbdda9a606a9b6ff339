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
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'inline-flex',
    gap: token.marginXXS,
    alignItems: 'center',
    height: '30px',
    paddingBlock: 0,
    paddingInline: 8,
    fontSize: token.fontSize,
    lineHeight: '30px',
    borderRadius: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: token.colorBgTextHover
    },
    '&-active': (0, _defineProperty2.default)({
      paddingBlock: 0,
      paddingInline: 8,
      backgroundColor: token.colorBgTextHover
    }, "&".concat(token.componentCls, "-allow-clear:hover:not(").concat(token.componentCls, "-disabled)"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.componentCls, "-arrow"), {
      display: 'none'
    }), "".concat(token.componentCls, "-close"), {
      display: 'inline-flex'
    }))
  }, "".concat(token.antCls, "-select"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-select-clear"), {
    borderRadius: '50%'
  })), "".concat(token.antCls, "-picker"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-picker-clear"), {
    borderRadius: '50%'
  })), '&-icon', (0, _defineProperty2.default)((0, _defineProperty2.default)({
    color: token.colorIcon,
    transition: 'color 0.3s',
    fontSize: 12,
    verticalAlign: 'middle'
  }, "&".concat(token.componentCls, "-close"), {
    display: 'none',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: token.colorTextPlaceholder,
    borderRadius: '50%'
  }), '&:hover', {
    color: token.colorIconHover
  })), '&-disabled', (0, _defineProperty2.default)({
    color: token.colorTextPlaceholder,
    cursor: 'not-allowed'
  }, "".concat(token.componentCls, "-icon"), {
    color: token.colorTextPlaceholder
  })), '&-small', (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    height: '24px',
    paddingBlock: 0,
    paddingInline: 4,
    fontSize: token.fontSizeSM,
    lineHeight: '24px'
  }, "&".concat(token.componentCls, "-active"), {
    paddingBlock: 0,
    paddingInline: 8
  }), "".concat(token.componentCls, "-icon"), {
    paddingBlock: 0,
    paddingInline: 0
  }), "".concat(token.componentCls, "-close"), {
    marginBlockStart: '-2px',
    paddingBlock: 4,
    paddingInline: 4,
    fontSize: '6px'
  })), '&-bordered', {
    height: '32px',
    paddingBlock: 0,
    paddingInline: 8,
    border: "".concat(token.lineWidth, "px solid ").concat(token.colorBorder),
    borderRadius: '@border-radius-base'
  }), '&-bordered&-small', {
    height: '24px',
    paddingBlock: 0,
    paddingInline: 8
  }), '&-bordered&-active', {
    backgroundColor: token.colorBgContainer
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('FieldLabel', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}