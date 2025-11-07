import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["options", "fieldProps", "proFieldProps", "valueEnum"];
import { runFunction } from '@ant-design/pro-utils';
import { Checkbox } from 'antd';
import React from 'react';
import { createField } from "../../BaseForm/createField";
import ProFormField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
var CheckboxGroup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var options = _ref.options,
    fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    valueEnum = _ref.valueEnum,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProFormField, _objectSpread({
    ref: ref,
    valueType: "checkbox",
    valueEnum: runFunction(valueEnum, undefined),
    fieldProps: _objectSpread({
      options: options
    }, fieldProps),
    lightProps: _objectSpread({
      labelFormatter: function labelFormatter() {
        return /*#__PURE__*/_jsx(ProFormField, _objectSpread({
          ref: ref,
          valueType: "checkbox",
          mode: "read",
          valueEnum: runFunction(valueEnum, undefined),
          filedConfig: {
            customLightMode: true
          },
          fieldProps: _objectSpread({
            options: options
          }, fieldProps),
          proFieldProps: proFieldProps
        }, rest));
      }
    }, rest.lightProps),
    proFieldProps: proFieldProps
  }, rest));
});
/**
 * 多选框的
 *
 * @param
 */
var ProFormCheckboxComponents = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children;
  return /*#__PURE__*/_jsx(Checkbox, _objectSpread(_objectSpread({
    ref: ref
  }, fieldProps), {}, {
    children: children
  }));
});
var ProFormCheckbox = createField(ProFormCheckboxComponents, {
  valuePropName: 'checked'
});
var WrappedProFormCheckbox = ProFormCheckbox;
WrappedProFormCheckbox.Group = CheckboxGroup;
export default WrappedProFormCheckbox;