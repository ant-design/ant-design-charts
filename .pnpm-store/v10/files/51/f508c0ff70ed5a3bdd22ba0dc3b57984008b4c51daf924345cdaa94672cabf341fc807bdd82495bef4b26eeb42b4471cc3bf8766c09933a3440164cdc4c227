import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "min", "proFieldProps", "max"];
import React from 'react';
import ProFormField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 数组选择组件
 *
 * @param
 */
var ProFormDigit = function ProFormDigit(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    min = _ref.min,
    proFieldProps = _ref.proFieldProps,
    max = _ref.max,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProFormField, _objectSpread({
    valueType: "digit",
    fieldProps: _objectSpread({
      min: min,
      max: max
    }, fieldProps),
    ref: ref,
    filedConfig: {
      defaultProps: {
        width: '100%'
      }
    },
    proFieldProps: proFieldProps
  }, rest));
};
var ForwardRefProFormDigit = /*#__PURE__*/React.forwardRef(ProFormDigit);
export default ForwardRefProFormDigit;