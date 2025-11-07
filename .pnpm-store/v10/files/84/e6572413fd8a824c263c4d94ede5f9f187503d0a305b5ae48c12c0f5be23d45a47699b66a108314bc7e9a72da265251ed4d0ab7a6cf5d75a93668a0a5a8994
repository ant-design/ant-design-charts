import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "request", "params", "proFieldProps"];
import React, { useContext } from 'react';
import FieldContext from "../../FieldContext";
import ProField from "../Field";
/**
 * 级联选择框
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
var ProFormCascader = function ProFormCascader(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    request = _ref.request,
    params = _ref.params,
    proFieldProps = _ref.proFieldProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    valueType: "cascader",
    fieldProps: _objectSpread({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    ref: ref,
    request: request,
    params: params,
    filedConfig: {
      customLightMode: true
    },
    proFieldProps: proFieldProps
  }, rest));
};
export default /*#__PURE__*/React.forwardRef(ProFormCascader);