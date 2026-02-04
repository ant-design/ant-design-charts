import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "proFieldProps"],
  _excluded2 = ["fieldProps", "proFieldProps"];
import { dateArrayFormatter } from '@ant-design/pro-utils';
import React, { useContext } from 'react';
import FieldContext from "../../FieldContext";
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
var valueType = 'time';

/** 时间区间选择器 */
var TimeRangePicker = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    ref: ref,
    fieldProps: _objectSpread({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    valueType: "timeRange",
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: 'timeRange',
      customLightMode: true,
      lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
        return dateArrayFormatter(value, 'HH:mm:ss');
      }
    }
  }, rest));
});

/**
 * 时间选择组件
 *
 * @param
 */
var ProFormTimePicker = function ProFormTimePicker(_ref2) {
  var fieldProps = _ref2.fieldProps,
    proFieldProps = _ref2.proFieldProps,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    fieldProps: _objectSpread({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    valueType: valueType,
    proFieldProps: proFieldProps,
    filedConfig: {
      customLightMode: true,
      valueType: valueType
    }
  }, rest));
};
var WrappedProFormTimePicker = ProFormTimePicker;
WrappedProFormTimePicker.RangePicker = TimeRangePicker;
export default WrappedProFormTimePicker;