import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import ProFormFieldSet from "../../FieldSet";
import { createElement as _createElement } from "react";
export var formSet = function formSet(item, _ref) {
  var genItems = _ref.genItems;
  if (item.valueType === 'formSet' && item.dataIndex) {
    var _item$getFormItemProp, _item$getFieldProps;
    if (!item.columns || !Array.isArray(item.columns)) return null;
    return /*#__PURE__*/_createElement(ProFormFieldSet, _objectSpread(_objectSpread({}, (_item$getFormItemProp = item.getFormItemProps) === null || _item$getFormItemProp === void 0 ? void 0 : _item$getFormItemProp.call(item)), {}, {
      key: item.key,
      initialValue: item.initialValue,
      name: item.dataIndex,
      label: item.label,
      colProps: item.colProps,
      rowProps: item.rowProps
    }, (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item)), genItems(item.columns));
  }
  return true;
};