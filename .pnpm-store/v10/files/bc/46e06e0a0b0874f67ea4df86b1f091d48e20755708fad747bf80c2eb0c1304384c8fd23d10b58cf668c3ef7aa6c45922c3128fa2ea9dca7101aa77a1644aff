"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Label = void 0;
const selection_1 = require("../../utils/selection");
const utils_1 = require("../../shape/utils");
const coordinate_1 = require("../../utils/coordinate");
const string_1 = require("../../utils/string");
const advance_1 = require("../text/advance");
const PositionProcessor = __importStar(require("./position"));
function inferPosition(position, coordinate) {
    if (position !== undefined)
        return position;
    if ((0, coordinate_1.isCircular)(coordinate))
        return 'inside';
    if ((0, coordinate_1.isTranspose)(coordinate))
        return 'right';
    return 'top';
}
function getDefaultStyle(points, value, coordinate, theme, options, labels) {
    // For non-series mark, calc position for label based on
    // position and the bounds of shape.
    const { position } = value;
    const { render } = options;
    const p = inferPosition(position, coordinate);
    const labelType = render
        ? 'htmlLabel'
        : p === 'inside'
            ? 'innerLabel'
            : 'label';
    const t = theme[labelType];
    const v = Object.assign({}, t, value);
    const processor = PositionProcessor[(0, string_1.camelCase)(p)];
    if (!processor) {
        throw new Error(`Unknown position: ${p}`);
    }
    return Object.assign(Object.assign({}, t), processor(p, points, v, coordinate, options, labels));
}
/**
 * Render normal label for each mark.
 * @todo Support position option: middle...
 */
const Label = (options, context) => {
    const { coordinate, theme } = context;
    const { render } = options;
    return (points, value, style, labels) => {
        const { text, x, y, transform: specifiedTS = '', transformOrigin, className = '' } = value, overrideStyle = __rest(value, ["text", "x", "y", "transform", "transformOrigin", "className"]);
        const _a = getDefaultStyle(points, value, coordinate, theme, options, labels), { rotate = 0, transform = '' } = _a, defaultStyle = __rest(_a, ["rotate", "transform"]);
        return (0, selection_1.select)(new advance_1.Advance())
            .call(utils_1.applyStyle, defaultStyle)
            .style('text', `${text}`)
            .style('className', `${className} g2-label`)
            .style('innerHTML', render ? render(text, value.datum, value.index) : undefined)
            .style('labelTransform', `${transform} rotate(${+rotate}) ${specifiedTS}`.trim())
            .style('labelTransformOrigin', transformOrigin)
            .style('coordCenter', coordinate.getCenter())
            .call(utils_1.applyStyle, overrideStyle)
            .node();
    };
};
exports.Label = Label;
exports.Label.props = {
    defaultMarker: 'point',
};
//# sourceMappingURL=label.js.map