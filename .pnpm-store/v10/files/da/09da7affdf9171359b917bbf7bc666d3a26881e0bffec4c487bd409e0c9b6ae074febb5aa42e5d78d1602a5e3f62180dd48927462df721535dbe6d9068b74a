"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleInY = void 0;
const g_1 = require("@antv/g");
const coordinate_1 = require("../utils/coordinate");
const utils_1 = require("../shape/utils");
/**
 * Scale mark from nothing to desired shape in y direction.
 */
const ScaleInY = (options, context) => {
    // Small enough to hide or show very small part of mark,
    // but bigger enough to not cause bug.
    const ZERO = 0.0001;
    const { coordinate } = context;
    // the polar coordinate need
    g_1.CSS.registerProperty({
        name: 'scaleInYRadius',
        inherits: false,
        initialValue: '',
        interpolable: true,
        syntax: g_1.PropertySyntax.NUMBER,
    });
    return (from, _, defaults) => {
        const [shape] = from;
        const PolarScaleInY = (shape) => {
            const { __data__, style } = shape;
            const { fillOpacity = 1, strokeOpacity = 1, opacity = 1 } = style;
            const { points, y, y1 } = __data__;
            const arcObject = (0, utils_1.getArcObject)(coordinate, points, [y, y1]);
            const { innerRadius, outerRadius } = arcObject;
            const keyframes = [
                {
                    scaleInYRadius: innerRadius + ZERO,
                    fillOpacity: 0,
                    strokeOpacity: 0,
                    opacity: 0,
                },
                {
                    scaleInYRadius: innerRadius + ZERO,
                    fillOpacity,
                    strokeOpacity,
                    opacity,
                    offset: 0.01,
                },
                {
                    scaleInYRadius: outerRadius,
                    fillOpacity,
                    strokeOpacity,
                    opacity,
                },
            ];
            const animation = shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
            return animation;
        };
        const RectangularScaleInY = (shape) => {
            const { style } = shape;
            const { transform: prefix = '', fillOpacity = 1, strokeOpacity = 1, opacity = 1, } = style;
            const [transformOrigin, transform] = (0, coordinate_1.isTranspose)(coordinate)
                ? [`left top`, `scale(${ZERO}, 1)`] // left-top corner
                : [`left bottom`, `scale(1, ${ZERO})`]; // left-bottom corner
            // Using a short fadeIn transition to hide element with scale(0.001)
            // which is still visible.
            const keyframes = [
                {
                    transform: `${prefix} ${transform}`.trimStart(),
                    transformOrigin,
                    fillOpacity: 0,
                    strokeOpacity: 0,
                    opacity: 0,
                },
                {
                    transform: `${prefix} ${transform}`.trimStart(),
                    transformOrigin,
                    fillOpacity,
                    strokeOpacity,
                    opacity,
                    offset: 0.01,
                },
                {
                    transform: `${prefix} scale(1, 1)`.trimStart(),
                    transformOrigin,
                    fillOpacity,
                    strokeOpacity,
                    opacity,
                },
            ];
            const animation = shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
            return animation;
        };
        if ((0, coordinate_1.isPolar)(coordinate)) {
            return PolarScaleInY(shape);
        }
        else {
            return RectangularScaleInY(shape);
        }
    };
};
exports.ScaleInY = ScaleInY;
//# sourceMappingURL=scaleInY.js.map