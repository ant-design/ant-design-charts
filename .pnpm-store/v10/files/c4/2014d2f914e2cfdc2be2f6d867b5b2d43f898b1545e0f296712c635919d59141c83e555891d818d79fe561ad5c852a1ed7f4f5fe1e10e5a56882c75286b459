'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoProduct = twoProduct;
const SPLITTER = +(Math.pow(2, 27) + 1.0);
function twoProduct(a, b, result) {
    const x = a * b;
    const c = SPLITTER * a;
    const a_big = c - a;
    const ahi = c - a_big;
    const alo = a - ahi;
    const d = SPLITTER * b;
    const b_big = d - b;
    const bhi = d - b_big;
    const blo = b - bhi;
    const err1 = x - ahi * bhi;
    const err2 = err1 - alo * bhi;
    const err3 = err2 - ahi * blo;
    const y = alo * blo - err3;
    if (result) {
        result[0] = y;
        result[1] = x;
        return result;
    }
    return [y, x];
}
//# sourceMappingURL=two-product.js.map