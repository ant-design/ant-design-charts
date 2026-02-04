"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionsInputAnimal = void 0;
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cssinjs = require("@ant-design/cssinjs");
var _proProvider = require("@ant-design/pro-provider");
var actionsInputAnimal = exports.actionsInputAnimal = new _cssinjs.Keyframes('actionsInputAnimal', {
  '0%': {
    width: '0px'
  },
  '30%': {
    width: '20px'
  },
  '100%': {
    width: '120px'
  }
});
var genProHelpStyle = function genProHelpStyle(token) {
  return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.componentCls, "-popover-text"), {
    color: token.colorPrimary,
    cursor: 'pointer',
    boxSizing: 'border-box'
  }), "".concat(token.componentCls, "-popover-content"), {
    maxWidth: 300,
    height: '600px',
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'auto',
    paddingInline: 20,
    paddingBlockStart: 24,
    paddingBlockEnd: 32,
    boxSizing: 'border-box'
  }), "".concat(token.componentCls, "-left-panel"), {
    overflow: 'auto',
    boxSizing: 'border-box',
    borderInlineEnd: "".concat(token === null || token === void 0 ? void 0 : token.lineWidth, "px solid ").concat(token === null || token === void 0 ? void 0 : token.colorBorderSecondary),
    minHeight: '648px',
    minWidth: 190,
    maxWidth: 190,
    '&-menu': {
      width: 190,
      boxSizing: 'border-box',
      minWidth: 190,
      height: 'calc(100% - 40px)',
      marginBlock: 20
    }
  }), "".concat(token.componentCls, "-content-panel"), {
    minWidth: '200px',
    overflow: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    minHeight: '648px',
    img: {
      width: '100%'
    }
  }), "".concat(token.componentCls, "-content-render"), {
    paddingBlock: 20,
    paddingInline: 24,
    flex: 1
  }), "".concat(token.componentCls, "-content-footer"), {
    padding: 8
  }), "".concat(token.componentCls, "-actions"), {
    display: 'flex',
    boxSizing: 'border-box',
    gap: token.marginSM,
    '&-item': {
      display: 'flex',
      boxSizing: 'border-box',
      alignItems: 'center',
      justifyItems: 'center',
      padding: 4,
      height: 24,
      minWidth: 24,
      cursor: 'pointer',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover
      }
    },
    '&-input': {
      margin: 0,
      maxWidth: 120,
      padding: 0,
      width: '120px',
      boxSizing: 'border-box',
      borderRadius: token.borderRadius,
      backgroundColor: token.colorBgTextHover,
      animationName: actionsInputAnimal,
      animationDuration: '0.1s',
      animationTimingFunction: 'linear'
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProHelp', function (token) {
    var ProLayoutHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProHelpStyle(ProLayoutHeaderToken)];
  });
}