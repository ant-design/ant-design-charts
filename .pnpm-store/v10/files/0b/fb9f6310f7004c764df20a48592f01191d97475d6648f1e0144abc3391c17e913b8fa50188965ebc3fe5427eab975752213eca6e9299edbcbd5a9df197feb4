"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
require("antd/lib/input/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

/**
 * 最基本的组件，就是个普通的 Input
 *
 * @param
 */var FieldText = function FieldText(_ref, ref) {
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
  var intl = (0, _proProvider.useIntl)();
  var inputRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return inputRef.current;
  }, []);
  (0, _react.useEffect)(function () {
    if (autoFocus) {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
    }
  }, [autoFocus]);
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [prefix, text !== null && text !== void 0 ? text : emptyText, suffix]
    });
    if (render) {
      var _render;
      return (_render = render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), dom)) !== null && _render !== void 0 ? _render : emptyText;
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var placeholder = intl.getMessage('tableForm.inputPlaceholder', '请输入');
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, (0, _objectSpread2.default)({
      ref: inputRef,
      placeholder: placeholder,
      allowClear: true
    }, fieldProps));
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldText);