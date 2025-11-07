"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pick = void 0;
function pick(v, fields = []) {
    return fields.reduce((datum, field) => {
        // Pick the data deeply.
        if (field in v) {
            datum[field] = v[field];
        }
        return datum;
    }, {});
}
/**
 * Immutable data pick by specified fields.
 */
const Pick = (options) => {
    const { fields } = options;
    return (data) => data.map((d) => pick(d, fields));
};
exports.Pick = Pick;
exports.Pick.props = {};
//# sourceMappingURL=pick.js.map