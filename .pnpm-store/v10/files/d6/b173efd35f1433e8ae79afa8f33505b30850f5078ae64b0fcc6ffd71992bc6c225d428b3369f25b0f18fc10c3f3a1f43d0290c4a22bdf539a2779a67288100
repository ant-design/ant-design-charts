"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
require("antd/lib/image/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------

/**
 * 数字组件
 *
 * @param FieldImageProps {
 *     text: number;
 *     moneySymbol?: string; }
 */
var FieldImage = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    placeholder = _ref.placeholder,
    width = _ref.width;
  var intl = (0, _proProvider.useIntl)();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  if (type === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Image, (0, _objectSpread2.default)({
      ref: ref,
      width: width || 32,
      src: text
    }, fieldProps));
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, (0, _objectSpread2.default)({
      ref: ref,
      placeholder: placeholderValue
    }, fieldProps));
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
});
var _default = exports.default = FieldImage;