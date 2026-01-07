"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const g_1 = require("@antv/g");
const element_1 = require("../../constants/element");
const point_1 = require("../../utils/point");
const style_1 = require("../../utils/style");
const base_node_1 = require("./base-node");
/**
 * <zh/> 圆形节点
 *
 * <en/> Circle node
 */
class Circle extends base_node_1.BaseNode {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Circle.defaultStyleProps }, options));
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', g_1.Circle, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        return Object.assign(Object.assign({}, keyStyle), { r: Math.min(...this.getSize(attributes)) / 2 });
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const { r } = this.getShape('key').attributes;
        const size = r * 2 * element_1.ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return (0, point_1.getEllipseIntersectPoint)(point, keyShapeBounds, useExtendedLine);
    }
}
exports.Circle = Circle;
Circle.defaultStyleProps = {
    size: 32,
};
//# sourceMappingURL=circle.js.map