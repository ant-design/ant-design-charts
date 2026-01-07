import { Circle as GCircle } from '@antv/g';
import { getBBoxSize } from '../../utils/bbox';
import { getEllipseIntersectPoint } from '../../utils/point';
import { subStyleProps } from '../../utils/prefix';
import { parseSize } from '../../utils/size';
import { BaseCombo } from './base-combo';
/**
 * <zh/> 圆形组合
 *
 * <en/> Circle combo
 */
export class CircleCombo extends BaseCombo {
    constructor(options) {
        super(options);
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', GCircle, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const { collapsed } = attributes;
        const keyStyle = super.getKeyStyle(attributes);
        const [width] = this.getKeySize(attributes);
        return Object.assign(Object.assign(Object.assign({}, keyStyle), (collapsed && subStyleProps(keyStyle, 'collapsed'))), { r: width / 2 });
    }
    getCollapsedKeySize(attributes) {
        const [collapsedWidth, collapsedHeight] = parseSize(attributes.collapsedSize);
        const collapsedR = Math.max(collapsedWidth, collapsedHeight) / 2;
        return [collapsedR * 2, collapsedR * 2, 0];
    }
    getExpandedKeySize(attributes) {
        const contentBBox = this.getContentBBox(attributes);
        const [width, height] = getBBoxSize(contentBBox);
        const expandedR = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
        return [expandedR * 2, expandedR * 2, 0];
    }
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return getEllipseIntersectPoint(point, keyShapeBounds, useExtendedLine);
    }
}
//# sourceMappingURL=circle.js.map