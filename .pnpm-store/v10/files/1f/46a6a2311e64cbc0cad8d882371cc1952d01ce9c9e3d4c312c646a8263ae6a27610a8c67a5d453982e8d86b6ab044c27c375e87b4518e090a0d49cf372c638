import { isPlainObject, isArray } from '@antv/util';

const MAX_MIX_LEVEL = 5;

const deep = (
  dist: { [key: string]: any },
  src: { [key: string]: any },
  level: number = 0,
  maxLevel: number = MAX_MIX_LEVEL
) => {
  Object.entries(src).forEach(([key, value]: [string, any]) => {
    const res = dist;
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      if (!value) {
        // null 、 undefined 等情况直接赋值
        res[key] = value;
      } else if (isPlainObject(value)) {
        if (!isPlainObject(dist[key])) {
          res[key] = {};
        }
        if (level < maxLevel) {
          deep(dist[key], value, level + 1, maxLevel);
        } else {
          // 层级过深直接赋值，性能问题
          res[key] = src[key];
        }
      } else if (isArray(value)) {
        res[key] = [];
        res[key] = res[key].concat(value);
      } else {
        res[key] = value;
      }
    }
  });
};

export const deepAssign = (rst: any, ...args: object[]) => {
  for (let i = 0; i < args.length; i += 1) {
    deep(rst, args[i]);
  }
  return rst;
};
