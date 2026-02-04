import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import * as React from 'react';
export const SendHeaderContext = /*#__PURE__*/React.createContext({});
const collapseHeight = () => ({
  height: 0
});
const expandedHeight = ele => ({
  height: ele.scrollHeight
});
export default function SenderHeader(props) {
  const {
    title,
    onOpenChange,
    open,
    children,
    className,
    style,
    classNames: classes = {},
    styles = {},
    closable,
    forceRender
  } = props;
  const {
    prefixCls
  } = React.useContext(SendHeaderContext);
  const headerCls = `${prefixCls}-header`;
  return /*#__PURE__*/React.createElement(CSSMotion, {
    motionEnter: true,
    motionLeave: true,
    motionName: `${headerCls}-motion`,
    leavedClassName: `${headerCls}-motion-hidden`,
    onEnterStart: collapseHeight,
    onEnterActive: expandedHeight,
    onLeaveStart: expandedHeight,
    onLeaveActive: collapseHeight,
    visible: open,
    forceRender: forceRender
  }, ({
    className: motionClassName,
    style: motionStyle
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames(headerCls, motionClassName, className),
      style: {
        ...motionStyle,
        ...style
      }
    }, (closable !== false || title) && /*#__PURE__*/React.createElement("div", {
      className:
      // We follow antd naming standard here.
      // So the header part is use `-header` suffix.
      // Though its little bit weird for double `-header`.
      classNames(`${headerCls}-header`, classes.header),
      style: {
        ...styles.header
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: `${headerCls}-title`
    }, title), closable !== false && /*#__PURE__*/React.createElement("div", {
      className: `${headerCls}-close`
    }, /*#__PURE__*/React.createElement(Button, {
      type: "text",
      icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
      size: "small",
      onClick: () => {
        onOpenChange?.(!open);
      }
    }))), children && /*#__PURE__*/React.createElement("div", {
      className: classNames(`${headerCls}-content`, classes.content),
      style: {
        ...styles.content
      }
    }, children));
  });
}