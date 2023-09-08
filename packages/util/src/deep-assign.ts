const isArray = (obj: any) => Array.isArray(obj);

const isObject = (obj: any) => {
  return obj !== null && typeof obj === 'object' && !isArray(obj);
};

/**
 * @title 深度合并
 * @param {object} target 目标对象
 * @param {object} sources 源对象
 * @description 深度合并对象，用于合并配置，数组类型目前只支持覆盖
 */
export const deepAssign = (target: object, ...sources) => {
  if (!sources.length) return target;

  const source = sources.shift();

  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        if (!target[key] || typeof target[key] !== 'object') {
          target[key] = {};
        }
        deepAssign(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return deepAssign(target, ...sources);
};
