import { createInterpolateValue } from '../utils';
import { Pow } from './pow';
import { d3Ticks } from '../tick-methods/d3-ticks';
export class Sqrt extends Pow {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            nice: false,
            clamp: false,
            round: false,
            interpolate: createInterpolateValue,
            tickMethod: d3Ticks,
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
//# sourceMappingURL=sqrt.js.map