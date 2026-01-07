"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaveIn = void 0;
const d3_shape_1 = require("@antv/vendor/d3-shape");
const g_1 = require("@antv/g");
const utils_1 = require("../shape/utils");
const coordinate_1 = require("../utils/coordinate");
const scaleInX_1 = require("./scaleInX");
/**
 * Transform mark from transparent to solid.
 */
const WaveIn = (options, context) => {
    const ZERO = 0.0001;
    // @see https://g-next.antv.vision/zh/docs/api/css/css-properties-values-api#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7
    g_1.CSS.registerProperty({
        name: 'waveInArcAngle',
        inherits: false,
        initialValue: '',
        interpolable: true,
        syntax: g_1.PropertySyntax.NUMBER,
    });
    const { coordinate } = context;
    return (from, to, defaults) => {
        const [shape] = from;
        if (!(0, coordinate_1.isPolar)(coordinate)) {
            return (0, scaleInX_1.ScaleInX)(options, context)(from, to, defaults);
        }
        const { __data__, style } = shape;
        const { radius = 0, inset = 0, fillOpacity = 1, strokeOpacity = 1, opacity = 1, } = style;
        const { points, y, y1 } = __data__;
        const path = (0, d3_shape_1.arc)()
            .cornerRadius(radius)
            .padAngle((inset * Math.PI) / 180);
        const arcObject = (0, utils_1.getArcObject)(coordinate, points, [y, y1]);
        const { startAngle, endAngle } = arcObject;
        const keyframes = [
            // Use custom interpolable CSS property.
            {
                waveInArcAngle: startAngle + ZERO,
                fillOpacity: 0,
                strokeOpacity: 0,
                opacity: 0,
            },
            {
                waveInArcAngle: startAngle + ZERO,
                fillOpacity,
                strokeOpacity,
                opacity,
                offset: 0.01,
            },
            {
                waveInArcAngle: endAngle,
                fillOpacity,
                strokeOpacity,
                opacity,
            },
        ];
        const animation = shape.animate(keyframes, Object.assign(Object.assign({}, defaults), options));
        animation.onframe = function () {
            shape.style.d = path(Object.assign(Object.assign({}, arcObject), { endAngle: Number(shape.style.waveInArcAngle) }));
        };
        animation.onfinish = function () {
            shape.style.d = path(Object.assign(Object.assign({}, arcObject), { endAngle: endAngle }));
        };
        return animation;
    };
};
exports.WaveIn = WaveIn;
exports.WaveIn.props = {};
//# sourceMappingURL=waveIn.js.map