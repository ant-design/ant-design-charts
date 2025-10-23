export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
/**
 * Immutable data rename by specified fields.
 */
export const Rename = (options) => {
    return (data) => {
        if (!options || isEmpty(options))
            return data;
        const rename = (v) => Object.entries(v).reduce((datum, [key, value]) => ((datum[options[key] || key] = value), datum), {});
        return data.map(rename);
    };
};
Rename.props = {};
//# sourceMappingURL=rename.js.map