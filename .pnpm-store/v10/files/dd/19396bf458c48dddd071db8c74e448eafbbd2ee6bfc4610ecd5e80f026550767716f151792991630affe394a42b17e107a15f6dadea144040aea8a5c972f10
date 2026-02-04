"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formList = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _List = require("../../List");
var _react = require("react");
var formList = exports.formList = function formList(item, _ref) {
  var genItems = _ref.genItems;
  if (item.valueType === 'formList' && item.dataIndex) {
    var _item$getFormItemProp, _item$getFieldProps;
    if (!item.columns || !Array.isArray(item.columns)) return null;
    return /*#__PURE__*/(0, _react.createElement)(_List.ProFormList, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (_item$getFormItemProp = item.getFormItemProps) === null || _item$getFormItemProp === void 0 ? void 0 : _item$getFormItemProp.call(item)), {}, {
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