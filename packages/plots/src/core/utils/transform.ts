import { CONFIG_SHAPE, SPECIAL_OPTIONS, TRANSFORM_OPTION_KEY, VIEW_OPTIONS } from '../constants';
import {
  deleteExcessKeys,
  filterTransformed,
  isArray,
  isObject,
  isUndefined,
  mergeWithArrayCoverage,
  omit,
  pick,
  set,
} from './index';

import type { Adaptor, Options } from '../types';

/**
 * @title 将自定义配置转换为 G2 接受的格式
 */
export const transformOptions = (params: Adaptor) => {
  const options = filterTransformed(params);
  const { children = [] } = options;

  const rest = omit(
    options,
    [].concat(
      VIEW_OPTIONS,
      CONFIG_SHAPE.map((item) => item.key),
    ),
  );

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
      origin[key] = mergeWithArrayCoverage({}, origin[key], value);
    }
  };

  /**
   * @description
   *  1. 将 CONFIG_SHAPE 中的配置项, 转换为 children
   * @example 详见 src/core/constants/index.ts
   */
  const transformShape = <T = Options>(config: T) => {
    Object.keys(config).forEach((key) => {
      // 判断内容是否为空
      if (!config[key]) return;
      const exist = CONFIG_SHAPE.find((item) => item.key === key);
      if (exist) {
        const { type, extend_keys, default_cfg = {} } = exist;
        if (type) {
          const { tooltip } = config[key];
          children.push(
            transformConfig(
              mergeWithArrayCoverage({}, pick(config, extend_keys), default_cfg, { type }, config[key], {
                tooltip: tooltip ? tooltip : false,
              }),
            ),
          );
        } else {
          // annotations
          if (isArray(config[key])) {
            config[key].forEach((annotation) => {
              children.push(transformConfig({
                data: [],
                tooltip: false,
                ...annotation
              }));
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
  const transformConfig = <T = Options>(config: T): T => {
    transformShape(config);
    /**
     * @description 遍历配置项，如果存在对应的映射规则，则进行转换
     * @example 详见 src/core/constants/index.ts
     */
    Object.keys(TRANSFORM_OPTION_KEY).forEach((key) => {
      const transformTarget = TRANSFORM_OPTION_KEY[key];
      if (!isUndefined(config[key])) {
        if (isObject(transformTarget)) {
          const { value, target } = transformTarget;
          const transformValue = value(config[key]);
          updateOptions(config, target, transformValue);
        } else {
          set(config, transformTarget, config[key]);
        }
      }
    });
    return config;
  };

  children.forEach((child) => {
    /**
     * 提前先 child 创造一个 config 防止 rest 被污染 和 child 数据缺失
     * @description 外层配置应用到所有 children
     */
    const config = mergeWithArrayCoverage({}, rest, child);
    transformConfig(mergeWithArrayCoverage(child, config));
  });

  transformShape(options);

  deleteExcessKeys(options);

  return params;
};
