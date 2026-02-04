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
export const Pick = (options) => {
    const { fields } = options;
    return (data) => data.map((d) => pick(d, fields));
};
Pick.props = {};
//# sourceMappingURL=pick.js.map