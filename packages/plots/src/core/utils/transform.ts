import { SPECIAL_OPTIONS, TRANSFORM_OPTION_KEY, CONFIG_SHAPE } from '../constants';
import {
  omit,
  pick,
  isFunction,
  getShapeConfigKeys,
  isArray,
  deleteCustomKeys,
  filterTransformed,
  deepAssign,
} from './index';

import type { Adaptor, Options } from '../types';

/**
 * @title 将自定义配置转换为 G2 接受的格式
 */
export const transformOptions = (params: Adaptor) => {
  const options = filterTransformed(params);
  const { children = [] } = options;

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
      origin[key] = deepAssign({}, origin[key], value);
    }
  };

  /**
   * @description
   *  1. 将 CONFIG_SHAPE 中的配置项, 转换为 children
   * @example 详见 src/core/constants/index.ts
   */
  const transformShape = <T = Options>(config: T) => {
    Object.keys(config).forEach((key) => {
      const exist = CONFIG_SHAPE.find((item) => item.key === key);
      if (exist) {
        const { type, extend_keys } = exist;
        if (type) {
          children.push(transformConfig(deepAssign({}, pick(config, extend_keys), { type }, config[key])));
        } else {
          // annotations
          if (isArray(config[key])) {
            config[key].forEach((annotation) => {
              children.push(transformConfig(annotation));
            });
          }
        }
      }
    });
  };

  /**
   * @title 通用转换逻辑
   * @description 直接修改原对象
   */
  const transformConfig = <T = Options>(
    config: T,
    callback?: (transformObject: object, specKey: string, key: string) => void,
  ): T => {
    transformShape(config);
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
     * 提前先 child 创造一个 config 防止 rest 被污染 和 child 数据缺失
     * @description 外层配置应用到所有 children
     */
    const config = deepAssign({}, rest, child);
    transformConfig(deepAssign(child, config));
  });

  transformShape(options);

  deleteCustomKeys(options);

  return params;
};
