import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "proFieldProps", "min", "max", "step", "marks", "vertical", "range"];
import React from 'react';
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 文本选择组件
 *
 * @param
 */
var ProFormSlider = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    marks = _ref.marks,
    vertical = _ref.vertical,
    range = _ref.range,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    valueType: "slider",
    fieldProps: _objectSpread(_objectSpread({}, fieldProps), {}, {
      min: min,
      max: max,
      step: step,
      marks: marks,
      vertical: vertical,
      range: range,
      style: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style
    }),
    ref: ref,
    proFieldProps: proFieldProps,
    filedConfig: {
      ignoreWidth: true
    }
  }, rest));
});
export default ProFormSlider;