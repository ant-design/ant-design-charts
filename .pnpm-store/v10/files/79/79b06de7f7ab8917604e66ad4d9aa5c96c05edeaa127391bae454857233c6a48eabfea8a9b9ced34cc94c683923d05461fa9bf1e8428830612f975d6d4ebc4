"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utcIntervalMap = exports.utcYear = exports.utcWeek = exports.utcMonth = exports.utcDay = exports.utcHour = exports.utcMinute = exports.utcSecond = exports.utcMillisecond = void 0;
const time_interval_1 = require("./time-interval");
exports.utcMillisecond = (0, time_interval_1.createInterval)(1, (date) => date, (date, step = 1) => {
    date.setTime(+date + step);
}, (date) => date.getTime());
exports.utcSecond = (0, time_interval_1.createInterval)(time_interval_1.DURATION_SECOND, (date) => {
    date.setUTCMilliseconds(0);
}, (date, step = 1) => {
    date.setTime(+date + time_interval_1.DURATION_SECOND * step);
}, (date) => date.getUTCSeconds());
exports.utcMinute = (0, time_interval_1.createInterval)(time_interval_1.DURATION_MINUTE, (date) => {
    date.setUTCSeconds(0, 0);
}, (date, step = 1) => {
    date.setTime(+date + time_interval_1.DURATION_MINUTE * step);
}, (date) => date.getUTCMinutes());
exports.utcHour = (0, time_interval_1.createInterval)(time_interval_1.DURATION_HOUR, (date) => {
    date.setUTCMinutes(0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + time_interval_1.DURATION_HOUR * step);
}, (date) => date.getUTCHours());
exports.utcDay = (0, time_interval_1.createInterval)(time_interval_1.DURATION_DAY, (date) => {
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + time_interval_1.DURATION_DAY * step);
}, (date) => date.getUTCDate() - 1);
exports.utcMonth = (0, time_interval_1.createInterval)(time_interval_1.DURATION_MONTH, (date) => {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const month = date.getUTCMonth();
    date.setUTCMonth(month + step);
}, (date) => date.getUTCMonth());
exports.utcWeek = (0, time_interval_1.createInterval)(time_interval_1.DURATION_WEEK, (date) => {
    date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 7) % 7));
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + time_interval_1.DURATION_WEEK * step);
}, (date) => {
    const start = exports.utcMonth.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / time_interval_1.DURATION_WEEK);
});
exports.utcYear = (0, time_interval_1.createInterval)(time_interval_1.DURATION_YEAR, (date) => {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const year = date.getUTCFullYear();
    date.setUTCFullYear(year + step);
}, (date) => date.getUTCFullYear());
exports.utcIntervalMap = {
    millisecond: exports.utcMillisecond,
    second: exports.utcSecond,
    minute: exports.utcMinute,
    hour: exports.utcHour,
    day: exports.utcDay,
    week: exports.utcWeek,
    month: exports.utcMonth,
    year: exports.utcYear,
};
//# sourceMappingURL=utc-interval.js.map