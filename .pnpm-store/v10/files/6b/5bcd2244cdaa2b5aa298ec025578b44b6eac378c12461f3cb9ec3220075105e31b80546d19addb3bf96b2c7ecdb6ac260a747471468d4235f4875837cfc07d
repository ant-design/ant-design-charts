"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _react = _interopRequireWildcard(require("react"));
var _FieldContext = _interopRequireDefault(require("../../FieldContext"));
var _Field = _interopRequireDefault(require("../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps", "children", "params", "proFieldProps", "mode", "valueEnum", "request", "showSearch", "options"],
  _excluded2 = ["fieldProps", "children", "params", "proFieldProps", "mode", "valueEnum", "request", "options"];
/**
 * 选择框
 *
 * @param
 */
var ProFormSelectComponents = function ProFormSelectComponents(_ref, ref) {
  var fieldProps = _ref.fieldProps,
    children = _ref.children,
    params = _ref.params,
    proFieldProps = _ref.proFieldProps,
    mode = _ref.mode,
    valueEnum = _ref.valueEnum,
    request = _ref.request,
    showSearch = _ref.showSearch,
    options = _ref.options,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    valueEnum: (0, _proUtils.runFunction)(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    filedConfig: {
      customLightMode: true
    },
    fieldProps: (0, _objectSpread2.default)({
      options: options,
      mode: mode,
      showSearch: showSearch,
      getPopupContainer: context.getPopupContainer
    }, fieldProps),
    ref: ref,
    proFieldProps: proFieldProps
  }, rest), {}, {
    children: children
  }));
};
var SearchSelect = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children,
    params = _ref2.params,
    proFieldProps = _ref2.proFieldProps,
    mode = _ref2.mode,
    valueEnum = _ref2.valueEnum,
    request = _ref2.request,
    options = _ref2.options,
    rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var props = (0, _objectSpread2.default)({
    options: options,
    mode: mode || 'multiple',
    labelInValue: true,
    showSearch: true,
    suffixIcon: null,
    autoClearSearchValue: true,
    optionLabelProp: 'label'
  }, fieldProps);
  var context = (0, _react.useContext)(_FieldContext.default);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    valueEnum: (0, _proUtils.runFunction)(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    filedConfig: {
      customLightMode: true
    },
    fieldProps: (0, _objectSpread2.default)({
      getPopupContainer: context.getPopupContainer
    }, props),
    ref: ref,
    proFieldProps: proFieldProps
  }, rest), {}, {
    children: children
  }));
});
var ProFormSelect = /*#__PURE__*/_react.default.forwardRef(ProFormSelectComponents);
var ProFormSearchSelect = SearchSelect;
var WrappedProFormSelect = ProFormSelect;
WrappedProFormSelect.SearchSelect = ProFormSearchSelect;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormSelect.displayName = 'ProFormComponent';
var _default = exports.default = WrappedProFormSelect;