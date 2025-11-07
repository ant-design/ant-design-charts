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
import { applyStyle } from '../utils';
import { select } from '../../utils/selection';
import { p } from '../../mark/utils';
export const Image = (options, context) => {
    const { coordinate, document } = context;
    return (points, value, defaults) => {
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const { color = defaultColor, src = '', size = 32, transform = '' } = value;
        let { width = size, height = size } = options;
        const [[x0, y0]] = points;
        // Support percentage width, height.
        const [w, h] = coordinate.getSize();
        width = typeof width === 'string' ? p(width) * w : width;
        height = typeof height === 'string' ? p(height) * h : height;
        const x = x0 - Number(width) / 2;
        const y = y0 - Number(height) / 2;
        return select(document.createElement('image', {}))
            .call(applyStyle, rest)
            .style('x', x)
            .style('y', y)
            .style('src', src)
            .style('stroke', color)
            .style('transform', transform)
            .call(applyStyle, options)
            .style('width', width)
            .style('height', height)
            .node();
    };
};
Image.props = {
    defaultEnterAnimation: 'fadeIn',
    defaultUpdateAnimation: 'morphing',
    defaultExitAnimation: 'fadeOut',
};
//# sourceMappingURL=image.js.map