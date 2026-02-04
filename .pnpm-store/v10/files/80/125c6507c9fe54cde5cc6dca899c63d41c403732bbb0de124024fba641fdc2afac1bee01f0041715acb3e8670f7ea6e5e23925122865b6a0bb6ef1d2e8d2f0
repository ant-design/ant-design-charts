"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contour = void 0;
const g_1 = require("@antv/g");
const polygon_1 = require("../../utils/polygon");
const prefix_1 = require("../../utils/prefix");
const style_1 = require("../../utils/style");
const text_1 = require("../../utils/text");
const base_shape_1 = require("./base-shape");
const label_1 = require("./label");
class Contour extends base_shape_1.BaseShape {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Contour.defaultStyleProps }, options));
    }
    getLabelStyle(attributes) {
        if (!attributes.label || !attributes.d || attributes.d.length === 0)
            return false;
        const _a = (0, prefix_1.subStyleProps)(this.getGraphicStyle(attributes), 'label'), { maxWidth, offsetX, offsetY, autoRotate, placement, closeToPath } = _a, labelStyle = __rest(_a, ["maxWidth", "offsetX", "offsetY", "autoRotate", "placement", "closeToPath"]);
        const key = this.shapeMap.key;
        const keyBounds = key === null || key === void 0 ? void 0 : key.getRenderBounds();
        return Object.assign((0, polygon_1.getPolygonTextStyleByPlacement)(keyBounds, placement, offsetX, offsetY, closeToPath, attributes.d, autoRotate), { wordWrapWidth: (0, text_1.getWordWrapWidthByBox)(keyBounds, maxWidth) }, labelStyle);
    }
    getKeyStyle(attributes) {
        return this.getGraphicStyle(attributes);
    }
    render(attributes, container) {
        this.upsert('key', g_1.Path, this.getKeyStyle(attributes), container);
        this.upsert('label', label_1.Label, this.getLabelStyle(attributes), container);
    }
}
exports.Contour = Contour;
Contour.defaultStyleProps = {
    label: true,
    labelPlacement: 'bottom',
    labelCloseToPath: true,
    labelAutoRotate: true,
    labelOffsetX: 0,
    labelOffsetY: 0,
};
//# sourceMappingURL=contour.js.map