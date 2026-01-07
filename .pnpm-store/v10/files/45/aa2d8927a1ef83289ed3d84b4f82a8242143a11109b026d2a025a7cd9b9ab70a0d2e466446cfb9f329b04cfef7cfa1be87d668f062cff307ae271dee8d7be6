"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
exports.defined = defined;
function defined(d) {
    return d !== undefined && d !== null && !Number.isNaN(d);
}
/**
 * Sort data similar with Array.prototypo.sort.
 */
const Sort = (options) => {
    const { callback } = options;
    return (data) => (Array.isArray(data) ? [...data].sort(callback) : data);
};
exports.Sort = Sort;
exports.Sort.props = {};
//# sourceMappingURL=sort.js.map