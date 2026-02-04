"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _weekOfYear = _interopRequireDefault(require("dayjs/plugin/weekOfYear"));
var _react = _interopRequireWildcard(require("react"));
require("antd/lib/date-picker/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------
_dayjs.default.extend(_weekOfYear.default);
var formatDate = function formatDate(text, format) {
  if (!text) return '-';
  if (typeof format === 'function') {
    return format((0, _dayjs.default)(text));
  } else {
    return (0, _dayjs.default)(text).format((Array.isArray(format) ? format[0] : format) || 'YYYY-MM-DD');
  }
};

/**
 * 日期选择组件
 *
 * @param
 */
var FieldDatePicker = function FieldDatePicker(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    format = _ref.format,
    label = _ref.label,
    light = _ref.light,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    plain = _ref.plain,
    showTime = _ref.showTime,
    fieldProps = _ref.fieldProps,
    picker = _ref.picker,
    bordered = _ref.bordered,
    lightLabel = _ref.lightLabel;
  var intl = (0, _proProvider.useIntl)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  if (mode === 'read') {
    var dom = formatDate(text, fieldProps.format || format);
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dom
      }));
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: dom
    });
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom;
    var disabled = fieldProps.disabled,
      value = fieldProps.value,
      _fieldProps$placehold = fieldProps.placeholder,
      placeholder = _fieldProps$placehold === void 0 ? intl.getMessage('tableForm.selectPlaceholder', '请选择') : _fieldProps$placehold;
    var dayValue = (0, _proUtils.parseValueToDay)(value);
    if (light) {
      _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
        label: label,
        onClick: function onClick() {
          var _fieldProps$onOpenCha;
          fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha === void 0 || _fieldProps$onOpenCha.call(fieldProps, true);
          setOpen(true);
        },
        style: dayValue ? {
          paddingInlineEnd: 0
        } : undefined,
        disabled: disabled,
        value: dayValue || open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.DatePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          picker: picker,
          showTime: showTime,
          format: format,
          ref: ref
        }, fieldProps), {}, {
          value: dayValue,
          onOpenChange: function onOpenChange(isOpen) {
            var _fieldProps$onOpenCha2;
            setOpen(isOpen);
            fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha2 = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha2 === void 0 || _fieldProps$onOpenCha2.call(fieldProps, isOpen);
          }
        }, (0, _proUtils.compatibleBorder)(false)), {}, {
          open: open
        })) : undefined,
        allowClear: false,
        downIcon: dayValue || open ? false : undefined,
        bordered: bordered,
        ref: lightLabel
      });
    } else {
      _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.DatePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        picker: picker,
        showTime: showTime,
        format: format,
        placeholder: placeholder
      }, (0, _proUtils.compatibleBorder)(plain === undefined ? true : !plain)), {}, {
        ref: ref
      }, fieldProps), {}, {
        value: dayValue
      }));
    }
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldDatePicker);