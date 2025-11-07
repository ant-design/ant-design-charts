"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineY = void 0;
const util_1 = require("@antv/util");
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const shape = {
    line: shape_1.LineXY,
};
const LineY = (options) => {
    return (index, scale, value, coordinate) => {
        const { y: Y } = value;
        const offset = (0, utils_1.createBandOffset)(scale, value, (0, util_1.deepMix)({ style: { bandOffset: 0 } }, options));
        const P = Array.from(index, (i) => {
            const p1 = [0, Y[i]];
            const p2 = [1, Y[i]];
            return [p1, p2].map((d) => coordinate.map(offset(d, i)));
        });
        return [index, P];
    };
};
exports.LineY = LineY;
exports.LineY.props = {
    defaultShape: 'line',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseAnnotationChannels)({ shapes: Object.keys(shape) }),
        { name: 'y', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)(), { type: transform_1.MaybeTupleY }],
    postInference: [...(0, utils_1.basePostInference)()],
};
//# sourceMappingURL=lineY.js.map