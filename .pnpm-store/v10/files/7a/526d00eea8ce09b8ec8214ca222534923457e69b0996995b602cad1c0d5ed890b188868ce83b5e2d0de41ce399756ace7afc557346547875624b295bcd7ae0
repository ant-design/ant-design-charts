import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ProFormGroup } from "../../../layouts";
import { jsx as _jsx } from "react/jsx-runtime";
export var group = function group(item, _ref) {
  var genItems = _ref.genItems;
  if (item.valueType === 'group') {
    var _item$getFieldProps;
    if (!item.columns || !Array.isArray(item.columns)) return null;
    return /*#__PURE__*/_jsx(ProFormGroup, _objectSpread(_objectSpread({
      label: item.label,
      colProps: item.colProps,
      rowProps: item.rowProps
    }, (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item)), {}, {
      children: genItems(item.columns)
    }), item.key);
  }
  return true;
};