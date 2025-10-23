declare const scale: readonly ["year", "month", "day", "hour", "minute", "second"];
type TimeScale = (typeof scale)[number];
export declare function parseDate(date: Date | string): Date;
/**
 * 生成时间格式化
 * @param maxUnit 最大时间单位
 * @param minUnit 最小时间单位
 */
export declare function getMask([maxUnit, minUnit]: [TimeScale, TimeScale]): string;
/**
 * 格式化时间
 */
export declare function formatTime(date: Date, mask: string): string;
/**
 * 获取两个时间的差值，单位毫秒
 */
export declare function getTimeDiff(a: Date | string, b: Date | string): number;
/**
 * 获取时间跨度
 */
export declare function getTimeScale(a: Date | string, b: Date | string): TimeScale;
/**
 * 获取给定时间的开始时间
 */
export declare function getTimeStart(date: Date, scale: TimeScale): string;
export {};
