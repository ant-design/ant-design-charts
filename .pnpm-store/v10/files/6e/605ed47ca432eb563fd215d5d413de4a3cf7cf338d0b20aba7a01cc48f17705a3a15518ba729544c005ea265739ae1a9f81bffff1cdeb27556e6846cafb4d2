import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
import { genAppsLogoComponentsDefaultListStyle } from "./default";
import { genAppsLogoComponentsSimpleListStyle } from "./simple";
var genAppsLogoComponentsStyle = function genAppsLogoComponentsStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return _defineProperty({}, token.componentCls, {
    '&-icon': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingInline: 4,
      paddingBlock: 0,
      fontSize: 14,
      lineHeight: '14px',
      height: 28,
      width: 28,
      cursor: 'pointer',
      color: (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextAppListIcon,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextAppListIconHover,
        backgroundColor: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgAppListIconHover
      },
      '&-active': {
        color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextAppListIconHover,
        backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgAppListIconHover
      }
    },
    '&-item-title': {
      marginInlineStart: '16px',
      marginInlineEnd: '8px',
      marginBlockStart: 0,
      marginBlockEnd: '12px',
      fontWeight: 600,
      color: 'rgba(0, 0, 0, 0.88)',
      fontSize: 16,
      opacity: 0.85,
      lineHeight: 1.5,
      '&:first-child': {
        marginBlockStart: 12
      }
    },
    '&-popover': _defineProperty({}, "".concat(token.antCls, "-popover-arrow"), {
      display: 'none'
    }),
    '&-simple': genAppsLogoComponentsSimpleListStyle(token),
    '&-default': genAppsLogoComponentsDefaultListStyle(token)
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('AppsLogoComponents', function (token) {
    var proCardToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genAppsLogoComponentsStyle(proCardToken)];
  });
}