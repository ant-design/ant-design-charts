import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "proFieldProps"];
import { dateArrayFormatter } from '@ant-design/pro-utils';
import React, { useContext } from 'react';
import FieldContext from "../../FieldContext";
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
var valueType = 'dateWeekRange';

/**
 * 周区间选择组件
 *
 * @param
 */
var DateWeekRangePicker = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    ref: ref,
    fieldProps: _objectSpread({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    valueType: valueType,
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType,
      customLightMode: true,
      lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
        return dateArrayFormatter(value, (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || 'YYYY-MM-DD');
      }
    }
  }, rest));
});
export default DateWeekRangePicker;