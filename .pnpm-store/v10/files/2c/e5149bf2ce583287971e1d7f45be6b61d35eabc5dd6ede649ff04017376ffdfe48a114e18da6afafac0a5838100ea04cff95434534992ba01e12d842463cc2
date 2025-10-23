import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useIntl } from '@ant-design/pro-provider';
import { Input } from 'antd';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
// 兼容代码-----------
import "antd/es/input/style";
//------------

/**
 * 最基本的组件，就是个普通的 Input
 *
 * @param
 */
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var FieldText = function FieldText(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    _ref$emptyText = _ref.emptyText,
    emptyText = _ref$emptyText === void 0 ? '-' : _ref$emptyText;
  var _ref2 = fieldProps || {},
    autoFocus = _ref2.autoFocus,
    _ref2$prefix = _ref2.prefix,
    prefix = _ref2$prefix === void 0 ? '' : _ref2$prefix,
    _ref2$suffix = _ref2.suffix,
    suffix = _ref2$suffix === void 0 ? '' : _ref2$suffix;
  var intl = useIntl();
  var inputRef = useRef();
  useImperativeHandle(ref, function () {
    return inputRef.current;
  }, []);
  useEffect(function () {
    if (autoFocus) {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
    }
  }, [autoFocus]);
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsxs(_Fragment, {
      children: [prefix, text !== null && text !== void 0 ? text : emptyText, suffix]
    });
    if (render) {
      var _render;
      return (_render = render(text, _objectSpread({
        mode: mode
      }, fieldProps), dom)) !== null && _render !== void 0 ? _render : emptyText;
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var placeholder = intl.getMessage('tableForm.inputPlaceholder', '请输入');
    var _dom = /*#__PURE__*/_jsx(Input, _objectSpread({
      ref: inputRef,
      placeholder: placeholder,
      allowClear: true
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
export default /*#__PURE__*/React.forwardRef(FieldText);