"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _proProvider = require("@ant-design/pro-provider");
require("antd/lib/input/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------
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
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    token = _proTheme$useToken.token;
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)("pre", (0, _objectSpread2.default)((0, _objectSpread2.default)({
      ref: ref
    }, fieldProps), {}, {
      style: (0, _objectSpread2.default)({
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("code", {
        children: code
      })
    }));
    if (render) {
      return render(code, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), {}, {
        ref: ref
      }), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    fieldProps.value = code;
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input.TextArea, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      rows: 5
    }, fieldProps), {}, {
      ref: ref
    }));
    if (plain) {
      _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldProps), {}, {
        ref: ref
      }));
    }
    if (renderFormItem) {
      var _renderFormItem;
      return (_renderFormItem = renderFormItem(code, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), {}, {
        ref: ref
      }), _dom)) !== null && _renderFormItem !== void 0 ? _renderFormItem : null;
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldCode);