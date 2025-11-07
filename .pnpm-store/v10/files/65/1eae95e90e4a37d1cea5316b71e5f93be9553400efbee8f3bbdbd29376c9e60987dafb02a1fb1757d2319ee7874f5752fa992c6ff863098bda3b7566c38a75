"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
require("antd/lib/rate/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

/**
 * 评分组件
 *
 * @param
 */var FieldRate = function FieldRate(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps;
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Rate, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      allowHalf: true,
      disabled: true,
      ref: ref
    }, fieldProps), {}, {
      value: text
    }));
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dom
      }));
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Rate, (0, _objectSpread2.default)({
      allowHalf: true,
      ref: ref
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldRate);