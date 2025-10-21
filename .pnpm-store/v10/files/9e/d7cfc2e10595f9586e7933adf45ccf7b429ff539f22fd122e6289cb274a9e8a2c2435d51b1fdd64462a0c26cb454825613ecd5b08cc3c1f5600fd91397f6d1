import { deepMix } from '@antv/util';
import { column, columnOf } from './utils/helper';
/**
 * Assume color channel is series channel.
 */
export const MaybeSeries = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { series, color } = encode;
        if (series !== undefined || color === undefined)
            return [I, mark];
        const [C, fc] = columnOf(encode, 'color');
        return [I, deepMix({}, mark, { encode: { series: column(C, fc) } })];
    };
};
MaybeSeries.props = {};
//# sourceMappingURL=maybeSeries.js.map