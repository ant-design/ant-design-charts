import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "unCheckedChildren", "checkedChildren", "proFieldProps"];
import React from 'react';
import ProField from "../Field";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @zh-cn 单选 Switch
 * @en-us Single Choice Switch
 */
var ProFormSwitch = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var fieldProps = _ref.fieldProps,
    unCheckedChildren = _ref.unCheckedChildren,
    checkedChildren = _ref.checkedChildren,
    proFieldProps = _ref.proFieldProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProField, _objectSpread({
    valueType: "switch",
    fieldProps: _objectSpread({
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
export default ProFormSwitch;