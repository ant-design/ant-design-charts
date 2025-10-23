import { ICON_SIZE_RATIO } from '../../constants/element';
import { getPortXYByPlacement, getStarPoints, getStarPorts } from '../../utils/element';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 五角星节点
 *
 * <en/> Star node
 */
export class Star extends Polygon {
    constructor(options) {
        super(options);
    }
    getInnerR(attributes) {
        return attributes.innerR || (this.getOuterR(attributes) * 3) / 8;
    }
    getOuterR(attributes) {
        return Math.min(...this.getSize(attributes)) / 2;
    }
    getPoints(attributes) {
        return getStarPoints(this.getOuterR(attributes), this.getInnerR(attributes));
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const size = this.getInnerR(attributes) * 2 * ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
    getPortXY(attributes, style) {
        const { placement = 'top' } = style;
        const bbox = this.getShape('key').getLocalBounds();
        const ports = getStarPorts(this.getOuterR(attributes), this.getInnerR(attributes));
        return getPortXYByPlacement(bbox, placement, ports, false);
    }
}
//# sourceMappingURL=star.js.map