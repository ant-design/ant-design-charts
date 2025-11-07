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
exports.DodgeX = void 0;
const util_1 = require("@antv/util");
const helper_1 = require("./utils/helper");
const order_1 = require("./utils/order");
/**
 * The dodge group marks into series by color or series channel,
 * and then produce new series channel for each series by specified order,
 * say to form horizontal "columns" by specified channels.
 */
const DodgeX = (options = {}) => {
    const { groupBy = 'x', reverse = false, orderBy, padding } = options, rest = __rest(options, ["groupBy", "reverse", "orderBy", "padding"]);
    return (I, mark) => {
        const { data, encode, scale } = mark;
        const { series: scaleSeries } = scale;
        const [Y] = (0, helper_1.columnOf)(encode, 'y');
        const [S] = (0, helper_1.maybeColumnOf)(encode, 'series', 'color');
        const domainSeries = (0, order_1.domainOf)(S, scaleSeries);
        const newMark = (0, util_1.deepMix)({}, mark, {
            scale: {
                series: {
                    domain: domainSeries,
                    paddingInner: padding,
                },
            },
        });
        // Create groups and apply specified order for each group.
        const groups = (0, order_1.createGroups)(groupBy, I, mark);
        const createComparator = (0, order_1.normalizeComparator)(orderBy);
        if (!createComparator) {
            return [I, (0, util_1.deepMix)(newMark, { encode: { series: (0, helper_1.column)(S) } })];
        }
        // Sort and Update series for each mark related to series domain.
        const comparator = createComparator(data, Y, S);
        if (comparator)
            (0, order_1.applyOrder)(groups, comparator);
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
            (0, util_1.deepMix)(newMark, {
                encode: {
                    series: (0, helper_1.column)(orderBy ? newS : S),
                },
            }),
        ];
    };
};
exports.DodgeX = DodgeX;
exports.DodgeX.props = {};
//# sourceMappingURL=dodgeX.js.map