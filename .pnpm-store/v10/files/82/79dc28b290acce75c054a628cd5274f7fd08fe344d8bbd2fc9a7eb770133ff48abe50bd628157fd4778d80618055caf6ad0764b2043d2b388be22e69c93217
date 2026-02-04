import { __awaiter } from "tslib";
import { Graph as IGraph } from '@antv/graphlib';
import { isNumber } from '@antv/util';
import { cloneFormatData } from './util';
const DEFAULTS_LAYOUT_OPTIONS = {
    maxIteration: 1000,
    gravity: 10,
    speed: 5,
    clustering: false,
    clusterGravity: 10,
    width: 300,
    height: 300,
    nodeClusterBy: 'cluster',
};
const SPEED_DIVISOR = 800;
/**
 * <zh/> Fruchterman 力导向布局
 *
 * <en/> Fruchterman force-directed layout
 */
export class FruchtermanLayout {
    constructor(options = {}) {
        this.options = options;
        this.id = 'fruchterman';
        this.timeInterval = 0;
        this.running = false;
        this.options = Object.assign(Object.assign({}, DEFAULTS_LAYOUT_OPTIONS), options);
    }
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericFruchtermanLayout(false, graph, options);
        });
    }
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericFruchtermanLayout(true, graph, options);
        });
    }
    /**
     * Stop simulation immediately.
     */
    stop() {
        if (this.timeInterval && typeof window !== 'undefined') {
            window.clearInterval(this.timeInterval);
        }
        this.running = false;
    }
    /**
     * Manually steps the simulation by the specified number of iterations.
     * @see https://github.com/d3/d3-force#simulation_tick
     */
    tick(iterations = this.options.maxIteration || 1) {
        if (this.lastResult) {
            return this.lastResult;
        }
        for (let i = 0; i < iterations; i++) {
            this.runOneStep(this.lastGraph, this.lastClusterMap, this.lastOptions);
        }
        const result = {
            nodes: this.lastLayoutNodes,
            edges: this.lastLayoutEdges,
        };
        if (this.lastAssign) {
            result.nodes.forEach((node) => this.lastGraph.mergeNodeData(node.id, {
                x: node.data.x,
                y: node.data.y,
                z: this.options.dimensions === 3 ? node.data.z : undefined,
            }));
        }
        return result;
    }
    genericFruchtermanLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.running)
                return;
            const formattedOptions = this.formatOptions(options);
            const { dimensions, width, height, center, clustering, nodeClusterBy, maxIteration, onTick, } = formattedOptions;
            const nodes = graph.getAllNodes();
            const edges = graph.getAllEdges();
            if (!(nodes === null || nodes === void 0 ? void 0 : nodes.length)) {
                const result = { nodes: [], edges };
                this.lastResult = result;
                return result;
            }
            if (nodes.length === 1) {
                if (assign) {
                    graph.mergeNodeData(nodes[0].id, {
                        x: center[0],
                        y: center[1],
                        z: dimensions === 3 ? center[2] : undefined,
                    });
                }
                const result = {
                    nodes: [
                        Object.assign(Object.assign({}, nodes[0]), { data: Object.assign(Object.assign({}, nodes[0].data), { x: center[0], y: center[1], z: dimensions === 3 ? center[2] : undefined }) }),
                    ],
                    edges,
                };
                this.lastResult = result;
                return result;
            }
            const layoutNodes = nodes.map((node) => cloneFormatData(node, [width, height]));
            const calcGraph = new IGraph({
                nodes: layoutNodes,
                edges,
            });
            // clustering info
            const clusterMap = {};
            if (clustering) {
                layoutNodes.forEach((node) => {
                    const clusterValue = node.data[nodeClusterBy];
                    if (!clusterMap[clusterValue]) {
                        clusterMap[clusterValue] = {
                            name: clusterValue,
                            cx: 0,
                            cy: 0,
                            count: 0,
                        };
                    }
                });
            }
            // Use them later in `tick`.
            this.lastLayoutNodes = layoutNodes;
            this.lastLayoutEdges = edges;
            this.lastAssign = assign;
            this.lastGraph = calcGraph;
            this.lastOptions = formattedOptions;
            this.lastClusterMap = clusterMap;
            if (typeof window === 'undefined')
                return;
            let iter = 0;
            return new Promise((resolve) => {
                // interval for render the result after each iteration
                this.timeInterval = window.setInterval(() => {
                    if (!this.running) {
                        resolve({ nodes: layoutNodes, edges });
                        return;
                    }
                    this.runOneStep(calcGraph, clusterMap, formattedOptions);
                    if (assign) {
                        layoutNodes.forEach(({ id, data }) => graph.mergeNodeData(id, {
                            x: data.x,
                            y: data.y,
                            z: dimensions === 3 ? data.z : undefined,
                        }));
                    }
                    onTick === null || onTick === void 0 ? void 0 : onTick({
                        nodes: layoutNodes,
                        edges,
                    });
                    iter++;
                    if (iter >= maxIteration) {
                        window.clearInterval(this.timeInterval);
                        resolve({ nodes: layoutNodes, edges });
                    }
                }, 0);
                this.running = true;
            });
        });
    }
    formatOptions(options = {}) {
        const mergedOptions = Object.assign(Object.assign({}, this.options), options);
        const { clustering, nodeClusterBy } = mergedOptions;
        const { center: propsCenter, width: propsWidth, height: propsHeight, } = mergedOptions;
        mergedOptions.width =
            !propsWidth && typeof window !== 'undefined'
                ? window.innerWidth
                : propsWidth;
        mergedOptions.height =
            !propsHeight && typeof window !== 'undefined'
                ? window.innerHeight
                : propsHeight;
        mergedOptions.center = !propsCenter
            ? [mergedOptions.width / 2, mergedOptions.height / 2]
            : propsCenter;
        mergedOptions.clustering = clustering && !!nodeClusterBy;
        return mergedOptions;
    }
    runOneStep(calcGraph, clusterMap, options) {
        const { dimensions, height, width, gravity, center, speed, clustering, nodeClusterBy, clusterGravity: propsClusterGravity, } = options;
        const area = height * width;
        const maxDisplace = Math.sqrt(area) / 10;
        const nodes = calcGraph.getAllNodes();
        const k2 = area / (nodes.length + 1);
        const k = Math.sqrt(k2);
        const displacements = {};
        this.applyCalculate(calcGraph, displacements, k, k2);
        // gravity for clusters
        if (clustering) {
            // reset the clustering centers
            for (const key in clusterMap) {
                clusterMap[key].cx = 0;
                clusterMap[key].cy = 0;
                clusterMap[key].count = 0;
            }
            // re-compute clustering centers
            nodes.forEach((node) => {
                const { data } = node; // node is one of layoutNodes, which is formatted and data field exists
                const c = clusterMap[data[nodeClusterBy]];
                if (isNumber(data.x)) {
                    c.cx += data.x;
                }
                if (isNumber(data.y)) {
                    c.cy += data.y;
                }
                c.count++;
            });
            for (const key in clusterMap) {
                clusterMap[key].cx /= clusterMap[key].count;
                clusterMap[key].cy /= clusterMap[key].count;
            }
            // compute the cluster gravity forces
            const clusterGravity = (propsClusterGravity || gravity);
            nodes.forEach((node, j) => {
                const { id, data } = node;
                if (!isNumber(data.x) || !isNumber(data.y))
                    return;
                const c = clusterMap[data[nodeClusterBy]];
                const distLength = Math.sqrt((data.x - c.cx) * (data.x - c.cx) + (data.y - c.cy) * (data.y - c.cy));
                const gravityForce = k * clusterGravity;
                displacements[id].x -= (gravityForce * (data.x - c.cx)) / distLength;
                displacements[id].y -= (gravityForce * (data.y - c.cy)) / distLength;
            });
        }
        // gravity
        nodes.forEach((node, j) => {
            const { id, data } = node;
            if (!isNumber(data.x) || !isNumber(data.y))
                return;
            const gravityForce = 0.01 * k * gravity;
            displacements[id].x -= gravityForce * (data.x - center[0]);
            displacements[id].y -= gravityForce * (data.y - center[1]);
            if (dimensions === 3) {
                displacements[id].z -= gravityForce * (data.z - center[2]);
            }
        });
        // move
        nodes.forEach((node, j) => {
            const { id, data } = node;
            if (isNumber(data.fx) && isNumber(data.fy)) {
                data.x = data.fx;
                data.y = data.fy;
                if (dimensions === 3) {
                    data.z = data.fz;
                }
                return;
            }
            if (!isNumber(data.x) || !isNumber(data.y))
                return;
            const distLength = Math.sqrt(displacements[id].x * displacements[id].x +
                displacements[id].y * displacements[id].y +
                (dimensions === 3 ? displacements[id].z * displacements[id].z : 0));
            if (distLength > 0) {
                // && !n.isFixed()
                const limitedDist = Math.min(maxDisplace * (speed / SPEED_DIVISOR), distLength);
                calcGraph.mergeNodeData(id, {
                    x: data.x + (displacements[id].x / distLength) * limitedDist,
                    y: data.y + (displacements[id].y / distLength) * limitedDist,
                    z: dimensions === 3
                        ? data.z + (displacements[id].z / distLength) * limitedDist
                        : undefined,
                });
            }
        });
    }
    applyCalculate(calcGraph, displacements, k, k2) {
        this.calRepulsive(calcGraph, displacements, k2);
        this.calAttractive(calcGraph, displacements, k);
    }
    calRepulsive(calcGraph, displacements, k2) {
        const nodes = calcGraph.getAllNodes();
        nodes.forEach(({ data: v, id: vid }, i) => {
            displacements[vid] = { x: 0, y: 0, z: 0 };
            nodes.forEach(({ data: u, id: uid }, j) => {
                if (i <= j ||
                    !isNumber(v.x) ||
                    !isNumber(u.x) ||
                    !isNumber(v.y) ||
                    !isNumber(u.y)) {
                    return;
                }
                let vecX = v.x - u.x;
                let vecY = v.y - u.y;
                let vecZ = this.options.dimensions === 3 ? v.z - u.z : 0;
                let lengthSqr = vecX * vecX + vecY * vecY + vecZ * vecZ;
                if (lengthSqr === 0) {
                    lengthSqr = 1;
                    vecX = 0.01;
                    vecY = 0.01;
                    vecZ = 0.01;
                }
                const common = k2 / lengthSqr;
                const dispX = vecX * common;
                const dispY = vecY * common;
                const dispZ = vecZ * common;
                displacements[vid].x += dispX;
                displacements[vid].y += dispY;
                displacements[uid].x -= dispX;
                displacements[uid].y -= dispY;
                if (this.options.dimensions === 3) {
                    displacements[vid].z += dispZ;
                    displacements[uid].z -= dispZ;
                }
            });
        });
    }
    calAttractive(calcGraph, displacements, k) {
        const edges = calcGraph.getAllEdges();
        edges.forEach((e) => {
            const { source, target } = e;
            if (!source || !target || source === target) {
                return;
            }
            const { data: u } = calcGraph.getNode(source);
            const { data: v } = calcGraph.getNode(target);
            if (!isNumber(v.x) ||
                !isNumber(u.x) ||
                !isNumber(v.y) ||
                !isNumber(u.y)) {
                return;
            }
            const vecX = v.x - u.x;
            const vecY = v.y - u.y;
            const vecZ = this.options.dimensions === 3 ? v.z - u.z : 0;
            const common = Math.sqrt(vecX * vecX + vecY * vecY + vecZ * vecZ) / k;
            const dispX = vecX * common;
            const dispY = vecY * common;
            const dispZ = vecZ * common;
            displacements[source].x += dispX;
            displacements[source].y += dispY;
            displacements[target].x -= dispX;
            displacements[target].y -= dispY;
            if (this.options.dimensions === 3) {
                displacements[source].z += dispZ;
                displacements[target].z -= dispZ;
            }
        });
    }
}
//# sourceMappingURL=fruchterman.js.map