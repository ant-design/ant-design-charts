import { deepMix } from '@antv/util';
import { column, isObject } from './utils/helper';
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeTupleX = () => {
    return (I, mark) => {
        const { data } = mark;
        if (!Array.isArray(data) || data.some(isObject))
            return [I, mark];
        return [I, deepMix({}, mark, { encode: { x: column(data) } })];
    };
};
MaybeTupleX.props = {};
//# sourceMappingURL=maybeTupleX.js.map