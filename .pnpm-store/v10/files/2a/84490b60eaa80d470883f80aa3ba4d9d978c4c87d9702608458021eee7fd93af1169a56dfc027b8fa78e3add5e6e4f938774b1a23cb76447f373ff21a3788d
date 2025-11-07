"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genActionsStyle = function genActionsStyle(token) {
  var componentCls = token.componentCls,
    antCls = token.antCls;
  return (0, _defineProperty2.default)({}, "".concat(componentCls, "-actions"), (0, _defineProperty2.default)((0, _defineProperty2.default)({
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 0,
    listStyle: 'none',
    display: 'flex',
    gap: token.marginXS,
    background: token.colorBgContainer,
    borderBlockStart: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit),
    minHeight: 42
  }, "& > *", {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    display: 'flex',
    cursor: 'pointer',
    color: token.colorTextSecondary,
    transition: 'color 0.3s',
    '&:hover': {
      color: token.colorPrimaryHover
    }
  }), "& > li > div", {
    flex: 1,
    width: '100%',
    marginBlock: token.marginSM,
    marginInline: 0,
    color: token.colorTextSecondary,
    textAlign: 'center',
    a: {
      color: token.colorTextSecondary,
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryHover
      }
    },
    div: (0, _defineProperty2.default)((0, _defineProperty2.default)({
      position: 'relative',
      display: 'block',
      minWidth: 32,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      cursor: 'pointer',
      '&:hover': {
        color: token.colorPrimaryHover,
        transition: 'color 0.3s'
      }
    }, "a:not(".concat(antCls, "-btn),\n            > .anticon"), {
      display: 'inline-block',
      width: '100%',
      color: token.colorTextSecondary,
      lineHeight: '22px',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryHover
      }
    }), '.anticon', {
      fontSize: token.cardActionIconSize,
      lineHeight: '22px'
    }),
    '&:not(:last-child)': {
      borderInlineEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
    }
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProCardActions', function (token) {
    var proCardActionsToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      cardActionIconSize: 16
    });
    return [genActionsStyle(proCardActionsToken)];
  });
}