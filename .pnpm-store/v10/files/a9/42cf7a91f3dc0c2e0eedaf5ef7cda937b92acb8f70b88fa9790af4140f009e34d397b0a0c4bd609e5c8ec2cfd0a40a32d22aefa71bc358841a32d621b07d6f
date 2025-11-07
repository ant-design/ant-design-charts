"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = exports.AbstractRange = void 0;
const shape_1 = require("../shape");
const utils_1 = require("./utils");
function extend(channel, extended, value, scale) {
    if (extended)
        return () => [0, 1];
    const { [channel]: C, [`${channel}1`]: C1 } = value;
    return (i) => {
        var _a;
        const offset = ((_a = scale.getBandWidth) === null || _a === void 0 ? void 0 : _a.call(scale, scale.invert(+C1[i]))) || 0;
        return [C[i], C1[i] + offset];
    };
}
function AbstractRange(options = {}) {
    const { extendX = false, extendY = false } = options;
    return (index, scale, value, coordinate) => {
        const x = extend('x', extendX, value, scale.x);
        const y = extend('y', extendY, value, scale.y);
        const P = Array.from(index, (i) => {
            const [x1, x2] = x(i);
            const [y1, y2] = y(i);
            const p1 = [x1, y1];
            const p2 = [x2, y1];
            const p3 = [x2, y2];
            const p4 = [x1, y2];
            return [p1, p2, p3, p4].map((d) => coordinate.map(d));
        });
        return [index, P];
    };
}
exports.AbstractRange = AbstractRange;
const shape = { range: shape_1.RangeShape };
const Range = () => {
    return AbstractRange();
};
exports.Range = Range;
exports.Range.props = {
    defaultShape: 'range',
    defaultLabelShape: 'label',
    composite: false,
    shape,
    channels: [
        ...(0, utils_1.baseAnnotationChannels)({ shapes: Object.keys(shape) }),
        { name: 'x', required: true },
        { name: 'y', required: true },
    ],
    preInference: [...(0, utils_1.basePreInference)()],
    postInference: [...(0, utils_1.basePostInference)()],
};
//# sourceMappingURL=range.js.map