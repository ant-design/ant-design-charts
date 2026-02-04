"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3Log = void 0;
const d3_ticks_1 = require("./d3-ticks");
const utils_1 = require("../utils");
const d3Log = (a, b, n, base = 10) => {
    const shouldReflect = a < 0;
    const pow = (0, utils_1.pows)(base, shouldReflect);
    const log = (0, utils_1.logs)(base, shouldReflect);
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
            ticks = (0, d3_ticks_1.d3Ticks)(min, max, n);
    }
    else {
        const count = n === -1 ? j - i : Math.min(j - i, n);
        ticks = (0, d3_ticks_1.d3Ticks)(i, j, count).map(pow);
    }
    return r ? ticks.reverse() : ticks;
};
exports.d3Log = d3Log;
//# sourceMappingURL=d3-log.js.map