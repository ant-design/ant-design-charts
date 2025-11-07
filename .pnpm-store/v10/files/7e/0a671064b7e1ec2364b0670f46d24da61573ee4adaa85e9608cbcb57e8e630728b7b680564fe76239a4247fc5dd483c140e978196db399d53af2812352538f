"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = exports.defined = void 0;
function defined(d) {
    return d !== undefined && d !== null && !Number.isNaN(d);
}
exports.defined = defined;
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