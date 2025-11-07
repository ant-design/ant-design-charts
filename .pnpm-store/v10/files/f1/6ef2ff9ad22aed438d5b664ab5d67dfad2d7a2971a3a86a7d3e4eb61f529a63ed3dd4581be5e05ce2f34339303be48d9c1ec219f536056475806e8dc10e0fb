import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, compatibleBorder, parseValueToDay } from '@ant-design/pro-utils';
import { DatePicker, TimePicker } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
// 兼容代码-----------
import "antd/es/date-picker/style";
//----------------------;

/**
 * 时间选择组件
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FieldTimePicker = function FieldTimePicker(_ref, ref) {
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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var intl = useIntl();
  var finalFormat = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'HH:mm:ss';
  var isNumberOrMoment = dayjs.isDayjs(text) || typeof text === 'number';
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx("span", {
      ref: ref,
      children: text ? dayjs(text, isNumberOrMoment ? undefined : finalFormat).format(finalFormat) : '-'
    });
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx("span", {
        children: dom
      }));
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom;
    var disabled = fieldProps.disabled,
      value = fieldProps.value;
    var dayValue = parseValueToDay(value, finalFormat);
    if (light) {
      var _fieldProps$placehold;
      _dom = /*#__PURE__*/_jsx(FieldLabel, {
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
        value: dayValue || open ? /*#__PURE__*/_jsx(TimePicker, _objectSpread(_objectSpread(_objectSpread({}, compatibleBorder(false)), {}, {
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
      _dom = /*#__PURE__*/_jsx(DatePicker.TimePicker, _objectSpread(_objectSpread(_objectSpread({
        ref: ref,
        format: format
      }, compatibleBorder(plain === undefined ? true : !plain)), fieldProps), {}, {
        value: dayValue
      }));
    }
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
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
  var intl = useIntl();
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var finalFormat = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'HH:mm:ss';
  var _ref3 = Array.isArray(text) ? text : [],
    _ref4 = _slicedToArray(_ref3, 2),
    startText = _ref4[0],
    endText = _ref4[1];
  var startTextIsNumberOrMoment = dayjs.isDayjs(startText) || typeof startText === 'number';
  var endTextIsNumberOrMoment = dayjs.isDayjs(endText) || typeof endText === 'number';
  var parsedStartText = startText ? dayjs(startText, startTextIsNumberOrMoment ? undefined : finalFormat).format(finalFormat) : '';
  var parsedEndText = endText ? dayjs(endText, endTextIsNumberOrMoment ? undefined : finalFormat).format(finalFormat) : '';
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsxs("div", {
      ref: ref,
      children: [/*#__PURE__*/_jsx("div", {
        children: parsedStartText || '-'
      }), /*#__PURE__*/_jsx("div", {
        children: parsedEndText || '-'
      })]
    });
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx("span", {
        children: dom
      }));
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var dayValue = parseValueToDay(fieldProps.value, finalFormat);
    var _dom2;
    if (light) {
      var disabled = fieldProps.disabled,
        _fieldProps$placehold2 = fieldProps.placeholder,
        placeholder = _fieldProps$placehold2 === void 0 ? [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')] : _fieldProps$placehold2;
      _dom2 = /*#__PURE__*/_jsx(FieldLabel, {
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
        value: dayValue || open ? /*#__PURE__*/_jsx(TimePicker.RangePicker, _objectSpread(_objectSpread(_objectSpread({}, compatibleBorder(false)), {}, {
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
      _dom2 = /*#__PURE__*/_jsx(TimePicker.RangePicker, _objectSpread(_objectSpread(_objectSpread({
        ref: ref,
        format: format
      }, compatibleBorder(plain === undefined ? true : !plain)), fieldProps), {}, {
        value: dayValue
      }));
    }
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom2);
    }
    return _dom2;
  }
  return null;
};
var FieldTimeRangePicker = /*#__PURE__*/React.forwardRef(FieldTimeRangePickerComponents);
export { FieldTimeRangePicker };
export default /*#__PURE__*/React.forwardRef(FieldTimePicker);