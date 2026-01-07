"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareComponentToken = exports.default = void 0;
var _cssinjsUtils = require("@ant-design/cssinjs-utils");
var _genStyleUtils = require("../../theme/genStyleUtils");
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default

const genSuggestionStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    [componentCls]: {
      [`${antCls}-cascader-menus ${antCls}-cascader-menu`]: {
        height: 'auto'
      },
      [`${componentCls}-item`]: {
        '&-icon': {
          marginInlineEnd: token.paddingXXS
        },
        '&-extra': {
          marginInlineStart: token.padding
        }
      },
      [`&${componentCls}-block`]: {
        [`${componentCls}-item-extra`]: {
          marginInlineStart: 'auto'
        }
      }
    }
  };
};
const prepareComponentToken = () => ({});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports.default = (0, _genStyleUtils.genStyleHooks)('Suggestion', token => {
  const SuggestionToken = (0, _cssinjsUtils.mergeToken)(token, {});
  return genSuggestionStyle(SuggestionToken);
}, prepareComponentToken);