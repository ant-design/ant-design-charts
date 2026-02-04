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
var _excluded = ["fieldProps", "request", "params", "proFieldProps"];
/**
 * 级联选择框
 *
 * @param
 */
var ProFormCascader = function ProFormCascader(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    request = _ref.request,
    params = _ref.params,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: "cascader",
    fieldProps: (0, _objectSpread2.default)({
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(ProFormCascader);