import { CHILDREN_SHAPE, SPECIAL_OPTIONS, TRANSFORM_OPTION_KEY } from '../constants';
import { Adaptor } from '../types';
import { getCustomKeys, omit } from './index';
/**
 * @title 将自定义配置转换为 G2 接受的格式
 */
export const transformOptions = (params: Adaptor) => {
  const { options } = params;
  const { children = [] } = options;

  const deleteKeys = [];

  const getRest = (o: Adaptor['options']) => {
    const { children, type, data, ...rest } = o;

    return omit(rest, CHILDREN_SHAPE, getCustomKeys());
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

  /**
   * @description 更新图表配置
   */
  const updateOptions = (origin, key, value) => {
    const callback = getCustomTransform(key);
    if (callback) {
      callback(origin, key, value);
    } else {
      origin[key] = Object.assign({}, origin[key], value);
    }
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
        /**
         * @description 常规图表
         * @example Line Bar Column 等单图层图表
         */
        if (options[key]) {
          const transformValue = getValue(transformObject[key], options[key], transformOption);
          updateOptions(transformOption, specKey, transformValue);
          deleteKeys.push(key);
        }
        /**
         * @description 特殊图表
         * @example DualAxes 等多图层图表
         */
        if (child[key]) {
          const transformValue = getValue(transformObject[key], child[key], transformOption);
          updateOptions(transformOption, specKey, transformValue);
          delete child[key];
        }
      });
    });
  });

  /**
   * @description
   *  1. 将 CHILDREN_SHAPE 中的配置项, 转换为 children
   *  2. 删除已移入到 children 内的 key
   * @example 详见 src/core/constants/index.ts
   */
  Object.keys(options).forEach((key) => {
    if (CHILDREN_SHAPE.includes(key)) {
      children.push(...options[key]);
      deleteKeys.push(key);
    }
    if (deleteKeys.includes(key)) {
      delete options[key];
    }
  });
  return params;
};
