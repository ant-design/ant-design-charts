import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import useStyle from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var ProCardDivider = function ProCardDivider(props) {
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var proCardPrefixCls = getPrefixCls('pro-card');
  var prefixCls = "".concat(proCardPrefixCls, "-divider");
  var _useStyle = useStyle(proCardPrefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    type = props.type;
  var classString = classNames(prefixCls, className, hashId, _defineProperty({}, "".concat(prefixCls, "-").concat(type), type));
  return wrapSSR( /*#__PURE__*/_jsx("div", {
    className: classString,
    style: style
  }));
};
export default ProCardDivider;