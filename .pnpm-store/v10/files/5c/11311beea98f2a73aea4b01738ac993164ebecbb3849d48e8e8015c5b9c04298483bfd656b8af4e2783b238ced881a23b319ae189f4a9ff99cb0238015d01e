import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genLightFilterStyle = function genLightFilterStyle(token) {
  return _defineProperty({}, token.componentCls, {
    lineHeight: '30px',
    // @see https://yuque.antfin-inc.com/tech-ui/topics/523
    '&::before': {
      display: 'block',
      height: 0,
      visibility: 'hidden',
      content: "'.'"
    },
    '&-small': {
      lineHeight: token.lineHeight
    },
    '&-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.marginXS
    },
    '&-item': _defineProperty({
      whiteSpace: 'nowrap'
    }, "".concat(token.antCls, "-form-item"), {
      marginBlock: 0
    }),
    '&-line': {
      minWidth: '198px'
    },
    '&-line:not(:first-child)': {
      marginBlockStart: '16px',
      marginBlockEnd: 8
    },
    '&-collapse-icon': {
      width: token.controlHeight,
      height: token.controlHeight,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '&-effective': _defineProperty({}, "".concat(token.componentCls, "-collapse-icon"), {
      backgroundColor: token.colorBgTextHover
    })
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('LightFilter', function (token) {
    var proCardToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genLightFilterStyle(proCardToken)];
  });
}