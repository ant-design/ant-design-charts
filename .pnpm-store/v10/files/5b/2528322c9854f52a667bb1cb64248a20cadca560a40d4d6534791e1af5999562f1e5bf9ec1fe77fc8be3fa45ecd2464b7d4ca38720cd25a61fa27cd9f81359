import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "proFieldProps", "locale", "min", "max"];
import React from 'react';
import ProFormField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 金额输入框
 *
 * @param
 */
var ProFormMoney = function ProFormMoney(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    locale = _ref.locale,
    min = _ref.min,
    max = _ref.max,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProFormField, _objectSpread({
    valueType: {
      type: 'money',
      locale: locale
    },
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
export default /*#__PURE__*/React.forwardRef(ProFormMoney);