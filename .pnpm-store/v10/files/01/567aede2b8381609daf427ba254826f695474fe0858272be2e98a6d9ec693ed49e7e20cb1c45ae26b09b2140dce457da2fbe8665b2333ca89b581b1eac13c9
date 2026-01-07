import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { ConfigProvider, Popover } from 'antd';
import React, { useContext, useRef } from 'react';
import { DropdownFooter } from "../DropdownFooter";
import "antd/es/dropdown/style";
import classNames from 'classnames';
import { openVisibleCompatible } from "../../compareVersions/openVisibleCompatible";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FilterDropdown = function FilterDropdown(props) {
  var children = props.children,
    label = props.label,
    footer = props.footer,
    open = props.open,
    onOpenChange = props.onOpenChange,
    disabled = props.disabled,
    onVisibleChange = props.onVisibleChange,
    visible = props.visible,
    footerRender = props.footerRender,
    placement = props.placement;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-field-dropdown');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var dropdownOpenProps = openVisibleCompatible(open || visible || false, onOpenChange || onVisibleChange);
  var htmlRef = useRef(null);
  return wrapSSR( /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread({
    placement: placement,
    trigger: ['click']
  }, dropdownOpenProps), {}, {
    styles: {
      body: {
        padding: 0
      }
    },
    content: /*#__PURE__*/_jsxs("div", {
      ref: htmlRef,
      className: classNames("".concat(prefixCls, "-overlay"), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-overlay-").concat(placement), placement), "hashId", hashId)),
      children: [/*#__PURE__*/_jsx(ConfigProvider, {
        getPopupContainer: function getPopupContainer() {
          return htmlRef.current || document.body;
        },
        children: /*#__PURE__*/_jsx("div", {
          className: "".concat(prefixCls, "-content ").concat(hashId).trim(),
          children: children
        })
      }), footer && /*#__PURE__*/_jsx(DropdownFooter, _objectSpread({
        disabled: disabled,
        footerRender: footerRender
      }, footer))]
    }),
    children: /*#__PURE__*/_jsx("span", {
      className: "".concat(prefixCls, "-label ").concat(hashId).trim(),
      children: label
    })
  })));
};
export { FilterDropdown };