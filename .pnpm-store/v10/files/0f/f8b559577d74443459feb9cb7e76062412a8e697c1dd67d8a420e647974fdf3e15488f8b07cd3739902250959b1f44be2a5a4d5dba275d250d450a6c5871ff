"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localIntervalMap = exports.year = exports.week = exports.month = exports.day = exports.hour = exports.minute = exports.second = exports.millisecond = exports.createInterval = exports.DURATION_YEAR = exports.DURATION_MONTH = exports.DURATION_WEEK = exports.DURATION_DAY = exports.DURATION_HOUR = exports.DURATION_MINUTE = exports.DURATION_SECOND = void 0;
exports.DURATION_SECOND = 1000;
exports.DURATION_MINUTE = exports.DURATION_SECOND * 60;
exports.DURATION_HOUR = exports.DURATION_MINUTE * 60;
exports.DURATION_DAY = exports.DURATION_HOUR * 24;
exports.DURATION_WEEK = exports.DURATION_DAY * 7;
exports.DURATION_MONTH = exports.DURATION_DAY * 30;
exports.DURATION_YEAR = exports.DURATION_DAY * 365;
function createInterval(duration, floorish, offseti, field) {
    const adjust = (date, step) => {
        const test = (date) => field(date) % step === 0;
        let i = step;
        while (i && !test(date)) {
            offseti(date, -1);
            i -= 1;
        }
        return date;
    };
    const floori = (date, step) => {
        if (step)
            adjust(date, step);
        floorish(date);
    };
    const floor = (date, step) => {
        const d = new Date(+date);
        floori(d, step);
        return d;
    };
    const ceil = (date, step) => {
        const d = new Date(+date - 1);
        floori(d, step);
        offseti(d, step);
        floori(d);
        return d;
    };
    const range = (start, stop, step, shouldAdjust) => {
        const ticks = [];
        const roundStep = Math.floor(step);
        const t = shouldAdjust ? ceil(start, step) : ceil(start);
        for (let i = t; i < stop; offseti(i, roundStep), floori(i)) {
            ticks.push(new Date(+i));
        }
        return ticks;
    };
    return {
        ceil,
        floor,
        range,
        duration,
    };
}
exports.createInterval = createInterval;
exports.millisecond = createInterval(1, (date) => date, (date, step = 1) => {
    date.setTime(+date + step);
}, (date) => date.getTime());
exports.second = createInterval(exports.DURATION_SECOND, (date) => {
    date.setMilliseconds(0);
}, (date, step = 1) => {
    date.setTime(+date + exports.DURATION_SECOND * step);
}, (date) => date.getSeconds());
exports.minute = createInterval(exports.DURATION_MINUTE, (date) => {
    date.setSeconds(0, 0);
}, (date, step = 1) => {
    date.setTime(+date + exports.DURATION_MINUTE * step);
}, (date) => date.getMinutes());
exports.hour = createInterval(exports.DURATION_HOUR, (date) => {
    date.setMinutes(0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + exports.DURATION_HOUR * step);
}, (date) => date.getHours());
exports.day = createInterval(exports.DURATION_DAY, (date) => {
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setTime(+date + exports.DURATION_DAY * step);
}, (date) => date.getDate() - 1);
exports.month = createInterval(exports.DURATION_MONTH, (date) => {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const month = date.getMonth();
    date.setMonth(month + step);
}, (date) => date.getMonth());
exports.week = createInterval(exports.DURATION_WEEK, (date) => {
    date.setDate(date.getDate() - (date.getDay() % 7));
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    date.setDate(date.getDate() + 7 * step);
}, (date) => {
    const start = exports.month.floor(date);
    const end = new Date(+date);
    return Math.floor((+end - +start) / exports.DURATION_WEEK);
});
exports.year = createInterval(exports.DURATION_YEAR, (date) => {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, (date, step = 1) => {
    const year = date.getFullYear();
    date.setFullYear(year + step);
}, (date) => date.getFullYear());
exports.localIntervalMap = {
    millisecond: exports.millisecond,
    second: exports.second,
    minute: exports.minute,
    hour: exports.hour,
    day: exports.day,
    week: exports.week,
    month: exports.month,
    year: exports.year,
};
//# sourceMappingURL=time-interval.js.map