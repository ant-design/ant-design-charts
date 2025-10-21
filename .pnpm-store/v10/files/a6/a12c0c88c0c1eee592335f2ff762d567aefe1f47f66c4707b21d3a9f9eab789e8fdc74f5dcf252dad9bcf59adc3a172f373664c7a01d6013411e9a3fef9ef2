"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentOf = exports.useLibrary = void 0;
const helper_1 = require("../utils/helper");
const builtinlib_1 = require("../lib/builtinlib");
function useLibrary(namespace, publicLibrary) {
    const library = Object.assign(Object.assign({}, (0, builtinlib_1.builtinlib)()), publicLibrary);
    const create = (type) => {
        if (typeof type !== 'string')
            return type;
        const key = `${namespace}.${type}`;
        return library[key] || (0, helper_1.error)(`Unknown Component: ${key}`);
    };
    const use = (options, context) => {
        const { type } = options, rest = __rest(options, ["type"]);
        if (!type)
            (0, helper_1.error)(`Plot type is required!`);
        const currentLibrary = create(type);
        return currentLibrary === null || currentLibrary === void 0 ? void 0 : currentLibrary(rest, context);
    };
    return [use, create];
}
exports.useLibrary = useLibrary;
function documentOf(library) {
    const { canvas, group } = library;
    return ((canvas === null || canvas === void 0 ? void 0 : canvas.document) ||
        (group === null || group === void 0 ? void 0 : group.ownerDocument) ||
        (0, helper_1.error)(`Cannot find library document`));
}
exports.documentOf = documentOf;
//# sourceMappingURL=library.js.map