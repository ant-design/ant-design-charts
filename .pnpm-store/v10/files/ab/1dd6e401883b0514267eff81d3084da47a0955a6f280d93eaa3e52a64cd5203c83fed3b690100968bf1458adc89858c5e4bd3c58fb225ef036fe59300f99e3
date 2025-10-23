"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rename = exports.isEmpty = void 0;
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
exports.isEmpty = isEmpty;
/**
 * Immutable data rename by specified fields.
 */
const Rename = (options) => {
    return (data) => {
        if (!options || isEmpty(options))
            return data;
        const rename = (v) => Object.entries(v).reduce((datum, [key, value]) => ((datum[options[key] || key] = value), datum), {});
        return data.map(rename);
    };
};
exports.Rename = Rename;
exports.Rename.props = {};
//# sourceMappingURL=rename.js.map