import { deepMix } from '@antv/util';
import { inferredColumn, constant } from './utils/helper';
/**
 * Add zero constant encode for y channel.
 */
export const MaybeZeroY = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { y } = encode;
        if (y !== undefined)
            return [I, mark];
        return [
            I,
            deepMix({}, mark, {
                encode: { y: inferredColumn(constant(I, 0)) },
                scale: { y: { guide: null } },
            }),
        ];
    };
};
MaybeZeroY.props = {};
//# sourceMappingURL=maybeZeroY.js.map