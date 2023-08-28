import { COORDIANTE_OPTIONS } from '../components';
import { getCustomKeys } from './get-custom-keys';
import { Options } from '../types';

/**
 * 统一删除已转换的配置项
 */
export const deleteCustomKeys = <O extends Options>(options: O): O => {
  const deleteKeys = getCustomKeys();
  [...deleteKeys, ...COORDIANTE_OPTIONS].forEach((key) => {
    delete options[key];
  });

  options.children.forEach((child) => {
    Object.keys(child).forEach((key) => {
      if (deleteKeys.includes(key)) {
        delete child[key];
      }
    });
  });

  return options;
};
