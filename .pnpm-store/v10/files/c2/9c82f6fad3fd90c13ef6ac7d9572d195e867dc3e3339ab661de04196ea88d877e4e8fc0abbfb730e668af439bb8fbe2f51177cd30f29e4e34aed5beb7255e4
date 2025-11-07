import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "options", "radioType", "layout", "proFieldProps", "valueEnum"];
import { runFunction } from '@ant-design/pro-utils';
import { Radio } from 'antd';
import React from 'react';
import { createField } from "../../BaseForm/createField";
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
var RadioGroup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    options = _ref.options,
    radioType = _ref.radioType,
    layout = _ref.layout,
    proFieldProps = _ref.proFieldProps,
    valueEnum = _ref.valueEnum,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProField, _objectSpread(_objectSpread({
    valueType: radioType === 'button' ? 'radioButton' : 'radio',
    ref: ref,
    valueEnum: runFunction(valueEnum, undefined)
  }, rest), {}, {
    fieldProps: _objectSpread({
      options: options,
      layout: layout
    }, fieldProps),
    proFieldProps: proFieldProps,
    filedConfig: {
      customLightMode: true
    }
  }));
});

/**
 * Radio
 *
 * @param
 */
var ProFormRadioComponents = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children;
  return /*#__PURE__*/_jsx(Radio, _objectSpread(_objectSpread({}, fieldProps), {}, {
    ref: ref,
    children: children
  }));
});
var ProFormRadio = createField(ProFormRadioComponents, {
  valuePropName: 'checked',
  ignoreWidth: true
});
var WrappedProFormRadio = ProFormRadio;
WrappedProFormRadio.Group = RadioGroup;
WrappedProFormRadio.Button = Radio.Button;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormRadio.displayName = 'ProFormComponent';
export default WrappedProFormRadio;