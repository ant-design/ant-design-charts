import { deepMix } from '@antv/util';
import { inferredColumn, constant } from './utils/helper';
/**
 * Add zero constant encode for z channel.
 */
export const MaybeZeroZ = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { z } = encode;
        if (z !== undefined)
            return [I, mark];
        return [
            I,
            deepMix({}, mark, {
                encode: { z: inferredColumn(constant(I, 0)) },
                scale: { z: { guide: null } },
            }),
        ];
    };
};
MaybeZeroZ.props = {};
//# sourceMappingURL=maybeZeroZ.js.map