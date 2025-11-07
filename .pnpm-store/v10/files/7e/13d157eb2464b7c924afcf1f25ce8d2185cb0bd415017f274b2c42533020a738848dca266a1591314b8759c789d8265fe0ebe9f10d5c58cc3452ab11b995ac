var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Sequential_1;
import { identity } from '@antv/util';
import { d3Ticks } from '../tick-methods/d3-ticks';
import { compose, createInterpolateNumber, createNormalize, interpolatize } from '../utils';
import { Linear } from './linear';
function rangeOf(interpolator) {
    return [interpolator(0), interpolator(1)];
}
const normalizeDomain = (domain) => {
    const [d0, d1] = domain;
    // [d0, d1] => [0, 1]
    const normalize = compose(createInterpolateNumber(0, 1), createNormalize(d0, d1));
    return normalize;
};
/**
 * Sequential 比例尺
 *
 * 构造可创建一个在输入和输出之间通过插值函数进行转换的比例尺
 */
// @Sequentialish
let Sequential = Sequential_1 = class Sequential extends Linear {
    getDefaultOptions() {
        return {
            domain: [0, 1],
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
        return new Sequential_1(this.options);
    }
};
Sequential = Sequential_1 = __decorate([
    interpolatize(rangeOf, normalizeDomain)
], Sequential);
export { Sequential };
//# sourceMappingURL=sequential.js.map