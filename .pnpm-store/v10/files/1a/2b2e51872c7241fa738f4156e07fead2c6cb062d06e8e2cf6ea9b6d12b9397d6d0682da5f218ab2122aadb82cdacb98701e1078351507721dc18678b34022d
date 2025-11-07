"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useToken;
exports.getComputedToken = void 0;
exports.useInternalToken = useInternalToken;
var _cssinjs = require("@ant-design/cssinjs");
var _antd = require("antd");
var _useToken = require("antd/es/theme/useToken");
var _alias = _interopRequireDefault(require("antd/es/theme/util/alias"));
var _react = _interopRequireDefault(require("react"));
var _version = _interopRequireDefault(require("../version"));
const defaultTheme = (0, _cssinjs.createTheme)(_antd.theme.defaultAlgorithm);
const preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
    override,
    ...components
  } = overrideToken;

  // Merge with override
  let mergedDerivativeToken = {
    ...derivativeToken,
    override
  };

  // Format if needed
  mergedDerivativeToken = (0, _alias.default)(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(([key, value]) => {
      const {
        theme: componentTheme,
        ...componentTokens
      } = value;
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken({
          ...mergedDerivativeToken,
          ...componentTokens
        }, {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
exports.getComputedToken = getComputedToken;
function useInternalToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme = defaultTheme,
    override,
    cssVar
  } = _react.default.useContext(_antd.theme._internalContext);
  const [token, hashId, realToken] = (0, _cssinjs.useCacheToken)(theme, [_antd.theme.defaultSeed, rootDesignToken], {
    salt: `${_version.default}-${hashed || ''}`,
    override,
    getComputedToken,
    cssVar: cssVar && {
      prefix: cssVar.prefix,
      key: cssVar.key,
      unitless: _useToken.unitless,
      ignore: _useToken.ignore,
      preserve
    }
  });
  return [theme, realToken, hashed ? hashId : '', token, cssVar];
}
function useToken() {
  const [theme, token, hashId] = useInternalToken();
  return {
    theme,
    token,
    hashId
  };
}