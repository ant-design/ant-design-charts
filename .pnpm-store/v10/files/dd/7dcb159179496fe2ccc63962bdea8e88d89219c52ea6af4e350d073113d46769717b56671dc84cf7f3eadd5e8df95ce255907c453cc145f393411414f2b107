import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, compatibleBorder, parseValueToDay } from '@ant-design/pro-utils';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useState } from 'react';
// 兼容代码-----------
import "antd/es/date-picker/style";
//----------------------
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
dayjs.extend(weekOfYear);
var formatDate = function formatDate(text, format) {
  if (!text) return '-';
  if (typeof format === 'function') {
    return format(dayjs(text));
  } else {
    return dayjs(text).format((Array.isArray(format) ? format[0] : format) || 'YYYY-MM-DD');
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
  var intl = useIntl();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  if (mode === 'read') {
    var dom = formatDate(text, fieldProps.format || format);
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {
        children: dom
      }));
    }
    return /*#__PURE__*/_jsx(_Fragment, {
      children: dom
    });
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom;
    var disabled = fieldProps.disabled,
      value = fieldProps.value,
      _fieldProps$placehold = fieldProps.placeholder,
      placeholder = _fieldProps$placehold === void 0 ? intl.getMessage('tableForm.selectPlaceholder', '请选择') : _fieldProps$placehold;
    var dayValue = parseValueToDay(value);
    if (light) {
      _dom = /*#__PURE__*/_jsx(FieldLabel, {
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
        value: dayValue || open ? /*#__PURE__*/_jsx(DatePicker, _objectSpread(_objectSpread(_objectSpread({
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
        }, compatibleBorder(false)), {}, {
          open: open
        })) : undefined,
        allowClear: false,
        downIcon: dayValue || open ? false : undefined,
        bordered: bordered,
        ref: lightLabel
      });
    } else {
      _dom = /*#__PURE__*/_jsx(DatePicker, _objectSpread(_objectSpread(_objectSpread({
        picker: picker,
        showTime: showTime,
        format: format,
        placeholder: placeholder
      }, compatibleBorder(plain === undefined ? true : !plain)), {}, {
        ref: ref
      }, fieldProps), {}, {
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
export default /*#__PURE__*/React.forwardRef(FieldDatePicker);