import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { isNil } from "../isNil";
dayjs.extend(customParseFormat);
/**
 * 一个比较hack的moment判断工具
 * @param value
 * @returns
 */
var isMoment = function isMoment(value) {
  return !!(value !== null && value !== void 0 && value._isAMomentObject);
};
export var parseValueToDay = function parseValueToDay(value, formatter) {
  if (isNil(value) || dayjs.isDayjs(value) || isMoment(value)) {
    if (isMoment(value)) {
      return dayjs(value);
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(function (v) {
      return parseValueToDay(v, formatter);
    });
  }
  if (typeof value === 'number') return dayjs(value);
  return dayjs(value, formatter);
};