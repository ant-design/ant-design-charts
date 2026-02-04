"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeBundling = void 0;
const util_1 = require("@antv/util");
const constants_1 = require("../../constants");
const edge_1 = require("../../utils/edge");
const id_1 = require("../../utils/id");
const position_1 = require("../../utils/position");
const vector_1 = require("../../utils/vector");
const base_plugin_1 = require("../base-plugin");
/**
 * <zh/> 边绑定
 *
 * <en/> Edge bundling
 * @remarks
 * <zh/> 边绑定（Edge Bundling）是一种图可视化技术，用于减少复杂网络图中的视觉混乱，并揭示图中的高级别模式和结构。其思想是将相邻的边捆绑在一起。
 *
 * <zh/> G6 中提供的边绑定插件是基于 FEDB（Force-Directed Edge Bundling for Graph Visualization）一文的实现：将边建模为可以相互吸引的柔性弹簧，通过自组织的方式进行捆绑。
 *
 * <en/> Edge bundling is a graph visualization technique used to reduce visual clutter in complex network graphs and reveal high-level patterns and structures in the graph. The idea is to bundle adjacent edges together.
 *
 * <en/> The edge bundling plugin provided in G6 is based on the implementation of the paper FEDB (Force-Directed Edge Bundling for Graph Visualization): modeling edges as flexible springs that can attract each other and bundling them in a self-organizing way.
 */
class EdgeBundling extends base_plugin_1.BasePlugin {
    constructor(context, options) {
        super(context, Object.assign({}, EdgeBundling.defaultOptions, options));
        this.edgeBundles = {};
        this.edgePoints = {};
        this.onBundle = () => {
            const { model, element } = this.context;
            const edges = model.getEdgeData();
            this.divideEdges(this.options.divisions);
            const { cycles, iterRate, divRate } = this.options;
            let { lambda, divisions, iterations } = this.options;
            for (let i = 0; i < cycles; i++) {
                for (let j = 0; j < iterations; j++) {
                    const forces = {};
                    edges.forEach((edge) => {
                        var _a;
                        if (edge.source === edge.target)
                            return;
                        const edgeId = (0, id_1.idOf)(edge);
                        forces[edgeId] = this.getEdgeForces(edge, divisions, lambda);
                        for (let p = 0; p < divisions + 1; p++) {
                            (_a = this.edgePoints)[edgeId] || (_a[edgeId] = []);
                            this.edgePoints[edgeId][p] = (0, vector_1.add)(this.edgePoints[edgeId][p], forces[edgeId][p]);
                        }
                    });
                }
                // parameters for next cycle
                lambda /= 2;
                divisions *= divRate;
                iterations *= iterRate;
                this.divideEdges(divisions);
            }
            edges.forEach((edge) => {
                const edgeId = (0, id_1.idOf)(edge);
                const edgeEl = element.getElement(edgeId);
                edgeEl === null || edgeEl === void 0 ? void 0 : edgeEl.update({ d: (0, edge_1.getPolylinePath)(this.edgePoints[edgeId]) });
            });
        };
        this.bindEvents();
    }
    get nodeMap() {
        const nodes = this.context.model.getNodeData();
        return Object.fromEntries(nodes.map((node) => [(0, id_1.idOf)(node), (0, vector_1.toVector2)((0, position_1.positionOf)(node))]));
    }
    divideEdges(divisions) {
        const edges = this.context.model.getEdgeData();
        edges.forEach((edge) => {
            var _a;
            const edgeId = (0, id_1.idOf)(edge);
            (_a = this.edgePoints)[edgeId] || (_a[edgeId] = []);
            const source = this.nodeMap[edge.source];
            const target = this.nodeMap[edge.target];
            if (divisions === 1) {
                this.edgePoints[edgeId].push(source);
                this.edgePoints[edgeId].push((0, vector_1.divide)((0, vector_1.add)(source, target), 2));
                this.edgePoints[edgeId].push(target);
            }
            else {
                const edgeLength = this.edgePoints[edgeId].length === 0
                    ? // edge is a straight line
                        (0, vector_1.distance)(source, target)
                    : // edge is a polyline
                        getEdgeLength(this.edgePoints[edgeId]);
                const divisionLength = edgeLength / (divisions + 1);
                let currentDivisionLength = divisionLength;
                const newEdgePoints = [source];
                for (let i = 1; i < this.edgePoints[edgeId].length; i++) {
                    const prevEp = this.edgePoints[edgeId][i - 1];
                    const ep = this.edgePoints[edgeId][i];
                    let oriDivisionLength = (0, vector_1.distance)(ep, prevEp);
                    while (oriDivisionLength > currentDivisionLength) {
                        const ratio = currentDivisionLength / oriDivisionLength;
                        const edgePoint = (0, vector_1.add)(prevEp, (0, vector_1.multiply)((0, vector_1.subtract)(ep, prevEp), ratio));
                        newEdgePoints.push(edgePoint);
                        oriDivisionLength -= currentDivisionLength;
                        currentDivisionLength = divisionLength;
                    }
                    currentDivisionLength -= oriDivisionLength;
                }
                newEdgePoints.push(target);
                this.edgePoints[edgeId] = newEdgePoints;
            }
        });
    }
    getVectorPosition(edge) {
        const source = this.nodeMap[edge.source];
        const target = this.nodeMap[edge.target];
        const [vx, vy] = (0, vector_1.subtract)(target, source);
        const length = (0, vector_1.distance)(source, target);
        return { source, target, vx, vy, length };
    }
    measureEdgeCompatibility(edge1, edge2) {
        const vector1 = this.getVectorPosition(edge1);
        const vector2 = this.getVectorPosition(edge2);
        const ac = getAngleCompatibility(vector1, vector2);
        const sc = getScaleCompatibility(vector1, vector2);
        const pc = getPositionCompatibility(vector1, vector2);
        const vc = getVisibilityCompatibility(vector1, vector2);
        return ac * sc * pc * vc;
    }
    getEdgeBundles() {
        const edgeBundles = {};
        const bundleThreshold = this.options.bundleThreshold;
        const edges = this.context.model.getEdgeData();
        edges.forEach((edge1, i) => {
            edges.forEach((edge2, j) => {
                var _a, _b;
                if (j <= i)
                    return;
                const compatibility = this.measureEdgeCompatibility(edge1, edge2);
                if (compatibility >= bundleThreshold) {
                    edgeBundles[_a = (0, id_1.idOf)(edge1)] || (edgeBundles[_a] = []);
                    edgeBundles[(0, id_1.idOf)(edge1)].push(edge2);
                    edgeBundles[_b = (0, id_1.idOf)(edge2)] || (edgeBundles[_b] = []);
                    edgeBundles[(0, id_1.idOf)(edge2)].push(edge1);
                }
            });
        });
        return edgeBundles;
    }
    getSpringForce(divisions, kp) {
        const { pre, cur, next } = divisions;
        return (0, vector_1.multiply)((0, vector_1.subtract)((0, vector_1.add)(pre, next), (0, vector_1.multiply)(cur, 2)), kp);
    }
    getElectrostaticForce(pidx, edge) {
        if ((0, util_1.isEmpty)(this.edgeBundles)) {
            this.edgeBundles = this.getEdgeBundles();
        }
        const edgeBundle = this.edgeBundles[(0, id_1.idOf)(edge)];
        let resForce = [0, 0];
        edgeBundle === null || edgeBundle === void 0 ? void 0 : edgeBundle.forEach((eb) => {
            const p1 = this.edgePoints[(0, id_1.idOf)(eb)][pidx];
            const p2 = this.edgePoints[(0, id_1.idOf)(edge)][pidx];
            const force = (0, vector_1.subtract)(p1, p2);
            const length = (0, vector_1.distance)(p1, p2);
            resForce = (0, vector_1.add)(resForce, (0, vector_1.multiply)(force, 1 / length));
        });
        return resForce;
    }
    getEdgeForces(edge, divisions, lambda) {
        const source = this.nodeMap[edge.source];
        const target = this.nodeMap[edge.target];
        const kp = this.options.K / ((0, vector_1.distance)(source, target) * (divisions + 1));
        const edgePointForces = [[0, 0]];
        const edgeId = (0, id_1.idOf)(edge);
        for (let i = 1; i < divisions; i++) {
            const spring = this.getSpringForce({
                pre: this.edgePoints[edgeId][i - 1],
                cur: this.edgePoints[edgeId][i],
                next: this.edgePoints[edgeId][i + 1] || [0, 0],
            }, kp);
            const electrostatic = this.getElectrostaticForce(i, edge);
            edgePointForces.push((0, vector_1.multiply)((0, vector_1.add)(spring, electrostatic), lambda));
        }
        edgePointForces.push([0, 0]);
        return edgePointForces;
    }
    bindEvents() {
        const { graph } = this.context;
        graph.on(constants_1.GraphEvent.AFTER_RENDER, this.onBundle);
    }
    unbindEvents() {
        const { graph } = this.context;
        graph.off(constants_1.GraphEvent.AFTER_RENDER, this.onBundle);
    }
    destroy() {
        this.unbindEvents();
        super.destroy();
    }
}
exports.EdgeBundling = EdgeBundling;
EdgeBundling.defaultOptions = {
    K: 0.1,
    lambda: 0.1,
    divisions: 1,
    divRate: 2,
    cycles: 6,
    iterations: 90,
    iterRate: 2 / 3,
    bundleThreshold: 0.6,
};
// The larger the angle between edges P and Q, the smaller Ca(P,Q).
// Ca(P,Q) is 0 if P and Q are orthogonal and 1 if P and Q are parallel.
const getAngleCompatibility = (p, q) => {
    return Math.abs((0, vector_1.dot)([p.vx, p.vy], [q.vx, q.vy]) / (p.length * q.length));
};
// Cs(P,Q) is 1 if P and Q have equal length and approaches 0 if the ratio between the longest and the shortest edge approaches ∞.
const getScaleCompatibility = (p, q) => {
    const aLength = (p.length + q.length) / 2;
    return 2 / (aLength / Math.min(p.length, q.length) + Math.max(p.length, q.length) / aLength);
};
// Cp(P,Q) is 1 if Pm and Qm coincide and approaches 0 if ||Pm −Qm|| approaches ∞.
const getPositionCompatibility = (p, q) => {
    const aLength = (p.length + q.length) / 2;
    const pMid = (0, vector_1.divide)((0, vector_1.add)(p.source, p.target), 2);
    const qMid = (0, vector_1.divide)((0, vector_1.add)(q.source, q.target), 2);
    return aLength / (aLength + (0, vector_1.distance)(pMid, qMid));
};
const projectPointToEdge = (p, e) => {
    if (e.source[0] === e.target[0])
        return [e.source[0], p[1]];
    if (e.source[1] === e.target[1])
        return [p[0], e.source[1]];
    const k = (e.source[1] - e.target[1]) / (e.source[0] - e.target[0]);
    const x = (k * k * e.source[0] + k * (p[1] - e.source[1]) + p[0]) / (k * k + 1);
    const y = k * (x - e.source[0]) + e.source[1];
    return [x, y];
};
const getEdgeVisibility = (p, q) => {
    const is = projectPointToEdge(q.source, p);
    const it = projectPointToEdge(q.target, p);
    const iMid = (0, vector_1.divide)((0, vector_1.add)(is, it), 2);
    const pMid = (0, vector_1.divide)((0, vector_1.add)(p.source, p.target), 2);
    if ((0, vector_1.distance)(is, it) === 0)
        return 0;
    return Math.max(0, 1 - (2 * (0, vector_1.distance)(pMid, iMid)) / (0, vector_1.distance)(is, it));
};
const getVisibilityCompatibility = (p, q) => {
    return Math.min(getEdgeVisibility(p, q), getEdgeVisibility(q, p));
};
/**
 * Calculate the length of a polyline
 * @param points - The points of the polyline
 * @returns The length of the polyline
 */
const getEdgeLength = (points) => {
    let length = 0;
    for (let i = 1; i < points.length; i++) {
        length += (0, vector_1.distance)(points[i], points[i - 1]);
    }
    return length;
};
//# sourceMappingURL=index.js.map