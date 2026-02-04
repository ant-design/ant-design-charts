"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMA = void 0;
exports.ema = ema;
function ema(values, alpha) {
    if (alpha < 0 || alpha > 1) {
        throw new Error('alpha must be between 0 and 1.');
    }
    if (values.length === 0) {
        return [];
    }
    let last = values[0];
    const smoothed = [];
    for (const point of values) {
        if (point === null || point === undefined) {
            // 如果没有数据的话，使用最近的值
            smoothed.push(point);
            console.warn('EMA：The value is null or undefined', values);
            continue;
        }
        if (last === null || last === undefined) {
            last = point;
        }
        const smoothedVal = last * alpha + (1 - alpha) * point;
        smoothed.push(smoothedVal);
        last = smoothedVal;
    }
    return smoothed;
}
/**
 * https://en.wikipedia.org/wiki/Exponential_smoothing
 * @param options
 * @returns
 */
const EMA = (options) => {
    const { field = 'y', alpha = 0.6, as = field } = options;
    return (data) => {
        const values = data.map((d) => {
            return d[field];
        });
        const out = ema(values, alpha);
        return data.map((d, i) => {
            return Object.assign(Object.assign({}, d), { [as]: out[i] });
        });
    };
};
exports.EMA = EMA;
exports.EMA.props = {};
//# sourceMappingURL=ema.js.map