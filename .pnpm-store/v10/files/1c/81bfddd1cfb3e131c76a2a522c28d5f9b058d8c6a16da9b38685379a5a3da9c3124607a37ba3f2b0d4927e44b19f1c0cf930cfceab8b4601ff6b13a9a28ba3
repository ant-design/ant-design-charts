import { deepMix } from '@antv/util';
import { column, isObject } from './utils/helper';
/**
 * Add a default encode for rangeX
 * when data is just an array
 */
export const MaybeDefaultX = () => {
    return (I, mark) => {
        const { data } = mark;
        if (Array.isArray(data) &&
            (data.every(Array.isArray) || !data.some(isObject))) {
            const extractX = (data, index) => Array.isArray(data[0])
                ? data.map((item) => item[index])
                : [data[index]];
            return [
                I,
                deepMix({}, mark, {
                    encode: {
                        x: column(extractX(data, 0)),
                        x1: column(extractX(data, 1)),
                    },
                }),
            ];
        }
        return [I, mark];
    };
};
MaybeDefaultX.props = {};
//# sourceMappingURL=maybeDefaultX.js.map