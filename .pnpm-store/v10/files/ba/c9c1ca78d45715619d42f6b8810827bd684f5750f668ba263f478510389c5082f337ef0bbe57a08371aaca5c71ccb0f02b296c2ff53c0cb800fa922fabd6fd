"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sequential_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequential = void 0;
const util_1 = require("@antv/util");
const d3_ticks_1 = require("../tick-methods/d3-ticks");
const utils_1 = require("../utils");
const linear_1 = require("./linear");
function rangeOf(interpolator) {
    return [interpolator(0), interpolator(1)];
}
const normalizeDomain = (domain) => {
    const [d0, d1] = domain;
    // [d0, d1] => [0, 1]
    const normalize = (0, utils_1.compose)((0, utils_1.createInterpolateNumber)(0, 1), (0, utils_1.createNormalize)(d0, d1));
    return normalize;
};
/**
 * Sequential 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
// @Sequentialish
let Sequential = Sequential_1 = class Sequential extends linear_1.Linear {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            unknown: undefined,
            nice: false,
            clamp: false,
            round: false,
            interpolator: util_1.identity,
            tickMethod: d3_ticks_1.d3Ticks,
            tickCount: 5,
        };
    }
    constructor(options) {
        super(options);
    }
    clone() {
        return new Sequential_1(this.options);
    }
};
Sequential = Sequential_1 = __decorate([
    (0, utils_1.interpolatize)(rangeOf, normalizeDomain)
], Sequential);
exports.Sequential = Sequential;
//# sourceMappingURL=sequential.js.map