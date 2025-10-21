import { addBorderNode, addDummyNode } from './util';
/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
const run = (g) => {
    const root = addDummyNode(g, 'root', {}, '_root');
    const depths = treeDepths(g);
    let maxDepth = Math.max(...Object.values(depths));
    if (Math.abs(maxDepth) === Infinity) {
        maxDepth = 1;
    }
    const height = maxDepth - 1; // Note: depths is an Object not an array
    const nodeSep = 2 * height + 1;
    // g.graph().nestingRoot = root;
    // Multiply minlen by nodeSep to align nodes on non-border ranks.
    g.getAllEdges().forEach((e) => {
        e.data.minlen *= nodeSep;
    });
    // Calculate a weight that is sufficient to keep subgraphs vertically compact
    const weight = sumWeights(g) + 1;
    // Create border nodes and link them up
    // g.children()?.forEach((child) => {
    //   dfs(g, root, nodeSep, weight, height, depths, child);
    // });
    g.getRoots().forEach((child) => {
        dfs(g, root, nodeSep, weight, height, depths, child.id);
    });
    // Save the multiplier for node layers for later removal of empty border
    // layers.
    // g.graph().nodeRankFactor = nodeSep;
    return {
        nestingRoot: root,
        nodeRankFactor: nodeSep,
    };
};
const dfs = (g, root, nodeSep, weight, height, depths, v) => {
    const children = g.getChildren(v);
    if (!(children === null || children === void 0 ? void 0 : children.length)) {
        if (v !== root) {
            // g.setEdge(root, v, { weight: 0, minlen: nodeSep });
            g.addEdge({
                id: `e${Math.random()}`,
                source: root,
                target: v,
                data: { weight: 0, minlen: nodeSep },
            });
        }
        return;
    }
    const top = addBorderNode(g, '_bt');
    const bottom = addBorderNode(g, '_bb');
    const label = g.getNode(v);
    g.setParent(top, v);
    label.data.borderTop = top;
    g.setParent(bottom, v);
    label.data.borderBottom = bottom;
    children === null || children === void 0 ? void 0 : children.forEach((childNode) => {
        dfs(g, root, nodeSep, weight, height, depths, childNode.id);
        const childTop = childNode.data.borderTop
            ? childNode.data.borderTop
            : childNode.id;
        const childBottom = childNode.data.borderBottom
            ? childNode.data.borderBottom
            : childNode.id;
        const thisWeight = childNode.data.borderTop ? weight : 2 * weight;
        const minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
        g.addEdge({
            id: `e${Math.random()}`,
            source: top,
            target: childTop,
            data: {
                minlen,
                weight: thisWeight,
                nestingEdge: true,
            },
        });
        g.addEdge({
            id: `e${Math.random()}`,
            source: childBottom,
            target: bottom,
            data: {
                minlen,
                weight: thisWeight,
                nestingEdge: true,
            },
        });
    });
    if (!g.getParent(v)) {
        g.addEdge({
            id: `e${Math.random()}`,
            source: root,
            target: top,
            data: {
                weight: 0,
                minlen: height + depths[v],
            },
        });
    }
};
const treeDepths = (g) => {
    const depths = {};
    const dfs = (v, depth) => {
        const children = g.getChildren(v);
        children === null || children === void 0 ? void 0 : children.forEach((child) => dfs(child.id, depth + 1));
        depths[v] = depth;
    };
    // g.children()?.forEach((v) => dfs(v, 1));
    g.getRoots().forEach((v) => dfs(v.id, 1));
    return depths;
};
const sumWeights = (g) => {
    let result = 0;
    g.getAllEdges().forEach((e) => {
        result += e.data.weight;
    });
    return result;
};
const cleanup = (g, nestingRoot) => {
    // const graphLabel = g.graph();
    // graphLabel.nestingRoot && g.removeNode(graphLabel.nestingRoot);
    // delete graphLabel.nestingRoot;
    if (nestingRoot) {
        g.removeNode(nestingRoot);
    }
    g.getAllEdges().forEach((e) => {
        if (e.data.nestingEdge) {
            g.removeEdge(e.id);
        }
    });
};
export { run, cleanup };
//# sourceMappingURL=nesting-graph.js.map