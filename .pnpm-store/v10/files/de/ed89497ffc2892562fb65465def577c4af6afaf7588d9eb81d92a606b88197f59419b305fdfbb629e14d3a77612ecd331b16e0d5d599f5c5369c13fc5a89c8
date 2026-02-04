"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    cell: shape_1.CellShape,
    hollow: shape_1.CellHollow,
};
/**
 * Convert value for each channel to Cell shapes.
 * Calc the bbox of each Cell based on x, y and r.
 * This is for allowing their radius can be affected by coordinate(e.g. fisheye).
 */
const Cell = () => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y } = value;
        const x = scale.x;
        const y = scale.y;
        const P = Array.from(index, (i) => {
            const width = x.getBandWidth(x.invert(+X[i]));
            const height = y.getBandWidth(y.invert(+Y[i]));
            const x1 = +X[i];
            const y1 = +Y[i];
            const p1 = [x1, y1];
            const p2 = [x1 + width, y1];
            const p3 = [x1 + width, y1 + height];
            const p4 = [x1, y1 + height];
            return [p1, p2, p3, p4].map((d) => coordinate.map(d));
        });
        return [index, P];
    };
};
exports.Cell = Cell;
exports.Cell.props = {
    defaultShape: 'cell',
    defaultLabelShape: 'label',
    shape,
    composite: false,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true, scale: 'band' },
        { name: 'y', required: true, scale: 'band' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeZeroX },
        { type: transform_1.MaybeZeroY },
        { type: transform_1.MaybeZeroPadding },
    ],
    postInference: [...(0, utils_1.basePostInference)(), ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=cell.js.map