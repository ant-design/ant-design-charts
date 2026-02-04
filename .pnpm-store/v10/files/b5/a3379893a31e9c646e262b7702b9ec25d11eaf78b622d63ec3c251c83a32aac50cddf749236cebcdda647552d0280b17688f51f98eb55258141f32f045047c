"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));
require("antd/lib/date-picker/style");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//----------------------
_dayjs.default.extend(_relativeTime.default);
/**
 * 与当前的时间进行比较 http://momentjs.cn/docs/displaying/fromnow.html
 *
 * @param
 */
var FieldFromNow = function FieldFromNow(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    plain = _ref.plain,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    format = _ref.format,
    fieldProps = _ref.fieldProps;
  var intl = (0, _proProvider.useIntl)();
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: (0, _dayjs.default)(text).format((fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.format) || format || 'YYYY-MM-DD HH:mm:ss'),
      children: (0, _dayjs.default)(text).fromNow()
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dom
      }));
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: dom
    });
  }
  if (mode === 'edit' || mode === 'update') {
    var placeholder = intl.getMessage('tableForm.selectPlaceholder', '请选择');
    var momentValue = (0, _proUtils.parseValueToDay)(fieldProps.value);
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.DatePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
      ref: ref,
      placeholder: placeholder,
      showTime: true
    }, (0, _proUtils.compatibleBorder)(plain === undefined ? true : !plain)), fieldProps), {}, {
      value: momentValue
    }));
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldFromNow);