"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var HeaderMenu = function HeaderMenu(props) {
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    _props$type = props.type,
    type = _props$type === void 0 ? 'inline' : _props$type,
    prefixCls = props.prefixCls,
    propActiveKey = props.activeKey,
    defaultActiveKey = props.defaultActiveKey;
  var _useMergedState = (0, _useMergedState3.default)(propActiveKey || defaultActiveKey, {
      value: propActiveKey,
      onChange: props.onChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    activeKey = _useMergedState2[0],
    setActiveKey = _useMergedState2[1];
  if (items.length < 1) {
    return null;
  }
  var activeItem = items.find(function (item) {
    return item.key === activeKey;
  }) || items[0];
  if (type === 'inline') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-menu"), "".concat(prefixCls, "-inline-menu"), hashId),
      children: items.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          onClick: function onClick() {
            setActiveKey(item.key);
          },
          className: (0, _classnames.default)("".concat(prefixCls, "-inline-menu-item"), activeItem.key === item.key ? "".concat(prefixCls, "-inline-menu-item-active") : undefined, hashId),
          children: item.label
        }, item.key || index);
      })
    });
  }
  if (type === 'tab') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tabs, {
      items: items.map(function (item) {
        var _item$key;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          key: (_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString()
        });
      }),
      activeKey: activeItem.key,
      onTabClick: function onTabClick(key) {
        return setActiveKey(key);
      },
      children: (0, _proUtils.compareVersions)(_antd.version, '4.23.0') < 0 ? items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        /* 如果版本低于 4.23.0，不支持 items */
        return /*#__PURE__*/(0, _react.createElement)(_antd.Tabs.TabPane, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          key: item.key || index,
          tab: item.label
        }));
      }) : null
    });
  }
  var dropdownProps = (0, _proUtils.menuOverlayCompatible)({
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-menu"), "".concat(prefixCls, "-dropdownmenu")),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Dropdown, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      trigger: ['click']
    }, dropdownProps), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
        className: "".concat(prefixCls, "-dropdownmenu-label"),
        children: [activeItem.label, /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DownOutlined, {})]
      })
    }))
  });
};
var _default = exports.default = HeaderMenu;