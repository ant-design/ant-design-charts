import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { Input } from 'antd';
import omit from "rc-util/es/omit";
import React from 'react';
import FieldTextAreaReadonly from "./readonly";

// 兼容代码-----------
import "antd/es/input/style";
//------------
/**
 * 最基本的组件，就是个普通的 Input.TextArea
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
var FieldTextArea = function FieldTextArea(props, ref) {
  var text = props.text,
    mode = props.mode,
    render = props.render,
    renderFormItem = props.renderFormItem,
    fieldProps = props.fieldProps;
  var intl = useIntl();
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx(FieldTextAreaReadonly, _objectSpread(_objectSpread({}, props), {}, {
      ref: ref
    }));
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, omit(fieldProps, ['showCount'])), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/_jsx(Input.TextArea, _objectSpread({
      ref: ref,
      rows: 3,
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') e.stopPropagation();
      },
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入')
    }, fieldProps));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldTextArea);