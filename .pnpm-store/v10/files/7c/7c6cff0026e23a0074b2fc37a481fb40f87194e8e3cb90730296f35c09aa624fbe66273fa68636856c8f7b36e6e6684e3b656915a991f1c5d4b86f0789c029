"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeFields = void 0;
/**
 *
 * @description Converts a random format array into a regular two-dimensional array
 * @example ['a', 'b', ['c', value]] => [['a', defaultValue], ['b', defaultValue], ['c', value]]
 */
function normalizeFields(fields, defaultValue) {
    return fields.map((d) => {
        if (Array.isArray(d)) {
            const [field, value = defaultValue] = d;
            return [field, value];
        }
        return [d, defaultValue];
    });
}
exports.normalizeFields = normalizeFields;
//# sourceMappingURL=fields.js.map