import { omit } from './index';
import { TRANSFORM_OPTION_KEY, CHILDREN_SHAPE, SPECIAL_OPTIONS } from '../constants';
import { Adaptor } from '../types';
/**
 * @title 将自定义配置转换为 G2 接受的格式
 */
export const transformOptions = (params: Adaptor) => {
  const { options } = params;
  const { children = [] } = options;

  const getRest = (o: Adaptor['options']) => {
    const { children, type, data, ...rest } = o;
    return omit(rest, CHILDREN_SHAPE);
  };

  const rest = getRest(options);

  const getValue = (newConfig: string | Function, value: unknown, origin: object) => {
    if (typeof newConfig === 'function') {
      return newConfig(value, origin);
    }
    return {
      [newConfig]: value,
    };
  };

  const getCustomTransform = (key: string) => {
    return SPECIAL_OPTIONS.find((option) => option.key === key)?.callback;
  };

  children.forEach((child) => {
    /**
     * @description 外层配置应用到所有 children
     */
    const transformOption = Object.assign(child, rest);

    Object.keys(TRANSFORM_OPTION_KEY).forEach((specKey) => {
      const transformObject = TRANSFORM_OPTION_KEY[specKey];
      /**
       * @description 遍历配置项，如果存在对应的映射规则，则进行转换
       * @example 详见 src/core/constants/index.ts
       */
      Object.keys(transformObject).forEach((key) => {
        if (options[key]) {
          const transformValue = getValue(transformObject[key], options[key], transformOption);
          const callback = getCustomTransform(specKey);
          if (callback) {
            callback(transformOption, specKey, transformValue);
          } else {
            transformOption[specKey] = Object.assign(transformOption[specKey] || {}, transformValue);
            delete options[key];
          }
        }
      });
    });
  });

  /**
   * @description 将 CHILDREN_SHAPE 中的配置项, 转换为 children
   * @example 详见 src/core/constants/index.ts
   */
  Object.keys(options).forEach((key) => {
    if (CHILDREN_SHAPE.includes(key)) {
      children.push(...options[key]);
      delete options[key];
    }
  });
  return params;
};
