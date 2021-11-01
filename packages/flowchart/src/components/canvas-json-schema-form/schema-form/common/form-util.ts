import type { ISchema } from '../../interface';
import { isEmptyParamValue } from './form-item-wrapper/util';

// 根据 schema 生成表单的值
export function transformSchemaToValueList(schema: ISchema): Record<string, any> {
  const result: Record<string, any> = {};
  const { tabs = [] } = schema;
  tabs.forEach((tab) => {
    const { groups = [] } = tab;
    groups.forEach((group) => {
      const { controls = [] } = group;
      controls.forEach((control) => {
        const { name, value, defaultValue } = control;
        if (['string', 'number'].includes(typeof name)) {
          result[name.toString()] = isEmptyParamValue(value) ? defaultValue : value;
        }
      });
    });
  });
  return result;
}
