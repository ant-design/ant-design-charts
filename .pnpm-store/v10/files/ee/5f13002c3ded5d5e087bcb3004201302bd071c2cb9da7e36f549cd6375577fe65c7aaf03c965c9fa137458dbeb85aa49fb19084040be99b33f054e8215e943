"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getProgressStatus = getProgressStatus;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _util = require("../Percent/util");
require("antd/lib/input-number/style");
require("antd/lib/progress/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

function getProgressStatus(text) {
  if (text === 100) {
    return 'success';
  }
  if (text < 0) {
    return 'exception';
  }
  if (text < 100) {
    return 'active';
  }
  return 'normal';
}

/**
 * 进度条组件
 *
 * @param
 */
var FieldProgress = function FieldProgress(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    plain = _ref.plain,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    placeholder = _ref.placeholder;
  var intl = (0, _proProvider.useIntl)();
  var placeholderValue = placeholder || intl.getMessage('tableForm.inputPlaceholder', '请输入');
  var realValue = (0, _react.useMemo)(function () {
    return typeof text === 'string' && text.includes('%') ? (0, _util.toNumber)(text.replace('%', '')) : (0, _util.toNumber)(text);
  }, [text]);
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Progress, (0, _objectSpread2.default)({
      ref: ref,
      size: "small",
      style: {
        minWidth: 100,
        maxWidth: 320
      },
      percent: realValue,
      steps: plain ? 10 : undefined,
      status: getProgressStatus(realValue)
    }, fieldProps));
    if (render) {
      return render(realValue, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.InputNumber, (0, _objectSpread2.default)({
      ref: ref,
      placeholder: placeholderValue
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldProgress);