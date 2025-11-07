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
var _react = _interopRequireWildcard(require("react"));
require("antd/lib/date-picker/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

/**
 * 日期范围选择组件
 *
 * @param
 */var FieldRangePicker = function FieldRangePicker(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    light = _ref.light,
    label = _ref.label,
    format = _ref.format,
    render = _ref.render,
    picker = _ref.picker,
    renderFormItem = _ref.renderFormItem,
    plain = _ref.plain,
    showTime = _ref.showTime,
    lightLabel = _ref.lightLabel,
    bordered = _ref.bordered,
    fieldProps = _ref.fieldProps;
  var intl = (0, _proProvider.useIntl)();
  var _ref2 = Array.isArray(text) ? text : [],
    _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
    startText = _ref3[0],
    endText = _ref3[1];
  var _React$useState = _react.default.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  // antd 改了一下 交互，这里要兼容一下，不然会导致无法选中第二个数据
  var genFormatText = (0, _react.useCallback)(function (formatValue) {
    if (typeof (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) === 'function') {
      var _fieldProps$format;
      return fieldProps === null || fieldProps === void 0 || (_fieldProps$format = fieldProps.format) === null || _fieldProps$format === void 0 ? void 0 : _fieldProps$format.call(fieldProps, formatValue);
    }
    return (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'YYYY-MM-DD';
  }, [fieldProps, format]);
  // activePickerIndex for https://github.com/ant-design/ant-design/issues/22158
  var parsedStartText = startText ? (0, _dayjs.default)(startText).format(genFormatText((0, _dayjs.default)(startText))) : '';
  var parsedEndText = endText ? (0, _dayjs.default)(endText).format(genFormatText((0, _dayjs.default)(endText))) : '';
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: ref,
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center'
      },
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
    var dayValue = (0, _proUtils.parseValueToDay)(fieldProps.value);
    var _dom;
    var handleRangeChange = function handleRangeChange(value) {
      var _fieldProps$onChange;
      fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 || _fieldProps$onChange.call(fieldProps, value);
      if (!value) {
        setOpen(false);
      }
    };
    if (light) {
      var _fieldProps$placehold;
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
        disabled: fieldProps.disabled,
        value: dayValue || open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.DatePicker.RangePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          picker: picker,
          showTime: showTime,
          format: format
        }, (0, _proUtils.compatibleBorder)(false)), fieldProps), {}, {
          placeholder: (_fieldProps$placehold = fieldProps.placeholder) !== null && _fieldProps$placehold !== void 0 ? _fieldProps$placehold : [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')]
          // onClear={() => {
          //   setOpen(false);
          //   fieldProps?.onClear?.();
          // }}
          ,
          value: dayValue,
          onOpenChange: function onOpenChange(isOpen) {
            var _fieldProps$onOpenCha2;
            if (dayValue) setOpen(isOpen);
            fieldProps === null || fieldProps === void 0 || (_fieldProps$onOpenCha2 = fieldProps.onOpenChange) === null || _fieldProps$onOpenCha2 === void 0 || _fieldProps$onOpenCha2.call(fieldProps, isOpen);
          },
          onChange: handleRangeChange
        })) : null,
        allowClear: false,
        bordered: bordered,
        ref: lightLabel,
        downIcon: dayValue || open ? false : undefined
      });
    } else {
      _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.DatePicker.RangePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        ref: ref,
        format: format,
        showTime: showTime,
        placeholder: [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')]
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldRangePicker);