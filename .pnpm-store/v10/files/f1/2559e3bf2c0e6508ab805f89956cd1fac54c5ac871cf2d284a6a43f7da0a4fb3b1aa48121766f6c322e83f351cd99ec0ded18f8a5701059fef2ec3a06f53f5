var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { error } from '../utils/helper';
import { builtinlib } from '../lib/builtinlib';
export function useLibrary(namespace, publicLibrary) {
    const library = Object.assign(Object.assign({}, builtinlib()), publicLibrary);
    const create = (type) => {
        if (typeof type !== 'string')
            return type;
        const key = `${namespace}.${type}`;
        return library[key] || error(`Unknown Component: ${key}`);
    };
    const use = (options, context) => {
        const { type } = options, rest = __rest(options, ["type"]);
        if (!type)
            error(`Plot type is required!`);
        const currentLibrary = create(type);
        return currentLibrary === null || currentLibrary === void 0 ? void 0 : currentLibrary(rest, context);
    };
    return [use, create];
}
export function documentOf(library) {
    const { canvas, group } = library;
    return ((canvas === null || canvas === void 0 ? void 0 : canvas.document) ||
        (group === null || group === void 0 ? void 0 : group.ownerDocument) ||
        error(`Cannot find library document`));
}
//# sourceMappingURL=library.js.map