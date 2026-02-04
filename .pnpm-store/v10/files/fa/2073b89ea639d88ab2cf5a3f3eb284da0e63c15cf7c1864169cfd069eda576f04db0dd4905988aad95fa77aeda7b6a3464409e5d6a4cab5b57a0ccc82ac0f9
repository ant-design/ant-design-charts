import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genDividerStyle = function genDividerStyle(token) {
  var componentCls = token.componentCls;
  return _defineProperty({}, componentCls, {
    '&-divider': {
      flex: 'none',
      width: token.lineWidth,
      marginInline: token.marginXS,
      marginBlock: token.marginLG,
      backgroundColor: token.colorSplit,
      '&-horizontal': {
        width: 'initial',
        height: token.lineWidth,
        marginInline: token.marginLG,
        marginBlock: token.marginXS
      }
    },
    '&&-size-small &-divider': {
      marginBlock: token.marginLG,
      marginInline: token.marginXS,
      '&-horizontal': {
        marginBlock: token.marginXS,
        marginInline: token.marginLG
      }
    }
  });
};
export default function useStyle(prefixCls) {
  return useAntdStyle('ProCardDivider', function (token) {
    var proCardDividerToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genDividerStyle(proCardDividerToken)];
  });
}