import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setAlpha, useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, {
    marginBlockEnd: 16,
    backgroundColor: setAlpha(token.colorTextBase, 0.02),
    borderRadius: token.borderRadius,
    border: 'none',
    '&-container': {
      paddingBlock: token.paddingSM,
      paddingInline: token.paddingLG
    },
    '&-info': {
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s',
      color: token.colorTextTertiary,
      '&-content': {
        flex: 1
      },
      '&-option': {
        minWidth: 48,
        paddingInlineStart: 16
      }
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProTableAlert', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}