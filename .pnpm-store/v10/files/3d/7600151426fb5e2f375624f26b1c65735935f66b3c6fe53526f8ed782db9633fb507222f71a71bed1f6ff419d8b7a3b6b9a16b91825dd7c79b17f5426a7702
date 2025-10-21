"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _Card = _interopRequireDefault(require("../Card"));
var _Divider = _interopRequireDefault(require("../Divider"));
var _Operation = _interopRequireDefault(require("../Operation"));
var _Statistic = _interopRequireDefault(require("../Statistic"));
var _style = require("./style");
require("antd/lib/divider/style");
require("antd/lib/statistic/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "statistic", "className", "chart", "chartPlacement", "footer"];
/** @deprecated */
var StatisticCard = function StatisticCard(props) {
  var children = props.children,
    statistic = props.statistic,
    className = props.className,
    chart = props.chart,
    chartPlacement = props.chartPlacement,
    footer = props.footer,
    others = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-statistic-card');
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var classString = (0, _classnames.default)(prefixCls, className, hashId);

  // 在 StatisticCard 中时默认为 vertical。
  var statisticDom = statistic && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Statistic.default, (0, _objectSpread2.default)({
    layout: "vertical"
  }, statistic));
  var chartCls = (0, _classnames.default)("".concat(prefixCls, "-chart"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-chart-left"), chartPlacement === 'left' && chart && statistic), "".concat(prefixCls, "-chart-right"), chartPlacement === 'right' && chart && statistic));
  var chartDom = chart && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: chartCls,
    children: chart
  });
  var contentCls = (0, _classnames.default)("".concat(prefixCls, "-content "), hashId, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-content-horizontal"), chartPlacement === 'left' || chartPlacement === 'right'));

  // 默认上下结构
  var contentDom = (chartDom || statisticDom) && (chartPlacement === 'left' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: contentCls,
    children: [chartDom, statisticDom]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: contentCls,
    children: [statisticDom, chartDom]
  }));
  var footerDom = footer && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(prefixCls, "-footer ").concat(hashId).trim(),
    children: footer
  });
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    className: classString
  }, others), {}, {
    children: [contentDom, children, footerDom]
  })));
};
var Group = function Group(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StatisticCard, (0, _objectSpread2.default)({
    bodyStyle: {
      padding: 0
    }
  }, props));
};
StatisticCard.Statistic = _Statistic.default;
StatisticCard.Divider = _Divider.default;
StatisticCard.Operation = _Operation.default;
StatisticCard.isProCard = true;
StatisticCard.Group = Group;
var _default = exports.default = StatisticCard;