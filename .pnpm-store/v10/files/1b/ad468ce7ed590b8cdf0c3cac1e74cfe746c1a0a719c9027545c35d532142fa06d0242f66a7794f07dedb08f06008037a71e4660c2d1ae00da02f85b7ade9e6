import { greedyFAS } from './greedy-fas';
const run = (g, acyclicer) => {
    const weightFn = (g) => {
        return (e) => e.data.weight || 1;
    };
    const fas = acyclicer === 'greedy' ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
    fas === null || fas === void 0 ? void 0 : fas.forEach((e) => {
        const label = e.data;
        g.removeEdge(e.id);
        label.forwardName = e.data.name;
        label.reversed = true;
        g.addEdge({
            id: e.id,
            source: e.target,
            target: e.source,
            data: Object.assign({}, label),
        });
    });
};
const dfsFAS = (g) => {
    const fas = [];
    const stack = {};
    const visited = {};
    const dfs = (v) => {
        if (visited[v]) {
            return;
        }
        visited[v] = true;
        stack[v] = true;
        g.getRelatedEdges(v, 'out').forEach((e) => {
            if (stack[e.target]) {
                fas.push(e);
            }
            else {
                dfs(e.target);
            }
        });
        delete stack[v];
    };
    g.getAllNodes().forEach((n) => dfs(n.id));
    return fas;
};
const undo = (g) => {
    g.getAllEdges().forEach((e) => {
        const label = e.data;
        if (label.reversed) {
            g.removeEdge(e.id);
            const forwardName = label.forwardName;
            delete label.reversed;
            delete label.forwardName;
            g.addEdge({
                id: e.id,
                source: e.target,
                target: e.source,
                data: Object.assign(Object.assign({}, label), { forwardName }),
            });
        }
    });
};
export { run, undo };
//# sourceMappingURL=acyclic.js.map