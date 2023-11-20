import { COORDIANTE_OPTIONS } from '../components';
import { getCustomKeys } from './get-custom-keys';
import { RESERVED_KEYS } from '../constants';
import { Options } from '../types';

/**
 * 统一删除已转换的配置项
 */
export const deleteCustomKeys = <O extends Options>(options: O, isRender?: boolean): O => {
  const deleteKeys = getCustomKeys();
  [...deleteKeys, ...COORDIANTE_OPTIONS].forEach((key) => {
    delete options[key];
  });
  // 2023-11-09 对children为空情况做兼容。
  options.children?.forEach((child) => {
    Object.keys(child).forEach((key) => {
      if (deleteKeys.includes(key)) {
        delete child[key];
      }
    });
  });

  /**
   * @description 最终渲染，除保留配置外，其余全部删除，避免配置污染
   */
  if (isRender) {
    Object.keys(options).forEach((key) => {
      if (!RESERVED_KEYS.includes(key)) {
        delete options[key];
      }
    });
  }

  return options;
};
