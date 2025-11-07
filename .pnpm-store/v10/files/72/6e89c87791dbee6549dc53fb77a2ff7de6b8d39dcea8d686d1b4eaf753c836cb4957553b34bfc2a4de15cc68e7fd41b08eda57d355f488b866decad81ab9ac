"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterToolbar = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _index = require("../../index");
var _style = require("./style");
var _stylish = require("./style/stylish");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "className", "extra", "portalDom", "style", "renderContent"];
/* eslint-disable react-hooks/exhaustive-deps */
var FooterToolbar = exports.FooterToolbar = function FooterToolbar(props) {
  var children = props.children,
    className = props.className,
    extra = props.extra,
    _props$portalDom = props.portalDom,
    portalDom = _props$portalDom === void 0 ? true : _props$portalDom,
    style = props.style,
    renderContent = props.renderContent,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    getTargetContainer = _useContext.getTargetContainer;
  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var baseClassName = "".concat(prefixCls, "-footer-bar");
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var value = (0, _react.useContext)(_index.RouteContext);
  var width = (0, _react.useMemo)(function () {
    var hasSiderMenu = value.hasSiderMenu,
      isMobile = value.isMobile,
      siderWidth = value.siderWidth;
    if (!hasSiderMenu) {
      return undefined;
    }
    // 0 or undefined
    if (!siderWidth) {
      return '100%';
    }
    return isMobile ? '100%' : "calc(100% - ".concat(siderWidth, "px)");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.collapsed, value.hasSiderMenu, value.isMobile, value.siderWidth]);
  var containerDom = (0, _react.useMemo)(function () {
    if (typeof window === 'undefined' || typeof document === 'undefined') return null;
    // 只读取一次就行了，不然总是的渲染
    return (getTargetContainer === null || getTargetContainer === void 0 ? void 0 : getTargetContainer()) || document.body;
  }, []);
  var stylish = (0, _stylish.useStylish)("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    stylish: props.stylish
  });
  var dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(baseClassName, "-left ").concat(hashId).trim(),
      children: extra
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(baseClassName, "-right ").concat(hashId).trim(),
      children: children
    })]
  });

  /** 告诉 props 是否存在 footerBar */
  (0, _react.useEffect)(function () {
    if (!value || !(value !== null && value !== void 0 && value.setHasFooterToolbar)) {
      return function () {};
    }
    value === null || value === void 0 || value.setHasFooterToolbar(true);
    return function () {
      var _value$setHasFooterTo;
      value === null || value === void 0 || (_value$setHasFooterTo = value.setHasFooterToolbar) === null || _value$setHasFooterTo === void 0 || _value$setHasFooterTo.call(value, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var renderDom = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
    className: (0, _classnames.default)(className, hashId, baseClassName, (0, _defineProperty2.default)({}, "".concat(baseClassName, "-stylish"), !!props.stylish)),
    style: (0, _objectSpread2.default)({
      width: width
    }, style)
  }, (0, _omit.default)(restProps, ['prefixCls'])), {}, {
    children: renderContent ? renderContent((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), value), {}, {
      leftWidth: width
    }), dom) : dom
  }));
  var ssrDom = !(0, _proUtils.isBrowser)() || !portalDom || !containerDom ? renderDom : /*#__PURE__*/(0, _reactDom.createPortal)(renderDom, containerDom, baseClassName);
  return stylish.wrapSSR(wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
    children: ssrDom
  }, baseClassName)));
};