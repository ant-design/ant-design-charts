"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _react = _interopRequireWildcard(require("react"));
var _FieldContext = _interopRequireDefault(require("../../FieldContext"));
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps", "proFieldProps"],
  _excluded2 = ["fieldProps", "proFieldProps"];
var valueType = 'time';

/** 时间区间选择器 */
var TimeRangePicker = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    ref: ref,
    fieldProps: (0, _objectSpread2.default)({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    valueType: "timeRange",
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: 'timeRange',
      customLightMode: true,
      lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
        return (0, _proUtils.dateArrayFormatter)(value, 'HH:mm:ss');
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
    rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    fieldProps: (0, _objectSpread2.default)({
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
var _default = exports.default = WrappedProFormTimePicker;