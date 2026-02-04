"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sqrt = void 0;
const utils_1 = require("../utils");
const pow_1 = require("./pow");
const d3_ticks_1 = require("../tick-methods/d3-ticks");
class Sqrt extends pow_1.Pow {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            nice: false,
            clamp: false,
            round: false,
            interpolate: utils_1.createInterpolateValue,
            tickMethod: d3_ticks_1.d3Ticks,
            tickCount: 5,
            exponent: 0.5,
        };
    }
    constructor(options) {
        super(options);
    }
    update(options) {
        super.update(options);
    }
    clone() {
        return new Sqrt(this.options);
    }
}
exports.Sqrt = Sqrt;
//# sourceMappingURL=sqrt.js.map