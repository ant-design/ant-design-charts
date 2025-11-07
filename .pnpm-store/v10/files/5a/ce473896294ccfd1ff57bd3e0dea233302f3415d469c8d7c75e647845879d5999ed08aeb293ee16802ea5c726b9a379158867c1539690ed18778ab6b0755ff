/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */
import { Graph } from '@antv/graphlib';
import { buildLayerMatrix, minBy } from '../util';
export const findType1Conflicts = (g, layering) => {
    const conflicts = {};
    const visitLayer = (prevLayer, layer) => {
        // last visited node in the previous layer that is incident on an inner
        // segment.
        let k0 = 0;
        // Tracks the last node in this layer scanned for crossings with a type-1
        // segment.
        let scanPos = 0;
        const prevLayerLength = prevLayer.length;
        const lastNode = layer === null || layer === void 0 ? void 0 : layer[(layer === null || layer === void 0 ? void 0 : layer.length) - 1];
        layer === null || layer === void 0 ? void 0 : layer.forEach((v, i) => {
            var _a;
            const w = findOtherInnerSegmentNode(g, v);
            const k1 = w ? g.getNode(w.id).data.order : prevLayerLength;
            if (w || v === lastNode) {
                (_a = layer.slice(scanPos, i + 1)) === null || _a === void 0 ? void 0 : _a.forEach((scanNode) => {
                    var _a;
                    (_a = g.getPredecessors(scanNode)) === null || _a === void 0 ? void 0 : _a.forEach((u) => {
                        var _a;
                        const uLabel = g.getNode(u.id);
                        const uPos = uLabel.data.order;
                        if ((uPos < k0 || k1 < uPos) &&
                            !(uLabel.data.dummy && ((_a = g.getNode(scanNode)) === null || _a === void 0 ? void 0 : _a.data.dummy))) {
                            addConflict(conflicts, u.id, scanNode);
                        }
                    });
                });
                scanPos = i + 1;
                k0 = k1;
            }
        });
        return layer;
    };
    if (layering === null || layering === void 0 ? void 0 : layering.length) {
        layering.reduce(visitLayer);
    }
    return conflicts;
};
export const findType2Conflicts = (g, layering) => {
    const conflicts = {};
    function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
        var _a, _b;
        let v;
        for (let i = southPos; i < southEnd; i++) {
            v = south[i];
            if ((_a = g.getNode(v)) === null || _a === void 0 ? void 0 : _a.data.dummy) {
                (_b = g.getPredecessors(v)) === null || _b === void 0 ? void 0 : _b.forEach((u) => {
                    const uNode = g.getNode(u.id);
                    if (uNode.data.dummy &&
                        (uNode.data.order < prevNorthBorder ||
                            uNode.data.order > nextNorthBorder)) {
                        addConflict(conflicts, u.id, v);
                    }
                });
            }
        }
    }
    function getScannedKey(params) {
        // south数组可能很大，不适合做key
        return JSON.stringify(params.slice(1));
    }
    function scanIfNeeded(params, scanCache) {
        const cacheKey = getScannedKey(params);
        if (scanCache.get(cacheKey))
            return;
        scan(...params);
        scanCache.set(cacheKey, true);
    }
    const visitLayer = (north, south) => {
        let prevNorthPos = -1;
        let nextNorthPos;
        let southPos = 0;
        const scanned = new Map();
        south === null || south === void 0 ? void 0 : south.forEach((v, southLookahead) => {
            var _a;
            if (((_a = g.getNode(v)) === null || _a === void 0 ? void 0 : _a.data.dummy) === 'border') {
                const predecessors = g.getPredecessors(v) || [];
                if (predecessors.length) {
                    nextNorthPos = g.getNode(predecessors[0].id).data.order;
                    scanIfNeeded([south, southPos, southLookahead, prevNorthPos, nextNorthPos], scanned);
                    southPos = southLookahead;
                    prevNorthPos = nextNorthPos;
                }
            }
            scanIfNeeded([south, southPos, south.length, nextNorthPos, north.length], scanned);
        });
        return south;
    };
    if (layering === null || layering === void 0 ? void 0 : layering.length) {
        layering.reduce(visitLayer);
    }
    return conflicts;
};
export const findOtherInnerSegmentNode = (g, v) => {
    var _a, _b;
    if ((_a = g.getNode(v)) === null || _a === void 0 ? void 0 : _a.data.dummy) {
        return (_b = g.getPredecessors(v)) === null || _b === void 0 ? void 0 : _b.find((u) => g.getNode(u.id).data.dummy);
    }
};
export const addConflict = (conflicts, v, w) => {
    let vv = v;
    let ww = w;
    if (vv > ww) {
        const tmp = vv;
        vv = ww;
        ww = tmp;
    }
    let conflictsV = conflicts[vv];
    if (!conflictsV) {
        conflicts[vv] = conflictsV = {};
    }
    conflictsV[ww] = true;
};
export const hasConflict = (conflicts, v, w) => {
    let vv = v;
    let ww = w;
    if (vv > ww) {
        const tmp = v;
        vv = ww;
        ww = tmp;
    }
    return !!conflicts[vv];
};
/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
export const verticalAlignment = (g, layering, conflicts, neighborFn) => {
    const root = {};
    const align = {};
    const pos = {};
    // We cache the position here based on the layering because the graph and
    // layering may be out of sync. The layering matrix is manipulated to
    // generate different extreme alignments.
    layering === null || layering === void 0 ? void 0 : layering.forEach((layer) => {
        layer === null || layer === void 0 ? void 0 : layer.forEach((v, order) => {
            root[v] = v;
            align[v] = v;
            pos[v] = order;
        });
    });
    layering === null || layering === void 0 ? void 0 : layering.forEach((layer) => {
        let prevIdx = -1;
        layer === null || layer === void 0 ? void 0 : layer.forEach((v) => {
            let ws = neighborFn(v).map((n) => n.id);
            if (ws.length) {
                ws = ws.sort((a, b) => pos[a] - pos[b]);
                const mp = (ws.length - 1) / 2;
                for (let i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
                    const w = ws[i];
                    if (align[v] === v &&
                        prevIdx < pos[w] &&
                        !hasConflict(conflicts, v, w)) {
                        align[w] = v;
                        align[v] = root[v] = root[w];
                        prevIdx = pos[w];
                    }
                }
            }
        });
    });
    return { root, align };
};
export const horizontalCompaction = (g, layering, root, align, nodesep, edgesep, reverseSep) => {
    var _a;
    // This portion of the algorithm differs from BK due to a number of problems.
    // Instead of their algorithm we construct a new block graph and do two
    // sweeps. The first sweep places blocks with the smallest possible
    // coordinates. The second sweep removes unused space by moving blocks to the
    // greatest coordinates without violating separation.
    const xs = {};
    const blockG = buildBlockGraph(g, layering, root, nodesep, edgesep, reverseSep);
    const borderType = reverseSep ? 'borderLeft' : 'borderRight';
    const iterate = (setXsFunc, nextNodesFunc) => {
        let stack = blockG.getAllNodes();
        let elem = stack.pop();
        const visited = {};
        while (elem) {
            if (visited[elem.id]) {
                setXsFunc(elem.id);
            }
            else {
                visited[elem.id] = true;
                stack.push(elem);
                stack = stack.concat(nextNodesFunc(elem.id));
            }
            elem = stack.pop();
        }
    };
    // First pass, assign smallest coordinates
    const pass1 = (elem) => {
        xs[elem] = (blockG.getRelatedEdges(elem, 'in') || []).reduce((acc, e) => {
            return Math.max(acc, (xs[e.source] || 0) + e.data.weight);
        }, 0);
    };
    // Second pass, assign greatest coordinates
    const pass2 = (elem) => {
        const min = (blockG.getRelatedEdges(elem, 'out') || []).reduce((acc, e) => {
            return Math.min(acc, (xs[e.target] || 0) - e.data.weight);
        }, Number.POSITIVE_INFINITY);
        const node = g.getNode(elem);
        if (min !== Number.POSITIVE_INFINITY &&
            node.data.borderType !== borderType) {
            xs[elem] = Math.max(xs[elem], min);
        }
    };
    iterate(pass1, blockG.getPredecessors.bind(blockG));
    iterate(pass2, blockG.getSuccessors.bind(blockG));
    // Assign x coordinates to all nodes
    (_a = Object.values(align)) === null || _a === void 0 ? void 0 : _a.forEach((v) => {
        xs[v] = xs[root[v]];
    });
    return xs;
};
export const buildBlockGraph = (g, layering, root, nodesep, edgesep, reverseSep) => {
    const blockGraph = new Graph();
    const sepFn = sep(nodesep, edgesep, reverseSep);
    layering === null || layering === void 0 ? void 0 : layering.forEach((layer) => {
        let u;
        layer === null || layer === void 0 ? void 0 : layer.forEach((v) => {
            const vRoot = root[v];
            if (!blockGraph.hasNode(vRoot)) {
                blockGraph.addNode({
                    id: vRoot,
                    data: {},
                });
            }
            if (u) {
                const uRoot = root[u];
                const edge = blockGraph
                    .getRelatedEdges(uRoot, 'out')
                    .find((edge) => edge.target === vRoot);
                if (!edge) {
                    blockGraph.addEdge({
                        id: `e${Math.random()}`,
                        source: uRoot,
                        target: vRoot,
                        data: {
                            weight: Math.max(sepFn(g, v, u), 0),
                        },
                    });
                }
                else {
                    blockGraph.updateEdgeData(edge.id, Object.assign(Object.assign({}, edge.data), { weight: Math.max(sepFn(g, v, u), edge.data.weight || 0) }));
                }
            }
            u = v;
        });
    });
    return blockGraph;
};
/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
export const findSmallestWidthAlignment = (g, xss) => {
    return minBy(Object.values(xss), (xs) => {
        var _a;
        let max = Number.NEGATIVE_INFINITY;
        let min = Number.POSITIVE_INFINITY;
        (_a = Object.keys(xs)) === null || _a === void 0 ? void 0 : _a.forEach((v) => {
            const x = xs[v];
            const halfWidth = width(g, v) / 2;
            max = Math.max(x + halfWidth, max);
            min = Math.min(x - halfWidth, min);
        });
        return max - min;
    });
};
/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
export function alignCoordinates(xss, alignTo) {
    const alignToVals = Object.values(alignTo);
    const alignToMin = Math.min(...alignToVals);
    const alignToMax = Math.max(...alignToVals);
    ['u', 'd'].forEach((vert) => {
        ['l', 'r'].forEach((horiz) => {
            const alignment = vert + horiz;
            const xs = xss[alignment];
            let delta;
            if (xs === alignTo)
                return;
            const xsVals = Object.values(xs);
            delta =
                horiz === 'l'
                    ? alignToMin - Math.min(...xsVals)
                    : alignToMax - Math.max(...xsVals);
            if (delta) {
                xss[alignment] = {};
                Object.keys(xs).forEach((key) => {
                    xss[alignment][key] = xs[key] + delta;
                });
            }
        });
    });
}
export const balance = (xss, align) => {
    const result = {};
    Object.keys(xss.ul).forEach((key) => {
        if (align) {
            result[key] = xss[align.toLowerCase()][key];
        }
        else {
            const values = Object.values(xss).map((x) => x[key]);
            result[key] = (values[0] + values[1]) / 2; // (ur + ul) / 2
        }
    });
    return result;
};
export const positionX = (g, options) => {
    const { align: graphAlign, nodesep = 0, edgesep = 0 } = options || {};
    const layering = buildLayerMatrix(g);
    const conflicts = Object.assign(findType1Conflicts(g, layering), findType2Conflicts(g, layering));
    const xss = {};
    let adjustedLayering;
    ['u', 'd'].forEach((vert) => {
        adjustedLayering =
            vert === 'u' ? layering : Object.values(layering).reverse();
        ['l', 'r'].forEach((horiz) => {
            if (horiz === 'r') {
                adjustedLayering = adjustedLayering.map((inner) => Object.values(inner).reverse());
            }
            const neighborFn = (vert === 'u' ? g.getPredecessors : g.getSuccessors).bind(g);
            const align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
            const xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, nodesep, edgesep, horiz === 'r');
            if (horiz === 'r') {
                Object.keys(xs).forEach((key) => {
                    xs[key] = -xs[key];
                });
            }
            xss[vert + horiz] = xs;
        });
    });
    const smallestWidth = findSmallestWidthAlignment(g, xss);
    alignCoordinates(xss, smallestWidth);
    return balance(xss, graphAlign);
};
export const sep = (nodeSep, edgeSep, reverseSep) => {
    return (g, v, w) => {
        const vLabel = g.getNode(v);
        const wLabel = g.getNode(w);
        let sum = 0;
        let delta = 0;
        sum += vLabel.data.width / 2;
        if (vLabel.data.hasOwnProperty('labelpos')) {
            switch ((vLabel.data.labelpos || '').toLowerCase()) {
                case 'l':
                    delta = -vLabel.data.width / 2;
                    break;
                case 'r':
                    delta = vLabel.data.width / 2;
                    break;
            }
        }
        if (delta) {
            sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        sum += (vLabel.data.dummy ? edgeSep : nodeSep) / 2;
        sum += (wLabel.data.dummy ? edgeSep : nodeSep) / 2;
        sum += wLabel.data.width / 2;
        if (wLabel.data.labelpos) {
            switch ((wLabel.data.labelpos || '').toLowerCase()) {
                case 'l':
                    delta = wLabel.data.width / 2;
                    break;
                case 'r':
                    delta = -wLabel.data.width / 2;
                    break;
            }
        }
        if (delta) {
            sum += reverseSep ? delta : -delta;
        }
        delta = 0;
        return sum;
    };
};
export const width = (g, v) => g.getNode(v).data.width || 0;
//# sourceMappingURL=bk.js.map