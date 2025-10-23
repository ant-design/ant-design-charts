"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KDE = exports.defined = void 0;
const pdfast_1 = __importDefault(require("pdfast"));
const d3_array_1 = require("@antv/vendor/d3-array");
function defined(d) {
    return d !== undefined && d !== null && !Number.isNaN(d);
}
exports.defined = defined;
/**
 * Kernel Density Estimation base on [pdfast](https://www.npmjs.com/package/pdfast),
 * generating probability density function (pdf) using triangular kernel,
 * optimized to run in O(N + K).
 */
const KDE = (options) => {
    const { field, groupBy, as = ['y', 'size'], min, max, size = 10, width, } = options;
    const [yField, sizeField] = as;
    return (data) => {
        const gs = Array.from((0, d3_array_1.group)(data, (d) => groupBy.map((gb) => d[gb]).join('-')).values());
        return gs.map((g) => {
            const pdfResult = pdfast_1.default.create(g.map((i) => i[field]), {
                min,
                max,
                size,
                width,
            });
            const _y = pdfResult.map((result) => result.x);
            const _size = pdfResult.map((result) => result.y);
            return Object.assign(Object.assign({}, g[0]), { [yField]: _y, [sizeField]: _size });
        });
    };
};
exports.KDE = KDE;
exports.KDE.props = {};
//# sourceMappingURL=kde.js.map