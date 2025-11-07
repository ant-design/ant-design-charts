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
var _excluded = ["fieldProps", "proFieldProps", "locale", "min", "max"];
/**
 * 金额输入框
 *
 * @param
 */
var ProFormMoney = function ProFormMoney(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    locale = _ref.locale,
    min = _ref.min,
    max = _ref.max,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: {
      type: 'money',
      locale: locale
    },
    fieldProps: (0, _objectSpread2.default)({
      min: min,
      max: max
    }, fieldProps),
    ref: ref,
    filedConfig: {
      defaultProps: {
        width: '100%'
      }
    },
    proFieldProps: proFieldProps
  }, rest));
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(ProFormMoney);