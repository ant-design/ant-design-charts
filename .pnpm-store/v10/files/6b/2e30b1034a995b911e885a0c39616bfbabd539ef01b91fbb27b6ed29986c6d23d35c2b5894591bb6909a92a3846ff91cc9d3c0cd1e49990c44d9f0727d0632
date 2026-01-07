import { getBBoxHeight, getBBoxWidth, getNodeBBox } from '../../utils/bbox';
import { getPolylineLoopPath, getPolylinePath } from '../../utils/edge';
import { subStyleProps } from '../../utils/prefix';
import { orth } from '../../utils/router/orth';
import { aStarSearch } from '../../utils/router/shortest-path';
import { mergeOptions } from '../../utils/style';
import { BaseEdge } from './base-edge';
/**
 * <zh/> 折线
 *
 * <en/> Polyline
 */
export class Polyline extends BaseEdge {
    constructor(options) {
        super(mergeOptions({ style: Polyline.defaultStyleProps }, options));
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
                controlPoints = aStarSearch(sourceNode, targetNode, nodes, router);
                if (!controlPoints.length) {
                    controlPoints = orth(sourcePoint, targetPoint, sourceNode, targetNode, attributes.controlPoints, {
                        padding: router.offset,
                    });
                }
            }
            else if (router.type === 'orth') {
                controlPoints = orth(sourcePoint, targetPoint, sourceNode, targetNode, attributes.controlPoints, router);
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
        return getPolylinePath(points, attributes.radius);
    }
    getLoopPath(attributes) {
        const { sourcePort: sourcePortKey, targetPort: targetPortKey, radius } = attributes;
        const node = this.sourceNode;
        const bbox = getNodeBBox(node);
        // 默认转折点距离为 bbox 的最大宽高的 1/4
        // Default distance of the turning point is 1/4 of the maximum width and height of the bbox
        const defaultDist = Math.max(getBBoxWidth(bbox), getBBoxHeight(bbox)) / 4;
        const { placement, clockwise, dist = defaultDist, } = subStyleProps(this.getGraphicStyle(attributes), 'loop');
        return getPolylineLoopPath(node, radius, placement, clockwise, dist, sourcePortKey, targetPortKey);
    }
}
Polyline.defaultStyleProps = {
    radius: 0,
    controlPoints: [],
    router: false,
};
//# sourceMappingURL=polyline.js.map