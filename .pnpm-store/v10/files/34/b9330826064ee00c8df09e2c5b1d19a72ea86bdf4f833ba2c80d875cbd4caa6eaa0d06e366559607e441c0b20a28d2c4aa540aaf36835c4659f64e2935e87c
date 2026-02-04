import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Input } from 'antd';
import React from 'react';
// 兼容代码-----------
import { proTheme } from '@ant-design/pro-provider';
import "antd/es/input/style";
//----------------------
import { jsx as _jsx } from "react/jsx-runtime";
var languageFormat = function languageFormat(text, language) {
  if (typeof text !== 'string') {
    return text;
  }
  try {
    if (language === 'json') {
      return JSON.stringify(JSON.parse(text), null, 2);
    }
  } catch (error) {
    // console.log(error)
  }
  return text;
};

/**
 * 代码片段组件 这个组件为了显示简单的配置，复杂的请使用更加重型的组件
 *
 * @param
 */
var FieldCode = function FieldCode(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    _ref$language = _ref.language,
    language = _ref$language === void 0 ? 'text' : _ref$language,
    renderFormItem = _ref.renderFormItem,
    plain = _ref.plain,
    fieldProps = _ref.fieldProps;
  var code = languageFormat(text, language);
  var _proTheme$useToken = proTheme.useToken(),
    token = _proTheme$useToken.token;
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx("pre", _objectSpread(_objectSpread({
      ref: ref
    }, fieldProps), {}, {
      style: _objectSpread({
        padding: 16,
        overflow: 'auto',
        fontSize: '85%',
        lineHeight: 1.45,
        color: token.colorTextSecondary,
        fontFamily: token.fontFamilyCode,
        backgroundColor: 'rgba(150, 150, 150, 0.1)',
        borderRadius: 3,
        width: 'min-content'
      }, fieldProps.style),
      children: /*#__PURE__*/_jsx("code", {
        children: code
      })
    }));
    if (render) {
      return render(code, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        ref: ref
      }), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    fieldProps.value = code;
    var _dom = /*#__PURE__*/_jsx(Input.TextArea, _objectSpread(_objectSpread({
      rows: 5
    }, fieldProps), {}, {
      ref: ref
    }));
    if (plain) {
      _dom = /*#__PURE__*/_jsx(Input, _objectSpread(_objectSpread({}, fieldProps), {}, {
        ref: ref
      }));
    }
    if (renderFormItem) {
      var _renderFormItem;
      return (_renderFormItem = renderFormItem(code, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        ref: ref
      }), _dom)) !== null && _renderFormItem !== void 0 ? _renderFormItem : null;
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldCode);