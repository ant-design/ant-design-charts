import type { Interval } from './types';
import { formatTime } from '../../util/time';
// TODO 需要根据传入时间、当前时间轴宽度 自动计算出最佳的时间间隔
/**
 * 时间格式化，为 Date 时，按照时间解析，为数字时按照序列解析
 * @param time
 * @param interval 时间间隔
 * @returns
 */
export function labelFormatter(time: number): string;
export function labelFormatter(time: Date, interval: Interval): string;
export function labelFormatter(time: number | Date, interval?: Interval) {
  if (typeof time === 'number') {
    return parseBySeries(time);
  }
  return parseByTime(time, interval!);
}

export function parseByTime(time: Date, interval: Interval) {
  const date = new Date(time);

  switch (interval) {
    case 'half-hour':
    case 'hour':
    case 'four-hour':
      if ([0, 6, 12, 18].includes(date.getHours()) && date.getMinutes() === 0) {
        // HH:mm\nYYYY-MM-DD
        return formatTime(date, 'HH:mm\nYYYY-MM-DD');
      }
      // HH:mm
      return formatTime(date, 'HH:mm');
    case 'half-day':
      // A\nYYYY-MM-DD
      if (date.getHours() < 12) {
        return `AM\n${formatTime(date, 'YYYY-MM-DD')}`;
      }
      // A
      return 'PM';
    case 'day':
      if ([1, 10, 20].includes(date.getDate())) {
        // DD\nYYYY-MM
        return formatTime(date, 'DD\nYYYY-MM');
      }
      // DD
      return formatTime(date, 'DD');
    case 'week':
      if (date.getDate() <= 7) {
        // DD\nYYYY-MM
        return formatTime(date, 'DD\nYYYY-MM');
      }
      // DD
      return formatTime(date, 'DD');
    case 'month':
      if ([0, 6].includes(date.getMonth())) {
        // MM月\nYYYY
        return formatTime(date, 'MM月\nYYYY');
      }
      // MM月
      return formatTime(date, 'MM月');
    case 'season':
      if ([0].includes(date.getMonth())) {
        // MM月\nYYYY
        return formatTime(date, 'MM月\nYYYY');
      }
      // MM月
      return formatTime(date, 'MM月');
    case 'year':
      // YYYY
      return formatTime(date, 'YYYY');
    default:
      // YYYY-MM-DD HH:mm
      return formatTime(date, 'YYYY-MM-DD HH:mm');
  }
}

/**
 * 按照序列数据解析，如第 1, 2, 3 秒
 * @param time
 * @param interval
 */
export function parseBySeries(time: number) {
  const hours = String(Math.floor(time / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
  const seconds = String(Math.floor(time % 60)).padStart(2, '0');
  if (time < 3600) {
    // mm:ss
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}
