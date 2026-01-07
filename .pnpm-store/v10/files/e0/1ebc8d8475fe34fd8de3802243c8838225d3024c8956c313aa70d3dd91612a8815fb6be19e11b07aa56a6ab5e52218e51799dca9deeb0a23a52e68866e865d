import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "popoverProps", "proFieldProps", "colors"];
import React from 'react';
import ProFromField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 数组选择组件
 *
 * @param
 */
var ProFormColorPicker = function ProFormColorPicker(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    popoverProps = _ref.popoverProps,
    proFieldProps = _ref.proFieldProps,
    colors = _ref.colors,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProFromField, _objectSpread({
    valueType: "color",
    fieldProps: _objectSpread({
      popoverProps: popoverProps,
      colors: colors
    }, fieldProps),
    ref: ref,
    proFieldProps: proFieldProps,
    filedConfig: {
      defaultProps: {
        width: '100%'
      }
    }
  }, rest));
};
export default /*#__PURE__*/React.forwardRef(ProFormColorPicker);