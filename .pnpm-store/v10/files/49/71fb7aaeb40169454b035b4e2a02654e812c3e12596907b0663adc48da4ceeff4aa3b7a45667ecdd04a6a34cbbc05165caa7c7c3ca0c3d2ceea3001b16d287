"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _proProvider = require("@ant-design/pro-provider");
require("antd/lib/input-number/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------

/**
 * 数字组件
 *
 * @param FieldDigitProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
var FieldDigit = function FieldDigit(_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    placeholder = _ref.placeholder,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps;
  var intl = (0, _proProvider.useIntl)();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  var proxyChange = (0, _react.useCallback)(function (value) {
    var val = value !== null && value !== void 0 ? value : undefined;
    if (!fieldProps.stringMode && typeof val === 'string') {
      val = Number(val);
    }
    if (typeof val === 'number' && !(0, _proUtils.isNil)(val) && !(0, _proUtils.isNil)(fieldProps.precision)) {
      val = Number(val.toFixed(fieldProps.precision));
    }
    return val;
  }, [fieldProps]);
  if (type === 'read') {
    var _fieldProps$formatter;
    var fractionDigits = {};
    if (fieldProps !== null && fieldProps !== void 0 && fieldProps.precision) {
      fractionDigits = {
        minimumFractionDigits: Number(fieldProps.precision),
        maximumFractionDigits: Number(fieldProps.precision)
      };
    }
    var digit = new Intl.NumberFormat(undefined, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fractionDigits), (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.intlProps) || {})).format(Number(text));

    // 如果是 string 模式，什么都不要处理了
    var dom = !(fieldProps !== null && fieldProps !== void 0 && fieldProps.stringMode) ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      ref: ref,
      children: (fieldProps === null || fieldProps === void 0 || (_fieldProps$formatter = fieldProps.formatter) === null || _fieldProps$formatter === void 0 ? void 0 : _fieldProps$formatter.call(fieldProps, digit)) || digit
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: text
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.InputNumber, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      ref: ref,
      min: 0,
      placeholder: placeholderValue
    }, (0, _omit.default)(fieldProps, ['onChange', 'onBlur'])), {}, {
      onChange: function onChange(e) {
        var _fieldProps$onChange;
        return fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 ? void 0 : _fieldProps$onChange.call(fieldProps, proxyChange(e));
      },
      onBlur: function onBlur(e) {
        var _fieldProps$onBlur;
        return fieldProps === null || fieldProps === void 0 || (_fieldProps$onBlur = fieldProps.onBlur) === null || _fieldProps$onBlur === void 0 ? void 0 : _fieldProps$onBlur.call(fieldProps, proxyChange(e.target.value));
      }
    }));
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldDigit);