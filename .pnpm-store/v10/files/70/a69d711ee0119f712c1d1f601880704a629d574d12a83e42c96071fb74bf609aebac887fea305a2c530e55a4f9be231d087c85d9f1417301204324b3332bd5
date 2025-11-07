import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["title", "bordered", "onClose", "footer", "height", "extraRender"];
import { CloseOutlined, ProfileOutlined } from '@ant-design/icons';
import { ProProvider, isNeedOpenHash } from '@ant-design/pro-provider';
import { coverToNewToken } from '@ant-design/pro-utils';
import { Card, ConfigProvider, Menu } from 'antd';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import React, { useContext, useMemo, useState } from 'react';
import { ProHelpProvide } from "./HelpProvide";
import { ProHelpContentPanel } from "./ProHelpContentPanel";
import { ProHelpSelect } from "./Search";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var SelectKeyProvide = /*#__PURE__*/React.createContext({
  selectedKey: undefined,
  setSelectedKey: function setSelectedKey() {}
});
/**
 * ProHelpPanel 组件是一个帮助中心面板组件，具有可折叠的左侧菜单和右侧帮助内容区域。
 * 左侧菜单显示了帮助文档的目录结构，右侧帮助内容区域显示了用户选中的帮助文档内容。
 * 在左侧菜单中，用户可以通过点击目录来选择并显示相应的文档内容。
 * @param param0
 * @returns
 */
export var ProHelpPanel = function ProHelpPanel(_ref) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? '帮助中心' : _ref$title,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    onClose = _ref.onClose,
    footer = _ref.footer,
    height = _ref.height,
    extraRender = _ref.extraRender,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-help');
  var _useStyle = useStyle(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useContext2 = useContext(ProHelpProvide),
    dataSource = _useContext2.dataSource;
  var _useMergedState = useMergedState(undefined, {
      defaultValue: props.defaultSelectedKey,
      value: props.selectedKey,
      onChange: props.onSelectedKeyChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    selectedKey = _useMergedState2[0],
    setSelectedKey = _useMergedState2[1];
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    openKey = _useState2[0],
    setOpenKey = _useState2[1];
  var _useContext3 = useContext(ProProvider),
    token = _useContext3.token;
  var _useMergedState3 = useMergedState(true, {
      value: props.showLeftPanel,
      onChange: props.onShowLeftPanelChange
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    showLeftPanel = _useMergedState4[0],
    setShowLeftPanel = _useMergedState4[1];
  var dataSourceKeyMap = useMemo(function () {
    var map = new Map();
    dataSource.forEach(function (page) {
      var _page$children;
      map.set(page.key, page);
      (_page$children = page.children) === null || _page$children === void 0 || _page$children.forEach(function (item) {
        map.set(item.key || item.title, _objectSpread({
          parentKey: page.key
        }, item));
      });
    });
    return map;
  }, [dataSource]);
  var parentKey = useMemo(function () {
    var _dataSourceKeyMap$get;
    return (_dataSourceKeyMap$get = dataSourceKeyMap.get(selectedKey)) === null || _dataSourceKeyMap$get === void 0 ? void 0 : _dataSourceKeyMap$get.parentKey;
  }, [dataSourceKeyMap, selectedKey]);
  var defaultExtraActions = {
    collapsePanelAction: /*#__PURE__*/_jsx("div", {
      className: "".concat(className, "-actions-item ").concat(hashId).trim(),
      children: /*#__PURE__*/_jsx(ProfileOutlined, {
        title: "collapse panel",
        onClick: function onClick() {
          setShowLeftPanel(!showLeftPanel);
        }
      })
    }),
    helpSelectAction: /*#__PURE__*/_jsx(ProHelpSelect, {
      iconClassName: "".concat(className, "-actions-item"),
      className: "".concat(hashId, " ").concat(className, "-actions-input"),
      value: selectedKey,
      onChange: function onChange(value, item) {
        setSelectedKey(value);
        setOpenKey(item === null || item === void 0 ? void 0 : item.dataItemKey);
      }
    }),
    closeAction: /*#__PURE__*/_jsx("div", {
      className: "".concat(className, "-actions-item ").concat(hashId).trim(),
      children: /*#__PURE__*/_jsx(CloseOutlined, {
        title: "close panel",
        onClick: function onClick() {
          onClose === null || onClose === void 0 || onClose();
        }
      })
    })
  };
  var extraDomList = function extraDomList() {
    return /*#__PURE__*/_jsx("div", {
      className: "".concat(className, "-actions ").concat(hashId).trim(),
      children: extraRender ? extraRender(defaultExtraActions.collapsePanelAction, defaultExtraActions.helpSelectAction, defaultExtraActions.closeAction) : /*#__PURE__*/_jsxs(_Fragment, {
        children: [defaultExtraActions.collapsePanelAction, defaultExtraActions.helpSelectAction, onClose ? defaultExtraActions.closeAction : null]
      })
    });
  };
  return wrapSSR( /*#__PURE__*/_jsx(SelectKeyProvide.Provider, {
    value: {
      selectedKey: selectedKey,
      setSelectedKey: setSelectedKey
    },
    children: /*#__PURE__*/_jsxs(Card, {
      bordered: bordered,
      title: title,
      bodyStyle: {
        display: 'flex',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%'
      },
      size: "small",
      extra: extraDomList(),
      children: [showLeftPanel ? /*#__PURE__*/_jsx("div", {
        className: "".concat(hashId, " ").concat(className, "-left-panel "),
        style: {
          height: height
        },
        children: /*#__PURE__*/_jsx(ConfigProvider, {
          theme: {
            hashed: isNeedOpenHash(),
            token: {
              lineHeight: 1.2,
              fontSize: 12,
              controlHeightLG: 26
            },
            components: {
              Menu: coverToNewToken({
                radiusItem: token.borderRadius,
                colorActiveBarWidth: 0,
                colorActiveBarBorderSize: 0,
                colorItemBgSelected: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgMenuItemSelected) || 'rgba(0, 0, 0, 0.04)',
                colorItemBgActive: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
                colorItemText: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu) || 'rgba(0, 0, 0, 0.65)',
                colorItemTextHover: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
                colorItemTextSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                colorItemBg: 'transparent',
                colorSubItemBg: 'transparent',
                popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
              })
            }
          },
          children: /*#__PURE__*/_jsx(Menu, {
            className: "".concat(hashId, " ").concat(className, "-left-panel-menu"),
            openKeys: [parentKey, openKey],
            onOpenChange: function onOpenChange(keys) {
              setOpenKey(keys.at(-1) || '');
            },
            selectedKeys: selectedKey ? [selectedKey] : [],
            onSelect: function onSelect(_ref2) {
              var selectedKeys = _ref2.selectedKeys;
              setSelectedKey(selectedKeys.at(-1) || '');
            },
            mode: "inline",
            items: dataSource.map(function (item) {
              return {
                key: item.key,
                label: item.title,
                children: item.children.map(function (child) {
                  return {
                    key: child.key,
                    label: child.title
                  };
                })
              };
            })
          })
        })
      }) : null, /*#__PURE__*/_jsxs("div", {
        className: "".concat(hashId, " ").concat(className, "-content-panel"),
        style: {
          height: height
        },
        children: [selectedKey ? /*#__PURE__*/_jsx(ProHelpContentPanel, {
          parentItem: dataSourceKeyMap.get(parentKey),
          className: "".concat(className, "-content-render"),
          selectedKey: selectedKey,
          onScroll: function onScroll(key) {
            return setSelectedKey(key);
          }
        }) : null, footer ? /*#__PURE__*/_jsx("div", {
          className: "".concat(hashId, " ").concat(className, "-footer"),
          children: footer
        }) : null]
      })]
    })
  }));
};