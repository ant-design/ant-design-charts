// deep first search with both order low for pre, lim for post
const dfsBothOrder = (g) => {
    const result = {};
    let lim = 0;
    const dfs = (v) => {
        const low = lim;
        g.getChildren(v).forEach((n) => dfs(n.id));
        result[v] = { low, lim: lim++ };
    };
    g.getRoots().forEach((n) => dfs(n.id));
    return result;
};
// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
const findPath = (g, postorderNums, v, w) => {
    var _a, _b;
    const vPath = [];
    const wPath = [];
    const low = Math.min(postorderNums[v].low, postorderNums[w].low);
    const lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
    let parent;
    let lca;
    // Traverse up from v to find the LCA
    parent = v;
    do {
        parent = (_a = g.getParent(parent)) === null || _a === void 0 ? void 0 : _a.id;
        vPath.push(parent);
    } while (parent &&
        (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
    lca = parent;
    // Traverse from w to LCA
    parent = w;
    while (parent && parent !== lca) {
        wPath.push(parent);
        parent = (_b = g.getParent(parent)) === null || _b === void 0 ? void 0 : _b.id;
    }
    return { lca, path: vPath.concat(wPath.reverse()) };
};
export const parentDummyChains = (g, dummyChains) => {
    const postorderNums = dfsBothOrder(g);
    dummyChains.forEach((startV) => {
        var _a, _b;
        let v = startV;
        let node = g.getNode(v);
        const originalEdge = node.data.originalEdge;
        if (!originalEdge)
            return;
        const pathData = findPath(g, postorderNums, originalEdge.source, originalEdge.target);
        const path = pathData.path;
        const lca = pathData.lca;
        let pathIdx = 0;
        let pathV = path[pathIdx];
        let ascending = true;
        while (v !== originalEdge.target) {
            node = g.getNode(v);
            if (ascending) {
                while (pathV !== lca &&
                    ((_a = g.getNode(pathV)) === null || _a === void 0 ? void 0 : _a.data.maxRank) < node.data.rank) {
                    pathIdx++;
                    pathV = path[pathIdx];
                }
                if (pathV === lca) {
                    ascending = false;
                }
            }
            if (!ascending) {
                while (pathIdx < path.length - 1 &&
                    ((_b = g.getNode(path[pathIdx + 1])) === null || _b === void 0 ? void 0 : _b.data.minRank) <= node.data.rank) {
                    pathIdx++;
                }
                pathV = path[pathIdx];
            }
            if (g.hasNode(pathV)) {
                g.setParent(v, pathV);
            }
            v = g.getSuccessors(v)[0].id;
        }
    });
};
//# sourceMappingURL=parent-dummy-chains.js.map