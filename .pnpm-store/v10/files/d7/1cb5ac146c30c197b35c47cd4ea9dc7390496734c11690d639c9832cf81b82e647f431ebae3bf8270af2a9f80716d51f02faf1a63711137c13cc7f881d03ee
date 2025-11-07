import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genFooterToolBarStyle = function genFooterToolBarStyle(token) {
  return _defineProperty({}, token.componentCls, {
    marginBlock: 0,
    marginBlockStart: 48,
    marginBlockEnd: 24,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 16,
    textAlign: 'center',
    '&-list': {
      marginBlockEnd: 8,
      color: token.colorTextSecondary,
      '&-link': {
        color: token.colorTextSecondary,
        textDecoration: token.linkDecoration
      },
      '*:not(:last-child)': {
        marginInlineEnd: 8
      },
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-copyright': {
      fontSize: '14px',
      color: token.colorText
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProLayoutFooter', function (token) {
    var proCardToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genFooterToolBarStyle(proCardToken)];
  });
}