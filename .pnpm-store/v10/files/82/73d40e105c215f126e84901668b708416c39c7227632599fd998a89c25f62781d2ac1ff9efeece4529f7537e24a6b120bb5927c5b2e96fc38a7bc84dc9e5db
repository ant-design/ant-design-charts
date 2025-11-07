"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = exports.hierarchyFunction = void 0;
const d3_hierarchy_1 = require("@antv/vendor/d3-hierarchy");
const hierarchyFunction = (layoutFunction) => (options) => {
    return (data) => {
        const { field = 'value', nodeSize, separation, sortBy, as = ['x', 'y'], } = options;
        const [x, y] = as;
        // Process root data.
        const root = (0, d3_hierarchy_1.hierarchy)(data, (d) => d.children)
            .sum((d) => d[field])
            .sort(sortBy);
        // Layout
        const c = layoutFunction();
        c.size([1, 1]);
        if (nodeSize)
            c.nodeSize(nodeSize);
        if (separation)
            c.separation(separation);
        c(root);
        const nodes = [];
        root.each((node) => {
            node[x] = node.x;
            node[y] = node.y;
            node.name = node.data.name;
            nodes.push(node);
        });
        const edges = root.links();
        edges.forEach((edge) => {
            edge[x] = [edge.source[x], edge.target[x]];
            edge[y] = [edge.source[y], edge.target[y]];
        });
        return { nodes, edges };
    };
};
exports.hierarchyFunction = hierarchyFunction;
const Cluster = (options) => {
    return (0, exports.hierarchyFunction)(d3_hierarchy_1.cluster)(options);
};
exports.Cluster = Cluster;
exports.Cluster.props = {};
//# sourceMappingURL=cluster.js.map