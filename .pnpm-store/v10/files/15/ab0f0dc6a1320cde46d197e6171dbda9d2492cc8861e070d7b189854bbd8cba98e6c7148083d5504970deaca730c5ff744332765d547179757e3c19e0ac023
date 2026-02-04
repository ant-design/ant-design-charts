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
import { Rect, Text } from '@antv/g';
import { parsePadding } from '../../utils/padding';
import { omitStyleProps, startsWith, subStyleProps } from '../../utils/prefix';
import { mergeOptions } from '../../utils/style';
import { BaseShape } from './base-shape';
/**
 * <zh/> 标签
 *
 * <en/> Label
 * @remarks
 * <zh/> 标签是一种具有背景的文本图形。
 *
 * <en/> Label is a text shape with background.
 */
export class Label extends BaseShape {
    constructor(options) {
        super(mergeOptions({ style: Label.defaultStyleProps }, options));
    }
    isTextStyle(key) {
        return startsWith(key, 'label');
    }
    isBackgroundStyle(key) {
        return startsWith(key, 'background');
    }
    getTextStyle(attributes) {
        const _a = this.getGraphicStyle(attributes), { padding } = _a, style = __rest(_a, ["padding"]);
        return omitStyleProps(style, 'background');
    }
    getBackgroundStyle(attributes) {
        if (attributes.background === false)
            return false;
        const style = this.getGraphicStyle(attributes);
        const { wordWrap, wordWrapWidth, padding } = style;
        const backgroundStyle = subStyleProps(style, 'background');
        const { min: [minX, minY], center: [centerX, centerY], halfExtents: [halfWidth, halfHeight], } = this.shapeMap.text.getGeometryBounds();
        const [top, right, bottom, left] = parsePadding(padding);
        const totalWidth = halfWidth * 2 + left + right;
        const { width, height } = backgroundStyle;
        if (width && height) {
            Object.assign(backgroundStyle, { x: centerX - Number(width) / 2, y: centerY - Number(height) / 2 });
        }
        else {
            Object.assign(backgroundStyle, {
                x: minX - left,
                y: minY - top,
                width: wordWrap ? Math.min(totalWidth, wordWrapWidth + left + right) : totalWidth,
                height: halfHeight * 2 + top + bottom,
            });
        }
        // parse percentage radius
        const { radius } = backgroundStyle;
        // if radius look like '10%', convert it to number
        if (typeof radius === 'string' && radius.endsWith('%')) {
            const percentage = Number(radius.replace('%', '')) / 100;
            backgroundStyle.radius = Math.min(+backgroundStyle.width, +backgroundStyle.height) * percentage;
        }
        return backgroundStyle;
    }
    render(attributes = this.parsedAttributes, container = this) {
        this.upsert('text', Text, this.getTextStyle(attributes), container);
        this.upsert('background', Rect, this.getBackgroundStyle(attributes), container);
    }
    getGeometryBounds() {
        const shape = this.getShape('background') || this.getShape('text');
        return shape.getGeometryBounds();
    }
}
Label.defaultStyleProps = {
    padding: 0,
    fontSize: 12,
    fontFamily: 'system-ui, sans-serif',
    wordWrap: true,
    maxLines: 1,
    wordWrapWidth: 128,
    textOverflow: '...',
    textBaseline: 'middle',
    backgroundOpacity: 0.75,
    backgroundZIndex: -1,
    backgroundLineWidth: 0,
};
//# sourceMappingURL=label.js.map