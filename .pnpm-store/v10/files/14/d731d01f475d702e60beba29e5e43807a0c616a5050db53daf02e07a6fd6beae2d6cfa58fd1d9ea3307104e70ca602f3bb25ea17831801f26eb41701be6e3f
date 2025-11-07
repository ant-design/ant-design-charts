import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
export var cardLoading = new Keyframes('card-loading', {
  '0%': {
    backgroundPosition: '0 50%'
  },
  '50%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, _defineProperty(_defineProperty({
    '&-loading': {
      overflow: 'hidden'
    },
    '&-loading &-body': {
      userSelect: 'none'
    }
  }, "".concat(token.componentCls, "-loading-content"), {
    width: '100%',
    p: {
      marginBlock: 0,
      marginInline: 0
    }
  }), "".concat(token.componentCls, "-loading-block"), {
    height: '14px',
    marginBlock: '4px',
    background: "linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))",
    backgroundSize: '600% 600%',
    borderRadius: token.borderRadius,
    animationName: cardLoading,
    animationDuration: '1.4s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  }));
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProCardLoading', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}