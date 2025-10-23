import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { ProFormList } from "../../List";
import { createElement as _createElement } from "react";
export var formList = function formList(item, _ref) {
  var genItems = _ref.genItems;
  if (item.valueType === 'formList' && item.dataIndex) {
    var _item$getFormItemProp, _item$getFieldProps;
    if (!item.columns || !Array.isArray(item.columns)) return null;
    return /*#__PURE__*/_createElement(ProFormList, _objectSpread(_objectSpread({}, (_item$getFormItemProp = item.getFormItemProps) === null || _item$getFormItemProp === void 0 ? void 0 : _item$getFormItemProp.call(item)), {}, {
      key: item.key,
      name: item.dataIndex,
      label: item.label,
      initialValue: item.initialValue,
      colProps: item.colProps,
      rowProps: item.rowProps
    }, (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item)), genItems(item.columns));
  }
  return true;
};