/**
 * 下划线转驼峰命名
 */
export const camelCase = (name: string) => name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (_, n) => n.toUpperCase());

/**
 * 获取对象差异
 * @param {source} object 原始对象
 * @param {target} object 目标对象
 */
export const checkChanged = (source: object, target: object) => JSON.stringify(source) === JSON.stringify(target);

/**
 * 判断两数组是否完全相同
 * @param {source} [] 原数组
 * @param {target} [] 目标数组
 */
export const sameArray = (source: any[], target: any[]): boolean => new Set(source.concat(target)).size === source.length;
