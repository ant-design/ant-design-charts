"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineX = void 0;
const util_1 = require("@antv/util");
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    line: shape_1.LineXY,
};
const LineX = (options) => {
    return (index, scale, value, coordinate) => {
        const { x: X } = value;
        const offset = (0, utils_1.createBandOffset)(scale, value, (0, util_1.deepMix)({ style: { bandOffset: 0 } }, options));
        const P = Array.from(index, (i) => {
            const p1 = [X[i], 1];
            const p2 = [X[i], 0];
            return [p1, p2].map((d) => coordinate.map(offset(d, i)));
        });
        return [index, P];
    };
};
exports.LineX = LineX;
exports.LineX.props = {
    defaultShape: 'line',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseAnnotationChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)(), { type: transform_1.MaybeTupleX }],
    postInference: [...(0, utils_1.basePostInference)()],
};
//# sourceMappingURL=lineX.js.map