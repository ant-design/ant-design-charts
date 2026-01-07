import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { InputNumber } from 'antd';
import React from 'react';
// 兼容代码-----------
import "antd/es/input-number/style";
//------------
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 格式化秒
 *
 * @param result
 * @returns {string}
 */
export function formatSecond(result) {
  var newResult = result;
  var formatText = '';
  var past = false;
  if (newResult < 0) {
    newResult = -newResult;
    past = true;
  }
  var d = Math.floor(newResult / (3600 * 24));
  var h = Math.floor(newResult / 3600 % 24);
  var m = Math.floor(newResult / 60 % 60);
  var s = Math.floor(newResult % 60);
  formatText = "".concat(s, "\u79D2");
  if (m > 0) {
    formatText = "".concat(m, "\u5206\u949F").concat(formatText);
  }
  if (h > 0) {
    formatText = "".concat(h, "\u5C0F\u65F6").concat(formatText);
  }
  if (d > 0) {
    formatText = "".concat(d, "\u5929").concat(formatText);
  }
  if (past) {
    formatText += '前';
  }
  return formatText;
}

/**
 * 格式化秒
 *
 * @param FieldSecond
 */
var Second = function Second(_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    placeholder = _ref.placeholder;
  var intl = useIntl();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  if (type === 'read') {
    var secondText = formatSecond(Number(text));
    var dom = /*#__PURE__*/_jsx("span", {
      ref: ref,
      children: secondText
    });
    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/_jsx(InputNumber, _objectSpread({
      ref: ref,
      min: 0,
      style: {
        width: '100%'
      },
      placeholder: placeholderValue
    }, fieldProps));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: type
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(Second);