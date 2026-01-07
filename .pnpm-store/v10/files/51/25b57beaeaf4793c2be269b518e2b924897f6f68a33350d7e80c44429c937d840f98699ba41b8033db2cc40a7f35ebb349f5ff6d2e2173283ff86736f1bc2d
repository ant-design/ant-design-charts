import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ProProvider } from '@ant-design/pro-provider';
import { ConfigProvider, Popover } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { ProHelpContentPanel } from "./ProHelpContentPanel";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 渲染一个弹出式提示框，其中显示了一个ProHelpContentPanel，展示帮助文案的详情
 * @param popoverProps 要传递给 Drawer 组件的属性。
 * @param props 要传递给 ProHelpPanel 组件的属性。
 */
export var ProHelpPopover = function ProHelpPopover(props) {
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-help');
  var _useContext2 = useContext(ProProvider),
    hashId = _useContext2.hashId;
  var _useStyle = useStyle(className),
    wrapSSR = _useStyle.wrapSSR;
  return wrapSSR( /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread({
    styles: {
      body: {
        padding: 0
      }
    },
    content: /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(className, "-popover-content"), hashId, props.popoverContextClassName),
      children: /*#__PURE__*/_jsx(ProHelpContentPanel, {
        selectedKey: props.selectedKey
      })
    })
  }, props.popoverProps), {}, {
    children: /*#__PURE__*/_jsx("span", {
      className: classNames("".concat(className, "-popover-text"), hashId, props.textClassName),
      children: props.children
    })
  })));
};