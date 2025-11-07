"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.group = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _layouts = require("../../../layouts");
var _jsxRuntime = require("react/jsx-runtime");
var group = exports.group = function group(item, _ref) {
  var genItems = _ref.genItems;
  if (item.valueType === 'group') {
    var _item$getFieldProps;
    if (!item.columns || !Array.isArray(item.columns)) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layouts.ProFormGroup, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      label: item.label,
      colProps: item.colProps,
      rowProps: item.rowProps
    }, (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item)), {}, {
      children: genItems(item.columns)
    }), item.key);
  }
  return true;
};