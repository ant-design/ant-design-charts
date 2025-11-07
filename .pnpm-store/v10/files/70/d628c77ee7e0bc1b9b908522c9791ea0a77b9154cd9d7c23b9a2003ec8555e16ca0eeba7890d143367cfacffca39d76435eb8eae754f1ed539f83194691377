import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "proFieldProps"],
  _excluded2 = ["fieldProps", "proFieldProps"];
import { useMountMergeState } from '@ant-design/pro-utils';
import { Form, Popover } from 'antd';
import omit from "rc-util/es/omit";
import React, { useState } from 'react';
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var valueType = 'text';
/**
 * 文本组件
 *
 * @param
 */
var ProFormText = function ProFormText(_ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    valueType: valueType,
    fieldProps: fieldProps,
    filedConfig: {
      valueType: valueType
    },
    proFieldProps: proFieldProps
  }, rest));
};
var PassWordStrength = function PassWordStrength(props) {
  var _useMountMergeState = useMountMergeState(props.open || false, {
      value: props.open,
      onChange: props.onOpenChange
    }),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    open = _useMountMergeState2[0],
    setOpen = _useMountMergeState2[1];
  return /*#__PURE__*/_jsx(Form.Item, {
    shouldUpdate: true,
    noStyle: true,
    children: function children(form) {
      var _props$statusRender;
      var value = form.getFieldValue(props.name || []);
      return /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread({
        getPopupContainer: function getPopupContainer(node) {
          if (node && node.parentNode) {
            return node.parentNode;
          }
          return node;
        },
        onOpenChange: function onOpenChange(e) {
          return setOpen(e);
        },
        content: /*#__PURE__*/_jsxs("div", {
          style: {
            padding: '4px 0'
          },
          children: [(_props$statusRender = props.statusRender) === null || _props$statusRender === void 0 ? void 0 : _props$statusRender.call(props, value), props.strengthText ? /*#__PURE__*/_jsx("div", {
            style: {
              marginTop: 10
            },
            children: /*#__PURE__*/_jsx("span", {
              children: props.strengthText
            })
          }) : null]
        }),
        overlayStyle: {
          width: 240
        },
        placement: "rightTop"
      }, props.popoverProps), {}, {
        open: open,
        children: props.children
      }));
    }
  });
};
var Password = function Password(_ref2) {
  var fieldProps = _ref2.fieldProps,
    proFieldProps = _ref2.proFieldProps,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  if (fieldProps !== null && fieldProps !== void 0 && fieldProps.statusRender && rest.name) {
    return /*#__PURE__*/_jsx(PassWordStrength, {
      name: rest.name,
      statusRender: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.statusRender,
      popoverProps: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.popoverProps,
      strengthText: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.strengthText,
      open: open,
      onOpenChange: setOpen,
      children: /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx(ProField, _objectSpread({
          valueType: "password",
          fieldProps: _objectSpread(_objectSpread({}, omit(fieldProps, ['statusRender', 'popoverProps', 'strengthText'])), {}, {
            onBlur: function onBlur(e) {
              var _fieldProps$onBlur;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onBlur = fieldProps.onBlur) === null || _fieldProps$onBlur === void 0 || _fieldProps$onBlur.call(fieldProps, e);
              setOpen(false);
            },
            onClick: function onClick(e) {
              var _fieldProps$onClick;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onClick = fieldProps.onClick) === null || _fieldProps$onClick === void 0 || _fieldProps$onClick.call(fieldProps, e);
              setOpen(true);
            }
          }),
          proFieldProps: proFieldProps,
          filedConfig: {
            valueType: valueType
          }
        }, rest))
      })
    });
  }
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    valueType: "password",
    fieldProps: fieldProps,
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType
    }
  }, rest));
};
var WrappedProFormText = ProFormText;
WrappedProFormText.Password = Password;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormText.displayName = 'ProFormComponent';
export default WrappedProFormText;