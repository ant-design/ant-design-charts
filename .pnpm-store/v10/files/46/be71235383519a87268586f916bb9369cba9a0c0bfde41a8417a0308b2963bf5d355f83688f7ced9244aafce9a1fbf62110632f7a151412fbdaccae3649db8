import { isEmpty } from '@antv/util';
import { ICON_SIZE_RATIO } from '../../constants/element';
import { getIncircleRadius, getTriangleCenter } from '../../utils/bbox';
import { getPortXYByPlacement, getTrianglePoints, getTrianglePorts } from '../../utils/element';
import { subStyleProps } from '../../utils/prefix';
import { mergeOptions } from '../../utils/style';
import { Polygon } from '../shapes/polygon';
/**
 * <zh/> 三角形节点
 *
 * <en/> Triangle node
 */
export class Triangle extends Polygon {
    constructor(options) {
        super(mergeOptions({ style: Triangle.defaultStyleProps }, options));
    }
    getPoints(attributes) {
        const { direction } = attributes;
        const [width, height] = this.getSize(attributes);
        return getTrianglePoints(width, height, direction);
    }
    getPortXY(attributes, style) {
        const { direction } = attributes;
        const { placement = 'top' } = style;
        const bbox = this.getShape('key').getLocalBounds();
        const [width, height] = this.getSize(attributes);
        const ports = getTrianglePorts(width, height, direction);
        return getPortXYByPlacement(bbox, placement, ports, false);
    }
    // icon 处于内切三角形的重心
    // icon is at the centroid of the triangle
    getIconStyle(attributes) {
        const { icon, iconText, iconSrc, direction } = attributes;
        if (icon === false || isEmpty(iconText || iconSrc))
            return false;
        const iconStyle = subStyleProps(this.getGraphicStyle(attributes), 'icon');
        const bbox = this.getShape('key').getLocalBounds();
        const [x, y] = getTriangleCenter(bbox, direction);
        const size = getIncircleRadius(bbox, direction) * 2 * ICON_SIZE_RATIO;
        return Object.assign({ x,
            y, width: size, height: size }, iconStyle);
    }
}
Triangle.defaultStyleProps = {
    size: 40,
    direction: 'up',
};
//# sourceMappingURL=triangle.js.map