"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectCombo = void 0;
const g_1 = require("@antv/g");
const prefix_1 = require("../../utils/prefix");
const base_combo_1 = require("./base-combo");
/**
 * <zh/> 矩形组合
 *
 * <en/> Rect combo
 */
class RectCombo extends base_combo_1.BaseCombo {
    constructor(options) {
        super(options);
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', g_1.Rect, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        const [width, height] = this.getKeySize(attributes);
        return Object.assign(Object.assign(Object.assign({}, keyStyle), (attributes.collapsed && (0, prefix_1.subStyleProps)(keyStyle, 'collapsed'))), { width,
            height, x: -width / 2, y: -height / 2 });
    }
}
exports.RectCombo = RectCombo;
//# sourceMappingURL=rect.js.map