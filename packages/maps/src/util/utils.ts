// 类型检测
export const isType = (value: any, type: string): boolean => {
  const { toString } = {};
  return toString.call(value) === `[object ${type}]`;
};

export const getType = (n: Object) => {
  return Object.prototype.toString.call(n).slice(8, -1);
};

/**
 * 深克隆
 * @param source 要深克隆的目标对象
 */
export const deepClone = (source: Object | undefined) => {
  if (!source || typeof source !== 'object') {
    return source;
  }

  let target;
  if (Array.isArray(source)) {
    target = source.map((item) => deepClone(item));
  } else {
    target = {};
    Object.keys(source).forEach((key) => {
      return (target[key] = deepClone(source[key]));
    });
  }

  return target;
};

export const clone = (source: Object) => {
  if (!source) {
    return source;
  }
  const target = {};
  // eslint-disable-next-line guard-for-in
  for (const k in source) {
    target[k] = source[k];
  }
  return target;
};
