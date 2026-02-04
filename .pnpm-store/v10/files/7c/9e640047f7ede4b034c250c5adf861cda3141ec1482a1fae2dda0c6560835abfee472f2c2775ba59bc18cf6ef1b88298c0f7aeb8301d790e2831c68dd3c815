import type { SearchTransformKeyFn } from '../typing';
export type DataFormatMapType = Record<string, SearchTransformKeyFn | undefined>;
/**
 * 暂时还不支持 Set和 Map 结构 判断是不是一个能遍历的对象
 *
 * @param itemValue
 * @returns Boolean
 */
export declare function isPlainObj(itemValue: any): boolean;
export declare const transformKeySubmitValue: <T extends object = any>(values: T, dataFormatMapRaw: Record<string, SearchTransformKeyFn | undefined | DataFormatMapType>, omit?: boolean) => T;
