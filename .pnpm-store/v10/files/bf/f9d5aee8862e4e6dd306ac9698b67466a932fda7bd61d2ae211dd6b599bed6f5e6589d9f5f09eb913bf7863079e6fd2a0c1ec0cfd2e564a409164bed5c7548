"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findItem = exports.default = void 0;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _xProvider = require("../x-provider");
const findItem = (keyPath, items) => {
  const keyToFind = keyPath[0]; // Get the first key from the keyPath

  for (const item of items) {
    if (item.key === keyToFind) {
      // If the item is found and this is the last key in the path
      if (keyPath.length === 1) return item;

      // If it is a SubItemType, recurse to find in its children
      if ('children' in item) {
        return findItem(keyPath.slice(1), item.children);
      }
    }
  }
  return null;
};
exports.findItem = findItem;
const ActionMenu = props => {
  const {
    onClick: onMenuClick,
    item
  } = props;
  const {
    children = [],
    triggerSubMenuAction = 'hover'
  } = item;
  const {
    getPrefixCls
  } = (0, _xProvider.useXProviderContext)();
  const prefixCls = getPrefixCls('actions', props.prefixCls);
  const icon = item?.icon ?? /*#__PURE__*/_react.default.createElement(_icons.EllipsisOutlined, null);
  const menuProps = {
    items: children,
    onClick: ({
      key,
      keyPath,
      domEvent
    }) => {
      if (findItem(keyPath, children)?.onItemClick) {
        findItem(keyPath, children)?.onItemClick?.(findItem(keyPath, children));
        return;
      }
      onMenuClick?.({
        key,
        keyPath: [...keyPath, item.key],
        domEvent,
        item: findItem(keyPath, children)
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    menu: menuProps,
    overlayClassName: `${prefixCls}-sub-item`,
    arrow: true,
    trigger: [triggerSubMenuAction]
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `${prefixCls}-list-item`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `${prefixCls}-list-item-icon`
  }, icon)));
};
var _default = exports.default = ActionMenu;