import { __awaiter } from "tslib";
import { isFunction, isNumber, isObject, isString } from '@antv/util';
import { cloneFormatData, isArray } from './util';
import { handleSingleNodeGraph } from './util/common';
import { parseSize } from './util/size';
const DEFAULTS_LAYOUT_OPTIONS = {
    nodeSize: 30,
    nodeSpacing: 10,
    preventOverlap: false,
    sweep: undefined,
    equidistant: false,
    startAngle: (3 / 2) * Math.PI,
    clockwise: true,
    maxLevelDiff: undefined,
    sortBy: 'degree',
};
/**
 * <zh/> 同心圆布局
 *
 * <en/> Concentric layout
 */
export class ConcentricLayout {
    constructor(options = {}) {
        this.options = options;
        this.id = 'concentric';
        this.options = Object.assign(Object.assign({}, DEFAULTS_LAYOUT_OPTIONS), options);
    }
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericConcentricLayout(false, graph, options);
        });
    }
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericConcentricLayout(true, graph, options);
        });
    }
    genericConcentricLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = Object.assign(Object.assign({}, this.options), options);
            const { center: propsCenter, width: propsWidth, height: propsHeight, sortBy: propsSortBy, maxLevelDiff: propsMaxLevelDiff, sweep: propsSweep, clockwise, equidistant, preventOverlap, startAngle = (3 / 2) * Math.PI, nodeSize, nodeSpacing, } = mergedOptions;
            const nodes = graph.getAllNodes();
            const edges = graph.getAllEdges();
            const width = !propsWidth && typeof window !== 'undefined'
                ? window.innerWidth
                : propsWidth;
            const height = !propsHeight && typeof window !== 'undefined'
                ? window.innerHeight
                : propsHeight;
            const center = (!propsCenter ? [width / 2, height / 2] : propsCenter);
            if (!(nodes === null || nodes === void 0 ? void 0 : nodes.length) || nodes.length === 1) {
                return handleSingleNodeGraph(graph, assign, center);
            }
            const layoutNodes = [];
            let maxNodeSize;
            let maxNodeSpacing = 0;
            if (isArray(nodeSize)) {
                maxNodeSize = Math.max(nodeSize[0], nodeSize[1]);
            }
            else if (isFunction(nodeSize)) {
                maxNodeSize = -Infinity;
                nodes.forEach((node) => {
                    const currentSize = Math.max(...parseSize(nodeSize(node)));
                    if (currentSize > maxNodeSize)
                        maxNodeSize = currentSize;
                });
            }
            else {
                maxNodeSize = nodeSize;
            }
            if (isArray(nodeSpacing)) {
                maxNodeSpacing = Math.max(nodeSpacing[0], nodeSpacing[1]);
            }
            else if (isNumber(nodeSpacing)) {
                maxNodeSpacing = nodeSpacing;
            }
            nodes.forEach((node) => {
                const cnode = cloneFormatData(node);
                layoutNodes.push(cnode);
                let nodeSize = maxNodeSize;
                const { data } = cnode;
                if (isArray(data.size)) {
                    nodeSize = Math.max(data.size[0], data.size[1]);
                }
                else if (isNumber(data.size)) {
                    nodeSize = data.size;
                }
                else if (isObject(data.size)) {
                    nodeSize = Math.max(data.size.width, data.size.height);
                }
                maxNodeSize = Math.max(maxNodeSize, nodeSize);
                if (isFunction(nodeSpacing)) {
                    maxNodeSpacing = Math.max(nodeSpacing(node), maxNodeSpacing);
                }
            });
            // layout
            const nodeIdxMap = {};
            layoutNodes.forEach((node, i) => {
                nodeIdxMap[node.id] = i;
            });
            // get the node degrees
            let sortBy = propsSortBy;
            if (!isString(sortBy) ||
                layoutNodes[0].data[sortBy] === undefined) {
                sortBy = 'degree';
            }
            if (sortBy === 'degree') {
                layoutNodes.sort((n1, n2) => graph.getDegree(n2.id, 'both') - graph.getDegree(n1.id, 'both'));
            }
            else {
                // sort nodes by value
                layoutNodes.sort((n1, n2) => n2.data[sortBy] - n1.data[sortBy]);
            }
            const maxValueNode = layoutNodes[0];
            const maxLevelDiff = (propsMaxLevelDiff ||
                (sortBy === 'degree'
                    ? graph.getDegree(maxValueNode.id, 'both')
                    : maxValueNode.data[sortBy])) / 4;
            // put the values into levels
            const levels = [{ nodes: [] }];
            let currentLevel = levels[0];
            layoutNodes.forEach((node) => {
                if (currentLevel.nodes.length > 0) {
                    const diff = sortBy === 'degree'
                        ? Math.abs(graph.getDegree(currentLevel.nodes[0].id, 'both') -
                            graph.getDegree(node.id, 'both'))
                        : Math.abs(currentLevel.nodes[0].data[sortBy] -
                            node.data[sortBy]);
                    if (maxLevelDiff && diff >= maxLevelDiff) {
                        currentLevel = { nodes: [] };
                        levels.push(currentLevel);
                    }
                }
                currentLevel.nodes.push(node);
            });
            // create positions for levels
            let minDist = maxNodeSize + maxNodeSpacing; // min dist between nodes
            if (!preventOverlap) {
                // then strictly constrain to bb
                const firstLvlHasMulti = levels.length > 0 && levels[0].nodes.length > 1;
                const maxR = Math.min(width, height) / 2 - minDist;
                const rStep = maxR / (levels.length + (firstLvlHasMulti ? 1 : 0));
                minDist = Math.min(minDist, rStep);
            }
            // find the metrics for each level
            let r = 0;
            levels.forEach((level) => {
                const sweep = propsSweep === undefined
                    ? 2 * Math.PI - (2 * Math.PI) / level.nodes.length
                    : propsSweep;
                level.dTheta = sweep / Math.max(1, level.nodes.length - 1);
                // calculate the radius
                if (level.nodes.length > 1 && preventOverlap) {
                    // but only if more than one node (can't overlap)
                    const dcos = Math.cos(level.dTheta) - Math.cos(0);
                    const dsin = Math.sin(level.dTheta) - Math.sin(0);
                    const rMin = Math.sqrt((minDist * minDist) / (dcos * dcos + dsin * dsin)); // s.t. no nodes overlapping
                    r = Math.max(rMin, r);
                }
                level.r = r;
                r += minDist;
            });
            if (equidistant) {
                let rDeltaMax = 0;
                let rr = 0;
                for (let i = 0; i < levels.length; i++) {
                    const level = levels[i];
                    const rDelta = (level.r || 0) - rr;
                    rDeltaMax = Math.max(rDeltaMax, rDelta);
                }
                rr = 0;
                levels.forEach((level, i) => {
                    if (i === 0) {
                        rr = level.r || 0;
                    }
                    level.r = rr;
                    rr += rDeltaMax;
                });
            }
            // calculate the node positions
            levels.forEach((level) => {
                const dTheta = level.dTheta || 0;
                const rr = level.r || 0;
                level.nodes.forEach((node, j) => {
                    const theta = startAngle + (clockwise ? 1 : -1) * dTheta * j;
                    node.data.x = center[0] + rr * Math.cos(theta);
                    node.data.y = center[1] + rr * Math.sin(theta);
                });
            });
            if (assign) {
                layoutNodes.forEach((node) => graph.mergeNodeData(node.id, {
                    x: node.data.x,
                    y: node.data.y,
                }));
            }
            const result = {
                nodes: layoutNodes,
                edges,
            };
            return result;
        });
    }
}
//# sourceMappingURL=concentric.js.map