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
  return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, token.componentCls, {
    width: 'auto',
    '&-title': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '32px'
    },
    '&-overlay': (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-popover-inner-content"), {
      width: '200px',
      paddingBlock: 0,
      paddingInline: 0,
      paddingBlockEnd: 8
    }), "".concat(token.antCls, "-tree-node-content-wrapper:hover"), {
      backgroundColor: 'transparent'
    }), "".concat(token.antCls, "-tree-draggable-icon"), {
      cursor: 'grab'
    }), "".concat(token.antCls, "-tree-treenode"), (0, _defineProperty2.default)((0, _defineProperty2.default)({
      alignItems: 'center',
      '&:hover': (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-list-item-option"), {
        display: 'block'
      })
    }, "".concat(token.antCls, "-tree-checkbox"), {
      marginInlineEnd: '4px'
    }), "".concat(token.antCls, "-tree-title"), {
      width: '100%'
    }))
  }), "".concat(token.componentCls, "-action-rest-button"), {
    color: token.colorPrimary
  }), "".concat(token.componentCls, "-list"), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBlockStart: 8
  }, "&".concat(token.componentCls, "-list-group"), {
    paddingBlockStart: 0
  }), '&-title', {
    marginBlockStart: '6px',
    marginBlockEnd: '6px',
    paddingInlineStart: '24px',
    color: token.colorTextSecondary,
    fontSize: '12px'
  }), '&-item', {
    display: 'flex',
    alignItems: 'center',
    maxHeight: 24,
    justifyContent: 'space-between',
    '&-title': {
      flex: 1,
      maxWidth: 80,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      wordBreak: 'break-all',
      whiteSpace: 'nowrap'
    },
    '&-option': {
      display: 'none',
      float: 'right',
      cursor: 'pointer',
      '> span': {
        '> span.anticon': {
          color: token.colorPrimary
        }
      },
      '> span + span': {
        marginInlineStart: 4
      }
    }
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ColumnSetting', function (token) {
    var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}