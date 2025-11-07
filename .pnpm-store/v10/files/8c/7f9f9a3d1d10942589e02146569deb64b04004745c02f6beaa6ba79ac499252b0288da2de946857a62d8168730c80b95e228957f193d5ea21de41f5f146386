import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "extra", "portalDom", "style", "renderContent"];
/* eslint-disable react-hooks/exhaustive-deps */

import { isBrowser } from '@ant-design/pro-utils';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import React, { useContext, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { RouteContext } from "../../index";
import { useStyle } from "./style";
import { useStylish } from "./style/stylish";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FooterToolbar = function FooterToolbar(props) {
  var children = props.children,
    className = props.className,
    extra = props.extra,
    _props$portalDom = props.portalDom,
    portalDom = _props$portalDom === void 0 ? true : _props$portalDom,
    style = props.style,
    renderContent = props.renderContent,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    getTargetContainer = _useContext.getTargetContainer;
  var prefixCls = props.prefixCls || getPrefixCls('pro');
  var baseClassName = "".concat(prefixCls, "-footer-bar");
  var _useStyle = useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var value = useContext(RouteContext);
  var width = useMemo(function () {
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
  var containerDom = useMemo(function () {
    if (typeof window === 'undefined' || typeof document === 'undefined') return null;
    // 只读取一次就行了，不然总是的渲染
    return (getTargetContainer === null || getTargetContainer === void 0 ? void 0 : getTargetContainer()) || document.body;
  }, []);
  var stylish = useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    stylish: props.stylish
  });
  var dom = /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: "".concat(baseClassName, "-left ").concat(hashId).trim(),
      children: extra
    }), /*#__PURE__*/_jsx("div", {
      className: "".concat(baseClassName, "-right ").concat(hashId).trim(),
      children: children
    })]
  });

  /** 告诉 props 是否存在 footerBar */
  useEffect(function () {
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
  var renderDom = /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    className: classNames(className, hashId, baseClassName, _defineProperty({}, "".concat(baseClassName, "-stylish"), !!props.stylish)),
    style: _objectSpread({
      width: width
    }, style)
  }, omit(restProps, ['prefixCls'])), {}, {
    children: renderContent ? renderContent(_objectSpread(_objectSpread(_objectSpread({}, props), value), {}, {
      leftWidth: width
    }), dom) : dom
  }));
  var ssrDom = !isBrowser() || !portalDom || !containerDom ? renderDom : /*#__PURE__*/createPortal(renderDom, containerDom, baseClassName);
  return stylish.wrapSSR(wrapSSR( /*#__PURE__*/_jsx(React.Fragment, {
    children: ssrDom
  }, baseClassName)));
};
export { FooterToolbar };