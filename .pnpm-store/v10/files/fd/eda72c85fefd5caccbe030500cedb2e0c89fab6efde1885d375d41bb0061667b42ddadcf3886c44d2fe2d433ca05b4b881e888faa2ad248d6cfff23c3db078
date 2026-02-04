import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { isNil } from '@ant-design/pro-utils';
import { InputNumber } from 'antd';
import omit from "rc-util/es/omit";
import React, { useCallback } from 'react';
// 兼容代码-----------
import { useIntl } from '@ant-design/pro-provider';
import "antd/es/input-number/style";
//----------------------
import { jsx as _jsx } from "react/jsx-runtime";
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
  var intl = useIntl();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  var proxyChange = useCallback(function (value) {
    var val = value !== null && value !== void 0 ? value : undefined;
    if (!fieldProps.stringMode && typeof val === 'string') {
      val = Number(val);
    }
    if (typeof val === 'number' && !isNil(val) && !isNil(fieldProps.precision)) {
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
    var digit = new Intl.NumberFormat(undefined, _objectSpread(_objectSpread({}, fractionDigits), (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.intlProps) || {})).format(Number(text));

    // 如果是 string 模式，什么都不要处理了
    var dom = !(fieldProps !== null && fieldProps !== void 0 && fieldProps.stringMode) ? /*#__PURE__*/_jsx("span", {
      ref: ref,
      children: (fieldProps === null || fieldProps === void 0 || (_fieldProps$formatter = fieldProps.formatter) === null || _fieldProps$formatter === void 0 ? void 0 : _fieldProps$formatter.call(fieldProps, digit)) || digit
    }) : /*#__PURE__*/_jsx("span", {
      children: text
    });
    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/_jsx(InputNumber, _objectSpread(_objectSpread({
      ref: ref,
      min: 0,
      placeholder: placeholderValue
    }, omit(fieldProps, ['onChange', 'onBlur'])), {}, {
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
      return renderFormItem(text, _objectSpread({
        mode: type
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldDigit);