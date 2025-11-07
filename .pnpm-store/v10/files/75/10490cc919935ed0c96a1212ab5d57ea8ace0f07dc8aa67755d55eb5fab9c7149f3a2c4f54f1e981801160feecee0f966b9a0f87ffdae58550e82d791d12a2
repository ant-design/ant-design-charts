import React, { useEffect } from 'react';
export var Mask = function Mask(props) {
  useEffect(function () {
    if (props.visible) {
      document.body.style.overflow = 'hidden';
    } else if (document.body.style.overflow) {
      var _props$onClose;
      document.body.style.overflow = '';
      (_props$onClose = props.onClose) === null || _props$onClose === void 0 ? void 0 : _props$onClose.call(props);
    }
  }, [props.visible]);
  return props.visible ? /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-modal-mask",
    onClick: props.onMaskClick
  }), /*#__PURE__*/React.createElement("div", {
    className: "dumi-default-search-modal-content"
  }, props.children)) : null;
};