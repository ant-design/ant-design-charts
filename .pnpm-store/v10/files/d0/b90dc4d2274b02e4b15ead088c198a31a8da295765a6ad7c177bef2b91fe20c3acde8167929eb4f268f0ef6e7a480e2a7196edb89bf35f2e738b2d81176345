"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownFooter = void 0;
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var DropdownFooter = exports.DropdownFooter = function DropdownFooter(props) {
  var intl = (0, _proProvider.useIntl)();
  var onClear = props.onClear,
    onConfirm = props.onConfirm,
    disabled = props.disabled,
    footerRender = props.footerRender;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-dropdown-footer');
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var defaultFooter = [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
    style: {
      visibility: onClear ? 'visible' : 'hidden'
    },
    type: "link",
    size: "small",
    disabled: disabled,
    onClick: function onClick(e) {
      if (onClear) {
        onClear(e);
      }
      e.stopPropagation();
    },
    children: intl.getMessage('form.lightFilter.clear', '清除')
  }, "clear"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
    "data-type": "confirm",
    type: "primary",
    size: "small",
    onClick: onConfirm,
    disabled: disabled,
    children: intl.getMessage('form.lightFilter.confirm', '确认')
  }, "confirm")];
  if (footerRender === false || (footerRender === null || footerRender === void 0 ? void 0 : footerRender(onConfirm, onClear)) === false) {
    return null;
  }
  var renderDom = (footerRender === null || footerRender === void 0 ? void 0 : footerRender(onConfirm, onClear)) || defaultFooter;
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(prefixCls, hashId),
    onClick: function onClick(e) {
      return e.target.getAttribute('data-type') !== 'confirm' && e.stopPropagation();
    },
    children: renderDom
  }));
};