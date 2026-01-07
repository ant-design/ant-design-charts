"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjsUtils = require("@ant-design/cssinjs-utils");
var _genStyleUtils = require("../../theme/genStyleUtils");
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default

const genWelcomeStyle = token => {
  const {
    componentCls,
    calc
  } = token;
  const titleHeight = calc(token.fontSizeHeading3).mul(token.lineHeightHeading3).equal();
  const descHeight = calc(token.fontSize).mul(token.lineHeight).equal();
  return {
    [componentCls]: {
      gap: token.padding,
      // ======================== Icon ========================
      [`${componentCls}-icon`]: {
        height: calc(titleHeight).add(descHeight).add(token.paddingXXS).equal(),
        display: 'flex',
        img: {
          height: '100%'
        }
      },
      // ==================== Content Wrap ====================
      [`${componentCls}-content-wrapper`]: {
        gap: token.paddingXS,
        flex: 'auto',
        minWidth: 0,
        [`${componentCls}-title-wrapper`]: {
          gap: token.paddingXS
        },
        [`${componentCls}-title`]: {
          margin: 0
        },
        [`${componentCls}-extra`]: {
          marginInlineStart: 'auto'
        }
      }
    }
  };
};
const genVariantStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      // ======================== Filled ========================
      '&-filled': {
        paddingInline: token.padding,
        paddingBlock: token.paddingSM,
        background: token.colorFillContent,
        borderRadius: token.borderRadiusLG
      },
      // ====================== Borderless ======================
      '&-borderless': {
        [`${componentCls}-title`]: {
          fontSize: token.fontSizeHeading3,
          lineHeight: token.lineHeightHeading3
        }
      }
    }
  };
};
const prepareComponentToken = () => ({});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _genStyleUtils.genStyleHooks)('Welcome', token => {
  const compToken = (0, _cssinjsUtils.mergeToken)(token, {});
  return [genWelcomeStyle(compToken), genVariantStyle(compToken)];
}, prepareComponentToken);