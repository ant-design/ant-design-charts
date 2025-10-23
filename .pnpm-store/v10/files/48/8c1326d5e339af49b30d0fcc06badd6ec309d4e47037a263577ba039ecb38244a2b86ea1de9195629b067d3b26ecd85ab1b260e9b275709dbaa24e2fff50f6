import { tickIncrement } from '../utils';
export const d3Ticks = (begin, end, count) => {
    let n;
    let ticks;
    let start = begin;
    let stop = end;
    if (start === stop && count > 0) {
        return [start];
    }
    let step = tickIncrement(start, stop, count);
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
//# sourceMappingURL=d3-ticks.js.map