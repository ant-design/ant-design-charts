const e10 = Math.sqrt(50);
const e5 = Math.sqrt(10);
const e2 = Math.sqrt(2);
export function tickIncrement(start, stop, count) {
    const step = (stop - start) / Math.max(0, count);
    const power = Math.floor(Math.log(step) / Math.LN10);
    const error = step / 10 ** power;
    if (power >= 0) {
        // eslint-disable-next-line no-nested-ternary
        return (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * 10 ** power;
    }
    // eslint-disable-next-line no-nested-ternary
    return -(10 ** -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
export function tickStep(start, stop, count) {
    const step0 = Math.abs(stop - start) / Math.max(0, count);
    let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10);
    const error = step0 / step1;
    if (error >= e10)
        step1 *= 10;
    else if (error >= e5)
        step1 *= 5;
    else if (error >= e2)
        step1 *= 2;
    return stop < start ? -step1 : step1;
}
//# sourceMappingURL=ticks.js.map