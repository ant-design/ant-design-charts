import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: 8,
    paddingInlineStart: 8,
    paddingInlineEnd: 8,
    borderBlockStart: "1px solid ".concat(token.colorSplit)
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('DropdownFooter', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}