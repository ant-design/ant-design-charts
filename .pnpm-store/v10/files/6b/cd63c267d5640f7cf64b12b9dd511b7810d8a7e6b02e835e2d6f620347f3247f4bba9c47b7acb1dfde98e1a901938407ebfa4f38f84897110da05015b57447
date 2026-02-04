/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
const resolveConflicts = (entries, cg) => {
    var _a, _b, _c;
    const mappedEntries = {};
    entries === null || entries === void 0 ? void 0 : entries.forEach((entry, i) => {
        mappedEntries[entry.v] = {
            i,
            indegree: 0,
            in: [],
            out: [],
            vs: [entry.v],
        };
        const tmp = mappedEntries[entry.v];
        if (entry.barycenter !== undefined) {
            tmp.barycenter = entry.barycenter;
            tmp.weight = entry.weight;
        }
    });
    (_a = cg.getAllEdges()) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
        const entryV = mappedEntries[e.source];
        const entryW = mappedEntries[e.target];
        if (entryV !== undefined && entryW !== undefined) {
            entryW.indegree++;
            entryV.out.push(mappedEntries[e.target]);
        }
    });
    const sourceSet = (_c = (_b = Object.values(mappedEntries)).filter) === null || _c === void 0 ? void 0 : _c.call(_b, (entry) => !entry.indegree);
    return doResolveConflicts(sourceSet);
};
const doResolveConflicts = (sourceSet) => {
    var _a, _b;
    const entries = [];
    const handleIn = (vEntry) => {
        return (uEntry) => {
            if (uEntry.merged)
                return;
            if (uEntry.barycenter === undefined ||
                vEntry.barycenter === undefined ||
                uEntry.barycenter >= vEntry.barycenter) {
                mergeEntries(vEntry, uEntry);
            }
        };
    };
    const handleOut = (vEntry) => {
        return (wEntry) => {
            wEntry['in'].push(vEntry);
            if (--wEntry.indegree === 0) {
                sourceSet.push(wEntry);
            }
        };
    };
    while (sourceSet === null || sourceSet === void 0 ? void 0 : sourceSet.length) {
        const entry = sourceSet.pop();
        entries.push(entry);
        (_a = entry['in'].reverse()) === null || _a === void 0 ? void 0 : _a.forEach((e) => handleIn(entry)(e));
        (_b = entry.out) === null || _b === void 0 ? void 0 : _b.forEach((e) => handleOut(entry)(e));
    }
    const filtered = entries.filter((entry) => !entry.merged);
    const keys = [
        'vs',
        'i',
        'barycenter',
        'weight',
    ];
    return filtered.map((entry) => {
        const picked = {};
        keys === null || keys === void 0 ? void 0 : keys.forEach((key) => {
            if (entry[key] === undefined)
                return;
            picked[key] = entry[key];
        });
        return picked;
    });
};
const mergeEntries = (target, source) => {
    var _a;
    let sum = 0;
    let weight = 0;
    if (target.weight) {
        sum += target.barycenter * target.weight;
        weight += target.weight;
    }
    if (source.weight) {
        sum += source.barycenter * source.weight;
        weight += source.weight;
    }
    target.vs = (_a = source.vs) === null || _a === void 0 ? void 0 : _a.concat(target.vs);
    target.barycenter = sum / weight;
    target.weight = weight;
    target.i = Math.min(source.i, target.i);
    source.merged = true;
};
export default resolveConflicts;
//# sourceMappingURL=resolve-conflicts.js.map