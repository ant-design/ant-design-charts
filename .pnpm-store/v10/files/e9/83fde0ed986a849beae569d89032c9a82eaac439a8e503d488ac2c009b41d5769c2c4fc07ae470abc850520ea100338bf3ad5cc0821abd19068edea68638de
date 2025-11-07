import _extends from "@babel/runtime/helpers/esm/extends";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Avatar, Tooltip, Typography } from 'antd';
import classnames from 'classnames';
import CSSMotion from 'rc-motion';
import pickAttrs from "rc-util/es/pickAttrs";
import React from 'react';
export let THOUGHT_CHAIN_ITEM_STATUS = /*#__PURE__*/function (THOUGHT_CHAIN_ITEM_STATUS) {
  THOUGHT_CHAIN_ITEM_STATUS["PENDING"] = "pending";
  THOUGHT_CHAIN_ITEM_STATUS["SUCCESS"] = "success";
  THOUGHT_CHAIN_ITEM_STATUS["ERROR"] = "error";
  return THOUGHT_CHAIN_ITEM_STATUS;
}({});
export const ThoughtChainNodeContext = /*#__PURE__*/React.createContext(null);
const ThoughtChainNode = props => {
  const {
    info = {},
    nextStatus,
    onClick,
    ...restProps
  } = props;
  const domProps = pickAttrs(restProps, {
    attr: true,
    aria: true,
    data: true
  });

  // ================= ThoughtChainNodeContext ====================
  const {
    prefixCls,
    collapseMotion,
    enableCollapse,
    expandedKeys,
    direction,
    classNames = {},
    styles = {}
  } = React.useContext(ThoughtChainNodeContext);

  // ============================ Info ============================
  const id = React.useId();
  const {
    key = id,
    icon,
    title,
    extra,
    content,
    footer,
    status,
    description
  } = info;

  // ============================ Tooltip State ============================
  const [showTooltip, setShowTooltip] = React.useState(false);
  const textRef = React.useRef(null);
  React.useEffect(() => {
    const checkTextOverflow = () => {
      if (textRef.current) {
        setShowTooltip(textRef.current.scrollWidth > textRef.current.clientWidth);
      }
    };
    checkTextOverflow();
    const resizeObserver = new ResizeObserver(checkTextOverflow);
    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [title]);

  // ============================ Style ============================
  const itemCls = `${prefixCls}-item`;

  // ============================ Event ============================
  const onThoughtChainNodeClick = () => onClick?.(key);

  // ============================ Content Open ============================
  const contentOpen = expandedKeys?.includes(key);

  // ============================ Render ============================
  return /*#__PURE__*/React.createElement("div", _extends({}, domProps, {
    className: classnames(itemCls, {
      [`${itemCls}-${status}${nextStatus ? `-${nextStatus}` : ''}`]: status
    }, props.className),
    style: props.style
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames(`${itemCls}-header`, classNames.itemHeader),
    style: styles.itemHeader,
    onClick: onThoughtChainNodeClick
  }, /*#__PURE__*/React.createElement(Avatar, {
    icon: icon,
    className: `${itemCls}-icon`
  }), /*#__PURE__*/React.createElement("div", {
    className: classnames(`${itemCls}-header-box`, {
      [`${itemCls}-collapsible`]: enableCollapse && content
    })
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: showTooltip ? title : undefined,
    placement: direction === 'rtl' ? 'topRight' : 'topLeft'
  }, /*#__PURE__*/React.createElement("div", {
    className: `${itemCls}-title`
  }, enableCollapse && content && (direction === 'rtl' ? /*#__PURE__*/React.createElement(LeftOutlined, {
    className: `${itemCls}-collapse-icon`,
    rotate: contentOpen ? -90 : 0
  }) : /*#__PURE__*/React.createElement(RightOutlined, {
    className: `${itemCls}-collapse-icon`,
    rotate: contentOpen ? 90 : 0
  })), /*#__PURE__*/React.createElement("div", {
    ref: textRef,
    className: `${itemCls}-title-content`
  }, title))), description && /*#__PURE__*/React.createElement(Typography.Text, {
    className: `${itemCls}-desc`,
    ellipsis: {
      tooltip: {
        placement: direction === 'rtl' ? 'topRight' : 'topLeft',
        title: description
      }
    },
    type: "secondary"
  }, description)), extra && /*#__PURE__*/React.createElement("div", {
    className: `${itemCls}-extra`
  }, extra)), content && /*#__PURE__*/React.createElement(CSSMotion, _extends({}, collapseMotion, {
    visible: enableCollapse ? contentOpen : true
  }), ({
    className: motionClassName,
    style
  }, motionRef) => /*#__PURE__*/React.createElement("div", {
    className: classnames(`${itemCls}-content`, motionClassName),
    ref: motionRef,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames(`${itemCls}-content-box`, classNames.itemContent),
    style: styles.itemContent
  }, content))), footer && /*#__PURE__*/React.createElement("div", {
    className: classnames(`${itemCls}-footer`, classNames.itemFooter),
    style: styles.itemFooter
  }, footer));
};
export default ThoughtChainNode;