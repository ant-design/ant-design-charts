import type { ReplacePrefix } from '../types';
/**
 * <zh/> 是否以某个前缀开头
 *
 * <en/> Whether starts with prefix
 * @param str - <zh/> 字符串 | <en/> string
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @returns <zh/> 是否以某个前缀开头 | <en/> whether starts with prefix
 */
export declare function startsWith(str: string, prefix: string): boolean;
/**
 * <zh/> 添加前缀
 *
 * <en/> Add prefix
 * @param str - <zh/> 字符串 | <en/> string
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @returns <zh/> 添加前缀后的字符串 | <en/> string with prefix
 */
export declare function addPrefix(str: string, prefix: string): string;
/**
 * <zh/> 移除前缀
 *
 * <en/> Remove prefix
 * @param string - <zh/> 字符串 | <en/> string
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @param lowercaseFirstLetter - <zh/> 是否小写首字母 | <en/> whether lowercase first letter
 * @returns <zh/> 移除前缀后的字符串 | <en/> string without prefix
 */
export declare function removePrefix(string: string, prefix?: string, lowercaseFirstLetter?: boolean): string;
/**
 * <zh/> 从样式中提取子样式
 *
 * <en/> Extract sub style from style
 * @param style - <zh/> 样式 | <en/> style
 * @param prefix - <zh/> 子样式前缀 | <en/> sub style prefix
 * @returns <zh/> 子样式 | <en/> sub style
 */
export declare function subStyleProps<T extends Record<string, any>>(style: object, prefix: string): T;
/**
 * <zh/> 从对象中提取指定前缀的属性，并移除前缀
 *
 * <en/> Extract properties with the specified prefix from the object and remove the prefix
 * @param obj - <zh/> 对象 | <en/> object
 * @param prefix - <zh/> 前缀 | <en/> prefix
 * @returns <zh/> 新对象 | <en/> new object
 */
export declare function subObject(obj: Record<string, any>, prefix: string): Record<string, any>;
/**
 * <zh/> 从样式中排除子样式
 *
 * <en/> Omit sub style from style
 * @param style - <zh/> 样式 | <en/> style
 * @param prefix - <zh/> 子样式前缀 | <en/> sub style prefix
 * @returns <zh/> 排除子样式后的样式 | <en/> style without sub style
 */
export declare function omitStyleProps<T extends Record<string, any>>(style: Record<string, any>, prefix: string | string[]): T;
/**
 * <zh/> 替换前缀
 *
 * <en/> Replace prefix
 * @param style - <zh/> 样式 | <en/> style
 * @param oldPrefix - <zh/> 旧前缀 | <en/> old prefix
 * @param newPrefix - <zh/> 新前缀 | <en/> new prefix
 * @returns <zh/> 替换前缀后的样式 | <en/> style with replaced prefix
 */
export declare function replacePrefix<T extends object>(style: T, oldPrefix: string, newPrefix: string): ReplacePrefix<T, string, string>;
