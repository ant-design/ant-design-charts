import { deepMix } from '@antv/util';
import { constant, visualColumn } from './utils/helper';
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeSize = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { size } = encode;
        if (size !== undefined)
            return [I, mark];
        return [
            I,
            deepMix({}, mark, { encode: { size: visualColumn(constant(I, 3)) } }),
        ];
    };
};
MaybeSize.props = {};
//# sourceMappingURL=maybeSize.js.map