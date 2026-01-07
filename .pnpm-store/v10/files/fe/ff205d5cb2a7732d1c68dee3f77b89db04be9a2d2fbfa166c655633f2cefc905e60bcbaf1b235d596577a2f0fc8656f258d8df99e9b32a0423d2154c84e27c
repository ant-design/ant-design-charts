"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleCombo = void 0;
const g_1 = require("@antv/g");
const bbox_1 = require("../../utils/bbox");
const point_1 = require("../../utils/point");
const prefix_1 = require("../../utils/prefix");
const size_1 = require("../../utils/size");
const base_combo_1 = require("./base-combo");
/**
 * <zh/> 圆形组合
 *
 * <en/> Circle combo
 */
class CircleCombo extends base_combo_1.BaseCombo {
    constructor(options) {
        super(options);
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', g_1.Circle, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const { collapsed } = attributes;
        const keyStyle = super.getKeyStyle(attributes);
        const [width] = this.getKeySize(attributes);
        return Object.assign(Object.assign(Object.assign({}, keyStyle), (collapsed && (0, prefix_1.subStyleProps)(keyStyle, 'collapsed'))), { r: width / 2 });
    }
    getCollapsedKeySize(attributes) {
        const [collapsedWidth, collapsedHeight] = (0, size_1.parseSize)(attributes.collapsedSize);
        const collapsedR = Math.max(collapsedWidth, collapsedHeight) / 2;
        return [collapsedR * 2, collapsedR * 2, 0];
    }
    getExpandedKeySize(attributes) {
        const contentBBox = this.getContentBBox(attributes);
        const [width, height] = (0, bbox_1.getBBoxSize)(contentBBox);
        const expandedR = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
        return [expandedR * 2, expandedR * 2, 0];
    }
    getIntersectPoint(point, useExtendedLine = false) {
        const keyShapeBounds = this.getShape('key').getBounds();
        return (0, point_1.getEllipseIntersectPoint)(point, keyShapeBounds, useExtendedLine);
    }
}
exports.CircleCombo = CircleCombo;
//# sourceMappingURL=circle.js.map