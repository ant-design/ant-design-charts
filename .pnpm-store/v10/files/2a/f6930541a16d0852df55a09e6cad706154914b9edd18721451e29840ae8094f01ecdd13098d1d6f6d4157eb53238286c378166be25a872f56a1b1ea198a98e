"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beeswarm = void 0;
const d3_force_1 = require("@antv/vendor/d3-force");
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
const DEFAULT_RADIUS = 4;
const ITERATIONS = 200;
/**
 * 蜂群图 (Beeswarm)
 */
const Beeswarm = (options) => {
    return (index, scale, value, coordinate) => {
        const { x: X, y: Y, size: S } = value;
        if (!X.length || !Y.length)
            return [index, Y.map(() => [[]])];
        const [width, height] = coordinate.getSize();
        const offset = (0, utils_1.createBandOffset)(scale, value, options);
        const nodes = Array.from(index, (i) => {
            const x0 = +X[i] * width;
            const y0 = +Y[i] * height;
            const r = +S[i] || DEFAULT_RADIUS;
            return { i, x: x0, y: y0, r };
        });
        // 2. forceSimulation
        const sim = (0, d3_force_1.forceSimulation)(nodes)
            .stop()
            .force('collide', (0, d3_force_1.forceCollide)()
            .radius((d) => d.r + 1)
            .strength(1));
        // 主轴吸附
        sim.force('x', (0, d3_force_1.forceX)((d) => d.x).strength(0));
        sim.force('y', (0, d3_force_1.forceY)((d) => d.y).strength(5));
        for (let i = 0; i < ITERATIONS; i++)
            sim.tick();
        sim.stop();
        const xy = (i) => {
            const n = nodes.find((d) => d.i === i);
            return [n.x / width, n.y / height];
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
exports.Beeswarm = Beeswarm;
exports.Beeswarm.props = {
    defaultShape: 'point',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
        { name: 'series', scale: 'band' },
        { name: 'size', quantitative: 'sqrt' },
    ],
    preInference: [
        ...(0, utils_1.basePreInference)(),
        { type: transform_1.MaybeZeroX },
        { type: transform_1.MaybeZeroY },
    ],
    postInference: [...(0, utils_1.basePostInference)(), { type: transform_1.MaybeSize }, ...(0, utils_1.tooltip2d)()],
};
//# sourceMappingURL=beeswarm.js.map