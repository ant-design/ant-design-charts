"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegendContinuousSize = void 0;
const utils_1 = require("./utils");
const legendContinuous_1 = require("./legendContinuous");
const LegendContinuousSize = (options) => {
    return (context) => {
        const { scales } = context;
        const sizeScale = (0, utils_1.scaleOf)(scales, 'size');
        return (0, legendContinuous_1.LegendContinuous)(Object.assign({}, {
            type: 'size',
            data: sizeScale.getTicks().map((value, index) => ({
                value,
                label: String(value),
            })),
        }, options))(context);
    };
};
exports.LegendContinuousSize = LegendContinuousSize;
exports.LegendContinuousSize.props = Object.assign(Object.assign({}, legendContinuous_1.LegendContinuous.props), { defaultPosition: 'top', defaultOrientation: 'horizontal' });
//# sourceMappingURL=legendContinuousSize.js.map