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
import { extent } from '@antv/vendor/d3-array';
import { columnOf, column } from './utils/helper';
import { createGroups } from './utils/order';
/**
 * The SymmetryY transform apply offset for y channels, say to transform
 * them to be symmetry.
 */
export const SymmetryY = (options = {}) => {
    const { groupBy = 'x' } = options;
    return (I, mark) => {
        const { encode } = mark;
        const { x } = encode, rest = __rest(encode, ["x"]);
        // Extract and create new channels starts with y, such as y, y1.
        const Yn = Object.entries(rest)
            .filter(([k]) => k.startsWith('y'))
            .map(([k]) => [k, columnOf(encode, k)[0]]);
        const newYn = Yn.map(([k]) => [k, new Array(I.length)]);
        // Group marks into series by specified keys.
        const groups = createGroups(groupBy, I, mark);
        const MY = new Array(groups.length);
        for (let i = 0; i < groups.length; i++) {
            const I = groups[i];
            const Y = I.flatMap((i) => Yn.map(([, V]) => +V[i]));
            const [minY, maxY] = extent(Y);
            MY[i] = (minY + maxY) / 2;
        }
        const maxMiddleY = Math.max(...MY);
        for (let m = 0; m < groups.length; m++) {
            const offset = maxMiddleY - MY[m];
            const I = groups[m];
            for (const i of I) {
                for (let j = 0; j < Yn.length; j++) {
                    const [, V] = Yn[j];
                    const [, newV] = newYn[j];
                    newV[i] = +V[i] + offset;
                }
            }
        }
        return [
            I,
            deepMix({}, mark, {
                encode: Object.fromEntries(newYn.map(([k, v]) => [k, column(v, columnOf(encode, k)[1])])),
            }),
        ];
    };
};
SymmetryY.props = {};
//# sourceMappingURL=symmetryY.js.map