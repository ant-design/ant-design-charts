import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBlock: token.marginLG,
    marginInline: 0,
    color: token.colorText,
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '38px'
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProCardOperation', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}