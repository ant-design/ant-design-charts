"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireDefault(require("react"));
var _readonly = _interopRequireDefault(require("./readonly"));
require("antd/lib/input/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------
/**
 * 最基本的组件，就是个普通的 Input.TextArea
 *
 * @param
 */var FieldTextArea = function FieldTextArea(props, ref) {
  var text = props.text,
    mode = props.mode,
    render = props.render,
    renderFormItem = props.renderFormItem,
    fieldProps = props.fieldProps;
  var intl = (0, _proProvider.useIntl)();
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_readonly.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      ref: ref
    }));
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, (0, _omit.default)(fieldProps, ['showCount'])), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input.TextArea, (0, _objectSpread2.default)({
      ref: ref,
      rows: 3,
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') e.stopPropagation();
      },
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入')
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldTextArea);