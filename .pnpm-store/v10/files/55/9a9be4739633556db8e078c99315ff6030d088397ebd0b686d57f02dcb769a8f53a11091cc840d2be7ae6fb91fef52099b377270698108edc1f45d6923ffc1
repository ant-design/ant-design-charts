import { deepMix } from '@antv/util';
import { LineXY } from '../shape';
import { MaybeTupleX } from '../transform';
import { basePostInference, baseAnnotationChannels, basePreInference, createBandOffset, } from './utils';
const shape = {
    line: LineXY,
};
export const LineX = (options) => {
    return (index, scale, value, coordinate) => {
        const { x: X } = value;
        const offset = createBandOffset(scale, value, deepMix({ style: { bandOffset: 0 } }, options));
        const P = Array.from(index, (i) => {
            const p1 = [X[i], 1];
            const p2 = [X[i], 0];
            return [p1, p2].map((d) => coordinate.map(offset(d, i)));
        });
        return [index, P];
    };
};
LineX.props = {
    defaultShape: 'line',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
    ],
    preInference: [...basePreInference(), { type: MaybeTupleX }],
    postInference: [...basePostInference()],
};
//# sourceMappingURL=lineX.js.map