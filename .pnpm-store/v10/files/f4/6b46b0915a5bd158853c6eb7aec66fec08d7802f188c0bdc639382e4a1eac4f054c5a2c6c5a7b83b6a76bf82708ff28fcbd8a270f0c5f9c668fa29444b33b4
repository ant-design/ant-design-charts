import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "layout", "style", "description", "children", "title", "tip", "status", "trend", "prefix", "icon"];
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Statistic as AntdStatistic, Badge, ConfigProvider, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
    others = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-card-statistic');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var classString = classNames(prefixCls, className, hashId);
  var statusClass = classNames("".concat(prefixCls, "-status"), hashId);
  var iconClass = classNames("".concat(prefixCls, "-icon"), hashId);
  var wrapperClass = classNames("".concat(prefixCls, "-wrapper"), hashId);
  var contentClass = classNames("".concat(prefixCls, "-content"), hashId);
  var statisticClassName = classNames(hashId, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-layout-").concat(layout), layout), "".concat(prefixCls, "-trend-").concat(trend), trend));
  var tipDom = tip && /*#__PURE__*/_jsx(Tooltip, {
    title: tip,
    children: /*#__PURE__*/_jsx(QuestionCircleOutlined, {
      className: "".concat(prefixCls, "-tip ").concat(hashId).trim()
    })
  });
  var trendIconClassName = classNames("".concat(prefixCls, "-trend-icon"), hashId, _defineProperty({}, "".concat(prefixCls, "-trend-icon-").concat(trend), trend));
  var trendDom = trend && /*#__PURE__*/_jsx("div", {
    className: trendIconClassName
  });
  var statusDom = status && /*#__PURE__*/_jsx("div", {
    className: statusClass,
    children: /*#__PURE__*/_jsx(Badge, {
      status: status,
      text: null
    })
  });
  var iconDom = icon && /*#__PURE__*/_jsx("div", {
    className: iconClass,
    children: icon
  });
  return wrapSSR( /*#__PURE__*/_jsxs("div", {
    className: classString,
    style: style,
    children: [iconDom, /*#__PURE__*/_jsxs("div", {
      className: wrapperClass,
      children: [statusDom, /*#__PURE__*/_jsxs("div", {
        className: contentClass,
        children: [/*#__PURE__*/_jsx(AntdStatistic, _objectSpread({
          title: (title || tipDom) && /*#__PURE__*/_jsxs(_Fragment, {
            children: [title, tipDom]
          }),
          prefix: (trendDom || prefix) && /*#__PURE__*/_jsxs(_Fragment, {
            children: [trendDom, prefix]
          }),
          className: statisticClassName
        }, others)), description && /*#__PURE__*/_jsx("div", {
          className: "".concat(prefixCls, "-description ").concat(hashId).trim(),
          children: description
        })]
      })]
    })]
  }));
};
export default Statistic;