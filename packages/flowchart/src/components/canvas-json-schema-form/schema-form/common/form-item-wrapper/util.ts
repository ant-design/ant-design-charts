import get from 'lodash/get';
import type { FormInstance } from 'antd/es/form';
import type { IDependency, IControlSchema, UpdateReasonField } from '../../../interface';

// 根据依赖字段生成 FormItem 的 updater
export function makeUpdaterByDependencies(
  dependencies: IDependency[],
  setReasonField?: (name: UpdateReasonField) => void,
): (prev: any, curr: any) => boolean {
  return (prevValues: any, currentValues: any) => {
    const hasFunctionDep = dependencies.some((dep) => typeof dep?.condition === 'function');
    if (hasFunctionDep) {
      if (typeof setReasonField === 'function') {
        setReasonField(undefined); // 在更新规则是一个函数时，不依赖特定字段进行更新(即只要有字段的值更新了就更新，因为不知道函数内部依赖什么字段)
      }
      return true;
    }
    return dependencies.some((dep) => {
      const { name } = dep;
      if (!name) {
        // eslint-disable-next-line no-console
        console.error(
          `[Schema form]: A dependent name must be provided in the updater when the dependency condition is not a function.`,
        );
        return false;
      }
      const changed = get(prevValues, name) !== get(currentValues, name);
      if (changed) {
        if (typeof setReasonField === 'function') {
          setReasonField(name);
        }
        return true;
      }
      return false;
    });
  };
}

export function isEmptyParamValue(val: string | number | boolean | undefined): boolean {
  return val === '' || val === undefined;
}

// 根据依赖字段的值生成当前的 FormItem 的值
export function makeFormItemControlledProps(
  form: FormInstance<any>,
  schema: IControlSchema,
  reasonField?: UpdateReasonField,
) {
  const { getFieldValue, getFieldsValue } = form;
  const { dependencies, hidden, disabled } = schema;

  let isHidden: boolean = hidden;
  let isDisabled: boolean = disabled;
  // 当依赖满足并且依赖被操作过时，最终状态会变成依赖指定的状态
  dependencies?.forEach((dependency) => {
    const { name: depName, condition, hidden: targetHiden, disabled: targetDisabled } = dependency;
    // 在 condition 不是函数时，只检验造成更新的字段的变化
    if (typeof condition !== 'function' && reasonField && depName !== reasonField) {
      return;
    }
    let match: boolean = false;
    if (typeof condition === 'function') {
      const values = getFieldsValue();
      match = !!condition(values);
    } else {
      if (!depName) {
        // eslint-disable-next-line no-console
        console.error(
          `[Schema form]: A dependent name must be provided in the props genarator when the dependency condition is not a function.`,
        );
        return;
      }
      match = getFieldValue(depName) === condition;
    }
    if (match) {
      if (targetHiden !== undefined) {
        isHidden = targetHiden;
      }
      if (targetDisabled !== undefined) {
        isDisabled = targetDisabled;
      }
    }
  });

  return {
    hidden: isHidden,
    disabled: isDisabled,
  };
}
