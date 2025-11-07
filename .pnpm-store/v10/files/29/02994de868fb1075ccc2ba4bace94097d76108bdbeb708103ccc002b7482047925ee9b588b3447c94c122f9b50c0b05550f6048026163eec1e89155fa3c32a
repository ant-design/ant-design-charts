import _extends from "@babel/runtime/helpers/esm/extends";
import { Tooltip } from 'antd';
import classnames from 'classnames';
import pickAttrs from "rc-util/es/pickAttrs";
import React from 'react';
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import ActionMenu from "./ActionMenu";
import useStyle from "./style";
const Actions = props => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName = {},
    style = {},
    variant = 'borderless',
    block = false,
    onClick,
    items = [],
    ...otherHtmlProps
  } = props;
  const domProps = pickAttrs(otherHtmlProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ============================ PrefixCls ============================
  const {
    getPrefixCls,
    direction
  } = useXProviderContext();
  const prefixCls = getPrefixCls('actions', customizePrefixCls);

  // ======================= Component Config =======================
  const contextConfig = useXComponentConfig('actions');

  // ============================ Styles ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const mergedCls = classnames(prefixCls, contextConfig.className, rootClassName, cssVarCls, hashId, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const mergedStyle = {
    ...contextConfig.style,
    ...style
  };
  const getTooltipNode = (node, title, tooltipProps) => {
    if (title) {
      return /*#__PURE__*/React.createElement(Tooltip, _extends({}, tooltipProps, {
        title: title
      }), node);
    }
    return node;
  };
  const handleItemClick = (key, item, domEvent) => {
    if (item.onItemClick) {
      item.onItemClick(item);
      return;
    }
    onClick?.({
      key,
      item,
      keyPath: [key],
      domEvent
    });
  };
  const renderSingleItem = item => {
    const {
      icon,
      label,
      key
    } = item;
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(`${prefixCls}-list-item`),
      onClick: domEvent => handleItemClick(key, item, domEvent),
      key: key
    }, getTooltipNode( /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-list-item-icon`
    }, icon), label));
  };
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", _extends({
    className: mergedCls
  }, domProps, {
    style: mergedStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames(`${prefixCls}-list`, variant, block)
  }, items.map(item => {
    if ('children' in item) {
      return /*#__PURE__*/React.createElement(ActionMenu, {
        key: item.key,
        item: item,
        prefixCls: prefixCls,
        onClick: onClick
      });
    }
    return renderSingleItem(item);
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Actions.displayName = 'Actions';
}
export default Actions;