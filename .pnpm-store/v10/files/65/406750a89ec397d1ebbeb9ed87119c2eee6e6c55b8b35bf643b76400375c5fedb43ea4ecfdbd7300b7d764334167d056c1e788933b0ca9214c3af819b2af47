import { Circle as GCircle } from '@antv/g';
import { ICON_SIZE_RATIO } from '../../constants/element';
import { getEllipseIntersectPoint } from '../../utils/point';
import { mergeOptions } from '../../utils/style';
import { BaseNode } from './base-node';
/**
 * <zh/> 圆形节点
 *
 * <en/> Circle node
 */
export class Circle extends BaseNode {
    constructor(options) {
        super(mergeOptions({ style: Circle.defaultStyleProps }, options));
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', GCircle, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        return Object.assign(Object.assign({}, keyStyle), { r: Math.min(...this.getSize(attributes)) / 2 });
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const { r } = this.getShape('key').attributes;
        const size = r * 2 * ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return getEllipseIntersectPoint(point, keyShapeBounds, useExtendedLine);
    }
}
Circle.defaultStyleProps = {
    size: 32,
};
//# sourceMappingURL=circle.js.map