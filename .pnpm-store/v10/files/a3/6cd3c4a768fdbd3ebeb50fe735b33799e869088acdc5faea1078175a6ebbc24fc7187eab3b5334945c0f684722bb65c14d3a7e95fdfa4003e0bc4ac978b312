import _extends from "@babel/runtime/helpers/esm/extends";
import classnames from 'classnames';
import React from 'react';
import GroupTitle, { GroupTitleContext } from "./GroupTitle";
import ConversationsItem from "./Item";
import useMergedState from "rc-util/es/hooks/useMergedState";
import useXComponentConfig from "../_util/hooks/use-x-component-config";
import { useXProviderContext } from "../x-provider";
import useGroupable from "./hooks/useGroupable";
import useStyle from "./style";
import pickAttrs from "rc-util/es/pickAttrs";

/**
 * @desc 会话列表组件参数
 * @descEN Props for the conversation list component
 */

const Conversations = props => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    items,
    activeKey,
    defaultActiveKey,
    onActiveChange,
    menu,
    styles = {},
    classNames = {},
    groupable,
    className,
    style,
    ...restProps
  } = props;
  const domProps = pickAttrs(restProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ============================ ActiveKey ============================
  const [mergedActiveKey, setMergedActiveKey] = useMergedState(defaultActiveKey, {
    value: activeKey
  });

  // ============================ Groupable ============================
  const [groupList, enableGroup] = useGroupable(groupable, items);

  // ============================ Prefix ============================
  const {
    getPrefixCls,
    direction
  } = useXProviderContext();
  const prefixCls = getPrefixCls('conversations', customizePrefixCls);

  // ===================== Component Config =========================
  const contextConfig = useXComponentConfig('conversations');

  // ============================ Style ============================
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  const mergedCls = classnames(prefixCls, contextConfig.className, className, rootClassName, hashId, cssVarCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });

  // ============================ Events ============================
  const onConversationItemClick = info => {
    setMergedActiveKey(info.key);
    if (onActiveChange) {
      onActiveChange(info.key);
    }
  };

  // ============================ Render ============================
  return wrapCSSVar( /*#__PURE__*/React.createElement("ul", _extends({}, domProps, {
    style: {
      ...contextConfig.style,
      ...style
    },
    className: mergedCls
  }), groupList.map((groupInfo, groupIndex) => {
    const convItems = groupInfo.data.map((convInfo, convIndex) => {
      const {
        label: _,
        disabled: __,
        icon: ___,
        ...restInfo
      } = convInfo;
      return /*#__PURE__*/React.createElement(ConversationsItem, _extends({}, restInfo, {
        key: convInfo.key || `key-${convIndex}`,
        info: convInfo,
        prefixCls: prefixCls,
        direction: direction,
        className: classnames(classNames.item, contextConfig.classNames.item, convInfo.className),
        style: {
          ...contextConfig.styles.item,
          ...styles.item,
          ...convInfo.style
        },
        menu: typeof menu === 'function' ? menu(convInfo) : menu,
        active: mergedActiveKey === convInfo.key,
        onClick: onConversationItemClick
      }));
    });

    // With group to show the title
    if (enableGroup) {
      return /*#__PURE__*/React.createElement("li", {
        key: groupInfo.name || `key-${groupIndex}`
      }, /*#__PURE__*/React.createElement(GroupTitleContext.Provider, {
        value: {
          prefixCls
        }
      }, groupInfo.title?.(groupInfo.name, {
        components: {
          GroupTitle
        }
      }) || /*#__PURE__*/React.createElement(GroupTitle, {
        key: groupInfo.name
      }, groupInfo.name)), /*#__PURE__*/React.createElement("ul", {
        className: `${prefixCls}-list`
      }, convItems));
    }
    return convItems;
  })));
};
if (process.env.NODE_ENV !== 'production') {
  Conversations.displayName = 'Conversations';
}
export default Conversations;