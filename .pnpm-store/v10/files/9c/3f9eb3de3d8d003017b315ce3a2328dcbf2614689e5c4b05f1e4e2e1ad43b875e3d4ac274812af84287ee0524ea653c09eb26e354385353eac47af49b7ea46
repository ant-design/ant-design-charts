import { RangeShape } from '../shape';
import { baseAnnotationChannels, basePostInference, basePreInference, } from './utils';
function extend(channel, extended, value, scale) {
    if (extended)
        return () => [0, 1];
    const { [channel]: C, [`${channel}1`]: C1 } = value;
    return (i) => {
        var _a;
        const offset = ((_a = scale.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(scale, scale.invert(+C1[i]))) || 0;
        return [C[i], C1[i] + offset];
    };
}
export function AbstractRange(options = {}) {
    const { extendX = false, extendY = false } = options;
    return (index, scale, value, coordinate) => {
        const x = extend('x', extendX, value, scale.x);
        const y = extend('y', extendY, value, scale.y);
        const P = Array.from(index, (i) => {
            const [x1, x2] = x(i);
            const [y1, y2] = y(i);
            const p1 = [x1, y1];
            const p2 = [x2, y1];
            const p3 = [x2, y2];
            const p4 = [x1, y2];
            return [p1, p2, p3, p4].map((d) => coordinate.map(d));
        });
        return [index, P];
    };
}
const shape = { range: RangeShape };
export const Range = () => {
    return AbstractRange();
};
Range.props = {
    defaultShape: 'range',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [...basePreInference()],
    postInference: [...basePostInference()],
};
//# sourceMappingURL=range.js.map