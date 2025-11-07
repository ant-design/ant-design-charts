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
var _excluded = ["fieldProps", "request", "params", "proFieldProps"];
/**
 * 级联选择框
 *
 * @param
 */
var ProFormTreeSelect = function ProFormTreeSelect(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    request = _ref.request,
    params = _ref.params,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: "treeSelect",
    fieldProps: fieldProps,
    ref: ref,
    request: request,
    params: params,
    filedConfig: {
      customLightMode: true
    },
    proFieldProps: proFieldProps
  }, rest));
};
var WarpProFormTreeSelect = /*#__PURE__*/_react.default.forwardRef(ProFormTreeSelect);
var _default = exports.default = WarpProFormTreeSelect;