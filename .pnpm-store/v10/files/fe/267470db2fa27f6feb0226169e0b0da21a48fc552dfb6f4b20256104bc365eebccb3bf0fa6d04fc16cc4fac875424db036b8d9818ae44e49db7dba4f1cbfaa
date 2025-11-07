import { __awaiter } from "tslib";
import { cloneFormatData, formatNumberFn, formatSizeFn } from './util';
import { handleSingleNodeGraph } from './util/common';
const DEFAULTS_LAYOUT_OPTIONS = {
    radius: null,
    startRadius: null,
    endRadius: null,
    startAngle: 0,
    endAngle: 2 * Math.PI,
    clockwise: true,
    divisions: 1,
    ordering: null,
    angleRatio: 1,
};
/**
 * <zh/> 环形布局
 *
 * <en/> Circular layout
 */
export class CircularLayout {
    constructor(options = {}) {
        this.options = options;
        this.id = 'circular';
        this.options = Object.assign(Object.assign({}, DEFAULTS_LAYOUT_OPTIONS), options);
    }
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericCircularLayout(false, graph, options);
        });
    }
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericCircularLayout(true, graph, options);
        });
    }
    genericCircularLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = Object.assign(Object.assign({}, this.options), options);
            const { width, height, center, divisions, startAngle = 0, endAngle = 2 * Math.PI, angleRatio, ordering, clockwise, nodeSpacing: paramNodeSpacing, nodeSize: paramNodeSize, } = mergedOptions;
            const nodes = graph.getAllNodes();
            const edges = graph.getAllEdges();
            // Calculate center according to `window` if not provided.
            const [calculatedWidth, calculatedHeight, calculatedCenter] = calculateCenter(width, height, center);
            const n = nodes === null || nodes === void 0 ? void 0 : nodes.length;
            if (!n || n === 1) {
                return handleSingleNodeGraph(graph, assign, calculatedCenter);
            }
            const angleStep = (endAngle - startAngle) / n;
            let { radius, startRadius, endRadius } = mergedOptions;
            if (paramNodeSpacing) {
                const nodeSpacing = formatNumberFn(10, paramNodeSpacing);
                const nodeSize = formatSizeFn(10, paramNodeSize);
                let maxNodeSize = -Infinity;
                nodes.forEach((node) => {
                    const nSize = nodeSize(node);
                    if (maxNodeSize < nSize)
                        maxNodeSize = nSize;
                });
                let perimeter = 0;
                nodes.forEach((node, i) => {
                    if (i === 0)
                        perimeter += maxNodeSize || 10;
                    else
                        perimeter += (nodeSpacing(node) || 0) + (maxNodeSize || 10);
                });
                radius = perimeter / (2 * Math.PI);
            }
            else if (!radius && !startRadius && !endRadius) {
                radius = Math.min(calculatedHeight, calculatedWidth) / 2;
            }
            else if (!startRadius && endRadius) {
                startRadius = endRadius;
            }
            else if (startRadius && !endRadius) {
                endRadius = startRadius;
            }
            const astep = angleStep * angleRatio;
            // calculated nodes as temporary result
            let layoutNodes = [];
            if (ordering === 'topology') {
                // layout according to the topology
                layoutNodes = topologyOrdering(graph, nodes);
            }
            else if (ordering === 'topology-directed') {
                // layout according to the topology
                layoutNodes = topologyOrdering(graph, nodes, true);
            }
            else if (ordering === 'degree') {
                // layout according to the descent order of degrees
                layoutNodes = degreeOrdering(graph, nodes);
            }
            else {
                // layout according to the original order in the data.nodes
                layoutNodes = nodes.map((node) => cloneFormatData(node));
            }
            const divN = Math.ceil(n / divisions); // node number in each division
            for (let i = 0; i < n; ++i) {
                let r = radius;
                if (!r && startRadius !== null && endRadius !== null) {
                    r = startRadius + (i * (endRadius - startRadius)) / (n - 1);
                }
                if (!r) {
                    r = 10 + (i * 100) / (n - 1);
                }
                let angle = startAngle +
                    (i % divN) * astep +
                    ((2 * Math.PI) / divisions) * Math.floor(i / divN);
                if (!clockwise) {
                    angle =
                        endAngle -
                            (i % divN) * astep -
                            ((2 * Math.PI) / divisions) * Math.floor(i / divN);
                }
                layoutNodes[i].data.x = calculatedCenter[0] + Math.cos(angle) * r;
                layoutNodes[i].data.y = calculatedCenter[1] + Math.sin(angle) * r;
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
}
/**
 * order the nodes acoording to the graph topology
 * @param graph
 * @param nodes
 * @param directed
 * @returns
 */
const topologyOrdering = (graph, nodes, directed = false) => {
    const orderedCNodes = [cloneFormatData(nodes[0])];
    const pickFlags = {};
    const n = nodes.length;
    pickFlags[nodes[0].id] = true;
    // write children into cnodes
    let k = 0;
    nodes.forEach((node, i) => {
        if (i !== 0) {
            if ((i === n - 1 ||
                graph.getDegree(node.id, 'both') !==
                    graph.getDegree(nodes[i + 1].id, 'both') ||
                graph.areNeighbors(orderedCNodes[k].id, node.id)) &&
                !pickFlags[node.id]) {
                orderedCNodes.push(cloneFormatData(node));
                pickFlags[node.id] = true;
                k++;
            }
            else {
                const children = directed
                    ? graph.getSuccessors(orderedCNodes[k].id)
                    : graph.getNeighbors(orderedCNodes[k].id);
                let foundChild = false;
                for (let j = 0; j < children.length; j++) {
                    const child = children[j];
                    if (graph.getDegree(child.id) === graph.getDegree(node.id) &&
                        !pickFlags[child.id]) {
                        orderedCNodes.push(cloneFormatData(child));
                        pickFlags[child.id] = true;
                        foundChild = true;
                        break;
                    }
                }
                let ii = 0;
                while (!foundChild) {
                    if (!pickFlags[nodes[ii].id]) {
                        orderedCNodes.push(cloneFormatData(nodes[ii]));
                        pickFlags[nodes[ii].id] = true;
                        foundChild = true;
                    }
                    ii++;
                    if (ii === n) {
                        break;
                    }
                }
            }
        }
    });
    return orderedCNodes;
};
/**
 * order the nodes according to their degree
 * @param graph
 * @param nodes
 * @returns
 */
function degreeOrdering(graph, nodes) {
    const orderedNodes = [];
    nodes.forEach((node, i) => {
        orderedNodes.push(cloneFormatData(node));
    });
    orderedNodes.sort((nodeA, nodeB) => graph.getDegree(nodeA.id, 'both') - graph.getDegree(nodeB.id, 'both'));
    return orderedNodes;
}
/**
 * format the invalide width and height, and get the center position
 * @param width
 * @param height
 * @param center
 * @returns
 */
const calculateCenter = (width, height, center) => {
    let calculatedWidth = width;
    let calculatedHeight = height;
    let calculatedCenter = center;
    if (!calculatedWidth && typeof window !== 'undefined') {
        calculatedWidth = window.innerWidth;
    }
    if (!calculatedHeight && typeof window !== 'undefined') {
        calculatedHeight = window.innerHeight;
    }
    if (!calculatedCenter) {
        calculatedCenter = [calculatedWidth / 2, calculatedHeight / 2];
    }
    return [calculatedWidth, calculatedHeight, calculatedCenter];
};
//# sourceMappingURL=circular.js.map