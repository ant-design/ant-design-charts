import { deepMix } from '@antv/util';
import { column, isObject } from './utils/helper';
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeTuple = () => {
    return (I, mark) => {
        const { data } = mark;
        if (!Array.isArray(data) || data.some(isObject))
            return [I, mark];
        const position = Array.isArray(data[0]) ? data : [data];
        const X = position.map((d) => d[0]);
        const Y = position.map((d) => d[1]);
        return [I, deepMix({}, mark, { encode: { x: column(X), y: column(Y) } })];
    };
};
MaybeTuple.props = {};
//# sourceMappingURL=maybeTuple.js.map