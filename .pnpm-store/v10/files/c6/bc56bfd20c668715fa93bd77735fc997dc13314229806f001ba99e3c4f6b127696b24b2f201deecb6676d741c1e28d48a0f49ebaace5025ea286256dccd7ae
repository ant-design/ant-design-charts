import { MaybeTuple, MaybeVisualPosition } from '../transform';
import { ImageShape } from '../shape';
import { baseGeometryChannels, basePostInference, basePreInference, createBandOffset, tooltip2d, visualMark, } from './utils';
const shape = {
    image: ImageShape,
};
export const Image = (options) => {
    const { cartesian } = options;
    if (cartesian)
        return visualMark;
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y } = value;
        const offset = createBandOffset(scale, value, options);
        const P = Array.from(index, (i) => {
            const p = [+X[i], +Y[i]];
            return [coordinate.map(offset(p, i))];
        });
        return [index, P];
    };
};
Image.props = {
    defaultShape: 'image',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...baseGeometryChannels({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'src', scale: 'identity' },
        { name: 'size' },
    ],
    preInference: [
        ...basePreInference(),
        { type: MaybeTuple },
        { type: MaybeVisualPosition },
    ],
    postInference: [...basePostInference(), ...tooltip2d()],
};
//# sourceMappingURL=image.js.map