import type { NamePath } from 'antd/lib/form/interface';
import dayjs from 'dayjs';
import type { ProFieldValueType } from '../typing';
type DateFormatter = (string & {}) | 'number' | 'string' | ((value: dayjs.Dayjs, valueType: string) => string | number) | false;
export declare const dateFormatterMap: {
    time: string;
    timeRange: string;
    date: string;
    dateWeek: string;
    dateMonth: string;
    dateQuarter: string;
    dateYear: string;
    dateRange: string;
    dateTime: string;
    dateTimeRange: string;
};
/**
 * 判断是否是一个的简单的 object
 * @param  {{constructor:any}} o
 * @returns boolean
 */
export declare function isPlainObject(o: {
    constructor: any;
}): boolean;
/**
 * 根据不同的格式转化 dayjs
 * @param  {dayjs.Dayjs} value
 * @param  {string|((value:dayjs.Dayjs} dateFormatter
 * @param  {string} valueType
 */
export declare const convertMoment: (value: dayjs.Dayjs, dateFormatter: DateFormatter, valueType: string) => string | number | dayjs.Dayjs;
/**
 * 这里主要是来转化一下数据 将 dayjs 转化为 string 将 all 默认删除
 * @param  {T} value
 * @param  {DateFormatter} dateFormatter
 * @param  {Record<string} valueTypeMap
 * @param  {ProFieldValueType;dateFormat:string;}|any>} |{valueType
 * @param  {boolean} omitNil?
 * @param  {NamePath} parentKey?
 */
export declare const conversionMomentValue: <T extends {} = any>(value: T, dateFormatter: DateFormatter, valueTypeMap: Record<string, {
    valueType: ProFieldValueType;
    dateFormat: string;
} | any>, omitNil?: boolean, parentKey?: NamePath) => T;
export {};
