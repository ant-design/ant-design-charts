import { Ellipse as GEllipse } from '@antv/g';
import { ICON_SIZE_RATIO } from '../../constants/element';
import { getEllipseIntersectPoint } from '../../utils/point';
import { mergeOptions } from '../../utils/style';
import { BaseNode } from './base-node';
/**
 * <zh/> 椭圆节点
 *
 * <en/> Ellipse node
 */
export class Ellipse extends BaseNode {
    constructor(options) {
        super(mergeOptions({ style: Ellipse.defaultStyleProps }, options));
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', GEllipse, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        const [majorAxis, minorAxis] = this.getSize(attributes);
        return Object.assign(Object.assign({}, keyStyle), { rx: majorAxis / 2, ry: minorAxis / 2 });
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const { rx, ry } = this.getShape('key').attributes;
        const size = Math.min(+rx, +ry) * 2 * ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return getEllipseIntersectPoint(point, keyShapeBounds, useExtendedLine);
    }
}
Ellipse.defaultStyleProps = {
    size: [45, 35],
};
//# sourceMappingURL=ellipse.js.map