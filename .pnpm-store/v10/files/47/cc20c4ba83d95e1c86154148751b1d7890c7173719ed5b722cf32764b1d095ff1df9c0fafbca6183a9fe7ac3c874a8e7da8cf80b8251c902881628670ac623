"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackEnter = void 0;
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("./utils/helper");
/**
 * Group marks by channels into groups and stacking their enterDelay
 * to make marks show up groups by groups.
 * It will update enterDelay channel for each mark by its enterDuration and group.
 * @todo Support orderBy.
 * @todo Sort among groups(e.g. reverse).
 * @todo Stack enter in groups rather than between groups?
 * @todo Auto inter this statistic for scaleInY animation in stacked interval?
 * @todo All the groups shared the enterDuration?
 */
const StackEnter = (options) => {
    const { groupBy = ['x'], reducer = (I, V) => V[I[0]], orderBy = null, reverse = false, duration, } = options;
    return (I, mark) => {
        const { encode } = mark;
        // Extract group information by each specified channel,
        // and skip if all values of channels are empty.
        const by = Array.isArray(groupBy) ? groupBy : [groupBy];
        const groupEntries = by.map((k) => [k, (0, helper_1.columnOf)(encode, k)[0]]);
        if (groupEntries.length === 0)
            return [I, mark];
        // Nest group index and flatten them in right order among timeline.
        // [[1, 2, 3, 4, 5, 6]] ->
        // [[1, 2, 3], [4, 5, 6]] ->
        // [[1], [2], [3], [4], [5], [6]]
        let groups = [I];
        for (const [, V] of groupEntries) {
            const newGroups = [];
            for (const I of groups) {
                const G = Array.from((0, d3_array_1.group)(I, (i) => V[i]).values());
                // @todo sort by x.
                newGroups.push(...G);
            }
            groups = newGroups;
        }
        // const {color} = encode;
        if (orderBy) {
            const [V] = (0, helper_1.columnOf)(encode, orderBy);
            if (V)
                groups.sort((I, J) => reducer(I, V) - reducer(J, V));
            if (reverse)
                groups.reverse();
        }
        // Stack delay for each group.
        const t = (duration || 3000) / groups.length;
        const [ED] = duration
            ? [(0, helper_1.constant)(I, t)] // If specified duration, generate enter duration for each.
            : (0, helper_1.maybeColumnOf)(encode, 'enterDuration', (0, helper_1.constant)(I, t));
        const [EDL] = (0, helper_1.maybeColumnOf)(encode, 'enterDelay', (0, helper_1.constant)(I, 0));
        const newEnterDelay = new Array(I.length);
        for (let i = 0, pd = 0; i < groups.length; i++) {
            const I = groups[i];
            const maxDuration = (0, d3_array_1.max)(I, (i) => +ED[i]);
            for (const j of I)
                newEnterDelay[j] = +EDL[j] + pd;
            pd += maxDuration;
        }
        return [
            I,
            (0, util_1.deepMix)({}, mark, {
                encode: {
                    enterDuration: (0, helper_1.visualColumn)(ED),
                    enterDelay: (0, helper_1.visualColumn)(newEnterDelay),
                },
            }),
        ];
    };
};
exports.StackEnter = StackEnter;
exports.StackEnter.props = {};
//# sourceMappingURL=stackEnter.js.map