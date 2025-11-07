var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { bin as d3Bin, group, thresholdScott, extent, } from '@antv/vendor/d3-array';
import { defined, subObject } from '../utils/helper';
import { GroupN } from './groupN';
import { columnOf } from './utils/helper';
const THRESHOLD = 'thresholds';
/**
 * @see https://github.com/observablehq/plot/blob/main/src/transforms/bin.js
 */
function thresholdAuto(values) {
    const [min, max] = extent(values);
    return Math.min(200, thresholdScott(values, min, max));
}
/**
 * The Bin aggregate data.
 * @todo More threshold method.
 * @todo Performance.
 */
export const Bin = (options = {}) => {
    const { groupChannels = ['color'], binChannels = ['x', 'y'] } = options, rest = __rest(options, ["groupChannels", "binChannels"]);
    const channelIndexKey = {};
    // Group indexes and update channelIndexKey.
    const groupBy = (I, mark) => {
        const { encode } = mark;
        const binValues = binChannels.map((channel) => {
            const [V] = columnOf(encode, channel);
            return V;
        });
        const thresholds = subObject(rest, THRESHOLD);
        const DI = I.filter((i) => binValues.every((V) => defined(V[i])));
        // Group indexes by both discrete and quantitative channels.
        const groupKeys = [
            // For discrete channels, use value as group key.
            ...groupChannels
                .map((d) => {
                const [V] = columnOf(encode, d);
                return V;
            })
                .filter(defined)
                .map((V) => (i) => V[i]),
            // For quantitative channels, use extent of bin as group key.
            ...binChannels.map((d, i) => {
                const V = binValues[i];
                const t = thresholds[d] || thresholdAuto(V);
                const bins = d3Bin()
                    .thresholds(t)
                    .value((i) => +V[i])(DI);
                const indexKey = new Map(bins.flatMap((bin) => {
                    const { x0, x1 } = bin;
                    const key = `${x0},${x1}`;
                    return bin.map((i) => [i, key]);
                }));
                channelIndexKey[d] = indexKey;
                return (i) => indexKey.get(i);
            }),
        ];
        // Group by indexes by channel keys.
        const key = (i) => groupKeys.map((key) => key(i)).join('-');
        return Array.from(group(DI, key).values());
    };
    return GroupN(Object.assign(Object.assign(Object.assign({}, Object.fromEntries(Object.entries(rest).filter(([k]) => !k.startsWith(THRESHOLD)))), Object.fromEntries(binChannels.flatMap((channel) => {
        const start = ([i]) => +channelIndexKey[channel].get(i).split(',')[0];
        const end = ([i]) => +channelIndexKey[channel].get(i).split(',')[1];
        end.from = channel;
        return [
            [channel, start],
            [`${channel}1`, end],
        ];
    }))), { groupBy }));
};
Bin.props = {};
//# sourceMappingURL=bin.js.map