import { isBoolean } from '../utils';

/** new Chart options */
export const CHART_OPTIONS = ['width', 'height', 'renderer', 'autoFit', 'canvas', 'theme'];

/**
 * @title 字段转换逻辑
 * @example
 *    1. xField: 'year' -> encode: {x: 'year'}
 *    2. yField: 'scales' -> encode: {y: 'scales'}
 *    3. shape: 'smooth' -> style: {shape: 'smooth'} shapeField: 'shape' -> encode: { shape: 'shape' }
 *    4. connectNulls: {connect: true} -> style: {connect: true}
 *    5. keyField: 'key' -> encode: { key: 'key' }
 */
const commonCallback = (type: string, value: boolean | object) => {
  if (isBoolean(value)) {
    return {
      type,
      available: value,
    };
  }
  return { type, ...(value as object) };
};
export const TRANSFORM_OPTION_KEY = {
  encode: {
    xField: 'x',
    yField: 'y',
    colorField: 'color',
    angleField: 'y',
    keyField: 'key',
    sizeField: 'size',
    shapeField: 'shape',
    seriesField: 'series',
    positionField: 'position',
  },
  transform: {
    /**
     * @title 堆叠
     * @example
     *  1. stack: true -> transform: [{type: 'stackY'}]
     */
    stack: (value: boolean | object) => {
      return commonCallback('stackY', value);
    },
    /**
     * @title 归一化
     * @example
     *  1. normalize: true -> transform: [{type: 'normalizeY'}]
     */
    normalize: (value: boolean | object) => {
      return commonCallback('normalizeY', value);
    },
    /**
     * @title 分组
     * @example
     *  1. group: true -> transform: [{type: 'dodgeX'}]
     */
    group: (value: boolean | object) => {
      return commonCallback('dodgeX', value);
    },
    /**
     * @title 排序
     * @example
     *  1. sort: true -> transform: [{type: 'sortX'}]
     */
    sort: (value: boolean | object) => {
      return commonCallback('sortX', value);
    },
    /**
     * @title 对称
     * @example
     *  1. symmetry: true -> transform: [{type: 'symmetryY'}]
     */
    symmetry: (value: boolean | object) => {
      return commonCallback('symmetryY', value);
    },
    /**
     * @title 对 y 和 y1 通道求差集
     * @example
     *  1. diff: true -> transform: [{type: 'diffY'}]
     */
    diff: (value: boolean | object) => {
      return commonCallback('diffY', value);
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
 * @title 将 CONFIG_SHAPE 中的配置项, 转换为 children
 * @example
 *    1. annotations: [{type: 'text'}] -> children: [{type: 'text'}]
 *    2. lineConfig: {shape: 'hvh'}-> children: [{type: 'line', style: { shape: 'hvh'}}]
 */
const EXTEND_KEYS = ['xField', 'yField', 'seriesField', 'colorField', 'sizeField', 'shapeField', 'keyField', 'positionField'];
export const CONFIG_SHAPE = [
  {
    key: 'annotations',
    extend_keys: [],
  },
  {
    key: 'lineConfig',
    type: 'line',
    extend_keys: EXTEND_KEYS,
  },
  {
    key: 'pointConfig',
    type: 'point',
    extend_keys: EXTEND_KEYS,
  },
  {
    key: 'areaConfig',
    type: 'area',
    extend_keys: EXTEND_KEYS,
  },
  {
    key: 'intervalConfig',
    type: 'interval',
    extend_keys: EXTEND_KEYS,
  },
  {
    key: 'polygonConfig',
    type: 'polygon',
    extend_keys: EXTEND_KEYS,
  },
];

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
