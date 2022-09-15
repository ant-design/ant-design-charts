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
  } else if (source instanceof HTMLElement) {
    target = source;
  } else {
    target = {};
    Object.keys(source).forEach((key) => {
      return (target[key] = deepClone(source[key]));
    });
  }

  return target;
};
