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
exports.Liquid = void 0;
const util_1 = require("@antv/util");
const wave_1 = require("./wave");
const shapes_1 = require("./shapes");
const getLiquidShape = (shape = 'circle') => shapes_1.LiquidShapesPath[shape] || shapes_1.LiquidShapesPath.circle;
const Liquid = (options, context) => {
    if (!context)
        return;
    const { coordinate } = context;
    const { liquidOptions, styleOptions } = options;
    const { liquidShape, percent } = liquidOptions;
    const { background: backgroundStyle, outline = {}, wave = {} } = styleOptions, attr = __rest(styleOptions, ["background", "outline", "wave"]);
    const { border = 2, distance = 0 } = outline, outlineStyle = __rest(outline, ["border", "distance"]);
    const { length = 192, count = 3 } = wave;
    return (points, cfg, defaultAttr) => {
        const { document } = context.canvas;
        const { color, fillOpacity } = defaultAttr;
        const attrs = Object.assign(Object.assign({ fill: color }, defaultAttr), attr);
        const g = document.createElement('g', {});
        // Center x/y.
        const [centerX, centerY] = coordinate.getCenter();
        // [width,height].
        const size = coordinate.getSize();
        const radius = Math.min(...size) / 2;
        // 1、Gets the path of the overall shape.
        const buildPath = (0, util_1.isFunction)(liquidShape)
            ? liquidShape
            : getLiquidShape(liquidShape);
        const shapePath = buildPath(centerX, centerY, radius, ...size);
        const shapeClipPath = buildPath(centerX, centerY, radius + border / 2, ...size);
        // 2、Background create.
        if (Object.keys(backgroundStyle).length) {
            const backgroundShape = document.createElement('path', {
                style: Object.assign({ d: shapePath, fill: '#fff' }, backgroundStyle),
            });
            g.appendChild(backgroundShape);
        }
        // Percent > 0 Mapping water waves.
        if (percent > 0) {
            // 3. Clip create.
            const clipShape = document.createElement('path', {
                style: {
                    d: shapeClipPath,
                },
            });
            g.appendChild(clipShape);
            g.style.clipPath = clipShape;
            // 4. Wave create.
            (0, wave_1.addWave)(centerX, centerY, 1 - percent, count, attrs, g, clipShape.getBBox().y, radius * 2, length, true, document);
        }
        // 5. Draw distance.
        const distanceShape = document.createElement('path', {
            style: {
                d: shapePath,
                fill: 'transparent',
                lineWidth: border + 2 * distance,
                stroke: '#fff',
            },
        });
        // 6. Draw border.
        const borderShape = document.createElement('path', {
            style: Object.assign(Object.assign(Object.assign({ d: shapePath, stroke: color, strokeOpacity: fillOpacity, lineWidth: border }, attrs), outlineStyle), { fill: 'transparent' }),
        });
        g.appendChild(distanceShape);
        g.appendChild(borderShape);
        return g;
    };
};
exports.Liquid = Liquid;
exports.Liquid.props = {};
//# sourceMappingURL=liquid.js.map