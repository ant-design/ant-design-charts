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
import { column, columnOf, maybeColumnOf } from './utils/helper';
import { createGroups, normalizeComparator, applyOrder, domainOf, } from './utils/order';
/**
 * The dodge group marks into series by color or series channel,
 * and then produce new series channel for each series by specified order,
 * say to form horizontal "columns" by specified channels.
 */
export const DodgeX = (options = {}) => {
    const { groupBy = 'x', reverse = false, orderBy, padding } = options, rest = __rest(options, ["groupBy", "reverse", "orderBy", "padding"]);
    return (I, mark) => {
        const { data, encode, scale } = mark;
        const { series: scaleSeries } = scale;
        const [Y] = columnOf(encode, 'y');
        const [S] = maybeColumnOf(encode, 'series', 'color');
        const domainSeries = domainOf(S, scaleSeries);
        const newMark = deepMix({}, mark, {
            scale: {
                series: {
                    domain: domainSeries,
                    paddingInner: padding,
                },
            },
        });
        // Create groups and apply specified order for each group.
        const groups = createGroups(groupBy, I, mark);
        const createComparator = normalizeComparator(orderBy);
        if (!createComparator) {
            return [I, deepMix(newMark, { encode: { series: column(S) } })];
        }
        // Sort and Update series for each mark related to series domain.
        const comparator = createComparator(data, Y, S);
        if (comparator)
            applyOrder(groups, comparator);
        const newS = new Array(I.length);
        for (const G of groups) {
            if (reverse)
                G.reverse();
            for (let i = 0; i < G.length; i++) {
                newS[G[i]] = domainSeries[i];
            }
        }
        return [
            I,
            deepMix(newMark, {
                encode: {
                    series: column(orderBy ? newS : S),
                },
            }),
        ];
    };
};
DodgeX.props = {};
//# sourceMappingURL=dodgeX.js.map