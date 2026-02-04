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
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _proUtils = require("@ant-design/pro-utils");
require("antd/lib/switch/style");
var _jsxRuntime = require("react/jsx-runtime");
// 兼容代码-----------

//------------

/**
 * 评分组件
 *
 * @param
 */var FieldSwitch = function FieldSwitch(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    light = _ref.light,
    label = _ref.label,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps;
  var intl = (0, _proProvider.useIntl)();
  var dom = (0, _react.useMemo)(function () {
    var _fieldProps$checkedCh, _fieldProps$unChecked;
    if (text === undefined || text === null || "".concat(text).length < 1) return '-';
    return text ? (_fieldProps$checkedCh = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checkedChildren) !== null && _fieldProps$checkedCh !== void 0 ? _fieldProps$checkedCh : intl.getMessage('switch.open', '打开') : (_fieldProps$unChecked = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.unCheckedChildren) !== null && _fieldProps$unChecked !== void 0 ? _fieldProps$unChecked : intl.getMessage('switch.close', '关闭');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checkedChildren, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.unCheckedChildren, text]);
  if (mode === 'read') {
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dom
      }));
    }
    return dom !== null && dom !== void 0 ? dom : '-';
  }
  if (mode === 'edit' || mode === 'update') {
    var _fieldProps$checked;
    var editDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      ref: ref,
      size: light ? 'small' : undefined
    }, (0, _omit.default)(fieldProps, ['value'])), {}, {
      checked: (_fieldProps$checked = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.checked) !== null && _fieldProps$checked !== void 0 ? _fieldProps$checked : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value
    }));
    if (light) {
      var disabled = fieldProps.disabled,
        bordered = fieldProps.bordered;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
        label: label,
        disabled: disabled,
        bordered: bordered,
        downIcon: false,
        value: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            paddingLeft: 8
          },
          children: editDom
        }),
        allowClear: false
      });
    }
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), editDom);
    }
    return editDom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldSwitch);