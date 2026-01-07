"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const style_1 = require("../../utils/style");
const base_shape_1 = require("./base-shape");
const label_1 = require("./label");
/**
 * <zh/> 徽标
 *
 * <en/> Badge
 * @remarks
 * <zh/> 徽标是一种特殊的标签，通常用于展示数量或状态信息。
 *
 * <en/> Badge is a special label, usually used to display quantity or status information.
 */
class Badge extends base_shape_1.BaseShape {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Badge.defaultStyleProps }, options));
    }
    getBadgeStyle(attributes) {
        return this.getGraphicStyle(attributes);
    }
    render(attributes = this.parsedAttributes, container = this) {
        this.upsert('label', label_1.Label, this.getBadgeStyle(attributes), container);
    }
    getGeometryBounds() {
        const labelShape = this.getShape('label');
        const shape = labelShape.getShape('background') || labelShape.getShape('text');
        return shape.getGeometryBounds();
    }
}
exports.Badge = Badge;
Badge.defaultStyleProps = {
    padding: [2, 4, 2, 4],
    fontSize: 10,
    wordWrap: false,
    backgroundRadius: '50%',
    backgroundOpacity: 1,
};
//# sourceMappingURL=badge.js.map