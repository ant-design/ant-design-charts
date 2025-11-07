import { getDiamondPoints } from '../../utils/element';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 菱形节点
 *
 * <en/> Diamond node
 */
export class Diamond extends Polygon {
    constructor(options) {
        super(options);
    }
    getPoints(attributes) {
        const [width, height] = this.getSize(attributes);
        return getDiamondPoints(width, height);
    }
}
//# sourceMappingURL=diamond.js.map