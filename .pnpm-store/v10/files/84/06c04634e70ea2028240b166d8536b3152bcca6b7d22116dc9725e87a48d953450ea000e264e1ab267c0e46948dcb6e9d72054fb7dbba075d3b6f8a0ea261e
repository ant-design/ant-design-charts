"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const shape_1 = require("../shape");
const utils_1 = require("./utils");
const shape = {
    path: shape_1.PathShape,
    hollow: shape_1.PathHollow,
};
/**
 * Draw a path.
 */
const Path = (options) => {
    return (index, scale, value, coordinate) => {
        // The points is meaning less for path mark,
        // because the position of path shapes specified
        // by the d option. So set [0, 0] for render pipeline.
        return [index, index.map(() => [[0, 0]])];
    };
};
exports.Path = Path;
exports.Path.props = {
    defaultShape: 'path',
    defaultLabelShape: 'label',
    shape,
    composite: false,
    channels: [
        ...(0, utils_1.baseGeometryChannels)({ shapes: Object.keys(shape) }),
        { name: 'd', scale: 'identity' },
    ],
    preInference: [...(0, utils_1.basePreInference)()],
    postInference: [...(0, utils_1.basePostInference)()],
};
//# sourceMappingURL=path.js.map