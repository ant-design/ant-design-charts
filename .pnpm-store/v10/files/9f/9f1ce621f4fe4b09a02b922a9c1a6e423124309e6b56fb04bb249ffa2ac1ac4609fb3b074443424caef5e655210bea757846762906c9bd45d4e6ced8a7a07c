import { findTickInterval } from './find-tick-interval';
export const d3TimeNice = (min, max, count, interval, utc) => {
    const r = min > max;
    const lo = r ? max : min;
    const hi = r ? min : max;
    const [tickInterval, step] = findTickInterval(lo, hi, count, interval, utc);
    const domain = [tickInterval.floor(lo, step), tickInterval.ceil(hi, step)];
    return r ? domain.reverse() : domain;
};
//# sourceMappingURL=d3-time-nice.js.map