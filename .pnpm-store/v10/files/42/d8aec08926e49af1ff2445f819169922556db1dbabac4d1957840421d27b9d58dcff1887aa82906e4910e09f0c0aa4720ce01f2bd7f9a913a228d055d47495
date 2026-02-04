"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldPropsOrFormItemProps = void 0;
var _runFunction = require("../runFunction");
/**
 * 因为 fieldProps 支持了 function 所以新增了这个方法
 *
 * @param fieldProps
 * @param form
 */
var getFieldPropsOrFormItemProps = exports.getFieldPropsOrFormItemProps = function getFieldPropsOrFormItemProps(fieldProps, form, extraProps) {
  if (form === undefined) {
    return fieldProps;
  }
  return (0, _runFunction.runFunction)(fieldProps, form, extraProps);
};