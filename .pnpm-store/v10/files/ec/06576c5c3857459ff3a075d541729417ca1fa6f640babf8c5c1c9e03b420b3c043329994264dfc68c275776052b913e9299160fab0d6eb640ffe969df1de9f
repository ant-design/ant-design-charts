import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  var progressBgCls = "".concat(token.antCls, "-progress-bg");
  return _defineProperty({}, token.componentCls, {
    '&-multiple': {
      paddingBlockStart: 6,
      paddingBlockEnd: 12,
      paddingInline: 8
    },
    '&-progress': {
      '&-success': _defineProperty({}, progressBgCls, {
        backgroundColor: token.colorSuccess
      }),
      '&-error': _defineProperty({}, progressBgCls, {
        backgroundColor: token.colorError
      }),
      '&-warning': _defineProperty({}, progressBgCls, {
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
export function useStyle(prefixCls) {
  return useAntdStyle('InlineErrorFormItem', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}