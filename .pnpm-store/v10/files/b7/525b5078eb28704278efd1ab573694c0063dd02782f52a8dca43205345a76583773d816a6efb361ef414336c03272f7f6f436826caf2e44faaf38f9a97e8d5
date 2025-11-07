"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalFooter = void 0;
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var GlobalFooter = exports.GlobalFooter = function GlobalFooter(_ref) {
  var className = _ref.className,
    prefixCls = _ref.prefixCls,
    links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style;
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(baseClassName, hashId, className),
    style: style,
    children: [links && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
      children: links.map(function (link) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          className: "".concat(baseClassName, "-list-link ").concat(hashId).trim(),
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href,
          rel: "noreferrer",
          children: link.title
        }, link.key);
      })
    }), copyright && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(baseClassName, "-copyright ").concat(hashId).trim(),
      children: copyright
    })]
  }));
};