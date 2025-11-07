import { createInterval, DURATION_SECOND, DURATION_MINUTE, DURATION_HOUR, DURATION_DAY, DURATION_WEEK, DURATION_MONTH, DURATION_YEAR, } from './time-interval';
export const utcMillisecond = createInterval(1, (date) => date, (date, step = 1) => {
    date.setTime(+date + step);
}, (date) => date.getTime());
export const utcSecond = createInterval(DURATION_SECOND, (date) => {
    date.setUTCMilliseconds(0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_SECOND * step);
}, (date) => date.getUTCSeconds());
export const utcMinute = createInterval(DURATION_MINUTE, (date) => {
    date.setUTCSeconds(0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_MINUTE * step);
}, (date) => date.getUTCMinutes());
export const utcHour = createInterval(DURATION_HOUR, (date) => {
    date.setUTCMinutes(0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_HOUR * step);
}, (date) => date.getUTCHours());
export const utcDay = createInterval(DURATION_DAY, (date) => {
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_DAY * step);
}, (date) => date.getUTCDate() - 1);
export const utcMonth = createInterval(DURATION_MONTH, (date) => {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const month = date.getUTCMonth();
    date.setUTCMonth(month + step);
}, (date) => date.getUTCMonth());
export const utcWeek = createInterval(DURATION_WEEK, (date) => {
    date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 7) % 7));
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + DURATION_WEEK * step);
}, (date) => {
    const start = utcMonth.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / DURATION_WEEK);
});
export const utcYear = createInterval(DURATION_YEAR, (date) => {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const year = date.getUTCFullYear();
    date.setUTCFullYear(year + step);
}, (date) => date.getUTCFullYear());
export const utcIntervalMap = {
    millisecond: utcMillisecond,
    second: utcSecond,
    minute: utcMinute,
    hour: utcHour,
    day: utcDay,
    week: utcWeek,
    month: utcMonth,
    year: utcYear,
};
//# sourceMappingURL=utc-interval.js.map