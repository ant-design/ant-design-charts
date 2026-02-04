"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    hollow: shape_1.PointHollow,
    hollowDiamond: shape_1.PointHollowDiamond,
    hollowHexagon: shape_1.PointHollowHexagon,
    hollowSquare: shape_1.PointHollowSquare,
    hollowTriangleDown: shape_1.PointHollowTriangleDown,
    hollowTriangle: shape_1.PointHollowTriangle,
    hollowBowtie: shape_1.PointHollowBowtie,
    hollowCircle: shape_1.PointHollowCircle,
    point: shape_1.PointShape,
    plus: shape_1.PointPlus,
    diamond: shape_1.PointDiamond,
    square: shape_1.PointSquare,
    triangle: shape_1.PointTriangle,
    hexagon: shape_1.PointHexagon,
    cross: shape_1.PointCross,
    bowtie: shape_1.PointBowtie,
    hyphen: shape_1.PointHyphen,
    line: shape_1.PointLine,
    tick: shape_1.PointTick,
    triangleDown: shape_1.PointTriangleDown,
    circle: shape_1.PointCircle,
};
/**
 * Convert value for each channel to point shapes.
 * Calc the bbox of each point based on x, y and r.
 * This is for allowing their radius can be affected by coordinate(e.g. fisheye).
 */
const Point = (options) => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y, x1: X1, y1: Y1, size: S, dx: DX, dy: DY } = value;
        const [width, height] = coordinate.getSize();
        const offset = (0, utils_1.createBandOffset)(scale, value, options);
        const xy = (i) => {
            const dx = +((DX === null || DX === void 0 ? void 0 : DX[i]) || 0);
            const dy = +((DY === null || DY === void 0 ? void 0 : DY[i]) || 0);
            const x = X1 ? (+X[i] + +X1[i]) / 2 : +X[i];
            const y = Y1 ? (+Y[i] + +Y1[i]) / 2 : +Y[i];
            const cx = x + dx;
            const cy = y + dy;
            return [cx, cy];
        };
        const P = S
            ? Array.from(index, (i) => {
                const [cx, cy] = xy(i);
                const r = +S[i];
                const a = r / width;
                const b = r / height;
                const p1 = [cx - a, cy - b];
                const p2 = [cx + a, cy + b];
                return [
                    coordinate.map(offset(p1, i)),
                    coordinate.map(offset(p2, i)),
                ];
            })
            : Array.from(index, (i) => [coordinate.map(offset(xy(i), i))]);
        return [index, P];
    };
};
exports.Point = Point;
exports.Point.props = {
    defaultShape: 'hollow',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'series', scale: 'band' },
        { name: 'size', quantitative: 'sqrt' },
        { name: 'dx', scale: 'identity' },
        { name: 'dy', scale: 'identity' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeZeroX },
        { type: transform_1.MaybeZeroY },
    ],
    postInference: [...(0, utils_1.basePostInference)(), { type: transform_1.MaybeSize }, ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=point.js.map