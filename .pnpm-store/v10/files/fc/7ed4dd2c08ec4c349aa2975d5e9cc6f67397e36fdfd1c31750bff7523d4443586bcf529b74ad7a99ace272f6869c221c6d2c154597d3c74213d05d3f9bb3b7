"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = exports.defined = void 0;
function defined(d) {
    return d !== undefined && d !== null && !Number.isNaN(d);
}
exports.defined = defined;
/**
 * Filter data by specified fields and filter callback for each fields.
 * It saves datum with every fields defined by default.
 */
const Filter = (options) => {
    const { callback = defined } = options;
    return (data) => data.filter(callback);
};
exports.Filter = Filter;
exports.Filter.props = {};
//# sourceMappingURL=filter.js.map