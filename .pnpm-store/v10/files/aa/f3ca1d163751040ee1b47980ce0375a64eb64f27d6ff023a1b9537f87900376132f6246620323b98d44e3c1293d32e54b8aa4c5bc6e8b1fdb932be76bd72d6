"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genVariantStyle = exports.genShapeStyle = void 0;
var _cssinjs = require("@ant-design/cssinjs");
const genVariantStyle = token => {
  const {
    componentCls,
    paddingSM,
    padding
  } = token;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        // Shared: filled, outlined, shadow
        '&-filled,&-outlined,&-shadow': {
          padding: `${(0, _cssinjs.unit)(paddingSM)} ${(0, _cssinjs.unit)(padding)}`,
          borderRadius: token.borderRadiusLG
        },
        // Filled:
        '&-filled': {
          backgroundColor: token.colorFillContent
        },
        // Outlined:
        '&-outlined': {
          border: `1px solid ${token.colorBorderSecondary}`
        },
        // Shadow:
        '&-shadow': {
          boxShadow: token.boxShadowTertiary
        }
      }
    }
  };
};
exports.genVariantStyle = genVariantStyle;
const genShapeStyle = token => {
  const {
    componentCls,
    fontSize,
    lineHeight,
    paddingSM,
    padding,
    calc
  } = token;
  const halfRadius = calc(fontSize).mul(lineHeight).div(2).add(paddingSM).equal();
  const contentCls = `${componentCls}-content`;
  return {
    [componentCls]: {
      [contentCls]: {
        // round:
        '&-round': {
          borderRadius: {
            _skip_check_: true,
            value: halfRadius
          },
          paddingInline: calc(padding).mul(1.25).equal()
        }
      },
      // corner:
      [`&-start ${contentCls}-corner`]: {
        borderStartStartRadius: token.borderRadiusXS
      },
      [`&-end ${contentCls}-corner`]: {
        borderStartEndRadius: token.borderRadiusXS
      }
    }
  };
};
exports.genShapeStyle = genShapeStyle;