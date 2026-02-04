import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["title", "render"];
import { ProProvider } from '@ant-design/pro-provider';
import { Avatar, Layout, Menu, Space, version } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { AppsLogoComponents, defaultRenderLogo } from "../AppsLogoComponents";
import { CollapsedIcon } from "../CollapsedIcon";
import { BaseMenu } from "./BaseMenu";
import { useStylish } from "./style/stylish";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
var _SafetyWarningProvider = /*#__PURE__*/React.memo(function (props) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn("[pro-layout] SiderMenu required antd@^4.24.15 || antd@^5.11.2 for access the menu context, please upgrade your antd version (current ".concat(version, ")."));
  }
  return /*#__PURE__*/_jsx(_Fragment, {
    children: props.children
  });
});
var Sider = Layout.Sider,
  _Layout$_InternalSide = Layout._InternalSiderContext,
  SiderContext = _Layout$_InternalSide === void 0 ? {
    Provider: _SafetyWarningProvider
  } : _Layout$_InternalSide;
/**
 * 渲染 title 和 logo
 *
 * @param props
 * @param renderKey
 * @returns
 */
export var renderLogoAndTitle = function renderLogoAndTitle(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
  var logo = props.logo,
    title = props.title,
    layout = props.layout;
  var renderFunction = props[renderKey];
  if (renderFunction === false) {
    return null;
  }
  var logoDom = defaultRenderLogo(logo);
  var titleDom = /*#__PURE__*/_jsx("h1", {
    children: title !== null && title !== void 0 ? title : 'Ant Design Pro'
  });
  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }

  /**
   * 收起来时候直接不显示
   */
  if (props.isMobile) {
    return null;
  }
  if (layout === 'mix' && renderKey === 'menuHeaderRender') return false;
  if (props.collapsed) {
    return /*#__PURE__*/_jsx("a", {
      children: logoDom
    }, "title");
  }
  return /*#__PURE__*/_jsxs("a", {
    children: [logoDom, titleDom]
  }, "title");
};
var SiderMenu = function SiderMenu(props) {
  var _props$menu2;
  var collapsed = props.collapsed,
    originCollapsed = props.originCollapsed,
    fixSiderbar = props.fixSiderbar,
    menuFooterRender = props.menuFooterRender,
    _onCollapse = props.onCollapse,
    theme = props.theme,
    siderWidth = props.siderWidth,
    isMobile = props.isMobile,
    onMenuHeaderClick = props.onMenuHeaderClick,
    _props$breakpoint = props.breakpoint,
    breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint,
    style = props.style,
    layout = props.layout,
    _props$menuExtraRende = props.menuExtraRender,
    menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende,
    links = props.links,
    menuContentRender = props.menuContentRender,
    collapsedButtonRender = props.collapsedButtonRender,
    prefixCls = props.prefixCls,
    avatarProps = props.avatarProps,
    rightContentRender = props.rightContentRender,
    actionsRender = props.actionsRender,
    onOpenChange = props.onOpenChange,
    stylish = props.stylish,
    logoStyle = props.logoStyle;
  var _useContext = useContext(ProProvider),
    hashId = _useContext.hashId;
  var showSiderExtraDom = useMemo(function () {
    if (isMobile) return false;
    if (layout === 'mix') return false;
    return true;
  }, [isMobile, layout]);
  var baseClassName = "".concat(prefixCls, "-sider");

  // 收起的宽度
  var collapsedWidth = 64;

  // 之所以这样写是为了提升样式优先级，不然会被sider 自带的覆盖掉
  var stylishClassName = useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    stylish: stylish,
    proLayoutCollapsedWidth: collapsedWidth
  });
  var siderClassName = classNames("".concat(baseClassName), hashId, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(baseClassName, "-fixed"), fixSiderbar), "".concat(baseClassName, "-fixed-mix"), layout === 'mix' && !isMobile && fixSiderbar), "".concat(baseClassName, "-collapsed"), props.collapsed), "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), "".concat(baseClassName, "-light"), theme !== 'dark'), "".concat(baseClassName, "-mix"), layout === 'mix' && !isMobile), "".concat(baseClassName, "-stylish"), !!stylish));
  var headerDom = renderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);
  var menuDom = useMemo(function () {
    return menuContentRender !== false && /*#__PURE__*/_createElement(BaseMenu, _objectSpread(_objectSpread({}, props), {}, {
      key: "base-menu",
      mode: collapsed && !isMobile ? 'vertical' : 'inline',
      handleOpenChange: onOpenChange,
      style: {
        width: '100%'
      },
      className: "".concat(baseClassName, "-menu ").concat(hashId).trim()
    }));
  }, [baseClassName, hashId, menuContentRender, onOpenChange, props]);
  var linksMenuItems = (links || []).map(function (node, index) {
    return {
      className: "".concat(baseClassName, "-link"),
      label: node,
      key: index
    };
  });
  var menuRenderDom = useMemo(function () {
    return menuContentRender ? menuContentRender(props, menuDom) : menuDom;
  }, [menuContentRender, menuDom, props]);
  var avatarDom = useMemo(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = _objectWithoutProperties(avatarProps, _excluded);
    var dom = /*#__PURE__*/_jsxs("div", {
      className: "".concat(baseClassName, "-actions-avatar"),
      children: [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/_jsx(Avatar, _objectSpread({
        size: 28
      }, rest)) : null, avatarProps.title && !collapsed && /*#__PURE__*/_jsx("span", {
        children: title
      })]
    });
    if (render) {
      return render(avatarProps, dom, props);
    }
    return dom;
  }, [avatarProps, baseClassName, collapsed]);
  var actionsDom = useMemo(function () {
    if (!actionsRender) return null;
    return /*#__PURE__*/_jsx(Space, {
      align: "center",
      size: 4,
      direction: collapsed ? 'vertical' : 'horizontal',
      className: classNames(["".concat(baseClassName, "-actions-list"), collapsed && "".concat(baseClassName, "-actions-list-collapsed"), hashId]),
      children: [actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(props)].flat(1).map(function (item, index) {
        return /*#__PURE__*/_jsx("div", {
          className: "".concat(baseClassName, "-actions-list-item ").concat(hashId).trim(),
          children: item
        }, index);
      })
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [actionsRender, baseClassName, collapsed]);
  var appsDom = useMemo(function () {
    return /*#__PURE__*/_jsx(AppsLogoComponents, {
      onItemClick: props.itemClick,
      appListRender: props.appListRender,
      appList: props.appList,
      prefixCls: props.prefixCls
    });
  }, [props.appList, props.appListRender, props.prefixCls]);
  var collapsedDom = useMemo(function () {
    if (collapsedButtonRender === false) return null;
    var dom = /*#__PURE__*/_jsx(CollapsedIcon, {
      isMobile: isMobile,
      collapsed: originCollapsed,
      className: "".concat(baseClassName, "-collapsed-button"),
      onClick: function onClick() {
        _onCollapse === null || _onCollapse === void 0 || _onCollapse(!originCollapsed);
      }
    });
    if (collapsedButtonRender) return collapsedButtonRender(collapsed, dom);
    return dom;
  }, [collapsedButtonRender, isMobile, originCollapsed, baseClassName, collapsed, _onCollapse]);

  /** 操作区域的dom */
  var actionAreaDom = useMemo(function () {
    if (!avatarDom && !actionsDom) return null;
    return /*#__PURE__*/_jsxs("div", {
      className: classNames("".concat(baseClassName, "-actions"), hashId, collapsed && "".concat(baseClassName, "-actions-collapsed")),
      children: [avatarDom, actionsDom]
    });
  }, [actionsDom, avatarDom, baseClassName, collapsed, hashId]);

  /* Using the useMemo hook to create a CSS class that will hide the menu when the menu is collapsed. */
  var hideMenuWhenCollapsedClassName = useMemo(function () {
    var _props$menu;
    // 收起时完全隐藏菜单
    if (props !== null && props !== void 0 && (_props$menu = props.menu) !== null && _props$menu !== void 0 && _props$menu.hideMenuWhenCollapsed && collapsed) {
      return "".concat(baseClassName, "-hide-menu-collapsed");
    }
    return null;
  }, [baseClassName, collapsed, props === null || props === void 0 || (_props$menu2 = props.menu) === null || _props$menu2 === void 0 ? void 0 : _props$menu2.hideMenuWhenCollapsed]);
  var menuFooterDom = menuFooterRender && (menuFooterRender === null || menuFooterRender === void 0 ? void 0 : menuFooterRender(props));
  var menuDomItems = /*#__PURE__*/_jsxs(_Fragment, {
    children: [headerDom && /*#__PURE__*/_jsxs("div", {
      className: classNames([classNames("".concat(baseClassName, "-logo"), hashId, _defineProperty({}, "".concat(baseClassName, "-logo-collapsed"), collapsed))]),
      onClick: showSiderExtraDom ? onMenuHeaderClick : undefined,
      id: "logo",
      style: logoStyle,
      children: [headerDom, appsDom]
    }), extraDom && /*#__PURE__*/_jsx("div", {
      className: classNames(["".concat(baseClassName, "-extra"), !headerDom && "".concat(baseClassName, "-extra-no-logo"), hashId]),
      children: extraDom
    }), /*#__PURE__*/_jsx("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden'
      },
      children: menuRenderDom
    }), /*#__PURE__*/_jsxs(SiderContext.Provider, {
      value: {},
      children: [links ? /*#__PURE__*/_jsx("div", {
        className: "".concat(baseClassName, "-links ").concat(hashId).trim(),
        children: /*#__PURE__*/_jsx(Menu, {
          inlineIndent: 16,
          className: "".concat(baseClassName, "-link-menu ").concat(hashId).trim(),
          selectedKeys: [],
          openKeys: [],
          theme: theme,
          mode: "inline",
          items: linksMenuItems
        })
      }) : null, showSiderExtraDom && /*#__PURE__*/_jsxs(_Fragment, {
        children: [actionAreaDom, !actionsDom && rightContentRender ? /*#__PURE__*/_jsx("div", {
          className: classNames("".concat(baseClassName, "-actions"), hashId, _defineProperty({}, "".concat(baseClassName, "-actions-collapsed"), collapsed)),
          children: rightContentRender === null || rightContentRender === void 0 ? void 0 : rightContentRender(props)
        }) : null]
      }), menuFooterDom && /*#__PURE__*/_jsx("div", {
        className: classNames(["".concat(baseClassName, "-footer"), hashId, _defineProperty({}, "".concat(baseClassName, "-footer-collapsed"), collapsed)]),
        children: menuFooterDom
      })]
    })]
  });
  return stylishClassName.wrapSSR( /*#__PURE__*/_jsxs(_Fragment, {
    children: [fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && /*#__PURE__*/_jsx("div", {
      style: _objectSpread({
        width: collapsed ? collapsedWidth : siderWidth,
        overflow: 'hidden',
        flex: "0 0 ".concat(collapsed ? collapsedWidth : siderWidth, "px"),
        maxWidth: collapsed ? collapsedWidth : siderWidth,
        minWidth: collapsed ? collapsedWidth : siderWidth,
        transition: 'all 0.2s ease 0s'
      }, style)
    }), /*#__PURE__*/_jsxs(Sider, {
      collapsible: true,
      trigger: null,
      collapsed: collapsed,
      breakpoint: breakpoint === false ? undefined : breakpoint,
      onCollapse: function onCollapse(collapse) {
        if (isMobile) return;
        _onCollapse === null || _onCollapse === void 0 || _onCollapse(collapse);
      },
      collapsedWidth: collapsedWidth,
      style: style,
      theme: theme,
      width: siderWidth,
      className: classNames(siderClassName, hashId, hideMenuWhenCollapsedClassName),
      children: [hideMenuWhenCollapsedClassName ? /*#__PURE__*/_jsx("div", {
        className: "".concat(baseClassName, "-hide-when-collapsed ").concat(hashId).trim(),
        style: {
          height: '100%',
          width: '100%',
          opacity: hideMenuWhenCollapsedClassName ? 0 : 1
        },
        children: menuDomItems
      }) : menuDomItems, collapsedDom]
    })]
  }));
};
export { SiderMenu };