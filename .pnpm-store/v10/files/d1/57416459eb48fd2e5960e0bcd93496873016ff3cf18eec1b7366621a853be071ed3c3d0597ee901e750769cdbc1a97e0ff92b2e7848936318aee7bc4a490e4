"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3Ticks = void 0;
const utils_1 = require("../utils");
const d3Ticks = (begin, end, count) => {
    let n;
    let ticks;
    let start = begin;
    let stop = end;
    if (start === stop && count > 0) {
        return [start];
    }
    let step = (0, utils_1.tickIncrement)(start, stop, count);
    if (step === 0 || !Number.isFinite(step)) {
        return [];
    }
    if (step > 0) {
        start = Math.ceil(start / step);
        stop = Math.floor(stop / step);
        ticks = new Array((n = Math.ceil(stop - start + 1)));
        for (let i = 0; i < n; i += 1) {
            ticks[i] = (start + i) * step;
        }
    }
    else {
        step = -step;
        start = Math.ceil(start * step);
        stop = Math.floor(stop * step);
        ticks = new Array((n = Math.ceil(stop - start + 1)));
        for (let i = 0; i < n; i += 1) {
            ticks[i] = (start + i) / step;
        }
    }
    return ticks;
};
exports.d3Ticks = d3Ticks;
//# sourceMappingURL=d3-ticks.js.map