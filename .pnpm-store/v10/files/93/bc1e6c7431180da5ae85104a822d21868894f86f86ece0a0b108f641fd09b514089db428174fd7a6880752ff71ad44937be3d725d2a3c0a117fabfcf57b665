"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.useLegacyItems = useLegacyItems;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _warning = require("rc-util/lib/warning");
var _react = _interopRequireWildcard(require("react"));
var _Card = _interopRequireDefault(require("../Card"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["tab", "children"],
  _excluded2 = ["key", "tab", "tabKey", "disabled", "destroyInactiveTabPane", "children", "className", "style", "cardProps"];
function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
function useLegacyItems(items, children, tabs) {
  if (items) {
    return items.map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: item.children
        }))
      });
    });
  }
  (0, _warning.noteOnce)(!tabs, 'Tabs.TabPane is deprecated. Please use `items` directly.');
  var childrenItems = (0, _toArray.default)(children).map(function (node) {
    if ( /*#__PURE__*/_react.default.isValidElement(node)) {
      var key = node.key,
        props = node.props;
      var _ref = props || {},
        tab = _ref.tab,
        tempChild = _ref.children,
        restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
      var item = (0, _objectSpread2.default)((0, _objectSpread2.default)({
        key: String(key)
      }, restProps), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: tempChild
        })),
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
/**
 * @deprecated ProComponets 3.0
 */
var TabPane = function TabPane(props) {
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  // 如果是antd v5 则返回为空
  if (_antd.version.startsWith('5')) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
  } else {
    var key = props.key,
      tab = props.tab,
      tabKey = props.tabKey,
      disabled = props.disabled,
      destroyInactiveTabPane = props.destroyInactiveTabPane,
      children = props.children,
      className = props.className,
      style = props.style,
      cardProps = props.cardProps,
      rest = (0, _objectWithoutProperties2.default)(props, _excluded2);
    var prefixCls = getPrefixCls('pro-card-tabpane');
    var tabPaneClassName = (0, _classnames.default)(prefixCls, className);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tabs.TabPane, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      tabKey: tabKey,
      tab: tab,
      className: tabPaneClassName,
      style: style,
      disabled: disabled,
      destroyInactiveTabPane: destroyInactiveTabPane
    }, rest), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, cardProps), {}, {
        children: children
      }))
    }), key);
  }
};
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  TabPane.displayName = 'DeprecatedTabPane';
}
var _default = exports.default = TabPane;