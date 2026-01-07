import { d3Ticks } from './d3-ticks';
import { pows, logs } from '../utils';
export const d3Log = (a, b, n, base = 10) => {
    const shouldReflect = a < 0;
    const pow = pows(base, shouldReflect);
    const log = logs(base, shouldReflect);
    const r = b < a;
    const min = r ? b : a;
    const max = r ? a : b;
    let i = log(min);
    let j = log(max);
    let ticks = [];
    // 如果 base 是整数
    if (!(base % 1) && j - i < n) {
        i = Math.floor(i);
        j = Math.ceil(j);
        if (shouldReflect) {
            for (; i <= j; i += 1) {
                const p = pow(i);
                for (let k = base - 1; k >= 1; k -= 1) {
                    const t = p * k;
                    if (t > max)
                        break;
                    if (t >= min)
                        ticks.push(t);
                }
            }
        }
        else {
            for (; i <= j; i += 1) {
                const p = pow(i);
                for (let k = 1; k < base; k += 1) {
                    const t = p * k;
                    if (t > max)
                        break;
                    if (t >= min)
                        ticks.push(t);
                }
            }
        }
        if (ticks.length * 2 < n)
            ticks = d3Ticks(min, max, n);
    }
    else {
        const count = n === -1 ? j - i : Math.min(j - i, n);
        ticks = d3Ticks(i, j, count).map(pow);
    }
    return r ? ticks.reverse() : ticks;
};
//# sourceMappingURL=d3-log.js.map