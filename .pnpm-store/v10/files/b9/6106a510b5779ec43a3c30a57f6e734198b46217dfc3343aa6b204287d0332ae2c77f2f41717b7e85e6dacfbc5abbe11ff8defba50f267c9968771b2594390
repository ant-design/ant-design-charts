export const addSubgraphConstraints = (g, cg, vs) => {
    const prev = {};
    let rootPrev;
    vs === null || vs === void 0 ? void 0 : vs.forEach((v) => {
        let child = g.getParent(v);
        let parent;
        let prevChild;
        while (child) {
            parent = g.getParent(child.id);
            if (parent) {
                prevChild = prev[parent.id];
                prev[parent.id] = child.id;
            }
            else {
                prevChild = rootPrev;
                rootPrev = child.id;
            }
            if (prevChild && prevChild !== child.id) {
                if (!cg.hasNode(prevChild)) {
                    cg.addNode({
                        id: prevChild,
                        data: {},
                    });
                }
                if (!cg.hasNode(child.id)) {
                    cg.addNode({
                        id: child.id,
                        data: {},
                    });
                }
                if (!cg.hasEdge(`e${prevChild}-${child.id}`)) {
                    cg.addEdge({
                        id: `e${prevChild}-${child.id}`,
                        source: prevChild,
                        target: child.id,
                        data: {},
                    });
                }
                return;
            }
            child = parent;
        }
    });
};
//# sourceMappingURL=add-subgraph-constraints.js.map