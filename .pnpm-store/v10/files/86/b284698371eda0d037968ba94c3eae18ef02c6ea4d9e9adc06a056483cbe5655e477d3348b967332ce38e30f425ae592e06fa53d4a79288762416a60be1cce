import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, {
    '&-chart': {
      display: 'flex',
      flexDirection: 'column',
      marginBlockStart: 8,
      marginBlockEnd: 8,
      '&-left': {
        marginBlockStart: 0,
        marginInlineEnd: '16px'
      },
      '&-right': {
        marginBlockStart: 0,
        marginInlineStart: '16px'
      }
    },
    '&-content': {
      display: 'flex',
      flexDirection: 'column',
      '&-horizontal': _defineProperty({
        flexDirection: 'row'
      }, "".concat(token.componentCls, "-chart"), {
        alignItems: 'center',
        alignSelf: 'flex-start'
      })
    },
    '&-footer': {
      marginBlockStart: 8,
      paddingBlockStart: '16px',
      borderBlockStart: "rgba(0, 0, 0, 0.08) solid ".concat(token.colorBorder)
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('StatisticCard', function (token) {
    var proListToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proListToken)];
  });
}