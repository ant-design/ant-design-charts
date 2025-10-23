"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "defaultPrefixCls", {
  enumerable: true,
  get: function () {
    return _useXProviderContext.defaultPrefixCls;
  }
});
Object.defineProperty(exports, "useXProviderContext", {
  enumerable: true,
  get: function () {
    return _useXProviderContext.default;
  }
});
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _context = _interopRequireDefault(require("./context"));
var _useXProviderContext = _interopRequireWildcard(require("./hooks/use-x-provider-context"));
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
  } = (0, _useXProviderContext.default)();
  const xProviderProps = _react.default.useMemo(() => {
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
  const mergedTheme = _react.default.useMemo(() => {
    const concatTheme = {
      ...parentTheme,
      ...theme
    };
    return concatTheme;
  }, [parentTheme, theme]);
  return /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: xProviderProps
  }, /*#__PURE__*/_react.default.createElement(_antd.ConfigProvider, (0, _extends2.default)({}, antdConfProps, {
    // Note:  we can not set `cssVar` by default.
    //        Since when developer not wrap with XProvider,
    //        the generate css is still using css var but no css var injected.
    // Origin comment: antdx enable cssVar by default, and antd v6 will enable cssVar by default
    // theme={{ cssVar: true, ...antdConfProps?.theme }}
    theme: mergedTheme
  })));
};
if (process.env.NODE_ENV !== 'production') {
  XProvider.displayName = 'XProvider';
}
var _default = exports.default = XProvider;