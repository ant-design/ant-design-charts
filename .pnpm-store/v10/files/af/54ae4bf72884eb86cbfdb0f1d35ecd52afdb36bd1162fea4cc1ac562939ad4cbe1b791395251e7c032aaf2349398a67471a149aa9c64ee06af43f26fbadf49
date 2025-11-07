var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Rect as GRect } from '@antv/g';
import { ICON_SIZE_RATIO } from '../../constants/element';
import { subStyleProps } from '../../utils/prefix';
import { mergeOptions } from '../../utils/style';
import { add } from '../../utils/vector';
import { Image as ImageShape } from '../shapes';
import { connectImage, dispatchPositionChange } from '../shapes/image';
import { BaseNode } from './base-node';
/**
 * <zh/> 图片节点
 *
 * <en/> Image node
 */
export class Image extends BaseNode {
    constructor(options) {
        super(mergeOptions({ style: Image.defaultStyleProps }, options));
    }
    getKeyStyle(attributes) {
        const [width, height] = this.getSize(attributes);
        const _a = super.getKeyStyle(attributes), { fillOpacity, opacity = fillOpacity } = _a, keyStyle = __rest(_a, ["fillOpacity", "opacity"]);
        return Object.assign(Object.assign({ opacity }, keyStyle), { width,
            height, x: -width / 2, y: -height / 2 });
    }
    getBounds() {
        return this.getShape('key').getBounds();
    }
    getHaloStyle(attributes) {
        if (attributes.halo === false)
            return false;
        const _a = this.getShape('key').attributes, { fill: keyStyleFill, stroke: keyStyleStroke } = _a, keyStyle = __rest(_a, ["fill", "stroke"]);
        const haloStyle = subStyleProps(this.getGraphicStyle(attributes), 'halo');
        const haloLineWidth = Number(haloStyle.lineWidth);
        const [width, height] = add(this.getSize(attributes), [haloLineWidth, haloLineWidth]);
        const { lineWidth } = haloStyle;
        const recalculate = {
            fill: 'transparent',
            lineWidth: lineWidth / 2,
            width: width - lineWidth / 2,
            height: height - lineWidth / 2,
            x: -(width - lineWidth / 2) / 2,
            y: -(height - lineWidth / 2) / 2,
        };
        return Object.assign(Object.assign({}, haloStyle), recalculate);
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const [width, height] = this.getSize(attributes);
        return style
            ? Object.assign({ width: width * ICON_SIZE_RATIO, height: height * ICON_SIZE_RATIO }, style)
            : false;
    }
    drawKeyShape(attributes, container) {
        const image = this.upsert('key', ImageShape, this.getKeyStyle(attributes), container);
        connectImage(this);
        return image;
    }
    drawHaloShape(attributes, container) {
        this.upsert('halo', GRect, this.getHaloStyle(attributes), container);
    }
    update(attr) {
        super.update(attr);
        if (attr && ('x' in attr || 'y' in attr || 'z' in attr)) {
            dispatchPositionChange(this);
        }
    }
}
Image.defaultStyleProps = {
    size: 32,
};
//# sourceMappingURL=image.js.map