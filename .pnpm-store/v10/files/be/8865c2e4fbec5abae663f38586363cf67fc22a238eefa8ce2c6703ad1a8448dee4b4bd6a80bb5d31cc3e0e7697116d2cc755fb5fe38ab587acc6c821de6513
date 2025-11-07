import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["key", "name"];
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import { menuOverlayCompatible } from '@ant-design/pro-utils';
import { Button, ConfigProvider, Dropdown } from 'antd';
import classnames from 'classnames';
import React, { useContext } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * 一个简单的下拉菜单
 *
 * @param param0
 */
var DropdownButton = function DropdownButton(_ref) {
  var children = _ref.children,
    menus = _ref.menus,
    onSelect = _ref.onSelect,
    className = _ref.className,
    style = _ref.style;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var tempClassName = getPrefixCls('pro-table-dropdown');
  var dropdownProps = menuOverlayCompatible({
    onClick: function onClick(params) {
      return onSelect && onSelect(params.key);
    },
    items: menus === null || menus === void 0 ? void 0 : menus.map(function (item) {
      return {
        label: item.name,
        key: item.key
      };
    })
  });
  return /*#__PURE__*/_jsx(Dropdown, _objectSpread(_objectSpread({}, dropdownProps), {}, {
    className: classnames(tempClassName, className),
    children: /*#__PURE__*/_jsxs(Button, {
      style: style,
      children: [children, " ", /*#__PURE__*/_jsx(DownOutlined, {})]
    })
  }));
};
var TableDropdown = function TableDropdown(_ref2) {
  var propsClassName = _ref2.className,
    style = _ref2.style,
    onSelect = _ref2.onSelect,
    _ref2$menus = _ref2.menus,
    menus = _ref2$menus === void 0 ? [] : _ref2$menus,
    children = _ref2.children;
  var _useContext2 = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var className = getPrefixCls('pro-table-dropdown');
  var dropdownProps = menuOverlayCompatible({
    onClick: function onClick(params) {
      onSelect === null || onSelect === void 0 || onSelect(params.key);
    },
    items: menus.map(function (_ref3) {
      var key = _ref3.key,
        name = _ref3.name,
        rest = _objectWithoutProperties(_ref3, _excluded);
      return _objectSpread(_objectSpread({
        key: key
      }, rest), {}, {
        title: rest.title,
        label: name
      });
    })
  });
  return /*#__PURE__*/_jsx(Dropdown, _objectSpread(_objectSpread({}, dropdownProps), {}, {
    className: classnames(className, propsClassName),
    children: /*#__PURE__*/_jsx("a", {
      style: style,
      children: children || /*#__PURE__*/_jsx(EllipsisOutlined, {})
    })
  }));
};
TableDropdown.Button = DropdownButton;
export default TableDropdown;