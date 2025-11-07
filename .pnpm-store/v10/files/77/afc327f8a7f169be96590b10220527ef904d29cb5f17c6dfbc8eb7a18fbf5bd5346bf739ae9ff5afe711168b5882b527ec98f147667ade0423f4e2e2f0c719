"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const shape_1 = require("../shape");
const utils_1 = require("./utils");
const shape = {
    polygon: shape_1.PolygonShape,
    ribbon: shape_1.PolygonRibbon,
};
/**
 * Convert value for each channel to polygon shapes.
 */
const Polygon = () => {
    return (index, scale, value, coordinate) => {
        const Xn = Object.entries(value)
            .filter(([key]) => key.startsWith('x'))
            .map(([, value]) => value);
        const Yn = Object.entries(value)
            .filter(([key]) => key.startsWith('y'))
            .map(([, value]) => value);
        const P = index.map((i) => {
            const Pn = [];
            for (let j = 0; j < Xn.length; j++) {
                const x = Xn[j][i];
                if (x === undefined)
                    break;
                const y = Yn[j][i];
                Pn.push(coordinate.map([+x, +y]));
            }
            return Pn;
        });
        return [index, P];
    };
};
exports.Polygon = Polygon;
exports.Polygon.props = {
    defaultShape: 'polygon',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)()],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=polygon.js.map