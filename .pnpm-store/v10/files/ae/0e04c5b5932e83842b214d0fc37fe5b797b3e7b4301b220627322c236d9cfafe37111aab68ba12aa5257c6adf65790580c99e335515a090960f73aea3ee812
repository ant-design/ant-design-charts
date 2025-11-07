"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
const g_1 = require("@antv/g");
const element_1 = require("../../constants/element");
const base_node_1 = require("./base-node");
/**
 * <zh/> 矩形节点
 *
 * <en/> Rect node
 */
class Rect extends base_node_1.BaseNode {
    constructor(options) {
        super(options);
    }
    getKeyStyle(attributes) {
        const [width, height] = this.getSize(attributes);
        return Object.assign(Object.assign({}, super.getKeyStyle(attributes)), { width,
            height, x: -width / 2, y: -height / 2 });
    }
    getIconStyle(attributes) {
        const style = super.getIconStyle(attributes);
        const { width, height } = this.getShape('key').attributes;
        return style
            ? Object.assign({ width: width * element_1.ICON_SIZE_RATIO, height: height * element_1.ICON_SIZE_RATIO }, style)
            : false;
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', g_1.Rect, this.getKeyStyle(attributes), container);
    }
}
exports.Rect = Rect;
//# sourceMappingURL=rect.js.map