import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { RouteContext } from "../../context/RouteContext";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * This component can support contentWidth so you don't need to calculate the width
 * contentWidth=Fixed, width will is 1200
 *
 * @param props
 */
var GridContent = function GridContent(props) {
  var value = useContext(RouteContext);
  var children = props.children,
    propsContentWidth = props.contentWidth,
    propsClassName = props.className,
    style = props.style;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var contentWidth = propsContentWidth || value.contentWidth;
  var className = "".concat(prefixCls, "-grid-content");
  var _useStyle = useStyle(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var isWide = contentWidth === 'Fixed' && value.layout === 'top';
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classNames(className, hashId, propsClassName, _defineProperty({}, "".concat(className, "-wide"), isWide)),
    style: style,
    children: /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-grid-content-children ").concat(hashId).trim(),
      children: children
    })
  }));
};
export { GridContent };