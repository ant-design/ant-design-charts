import { mergeToken } from '@ant-design/cssinjs-utils';
import { genStyleHooks } from "../../theme/genStyleUtils";

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
export const prepareComponentToken = () => ({});
export default genStyleHooks('Suggestion', token => {
  const SuggestionToken = mergeToken(token, {});
  return genSuggestionStyle(SuggestionToken);
}, prepareComponentToken);