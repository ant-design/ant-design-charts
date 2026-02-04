"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ellipse = void 0;
const g_1 = require("@antv/g");
const element_1 = require("../../constants/element");
const point_1 = require("../../utils/point");
const style_1 = require("../../utils/style");
const base_node_1 = require("./base-node");
/**
 * <zh/> 椭圆节点
 *
 * <en/> Ellipse node
 */
class Ellipse extends base_node_1.BaseNode {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Ellipse.defaultStyleProps }, options));
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', g_1.Ellipse, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        const [majorAxis, minorAxis] = this.getSize(attributes);
        return Object.assign(Object.assign({}, keyStyle), { rx: majorAxis / 2, ry: minorAxis / 2 });
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const { rx, ry } = this.getShape('key').attributes;
        const size = Math.min(+rx, +ry) * 2 * element_1.ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return (0, point_1.getEllipseIntersectPoint)(point, keyShapeBounds, useExtendedLine);
    }
}
exports.Ellipse = Ellipse;
Ellipse.defaultStyleProps = {
    size: [45, 35],
};
//# sourceMappingURL=ellipse.js.map