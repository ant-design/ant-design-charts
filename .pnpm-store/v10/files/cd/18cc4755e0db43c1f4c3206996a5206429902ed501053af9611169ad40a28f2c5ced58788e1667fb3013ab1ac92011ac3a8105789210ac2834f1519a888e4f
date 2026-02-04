import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "children", "params", "proFieldProps", "mode", "valueEnum", "request", "showSearch", "options"],
  _excluded2 = ["fieldProps", "children", "params", "proFieldProps", "mode", "valueEnum", "request", "options"];
import { runFunction } from '@ant-design/pro-utils';
import React, { useContext } from 'react';
import FieldContext from "../../FieldContext";
import ProFormField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
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
    rest = _objectWithoutProperties(_ref, _excluded);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProFormField, _objectSpread(_objectSpread({
    valueEnum: runFunction(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    filedConfig: {
      customLightMode: true
    },
    fieldProps: _objectSpread({
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
var SearchSelect = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var fieldProps = _ref2.fieldProps,
    children = _ref2.children,
    params = _ref2.params,
    proFieldProps = _ref2.proFieldProps,
    mode = _ref2.mode,
    valueEnum = _ref2.valueEnum,
    request = _ref2.request,
    options = _ref2.options,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  var props = _objectSpread({
    options: options,
    mode: mode || 'multiple',
    labelInValue: true,
    showSearch: true,
    suffixIcon: null,
    autoClearSearchValue: true,
    optionLabelProp: 'label'
  }, fieldProps);
  var context = useContext(FieldContext);
  return /*#__PURE__*/_jsx(ProFormField, _objectSpread(_objectSpread({
    valueEnum: runFunction(valueEnum),
    request: request,
    params: params,
    valueType: "select",
    filedConfig: {
      customLightMode: true
    },
    fieldProps: _objectSpread({
      getPopupContainer: context.getPopupContainer
    }, props),
    ref: ref,
    proFieldProps: proFieldProps
  }, rest), {}, {
    children: children
  }));
});
var ProFormSelect = /*#__PURE__*/React.forwardRef(ProFormSelectComponents);
var ProFormSearchSelect = SearchSelect;
var WrappedProFormSelect = ProFormSelect;
WrappedProFormSelect.SearchSelect = ProFormSearchSelect;

// @ts-ignore
// eslint-disable-next-line no-param-reassign
WrappedProFormSelect.displayName = 'ProFormComponent';
export default WrappedProFormSelect;