import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ProProvider } from '@ant-design/pro-provider';
import { openVisibleCompatible } from '@ant-design/pro-utils';
import { ConfigProvider, Drawer } from 'antd';
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import React, { useContext, useEffect } from 'react';
import { SiderMenu } from "./SiderMenu";
import { useStyle } from "./style/index";
import { jsx as _jsx } from "react/jsx-runtime";
var SiderMenuWrapper = function SiderMenuWrapper(props) {
  var _token$layout;
  var isMobile = props.isMobile,
    siderWidth = props.siderWidth,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    style = props.style,
    className = props.className,
    hide = props.hide,
    prefixCls = props.prefixCls,
    getContainer = props.getContainer;
  var _useContext = useContext(ProProvider),
    token = _useContext.token;
  useEffect(function () {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
  var omitProps = omit(props, ['className', 'style']);
  var _React$useContext = React.useContext(ConfigProvider.ConfigContext),
    direction = _React$useContext.direction;
  var _useStyle = useStyle("".concat(prefixCls, "-sider"), {
      proLayoutCollapsedWidth: 64
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var siderClassName = classNames("".concat(prefixCls, "-sider"), className, hashId);
  if (hide) {
    return null;
  }
  var drawerOpenProps = openVisibleCompatible(!collapsed, function () {
    return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
  });
  return wrapSSR(isMobile ? /*#__PURE__*/_jsx(Drawer, _objectSpread(_objectSpread({
    placement: direction === 'rtl' ? 'right' : 'left',
    className: classNames("".concat(prefixCls, "-drawer-sider"), className)
  }, drawerOpenProps), {}, {
    style: _objectSpread({
      padding: 0,
      height: '100vh'
    }, style),
    onClose: function onClose() {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    },
    maskClosable: true,
    closable: false,
    getContainer: getContainer || false,
    width: siderWidth,
    styles: {
      body: {
        height: '100vh',
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground
      }
    },
    children: /*#__PURE__*/_jsx(SiderMenu, _objectSpread(_objectSpread({}, omitProps), {}, {
      isMobile: true,
      className: siderClassName,
      collapsed: isMobile ? false : collapsed,
      splitMenus: false,
      originCollapsed: collapsed
    }))
  })) : /*#__PURE__*/_jsx(SiderMenu, _objectSpread(_objectSpread({
    className: siderClassName,
    originCollapsed: collapsed
  }, omitProps), {}, {
    style: style
  })));
};
export { SiderMenuWrapper as SiderMenu };