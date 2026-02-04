'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleLinearExpansion = scaleLinearExpansion;
const two_product_1 = require("./two-product");
const two_sum_1 = require("./two-sum");
function scaleLinearExpansion(e, scale) {
    const n = e.length;
    if (n === 1) {
        const ts = (0, two_product_1.twoProduct)(e[0], scale);
        if (ts[0]) {
            return ts;
        }
        return [ts[1]];
    }
    const g = new Array(2 * n);
    const q = [0.1, 0.1];
    const t = [0.1, 0.1];
    let count = 0;
    (0, two_product_1.twoProduct)(e[0], scale, q);
    if (q[0]) {
        g[count++] = q[0];
    }
    for (let i = 1; i < n; ++i) {
        (0, two_product_1.twoProduct)(e[i], scale, t);
        const pq = q[1];
        (0, two_sum_1.fastTwoSum)(pq, t[0], q);
        if (q[0]) {
            g[count++] = q[0];
        }
        const a = t[1];
        const b = q[1];
        const x = a + b;
        const bv = x - a;
        const y = b - bv;
        q[1] = x;
        if (y) {
            g[count++] = y;
        }
    }
    if (q[1]) {
        g[count++] = q[1];
    }
    if (count === 0) {
        g[count++] = 0.0;
    }
    g.length = count;
    return g;
}
//# sourceMappingURL=robust-scale.js.map