import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Slider } from 'antd';
import React from 'react';
// 兼容代码-----------
import "antd/es/slider/style";
//------------
/**
 * 评分组件
 *
 * @param
 */
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var FieldSlider = function FieldSlider(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps;
  if (mode === 'read') {
    var dom = text;
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
    var _dom = /*#__PURE__*/_jsx(Slider, _objectSpread(_objectSpread({
      ref: ref
    }, fieldProps), {}, {
      style: _objectSpread({
        minWidth: 120
      }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style)
    }));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldSlider);