// @ts-ignore medianIndex exist in d3-array@3.2.0, but @types/d3-array Expired.
import { maxIndex, minIndex, medianIndex } from '@antv/vendor/d3-array';
import { createGroups } from './utils/order';
import { columnOf } from './utils/helper';
import { lttb } from './utils/lttb';
function normalizeSample(strategy) {
    if (typeof strategy === 'function')
        return strategy;
    if (strategy === 'lttb')
        return lttb;
    const strategies = {
        first: (f) => [f[0]],
        last: (f) => [f[f.length - 1]],
        min: (f, X, Y) => [
            f[minIndex(f, (i) => Y[i])],
        ],
        max: (f, X, Y) => [
            f[maxIndex(f, (i) => Y[i])],
        ],
        median: (f, X, Y) => [
            f[medianIndex(f, (i) => Y[i])],
        ],
    };
    const sampleFunction = strategies[strategy] || strategies.median;
    return (I, X, Y, thresholds) => {
        // Sepreate group to frames, then sample each frame.
        // Keep more data as possible.
        const frameSize = Math.max(1, Math.floor(I.length / thresholds));
        const frames = getFrames(I, frameSize);
        return frames.flatMap((frame) => sampleFunction(frame, X, Y));
    };
}
/**
 * Split the array into frame with each frameSize.
 */
function getFrames(I, frameSize) {
    const size = I.length;
    const frames = [];
    let i = 0;
    while (i < size) {
        frames.push(I.slice(i, (i += frameSize)));
    }
    return frames;
}
/**
 * The sample transform groups marks with specified groupBy fields, and
 * sample data for each group when data.length >= threshold(default = 2000).
 */
export const Sample = (options = {}) => {
    const { strategy = 'median', thresholds = 2000, groupBy = ['series', 'color'], } = options;
    const sampleFunction = normalizeSample(strategy);
    return (I, mark) => {
        const { encode } = mark;
        const groups = createGroups(groupBy, I, mark);
        const [X] = columnOf(encode, 'x');
        const [Y] = columnOf(encode, 'y');
        return [
            groups.flatMap((g) => sampleFunction(g, X, Y, thresholds)),
            mark,
        ];
    };
};
Sample.props = {};
//# sourceMappingURL=sample.js.map