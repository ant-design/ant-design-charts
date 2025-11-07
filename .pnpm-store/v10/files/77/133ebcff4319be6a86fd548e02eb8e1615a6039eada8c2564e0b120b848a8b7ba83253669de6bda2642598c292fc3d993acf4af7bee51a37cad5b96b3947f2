import { Continuous } from './continuous';
import { createInterpolateValue, logs, pows } from '../utils';
import { d3Log } from '../tick-methods/d3-log';
import { d3LogNice } from '../utils/d3-log-nice';
/**
 * Linear 比例尺
 *
 * 构造一个线性的对数比例尺
 */
export class Log extends Continuous {
    getDefaultOptions() {
        return {
            domain: [1, 10],
            range: [0, 1],
            base: 10,
            interpolate: createInterpolateValue,
            tickMethod: d3Log,
            tickCount: 5,
        };
    }
    chooseNice() {
        return d3LogNice;
    }
    getTickMethodOptions() {
        const { domain, tickCount, base } = this.options;
        const min = domain[0];
        const max = domain[domain.length - 1];
        return [min, max, tickCount, base];
    }
    chooseTransforms() {
        const { base, domain } = this.options;
        const shouldReflect = domain[0] < 0;
        return [logs(base, shouldReflect), pows(base, shouldReflect)];
    }
    clone() {
        return new Log(this.options);
    }
}
//# sourceMappingURL=log.js.map