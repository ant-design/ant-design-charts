import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var ProCardOperation = function ProCardOperation(props) {
  var className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    children = props.children;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-card-operation');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var classString = classNames(prefixCls, className, hashId);
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classString,
    style: style,
    children: children
  }));
};
export default ProCardOperation;