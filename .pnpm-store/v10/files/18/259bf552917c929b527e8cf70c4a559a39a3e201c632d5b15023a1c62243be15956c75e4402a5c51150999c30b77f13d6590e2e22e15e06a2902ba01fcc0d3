"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "layout", "style", "description", "children", "title", "tip", "status", "trend", "prefix", "icon"];
var Statistic = function Statistic(props) {
  var className = props.className,
    _props$layout = props.layout,
    layout = _props$layout === void 0 ? 'inline' : _props$layout,
    style = props.style,
    description = props.description,
    children = props.children,
    title = props.title,
    tip = props.tip,
    status = props.status,
    trend = props.trend,
    prefix = props.prefix,
    icon = props.icon,
    others = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-card-statistic');
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var classString = (0, _classnames.default)(prefixCls, className, hashId);
  var statusClass = (0, _classnames.default)("".concat(prefixCls, "-status"), hashId);
  var iconClass = (0, _classnames.default)("".concat(prefixCls, "-icon"), hashId);
  var wrapperClass = (0, _classnames.default)("".concat(prefixCls, "-wrapper"), hashId);
  var contentClass = (0, _classnames.default)("".concat(prefixCls, "-content"), hashId);
  var statisticClassName = (0, _classnames.default)(hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-layout-").concat(layout), layout), "".concat(prefixCls, "-trend-").concat(trend), trend));
  var tipDom = tip && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
    title: tip,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.QuestionCircleOutlined, {
      className: "".concat(prefixCls, "-tip ").concat(hashId).trim()
    })
  });
  var trendIconClassName = (0, _classnames.default)("".concat(prefixCls, "-trend-icon"), hashId, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-trend-icon-").concat(trend), trend));
  var trendDom = trend && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: trendIconClassName
  });
  var statusDom = status && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: statusClass,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Badge, {
      status: status,
      text: null
    })
  });
  var iconDom = icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: iconClass,
    children: icon
  });
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: classString,
    style: style,
    children: [iconDom, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: wrapperClass,
      children: [statusDom, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: contentClass,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Statistic, (0, _objectSpread2.default)({
          title: (title || tipDom) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [title, tipDom]
          }),
          prefix: (trendDom || prefix) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [trendDom, prefix]
          }),
          className: statisticClassName
        }, others)), description && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixCls, "-description ").concat(hashId).trim(),
          children: description
        })]
      })]
    })]
  }));
};
var _default = exports.default = Statistic;