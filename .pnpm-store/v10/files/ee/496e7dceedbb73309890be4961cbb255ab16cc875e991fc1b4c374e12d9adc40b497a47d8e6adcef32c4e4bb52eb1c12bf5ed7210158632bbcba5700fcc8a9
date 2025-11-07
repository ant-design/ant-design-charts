"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireDefault(require("react"));
require("antd/lib/input/style");
require("antd/lib/space/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["text", "mode", "render", "renderFormItem", "fieldProps", "proFieldKey"]; // 兼容代码-----------
//----------------------
/**
 * 最基本的组件，就是个普通的 Input.Password
 *
 * @param
 */
var FieldPassword = function FieldPassword(_ref, ref) {
  var text = _ref.text,
    mode = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    proFieldKey = _ref.proFieldKey,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var intl = (0, _proProvider.useIntl)();
  var _useMergedState = (0, _useMergedState3.default)(function () {
      return rest.open || rest.visible || false;
    }, {
      value: rest.open || rest.visible,
      onChange: rest.onOpenChange || rest.onVisible
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: "-"
    });
    if (text) {
      dom = /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          ref: ref,
          children: open ? text : '********'
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          onClick: function onClick() {
            return setOpen(!open);
          },
          children: open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.EyeOutlined, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.EyeInvisibleOutlined, {})
        })]
      });
    }
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: mode
      }, fieldProps), dom);
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input.Password, (0, _objectSpread2.default)({
      placeholder: intl.getMessage('tableForm.inputPlaceholder', '请输入'),
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldPassword);