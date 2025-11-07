import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty(_defineProperty(_defineProperty({}, "".concat(token.componentCls, "-label"), {
    cursor: 'pointer'
  }), "".concat(token.componentCls, "-overlay"), {
    minWidth: '200px',
    marginBlockStart: '4px'
  }), "".concat(token.componentCls, "-content"), {
    paddingBlock: 16,
    paddingInline: 16
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('FilterDropdown', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}