"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterDropdown = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _DropdownFooter = require("../DropdownFooter");
require("antd/lib/dropdown/style");
var _classnames = _interopRequireDefault(require("classnames"));
var _openVisibleCompatible = require("../../compareVersions/openVisibleCompatible");
var _style2 = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var FilterDropdown = exports.FilterDropdown = function FilterDropdown(props) {
  var children = props.children,
    label = props.label,
    footer = props.footer,
    open = props.open,
    onOpenChange = props.onOpenChange,
    disabled = props.disabled,
    onVisibleChange = props.onVisibleChange,
    visible = props.visible,
    footerRender = props.footerRender,
    placement = props.placement;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-field-dropdown');
  var _useStyle = (0, _style2.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var dropdownOpenProps = (0, _openVisibleCompatible.openVisibleCompatible)(open || visible || false, onOpenChange || onVisibleChange);
  var htmlRef = (0, _react.useRef)(null);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    placement: placement,
    trigger: ['click']
  }, dropdownOpenProps), {}, {
    styles: {
      body: {
        padding: 0
      }
    },
    content: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: htmlRef,
      className: (0, _classnames.default)("".concat(prefixCls, "-overlay"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-overlay-").concat(placement), placement), "hashId", hashId)),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, {
        getPopupContainer: function getPopupContainer() {
          return htmlRef.current || document.body;
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixCls, "-content ").concat(hashId).trim(),
          children: children
        })
      }), footer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownFooter.DropdownFooter, (0, _objectSpread2.default)({
        disabled: disabled,
        footerRender: footerRender
      }, footer))]
    }),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "".concat(prefixCls, "-label ").concat(hashId).trim(),
      children: label
    })
  })));
};