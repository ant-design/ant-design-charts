"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependency = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _warning = require("rc-util/lib/warning");
var _Dependency = _interopRequireDefault(require("../../Dependency"));
var _react = require("react");
var dependency = exports.dependency = function dependency(item, helpers) {
  /** ProFormDependency */
  if (item.valueType === 'dependency') {
    var _item$getFieldProps, _item$name, _item$name2;
    var fieldProps = (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item);
    (0, _warning.noteOnce)(Array.isArray((_item$name = item.name) !== null && _item$name !== void 0 ? _item$name : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.name), 'SchemaForm: fieldProps.name should be NamePath[] when valueType is "dependency"');
    (0, _warning.noteOnce)(typeof item.columns === 'function', 'SchemaForm: columns should be a function when valueType is "dependency"');
    if (!Array.isArray((_item$name2 = item.name) !== null && _item$name2 !== void 0 ? _item$name2 : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.name)) return null;
    return /*#__PURE__*/(0, _react.createElement)(_Dependency.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
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