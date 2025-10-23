"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = void 0;
const element_1 = require("../../constants/element");
const element_2 = require("../../utils/element");
const polygon_1 = require("../shapes/polygon");
/**
 * <zh/> 五角星节点
 *
 * <en/> Star node
 */
class Star extends polygon_1.Polygon {
    constructor(options) {
        super(options);
    }
    getInnerR(attributes) {
        return attributes.innerR || (this.getOuterR(attributes) * 3) / 8;
    }
    getOuterR(attributes) {
        return Math.min(...this.getSize(attributes)) / 2;
    }
    getPoints(attributes) {
        return (0, element_2.getStarPoints)(this.getOuterR(attributes), this.getInnerR(attributes));
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const size = this.getInnerR(attributes) * 2 * element_1.ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
    getPortXY(attributes, style) {
        const { placement = 'top' } = style;
        const bbox = this.getShape('key').getLocalBounds();
        const ports = (0, element_2.getStarPorts)(this.getOuterR(attributes), this.getInnerR(attributes));
        return (0, element_2.getPortXYByPlacement)(bbox, placement, ports, false);
    }
}
exports.Star = Star;
//# sourceMappingURL=star.js.map