"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps", "proFieldProps", "min", "max", "step", "marks", "vertical", "range"];
/**
 * 文本选择组件
 *
 * @param
 */
var ProFormSlider = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    marks = _ref.marks,
    vertical = _ref.vertical,
    range = _ref.range,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: "slider",
    fieldProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
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
var _default = exports.default = ProFormSlider;