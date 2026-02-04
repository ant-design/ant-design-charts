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
import { deepMix } from '@antv/util';
import { column } from './utils/helper';
/**
 * Infer key for every element.
 */
export const MaybeKey = () => {
    return (I, mark) => {
        const { encode } = mark;
        const { key } = encode, rest = __rest(encode, ["key"]);
        if (key !== undefined)
            return [I, mark];
        const values = Object.values(rest).map(({ value }) => value);
        const K = I.map((i) => values
            .filter(Array.isArray)
            .map((V) => V[i])
            .join('-'));
        return [I, deepMix({}, mark, { encode: { key: column(K) } })];
    };
};
MaybeKey.props = {};
//# sourceMappingURL=maybeKey.js.map