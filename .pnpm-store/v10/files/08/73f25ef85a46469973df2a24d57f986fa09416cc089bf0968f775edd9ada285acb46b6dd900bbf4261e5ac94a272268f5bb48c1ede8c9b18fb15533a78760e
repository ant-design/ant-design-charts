import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { noteOnce } from "rc-util/es/warning";
import ProFormDependency from "../../Dependency";
import { createElement as _createElement } from "react";
export var dependency = function dependency(item, helpers) {
  /** ProFormDependency */
  if (item.valueType === 'dependency') {
    var _item$getFieldProps, _item$name, _item$name2;
    var fieldProps = (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item);
    noteOnce(Array.isArray((_item$name = item.name) !== null && _item$name !== void 0 ? _item$name : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.name), 'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"');
    noteOnce(typeof item.columns === 'function', 'SchemaForm: columns should be a function when valueType is "dependency"');
    if (!Array.isArray((_item$name2 = item.name) !== null && _item$name2 !== void 0 ? _item$name2 : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.name)) return null;
    return /*#__PURE__*/_createElement(ProFormDependency, _objectSpread(_objectSpread({
      name: item.name
    }, fieldProps), {}, {
      key: item.key
    }), function (values) {
      if (!item.columns || typeof item.columns !== 'function') return null;
      return helpers.genItems(item.columns(values));
    });
  }
  return true;
};