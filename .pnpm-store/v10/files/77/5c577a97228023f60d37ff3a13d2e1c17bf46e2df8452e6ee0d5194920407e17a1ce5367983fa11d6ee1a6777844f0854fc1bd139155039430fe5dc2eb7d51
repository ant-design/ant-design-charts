import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genDrawerFormStyle = function genDrawerFormStyle(token) {
  return _defineProperty({}, token.componentCls, {
    '&-sidebar-dragger': {
      width: '5px',
      cursor: 'ew-resize',
      padding: '4px 0 0',
      borderTop: '1px solid transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 100,
      backgroundColor: 'transparent',
      '&-min-disabled': {
        cursor: 'w-resize'
      },
      '&-max-disabled': {
        cursor: 'e-resize'
      }
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('DrawerForm', function (token) {
    var drawerFormToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genDrawerFormStyle(drawerFormToken)];
  });
}