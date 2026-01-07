import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty(_defineProperty({}, "".concat(token.antCls, "-pro"), _defineProperty({}, "".concat(token.antCls, "-form:not(").concat(token.antCls, "-form-horizontal)"), _defineProperty({}, token.componentCls, _defineProperty({}, "&-item:not(".concat(token.componentCls, "-item-show-label)"), _defineProperty({}, "".concat(token.antCls, "-form-item-label"), {
    display: 'none'
  }))))), token.componentCls, _defineProperty(_defineProperty({
    maxWidth: '100%',
    '&-item': {
      '&&-show-label': _defineProperty({}, "".concat(token.antCls, "-form-item-label"), {
        display: 'inline-block'
      }),
      '&&-default:first-child': {
        'div:first-of-type': _defineProperty({}, "".concat(token.antCls, "-form-item"), _defineProperty({}, "".concat(token.antCls, "-form-item-label"), {
          display: 'inline-block'
        }))
      },
      '&&-default:not(:first-child)': {
        'div:first-of-type': _defineProperty({}, "".concat(token.antCls, "-form-item"), _defineProperty({}, "".concat(token.antCls, "-form-item-label"), {
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
  }, "".concat(token.proComponentsCls, "-card ").concat(token.proComponentsCls, "-card-extra"), _defineProperty({}, token.componentCls, {
    '&-action': {
      marginBlockEnd: 0
    }
  })), '&-creator-button-top', {
    marginBlockEnd: 24
  }));
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProFormList', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}