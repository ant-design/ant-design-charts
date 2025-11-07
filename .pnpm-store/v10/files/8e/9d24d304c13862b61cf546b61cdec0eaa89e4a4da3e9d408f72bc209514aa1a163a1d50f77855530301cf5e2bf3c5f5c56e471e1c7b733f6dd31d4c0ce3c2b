import classNames from 'classnames';
import React from 'react';
import useStyle from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
var ProCardActions = function ProCardActions(props) {
  var actions = props.actions,
    prefixCls = props.prefixCls;
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (Array.isArray(actions) && actions !== null && actions !== void 0 && actions.length) {
    return wrapSSR( /*#__PURE__*/_jsx("ul", {
      className: classNames("".concat(prefixCls, "-actions"), hashId),
      children: actions.map(function (action, index) {
        return (
          /*#__PURE__*/
          // eslint-disable-next-line react/no-array-index-key
          _jsx("li", {
            style: {
              width: "".concat(100 / actions.length, "%"),
              padding: 0,
              margin: 0
            },
            className: classNames("".concat(prefixCls, "-actions-item"), hashId),
            children: action
          }, "action-".concat(index))
        );
      })
    }));
  }
  return wrapSSR( /*#__PURE__*/_jsx("ul", {
    className: classNames("".concat(prefixCls, "-actions"), hashId),
    children: actions
  }));
};
export default ProCardActions;