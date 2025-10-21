var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Diverging_1;
import { identity } from '@antv/util';
import { d3Ticks } from '../tick-methods/d3-ticks';
import { compose, createInterpolateNumber, createNormalize, interpolatize } from '../utils';
import { Linear } from './linear';
function rangeOf(interpolator) {
    return [interpolator(0), interpolator(0.5), interpolator(1)];
}
const normalizeDomain = (domain) => {
    const [d0, d1, d2] = domain;
    // [d0, d1] => [0, 0.5]
    const normalizeLeft = compose(createInterpolateNumber(0, 0.5), createNormalize(d0, d1));
    // [d1, d2] => [0.5, 1]
    const normalizeRight = compose(createInterpolateNumber(0.5, 1), createNormalize(d1, d2));
    return (x) => {
        // Find x belongs to the range of [d0, d1] or [d1, d2].
        if (d0 > d2) {
            return x < d1 ? normalizeRight(x) : normalizeLeft(x);
        }
        else {
            return x < d1 ? normalizeLeft(x) : normalizeRight(x);
        }
    };
};
/**
 * Diverging 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
let Diverging = Diverging_1 = class Diverging extends Linear {
    getDefaultOptions() {
        return {
            domain: [0, 0.5, 1],
            unknown: undefined,
            nice: false,
            clamp: false,
            round: false,
            interpolator: identity,
            tickMethod: d3Ticks,
            tickCount: 5,
        };
    }
    constructor(options) {
        super(options);
    }
    clone() {
        return new Diverging_1(this.options);
    }
};
Diverging = Diverging_1 = __decorate([
    interpolatize(rangeOf, normalizeDomain)
], Diverging);
export { Diverging };
//# sourceMappingURL=diverging.js.map