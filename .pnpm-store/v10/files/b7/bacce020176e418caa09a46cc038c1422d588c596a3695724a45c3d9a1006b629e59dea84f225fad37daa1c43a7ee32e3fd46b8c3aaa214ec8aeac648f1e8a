import { deepMix } from '@antv/util';
/**
 * Set padding of x and y scale to zero.
 */
export const MaybeZeroPadding = () => {
    return (I, mark) => {
        return [
            I,
            deepMix({ scale: { x: { padding: 0 }, y: { padding: 0 } } }, mark),
        ];
    };
};
MaybeZeroPadding.props = {};
//# sourceMappingURL=maybeZeroPadding.js.map