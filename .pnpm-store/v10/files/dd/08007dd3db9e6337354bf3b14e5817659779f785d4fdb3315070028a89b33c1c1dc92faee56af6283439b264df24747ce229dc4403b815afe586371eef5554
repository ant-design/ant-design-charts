import { Rect as GRect } from '@antv/g';
import { ICON_SIZE_RATIO } from '../../constants/element';
import { BaseNode } from './base-node';
/**
 * <zh/> 矩形节点
 *
 * <en/> Rect node
 */
export class Rect extends BaseNode {
    constructor(options) {
        super(options);
    }
    getKeyStyle(attributes) {
        const [width, height] = this.getSize(attributes);
        return Object.assign(Object.assign({}, super.getKeyStyle(attributes)), { width,
            height, x: -width / 2, y: -height / 2 });
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const { width, height } = this.getShape('key').attributes;
        return style
            ? Object.assign({ width: width * ICON_SIZE_RATIO, height: height * ICON_SIZE_RATIO }, style)
            : false;
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', GRect, this.getKeyStyle(attributes), container);
    }
}
//# sourceMappingURL=rect.js.map