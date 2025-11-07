import { RangeShape } from '../shape';
import { MaybeDefaultX } from '../transform';
import { baseAnnotationChannels, basePostInference, basePreInference, } from './utils';
import { AbstractRange } from './range';
const shape = {
    range: RangeShape,
};
export const RangeX = () => {
    return AbstractRange({ extendY: true });
};
RangeX.props = {
    defaultShape: 'range',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...baseAnnotationChannels({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
    ],
    preInference: [...basePreInference(), { type: MaybeDefaultX }],
    postInference: [...basePostInference()],
};
//# sourceMappingURL=rangeX.js.map