export function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}
/**
 * Collapses (or “folds”) one or more data fields into two
 * properties: `key` (contains the original data field name)
 * and `value` (contains the original data value.)
 */
export const Fold = (options) => {
    const { fields, key = 'key', value = 'value' } = options;
    return (data) => {
        if (isEmpty(fields))
            return data;
        return data.flatMap((d) => fields.map((f) => (Object.assign(Object.assign({}, d), { [key]: f, [value]: d[f] }))));
    };
};
Fold.props = {};
//# sourceMappingURL=fold.js.map