import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
export var turn = new Keyframes('turn', {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '25%': {
    transform: 'rotate(90deg)'
  },
  '50%': {
    transform: 'rotate(180deg)'
  },
  '75%': {
    transform: 'rotate(270deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});
var genProListStyle = function genProListStyle(token) {
  return _defineProperty(_defineProperty(_defineProperty({}, token.componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    zIndex: 1
  }, "".concat(token.antCls, "-table-wrapper ").concat(token.antCls, "-table-pagination").concat(token.antCls, "-pagination"), {
    marginBlockEnd: 0
  }), '&:not(:root):fullscreen', {
    minHeight: '100vh',
    overflow: 'auto',
    background: token.colorBgContainer
  }), '&-extra', {
    marginBlockEnd: 16
  }), '&-polling', _defineProperty({}, "".concat(token.componentCls, "-list-toolbar-setting-item"), {
    '.anticon.anticon-reload': {
      transform: 'rotate(0deg)',
      animationName: turn,
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    }
  })), "td".concat(token.antCls, "-table-cell"), {
    '>a': {
      fontSize: token.fontSize
    }
  }), "".concat(token.antCls, "-table").concat(token.antCls, "-table-tbody").concat(token.antCls, "-table-wrapper:only-child").concat(token.antCls, "-table"), {
    marginBlock: 0,
    marginInline: 0
  }), "".concat(token.antCls, "-table").concat(token.antCls, "-table-middle ").concat(token.componentCls), _defineProperty({
    marginBlock: 0,
    marginInline: -8
  }, "".concat(token.proComponentsCls, "-card"), {
    backgroundColor: 'initial'
  })), '& &-search', _defineProperty(_defineProperty(_defineProperty(_defineProperty({
    marginBlockEnd: '16px',
    background: token.colorBgContainer,
    '&-ghost': {
      background: 'transparent'
    }
  }, "&".concat(token.componentCls, "-form"), {
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 16,
    overflow: 'unset'
  }), '&-light-filter', {
    marginBlockEnd: 0,
    paddingBlock: 0,
    paddingInline: 0
  }), '&-form-option', _defineProperty(_defineProperty(_defineProperty({}, "".concat(token.antCls, "-form-item"), {}), "".concat(token.antCls, "-form-item-label"), {}), "".concat(token.antCls, "-form-item-control-input"), {})), '@media (max-width: 575px)', _defineProperty({}, token.componentCls, _defineProperty({
    height: 'auto !important',
    paddingBlockEnd: '24px'
  }, "".concat(token.antCls, "-form-item-label"), {
    minWidth: '80px',
    textAlign: 'start'
  })))), '&-toolbar', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
    paddingInline: 24,
    paddingBlock: 0,
    '&-option': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    '&-title': {
      flex: '1',
      color: token.colorTextLabel,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '24px',
      opacity: '0.85'
    }
  })), "@media (max-width: ".concat(token.screenXS, ")px"), _defineProperty({}, token.componentCls, _defineProperty({}, "".concat(token.antCls, "-table"), {
    width: '100%',
    overflowX: 'auto',
    '&-thead > tr,&-tbody > tr': {
      '> th,> td': {
        whiteSpace: 'pre',
        '>span': {
          display: 'block'
        }
      }
    }
  }))), '@media (max-width: 575px)', _defineProperty({}, "".concat(token.componentCls, "-toolbar"), {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 'auto',
    marginBlockEnd: '16px',
    marginInlineStart: '16px',
    paddingBlock: 8,
    paddingInline: 8,
    paddingBlockStart: '16px',
    lineHeight: 'normal',
    '&-title': {
      marginBlockEnd: 16
    },
    '&-option': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    },
    '&-default-option': {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }));
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProTable', function (token) {
    var proListToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProListStyle(proListToken)];
  });
}