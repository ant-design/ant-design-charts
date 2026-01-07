"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const g_1 = require("@antv/g");
const utils_1 = require("../../shape/utils");
const selection_1 = require("../../utils/selection");
/**
 * @todo autoRotate when in polar coordinate
 * Tag shape for Text mark, used in wordCloud plot.
 */
const Tag = (options, context) => {
    const { coordinate } = context;
    return (points, value, defaults) => {
        const { color, text = '', fontSize, rotate = 0, transform = '' } = value;
        const textStyle = {
            text: String(text),
            stroke: color,
            fill: color,
            fontSize,
            textAlign: 'center',
            textBaseline: 'middle',
        };
        const [[x0, y0]] = points;
        const n = (0, selection_1.select)(new g_1.Text())
            .style('x', x0)
            .style('y', y0)
            .call(utils_1.applyStyle, defaults)
            .style('transformOrigin', 'center center')
            .style('transform', `${transform}rotate(${rotate}deg)`)
            .style('coordCenter', coordinate.getCenter())
            .call(utils_1.applyStyle, textStyle)
            .call(utils_1.applyStyle, options)
            .node();
        return n;
    };
};
exports.Tag = Tag;
exports.Tag.props = {
    defaultMarker: 'point',
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=tag.js.map