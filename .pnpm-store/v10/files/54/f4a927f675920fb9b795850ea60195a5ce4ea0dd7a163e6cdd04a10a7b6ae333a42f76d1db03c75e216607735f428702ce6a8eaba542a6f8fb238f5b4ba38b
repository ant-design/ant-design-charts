import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { isNeedOpenHash, ProProvider } from '@ant-design/pro-provider';
import { coverToNewToken } from '@ant-design/pro-utils';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo, useRef } from 'react';
import { AppsLogoComponents } from "../AppsLogoComponents";
import { ActionsContent } from "../GlobalHeader/ActionsContent";
import { BaseMenu } from "../SiderMenu/BaseMenu";
import { renderLogoAndTitle } from "../SiderMenu/SiderMenu";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TopNavHeader = function TopNavHeader(props) {
  var _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19;
  var ref = useRef(null);
  var onMenuHeaderClick = props.onMenuHeaderClick,
    contentWidth = props.contentWidth,
    rightContentRender = props.rightContentRender,
    propsClassName = props.className,
    style = props.style,
    headerContentRender = props.headerContentRender,
    layout = props.layout,
    actionsRender = props.actionsRender;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = useContext(ProProvider),
    dark = _useContext2.dark;
  var prefixCls = "".concat(props.prefixCls || getPrefixCls('pro'), "-top-nav-header");
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var renderKey = undefined;
  if (props.menuHeaderRender !== undefined) {
    renderKey = 'menuHeaderRender';
  } else if (layout === 'mix' || layout === 'top') {
    renderKey = 'headerTitleRender';
  }
  var headerDom = renderLogoAndTitle(_objectSpread(_objectSpread({}, props), {}, {
    collapsed: false
  }), renderKey);
  var _useContext3 = useContext(ProProvider),
    token = _useContext3.token;
  var contentDom = useMemo(function () {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _props$menuProps;
    var defaultDom = /*#__PURE__*/_jsx(ConfigProvider // @ts-ignore
    , {
      theme: {
        hashed: isNeedOpenHash(),
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent'
          },
          Menu: _objectSpread({}, coverToNewToken({
            colorItemBg: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgHeader) || 'transparent',
            colorSubItemBg: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgHeader) || 'transparent',
            radiusItem: token.borderRadius,
            colorItemBgSelected: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            itemHoverBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            colorItemBgSelectedHorizontal: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            colorActiveBarWidth: 0,
            colorActiveBarHeight: 0,
            colorActiveBarBorderSize: 0,
            colorItemText: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.header) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
            colorItemTextHoverHorizontal: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.header) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive) || (token === null || token === void 0 ? void 0 : token.colorText),
            colorItemTextSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenuSelected) || (token === null || token === void 0 ? void 0 : token.colorTextBase),
            horizontalItemBorderRadius: 4,
            colorItemTextHover: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.header) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
            horizontalItemHoverBg: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.header) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
            colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
            popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
            subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
            darkSubMenuItemBg: 'transparent',
            darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
          }))
        },
        token: {
          colorBgElevated: ((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorBgHeader) || 'transparent'
        }
      },
      children: /*#__PURE__*/_jsx(BaseMenu, _objectSpread(_objectSpread(_objectSpread({
        theme: dark ? 'dark' : 'light'
      }, props), {}, {
        className: "".concat(prefixCls, "-base-menu ").concat(hashId).trim()
      }, props.menuProps), {}, {
        style: _objectSpread({
          width: '100%'
        }, (_props$menuProps = props.menuProps) === null || _props$menuProps === void 0 ? void 0 : _props$menuProps.style),
        collapsed: false,
        menuRenderType: "header",
        mode: "horizontal"
      }))
    });
    if (headerContentRender) {
      return headerContentRender(props, defaultDom);
    }
    return defaultDom;
  }, [(_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.header) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorBgHeader, (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.header) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorBgMenuItemSelected, (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorBgMenuItemHover, (_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorTextMenu, (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorTextMenuActive, (_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, (_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorBgMenuElevated, token.borderRadius, token === null || token === void 0 ? void 0 : token.colorBgTextHover, token === null || token === void 0 ? void 0 : token.colorTextSecondary, token === null || token === void 0 ? void 0 : token.colorText, token === null || token === void 0 ? void 0 : token.colorTextBase, token.colorBgElevated, dark, props, prefixCls, hashId, headerContentRender]);
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classNames(prefixCls, hashId, propsClassName, _defineProperty({}, "".concat(prefixCls, "-light"), true)),
    style: style,
    children: /*#__PURE__*/_jsxs("div", {
      ref: ref,
      className: classNames("".concat(prefixCls, "-main"), hashId, _defineProperty({}, "".concat(prefixCls, "-wide"), contentWidth === 'Fixed' && layout === 'top')),
      children: [headerDom && /*#__PURE__*/_jsxs("div", {
        className: classNames("".concat(prefixCls, "-main-left ").concat(hashId)),
        onClick: onMenuHeaderClick,
        children: [/*#__PURE__*/_jsx(AppsLogoComponents, _objectSpread({}, props)), /*#__PURE__*/_jsx("div", {
          className: "".concat(prefixCls, "-logo ").concat(hashId).trim(),
          id: "logo",
          children: headerDom
        }, "logo")]
      }), /*#__PURE__*/_jsx("div", {
        style: {
          flex: 1
        },
        className: "".concat(prefixCls, "-menu ").concat(hashId).trim(),
        children: contentDom
      }), (rightContentRender || actionsRender || props.avatarProps) && /*#__PURE__*/_jsx(ActionsContent, _objectSpread(_objectSpread({
        rightContentRender: rightContentRender
      }, props), {}, {
        prefixCls: prefixCls
      }))]
    })
  }));
};
export { TopNavHeader };