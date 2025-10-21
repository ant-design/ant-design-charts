"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldTimeRangePicker = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireWildcard(require("react"));
require("antd/lib/date-picker/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------;

/**
 * 时间选择组件
 *
 * @param
 */var FieldTimePicker = function FieldTimePicker(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    light = _ref.light,
    label = _ref.label,
    format = _ref.format,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    plain = _ref.plain,
    fieldProps = _ref.fieldProps,
    lightLabel = _ref.lightLabel;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var intl = (0, _proProvider.useIntl)();
  var finalFormat = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'HH:mm:ss';
  var isNumberOrMoment = _dayjs.default.isDayjs(text) || typeof text === 'number';
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      ref: ref,
      children: text ? (0, _dayjs.default)(text, isNumberOrMoment ? undefined : finalFormat).format(finalFormat) : '-'
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: dom
      }));
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom;
    var disabled = fieldProps.disabled,
      value = fieldProps.value;
    var dayValue = (0, _proUtils.parseValueToDay)(value, finalFormat);
    if (light) {
      var _fieldProps$placehold;
      _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
        onClick: function onClick() {
          var _fieldProps$onOpenCha;
          fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha === void 0 || _fieldProps$onOpenCha.call(fieldProps, true);
          setOpen(true);
        },
        style: dayValue ? {
          paddingInlineEnd: 0
        } : undefined,
        label: label,
        disabled: disabled,
        value: dayValue || open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.TimePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _proUtils.compatibleBorder)(false)), {}, {
          format: format,
          ref: ref
        }, fieldProps), {}, {
          placeholder: (_fieldProps$placehold = fieldProps.placeholder) !== null && _fieldProps$placehold !== void 0 ? _fieldProps$placehold : intl.getMessage('tableForm.selectPlaceholder', '请选择'),
          value: dayValue,
          onOpenChange: function onOpenChange(isOpen) {
            var _fieldProps$onOpenCha2;
            setOpen(isOpen);
            fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha2 = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha2 === void 0 || _fieldProps$onOpenCha2.call(fieldProps, isOpen);
          },
          open: open
        })) : null,
        downIcon: dayValue || open ? false : undefined,
        allowClear: false,
        ref: lightLabel
      });
    } else {
      _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.DatePicker.TimePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        ref: ref,
        format: format
      }, (0, _proUtils.compatibleBorder)(plain === undefined ? true : !plain)), fieldProps), {}, {
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

/**
 * 时间区间选择
 *
 * @param param0
 * @param ref
 */
var FieldTimeRangePickerComponents = function FieldTimeRangePickerComponents(_ref2, ref) {
  var text = _ref2.text,
    light = _ref2.light,
    label = _ref2.label,
    mode = _ref2.mode,
    lightLabel = _ref2.lightLabel,
    format = _ref2.format,
    render = _ref2.render,
    renderFormItem = _ref2.renderFormItem,
    plain = _ref2.plain,
    fieldProps = _ref2.fieldProps;
  var intl = (0, _proProvider.useIntl)();
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var finalFormat = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'HH:mm:ss';
  var _ref3 = Array.isArray(text) ? text : [],
    _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
    startText = _ref4[0],
    endText = _ref4[1];
  var startTextIsNumberOrMoment = _dayjs.default.isDayjs(startText) || typeof startText === 'number';
  var endTextIsNumberOrMoment = _dayjs.default.isDayjs(endText) || typeof endText === 'number';
  var parsedStartText = startText ? (0, _dayjs.default)(startText, startTextIsNumberOrMoment ? undefined : finalFormat).format(finalFormat) : '';
  var parsedEndText = endText ? (0, _dayjs.default)(endText, endTextIsNumberOrMoment ? undefined : finalFormat).format(finalFormat) : '';
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: ref,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: parsedStartText || '-'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: parsedEndText || '-'
      })]
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: dom
      }));
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var dayValue = (0, _proUtils.parseValueToDay)(fieldProps.value, finalFormat);
    var _dom2;
    if (light) {
      var disabled = fieldProps.disabled,
        _fieldProps$placehold2 = fieldProps.placeholder,
        placeholder = _fieldProps$placehold2 === void 0 ? [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')] : _fieldProps$placehold2;
      _dom2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
        onClick: function onClick() {
          var _fieldProps$onOpenCha3;
          fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha3 = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha3 === void 0 || _fieldProps$onOpenCha3.call(fieldProps, true);
          setOpen(true);
        },
        style: dayValue ? {
          paddingInlineEnd: 0
        } : undefined,
        label: label,
        disabled: disabled,
        placeholder: placeholder,
        value: dayValue || open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.TimePicker.RangePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _proUtils.compatibleBorder)(false)), {}, {
          format: format,
          ref: ref
        }, fieldProps), {}, {
          placeholder: placeholder,
          value: dayValue,
          onOpenChange: function onOpenChange(isOpen) {
            var _fieldProps$onOpenCha4;
            setOpen(isOpen);
            fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha4 = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha4 === void 0 || _fieldProps$onOpenCha4.call(fieldProps, isOpen);
          },
          open: open
        })) : null,
        downIcon: dayValue || open ? false : undefined,
        allowClear: false,
        ref: lightLabel
      });
    } else {
      _dom2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.TimePicker.RangePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        ref: ref,
        format: format
      }, (0, _proUtils.compatibleBorder)(plain === undefined ? true : !plain)), fieldProps), {}, {
        value: dayValue
      }));
    }
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), _dom2);
    }
    return _dom2;
  }
  return null;
};
var FieldTimeRangePicker = exports.FieldTimeRangePicker = /*#__PURE__*/_react.default.forwardRef(FieldTimeRangePickerComponents);
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldTimePicker);