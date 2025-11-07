import { useIntl } from '@ant-design/pro-provider';
import { Button, ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var DropdownFooter = function DropdownFooter(props) {
  var intl = useIntl();
  var onClear = props.onClear,
    onConfirm = props.onConfirm,
    disabled = props.disabled,
    footerRender = props.footerRender;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-dropdown-footer');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var defaultFooter = [/*#__PURE__*/_jsx(Button, {
    style: {
      visibility: onClear ? 'visible' : 'hidden'
    },
    type: "link",
    size: "small",
    disabled: disabled,
    onClick: function onClick(e) {
      if (onClear) {
        onClear(e);
      }
      e.stopPropagation();
    },
    children: intl.getMessage('form.lightFilter.clear', '清除')
  }, "clear"), /*#__PURE__*/_jsx(Button, {
    "data-type": "confirm",
    type: "primary",
    size: "small",
    onClick: onConfirm,
    disabled: disabled,
    children: intl.getMessage('form.lightFilter.confirm', '确认')
  }, "confirm")];
  if (footerRender === false || (footerRender === null || footerRender === void 0 ? void 0 : footerRender(onConfirm, onClear)) === false) {
    return null;
  }
  var renderDom = (footerRender === null || footerRender === void 0 ? void 0 : footerRender(onConfirm, onClear)) || defaultFooter;
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classNames(prefixCls, hashId),
    onClick: function onClick(e) {
      return e.target.getAttribute('data-type') !== 'confirm' && e.stopPropagation();
    },
    children: renderDom
  }));
};
export { DropdownFooter };