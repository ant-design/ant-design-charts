import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProStyle = function genProStyle(token) {
  return _defineProperty({}, token.componentCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    display: 'inline-flex',
    gap: token.marginXXS,
    alignItems: 'center',
    height: '30px',
    paddingBlock: 0,
    paddingInline: 8,
    fontSize: token.fontSize,
    lineHeight: '30px',
    borderRadius: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: token.colorBgTextHover
    },
    '&-active': _defineProperty({
      paddingBlock: 0,
      paddingInline: 8,
      backgroundColor: token.colorBgTextHover
    }, "&".concat(token.componentCls, "-allow-clear:hover:not(").concat(token.componentCls, "-disabled)"), _defineProperty(_defineProperty({}, "".concat(token.componentCls, "-arrow"), {
      display: 'none'
    }), "".concat(token.componentCls, "-close"), {
      display: 'inline-flex'
    }))
  }, "".concat(token.antCls, "-select"), _defineProperty({}, "".concat(token.antCls, "-select-clear"), {
    borderRadius: '50%'
  })), "".concat(token.antCls, "-picker"), _defineProperty({}, "".concat(token.antCls, "-picker-clear"), {
    borderRadius: '50%'
  })), '&-icon', _defineProperty(_defineProperty({
    color: token.colorIcon,
    transition: 'color 0.3s',
    fontSize: 12,
    verticalAlign: 'middle'
  }, "&".concat(token.componentCls, "-close"), {
    display: 'none',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    color: token.colorTextPlaceholder,
    borderRadius: '50%'
  }), '&:hover', {
    color: token.colorIconHover
  })), '&-disabled', _defineProperty({
    color: token.colorTextPlaceholder,
    cursor: 'not-allowed'
  }, "".concat(token.componentCls, "-icon"), {
    color: token.colorTextPlaceholder
  })), '&-small', _defineProperty(_defineProperty(_defineProperty({
    height: '24px',
    paddingBlock: 0,
    paddingInline: 4,
    fontSize: token.fontSizeSM,
    lineHeight: '24px'
  }, "&".concat(token.componentCls, "-active"), {
    paddingBlock: 0,
    paddingInline: 8
  }), "".concat(token.componentCls, "-icon"), {
    paddingBlock: 0,
    paddingInline: 0
  }), "".concat(token.componentCls, "-close"), {
    marginBlockStart: '-2px',
    paddingBlock: 4,
    paddingInline: 4,
    fontSize: '6px'
  })), '&-bordered', {
    height: '32px',
    paddingBlock: 0,
    paddingInline: 8,
    border: "".concat(token.lineWidth, "px solid ").concat(token.colorBorder),
    borderRadius: '@border-radius-base'
  }), '&-bordered&-small', {
    height: '24px',
    paddingBlock: 0,
    paddingInline: 8
  }), '&-bordered&-active', {
    backgroundColor: token.colorBgContainer
  }));
};
export function useStyle(prefixCls) {
  return useAntdStyle('FieldLabel', function (token) {
    var proToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proToken)];
  });
}