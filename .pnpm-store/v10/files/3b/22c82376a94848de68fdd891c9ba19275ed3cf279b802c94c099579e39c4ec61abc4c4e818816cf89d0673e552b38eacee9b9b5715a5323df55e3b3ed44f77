import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genGridContentStyle = function genGridContentStyle(token) {
  return _defineProperty({}, token.componentCls, {
    width: '100%',
    '&-wide': {
      maxWidth: 1152,
      margin: '0 auto'
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProLayoutGridContent', function (token) {
    var GridContentToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genGridContentStyle(GridContentToken)];
  });
}