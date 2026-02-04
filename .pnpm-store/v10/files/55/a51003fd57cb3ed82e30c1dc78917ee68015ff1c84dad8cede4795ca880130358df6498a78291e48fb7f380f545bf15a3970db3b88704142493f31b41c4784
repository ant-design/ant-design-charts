import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["proFieldProps", "fieldProps"];
import React, { useContext } from 'react';
import FieldContext from "../../FieldContext";
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
var valueType = 'dateWeek';
/**
 * 周选择组件
 *
 * @param
 */
var ProFormDatePickerWeek = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var proFieldProps = _ref.proFieldProps,
    fieldProps = _ref.fieldProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    ref: ref,
    valueType: valueType,
    fieldProps: _objectSpread({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType,
      customLightMode: true
    }
  }, rest));
});
export default ProFormDatePickerWeek;