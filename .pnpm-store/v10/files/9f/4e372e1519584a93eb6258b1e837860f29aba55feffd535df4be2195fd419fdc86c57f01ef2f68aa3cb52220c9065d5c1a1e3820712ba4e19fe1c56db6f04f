import { Graph } from '@antv/graphlib';
import { isNil } from '@antv/util';
import { run as runAcyclic, undo as undoAcyclic } from './acyclic';
import { addBorderSegments } from './add-border-segments';
import { adjust as adjustCoordinateSystem, undo as undoCoordinateSystem, } from './coordinate-system';
import { cleanup as cleanupNestingGraph, run as runNestingGraph, } from './nesting-graph';
import { run as runNormalize, undo as undoNormalize } from './normalize';
import { order } from './order';
import { initDataOrder } from './order/init-data-order';
import { parentDummyChains } from './parent-dummy-chains';
import { position } from './position';
import { rank } from './rank';
import { addDummyNode, asNonCompoundGraph, buildLayerMatrix, intersectRect, normalizeRanks, removeEmptyRanks, } from './util';
// const graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
// const graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
// const graphAttrs = ["acyclicer", "ranker", "rankdir", "align"];
export const layout = (g, options) => {
    const { edgeLabelSpace, keepNodeOrder, prevGraph, rankdir, ranksep } = options;
    // 如果在原图基础上修改，继承原图的order结果
    if (!keepNodeOrder && prevGraph) {
        inheritOrder(g, prevGraph);
    }
    const layoutGraph = buildLayoutGraph(g);
    // 控制是否为边的label留位置（这会影响是否在边中间添加dummy node）
    if (!!edgeLabelSpace) {
        options.ranksep = makeSpaceForEdgeLabels(layoutGraph, {
            rankdir,
            ranksep,
        });
    }
    let dimension;
    // TODO: 暂时处理层级设置不正确时的异常报错，提示设置正确的层级
    try {
        dimension = runLayout(layoutGraph, options);
    }
    catch (e) {
        if (e.message === 'Not possible to find intersection inside of the rectangle') {
            console.error("The following error may be caused by improper layer setting, please make sure your manual layer setting does not violate the graph's structure:\n", e);
            return;
        }
        throw e;
    }
    updateInputGraph(g, layoutGraph);
    return dimension;
};
const runLayout = (g, options) => {
    const { acyclicer, ranker, rankdir = 'tb', nodeOrder, keepNodeOrder, align, nodesep = 50, edgesep = 20, ranksep = 50, } = options;
    removeSelfEdges(g);
    runAcyclic(g, acyclicer);
    const { nestingRoot, nodeRankFactor } = runNestingGraph(g);
    rank(asNonCompoundGraph(g), ranker);
    injectEdgeLabelProxies(g);
    removeEmptyRanks(g, nodeRankFactor);
    cleanupNestingGraph(g, nestingRoot);
    normalizeRanks(g);
    assignRankMinMax(g);
    removeEdgeLabelProxies(g);
    const dummyChains = [];
    runNormalize(g, dummyChains);
    parentDummyChains(g, dummyChains);
    addBorderSegments(g);
    if (keepNodeOrder) {
        initDataOrder(g, nodeOrder);
    }
    order(g, keepNodeOrder);
    insertSelfEdges(g);
    adjustCoordinateSystem(g, rankdir);
    position(g, {
        align,
        nodesep,
        edgesep,
        ranksep,
    });
    positionSelfEdges(g);
    removeBorderNodes(g);
    undoNormalize(g, dummyChains);
    fixupEdgeLabelCoords(g);
    undoCoordinateSystem(g, rankdir);
    const { width, height } = translateGraph(g);
    assignNodeIntersects(g);
    reversePointsForReversedEdges(g);
    undoAcyclic(g);
    return { width, height };
};
/**
 * 继承上一个布局中的order，防止翻转
 * TODO: 暂时没有考虑涉及层级变动的布局，只保证原来布局层级和相对顺序不变
 */
const inheritOrder = (currG, prevG) => {
    currG.getAllNodes().forEach((n) => {
        const node = currG.getNode(n.id);
        if (prevG.hasNode(n.id)) {
            const prevNode = prevG.getNode(n.id);
            node.data.fixorder = prevNode.data._order;
            delete prevNode.data._order;
        }
        else {
            delete node.data.fixorder;
        }
    });
};
/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
const updateInputGraph = (inputGraph, layoutGraph) => {
    inputGraph.getAllNodes().forEach((v) => {
        var _a;
        const inputLabel = inputGraph.getNode(v.id);
        if (inputLabel) {
            const layoutLabel = layoutGraph.getNode(v.id);
            inputLabel.data.x = layoutLabel.data.x;
            inputLabel.data.y = layoutLabel.data.y;
            inputLabel.data._order = layoutLabel.data.order;
            inputLabel.data._rank = layoutLabel.data.rank;
            if ((_a = layoutGraph.getChildren(v.id)) === null || _a === void 0 ? void 0 : _a.length) {
                inputLabel.data.width = layoutLabel.data.width;
                inputLabel.data.height = layoutLabel.data.height;
            }
        }
    });
    inputGraph.getAllEdges().forEach((e) => {
        const inputLabel = inputGraph.getEdge(e.id);
        const layoutLabel = layoutGraph.getEdge(e.id);
        inputLabel.data.points = layoutLabel ? layoutLabel.data.points : [];
        if (layoutLabel && layoutLabel.data.hasOwnProperty('x')) {
            inputLabel.data.x = layoutLabel.data.x;
            inputLabel.data.y = layoutLabel.data.y;
        }
    });
    // inputGraph.graph().width = layoutGraph.graph().width;
    // inputGraph.graph().height = layoutGraph.graph().height;
};
const nodeNumAttrs = ['width', 'height', 'layer', 'fixorder']; // 需要传入layer, fixOrder作为参数参考
const nodeDefaults = { width: 0, height: 0 };
const edgeNumAttrs = ['minlen', 'weight', 'width', 'height', 'labeloffset'];
const edgeDefaults = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: 'r',
};
const edgeAttrs = ['labelpos'];
/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
const buildLayoutGraph = (inputGraph) => {
    const g = new Graph({ tree: [] });
    inputGraph.getAllNodes().forEach((v) => {
        const node = canonicalize(inputGraph.getNode(v.id).data);
        const defaultNode = Object.assign(Object.assign({}, nodeDefaults), node);
        const defaultAttrs = selectNumberAttrs(defaultNode, nodeNumAttrs);
        if (!g.hasNode(v.id)) {
            g.addNode({
                id: v.id,
                data: Object.assign({}, defaultAttrs),
            });
        }
        const parent = inputGraph.hasTreeStructure('combo')
            ? inputGraph.getParent(v.id, 'combo')
            : inputGraph.getParent(v.id);
        if (!isNil(parent)) {
            if (!g.hasNode(parent.id)) {
                g.addNode(Object.assign({}, parent));
            }
            g.setParent(v.id, parent.id);
        }
    });
    inputGraph.getAllEdges().forEach((e) => {
        const edge = canonicalize(inputGraph.getEdge(e.id).data);
        const pickedProperties = {};
        edgeAttrs === null || edgeAttrs === void 0 ? void 0 : edgeAttrs.forEach((key) => {
            if (edge[key] !== undefined)
                pickedProperties[key] = edge[key];
        });
        g.addEdge({
            id: e.id,
            source: e.source,
            target: e.target,
            data: Object.assign({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), pickedProperties),
        });
    });
    return g;
};
/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
const makeSpaceForEdgeLabels = (g, options) => {
    const { ranksep = 0, rankdir } = options;
    g.getAllNodes().forEach((node) => {
        if (!isNaN(node.data.layer)) {
            if (!node.data.layer)
                node.data.layer = 0;
        }
    });
    g.getAllEdges().forEach((edge) => {
        var _a;
        edge.data.minlen *= 2;
        if (((_a = edge.data.labelpos) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== 'c') {
            if (rankdir === 'TB' || rankdir === 'BT') {
                edge.data.width += edge.data.labeloffset;
            }
            else {
                edge.data.height += edge.data.labeloffset;
            }
        }
    });
    return ranksep / 2;
};
/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
const injectEdgeLabelProxies = (g) => {
    g.getAllEdges().forEach((e) => {
        if (e.data.width && e.data.height) {
            const v = g.getNode(e.source);
            const w = g.getNode(e.target);
            const label = {
                e,
                rank: (w.data.rank - v.data.rank) / 2 + v.data.rank,
            };
            addDummyNode(g, 'edge-proxy', label, '_ep');
        }
    });
};
const assignRankMinMax = (g) => {
    let maxRank = 0;
    g.getAllNodes().forEach((node) => {
        var _a, _b;
        if (node.data.borderTop) {
            node.data.minRank = (_a = g.getNode(node.data.borderTop)) === null || _a === void 0 ? void 0 : _a.data.rank;
            node.data.maxRank = (_b = g.getNode(node.data.borderBottom)) === null || _b === void 0 ? void 0 : _b.data.rank;
            maxRank = Math.max(maxRank, node.data.maxRank || -Infinity);
        }
    });
    return maxRank;
};
const removeEdgeLabelProxies = (g) => {
    g.getAllNodes().forEach((node) => {
        if (node.data.dummy === 'edge-proxy') {
            g.getEdge(node.data.e.id).data.labelRank = node.data.rank;
            g.removeNode(node.id);
        }
    });
};
const translateGraph = (g, options) => {
    let minX;
    let maxX = 0;
    let minY;
    let maxY = 0;
    const { marginx: marginX = 0, marginy: marginY = 0 } = options || {};
    const getExtremes = (attrs) => {
        if (!attrs.data)
            return;
        const x = attrs.data.x;
        const y = attrs.data.y;
        const w = attrs.data.width;
        const h = attrs.data.height;
        if (!isNaN(x) && !isNaN(w)) {
            if (minX === undefined) {
                minX = x - w / 2;
            }
            minX = Math.min(minX, x - w / 2);
            maxX = Math.max(maxX, x + w / 2);
        }
        if (!isNaN(y) && !isNaN(h)) {
            if (minY === undefined) {
                minY = y - h / 2;
            }
            minY = Math.min(minY, y - h / 2);
            maxY = Math.max(maxY, y + h / 2);
        }
    };
    g.getAllNodes().forEach((v) => {
        getExtremes(v);
    });
    g.getAllEdges().forEach((e) => {
        if (e === null || e === void 0 ? void 0 : e.data.hasOwnProperty('x')) {
            getExtremes(e);
        }
    });
    minX -= marginX;
    minY -= marginY;
    g.getAllNodes().forEach((node) => {
        node.data.x -= minX;
        node.data.y -= minY;
    });
    g.getAllEdges().forEach((edge) => {
        var _a;
        (_a = edge.data.points) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
            p.x -= minX;
            p.y -= minY;
        });
        if (edge.data.hasOwnProperty('x')) {
            edge.data.x -= minX;
        }
        if (edge.data.hasOwnProperty('y')) {
            edge.data.y -= minY;
        }
    });
    return {
        width: maxX - minX + marginX,
        height: maxY - minY + marginY,
    };
};
const assignNodeIntersects = (g) => {
    g.getAllEdges().forEach((e) => {
        const nodeV = g.getNode(e.source);
        const nodeW = g.getNode(e.target);
        let p1;
        let p2;
        if (!e.data.points) {
            e.data.points = [];
            p1 = { x: nodeW.data.x, y: nodeW.data.y };
            p2 = { x: nodeV.data.x, y: nodeV.data.y };
        }
        else {
            p1 = e.data.points[0];
            p2 = e.data.points[e.data.points.length - 1];
        }
        e.data.points.unshift(intersectRect(nodeV.data, p1));
        e.data.points.push(intersectRect(nodeW.data, p2));
    });
};
const fixupEdgeLabelCoords = (g) => {
    g.getAllEdges().forEach((edge) => {
        if (edge.data.hasOwnProperty('x')) {
            if (edge.data.labelpos === 'l' || edge.data.labelpos === 'r') {
                edge.data.width -= edge.data.labeloffset;
            }
            switch (edge.data.labelpos) {
                case 'l':
                    edge.data.x -= edge.data.width / 2 + edge.data.labeloffset;
                    break;
                case 'r':
                    edge.data.x += edge.data.width / 2 + edge.data.labeloffset;
                    break;
            }
        }
    });
};
const reversePointsForReversedEdges = (g) => {
    g.getAllEdges().forEach((edge) => {
        var _a;
        if (edge.data.reversed) {
            (_a = edge.data.points) === null || _a === void 0 ? void 0 : _a.reverse();
        }
    });
};
const removeBorderNodes = (g) => {
    g.getAllNodes().forEach((v) => {
        var _a, _b, _c;
        if ((_a = g.getChildren(v.id)) === null || _a === void 0 ? void 0 : _a.length) {
            const node = g.getNode(v.id);
            const t = g.getNode(node.data.borderTop);
            const b = g.getNode(node.data.borderBottom);
            const l = g.getNode(node.data.borderLeft[((_b = node.data.borderLeft) === null || _b === void 0 ? void 0 : _b.length) - 1]);
            const r = g.getNode(node.data.borderRight[((_c = node.data.borderRight) === null || _c === void 0 ? void 0 : _c.length) - 1]);
            node.data.width = Math.abs((r === null || r === void 0 ? void 0 : r.data.x) - (l === null || l === void 0 ? void 0 : l.data.x)) || 10;
            node.data.height = Math.abs((b === null || b === void 0 ? void 0 : b.data.y) - (t === null || t === void 0 ? void 0 : t.data.y)) || 10;
            node.data.x = ((l === null || l === void 0 ? void 0 : l.data.x) || 0) + node.data.width / 2;
            node.data.y = ((t === null || t === void 0 ? void 0 : t.data.y) || 0) + node.data.height / 2;
        }
    });
    g.getAllNodes().forEach((n) => {
        if (n.data.dummy === 'border') {
            g.removeNode(n.id);
        }
    });
};
const removeSelfEdges = (g) => {
    g.getAllEdges().forEach((e) => {
        if (e.source === e.target) {
            const node = g.getNode(e.source);
            if (!node.data.selfEdges) {
                node.data.selfEdges = [];
            }
            node.data.selfEdges.push(e);
            g.removeEdge(e.id);
        }
    });
};
const insertSelfEdges = (g) => {
    const layers = buildLayerMatrix(g);
    layers === null || layers === void 0 ? void 0 : layers.forEach((layer) => {
        let orderShift = 0;
        layer === null || layer === void 0 ? void 0 : layer.forEach((v, i) => {
            var _a;
            const node = g.getNode(v);
            node.data.order = i + orderShift;
            (_a = node.data.selfEdges) === null || _a === void 0 ? void 0 : _a.forEach((selfEdge) => {
                addDummyNode(g, 'selfedge', {
                    width: selfEdge.data.width,
                    height: selfEdge.data.height,
                    rank: node.data.rank,
                    order: i + ++orderShift,
                    e: selfEdge,
                }, '_se');
            });
            delete node.data.selfEdges;
        });
    });
};
const positionSelfEdges = (g) => {
    g.getAllNodes().forEach((v) => {
        const node = g.getNode(v.id);
        if (node.data.dummy === 'selfedge') {
            const selfNode = g.getNode(node.data.e.source);
            const x = selfNode.data.x + selfNode.data.width / 2;
            const y = selfNode.data.y;
            const dx = node.data.x - x;
            const dy = selfNode.data.height / 2;
            if (g.hasEdge(node.data.e.id)) {
                g.updateEdgeData(node.data.e.id, node.data.e.data);
            }
            else {
                g.addEdge({
                    id: node.data.e.id,
                    source: node.data.e.source,
                    target: node.data.e.target,
                    data: node.data.e.data,
                });
            }
            g.removeNode(v.id);
            node.data.e.data.points = [
                { x: x + (2 * dx) / 3, y: y - dy },
                { x: x + (5 * dx) / 6, y: y - dy },
                { y, x: x + dx },
                { x: x + (5 * dx) / 6, y: y + dy },
                { x: x + (2 * dx) / 3, y: y + dy },
            ];
            node.data.e.data.x = node.data.x;
            node.data.e.data.y = node.data.y;
        }
    });
};
const selectNumberAttrs = (obj, attrs) => {
    const pickedProperties = {};
    attrs === null || attrs === void 0 ? void 0 : attrs.forEach((key) => {
        if (obj[key] === undefined)
            return;
        pickedProperties[key] = +obj[key];
    });
    return pickedProperties;
};
const canonicalize = (attrs = {}) => {
    const newAttrs = {};
    Object.keys(attrs).forEach((k) => {
        newAttrs[k.toLowerCase()] = attrs[k];
    });
    return newAttrs;
};
//# sourceMappingURL=layout.js.map