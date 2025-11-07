import { deepMix } from '@antv/util';
import { column, columnOf } from './utils/helper';
import { rangeOf, interpolate } from './jitter';
/**
 * The JitterX transform produce dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
export const JitterX = (options = {}) => {
    const { padding = 0, random = Math.random } = options;
    return (I, mark) => {
        const { encode, scale } = mark;
        const { x: scaleX } = scale;
        const [X] = columnOf(encode, 'x');
        const rangeX = rangeOf(X, scaleX, padding);
        const DX = I.map(() => interpolate(random(), ...rangeX));
        return [
            I,
            deepMix({ scale: { x: { padding: 0.5 } } }, mark, {
                encode: { dx: column(DX) },
            }),
        ];
    };
};
JitterX.props = {};
//# sourceMappingURL=jitterX.js.map