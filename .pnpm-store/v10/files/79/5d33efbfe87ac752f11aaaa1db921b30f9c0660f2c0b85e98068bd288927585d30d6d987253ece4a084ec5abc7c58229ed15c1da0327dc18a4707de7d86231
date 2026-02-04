import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty(_defineProperty({}, "".concat(token.componentCls, "-collapse-label"), {
    paddingInline: 1,
    paddingBlock: 1
  }), "".concat(token.componentCls, "-container"), _defineProperty({}, "".concat(token.antCls, "-form-item"), {
    marginBlockEnd: 0
  }));
};
export function useStyle(prefixCls) {
  return useAntdStyle('LightWrapper', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}