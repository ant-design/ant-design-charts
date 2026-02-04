import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import React from 'react';
import { useXProviderContext } from "../x-provider";
export const findItem = (keyPath, items) => {
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
  } = useXProviderContext();
  const prefixCls = getPrefixCls('actions', props.prefixCls);
  const icon = item?.icon ?? /*#__PURE__*/React.createElement(EllipsisOutlined, null);
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
  return /*#__PURE__*/React.createElement(Dropdown, {
    menu: menuProps,
    overlayClassName: `${prefixCls}-sub-item`,
    arrow: true,
    trigger: [triggerSubMenuAction]
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-list-item`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-list-item-icon`
  }, icon)));
};
export default ActionMenu;