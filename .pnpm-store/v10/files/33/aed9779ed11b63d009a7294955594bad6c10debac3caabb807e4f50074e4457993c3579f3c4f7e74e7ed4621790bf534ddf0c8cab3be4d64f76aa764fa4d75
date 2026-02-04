"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _FieldContext = _interopRequireDefault(require("../../FieldContext"));
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["proFieldProps", "fieldProps"];
var valueType = 'dateYear';
/**
 * 周选择组件
 *
 * @param
 */
var ProFormDatePickerYear = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var proFieldProps = _ref.proFieldProps,
    fieldProps = _ref.fieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    ref: ref,
    valueType: valueType,
    fieldProps: (0, _objectSpread2.default)({
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    proFieldProps: proFieldProps,
    filedConfig: {
      valueType: valueType,
      customLightMode: true
    }
  }, rest));
});
var _default = exports.default = ProFormDatePickerYear;