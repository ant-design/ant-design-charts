"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3Time = void 0;
const utils_1 = require("../utils");
const d3Time = (min, max, count, interval, utc) => {
    const r = min > max;
    const lo = r ? max : min;
    const hi = r ? min : max;
    const [tickInterval, step] = (0, utils_1.findTickInterval)(lo, hi, count, interval, utc);
    const ticks = tickInterval.range(lo, new Date(+hi + 1), step, true);
    return r ? ticks.reverse() : ticks;
};
exports.d3Time = d3Time;
//# sourceMappingURL=d3-time.js.map