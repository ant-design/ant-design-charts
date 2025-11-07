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
var _excluded = ["fieldProps", "proFieldProps"];
/**
 * 数字范围选择组件
 *
 * @param
 */
var ProFormDigit = function ProFormDigit(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: "digitRange",
    fieldProps: (0, _objectSpread2.default)({}, fieldProps),
    ref: ref,
    filedConfig: {
      defaultProps: {
        width: '100%'
      }
    },
    proFieldProps: proFieldProps
  }, rest));
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(ProFormDigit);