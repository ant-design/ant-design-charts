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
import { select } from '../../utils/selection';
import { applyStyle } from '../../shape/utils';
import { isTranspose, isCircular } from '../../utils/coordinate';
import { camelCase } from '../../utils/string';
import { Advance } from '../text/advance';
import * as PositionProcessor from './position';
function inferPosition(position, coordinate) {
    if (position !== undefined)
        return position;
    if (isCircular(coordinate))
        return 'inside';
    if (isTranspose(coordinate))
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
    const processor = PositionProcessor[camelCase(p)];
    if (!processor) {
        throw new Error(`Unknown position: ${p}`);
    }
    return Object.assign(Object.assign({}, t), processor(p, points, v, coordinate, options, labels));
}
/**
 * Render normal label for each mark.
 * @todo Support position option: middle...
 */
export const Label = (options, context) => {
    const { coordinate, theme } = context;
    const { render } = options;
    return (points, value, style, labels) => {
        const { text, x, y, transform: specifiedTS = '', transformOrigin, className = '' } = value, overrideStyle = __rest(value, ["text", "x", "y", "transform", "transformOrigin", "className"]);
        const _a = getDefaultStyle(points, value, coordinate, theme, options, labels), { rotate = 0, transform = '' } = _a, defaultStyle = __rest(_a, ["rotate", "transform"]);
        return select(new Advance())
            .call(applyStyle, defaultStyle)
            .style('text', `${text}`)
            .style('className', `${className} g2-label`)
            .style('innerHTML', render ? render(text, value.datum, value.index) : undefined)
            .style('labelTransform', `${transform} rotate(${+rotate}) ${specifiedTS}`.trim())
            .style('labelTransformOrigin', transformOrigin)
            .style('coordCenter', coordinate.getCenter())
            .call(applyStyle, overrideStyle)
            .node();
    };
};
Label.props = {
    defaultMarker: 'point',
};
//# sourceMappingURL=label.js.map