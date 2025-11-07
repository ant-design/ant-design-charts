"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diamond = void 0;
const element_1 = require("../../utils/element");
const polygon_1 = require("../shapes/polygon");
/**
 * <zh/> 菱形节点
 *
 * <en/> Diamond node
 */
class Diamond extends polygon_1.Polygon {
    constructor(options) {
        super(options);
    }
    getPoints(attributes) {
        const [width, height] = this.getSize(attributes);
        return (0, element_1.getDiamondPoints)(width, height);
    }
}
exports.Diamond = Diamond;
//# sourceMappingURL=diamond.js.map