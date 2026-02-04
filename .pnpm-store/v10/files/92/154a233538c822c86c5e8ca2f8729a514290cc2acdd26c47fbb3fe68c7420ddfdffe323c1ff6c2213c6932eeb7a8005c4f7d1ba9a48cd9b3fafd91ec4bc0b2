import _extends from "@babel/runtime/helpers/esm/extends";
import { Flex, Typography, Upload } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { AttachmentContext } from "./context";
function Placeholder(props, ref) {
  const {
    prefixCls,
    placeholder = {},
    upload,
    className,
    style
  } = props;
  const placeholderCls = `${prefixCls}-placeholder`;
  const placeholderConfig = placeholder || {};
  const {
    disabled
  } = React.useContext(AttachmentContext);

  // ============================= Drag =============================
  const [dragIn, setDragIn] = React.useState(false);
  const onDragEnter = () => {
    setDragIn(true);
  };
  const onDragLeave = e => {
    // Leave the div should end
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDragIn(false);
    }
  };
  const onDrop = () => {
    setDragIn(false);
  };

  // ============================ Render ============================
  const node = /*#__PURE__*/React.isValidElement(placeholder) ? placeholder : /*#__PURE__*/React.createElement(Flex, {
    align: "center",
    justify: "center",
    vertical: true,
    className: `${placeholderCls}-inner`
  }, /*#__PURE__*/React.createElement(Typography.Text, {
    className: `${placeholderCls}-icon`
  }, placeholderConfig.icon), /*#__PURE__*/React.createElement(Typography.Title, {
    className: `${placeholderCls}-title`,
    level: 5
  }, placeholderConfig.title), /*#__PURE__*/React.createElement(Typography.Text, {
    className: `${placeholderCls}-description`,
    type: "secondary"
  }, placeholderConfig.description));
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(placeholderCls, {
      [`${placeholderCls}-drag-in`]: dragIn,
      [`${placeholderCls}-disabled`]: disabled
    }, className),
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDrop: onDrop,
    "aria-hidden": disabled,
    style: style
  }, /*#__PURE__*/React.createElement(Upload.Dragger, _extends({
    showUploadList: false
  }, upload, {
    ref: ref,
    style: {
      padding: 0,
      border: 0,
      background: 'transparent'
    }
  }), node));
}
export default /*#__PURE__*/React.forwardRef(Placeholder);