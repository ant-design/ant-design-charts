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
import { deepMix } from '@antv/util';
import { applyStyle } from '../shape/utils';
import { subObject } from '../utils/helper';
import { createComponent, maybeAppend } from './utils';
function inferStyleByAlign(x, y, width, align) {
    switch (align) {
        case 'center':
            return {
                x: x + width / 2,
                y,
                textAlign: 'middle',
            };
        case 'right':
            return {
                x: x + width,
                y,
                textAlign: 'right',
            };
        default:
            return {
                x,
                y,
                textAlign: 'left',
            };
    }
}
const Title = createComponent({
    render(attributes, container) {
        const { width, title, subtitle, spacing = 2, align = 'left', x, y } = attributes, style = __rest(attributes, ["width", "title", "subtitle", "spacing", "align", "x", "y"]);
        container.style.transform = `translate(${x}, ${y})`;
        const titleStyle = subObject(style, 'title');
        const subtitleStyle = subObject(style, 'subtitle');
        const mainTitle = maybeAppend(container, '.title', 'text')
            .attr('className', 'title')
            .call(applyStyle, Object.assign(Object.assign(Object.assign({}, inferStyleByAlign(0, 0, width, align)), { fontSize: 14, textBaseline: 'top', text: title }), titleStyle))
            .node();
        const bounds = mainTitle.getLocalBounds();
        maybeAppend(container, '.sub-title', 'text')
            .attr('className', 'sub-title')
            .call((selection) => {
            if (!subtitle)
                return selection.node().remove();
            selection.node().attr(Object.assign(Object.assign(Object.assign({}, inferStyleByAlign(0, bounds.max[1] + spacing, width, align)), { fontSize: 12, textBaseline: 'top', text: subtitle }), subtitleStyle));
        });
    },
});
/**
 * Title Component.
 */
export const TitleComponent = (options) => {
    return ({ value, theme }) => {
        const { x, y, width, height } = value.bbox;
        return new Title({
            style: deepMix({}, theme.title, Object.assign({ x,
                y,
                width,
                height }, options)),
        });
    };
};
TitleComponent.props = {
    defaultPosition: 'top',
    defaultOrder: 2,
    defaultSize: 36,
    defaultCrossPadding: [20, 20],
    defaultPadding: [12, 12],
};
//# sourceMappingURL=title.js.map