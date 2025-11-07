"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps", "unCheckedChildren", "checkedChildren", "proFieldProps"];
/**
 * @zh-cn 单选 Switch
 * @en-us Single Choice Switch
 */
var ProFormSwitch = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    unCheckedChildren = _ref.unCheckedChildren,
    checkedChildren = _ref.checkedChildren,
    proFieldProps = _ref.proFieldProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)({
    valueType: "switch",
    fieldProps: (0, _objectSpread2.default)({
      unCheckedChildren: unCheckedChildren,
      checkedChildren: checkedChildren
    }, fieldProps),
    ref: ref,
    valuePropName: "checked",
    proFieldProps: proFieldProps,
    filedConfig: {
      valuePropName: 'checked',
      ignoreWidth: true,
      customLightMode: true
    }
  }, rest));
});
var _default = exports.default = ProFormSwitch;