import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Rate } from 'antd';
import React from 'react';
// 兼容代码-----------
import "antd/es/rate/style";
//------------

/**
 * 评分组件
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var FieldRate = function FieldRate(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps;
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx(Rate, _objectSpread(_objectSpread({
      allowHalf: true,
      disabled: true,
      ref: ref
    }, fieldProps), {}, {
      value: text
    }));
    if (render) {
      return render(text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {
        children: dom
      }));
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/_jsx(Rate, _objectSpread({
      allowHalf: true,
      ref: ref
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
export default /*#__PURE__*/React.forwardRef(FieldRate);