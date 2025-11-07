import _extends from "@babel/runtime/helpers/esm/extends";
import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import classnames from 'classnames';
import pickAttrs from "rc-util/es/pickAttrs";
import React from 'react';
const stopPropagation = e => {
  e.stopPropagation();
};
const ConversationsItem = props => {
  const {
    prefixCls,
    info,
    className,
    direction,
    onClick,
    active,
    menu,
    ...restProps
  } = props;
  const domProps = pickAttrs(restProps, {
    aria: true,
    data: true,
    attr: true
  });

  // ============================= MISC =============================
  const {
    disabled
  } = info;

  // ============================ Style =============================
  const mergedCls = classnames(className, `${prefixCls}-item`, {
    [`${prefixCls}-item-active`]: active && !disabled
  }, {
    [`${prefixCls}-item-disabled`]: disabled
  });

  // ============================ Events ============================
  const onInternalClick = () => {
    if (!disabled && onClick) {
      onClick(info);
    }
  };

  // ============================ Menu ============================

  const {
    trigger,
    ...dropdownMenu
  } = menu || {};
  const getPopupContainer = dropdownMenu?.getPopupContainer;
  const renderMenuTrigger = conversation => {
    const originTriggerNode = /*#__PURE__*/React.createElement(EllipsisOutlined, {
      onClick: stopPropagation,
      className: `${prefixCls}-menu-icon`
    });
    if (trigger) {
      return typeof trigger === 'function' ? trigger(conversation, {
        originNode: originTriggerNode
      }) : trigger;
    }
    return originTriggerNode;
  };

  // ============================ Render ============================
  return /*#__PURE__*/React.createElement("li", _extends({
    title: typeof info.label === 'object' ? undefined : `${info.label}`
  }, domProps, {
    className: mergedCls,
    onClick: onInternalClick
  }), info.icon && /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-icon`
  }, info.icon), /*#__PURE__*/React.createElement(Typography.Text, {
    className: `${prefixCls}-label`
  }, info.label), !disabled && menu && /*#__PURE__*/React.createElement("div", {
    onClick: stopPropagation
  }, /*#__PURE__*/React.createElement(Dropdown, {
    menu: dropdownMenu,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight',
    trigger: ['click'],
    disabled: disabled,
    getPopupContainer: getPopupContainer
  }, renderMenuTrigger(info))));
};
export default ConversationsItem;