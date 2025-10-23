"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const util_1 = require("@antv/util");
const element_1 = require("../../constants/element");
const bbox_1 = require("../../utils/bbox");
const element_2 = require("../../utils/element");
const prefix_1 = require("../../utils/prefix");
const style_1 = require("../../utils/style");
const polygon_1 = require("../shapes/polygon");
/**
 * <zh/> 三角形节点
 *
 * <en/> Triangle node
 */
class Triangle extends polygon_1.Polygon {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Triangle.defaultStyleProps }, options));
    }
    getPoints(attributes) {
        const { direction } = attributes;
        const [width, height] = this.getSize(attributes);
        return (0, element_2.getTrianglePoints)(width, height, direction);
    }
    getPortXY(attributes, style) {
        const { direction } = attributes;
        const { placement = 'top' } = style;
        const bbox = this.getShape('key').getLocalBounds();
        const [width, height] = this.getSize(attributes);
        const ports = (0, element_2.getTrianglePorts)(width, height, direction);
        return (0, element_2.getPortXYByPlacement)(bbox, placement, ports, false);
    }
    // icon 处于内切三角形的重心
    // icon is at the centroid of the triangle
    getIconStyle(attributes) {
        const { icon, iconText, iconSrc, direction } = attributes;
        if (icon === false || (0, util_1.isEmpty)(iconText || iconSrc))
            return false;
        const iconStyle = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'icon');
        const bbox = this.getShape('key').getLocalBounds();
        const [x, y] = (0, bbox_1.getTriangleCenter)(bbox, direction);
        const size = (0, bbox_1.getIncircleRadius)(bbox, direction) * 2 * element_1.ICON_SIZE_RATIO;
        return Object.assign({ x,
            y, width: size, height: size }, iconStyle);
    }
}
exports.Triangle = Triangle;
Triangle.defaultStyleProps = {
    size: 40,
    direction: 'up',
};
//# sourceMappingURL=triangle.js.map