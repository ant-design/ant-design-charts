export function defined(d) {
    return d !== undefined && d !== null && !Number.isNaN(d);
}
/**
 * Filter data by specified fields and filter callback for each fields.
 * It saves datum with every fields defined by default.
 */
export const Filter = (options) => {
    const { callback = defined } = options;
    return (data) => data.filter(callback);
};
Filter.props = {};
//# sourceMappingURL=filter.js.map