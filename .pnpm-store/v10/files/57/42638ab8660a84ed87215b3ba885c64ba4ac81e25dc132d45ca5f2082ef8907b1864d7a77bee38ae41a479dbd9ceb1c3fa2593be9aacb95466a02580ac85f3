import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "statistic", "className", "chart", "chartPlacement", "footer"];
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import Card from "../Card";
import Divider from "../Divider";
import Operation from "../Operation";
import Statistic from "../Statistic";
import { useStyle } from "./style";
import "antd/es/divider/style";
import "antd/es/statistic/style";

/** @deprecated */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var StatisticCard = function StatisticCard(props) {
  var children = props.children,
    statistic = props.statistic,
    className = props.className,
    chart = props.chart,
    chartPlacement = props.chartPlacement,
    footer = props.footer,
    others = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-statistic-card');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var classString = classNames(prefixCls, className, hashId);

  // 在 StatisticCard 中时默认为 vertical。
  var statisticDom = statistic && /*#__PURE__*/_jsx(Statistic, _objectSpread({
    layout: "vertical"
  }, statistic));
  var chartCls = classNames("".concat(prefixCls, "-chart"), hashId, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-chart-left"), chartPlacement === 'left' && chart && statistic), "".concat(prefixCls, "-chart-right"), chartPlacement === 'right' && chart && statistic));
  var chartDom = chart && /*#__PURE__*/_jsx("div", {
    className: chartCls,
    children: chart
  });
  var contentCls = classNames("".concat(prefixCls, "-content "), hashId, _defineProperty({}, "".concat(prefixCls, "-content-horizontal"), chartPlacement === 'left' || chartPlacement === 'right'));

  // 默认上下结构
  var contentDom = (chartDom || statisticDom) && (chartPlacement === 'left' ? /*#__PURE__*/_jsxs("div", {
    className: contentCls,
    children: [chartDom, statisticDom]
  }) : /*#__PURE__*/_jsxs("div", {
    className: contentCls,
    children: [statisticDom, chartDom]
  }));
  var footerDom = footer && /*#__PURE__*/_jsx("div", {
    className: "".concat(prefixCls, "-footer ").concat(hashId).trim(),
    children: footer
  });
  return wrapSSR( /*#__PURE__*/_jsxs(Card, _objectSpread(_objectSpread({
    className: classString
  }, others), {}, {
    children: [contentDom, children, footerDom]
  })));
};
var Group = function Group(props) {
  return /*#__PURE__*/_jsx(StatisticCard, _objectSpread({
    bodyStyle: {
      padding: 0
    }
  }, props));
};
StatisticCard.Statistic = Statistic;
StatisticCard.Divider = Divider;
StatisticCard.Operation = Operation;
StatisticCard.isProCard = true;
StatisticCard.Group = Group;
export default StatisticCard;