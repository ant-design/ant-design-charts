"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _cssinjsUtils = require("@ant-design/cssinjs-utils");
var _genStyleUtils = require("../../theme/genStyleUtils");
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default

const genPromptsStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      // ======================== Prompt ========================
      '&, & *': {
        boxSizing: 'border-box'
      },
      maxWidth: '100%',
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      [`& ${componentCls}-title`]: {
        marginBlockStart: 0,
        fontWeight: 'normal',
        color: token.colorTextTertiary
      },
      [`& ${componentCls}-list`]: {
        display: 'flex',
        gap: token.paddingSM,
        overflowX: 'auto',
        // Hide scrollbar
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        listStyle: 'none',
        paddingInlineStart: 0,
        marginBlock: 0,
        alignItems: 'stretch',
        '&-wrap': {
          flexWrap: 'wrap'
        },
        '&-vertical': {
          flexDirection: 'column',
          alignItems: 'flex-start'
        }
      },
      // ========================= Item =========================
      [`${componentCls}-item`]: {
        flex: 'none',
        display: 'flex',
        gap: token.paddingXS,
        height: 'auto',
        paddingBlock: token.paddingSM,
        paddingInline: token.padding,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        background: token.colorBgContainer,
        borderRadius: token.borderRadiusLG,
        transition: ['border', 'background'].map(p => `${p} ${token.motionDurationSlow}`).join(','),
        border: `${(0, _cssinjs.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`,
        [`&:not(${componentCls}-item-has-nest)`]: {
          '&:hover': {
            cursor: 'pointer',
            background: token.colorFillTertiary
          },
          '&:active': {
            background: token.colorFill
          }
        },
        [`${componentCls}-content`]: {
          flex: 'auto',
          minWidth: 0,
          display: 'flex',
          gap: token.paddingXXS,
          flexDirection: 'column',
          alignItems: 'flex-start'
        },
        [`${componentCls}-icon, ${componentCls}-label, ${componentCls}-desc`]: {
          margin: 0,
          padding: 0,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          textAlign: 'start',
          whiteSpace: 'normal'
        },
        [`${componentCls}-label`]: {
          color: token.colorTextHeading,
          fontWeight: 500
        },
        [`${componentCls}-label + ${componentCls}-desc`]: {
          color: token.colorTextTertiary
        },
        // Disabled
        [`&${componentCls}-item-disabled`]: {
          pointerEvents: 'none',
          background: token.colorBgContainerDisabled,
          [`${componentCls}-label, ${componentCls}-desc`]: {
            color: token.colorTextTertiary
          }
        }
      }
    }
  };
};
const genNestStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      // ========================= Parent =========================
      [`${componentCls}-item-has-nest`]: {
        [`> ${componentCls}-content`]: {
          // gap: token.paddingSM,

          [`> ${componentCls}-label`]: {
            fontSize: token.fontSizeLG,
            lineHeight: token.lineHeightLG
          }
        }
      },
      // ========================= Nested =========================
      [`&${componentCls}-nested`]: {
        marginTop: token.paddingXS,
        // ======================== Prompt ========================
        alignSelf: 'stretch',
        [`${componentCls}-list`]: {
          alignItems: 'stretch'
        },
        // ========================= Item =========================
        [`${componentCls}-item`]: {
          border: 0,
          background: token.colorFillQuaternary
        }
      }
    }
  };
};
const prepareComponentToken = () => ({});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _genStyleUtils.genStyleHooks)('Prompts', token => {
  const compToken = (0, _cssinjsUtils.mergeToken)(token, {});
  return [genPromptsStyle(compToken), genNestStyle(compToken)];
}, prepareComponentToken);