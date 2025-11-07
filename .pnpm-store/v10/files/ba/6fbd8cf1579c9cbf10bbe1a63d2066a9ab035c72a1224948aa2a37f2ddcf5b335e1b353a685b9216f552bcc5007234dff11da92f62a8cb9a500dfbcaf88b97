import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { Image, Input } from 'antd';
import React from 'react';
// 兼容代码-----------
import "antd/es/image/style";
//----------------------
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 数字组件
 *
 * @param FieldImageProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
var FieldImage = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    placeholder = _ref.placeholder,
    width = _ref.width;
  var intl = useIntl();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  if (type === 'read') {
    var dom = /*#__PURE__*/_jsx(Image, _objectSpread({
      ref: ref,
      width: width || 32,
      src: text
    }, fieldProps));
    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/_jsx(Input, _objectSpread({
      ref: ref,
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
});
export default FieldImage;