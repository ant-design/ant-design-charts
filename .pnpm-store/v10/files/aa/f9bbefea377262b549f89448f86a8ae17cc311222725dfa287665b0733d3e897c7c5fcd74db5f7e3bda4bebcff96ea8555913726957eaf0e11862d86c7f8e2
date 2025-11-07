import { ICON_SIZE_RATIO } from '../../constants/element';
import { getHexagonPoints } from '../../utils/element';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 六边形节点
 *
 * <en/> Hexagon node
 */
export class Hexagon extends Polygon {
    constructor(options) {
        super(options);
    }
    getOuterR(attributes) {
        return attributes.outerR || Math.min(...this.getSize(attributes)) / 2;
    }
    getPoints(attributes) {
        return getHexagonPoints(this.getOuterR(attributes));
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const size = this.getOuterR(attributes) * ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
}
//# sourceMappingURL=hexagon.js.map