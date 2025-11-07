import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
export function useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish;
  return useAntdStyle('ProLayoutPageContainerStylish', function (token) {
    var stylishToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    if (!stylish) return [];
    return [_defineProperty({}, "div".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken))];
  });
}