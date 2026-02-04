import { deepMix } from '@antv/util';
import { constant, visualColumn } from './utils/helper';
/**
 * Add 3 constant encode for size channel.
 * This is useful for point geometry.
 */
export const MaybeGradient = () => {
    return (I, mark) => {
        const { style = {}, encode } = mark;
        const { series } = encode;
        const { gradient } = style;
        if (!gradient || series)
            return [I, mark];
        return [
            I,
            deepMix({}, mark, {
                encode: {
                    series: visualColumn(constant(I, undefined)),
                },
            }),
        ];
    };
};
MaybeGradient.props = {};
//# sourceMappingURL=maybeGradient.js.map