"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _createField = require("../../BaseForm/createField");
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["options", "fieldProps", "proFieldProps", "valueEnum"];
var CheckboxGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var options = _ref.options,
    fieldProps = _ref.fieldProps,
    proFieldProps = _ref.proFieldProps,
    valueEnum = _ref.valueEnum,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    ref: ref,
    valueType: "checkbox",
    valueEnum: (0, _proUtils.runFunction)(valueEnum, undefined),
    fieldProps: (0, _objectSpread2.default)({
      options: options
    }, fieldProps),
    lightProps: (0, _objectSpread2.default)({
      labelFormatter: function labelFormatter() {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
          ref: ref,
          valueType: "checkbox",
          mode: "read",
          valueEnum: (0, _proUtils.runFunction)(valueEnum, undefined),
          filedConfig: {
            customLightMode: true
          },
          fieldProps: (0, _objectSpread2.default)({
            options: options
          }, fieldProps),
          proFieldProps: proFieldProps
        }, rest));
      }
    }, rest.lightProps),
    proFieldProps: proFieldProps
  }, rest));
});
/**
 * 多选框的
 *
 * @param
 */
var ProFormCheckboxComponents = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Checkbox, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    ref: ref
  }, fieldProps), {}, {
    children: children
  }));
});
var ProFormCheckbox = (0, _createField.createField)(ProFormCheckboxComponents, {
  valuePropName: 'checked'
});
var WrappedProFormCheckbox = ProFormCheckbox;
WrappedProFormCheckbox.Group = CheckboxGroup;
var _default = exports.default = WrappedProFormCheckbox;