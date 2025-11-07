"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const g_1 = require("@antv/g");
const element_1 = require("../../constants/element");
const prefix_1 = require("../../utils/prefix");
const style_1 = require("../../utils/style");
const vector_1 = require("../../utils/vector");
const shapes_1 = require("../shapes");
const image_1 = require("../shapes/image");
const base_node_1 = require("./base-node");
/**
 * <zh/> 图片节点
 *
 * <en/> Image node
 */
class Image extends base_node_1.BaseNode {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Image.defaultStyleProps }, options));
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
        const haloStyle = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'halo');
        const haloLineWidth = Number(haloStyle.lineWidth);
        const [width, height] = (0, vector_1.add)(this.getSize(attributes), [haloLineWidth, haloLineWidth]);
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
            ? Object.assign({ width: width * element_1.ICON_SIZE_RATIO, height: height * element_1.ICON_SIZE_RATIO }, style)
            : false;
    }
    drawKeyShape(attributes, container) {
        const image = this.upsert('key', shapes_1.Image, this.getKeyStyle(attributes), container);
        (0, image_1.connectImage)(this);
        return image;
    }
    drawHaloShape(attributes, container) {
        this.upsert('halo', g_1.Rect, this.getHaloStyle(attributes), container);
    }
    update(attr) {
        super.update(attr);
        if (attr && ('x' in attr || 'y' in attr || 'z' in attr)) {
            (0, image_1.dispatchPositionChange)(this);
        }
    }
}
exports.Image = Image;
Image.defaultStyleProps = {
    size: 32,
};
//# sourceMappingURL=image.js.map