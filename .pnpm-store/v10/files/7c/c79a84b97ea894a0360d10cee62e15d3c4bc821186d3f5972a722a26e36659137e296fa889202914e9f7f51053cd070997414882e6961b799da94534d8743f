import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProListStyle = function genProListStyle(token) {
  return _defineProperty({}, token.componentCls, {
    '&-icon': {
      marginInlineEnd: 8,
      color: token.colorTextSecondary,
      cursor: 'grab !important',
      padding: 4,
      fontSize: 12,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: token.colorText,
        backgroundColor: token.colorInfoBg
      }
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('DragSortTable', function (token) {
    var proListToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProListStyle(proListToken)];
  });
}