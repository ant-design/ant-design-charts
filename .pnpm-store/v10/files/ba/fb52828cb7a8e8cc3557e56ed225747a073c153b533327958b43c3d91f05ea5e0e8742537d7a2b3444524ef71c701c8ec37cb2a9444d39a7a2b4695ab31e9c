"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3TimeNice = void 0;
const find_tick_interval_1 = require("./find-tick-interval");
const d3TimeNice = (min, max, count, interval, utc) => {
    const r = min > max;
    const lo = r ? max : min;
    const hi = r ? min : max;
    const [tickInterval, step] = (0, find_tick_interval_1.findTickInterval)(lo, hi, count, interval, utc);
    const domain = [tickInterval.floor(lo, step), tickInterval.ceil(hi, step)];
    return r ? domain.reverse() : domain;
};
exports.d3TimeNice = d3TimeNice;
//# sourceMappingURL=d3-time-nice.js.map