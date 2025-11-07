import { RangeShape } from '../shape';
import { MaybeDefaultY } from '../transform';
import { baseAnnotationChannels, basePostInference, basePreInference, } from './utils';
import { AbstractRange } from './range';
const shape = {
    range: RangeShape,
};
export const RangeY = () => {
    return AbstractRange({ extendX: true });
};
RangeY.props = {
    defaultShape: 'range',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
        { name: 'y', required: true },
    ],
    preInference: [...basePreInference(), { type: MaybeDefaultY }],
    postInference: [...basePostInference()],
};
//# sourceMappingURL=rangeY.js.map