"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["key", "name"];
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
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var tempClassName = getPrefixCls('pro-table-dropdown');
  var dropdownProps = (0, _proUtils.menuOverlayCompatible)({
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Dropdown, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dropdownProps), {}, {
    className: (0, _classnames.default)(tempClassName, className),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Button, {
      style: style,
      children: [children, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DownOutlined, {})]
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
  var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var className = getPrefixCls('pro-table-dropdown');
  var dropdownProps = (0, _proUtils.menuOverlayCompatible)({
    onClick: function onClick(params) {
      onSelect === null || onSelect === void 0 || onSelect(params.key);
    },
    items: menus.map(function (_ref3) {
      var key = _ref3.key,
        name = _ref3.name,
        rest = (0, _objectWithoutProperties2.default)(_ref3, _excluded);
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({
        key: key
      }, rest), {}, {
        title: rest.title,
        label: name
      });
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Dropdown, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dropdownProps), {}, {
    className: (0, _classnames.default)(className, propsClassName),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      style: style,
      children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.EllipsisOutlined, {})
    })
  }));
};
TableDropdown.Button = DropdownButton;
var _default = exports.default = TableDropdown;