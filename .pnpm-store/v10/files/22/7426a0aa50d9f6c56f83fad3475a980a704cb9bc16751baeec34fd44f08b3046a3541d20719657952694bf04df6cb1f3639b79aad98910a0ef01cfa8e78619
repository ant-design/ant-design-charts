import { normalizeFields } from './utils/fields';
/**
 * Immutable data sort by specified fields.
 */
export const SortBy = (options) => {
    const { fields: F = [] } = options;
    const normalizedF = normalizeFields(F, true);
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
SortBy.props = {};
//# sourceMappingURL=sortBy.js.map