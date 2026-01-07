import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty(_defineProperty(_defineProperty({}, token.componentCls, {
    width: 'auto',
    '&-title': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '32px'
    },
    '&-overlay': _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(token.antCls, "-popover-inner-content"), {
      width: '200px',
      paddingBlock: 0,
      paddingInline: 0,
      paddingBlockEnd: 8
    }), "".concat(token.antCls, "-tree-node-content-wrapper:hover"), {
      backgroundColor: 'transparent'
    }), "".concat(token.antCls, "-tree-draggable-icon"), {
      cursor: 'grab'
    }), "".concat(token.antCls, "-tree-treenode"), _defineProperty(_defineProperty({
      alignItems: 'center',
      '&:hover': _defineProperty({}, "".concat(token.componentCls, "-list-item-option"), {
        display: 'block'
      })
    }, "".concat(token.antCls, "-tree-checkbox"), {
      marginInlineEnd: '4px'
    }), "".concat(token.antCls, "-tree-title"), {
      width: '100%'
    }))
  }), "".concat(token.componentCls, "-action-rest-button"), {
    color: token.colorPrimary
  }), "".concat(token.componentCls, "-list"), _defineProperty(_defineProperty(_defineProperty({
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
export function useStyle(prefixCls) {
  return useAntdStyle('ColumnSetting', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}