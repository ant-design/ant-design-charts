"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexagon = void 0;
const element_1 = require("../../constants/element");
const element_2 = require("../../utils/element");
const polygon_1 = require("../shapes/polygon");
/**
 * <zh/> 六边形节点
 *
 * <en/> Hexagon node
 */
class Hexagon extends polygon_1.Polygon {
    constructor(options) {
        super(options);
    }
    getOuterR(attributes) {
        return attributes.outerR || Math.min(...this.getSize(attributes)) / 2;
    }
    getPoints(attributes) {
        return (0, element_2.getHexagonPoints)(this.getOuterR(attributes));
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const size = this.getOuterR(attributes) * element_1.ICON_SIZE_RATIO;
        return style ? Object.assign({ width: size, height: size }, style) : false;
    }
}
exports.Hexagon = Hexagon;
//# sourceMappingURL=hexagon.js.map