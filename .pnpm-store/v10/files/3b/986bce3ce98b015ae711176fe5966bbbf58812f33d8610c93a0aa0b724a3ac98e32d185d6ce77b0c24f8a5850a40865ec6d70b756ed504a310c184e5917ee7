"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPrefixCls = exports.default = void 0;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
const defaultPrefixCls = exports.defaultPrefixCls = 'ant';
function useXProviderContext() {
  const {
    getPrefixCls,
    direction,
    csp,
    iconPrefixCls,
    theme
  } = _react.default.useContext(_antd.ConfigProvider.ConfigContext);
  return {
    theme,
    getPrefixCls,
    direction,
    csp,
    iconPrefixCls
  };
}
var _default = exports.default = useXProviderContext;