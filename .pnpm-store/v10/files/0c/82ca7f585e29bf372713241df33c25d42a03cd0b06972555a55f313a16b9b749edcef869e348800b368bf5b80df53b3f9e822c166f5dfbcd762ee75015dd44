"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = parseDate;
exports.getMask = getMask;
exports.formatTime = formatTime;
exports.getTimeDiff = getTimeDiff;
exports.getTimeScale = getTimeScale;
exports.getTimeStart = getTimeStart;
var tslib_1 = require("tslib");
var scale = ['year', 'month', 'day', 'hour', 'minute', 'second'];
var masks = ['YYYY', 'MM', 'DD', 'hh', 'mm', 'ss'];
function parseDate(date) {
    return date instanceof Date ? date : new Date(date);
}
/**
 * 生成时间格式化
 * @param maxUnit 最大时间单位
 * @param minUnit 最小时间单位
 */
function getMask(_a) {
    var _b = tslib_1.__read(_a, 2), maxUnit = _b[0], minUnit = _b[1];
    var startIndex = scale.indexOf(maxUnit);
    var endIndex = scale.indexOf(minUnit);
    var format = '';
    for (var i = startIndex; i <= endIndex; i += 1) {
        format += masks[i];
        if (i < endIndex) {
            var connect = '-';
            if (i === 2)
                connect = ' ';
            else if (i > 2)
                connect = ':';
            format += connect;
        }
    }
    return format;
}
/**
 * 格式化时间
 */
function formatTime(date, mask) {
    var timeMap = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
    };
    var strftime = mask;
    Object.keys(timeMap).forEach(function (key) {
        var val = timeMap[key];
        strftime = strftime.replace(key, key === 'YYYY' ? "".concat(val) : "".concat(val).padStart(2, '0'));
    });
    return strftime;
}
/**
 * 获取两个时间的差值，单位毫秒
 */
function getTimeDiff(a, b) {
    return parseDate(a).getTime() - parseDate(b).getTime();
}
/**
 * 获取时间跨度
 */
function getTimeScale(a, b) {
    var _a = tslib_1.__read([parseDate(a), parseDate(b)], 2), ma = _a[0], mb = _a[1];
    if (ma.getFullYear() !== mb.getFullYear())
        return 'year';
    if (ma.getMonth() !== mb.getMonth())
        return 'month';
    if (ma.getDay() !== mb.getDay())
        return 'day';
    if (ma.getHours() !== mb.getHours())
        return 'hour';
    if (ma.getMinutes() !== mb.getMinutes())
        return 'minute';
    return 'second';
}
/**
 * 获取给定时间的开始时间
 */
function getTimeStart(date, scale) {
    var result = new Date(date);
    var timeMap = {
        year: function (d) {
            d.setMonth(0);
            d.setHours(0, 0, 0, 0);
        },
        month: function (d) {
            d.setDate(1);
            d.setHours(0, 0, 0, 0);
        },
        day: function (d) { return d.setHours(0, 0, 0, 0); },
        hour: function (d) { return d.setMinutes(0, 0, 0); },
        minute: function (d) { return d.setSeconds(0, 0); },
        second: function (d) { return d.setMilliseconds(0); },
    };
    timeMap[scale](result);
    return formatTime(result, getMask(['year', scale]));
}
//# sourceMappingURL=time.js.map