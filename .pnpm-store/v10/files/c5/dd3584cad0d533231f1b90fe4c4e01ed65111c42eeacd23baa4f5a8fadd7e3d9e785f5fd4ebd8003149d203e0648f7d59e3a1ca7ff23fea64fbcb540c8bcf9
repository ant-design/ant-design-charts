import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createFromIconfontCN } from '@ant-design/icons';
import { ProProvider } from '@ant-design/pro-provider';
import { isImg, isUrl, useMountMergeState } from '@ant-design/pro-utils';
import { Menu, Skeleton, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { defaultSettings } from "../../defaultSettings";
import { getOpenKeysFromMenuData } from "../../utils/utils";
import { useStyle } from "./style/menu";

// todo
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
var MenuItemTooltip = function MenuItemTooltip(props) {
  var _useState = useState(props.collapsed),
    _useState2 = _slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  useEffect(function () {
    setOpen(false);
    setTimeout(function () {
      setCollapsed(props.collapsed);
    }, 400);
  }, [props.collapsed]);
  if (props.disable) {
    return props.children;
  }
  return /*#__PURE__*/_jsx(Tooltip, {
    title: props.title,
    open: collapsed && props.collapsed ? open : false,
    placement: "right",
    onOpenChange: setOpen,
    children: props.children
  });
};
var IconFont = createFromIconfontCN({
  scriptUrl: defaultSettings.iconfontUrl
});

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,
var getIcon = function getIcon(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';
  var className = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof icon === 'string' && icon !== '') {
    if (isUrl(icon) || isImg(icon)) {
      return /*#__PURE__*/_jsx("img", {
        width: 16,
        src: icon,
        alt: "icon",
        className: className
      }, icon);
    }
    if (icon.startsWith(iconPrefixes)) {
      return /*#__PURE__*/_jsx(IconFont, {
        type: icon
      });
    }
  }
  return icon;
};
var getMenuTitleSymbol = function getMenuTitleSymbol(title) {
  if (title && typeof title === 'string') {
    var symbol = title.substring(0, 1).toUpperCase();
    return symbol;
  }
  return null;
};
var MenuUtil = /*#__PURE__*/_createClass(function MenuUtil(props) {
  var _this = this;
  _classCallCheck(this, MenuUtil);
  _defineProperty(this, "props", void 0);
  _defineProperty(this, "getNavMenuItems", function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var level = arguments.length > 1 ? arguments[1] : undefined;
    var noGroupLevel = arguments.length > 2 ? arguments[2] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, level, noGroupLevel);
    }).filter(function (item) {
      return item;
    }).flat(1);
  });
  /** Get SubMenu or Item */
  _defineProperty(this, "getSubMenuOrItem", function (item, level, noGroupLevel) {
    var _this$props = _this.props,
      subMenuItemRender = _this$props.subMenuItemRender,
      baseClassName = _this$props.baseClassName,
      prefixCls = _this$props.prefixCls,
      collapsed = _this$props.collapsed,
      menu = _this$props.menu,
      iconPrefixes = _this$props.iconPrefixes,
      layout = _this$props.layout;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' && layout !== 'top';
    var designToken = _this.props.token;
    var name = _this.getIntlName(item);
    var children = (item === null || item === void 0 ? void 0 : item.children) || (item === null || item === void 0 ? void 0 : item.routes);
    var menuType = isGroup && level === 0 ? 'group' : undefined;
    if (Array.isArray(children) && children.length > 0) {
      var _this$props2, _this$props3, _this$props4, _this$props5, _designToken$layout;
      /** Menu 第一级可以有icon，或者 isGroup 时第二级别也要有 */
      var shouldHasIcon = level === 0 || isGroup && level === 1;

      //  get defaultTitle by menuItemRender
      var iconDom = getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.hashId));
      /**
       * 如果没有icon在收起的时候用首字母代替
       */
      var defaultIcon = collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null;
      var defaultTitle = /*#__PURE__*/_jsxs("div", {
        className: classNames("".concat(baseClassName, "-item-title"), (_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.hashId, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-group-item-title"), menuType === 'group'), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
        children: [menuType === 'group' && collapsed ? null : shouldHasIcon && iconDom ? /*#__PURE__*/_jsx("span", {
          className: "".concat(baseClassName, "-item-icon ").concat((_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.hashId).trim(),
          children: iconDom
        }) : defaultIcon, /*#__PURE__*/_jsx("span", {
          className: classNames("".concat(baseClassName, "-item-text"), (_this$props5 = _this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.hashId, _defineProperty({}, "".concat(baseClassName, "-item-text-has-icon"), menuType !== 'group' && shouldHasIcon && (iconDom || defaultIcon))),
          children: name
        })]
      });

      // subMenu only title render
      var title = subMenuItemRender ? subMenuItemRender(_objectSpread(_objectSpread({}, item), {}, {
        isUrl: false
      }), defaultTitle, _this.props) : defaultTitle;

      // 如果收起来，没有子菜单了，就不需要展示 group，所以 level 不增加
      if (isGroup && level === 0 && _this.props.collapsed && !menu.collapsedShowGroupTitle) {
        return _this.getNavMenuItems(children, level + 1, level);
      }
      var childrenList = _this.getNavMenuItems(children, level + 1, isGroup && level === 0 && _this.props.collapsed ? level : level + 1);
      return [{
        type: menuType,
        key: item.key || item.path,
        label: title,
        onClick: isGroup ? undefined : item.onTitleClick,
        children: childrenList,
        className: classNames(_defineProperty(_defineProperty(_defineProperty({}, "".concat(baseClassName, "-group"), menuType === 'group'), "".concat(baseClassName, "-submenu"), menuType !== 'group'), "".concat(baseClassName, "-submenu-has-icon"), menuType !== 'group' && shouldHasIcon && iconDom))
      }, isGroup && level === 0 ? {
        type: 'divider',
        prefixCls: prefixCls,
        className: "".concat(baseClassName, "-divider"),
        key: (item.key || item.path) + '-group-divider',
        style: {
          padding: 0,
          borderBlockEnd: 0,
          margin: _this.props.collapsed ? '4px' : '6px 16px',
          marginBlockStart: _this.props.collapsed ? 4 : 8,
          borderColor: designToken === null || designToken === void 0 || (_designToken$layout = designToken.layout) === null || _designToken$layout === void 0 || (_designToken$layout = _designToken$layout.sider) === null || _designToken$layout === void 0 ? void 0 : _designToken$layout.colorMenuItemDivider
        }
      } : undefined].filter(Boolean);
    }
    return {
      className: "".concat(baseClassName, "-menu-item"),
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick,
      // eslint-disable-next-line react/no-is-mounted
      label: _this.getMenuItemPath(item, level, noGroupLevel)
    };
  });
  _defineProperty(this, "getIntlName", function (item) {
    var name = item.name,
      locale = item.locale;
    var _this$props6 = _this.props,
      menu = _this$props6.menu,
      formatMessage = _this$props6.formatMessage;
    var finalName = name;
    if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      finalName = formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale,
        defaultMessage: name
      });
    }
    if (_this.props.menuTextRender) {
      return _this.props.menuTextRender(item, finalName, _this.props);
    }
    return finalName;
  });
  /**
   * 判断是否是http链接.返回 Link 或 a Judge whether it is http link.return a or Link
   *
   * @memberof SiderMenu
   */
  _defineProperty(this, "getMenuItemPath", function (item, level, noGroupLevel) {
    var _this$props9, _this$props10, _this$props11, _this$props12;
    var itemPath = _this.conversionPath(item.path || '/');
    var _this$props7 = _this.props,
      _this$props7$location = _this$props7.location,
      location = _this$props7$location === void 0 ? {
        pathname: '/'
      } : _this$props7$location,
      isMobile = _this$props7.isMobile,
      onCollapse = _this$props7.onCollapse,
      menuItemRender = _this$props7.menuItemRender,
      iconPrefixes = _this$props7.iconPrefixes;

    // if local is true formatMessage all name。
    var menuItemTitle = _this.getIntlName(item);
    var _this$props8 = _this.props,
      baseClassName = _this$props8.baseClassName,
      menu = _this$props8.menu,
      collapsed = _this$props8.collapsed;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group';
    /** Menu 第一级可以有icon，或者 isGroup 时第二级别也要有 */
    var hasIcon = level === 0 || isGroup && level === 1;
    var icon = !hasIcon ? null : getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props9 = _this.props) === null || _this$props9 === void 0 ? void 0 : _this$props9.hashId));

    // 如果没有 icon 在收起的时候用首字母代替
    var defaultIcon = collapsed && hasIcon ? getMenuTitleSymbol(menuItemTitle) : null;
    var defaultItem = /*#__PURE__*/_jsxs("div", {
      className: classNames("".concat(baseClassName, "-item-title"), (_this$props10 = _this.props) === null || _this$props10 === void 0 ? void 0 : _this$props10.hashId, _defineProperty(_defineProperty(_defineProperty({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
      children: [/*#__PURE__*/_jsx("span", {
        className: "".concat(baseClassName, "-item-icon ").concat((_this$props11 = _this.props) === null || _this$props11 === void 0 ? void 0 : _this$props11.hashId).trim(),
        style: {
          display: defaultIcon === null && !icon ? 'none' : ''
        },
        children: icon || /*#__PURE__*/_jsx("span", {
          className: "anticon",
          children: defaultIcon
        })
      }), /*#__PURE__*/_jsx("span", {
        className: classNames("".concat(baseClassName, "-item-text"), (_this$props12 = _this.props) === null || _this$props12 === void 0 ? void 0 : _this$props12.hashId, _defineProperty({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
        children: menuItemTitle
      })]
    }, itemPath);
    var isHttpUrl = isUrl(itemPath);

    // Is it a http link
    if (isHttpUrl) {
      var _this$props13, _this$props14, _this$props15;
      defaultItem = /*#__PURE__*/_jsxs("span", {
        onClick: function onClick() {
          var _window, _window$open;
          (_window = window) === null || _window === void 0 || (_window$open = _window.open) === null || _window$open === void 0 || _window$open.call(_window, itemPath, '_blank');
        },
        className: classNames("".concat(baseClassName, "-item-title"), (_this$props13 = _this.props) === null || _this$props13 === void 0 ? void 0 : _this$props13.hashId, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-link"), true), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
        children: [/*#__PURE__*/_jsx("span", {
          className: "".concat(baseClassName, "-item-icon ").concat((_this$props14 = _this.props) === null || _this$props14 === void 0 ? void 0 : _this$props14.hashId).trim(),
          style: {
            display: defaultIcon === null && !icon ? 'none' : ''
          },
          children: icon || /*#__PURE__*/_jsx("span", {
            className: "anticon",
            children: defaultIcon
          })
        }), /*#__PURE__*/_jsx("span", {
          className: classNames("".concat(baseClassName, "-item-text"), (_this$props15 = _this.props) === null || _this$props15 === void 0 ? void 0 : _this$props15.hashId, _defineProperty({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
          children: menuItemTitle
        })]
      }, itemPath);
    }
    if (menuItemRender) {
      var renderItemProps = _objectSpread(_objectSpread({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        },
        children: undefined
      });
      return level === 0 ? /*#__PURE__*/_jsx(MenuItemTooltip, {
        collapsed: collapsed,
        title: menuItemTitle,
        disable: item.disabledTooltip,
        children: menuItemRender(renderItemProps, defaultItem, _this.props)
      }) : menuItemRender(renderItemProps, defaultItem, _this.props);
    }
    return level === 0 ? /*#__PURE__*/_jsx(MenuItemTooltip, {
      collapsed: collapsed,
      title: menuItemTitle,
      disable: item.disabledTooltip,
      children: defaultItem
    }) : defaultItem;
  });
  _defineProperty(this, "conversionPath", function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return "/".concat(path || '').replace(/\/+/g, '/');
  });
  this.props = props;
});
/**
 * 生成openKeys 的对象，因为设置了openKeys 就会变成受控，所以需要一个空对象
 *
 * @param BaseMenuProps
 */
var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
    collapsed = _ref.collapsed;
  var openKeysProps = {};
  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }
  return openKeysProps;
};
var BaseMenu = function BaseMenu(props) {
  var mode = props.mode,
    className = props.className,
    handleOpenChange = props.handleOpenChange,
    style = props.style,
    menuData = props.menuData,
    prefixCls = props.prefixCls,
    menu = props.menu,
    matchMenuKeys = props.matchMenuKeys,
    iconfontUrl = props.iconfontUrl,
    propsSelectedKeys = props.selectedKeys,
    onSelect = props.onSelect,
    menuRenderType = props.menuRenderType,
    propsOpenKeys = props.openKeys;
  var _useContext = useContext(ProProvider),
    dark = _useContext.dark,
    designToken = _useContext.token;
  var baseClassName = "".concat(prefixCls, "-base-menu-").concat(mode);
  // 用于减少 defaultOpenKeys 计算的组件
  var defaultOpenKeysRef = useRef([]);
  var _useMountMergeState = useMountMergeState(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    defaultOpenAll = _useMountMergeState2[0],
    setDefaultOpenAll = _useMountMergeState2[1];
  var _useMountMergeState3 = useMountMergeState(function () {
      if (menu !== null && menu !== void 0 && menu.defaultOpenAll) {
        return getOpenKeysFromMenuData(menuData) || [];
      }
      if (propsOpenKeys === false) {
        return false;
      }
      return [];
    }, {
      value: propsOpenKeys === false ? undefined : propsOpenKeys,
      onChange: handleOpenChange
    }),
    _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
    openKeys = _useMountMergeState4[0],
    setOpenKeys = _useMountMergeState4[1];
  var _useMountMergeState5 = useMountMergeState([], {
      value: propsSelectedKeys,
      onChange: onSelect ? function (keys) {
        if (onSelect && keys) {
          onSelect(keys);
        }
      } : undefined
    }),
    _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2),
    selectedKeys = _useMountMergeState6[0],
    setSelectedKeys = _useMountMergeState6[1];
  useEffect(function () {
    if (menu !== null && menu !== void 0 && menu.defaultOpenAll || propsOpenKeys === false) {
      return;
    }
    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchMenuKeys.join('-')]);
  useEffect(function () {
    // reset IconFont
    if (iconfontUrl) {
      IconFont = createFromIconfontCN({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  useEffect(function () {
    // if pathname can't match, use the nearest parent's key
    if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
      setSelectedKeys(matchMenuKeys);
    }
    if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
      var newKeys = matchMenuKeys;
      // 如果不自动关闭，我需要把 openKeys 放进去
      if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
        newKeys = Array.from(new Set([].concat(_toConsumableArray(matchMenuKeys), _toConsumableArray(openKeys || []))));
      }
      setOpenKeys(newKeys);
    } else if (menu !== null && menu !== void 0 && menu.ignoreFlatMenu && defaultOpenAll) {
      // 忽略用户手动折叠过的菜单状态，折叠按钮切换之后也可实现默认展开所有菜单
      setOpenKeys(getOpenKeysFromMenuData(menuData));
    } else {
      setDefaultOpenAll(false);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [matchMenuKeys.join('-')]);
  var openKeysProps = useMemo(function () {
    return getOpenKeysProps(openKeys, props);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [openKeys && openKeys.join(','), props.layout, props.collapsed]);
  var _useStyle = useStyle(baseClassName, mode),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var menuUtils = useMemo(function () {
    return new MenuUtil(_objectSpread(_objectSpread({}, props), {}, {
      token: designToken,
      menuRenderType: menuRenderType,
      baseClassName: baseClassName,
      hashId: hashId
    }));
  }, [props, designToken, menuRenderType, baseClassName, hashId]);
  if (menu !== null && menu !== void 0 && menu.loading) {
    return /*#__PURE__*/_jsx("div", {
      style: mode !== null && mode !== void 0 && mode.includes('inline') ? {
        padding: 24
      } : {
        marginBlockStart: 16
      },
      children: /*#__PURE__*/_jsx(Skeleton, {
        active: true,
        title: false,
        paragraph: {
          rows: mode !== null && mode !== void 0 && mode.includes('inline') ? 6 : 1
        }
      })
    });
  }

  // 这次 openKeys === false 的时候的情况，这种情况下帮用户选中一次
  // 第二此不会使用，所以用了 defaultOpenKeys
  // 这里返回 null，是为了让 defaultOpenKeys 生效
  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }
  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;
  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/_createElement(Menu, _objectSpread(_objectSpread({}, openKeysProps), {}, {
    _internalDisableMenuItemTitleTooltip: true,
    key: "Menu",
    mode: mode,
    inlineIndent: 16,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: dark ? 'dark' : 'light',
    selectedKeys: selectedKeys,
    style: _objectSpread({
      backgroundColor: 'transparent',
      border: 'none'
    }, style),
    className: classNames(className, hashId, baseClassName, _defineProperty(_defineProperty({}, "".concat(baseClassName, "-horizontal"), mode === 'horizontal'), "".concat(baseClassName, "-collapsed"), props.collapsed)),
    items: menuUtils.getNavMenuItems(finallyData, 0, 0),
    onOpenChange: function onOpenChange(_openKeys) {
      if (!props.collapsed) {
        setOpenKeys(_openKeys);
      }
    }
  }, props.menuProps)));
};
export { BaseMenu };