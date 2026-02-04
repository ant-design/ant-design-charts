import { deepMix } from '@antv/util';
import { inferredColumn, constant } from './utils/helper';
/**
 * Add zero constant encode for x channel.
 * This is useful for interval geometry.
 */
export const MaybeZeroX = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { x } = encode;
        if (x !== undefined)
            return [I, mark];
        return [
            I,
            deepMix({}, mark, {
                encode: { x: inferredColumn(constant(I, 0)) },
                scale: { x: { guide: null } },
            }),
        ];
    };
};
MaybeZeroX.props = {};
//# sourceMappingURL=maybeZeroX.js.map