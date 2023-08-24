import { COORDIANTE_OPTIONS } from '../components';
import { SPECIAL_OPTIONS, TRANSFORM_OPTION_KEY, CONFIG_SHAPE } from '../constants';
import { getCustomKeys, omit, pick, isFunction, getShapeConfigKeys, isArray } from './index';

import type { Adaptor, Options } from '../types';

/**
 * @title 将自定义配置转换为 G2 接受的格式
 */
export const transformOptions = (params: Adaptor) => {
  const { options } = params;
  const { children = [] } = options;

  const deleteKeys = getCustomKeys();

  const getRest = (o: Adaptor['options']) => {
    const { children, type, data, ...rest } = o;
    return omit(rest, getShapeConfigKeys());
  };

  const rest = getRest(options);

  const getValue = (newConfig: string | Function, value: unknown, origin: Options) => {
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

  /**
   * @title 通用转换逻辑
   * @description 直接修改原对象
   */
  const transformConfig = <T = Options>(
    config: T,
    callback?: (transformObject: object, specKey: string, key: string) => void,
  ): T => {
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
        if (config[key]) {
          const transformValue = getValue(transformObject[key], config[key], config);
          updateOptions(config, specKey, transformValue);
        }
        if (isFunction(callback)) callback(transformObject, specKey, key);
      });
    });
    return config;
  };

  children.forEach((child) => {
    /**
     * @description 外层配置应用到所有 children
     */
    const copyChild = { ...child };
    const transformOption = Object.assign(child, rest);

    const transformChildrenConfig = (transformObject: object, specKey: string, key: string) => {
      /**
       * @description 特殊图表
       * @example DualAxes 等多图层图表
       */
      if (copyChild[key]) {
        const transformValue = getValue(transformObject[key], child[key], transformOption);
        updateOptions(transformOption, specKey, transformValue);
      }
    };

    transformConfig(transformOption, transformChildrenConfig);
  });

  /**
   * @description
   *  1. 将 CONFIG_SHAPE 中的配置项, 转换为 children
   * @example 详见 src/core/constants/index.ts
   */
  Object.keys(options).forEach((key) => {
    const exist = CONFIG_SHAPE.find((item) => item.key === key);
    if (exist) {
      const { type, extend_keys } = exist;
      if (type) {
        children.push(transformConfig(Object.assign({}, pick(options, extend_keys), { type }, options[key])));
      } else {
        // annotations
        if (isArray(options[key])) {
          options[key].forEach((annotation) => {
            children.push(transformConfig(annotation));
          });
        }
      }
    }
  });

  /**
   * 统一删除已转换的配置项
   */
  const deleteCustomKeys = () => {
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
  };

  deleteCustomKeys();

  return params;
};
