"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arc = void 0;
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("../../../utils/helper");
const SortMethods = __importStar(require("./sort"));
const DEFAULT_OPTIONS = {
    y: 0,
    thickness: 0.05,
    weight: false,
    marginRatio: 0.1,
    id: (node) => node.id,
    source: (edge) => edge.source,
    target: (edge) => edge.target,
    sourceWeight: (edge) => edge.value || 1,
    targetWeight: (edge) => edge.value || 1,
    sortBy: null,
};
/**
 * Layout for Arc / Chord diagram with d3 style.
 */
function Arc(options) {
    const { y, thickness, weight, marginRatio, id, source, target, sourceWeight, targetWeight, sortBy, } = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    function arc(data) {
        // Clone first.
        const nodes = data.nodes.map((n) => (Object.assign({}, n)));
        const edges = data.edges.map((n) => (Object.assign({}, n)));
        // Keep reference in below functions.
        preprocess(nodes, edges);
        sortNodes(nodes, edges);
        layoutNodes(nodes, edges);
        layoutEdges(nodes, edges);
        return { nodes, edges };
    }
    /**
     * Calculate id, value, frequency for node, and source,target for edge.
     */
    function preprocess(nodes, edges) {
        edges.forEach((edge) => {
            edge.source = source(edge);
            edge.target = target(edge);
            edge.sourceWeight = sourceWeight(edge);
            edge.targetWeight = targetWeight(edge);
        });
        // Group edges by source, target.
        const edgesBySource = (0, d3_array_1.group)(edges, (e) => e.source);
        const edgesByTarget = (0, d3_array_1.group)(edges, (e) => e.target);
        nodes.forEach((node) => {
            node.id = id(node);
            const sources = edgesBySource.has(node.id)
                ? edgesBySource.get(node.id)
                : [];
            const targets = edgesByTarget.has(node.id)
                ? edgesByTarget.get(node.id)
                : [];
            node.frequency = sources.length + targets.length;
            node.value =
                (0, d3_array_1.sum)(sources, (d) => d.sourceWeight) +
                    (0, d3_array_1.sum)(targets, (d) => d.targetWeight);
        });
        return { nodes, edges };
    }
    function sortNodes(nodes, edges) {
        const method = typeof sortBy === 'function' ? sortBy : SortMethods[sortBy];
        if (method) {
            nodes.sort(method);
        }
    }
    function layoutNodes(nodes, edges) {
        const size = nodes.length;
        if (!size) {
            throw (0, helper_1.error)("Invalid nodes: it's empty!");
        }
        // No weight.
        if (!weight) {
            const deltaX = 1 / size;
            nodes.forEach((node, i) => {
                node.x = (i + 0.5) * deltaX;
                node.y = y;
            });
            return { nodes, edges };
        }
        // todo: marginRatio should be in [0, 1)
        // todo: thickness shoule be in (0, 1)
        const margin = marginRatio / (2 * size);
        const total = nodes.reduce((prev, node) => (prev += node.value), 0);
        nodes.reduce((deltaX, node) => {
            node.weight = node.value / total;
            node.width = node.weight * (1 - marginRatio);
            node.height = thickness;
            /* points
             * 3---2
             * |   |
             * 0---1
             */
            const minX = margin + deltaX;
            const maxX = minX + node.width;
            const minY = y - thickness / 2;
            const maxY = minY + thickness;
            node.x = [minX, maxX, maxX, minX];
            node.y = [minY, minY, maxY, maxY];
            // Return next deltaX.
            return deltaX + node.width + 2 * margin;
        }, 0);
        return {
            nodes,
            edges,
        };
    }
    /**
     * Get edge layout information from nodes, and save into edge object.
     */
    function layoutEdges(nodes, edges) {
        const nodesMap = new Map(nodes.map((d) => [d.id, d]));
        if (!weight) {
            edges.forEach((edge) => {
                const sourceId = source(edge);
                const targetId = target(edge);
                const sourceNode = nodesMap.get(sourceId);
                const targetNode = nodesMap.get(targetId);
                // Edge's layout information is Equal with node.
                if (sourceNode && targetNode) {
                    edge.x = [sourceNode.x, targetNode.x];
                    edge.y = [sourceNode.y, targetNode.y];
                }
            });
            return { nodes, edges };
        }
        // Initial edge.x, edge.y.
        edges.forEach((edge) => {
            edge.x = [0, 0, 0, 0];
            edge.y = [y, y, y, y];
        });
        // Group edges by source, target.
        const edgesBySource = (0, d3_array_1.group)(edges, (e) => e.source);
        const edgesByTarget = (0, d3_array_1.group)(edges, (e) => e.target);
        // When weight = true, we need to calculation the bbox of edge start/end.
        nodes.forEach((node) => {
            const { edges, width, x, y, value, id } = node;
            const sourceEdges = edgesBySource.get(id) || [];
            const targetEdges = edgesByTarget.get(id) || [];
            let offset = 0;
            /* points
             * 0----------2
             * |          |
             * 1----------3
             */
            sourceEdges.map((edge) => {
                const w = (edge.sourceWeight / value) * width;
                edge.x[0] = x[0] + offset;
                edge.x[1] = x[0] + offset + w;
                offset += w;
            });
            targetEdges.forEach((edge) => {
                const w = (edge.targetWeight / value) * width;
                edge.x[3] = x[0] + offset;
                edge.x[2] = x[0] + offset + w;
                offset += w;
            });
        });
    }
    return arc;
}
exports.Arc = Arc;
//# sourceMappingURL=arc.js.map