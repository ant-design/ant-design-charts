import _extends from "@babel/runtime/helpers/esm/extends";
import classnames from 'classnames';
import pickAttrs from "rc-util/es/pickAttrs";
import React from 'react';
import { useXProviderContext } from "../x-provider";
import useCollapsible from "./hooks/useCollapsible";
import useStyle from "./style";
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import ThoughtChainNode, { ThoughtChainNodeContext } from "./Item";
const ThoughtChain = props => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    items,
    collapsible,
    styles = {},
    style,
    classNames = {},
    size = 'middle',
    ...restProps
  } = props;
  const domProps = pickAttrs(restProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ============================ Prefix ============================
  const {
    getPrefixCls,
    direction
  } = useXProviderContext();
  const rootPrefixCls = getPrefixCls();
  const prefixCls = getPrefixCls('thought-chain', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = useXComponentConfig('thoughtChain');

  // ============================ UseCollapsible ============================
  const [enableCollapse, expandedKeys, onItemExpand, collapseMotion] = useCollapsible(collapsible, prefixCls, rootPrefixCls);

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const mergedCls = classnames(className, rootClassName, prefixCls, contextConfig.className, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, `${prefixCls}-${size}`);

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", _extends({}, domProps, {
    className: mergedCls,
    style: {
      ...contextConfig.style,
      ...style
    }
  }), /*#__PURE__*/React.createElement(ThoughtChainNodeContext.Provider, {
    value: {
      prefixCls,
      enableCollapse,
      collapseMotion,
      expandedKeys,
      direction,
      classNames: {
        itemHeader: classnames(contextConfig.classNames.itemHeader, classNames.itemHeader),
        itemContent: classnames(contextConfig.classNames.itemContent, classNames.itemContent),
        itemFooter: classnames(contextConfig.classNames.itemFooter, classNames.itemFooter)
      },
      styles: {
        itemHeader: {
          ...contextConfig.styles.itemHeader,
          ...styles.itemHeader
        },
        itemContent: {
          ...contextConfig.styles.itemContent,
          ...styles.itemContent
        },
        itemFooter: {
          ...contextConfig.styles.itemFooter,
          ...styles.itemFooter
        }
      }
    }
  }, items?.map((item, index) => /*#__PURE__*/React.createElement(ThoughtChainNode, {
    key: item.key || `key_${index}`,
    className: classnames(contextConfig.classNames.item, classNames.item),
    style: {
      ...contextConfig.styles.item,
      ...styles.item
    },
    info: {
      ...item,
      icon: item.icon || index + 1
    },
    onClick: onItemExpand,
    nextStatus: items[index + 1]?.status || item.status
  })))));
};
if (process.env.NODE_ENV !== 'production') {
  ThoughtChain.displayName = 'ThoughtChain';
}
export default ThoughtChain;