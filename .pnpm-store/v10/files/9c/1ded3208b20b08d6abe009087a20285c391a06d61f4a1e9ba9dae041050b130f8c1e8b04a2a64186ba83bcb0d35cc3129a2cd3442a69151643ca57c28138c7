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
var _excluded = ["fieldProps", "proFieldProps"];
var valueType = 'dateWeekRange';

/**
 * 周区间选择组件
 *
 * @param
 */
var DateWeekRangePicker = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    ref: ref,
    fieldProps: (0, _objectSpread2.default)({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    valueType: valueType,
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType,
      customLightMode: true,
      lightFilterLabelFormatter: function lightFilterLabelFormatter(value) {
        return (0, _proUtils.dateArrayFormatter)(value, (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || 'YYYY-MM-DD');
      }
    }
  }, rest));
});
var _default = exports.default = DateWeekRangePicker;