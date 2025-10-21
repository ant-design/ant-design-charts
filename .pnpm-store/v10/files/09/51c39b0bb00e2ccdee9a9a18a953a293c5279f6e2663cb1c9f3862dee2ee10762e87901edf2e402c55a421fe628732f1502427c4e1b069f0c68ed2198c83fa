import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, {
    display: 'inline-flex',
    alignItems: 'center',
    maxWidth: '100%',
    '&-icon': {
      display: 'block',
      marginInlineStart: '4px',
      cursor: 'pointer',
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-title': {
      display: 'inline-flex',
      flex: '1'
    },
    '&-subtitle ': {
      marginInlineStart: 8,
      color: token.colorTextSecondary,
      fontWeight: 'normal',
      fontSize: token.fontSize,
      whiteSpace: 'nowrap'
    },
    '&-title-ellipsis': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'keep-all'
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('LabelIconTip', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}