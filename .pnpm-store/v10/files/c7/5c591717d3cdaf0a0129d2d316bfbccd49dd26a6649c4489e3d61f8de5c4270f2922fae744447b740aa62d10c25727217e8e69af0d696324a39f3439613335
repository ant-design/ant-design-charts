import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, compatibleBorder, parseValueToDay } from '@ant-design/pro-utils';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import React, { useCallback } from 'react';
// 兼容代码-----------
import "antd/es/date-picker/style";
//------------

/**
 * 日期范围选择组件
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FieldRangePicker = function FieldRangePicker(_ref, ref) {
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
  var intl = useIntl();
  var _ref2 = Array.isArray(text) ? text : [],
    _ref3 = _slicedToArray(_ref2, 2),
    startText = _ref3[0],
    endText = _ref3[1];
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  // antd 改了一下 交互，这里要兼容一下，不然会导致无法选中第二个数据
  var genFormatText = useCallback(function (formatValue) {
    if (typeof (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) === 'function') {
      var _fieldProps$format;
      return fieldProps === null || fieldProps === void 0 || (_fieldProps$format = fieldProps.format) === null || _fieldProps$format === void 0 ? void 0 : _fieldProps$format.call(fieldProps, formatValue);
    }
    return (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'YYYY-MM-DD';
  }, [fieldProps, format]);
  // activePickerIndex for https://github.com/ant-design/ant-design/issues/22158
  var parsedStartText = startText ? dayjs(startText).format(genFormatText(dayjs(startText))) : '';
  var parsedEndText = endText ? dayjs(endText).format(genFormatText(dayjs(endText))) : '';
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsxs("div", {
      ref: ref,
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center'
      },
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
    var dayValue = parseValueToDay(fieldProps.value);
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
        disabled: fieldProps.disabled,
        value: dayValue || open ? /*#__PURE__*/_jsx(DatePicker.RangePicker, _objectSpread(_objectSpread(_objectSpread({
          picker: picker,
          showTime: showTime,
          format: format
        }, compatibleBorder(false)), fieldProps), {}, {
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
      _dom = /*#__PURE__*/_jsx(DatePicker.RangePicker, _objectSpread(_objectSpread(_objectSpread({
        ref: ref,
        format: format,
        showTime: showTime,
        placeholder: [intl.getMessage('tableForm.selectPlaceholder', '请选择'), intl.getMessage('tableForm.selectPlaceholder', '请选择')]
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
export default /*#__PURE__*/React.forwardRef(FieldRangePicker);