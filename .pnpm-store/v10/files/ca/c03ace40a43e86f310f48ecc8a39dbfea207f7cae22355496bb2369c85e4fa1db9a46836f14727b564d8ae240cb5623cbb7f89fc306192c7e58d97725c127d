import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
var _excluded = ["rules", "name", "children", "popoverProps"],
  _excluded2 = ["errorType", "rules", "name", "popoverProps", "children"];
import { LoadingOutlined } from '@ant-design/icons';
import { useToken } from '@ant-design/pro-provider';
import { ConfigProvider, Form, Popover } from 'antd';
import get from "rc-util/es/utils/get";
import React, { useContext, useEffect, useState } from 'react';
import { openVisibleCompatible } from "../../compareVersions/openVisibleCompatible";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var FIX_INLINE_STYLE = {
  marginBlockStart: -5,
  marginBlockEnd: -5,
  marginInlineStart: 0,
  marginInlineEnd: 0
};
var InlineErrorFormItemPopover = function InlineErrorFormItemPopover(_ref) {
  var inputProps = _ref.inputProps,
    input = _ref.input,
    extra = _ref.extra,
    errorList = _ref.errorList,
    popoverProps = _ref.popoverProps;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    errorStringList = _useState4[0],
    setErrorList = _useState4[1];
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls();
  var token = useToken();
  var _useStyle = useStyle("".concat(prefixCls, "-form-item-with-help")),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  useEffect(function () {
    if (inputProps.validateStatus !== 'validating') {
      setErrorList(inputProps.errors);
    }
  }, [inputProps.errors, inputProps.validateStatus]);
  var popoverOpenProps = openVisibleCompatible(errorStringList.length < 1 ? false : open, function (changeOpen) {
    if (changeOpen === open) return;
    setOpen(changeOpen);
  });
  var loading = inputProps.validateStatus === 'validating';
  return /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread(_objectSpread({
    trigger: (popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.trigger) || ['click'],
    placement: (popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.placement) || 'topLeft'
  }, popoverOpenProps), {}, {
    getPopupContainer: popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.getPopupContainer,
    getTooltipContainer: popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.getTooltipContainer,
    content: wrapSSR( /*#__PURE__*/_jsx("div", {
      className: "".concat(prefixCls, "-form-item ").concat(hashId, " ").concat(token.hashId).trim(),
      style: {
        margin: 0,
        padding: 0
      },
      children: /*#__PURE__*/_jsxs("div", {
        className: "".concat(prefixCls, "-form-item-with-help ").concat(hashId, " ").concat(token.hashId).trim(),
        children: [loading ? /*#__PURE__*/_jsx(LoadingOutlined, {}) : null, errorList]
      })
    }))
  }, popoverProps), {}, {
    children: /*#__PURE__*/_jsxs(_Fragment, {
      children: [input, extra]
    })
  }), "popover");
};
var InternalFormItemFunction = function InternalFormItemFunction(_ref2) {
  var rules = _ref2.rules,
    name = _ref2.name,
    children = _ref2.children,
    popoverProps = _ref2.popoverProps,
    rest = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({
    name: name,
    rules: rules,
    hasFeedback: false,
    shouldUpdate: function shouldUpdate(prev, next) {
      if (prev === next) return false;
      var shouldName = [name].flat(1);
      if (shouldName.length > 1) {
        shouldName.pop();
      }
      try {
        return JSON.stringify(get(prev, shouldName)) !== JSON.stringify(get(next, shouldName));
      } catch (error) {
        return true;
      }
    }
    // @ts-ignore
    ,
    _internalItemRender: {
      mark: 'pro_table_render',
      render: function render(inputProps, doms) {
        return /*#__PURE__*/_jsx(InlineErrorFormItemPopover, _objectSpread({
          inputProps: inputProps,
          popoverProps: popoverProps
        }, doms));
      }
    }
  }, rest), {}, {
    style: _objectSpread(_objectSpread({}, FIX_INLINE_STYLE), rest === null || rest === void 0 ? void 0 : rest.style),
    children: children
  }));
};
export var InlineErrorFormItem = function InlineErrorFormItem(props) {
  var errorType = props.errorType,
    rules = props.rules,
    name = props.name,
    popoverProps = props.popoverProps,
    children = props.children,
    rest = _objectWithoutProperties(props, _excluded2);
  if (name && rules !== null && rules !== void 0 && rules.length && errorType === 'popover') {
    return /*#__PURE__*/_jsx(InternalFormItemFunction, _objectSpread(_objectSpread({
      name: name,
      rules: rules,
      popoverProps: popoverProps
    }, rest), {}, {
      children: children
    }));
  }
  return /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({
    rules: rules,
    shouldUpdate: name ? function (prev, next) {
      if (prev === next) return false;
      var shouldName = [name].flat(1);
      if (shouldName.length > 1) {
        shouldName.pop();
      }
      try {
        return JSON.stringify(get(prev, shouldName)) !== JSON.stringify(get(next, shouldName));
      } catch (error) {
        return true;
      }
    } : undefined
  }, rest), {}, {
    style: _objectSpread(_objectSpread({}, FIX_INLINE_STYLE), rest.style),
    name: name,
    children: children
  }));
};