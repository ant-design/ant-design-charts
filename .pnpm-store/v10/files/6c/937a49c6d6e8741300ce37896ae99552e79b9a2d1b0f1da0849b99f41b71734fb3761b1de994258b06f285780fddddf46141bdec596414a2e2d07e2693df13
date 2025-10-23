"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3Ticks = exports.insertBreaksToTicks = void 0;
const utils_1 = require("../utils");
/**
 *  Insert breaks into ticks and delete the ticks covered by breaks.
 */
const insertBreaksToTicks = (ticks, breaks) => {
    if (!(breaks === null || breaks === void 0 ? void 0 : breaks.length))
        return ticks;
    const edgePoints = [...ticks, ...breaks.flatMap((b) => [b.start, b.end])];
    const uniqueSortedTicks = Array.from(new Set(edgePoints)).sort((a, b) => a - b);
    const filteredTicks = uniqueSortedTicks.filter((tick) => !breaks.some(({ start, end }) => tick > start && tick < end));
    return filteredTicks.length ? filteredTicks : ticks;
};
exports.insertBreaksToTicks = insertBreaksToTicks;
const d3Ticks = (begin, end, count, breaks) => {
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
    return (0, exports.insertBreaksToTicks)(ticks, breaks);
};
exports.d3Ticks = d3Ticks;
//# sourceMappingURL=d3-ticks.js.map