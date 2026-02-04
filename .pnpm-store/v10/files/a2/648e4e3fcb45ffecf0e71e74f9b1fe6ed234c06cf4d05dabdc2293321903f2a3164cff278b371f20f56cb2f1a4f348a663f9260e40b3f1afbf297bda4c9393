"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTickInterval = void 0;
const time_interval_1 = require("./time-interval");
const utc_interval_1 = require("./utc-interval");
const bisect_1 = require("./bisect");
const ticks_1 = require("./ticks");
function chooseTickIntervals(utc) {
    const intervalMap = utc ? utc_interval_1.utcIntervalMap : time_interval_1.localIntervalMap;
    const { year, month, week, day, hour, minute, second, millisecond } = intervalMap;
    const tickIntervals = [
        [second, 1],
        [second, 5],
        [second, 15],
        [second, 30],
        [minute, 1],
        [minute, 5],
        [minute, 15],
        [minute, 30],
        [hour, 1],
        [hour, 3],
        [hour, 6],
        [hour, 12],
        [day, 1],
        [day, 2],
        [week, 1],
        [month, 1],
        [month, 3],
        [year, 1],
    ];
    return {
        tickIntervals,
        year,
        millisecond,
    };
}
function findTickInterval(start, stop, count, interval, utc) {
    const lo = +start;
    const hi = +stop;
    const { tickIntervals, year, millisecond } = chooseTickIntervals(utc);
    const getter = ([interval, count]) => interval.duration * count;
    const targetCount = interval ? (hi - lo) / interval : count || 5;
    const targetInterval = interval || (hi - lo) / targetCount;
    const len = tickIntervals.length;
    const i = (0, bisect_1.bisect)(tickIntervals, targetInterval, 0, len, getter);
    let matchInterval;
    if (i === len) {
        const step = (0, ticks_1.tickStep)(lo / year.duration, hi / year.duration, targetCount);
        matchInterval = [year, step];
    }
    else if (i) {
        const closeToLow = targetInterval / getter(tickIntervals[i - 1]) < getter(tickIntervals[i]) / targetInterval;
        const [timeInterval, targetStep] = closeToLow ? tickIntervals[i - 1] : tickIntervals[i];
        const step = interval ? Math.ceil(interval / timeInterval.duration) : targetStep;
        matchInterval = [timeInterval, step];
    }
    else {
        const step = Math.max((0, ticks_1.tickStep)(lo, hi, targetCount), 1);
        matchInterval = [millisecond, step];
    }
    return matchInterval;
}
exports.findTickInterval = findTickInterval;
//# sourceMappingURL=find-tick-interval.js.map