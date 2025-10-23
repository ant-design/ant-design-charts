"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyUnsignedRoundingMode = ApplyUnsignedRoundingMode;
var utils_1 = require("../utils");
function ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode) {
    if (x.eq(r1))
        return r1;
    (0, utils_1.invariant)(r1.lessThan(x) && x.lessThan(r2), "x should be between r1 and r2 but x=".concat(x, ", r1=").concat(r1, ", r2=").concat(r2));
    if (unsignedRoundingMode === 'zero') {
        return r1;
    }
    if (unsignedRoundingMode === 'infinity') {
        return r2;
    }
    var d1 = x.minus(r1);
    var d2 = r2.minus(x);
    if (d1.lessThan(d2)) {
        return r1;
    }
    if (d2.lessThan(d1)) {
        return r2;
    }
    (0, utils_1.invariant)(d1.eq(d2), 'd1 should be equal to d2');
    if (unsignedRoundingMode === 'half-zero') {
        return r1;
    }
    if (unsignedRoundingMode === 'half-infinity') {
        return r2;
    }
    (0, utils_1.invariant)(unsignedRoundingMode === 'half-even', 'unsignedRoundingMode should be half-even');
    var cardinality = r1.div(r2.minus(r1)).mod(2);
    if (cardinality.isZero()) {
        return r1;
    }
    return r2;
}
