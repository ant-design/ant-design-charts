import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { ProProvider } from '@ant-design/pro-provider';
import { ErrorBoundary } from '@ant-design/pro-utils';
import { Layout } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var WrapContent = function WrapContent(props) {
  var _useContext = useContext(ProProvider),
    hashId = _useContext.hashId;
  var style = props.style,
    prefixCls = props.prefixCls,
    children = props.children,
    _props$hasPageContain = props.hasPageContainer,
    hasPageContainer = _props$hasPageContain === void 0 ? 0 : _props$hasPageContain;
  var contentClassName = classNames("".concat(prefixCls, "-content"), hashId, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-has-header"), props.hasHeader), "".concat(prefixCls, "-content-has-page-container"), hasPageContainer > 0));
  var ErrorComponent = props.ErrorBoundary || ErrorBoundary;
  return props.ErrorBoundary === false ? /*#__PURE__*/_jsx(Layout.Content, {
    className: contentClassName,
    style: style,
    children: children
  }) : /*#__PURE__*/_jsx(ErrorComponent, {
    children: /*#__PURE__*/_jsx(Layout.Content, {
      className: contentClassName,
      style: style,
      children: children
    })
  });
};
export { WrapContent };