"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fold = exports.isEmpty = void 0;
function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}
exports.isEmpty = isEmpty;
/**
 * Collapses (or “folds”) one or more data fields into two
 * properties: `key` (contains the original data field name)
 * and `value` (contains the original data value.)
 */
const Fold = (options) => {
    const { fields, key = 'key', value = 'value' } = options;
    return (data) => {
        if (isEmpty(fields))
            return data;
        return data.flatMap((d) => fields.map((f) => (Object.assign(Object.assign({}, d), { [key]: f, [value]: d[f] }))));
    };
};
exports.Fold = Fold;
exports.Fold.props = {};
//# sourceMappingURL=fold.js.map