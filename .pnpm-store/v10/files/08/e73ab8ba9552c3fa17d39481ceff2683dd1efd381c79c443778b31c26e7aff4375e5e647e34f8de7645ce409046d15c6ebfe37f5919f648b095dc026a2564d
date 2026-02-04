"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeY = void 0;
const shape_1 = require("../shape");
const transform_1 = require("../transform");
const utils_1 = require("./utils");
const range_1 = require("./range");
const shape = {
    range: shape_1.RangeShape,
};
const RangeY = () => {
    return (0, range_1.AbstractRange)({ extendX: true });
};
exports.RangeY = RangeY;
exports.RangeY.props = {
    defaultShape: 'range',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseAnnotationChannels)({ shapes: Object.keys(shape) }),
        { name: 'y', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)(), { type: transform_1.MaybeDefaultY }],
    postInference: [...(0, utils_1.basePostInference)()],
};
//# sourceMappingURL=rangeY.js.map