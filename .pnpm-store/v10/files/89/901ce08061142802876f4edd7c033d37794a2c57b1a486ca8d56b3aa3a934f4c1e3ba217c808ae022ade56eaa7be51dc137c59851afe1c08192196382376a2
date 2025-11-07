"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjsUtils = require("@ant-design/cssinjs-utils");
var _genStyleUtils = require("../../theme/genStyleUtils");
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default

const genActionsStyle = token => {
  const {
    componentCls,
    calc
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      [`${componentCls}-list`]: {
        display: 'inline-flex',
        flexDirection: 'row',
        gap: token.paddingXS,
        color: token.colorTextDescription,
        '&-item, &-sub-item': {
          cursor: 'pointer',
          padding: token.paddingXXS,
          borderRadius: token.borderRadius,
          height: token.controlHeightSM,
          width: token.controlHeightSM,
          boxSizing: 'border-box',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&-icon': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: token.fontSize,
            width: '100%',
            height: '100%'
          },
          '&:hover': {
            background: token.colorBgTextHover
          }
        }
      },
      '& .border': {
        padding: `${token.paddingXS} ${token.paddingSM}`,
        gap: token.paddingSM,
        borderRadius: calc(token.borderRadiusLG).mul(1.5).equal(),
        backgroundColor: token.colorBorderSecondary,
        color: token.colorTextSecondary,
        [`${componentCls}-list-item, ${componentCls}-list-sub-item`]: {
          padding: 0,
          lineHeight: token.lineHeight,
          '&-icon': {
            fontSize: token.fontSizeLG
          },
          '&:hover': {
            opacity: 0.8
          }
        }
      },
      '& .block': {
        display: 'flex'
      }
    }
  };
};
const prepareComponentToken = () => ({});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _genStyleUtils.genStyleHooks)('Actions', token => {
  const compToken = (0, _cssinjsUtils.mergeToken)(token, {});
  return [genActionsStyle(compToken)];
}, prepareComponentToken);