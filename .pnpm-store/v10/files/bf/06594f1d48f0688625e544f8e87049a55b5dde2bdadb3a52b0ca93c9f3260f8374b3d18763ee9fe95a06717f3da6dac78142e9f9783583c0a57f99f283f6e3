"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBy = void 0;
const fields_1 = require("./utils/fields");
/**
 * Immutable data sort by specified fields.
 */
const SortBy = (options) => {
    const { fields: F = [] } = options;
    const normalizedF = (0, fields_1.normalizeFields)(F, true);
    return (data) => {
        const comparator = (a, b) => normalizedF.reduce((ret, [field, order = true]) => {
            if (ret !== 0) {
                return ret;
            }
            if (order) {
                return a[field] < b[field] ? -1 : +(a[field] !== b[field]);
            }
            else {
                return a[field] > b[field] ? -1 : +(a[field] !== b[field]);
            }
        }, 0);
        return [...data].sort(comparator);
    };
};
exports.SortBy = SortBy;
exports.SortBy.props = {};
//# sourceMappingURL=sortBy.js.map