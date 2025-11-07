"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const utils_1 = require("../../shape/utils");
const selection_1 = require("../../utils/selection");
const advance_1 = require("./advance");
/**
 * @todo autoRotate when in polar coordinate
 */
const Text = (options, context) => {
    const { coordinate } = context;
    return (points, value, defaults) => {
        const { color, text = '', fontSize, rotate = 0, transform = '' } = value;
        const textStyle = {
            text: String(text),
            stroke: color,
            fill: color,
            fontSize,
        };
        const [[x0, y0]] = points;
        return (0, selection_1.select)(new advance_1.Advance())
            .style('x', x0)
            .style('y', y0)
            .call(utils_1.applyStyle, defaults)
            .style('transform', `${transform}rotate(${+rotate})`)
            .style('coordCenter', coordinate.getCenter())
            .call(utils_1.applyStyle, textStyle)
            .call(utils_1.applyStyle, options)
            .node();
    };
};
exports.Text = Text;
exports.Text.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=text.js.map