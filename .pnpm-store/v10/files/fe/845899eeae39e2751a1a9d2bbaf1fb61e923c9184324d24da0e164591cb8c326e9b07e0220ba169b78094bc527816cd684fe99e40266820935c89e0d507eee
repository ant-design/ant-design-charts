"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelFormatter = labelFormatter;
exports.parseByTime = parseByTime;
exports.parseBySeries = parseBySeries;
var time_1 = require("../../util/time");
function labelFormatter(time, interval) {
    if (typeof time === 'number') {
        return parseBySeries(time);
    }
    return parseByTime(time, interval);
}
function parseByTime(time, interval) {
    var date = new Date(time);
    switch (interval) {
        case 'half-hour':
        case 'hour':
        case 'four-hour':
            if ([0, 6, 12, 18].includes(date.getHours()) && date.getMinutes() === 0) {
                // HH:mm\nYYYY-MM-DD
                return (0, time_1.formatTime)(date, 'HH:mm\nYYYY-MM-DD');
            }
            // HH:mm
            return (0, time_1.formatTime)(date, 'HH:mm');
        case 'half-day':
            // A\nYYYY-MM-DD
            if (date.getHours() < 12) {
                return "AM\n".concat((0, time_1.formatTime)(date, 'YYYY-MM-DD'));
            }
            // A
            return 'PM';
        case 'day':
            if ([1, 10, 20].includes(date.getDate())) {
                // DD\nYYYY-MM
                return (0, time_1.formatTime)(date, 'DD\nYYYY-MM');
            }
            // DD
            return (0, time_1.formatTime)(date, 'DD');
        case 'week':
            if (date.getDate() <= 7) {
                // DD\nYYYY-MM
                return (0, time_1.formatTime)(date, 'DD\nYYYY-MM');
            }
            // DD
            return (0, time_1.formatTime)(date, 'DD');
        case 'month':
            if ([0, 6].includes(date.getMonth())) {
                // MM月\nYYYY
                return (0, time_1.formatTime)(date, 'MM月\nYYYY');
            }
            // MM月
            return (0, time_1.formatTime)(date, 'MM月');
        case 'season':
            if ([0].includes(date.getMonth())) {
                // MM月\nYYYY
                return (0, time_1.formatTime)(date, 'MM月\nYYYY');
            }
            // MM月
            return (0, time_1.formatTime)(date, 'MM月');
        case 'year':
            // YYYY
            return (0, time_1.formatTime)(date, 'YYYY');
        default:
            // YYYY-MM-DD HH:mm
            return (0, time_1.formatTime)(date, 'YYYY-MM-DD HH:mm');
    }
}
/**
 * 按照序列数据解析，如第 1, 2, 3 秒
 * @param time
 * @param interval
 */
function parseBySeries(time) {
    var hours = String(Math.floor(time / 3600)).padStart(2, '0');
    var minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    var seconds = String(Math.floor(time % 60)).padStart(2, '0');
    if (time < 3600) {
        // mm:ss
        return "".concat(minutes, ":").concat(seconds);
    }
    return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
//# sourceMappingURL=utils.js.map