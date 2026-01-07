import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var GlobalFooter = function GlobalFooter(_ref) {
  var className = _ref.className,
    prefixCls = _ref.prefixCls,
    links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style;
  var context = useContext(ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');
  var _useStyle = useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/_jsxs("div", {
    className: classNames(baseClassName, hashId, className),
    style: style,
    children: [links && /*#__PURE__*/_jsx("div", {
      className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
      children: links.map(function (link) {
        return /*#__PURE__*/_jsx("a", {
          className: "".concat(baseClassName, "-list-link ").concat(hashId).trim(),
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href,
          rel: "noreferrer",
          children: link.title
        }, link.key);
      })
    }), copyright && /*#__PURE__*/_jsx("div", {
      className: "".concat(baseClassName, "-copyright ").concat(hashId).trim(),
      children: copyright
    })]
  }));
};
export { GlobalFooter };