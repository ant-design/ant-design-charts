"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linear = void 0;
const util_1 = require("@antv/util");
const continuous_1 = require("./continuous");
const utils_1 = require("../utils");
const d3_ticks_1 = require("../tick-methods/d3-ticks");
const d3_linear_nice_1 = require("../utils/d3-linear-nice");
/**
 * Linear 比例尺
 *
 * 构造可创建一个在输入和输出之间具有线性关系的比例尺
 */
class Linear extends continuous_1.Continuous {
    getDefaultOptions() {
        return {
            domain: [0, 1],
            range: [0, 1],
            unknown: undefined,
            nice: false,
            clamp: false,
            round: false,
            interpolate: utils_1.createInterpolateValue,
            tickMethod: d3_ticks_1.d3Ticks,
            tickCount: 5,
        };
    }
    removeUnsortedValues(breaksDomain, breaksRange, reverse) {
        let pre = -Infinity;
        const deleteIndices = breaksRange.reduce((acc, current, i) => {
            if (i === 0)
                return acc;
            const value = pre > 0 ? pre : current;
            if (pre > 0 && (reverse ? current > pre : current < pre)) {
                acc.push(i);
            }
            else {
                const diff = (value - breaksRange[i - 1]) * (reverse ? -1 : 1);
                if (diff < 0) {
                    if (pre < 0)
                        pre = breaksRange[i - 1];
                    acc.push(i);
                }
                else {
                    pre = -Infinity;
                }
            }
            return acc;
        }, []);
        deleteIndices
            .slice()
            .reverse()
            .forEach((index) => {
            breaksDomain.splice(index, 1);
            breaksRange.splice(index, 1);
        });
        return { breaksDomain, breaksRange };
    }
    transformDomain(options) {
        const RANGE_LIMIT = [0.2, 0.8];
        const DEFAULT_GAP = 0.03;
        const { domain = [], range = [1, 0], breaks = [], tickCount = 5, nice } = options;
        const [min, max] = [Math.min(...domain), Math.max(...domain)];
        let niceDomainMin = min;
        let niceDomainMax = max;
        if (nice && breaks.length < 2) {
            const niceDomain = this.chooseNice()(min, max, tickCount);
            niceDomainMin = niceDomain[0];
            niceDomainMax = niceDomain[niceDomain.length - 1];
        }
        const domainMin = Math.min(niceDomainMin, min);
        let domainMax = Math.max(niceDomainMax, max);
        const sortedBreaks = breaks.filter(({ end }) => end < domainMax).sort((a, b) => a.start - b.start);
        const breaksDomain = (0, d3_ticks_1.d3Ticks)(domainMin, domainMax, tickCount, sortedBreaks);
        if ((0, util_1.last)(breaksDomain) < domainMax) {
            const nicest = (0, d3_linear_nice_1.d3LinearNice)(0, domainMax - (0, util_1.last)(breaksDomain), 3);
            breaksDomain.push((0, util_1.last)(breaksDomain) + (0, util_1.last)(nicest));
            domainMax = (0, util_1.last)(breaksDomain);
        }
        const [r0, r1] = [range[0], (0, util_1.last)(range)];
        const diffDomain = domainMax - domainMin;
        const diffRange = Math.abs(r1 - r0);
        const reverse = r0 > r1;
        // Calculate the new range based on breaks.
        const breaksRange = breaksDomain.map((d) => {
            const ratio = (d - domainMin) / diffDomain;
            return reverse ? r0 - ratio * diffRange : r0 + ratio * diffRange;
        });
        // Compress the range scale according to breaks.
        const [MIN, MAX] = RANGE_LIMIT;
        sortedBreaks.forEach(({ start, end, gap = DEFAULT_GAP, compress = 'middle' }) => {
            const startIndex = breaksDomain.indexOf(start);
            const endIndex = breaksDomain.indexOf(end);
            let value = (breaksRange[startIndex] + breaksRange[endIndex]) / 2;
            if (compress === 'start')
                value = breaksRange[startIndex];
            if (compress === 'end')
                value = breaksRange[endIndex];
            const halfSpan = (gap * diffRange) / 2;
            // Calculate the new start and end values based on the center and scaled span.
            let startValue = reverse ? value + halfSpan : value - halfSpan;
            let endValue = reverse ? value - halfSpan : value + halfSpan;
            // Ensure the new start and end values are within the defined limits.
            if (startValue < MIN) {
                endValue += MIN - startValue;
                startValue = MIN;
            }
            if (endValue > MAX) {
                startValue -= endValue - MAX;
                endValue = MAX;
            }
            if (startValue > MAX) {
                endValue -= startValue - MAX;
                startValue = MAX;
            }
            if (endValue < MIN) {
                startValue += MIN - endValue;
                endValue = MIN;
            }
            breaksRange[startIndex] = startValue;
            breaksRange[endIndex] = endValue;
        });
        return this.removeUnsortedValues(breaksDomain, breaksRange, reverse);
    }
    transformBreaks(options) {
        const { domain, breaks = [] } = options;
        if (!(0, util_1.isArray)(options.breaks))
            return options;
        const domainMax = Math.max(...domain);
        const filteredBreaks = breaks.filter(({ end }) => end < domainMax);
        const optWithFilteredBreaks = { ...options, breaks: filteredBreaks };
        const { breaksDomain, breaksRange } = this.transformDomain(optWithFilteredBreaks);
        return {
            ...options,
            domain: breaksDomain,
            range: breaksRange,
            breaks: filteredBreaks,
            tickMethod: () => [...breaksDomain],
        };
    }
    chooseTransforms() {
        return [util_1.identity, util_1.identity];
    }
    clone() {
        return new Linear(this.options);
    }
}
exports.Linear = Linear;
//# sourceMappingURL=linear.js.map