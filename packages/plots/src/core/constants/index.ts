import { isBoolean } from '../utils';
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
  },
  transform: {
    /**
     * @title 是否堆叠
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
      const { available = true } = value;
      if (available) {
        origin[key].push(value);
      } else {
        origin[key].splice(
          origin[key].indexOf((item) => item.type === value.type),
          1,
        );
      }
    },
  },
];
