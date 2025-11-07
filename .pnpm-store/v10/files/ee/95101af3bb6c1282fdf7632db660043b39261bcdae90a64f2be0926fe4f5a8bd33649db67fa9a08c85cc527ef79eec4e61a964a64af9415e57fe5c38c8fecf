import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genStepsFormStyle = function genStepsFormStyle(token) {
  return _defineProperty({}, token.componentCls, {
    '&-container': {
      width: 'max-content',
      minWidth: '420px',
      maxWidth: '100%',
      margin: 'auto'
    },
    '&-steps-container': _defineProperty({
      maxWidth: '1160px',
      margin: 'auto'
    }, "".concat(token.antCls, "-steps-vertical"), {
      height: '100%'
    }),
    '&-step': {
      display: 'none',
      marginBlockStart: '32px',
      '&-active': {
        display: 'block'
      },
      '> form': {
        maxWidth: '100%'
      }
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('StepsForm', function (token) {
    var loginFormToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genStepsFormStyle(loginFormToken)];
  });
}