import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    display: 'flex',
    fontSize: token.fontSize,
    '& + &': {
      marginBlockStart: 4
    },
    '&-tip': {
      marginInlineStart: 4
    },
    '&-wrapper': _defineProperty({
      display: 'flex',
      width: '100%'
    }, "".concat(token.componentCls, "-status"), {
      width: '14px'
    }),
    '&-icon': {
      marginInlineEnd: 16
    },
    '&-trend-icon': {
      width: 0,
      height: 0,
      borderInlineEnd: '3.5px solid transparent',
      borderBlockEnd: '9px solid #000',
      borderInlineStart: '3.5px solid transparent',
      '&-up': {
        transform: 'rotate(0deg)'
      },
      '&-down': {
        transform: 'rotate(180deg)'
      }
    },
    '&-content': _defineProperty({
      width: '100%'
    }, "".concat(token.antCls, "-statistic-content"), {
      '&-value-int': {
        fontSize: token.fontSizeHeading3
      }
    }),
    '&-description': {
      width: '100%'
    }
  }, "".concat(token.antCls, "-statistic-title"), {
    color: token.colorText
  }), '&-trend-up', _defineProperty({}, "".concat(token.antCls, "-statistic-content"), _defineProperty({
    color: '#f5222d'
  }, "".concat(token.componentCls, "-trend-icon"), {
    borderBlockEndColor: '#f5222d'
  }))), '&-trend-down', _defineProperty({}, "".concat(token.antCls, "-statistic-content"), _defineProperty({
    color: '#389e0d'
  }, "".concat(token.componentCls, "-trend-icon"), {
    borderBlockEndColor: '#52c41a'
  }))), '& &-layout-horizontal', _defineProperty(_defineProperty(_defineProperty({
    display: 'flex',
    justifyContent: 'space-between'
  }, "".concat(token.antCls, "-statistic-title"), {
    marginBlockEnd: 0
  }), "".concat(token.antCls, "-statistic-content-value"), {
    fontWeight: 500
  }), "".concat(token.antCls, "-statistic-title,").concat(token.antCls, "-statistic-content,").concat(token.antCls, "-statistic-content-suffix,").concat(token.antCls, "-statistic-content-prefix,").concat(token.antCls, "-statistic-content-value-decimal"), {
    fontSize: token.fontSize
  })), '& &-layout-inline', _defineProperty(_defineProperty(_defineProperty({
    display: 'inline-flex',
    color: token.colorTextSecondary
  }, "".concat(token.antCls, "-statistic-title"), {
    marginInlineEnd: '6px',
    marginBlockEnd: 0
  }), "".concat(token.antCls, "-statistic-content"), {
    color: token.colorTextSecondary
  }), "".concat(token.antCls, "-statistic-title,").concat(token.antCls, "-statistic-content,").concat(token.antCls, "-statistic-content-suffix,").concat(token.antCls, "-statistic-content-prefix,").concat(token.antCls, "-statistic-content-value-decimal"), {
    fontSize: token.fontSizeSM
  })));
};
export function useStyle(prefixCls) {
  return useAntdStyle('Statistic', function (token) {
    var proListToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proListToken)];
  });
}