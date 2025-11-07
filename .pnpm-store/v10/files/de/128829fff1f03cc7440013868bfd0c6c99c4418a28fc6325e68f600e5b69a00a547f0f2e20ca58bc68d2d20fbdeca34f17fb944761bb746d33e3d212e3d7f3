import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["tab", "children"],
  _excluded2 = ["key", "tab", "tabKey", "disabled", "destroyInactiveTabPane", "children", "className", "style", "cardProps"];
import { ConfigProvider, Tabs, version } from 'antd';
import classNames from 'classnames';
import toArray from "rc-util/es/Children/toArray";
import { noteOnce } from "rc-util/es/warning";
import React, { useContext } from 'react';
import Card from "../Card";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
export function useLegacyItems(items, children, tabs) {
  if (items) {
    return items.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        children: /*#__PURE__*/_jsx(Card, _objectSpread(_objectSpread({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
          children: item.children
        }))
      });
    });
  }
  noteOnce(!tabs, 'Tabs.TabPane is deprecated. Please use `items` directly.');
  var childrenItems = toArray(children).map(function (node) {
    if ( /*#__PURE__*/React.isValidElement(node)) {
      var key = node.key,
        props = node.props;
      var _ref = props || {},
        tab = _ref.tab,
        tempChild = _ref.children,
        restProps = _objectWithoutProperties(_ref, _excluded);
      var item = _objectSpread(_objectSpread({
        key: String(key)
      }, restProps), {}, {
        children: /*#__PURE__*/_jsx(Card, _objectSpread(_objectSpread({}, tabs === null || tabs === void 0 ? void 0 : tabs.cardProps), {}, {
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
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  // 如果是antd v5 则返回为空
  if (version.startsWith('5')) {
    return /*#__PURE__*/_jsx(_Fragment, {});
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
      rest = _objectWithoutProperties(props, _excluded2);
    var prefixCls = getPrefixCls('pro-card-tabpane');
    var tabPaneClassName = classNames(prefixCls, className);
    return /*#__PURE__*/_jsx(Tabs.TabPane, _objectSpread(_objectSpread({
      tabKey: tabKey,
      tab: tab,
      className: tabPaneClassName,
      style: style,
      disabled: disabled,
      destroyInactiveTabPane: destroyInactiveTabPane
    }, rest), {}, {
      children: /*#__PURE__*/_jsx(Card, _objectSpread(_objectSpread({}, cardProps), {}, {
        children: children
      }))
    }), key);
  }
};
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
  TabPane.displayName = 'DeprecatedTabPane';
}
export default TabPane;