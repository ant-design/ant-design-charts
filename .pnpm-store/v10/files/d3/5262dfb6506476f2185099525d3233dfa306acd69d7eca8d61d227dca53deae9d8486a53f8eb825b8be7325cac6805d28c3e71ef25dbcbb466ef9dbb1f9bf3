import { __awaiter } from "tslib";
import { Graph as GraphCore } from '@antv/graphlib';
import { isFunction, isNumber, isObject } from '@antv/util';
import { ConcentricLayout } from './concentric';
import { ForceLayout } from './force';
import { MDSLayout } from './mds';
import { isLayoutWithIterations } from './types';
import { getLayoutBBox, graphTreeDfs, isArray } from './util';
import { handleSingleNodeGraph } from './util/common';
const FORCE_LAYOUT_TYPE_MAP = {
    gForce: true,
    force2: true,
    d3force: true,
    fruchterman: true,
    forceAtlas2: true,
    force: true,
    'graphin-force': true,
};
const DEFAULTS_LAYOUT_OPTIONS = {
    center: [0, 0],
    comboPadding: 10,
    treeKey: 'combo',
};
/**
 * <zh/> 组合布局
 *
 * <en/> Combo-Combined layout
 */
export class ComboCombinedLayout {
    constructor(options = {}) {
        this.options = options;
        this.id = 'comboCombined';
        this.options = Object.assign(Object.assign({}, DEFAULTS_LAYOUT_OPTIONS), options);
    }
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericComboCombinedLayout(false, graph, options);
        });
    }
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericComboCombinedLayout(true, graph, options);
        });
    }
    genericComboCombinedLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = this.initVals(Object.assign(Object.assign({}, this.options), options));
            const { center, treeKey, outerLayout: propsOuterLayout } = mergedOptions;
            const nodes = graph
                .getAllNodes()
                .filter((node) => !node.data._isCombo);
            const combos = graph
                .getAllNodes()
                .filter((node) => node.data._isCombo);
            const edges = graph.getAllEdges();
            const n = nodes === null || nodes === void 0 ? void 0 : nodes.length;
            if (!n || n === 1) {
                return handleSingleNodeGraph(graph, assign, center);
            }
            // output nodes
            const layoutNodes = [];
            const nodeMap = new Map();
            nodes.forEach((node) => {
                nodeMap.set(node.id, node);
            });
            const comboMap = new Map();
            combos.forEach((combo) => {
                comboMap.set(combo.id, combo);
            });
            // each one in comboNodes is a combo contains the size and child nodes
            // comboNodes includes the node who has no parent combo
            const comboNodes = new Map();
            // the inner layouts, the result positions are stored in comboNodes and their child nodes
            const innerGraphLayoutPromises = this.getInnerGraphs(graph, treeKey, nodeMap, comboMap, edges, mergedOptions, comboNodes);
            yield Promise.all(innerGraphLayoutPromises);
            const outerNodeIds = new Map();
            const outerLayoutNodes = [];
            const nodeAncestorIdMap = new Map();
            let allHaveNoPosition = true;
            graph.getRoots(treeKey).forEach((root) => {
                const combo = comboNodes.get(root.id);
                const cacheCombo = comboMap.get(root.id) || nodeMap.get(root.id);
                const comboLayoutNode = {
                    id: root.id,
                    data: Object.assign(Object.assign({}, root.data), { x: combo.data.x || cacheCombo.data.x, y: combo.data.y || cacheCombo.data.y, fx: combo.data.fx || cacheCombo.data.fx, fy: combo.data.fy || cacheCombo.data.fy, mass: combo.data.mass || cacheCombo.data.mass, size: combo.data.size }),
                };
                outerLayoutNodes.push(comboLayoutNode);
                outerNodeIds.set(root.id, true);
                if (!isNaN(comboLayoutNode.data.x) &&
                    comboLayoutNode.data.x !== 0 &&
                    !isNaN(comboLayoutNode.data.y) &&
                    comboLayoutNode.data.y !== 0) {
                    allHaveNoPosition = false;
                }
                else {
                    comboLayoutNode.data.x = Math.random() * 100;
                    comboLayoutNode.data.y = Math.random() * 100;
                }
                graphTreeDfs(graph, [root], (child) => {
                    if (child.id !== root.id)
                        nodeAncestorIdMap.set(child.id, root.id);
                }, 'TB', treeKey);
            });
            const outerLayoutEdges = [];
            edges.forEach((edge) => {
                const sourceAncestorId = nodeAncestorIdMap.get(edge.source) || edge.source;
                const targetAncestorId = nodeAncestorIdMap.get(edge.target) || edge.target;
                // create an edge for outer layout if both source and target's ancestor combo is in outer layout nodes
                if (sourceAncestorId !== targetAncestorId &&
                    outerNodeIds.has(sourceAncestorId) &&
                    outerNodeIds.has(targetAncestorId)) {
                    outerLayoutEdges.push({
                        id: edge.id,
                        source: sourceAncestorId,
                        target: targetAncestorId,
                        data: {},
                    });
                }
            });
            // 若有需要最外层的 combo 或节点，则对最外层执行力导向
            let outerPositions;
            if (outerLayoutNodes === null || outerLayoutNodes === void 0 ? void 0 : outerLayoutNodes.length) {
                if (outerLayoutNodes.length === 1) {
                    outerLayoutNodes[0].data.x = center[0];
                    outerLayoutNodes[0].data.y = center[1];
                }
                else {
                    const outerLayoutGraph = new GraphCore({
                        nodes: outerLayoutNodes,
                        edges: outerLayoutEdges,
                    });
                    const outerLayout = propsOuterLayout || new ForceLayout();
                    // preset the nodes if the outerLayout is a force family layout
                    if (allHaveNoPosition && FORCE_LAYOUT_TYPE_MAP[outerLayout.id]) {
                        const outerLayoutPreset = outerLayoutNodes.length < 100
                            ? new MDSLayout()
                            : new ConcentricLayout();
                        yield outerLayoutPreset.assign(outerLayoutGraph);
                    }
                    const options = Object.assign({ center, kg: 5, preventOverlap: true, animate: false }, (outerLayout.id === 'force'
                        ? {
                            gravity: 1,
                            factor: 4,
                            linkDistance: (edge, source, target) => {
                                const sourceSize = Math.max(...source.data.size) || 32;
                                const targetSize = Math.max(...target.data.size) || 32;
                                return sourceSize / 2 + targetSize / 2 + 200;
                            },
                        }
                        : {}));
                    outerPositions = yield executeLayout(outerLayout, outerLayoutGraph, options);
                }
                // move the combos and their child nodes
                comboNodes.forEach((comboNode) => {
                    var _a;
                    const outerPosition = outerPositions.nodes.find((pos) => pos.id === comboNode.id);
                    if (outerPosition) {
                        // if it is one of the outer layout nodes, update the positions
                        const { x, y } = outerPosition.data;
                        comboNode.data.visited = true;
                        comboNode.data.x = x;
                        comboNode.data.y = y;
                        layoutNodes.push({
                            id: comboNode.id,
                            data: { x, y },
                        });
                    }
                    // move the child nodes
                    const { x, y } = comboNode.data;
                    (_a = comboNode.data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((node) => {
                        layoutNodes.push({
                            id: node.id,
                            data: { x: node.data.x + x, y: node.data.y + y },
                        });
                    });
                });
                // move the nodes from top to bottom
                comboNodes.forEach(({ data }) => {
                    const { x, y, visited, nodes } = data;
                    nodes === null || nodes === void 0 ? void 0 : nodes.forEach((node) => {
                        if (!visited) {
                            const layoutNode = layoutNodes.find((n) => n.id === node.id);
                            layoutNode.data.x += x || 0;
                            layoutNode.data.y += y || 0;
                        }
                    });
                });
            }
            if (assign) {
                layoutNodes.forEach((node) => {
                    graph.mergeNodeData(node.id, {
                        x: node.data.x,
                        y: node.data.y,
                    });
                });
            }
            const result = {
                nodes: layoutNodes,
                edges,
            };
            return result;
        });
    }
    initVals(options) {
        const formattedOptions = Object.assign({}, options);
        const { nodeSize, spacing, comboPadding } = options;
        let nodeSizeFunc;
        let spacingFunc;
        // nodeSpacing to function
        if (isNumber(spacing)) {
            spacingFunc = () => spacing;
        }
        else if (isFunction(spacing)) {
            spacingFunc = spacing;
        }
        else {
            spacingFunc = () => 0;
        }
        formattedOptions.spacing = spacingFunc;
        // nodeSize to function
        if (!nodeSize) {
            nodeSizeFunc = (d) => {
                const spacing = spacingFunc(d);
                if (d.size) {
                    if (isArray(d.size)) {
                        const res = d.size[0] > d.size[1] ? d.size[0] : d.size[1];
                        return (res + spacing) / 2;
                    }
                    if (isObject(d.size)) {
                        const res = d.size.width > d.size.height ? d.size.width : d.size.height;
                        return (res + spacing) / 2;
                    }
                    return (d.size + spacing) / 2;
                }
                return 32 + spacing / 2;
            };
        }
        else if (isFunction(nodeSize)) {
            nodeSizeFunc = (d) => {
                const size = nodeSize(d);
                const spacing = spacingFunc(d);
                if (isArray(d.size)) {
                    const res = d.size[0] > d.size[1] ? d.size[0] : d.size[1];
                    return (res + spacing) / 2;
                }
                return ((size || 32) + spacing) / 2;
            };
        }
        else if (isArray(nodeSize)) {
            const larger = nodeSize[0] > nodeSize[1] ? nodeSize[0] : nodeSize[1];
            const radius = larger / 2;
            nodeSizeFunc = (d) => radius + spacingFunc(d) / 2;
        }
        else {
            // number type
            const radius = nodeSize / 2;
            nodeSizeFunc = (d) => radius + spacingFunc(d) / 2;
        }
        formattedOptions.nodeSize = nodeSizeFunc;
        // comboPadding to function
        let comboPaddingFunc;
        if (isNumber(comboPadding)) {
            comboPaddingFunc = () => comboPadding;
        }
        else if (isArray(comboPadding)) {
            comboPaddingFunc = () => Math.max.apply(null, comboPadding);
        }
        else if (isFunction(comboPadding)) {
            comboPaddingFunc = comboPadding;
        }
        else {
            // null type
            comboPaddingFunc = () => 0;
        }
        formattedOptions.comboPadding = comboPaddingFunc;
        return formattedOptions;
    }
    getInnerGraphs(graph, treeKey, nodeMap, comboMap, edges, options, comboNodes) {
        const { nodeSize, comboPadding, spacing, innerLayout } = options;
        const innerGraphLayout = innerLayout || new ConcentricLayout({});
        const innerLayoutOptions = {
            center: [0, 0],
            preventOverlap: true,
            nodeSpacing: spacing,
        };
        const innerLayoutPromises = [];
        const getSize = (node) => {
            // @ts-ignore
            let padding = (comboPadding === null || comboPadding === void 0 ? void 0 : comboPadding(node)) || 10;
            if (isArray(padding))
                padding = Math.max(...padding);
            return {
                size: padding ? [padding * 2, padding * 2] : [30, 30],
                padding,
            };
        };
        graph.getRoots(treeKey).forEach((root) => {
            // @ts-ignore
            comboNodes.set(root.id, {
                id: root.id,
                data: {
                    nodes: [],
                    size: getSize(root).size,
                },
            });
            let start = Promise.resolve();
            // Regard the child nodes in one combo as a graph, and layout them from bottom to top
            graphTreeDfs(graph, [root], (treeNode) => {
                var _a;
                if (!treeNode.data._isCombo)
                    return;
                const { size: nsize, padding } = getSize(treeNode);
                if (!((_a = graph.getChildren(treeNode.id, treeKey)) === null || _a === void 0 ? void 0 : _a.length)) {
                    // empty combo
                    comboNodes.set(treeNode.id, {
                        id: treeNode.id,
                        data: Object.assign(Object.assign({}, treeNode.data), { size: nsize }),
                    });
                }
                else {
                    // combo not empty
                    const comboNode = comboNodes.get(treeNode.id);
                    comboNodes.set(treeNode.id, {
                        id: treeNode.id,
                        data: Object.assign({ nodes: [] }, comboNode === null || comboNode === void 0 ? void 0 : comboNode.data),
                    });
                    const innerLayoutNodeIds = new Map();
                    const innerLayoutNodes = graph
                        .getChildren(treeNode.id, treeKey)
                        .map((child) => {
                        if (child.data._isCombo) {
                            if (!comboNodes.has(child.id)) {
                                comboNodes.set(child.id, {
                                    id: child.id,
                                    data: Object.assign({}, child.data),
                                });
                            }
                            innerLayoutNodeIds.set(child.id, true);
                            return comboNodes.get(child.id);
                        }
                        const oriNode = nodeMap.get(child.id) || comboMap.get(child.id);
                        innerLayoutNodeIds.set(child.id, true);
                        return {
                            id: child.id,
                            data: Object.assign(Object.assign({}, oriNode.data), child.data),
                        };
                    });
                    const innerGraphData = {
                        nodes: innerLayoutNodes,
                        edges: edges.filter((edge) => innerLayoutNodeIds.has(edge.source) &&
                            innerLayoutNodeIds.has(edge.target)),
                    };
                    let minNodeSize = Infinity;
                    innerLayoutNodes.forEach((node) => {
                        var _a;
                        let { size } = node.data;
                        if (!size) {
                            size = ((_a = comboNodes.get(node.id)) === null || _a === void 0 ? void 0 : _a.data.size) ||
                                (nodeSize === null || nodeSize === void 0 ? void 0 : nodeSize(node)) || [30, 30];
                        }
                        if (isNumber(size))
                            size = [size, size];
                        const [size0, size1] = size;
                        if (minNodeSize > size0)
                            minNodeSize = size0;
                        if (minNodeSize > size1)
                            minNodeSize = size1;
                        node.data.size = size;
                    });
                    // innerGraphLayout.assign(innerGraphCore, innerLayoutOptions);
                    start = start.then(() => __awaiter(this, void 0, void 0, function* () {
                        const innerGraphCore = new GraphCore(innerGraphData);
                        yield executeLayout(innerGraphLayout, innerGraphCore, innerLayoutOptions, true);
                        const { minX, minY, maxX, maxY } = getLayoutBBox(innerLayoutNodes);
                        // move the innerGraph to [0, 0], for later controlled by parent layout
                        const center = { x: (maxX + minX) / 2, y: (maxY + minY) / 2 };
                        innerGraphData.nodes.forEach((node) => {
                            node.data.x -= center.x;
                            node.data.y -= center.y;
                        });
                        const size = [
                            Math.max(maxX - minX, minNodeSize) + padding * 2,
                            Math.max(maxY - minY, minNodeSize) + padding * 2,
                        ];
                        comboNodes.get(treeNode.id).data.size = size;
                        comboNodes.get(treeNode.id).data.nodes = innerLayoutNodes;
                    }));
                }
                return true;
            }, 'BT', treeKey);
            innerLayoutPromises.push(start);
        });
        return innerLayoutPromises;
    }
}
function executeLayout(layout, graph, options, assign) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (isLayoutWithIterations(layout)) {
            layout.execute(graph, options);
            layout.stop();
            return layout.tick((_a = options.iterations) !== null && _a !== void 0 ? _a : 300);
        }
        if (assign)
            return yield layout.assign(graph, options);
        return yield layout.execute(graph, options);
    });
}
//# sourceMappingURL=combo-combined.js.map