import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
export function useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish,
    proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return useAntdStyle('ProLayoutSiderMenuStylish', function (token) {
    var siderMenuToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    if (!stylish) return [];
    return [_defineProperty({}, "div".concat(token.proComponentsCls, "-layout"), _defineProperty({}, "".concat(siderMenuToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(siderMenuToken)))];
  });
}