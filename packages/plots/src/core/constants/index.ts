import { isBoolean } from '../utils';

/** new Chart options */
export const CHART_OPTIONS = ['width', 'height', 'renderer', 'autoFit', 'canvas', 'theme'];

/**
 * @title 字段转换逻辑
 * @example
 *    1. xField: 'year' -> encode: {x: 'year'}
 *    2. yField: 'scales' -> encode: {y: 'scales'}
 *    3. shape: 'smooth' -> style: {shape: 'smooth'}
 *    4. connectNulls: {connect: true} -> style: {connect: true}
 */
export const TRANSFORM_OPTION_KEY = {
  encode: {
    xField: 'x',
    yField: 'y',
    colorField: 'color',
    angleField: 'y',
    sizeField: 'size',
    seriesField: 'series',
  },
  transform: {
    /**
     * @title 堆叠
     * @example
     *  1. stack: true -> transform: [{type: 'stackY'}]
     */
    stack: (value: boolean | object) => {
      if (isBoolean(value)) {
        return {
          type: 'stackY',
          available: value,
        };
      }
      return { type: 'stackY', ...(value as object) };
    },
    /**
     * @title 归一化
     * @example
     *  1. normalize: true -> transform: [{type: 'normalizeY'}]
     */
    normalize: (value: boolean | object) => {
      if (isBoolean(value)) {
        return {
          type: 'normalizeY',
          available: value,
        };
      }
      return { type: 'normalizeY', ...(value as object) };
    },
    /**
     * @title 分组
     * @example
     *  1. group: true -> transform: [{type: 'dodgeX'}]
     */
    group: (value: boolean | object) => {
      if (isBoolean(value)) {
        return {
          type: 'dodgeX',
          available: value,
        };
      }
      return { type: 'dodgeX', ...(value as object) };
    },
    /**
     * @title 排序
     * @example
     *  1. sort: true -> transform: [{type: 'sortX'}]
     */
    sort: (value: boolean | object) => {
      if (isBoolean(value)) {
        return {
          type: 'sortX',
          available: value,
        };
      }
      return { type: 'sortX', ...(value as object) };
    },
  },
  scale: {
    meta: (value: object) => {
      return value;
    },
  },
  labels: {
    label: (value: object) => {
      return value;
    },
  },
  style: {
    /**
     * @title 折线的形状
     * @example
     *  1. shape: 'smooth' -> style: {shape: 'smooth'}
     */
    shape: 'shape',
    /**
     * @title 是否链接空值
     * @description 支持 boolean 和 对象类型
     */
    connectNulls: (value: boolean | object) => {
      if (isBoolean(value)) {
        return {
          connect: value,
        };
      }
      return value;
    },
  },
};

/**
 * @title 将 CHILDREN_SHAPE 中的配置项, 转换为 children
 * @example
 *    1. annotations: [{type: 'text'}] -> children: [{type: 'text'}]
 */
export const CHILDREN_SHAPE = ['annotations'];

/**
 * @description 一些特殊的配置项，需要自定义转换逻辑
 */
export const SPECIAL_OPTIONS = [
  {
    key: 'transform',
    callback: (origin: object, key: string, value: { type: string; available?: boolean }) => {
      origin[key] = origin[key] || [];
      const { available = true, ...rest } = value;
      if (available) {
        origin[key].push(rest);
      } else {
        origin[key].splice(
          origin[key].indexOf((item) => item.type === value.type),
          1,
        );
      }
    },
  },
  {
    key: 'labels',
    callback: (origin: object, key: string, value: { type: string; available?: boolean }) => {
      origin[key] = origin[key] || [];
      origin[key].push(value);
    },
  },
];
