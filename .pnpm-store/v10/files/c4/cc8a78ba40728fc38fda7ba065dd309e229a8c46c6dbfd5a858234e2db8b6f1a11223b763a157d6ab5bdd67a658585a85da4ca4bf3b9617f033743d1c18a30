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
var _excluded = ["fieldProps", "options", "radioType", "layout", "proFieldProps", "valueEnum"];
var RadioGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    options = _ref.options,
    radioType = _ref.radioType,
    layout = _ref.layout,
    proFieldProps = _ref.proFieldProps,
    valueEnum = _ref.valueEnum,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    valueType: radioType === 'button' ? 'radioButton' : 'radio',
    ref: ref,
    valueEnum: (0, _proUtils.runFunction)(valueEnum, undefined)
  }, rest), {}, {
    fieldProps: (0, _objectSpread2.default)({
      options: options,
      layout: layout
    }, fieldProps),
    proFieldProps: proFieldProps,
    filedConfig: {
      customLightMode: true
    }
  }));
});

/**
 * Radio
 *
 * @param
 */
var ProFormRadioComponents = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Radio, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
    ref: ref,
    children: children
  }));
});
var ProFormRadio = (0, _createField.createField)(ProFormRadioComponents, {
  valuePropName: 'checked',
  ignoreWidth: true
});
var WrappedProFormRadio = ProFormRadio;
WrappedProFormRadio.Group = RadioGroup;
WrappedProFormRadio.Button = _antd.Radio.Button;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormRadio.displayName = 'ProFormComponent';
var _default = exports.default = WrappedProFormRadio;