import { runFunction } from "../runFunction";

/**
 * 因为 fieldProps 支持了 function 所以新增了这个方法
 *
 * @param fieldProps
 * @param form
 */
export var getFieldPropsOrFormItemProps = function getFieldPropsOrFormItemProps(fieldProps, form, extraProps) {
  if (form === undefined) {
    return fieldProps;
  }
  return runFunction(fieldProps, form, extraProps);
};