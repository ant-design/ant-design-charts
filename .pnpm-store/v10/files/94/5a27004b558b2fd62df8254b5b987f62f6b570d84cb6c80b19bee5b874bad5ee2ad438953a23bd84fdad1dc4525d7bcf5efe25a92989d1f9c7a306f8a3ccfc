'use strict';
export function fastTwoSum(a, b, result) {
    const x = a + b;
    const bv = x - a;
    const av = x - bv;
    const br = b - bv;
    const ar = a - av;
    if (result) {
        result[0] = ar + br;
        result[1] = x;
        return result;
    }
    return [ar + br, x];
}
//# sourceMappingURL=two-sum.js.map