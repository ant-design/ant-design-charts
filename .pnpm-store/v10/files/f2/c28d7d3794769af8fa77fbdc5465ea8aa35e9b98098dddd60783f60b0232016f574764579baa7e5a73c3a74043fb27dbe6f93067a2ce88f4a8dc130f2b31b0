"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isParallelEdges = exports.getParallelEdges = exports.groupByEndpoints = exports.ProcessParallelEdges = void 0;
const util_1 = require("@antv/util");
const change_1 = require("../utils/change");
const id_1 = require("../utils/id");
const base_transform_1 = require("./base-transform");
const get_edge_actual_ends_1 = require("./get-edge-actual-ends");
const utils_1 = require("./utils");
const CUBIC_EDGE_TYPE = 'quadratic';
const CUBIC_LOOP_PLACEMENTS = [
    'top',
    'top-right',
    'right',
    'right-bottom',
    'bottom',
    'bottom-left',
    'left',
    'left-top',
];
/**
 * <zh/> 处理平行边，即多条边共享同一源节点和目标节点
 *
 * <en/> Process parallel edges which share the same source and target nodes
 * @remarks
 * <zh/> 平行边（Parallel Edges）是指在图结构中，两个节点之间存在多条边。这些边共享相同的源节点和目标节点，但可能代表不同的关系或属性。为了避免边的重叠和混淆，提供了两种处理平行边的方式：(1) 捆绑模式（bundle）：将平行边捆绑在一起，通过改变曲率与其他边分开；(2) 合并模式（merge）：将平行边合并为一条聚合。
 *
 * <en/> Parallel Edges refer to multiple edges existing between two nodes in a graph structure. These edges share the same source and target nodes but may represent different relationships or attributes. To avoid edge overlap and confusion, two methods are provided for handling parallel edges: (1) Bundle Mode: Bundles parallel edges together and separates them from other edges by altering their curvature; (2) Merge Mode: Merges parallel edges into a single aggregated edge.
 */
class ProcessParallelEdges extends base_transform_1.BaseTransform {
    constructor(context, options) {
        super(context, Object.assign({}, ProcessParallelEdges.defaultOptions, options));
        this.cacheMergeStyle = new Map();
        /**
         * <zh/> 获取受影响的平行边
         *
         * <en/> Get affected parallel edges
         * @param input
         */
        this.getAffectedParallelEdges = (input) => {
            const { add: { edges: edgesToAdd }, update: { nodes: nodesToUpdate, edges: edgesToUpdate, combos: combosToUpdate }, remove: { edges: edgesToRemove }, } = input;
            const { model } = this.context;
            const edges = new Map();
            const addRelatedEdges = (_, id) => {
                const relatedEdgesData = model.getRelatedEdgesData(id);
                relatedEdgesData.forEach((edge) => !edges.has((0, id_1.idOf)(edge)) && edges.set((0, id_1.idOf)(edge), edge));
            };
            nodesToUpdate.forEach(addRelatedEdges);
            combosToUpdate.forEach(addRelatedEdges);
            const pushParallelEdges = (edge) => {
                // 获取已被标记删除的边ID集合
                // Get the set of edge IDs that have been marked for removal
                const removedEdgeIds = new Set(input.remove.edges.keys());
                // 过滤掉已删除的边，避免重定向后重新添加（修复combo收起时内部边变成loop边的问题）
                // Filter out removed edges to prevent them from being re-added after redirection (fixes the issue where internal edges become loop edges when combo collapses)
                const validEdgeData = model
                    .getEdgeData()
                    .filter((edge) => !removedEdgeIds.has((0, id_1.idOf)(edge)))
                    .map((edge) => (0, get_edge_actual_ends_1.getEdgeEndsContext)(model, edge));
                // 查找平行边并添加到处理列表，确保只处理有效的边
                // Find parallel edges and add them to the processing list, ensuring only valid edges are processed
                (0, exports.getParallelEdges)(edge, validEdgeData, true).forEach((e) => {
                    const id = (0, id_1.idOf)(e);
                    if (!edges.has(id))
                        edges.set(id, e);
                });
            };
            if (edgesToRemove.size)
                edgesToRemove.forEach(pushParallelEdges);
            if (edgesToAdd.size)
                edgesToAdd.forEach(pushParallelEdges);
            if (edgesToUpdate.size) {
                const changes = (0, change_1.groupByChangeType)((0, change_1.reduceDataChanges)(model.getChanges())).update.edges;
                edgesToUpdate.forEach((edge) => {
                    var _a;
                    pushParallelEdges(edge);
                    // 当边的端点发生变化时，将原始边及其平行边一并添加到更新列表 | Add the original edge and its parallel edges to the update list when the endpoints of the edge change
                    const originalEdge = (_a = changes.find((e) => (0, id_1.idOf)(e.value) === (0, id_1.idOf)(edge))) === null || _a === void 0 ? void 0 : _a.original;
                    if (originalEdge && !(0, exports.isParallelEdges)(edge, originalEdge)) {
                        pushParallelEdges(originalEdge);
                    }
                });
            }
            if (!(0, util_1.isEmpty)(this.options.edges)) {
                edges.forEach((_, id) => !this.options.edges.includes(id) && edges.delete(id));
            }
            // 按照用户指定的顺序排序，防止捆绑时的抖动
            // Sort by user-set order to prevent jitter during bundling
            const edgeIds = model.getEdgeData().map(id_1.idOf);
            return new Map([...edges].sort((a, b) => edgeIds.indexOf(a[0]) - edgeIds.indexOf(b[0])));
        };
        this.applyBundlingStyle = (input, edges, distance) => {
            const { edgeMap, reverses } = (0, exports.groupByEndpoints)(edges);
            edgeMap.forEach((arcEdges) => {
                arcEdges.forEach((edge, i, edgeArr) => {
                    var _a;
                    const length = edgeArr.length;
                    const style = edge.style || {};
                    if (edge.source === edge.target) {
                        const len = CUBIC_LOOP_PLACEMENTS.length;
                        style.loopPlacement = CUBIC_LOOP_PLACEMENTS[i % len];
                        style.loopDist = Math.floor(i / len) * distance + 50;
                    }
                    else if (length === 1) {
                        style.curveOffset = 0;
                    }
                    else {
                        const sign = (i % 2 === 0 ? 1 : -1) * (reverses[`${edge.source}|${edge.target}|${i}`] ? -1 : 1);
                        style.curveOffset =
                            length % 2 === 1
                                ? sign * Math.ceil(i / 2) * distance * 2
                                : sign * (Math.floor(i / 2) * distance * 2 + distance);
                    }
                    const mergedEdgeData = Object.assign(edge, { type: CUBIC_EDGE_TYPE, style });
                    const element = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement((0, id_1.idOf)(edge));
                    if (!element || !(0, utils_1.isStyleEqual)(mergedEdgeData.style, element.attributes)) {
                        (0, utils_1.reassignTo)(input, element ? 'update' : 'add', 'edge', mergedEdgeData, true);
                    }
                });
            });
        };
        this.resetEdgeStyle = (edge) => {
            const style = edge.style || {};
            const cacheStyle = this.cacheMergeStyle.get((0, id_1.idOf)(edge)) || {};
            Object.keys(cacheStyle).forEach((key) => {
                if ((0, util_1.isEqual)(style[key], cacheStyle[key])) {
                    if (edge[key]) {
                        style[key] = edge[key];
                    }
                    else {
                        delete style[key];
                    }
                }
            });
            return Object.assign(edge, { style });
        };
        this.applyMergingStyle = (input, edges) => {
            const { edgeMap, reverses } = (0, exports.groupByEndpoints)(edges);
            edgeMap.forEach((edges) => {
                var _a;
                if (edges.length === 1) {
                    const edge = edges[0];
                    const element = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement((0, id_1.idOf)(edge));
                    const edgeStyle = this.resetEdgeStyle(edge);
                    if (!element || !(0, utils_1.isStyleEqual)(edgeStyle, element.attributes)) {
                        (0, utils_1.reassignTo)(input, element ? 'update' : 'add', 'edge', edgeStyle);
                    }
                    return;
                }
                const mergedStyle = edges
                    .map(({ source, target, style = {} }, i) => {
                    const { startArrow, endArrow } = style;
                    const newStyle = {};
                    const [start, end] = reverses[`${source}|${target}|${i}`]
                        ? ['endArrow', 'startArrow']
                        : ['startArrow', 'endArrow'];
                    if ((0, util_1.isBoolean)(startArrow))
                        newStyle[start] = startArrow;
                    if ((0, util_1.isBoolean)(endArrow))
                        newStyle[end] = endArrow;
                    return newStyle;
                })
                    .reduce((acc, style) => (Object.assign(Object.assign({}, acc), style)), {});
                edges.forEach((edge, i, edges) => {
                    var _a;
                    if (i !== 0) {
                        (0, utils_1.reassignTo)(input, 'remove', 'edge', edge);
                        return;
                    }
                    const parsedStyle = Object.assign({}, (0, util_1.isFunction)(this.options.style) ? this.options.style(edges) : this.options.style, { childrenData: edges });
                    this.cacheMergeStyle.set((0, id_1.idOf)(edge), parsedStyle);
                    const mergedEdgeData = Object.assign(Object.assign({}, edge), { type: 'line', style: Object.assign(Object.assign(Object.assign({}, edge.style), mergedStyle), parsedStyle) });
                    const element = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement((0, id_1.idOf)(edge));
                    if (!element || !(0, utils_1.isStyleEqual)(mergedEdgeData.style, element.attributes)) {
                        (0, utils_1.reassignTo)(input, element ? 'update' : 'add', 'edge', mergedEdgeData, true);
                    }
                });
            });
        };
    }
    /**
     * <zh/> 在每次绘制前处理平行边
     *
     * <en/> Process parallel edges before each drawing
     * @param input
     */
    beforeDraw(input) {
        const edges = this.getAffectedParallelEdges(input);
        if (edges.size === 0)
            return input;
        this.options.mode === 'bundle'
            ? this.applyBundlingStyle(input, edges, this.options.distance)
            : this.applyMergingStyle(input, edges);
        return input;
    }
}
exports.ProcessParallelEdges = ProcessParallelEdges;
ProcessParallelEdges.defaultOptions = {
    mode: 'bundle',
    distance: 15, // only valid for bundling mode
};
/**
 * <zh/> 优化的按照端点分组方法，时间复杂度O(n)
 *
 * <en/> Optimized method to group by endpoints, time complexity O(n)
 * @param edges - <zh/> 边集合 | <en/> Edges
 * @returns <zh/> 端点分组后的边集合 | <en/> Edges grouped by endpoints
 */
const groupByEndpoints = (edges) => {
    const edgeMap = new Map();
    const processedEdgesSet = new Set();
    const reverses = {};
    const includedEdgesInGroup = new Map();
    for (const [id, edge] of edges) {
        if (processedEdgesSet.has(id))
            continue;
        const { source, target } = edge;
        const sourceTarget = `${source}-${target}`;
        if (!edgeMap.has(sourceTarget)) {
            edgeMap.set(sourceTarget, []);
            includedEdgesInGroup.set(sourceTarget, new Set());
        }
        const sourceTargetEdges = edgeMap.get(sourceTarget);
        const includedEdges = includedEdgesInGroup.get(sourceTarget);
        if (sourceTargetEdges && includedEdges && !includedEdges.has(id)) {
            sourceTargetEdges.push(edge);
            includedEdges.add(id);
            processedEdgesSet.add(id);
        }
        for (const [otherId, sedge] of edges) {
            if (processedEdgesSet.has(otherId) || otherId === id)
                continue;
            if ((0, exports.isParallelEdges)(edge, sedge)) {
                const groupEdges = edgeMap.get(sourceTarget);
                const includedGroupEdges = includedEdgesInGroup.get(sourceTarget);
                if (groupEdges && includedGroupEdges && !includedGroupEdges.has(otherId)) {
                    groupEdges.push(sedge);
                    includedGroupEdges.add(otherId);
                    if (source === sedge.target && target === sedge.source) {
                        reverses[`${sedge.source}|${sedge.target}|${groupEdges.length - 1}`] = true;
                    }
                    processedEdgesSet.add(otherId);
                }
            }
        }
    }
    return { edgeMap, reverses };
};
exports.groupByEndpoints = groupByEndpoints;
/**
 * <zh/> 获取平行边
 *
 * <en/> Get parallel edges
 * @param edge - <zh/> 目标边 | <en/> Target edge
 * @param edges - <zh/> 边集合 | <en/> Edges
 * @param containsSelf - <zh/> 输出结果是否包含目标边 | <en/> Whether the output result contains the target edge
 * @returns <zh/> 平行边集合 | <en/> Parallel edges
 */
const getParallelEdges = (edge, edges, containsSelf) => {
    return edges.filter((e) => (containsSelf || (0, id_1.idOf)(e) !== (0, id_1.idOf)(edge)) && (0, exports.isParallelEdges)(e, edge));
};
exports.getParallelEdges = getParallelEdges;
/**
 * <zh/> 判断两条边是否平行
 *
 * <en/> Determine whether two edges are parallel
 * @param edge1 - <zh/> 边1 | <en/> Edge 1
 * @param edge2 - <zh/> 边2 | <en/> Edge 2
 * @returns <zh/> 是否平行 | <en/> Whether is parallel
 */
const isParallelEdges = (edge1, edge2) => {
    const { sourceNode: src1, targetNode: tgt1 } = edge1.style || {};
    const { sourceNode: src2, targetNode: tgt2 } = edge2.style || {};
    return (src1 === src2 && tgt1 === tgt2) || (src1 === tgt2 && tgt1 === src2);
};
exports.isParallelEdges = isParallelEdges;
//# sourceMappingURL=process-parallel-edges.js.map