import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { DownOutlined } from '@ant-design/icons';
import { ProProvider } from '@ant-design/pro-provider';
import { compareVersions, menuOverlayCompatible } from '@ant-design/pro-utils';
import { Dropdown, Space, Tabs, version } from 'antd';
import classNames from 'classnames';
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useContext } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
var HeaderMenu = function HeaderMenu(props) {
  var _useContext = useContext(ProProvider),
    hashId = _useContext.hashId;
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    _props$type = props.type,
    type = _props$type === void 0 ? 'inline' : _props$type,
    prefixCls = props.prefixCls,
    propActiveKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey;
  var _useMergedState = useMergedState(propActiveKey || defaultActiveKey, {
      value: propActiveKey,
      onChange: props.onChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    activeKey = _useMergedState2[0],
    setActiveKey = _useMergedState2[1];
  if (items.length < 1) {
    return null;
  }
  var activeItem = items.find(function (item) {
    return item.key === activeKey;
  }) || items[0];
  if (type === 'inline') {
    return /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(prefixCls, "-menu"), "".concat(prefixCls, "-inline-menu"), hashId),
      children: items.map(function (item, index) {
        return /*#__PURE__*/_jsx("div", {
          onClick: function onClick() {
            setActiveKey(item.key);
          },
          className: classNames("".concat(prefixCls, "-inline-menu-item"), activeItem.key === item.key ? "".concat(prefixCls, "-inline-menu-item-active") : undefined, hashId),
          children: item.label
        }, item.key || index);
      })
    });
  }
  if (type === 'tab') {
    return /*#__PURE__*/_jsx(Tabs, {
      items: items.map(function (item) {
        var _item$key;
        return _objectSpread(_objectSpread({}, item), {}, {
          key: (_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString()
        });
      }),
      activeKey: activeItem.key,
      onTabClick: function onTabClick(key) {
        return setActiveKey(key);
      },
      children: compareVersions(version, '4.23.0') < 0 ? items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        /* 如果版本低于 4.23.0，不支持 items */
        return /*#__PURE__*/_createElement(Tabs.TabPane, _objectSpread(_objectSpread({}, item), {}, {
          key: item.key || index,
          tab: item.label
        }));
      }) : null
    });
  }
  var dropdownProps = menuOverlayCompatible({
    selectedKeys: [activeItem.key],
    onClick: function onClick(item) {
      setActiveKey(item.key);
    },
    items: items.map(function (item, index) {
      return {
        key: item.key || index,
        disabled: item.disabled,
        label: item.label
      };
    })
  });
  return /*#__PURE__*/_jsx("div", {
    className: classNames("".concat(prefixCls, "-menu"), "".concat(prefixCls, "-dropdownmenu")),
    children: /*#__PURE__*/_jsx(Dropdown, _objectSpread(_objectSpread({
      trigger: ['click']
    }, dropdownProps), {}, {
      children: /*#__PURE__*/_jsxs(Space, {
        className: "".concat(prefixCls, "-dropdownmenu-label"),
        children: [activeItem.label, /*#__PURE__*/_jsx(DownOutlined, {})]
      })
    }))
  });
};
export default HeaderMenu;