import { identity } from '@antv/util';
import { Continuous } from './continuous';
import { createInterpolateValue } from '../utils';
import { d3Ticks } from '../tick-methods/d3-ticks';
/**
 * Linear 比例尺
 *
 * 构造可创建一个在输入和输出之间具有线性关系的比例尺
 */
export class Linear extends Continuous {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            unknown: undefined,
            nice: false,
            clamp: false,
            round: false,
            interpolate: createInterpolateValue,
            tickMethod: d3Ticks,
            tickCount: 5,
        };
    }
    chooseTransforms() {
        return [identity, identity];
    }
    clone() {
        return new Linear(this.options);
    }
}
//# sourceMappingURL=linear.js.map