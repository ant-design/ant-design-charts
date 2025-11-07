import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty({
    '&&': {
      padding: 24
    }
  }, "".concat(token.antCls, "-form-item"), {
    marginBlock: 0
  }), "".concat(token.proComponentsCls, "-form-group-title"), {
    marginBlock: 0
  }), '&-row', {
    rowGap: 24,
    '&-split': _defineProperty(_defineProperty({}, "".concat(token.proComponentsCls, "-form-group"), {
      display: 'flex',
      alignItems: 'center',
      gap: token.marginXS
    }), '&:last-child', {
      marginBlockEnd: 12
    }),
    '&-split-line': {
      '&:after': {
        position: 'absolute',
        width: '100%',
        content: '""',
        height: 1,
        insetBlockEnd: -12,
        borderBlockEnd: "1px dashed ".concat(token.colorSplit)
      }
    }
  }), '&-collapse-button', {
    display: 'flex',
    alignItems: 'center',
    color: token.colorPrimary
  }));
};
export function useStyle(prefixCls) {
  return useAntdStyle('QueryFilter', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}