import _typeof from "@babel/runtime/helpers/esm/typeof";
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import get from "rc-util/es/utils/get";
import { isNil } from "../isNil";
dayjs.extend(quarterOfYear);
export var dateFormatterMap = {
  time: 'HH:mm:ss',
  timeRange: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateWeek: 'YYYY-wo',
  dateMonth: 'YYYY-MM',
  dateQuarter: 'YYYY-[Q]Q',
  dateYear: 'YYYY',
  dateRange: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateTimeRange: 'YYYY-MM-DD HH:mm:ss'
};
/**
 * 判断是不是一个 object
 * @param  {any} o
 * @returns boolean
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}
/**
 * 判断是否是一个的简单的 object
 * @param  {{constructor:any}} o
 * @returns boolean
 */
export function isPlainObject(o) {
  if (isObject(o) === false) return false;

  // If has modified constructor
  var ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  var prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

/**
 *  一个比较hack的moment判断工具
 * @param  {any} value
 * @returns boolean
 */
var isMoment = function isMoment(value) {
  return !!(value !== null && value !== void 0 && value._isAMomentObject);
};

/**
 * 根据不同的格式转化 dayjs
 * @param  {dayjs.Dayjs} value
 * @param  {string|((value:dayjs.Dayjs} dateFormatter
 * @param  {string} valueType
 */
export var convertMoment = function convertMoment(value, dateFormatter, valueType) {
  if (!dateFormatter) {
    return value;
  }
  if (dayjs.isDayjs(value) || isMoment(value)) {
    if (dateFormatter === 'number') {
      return value.valueOf();
    }
    if (dateFormatter === 'string') {
      return value.format(dateFormatterMap[valueType] || 'YYYY-MM-DD HH:mm:ss');
    }
    if (typeof dateFormatter === 'string' && dateFormatter !== 'string') {
      return value.format(dateFormatter);
    }
    if (typeof dateFormatter === 'function') {
      return dateFormatter(value, valueType);
    }
  }
  return value;
};

/**
 * 这里主要是来转化一下数据 将 dayjs 转化为 string 将 all 默认删除
 * @param  {T} value
 * @param  {DateFormatter} dateFormatter
 * @param  {Record<string} valueTypeMap
 * @param  {ProFieldValueType;dateFormat:string;}|any>} |{valueType
 * @param  {boolean} omitNil?
 * @param  {NamePath} parentKey?
 */
export var conversionMomentValue = function conversionMomentValue(value, dateFormatter, valueTypeMap, omitNil, parentKey) {
  var tmpValue = {};
  if (typeof window === 'undefined') return value;
  // 如果 value 是 string | null | Blob类型 其中之一，直接返回
  // 形如 {key: [File, File]} 的表单字段当进行第二次递归时会导致其直接越过 typeof value !== 'object' 这一判断 https://github.com/ant-design/pro-components/issues/2071
  if (_typeof(value) !== 'object' || isNil(value) || value instanceof Blob || Array.isArray(value)) {
    return value;
  }
  Object.keys(value).forEach(function (valueKey) {
    var namePath = parentKey ? [parentKey, valueKey].flat(1) : [valueKey];
    var valueFormatMap = get(valueTypeMap, namePath) || 'text';
    var valueType = 'text';
    var dateFormat;
    if (typeof valueFormatMap === 'string') {
      valueType = valueFormatMap;
    } else if (valueFormatMap) {
      valueType = valueFormatMap.valueType;
      dateFormat = valueFormatMap.dateFormat;
    }
    var itemValue = value[valueKey];
    if (isNil(itemValue) && omitNil) {
      return;
    }
    // 处理嵌套的情况
    if (isPlainObject(itemValue) &&
    // 不是数组
    !Array.isArray(itemValue) &&
    // 不是 dayjs
    !dayjs.isDayjs(itemValue) &&
    // 不是 moment
    !isMoment(itemValue)) {
      tmpValue[valueKey] = conversionMomentValue(itemValue, dateFormatter, valueTypeMap, omitNil, namePath);
      return;
    }
    // 处理 FormList 的 value
    if (Array.isArray(itemValue)) {
      tmpValue[valueKey] = itemValue.map(function (arrayValue, index) {
        if (dayjs.isDayjs(arrayValue) || isMoment(arrayValue)) {
          return convertMoment(arrayValue, dateFormat || dateFormatter, valueType);
        }
        return conversionMomentValue(arrayValue, dateFormatter, valueTypeMap, omitNil, [valueKey, "".concat(index)].flat(1));
      });
      return;
    }
    tmpValue[valueKey] = convertMoment(itemValue, dateFormat || dateFormatter, valueType);
  });
  return tmpValue;
};