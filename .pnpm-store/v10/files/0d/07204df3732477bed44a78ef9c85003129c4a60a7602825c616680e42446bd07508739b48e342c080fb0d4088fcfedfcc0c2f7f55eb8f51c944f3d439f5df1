import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-utils';
var genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return _defineProperty({}, token.componentCls, {
    '&-header-actions': {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      '&-item': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: 0,
        paddingInline: 2,
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextRightActionsItem,
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: token.borderRadius,
        '> *': {
          paddingInline: 6,
          paddingBlock: 6,
          borderRadius: token.borderRadius,
          '&:hover': {
            backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgRightActionsItemHover
          }
        }
      },
      '&-avatar': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInlineStart: token.padding,
        paddingInlineEnd: token.padding,
        cursor: 'pointer',
        color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextRightActionsItem,
        '> div': {
          height: '44px',
          color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextRightActionsItem,
          paddingInline: 8,
          paddingBlock: 8,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '44px',
          borderRadius: token.borderRadius,
          '&:hover': {
            backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgRightActionsItemHover
          }
        }
      }
    }
  });
};
export function useStyle(prefixCls) {
  return useAntdStyle('ProLayoutRightContent', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genTopNavHeaderStyle(proToken)];
  });
}