import _extends from "@babel/runtime/helpers/esm/extends";
import { ConfigProvider as AntdConfigProvider } from 'antd';
import React from 'react';
import XProviderContext from "./context";
import useXProviderContext, { defaultPrefixCls } from "./hooks/use-x-provider-context";
const XProvider = props => {
  const {
    attachments,
    bubble,
    conversations,
    prompts,
    sender,
    suggestion,
    thoughtChain,
    welcome,
    theme,
    ...antdConfProps
  } = props;
  const {
    theme: parentTheme
  } = useXProviderContext();
  const xProviderProps = React.useMemo(() => {
    return {
      attachments,
      bubble,
      conversations,
      prompts,
      sender,
      suggestion,
      thoughtChain,
      welcome
    };
  }, [attachments, bubble, conversations, prompts, sender, suggestion, thoughtChain, welcome]);
  const mergedTheme = React.useMemo(() => {
    const concatTheme = {
      ...parentTheme,
      ...theme
    };
    return concatTheme;
  }, [parentTheme, theme]);
  return /*#__PURE__*/React.createElement(XProviderContext.Provider, {
    value: xProviderProps
  }, /*#__PURE__*/React.createElement(AntdConfigProvider, _extends({}, antdConfProps, {
    // Note:  we can not set `cssVar` by default.
    //        Since when developer not wrap with XProvider,
    //        the generate css is still using css var but no css var injected.
    // Origin comment: antdx enable cssVar by default, and antd v6 will enable cssVar by default
    // theme={{ cssVar: true, ...antdConfProps?.theme }}
    theme: mergedTheme
  })));
};
export { useXProviderContext, defaultPrefixCls };
if (process.env.NODE_ENV !== 'production') {
  XProvider.displayName = 'XProvider';
}
export default XProvider;