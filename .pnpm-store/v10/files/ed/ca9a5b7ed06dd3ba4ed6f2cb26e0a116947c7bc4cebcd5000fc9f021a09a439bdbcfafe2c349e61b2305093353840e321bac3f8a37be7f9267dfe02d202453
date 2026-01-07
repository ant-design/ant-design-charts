"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polyline = void 0;
const bbox_1 = require("../../utils/bbox");
const edge_1 = require("../../utils/edge");
const prefix_1 = require("../../utils/prefix");
const orth_1 = require("../../utils/router/orth");
const shortest_path_1 = require("../../utils/router/shortest-path");
const style_1 = require("../../utils/style");
const base_edge_1 = require("./base-edge");
/**
 * <zh/> 折线
 *
 * <en/> Polyline
 */
class Polyline extends base_edge_1.BaseEdge {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Polyline.defaultStyleProps }, options));
    }
    getControlPoints(attributes) {
        const { router } = attributes;
        const { sourceNode, targetNode } = this;
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes, false);
        let controlPoints = [];
        if (!router) {
            controlPoints = attributes.controlPoints;
        }
        else {
            if (router.type === 'shortest-path') {
                const nodes = this.context.element.getNodes();
                controlPoints = (0, shortest_path_1.aStarSearch)(sourceNode, targetNode, nodes, router);
                if (!controlPoints.length) {
                    controlPoints = (0, orth_1.orth)(sourcePoint, targetPoint, sourceNode, targetNode, attributes.controlPoints, {
                        padding: router.offset,
                    });
                }
            }
            else if (router.type === 'orth') {
                controlPoints = (0, orth_1.orth)(sourcePoint, targetPoint, sourceNode, targetNode, attributes.controlPoints, router);
            }
        }
        return controlPoints;
    }
    getPoints(attributes) {
        const controlPoints = this.getControlPoints(attributes);
        const [newSourcePoint, newTargetPoint] = this.getEndpoints(attributes, true, controlPoints);
        return [newSourcePoint, ...controlPoints, newTargetPoint];
    }
    getKeyPath(attributes) {
        const points = this.getPoints(attributes);
        return (0, edge_1.getPolylinePath)(points, attributes.radius);
    }
    getLoopPath(attributes) {
        const { sourcePort: sourcePortKey, targetPort: targetPortKey, radius } = attributes;
        const node = this.sourceNode;
        const bbox = (0, bbox_1.getNodeBBox)(node);
        // 默认转折点距离为 bbox 的最大宽高的 1/4
        // Default distance of the turning point is 1/4 of the maximum width and height of the bbox
        const defaultDist = Math.max((0, bbox_1.getBBoxWidth)(bbox), (0, bbox_1.getBBoxHeight)(bbox)) / 4;
        const { placement, clockwise, dist = defaultDist, } = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'loop');
        return (0, edge_1.getPolylineLoopPath)(node, radius, placement, clockwise, dist, sourcePortKey, targetPortKey);
    }
}
exports.Polyline = Polyline;
Polyline.defaultStyleProps = {
    radius: 0,
    controlPoints: [],
    router: false,
};
//# sourceMappingURL=polyline.js.map