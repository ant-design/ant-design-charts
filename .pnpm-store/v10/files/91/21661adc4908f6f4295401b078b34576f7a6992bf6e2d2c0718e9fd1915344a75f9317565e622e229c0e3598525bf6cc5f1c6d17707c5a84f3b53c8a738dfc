import { deepMix } from '@antv/util';
import { column, columnOf } from './utils/helper';
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeIdentityX = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { x1 } = encode;
        if (x1)
            return [I, mark];
        const [X] = columnOf(encode, 'x');
        return [I, deepMix({}, mark, { encode: { x1: column([...X]) } })];
    };
};
MaybeIdentityX.props = {};
//# sourceMappingURL=maybeIdentityX.js.map