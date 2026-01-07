import _extends from "@babel/runtime/helpers/esm/extends";
import { Typography } from 'antd';
import classnames from 'classnames';
import React from 'react';
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import useStyle from "./style";
const Prompts = props => {
  const {
    prefixCls: customizePrefixCls,
    title,
    className,
    items,
    onItemClick,
    vertical,
    wrap,
    rootClassName,
    styles = {},
    classNames = {},
    style,
    ...htmlProps
  } = props;

  // ============================ PrefixCls ============================
  const {
    getPrefixCls,
    direction
  } = useXProviderContext();
  const prefixCls = getPrefixCls('prompts', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = useXComponentConfig('prompts');

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const mergedCls = classnames(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const mergedListCls = classnames(`${prefixCls}-list`, contextConfig.classNames.list, classNames.list, {
    [`${prefixCls}-list-wrap`]: wrap
  }, {
    [`${prefixCls}-list-vertical`]: vertical
  });

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", _extends({}, htmlProps, {
    className: mergedCls,
    style: {
      ...style,
      ...contextConfig.style
    }
  }), title && /*#__PURE__*/React.createElement(Typography.Title, {
    level: 5,
    className: classnames(`${prefixCls}-title`, contextConfig.classNames.title, classNames.title),
    style: {
      ...contextConfig.styles.title,
      ...styles.title
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: mergedListCls,
    style: {
      ...contextConfig.styles.list,
      ...styles.list
    }
  }, items?.map((info, index) => {
    const isNest = info.children && info.children.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: info.key || `key_${index}`,
      style: {
        ...contextConfig.styles.item,
        ...styles.item
      },
      className: classnames(`${prefixCls}-item`, contextConfig.classNames.item, classNames.item, {
        [`${prefixCls}-item-disabled`]: info.disabled,
        [`${prefixCls}-item-has-nest`]: isNest
      }),
      onClick: () => {
        if (!isNest && onItemClick) {
          onItemClick({
            data: info
          });
        }
      }
    }, info.icon && /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-icon`
    }, info.icon), /*#__PURE__*/React.createElement("div", {
      className: classnames(`${prefixCls}-content`, contextConfig.classNames.itemContent, classNames.itemContent),
      style: {
        ...contextConfig.styles.itemContent,
        ...styles.itemContent
      }
    }, info.label && /*#__PURE__*/React.createElement("h6", {
      className: `${prefixCls}-label`
    }, info.label), info.description && /*#__PURE__*/React.createElement("p", {
      className: `${prefixCls}-desc`
    }, info.description), isNest && /*#__PURE__*/React.createElement(Prompts, {
      className: `${prefixCls}-nested`,
      items: info.children,
      vertical: true,
      onItemClick: onItemClick,
      classNames: {
        list: classNames.subList,
        item: classNames.subItem
      },
      styles: {
        list: styles.subList,
        item: styles.subItem
      }
    })));
  }))));
};
if (process.env.NODE_ENV !== 'production') {
  Prompts.displayName = 'Prompts';
}
export default Prompts;