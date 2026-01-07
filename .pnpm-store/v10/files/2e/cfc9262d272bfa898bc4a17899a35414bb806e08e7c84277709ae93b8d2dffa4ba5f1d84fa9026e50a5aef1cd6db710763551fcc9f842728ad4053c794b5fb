import { group } from '@antv/vendor/d3-array';
import { isParallel, isPolar } from '../utils/coordinate';
import { LineShape, LineHV, LineVH, LineHVH, LineTrail, LineSmooth, } from '../shape';
import { MaybeSeries, MaybeGradient } from '../transform';
import { baseGeometryChannels, basePostInference, basePreInference, tooltip1d, tooltipXd, } from './utils';
const shape = {
    line: LineShape,
    smooth: LineSmooth,
    hv: LineHV,
    vh: LineVH,
    hvh: LineHVH,
    trail: LineTrail,
};
const line = (index, scale, value, coordinate) => {
    var _a, _b;
    const { series: S, x: X, y: Y } = value;
    const { x, y } = scale;
    // Because x and y channel is not strictly required in Line.props,
    // it should throw error with empty x or y channels.
    if (X === undefined || Y === undefined) {
        throw new Error('Missing encode for x or y channel.');
    }
    // Group data into series.
    // There is only one series without specified series encode.
    const series = S ? Array.from(group(index, (i) => S[i]).values()) : [index];
    const I = series.map((group) => group[0]).filter((i) => i !== undefined);
    // A group of data corresponds to one line.
    const xoffset = (((_a = x === null || x === void 0 ? void 0 : x.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(x)) || 0) / 2;
    const yoffset = (((_b = y === null || y === void 0 ? void 0 : y.getBandWidth) === null || _b === void 0 ? void 0 : _b.call(y)) || 0) / 2;
    const P = Array.from(series, (I) => {
        return I.map((i) => coordinate.map([+X[i] + xoffset, +Y[i] + yoffset]));
    });
    return [I, P, series];
};
const parallel = (index, scale, value, coordinate) => {
    // Extract all value for position[number] channels.
    const PV = Object.entries(value)
        .filter(([key]) => key.startsWith('position'))
        .map(([, value]) => value);
    // Because position channel is not strictly required in Line.props,
    // it should throw error with empty position values.
    if (PV.length === 0) {
        throw new Error('Missing encode for position channel.');
    }
    // Close the loop for radar(= parallel + polar) coordinate.
    if (isPolar(coordinate))
        PV.push(PV[0]);
    // One data corresponds to one line.
    const P = Array.from(index, (i) => {
        // Transform high dimension vector to a list of two-dimension vectors.
        // [a, b, c] -> [d, e, f, g, h, i]
        const vector = PV.map((pv) => +pv[i]);
        const vectors = coordinate.map(vector);
        // Two-dimension vectors are stored in a flat array, so extract them.
        // [d, e, f, g, h, i] -> [d, e], [f, g], [h, i]
        const points = [];
        for (let i = 0; i < vectors.length; i += 2) {
            points.push([vectors[i], vectors[i + 1]]);
        }
        return points;
    });
    return [index, P];
};
/**
 * Convert value for each channel to line shapes.
 */
export const Line = () => {
    return (index, scale, value, coordinate) => {
        const mark = isParallel(coordinate) ? parallel : line;
        return mark(index, scale, value, coordinate);
    };
};
Line.props = {
    defaultShape: 'line',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...baseGeometryChannels({ shapes: Object.keys(shape) }),
        { name: 'x' },
        { name: 'y' },
        { name: 'position', independent: true },
        { name: 'size' },
        { name: 'series', scale: 'band' },
    ],
    preInference: [
        ...basePreInference(),
        // !!!Note This order is very important.
        { type: MaybeGradient },
        { type: MaybeSeries },
    ],
    postInference: [...basePostInference(), ...tooltip1d(), ...tooltipXd()],
    interaction: {
        shareTooltip: true,
        seriesTooltip: true,
        crosshairs: true,
    },
};
//# sourceMappingURL=line.js.map