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
import { HTML } from '@antv/g';
import { kebabCase } from '../utils/string';
import { subObject } from '../utils/helper';
function dom(tag, children, style) {
    return `<${tag} style="${Object.entries(style)
        .map(([key, value]) => `${kebabCase(key)}:${value}`)
        .join(';')}">${children}</${tag}>`;
}
const defaultTipStyle = {
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: '#fff',
    width: 'max-content',
    padding: '1px 4px',
    fontSize: '12px',
    borderRadius: '2.5px',
    boxShadow: '0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05)',
};
function isTipText(element) {
    if (element.nodeName !== 'text')
        return false;
    if (element.isOverflowing())
        return true;
    return false;
}
export function Poptip(_a) {
    var { offsetX = 8, offsetY = 8 } = _a, style = __rest(_a, ["offsetX", "offsetY"]);
    return (context) => {
        const { container } = context;
        const [x0, y0] = container.getBounds().min;
        const tipStyle = subObject(style, 'tip');
        const tips = new Set();
        const pointerover = (e) => {
            const { target } = e;
            if (!isTipText(target)) {
                e.stopPropagation();
                return;
            }
            const { offsetX: mouseX, offsetY: mouseY } = e;
            const x = mouseX + offsetX - x0;
            const y = mouseY + offsetY - y0;
            if (target.tip) {
                target.tip.style.x = x;
                target.tip.style.y = y;
                return;
            }
            const { text } = target.style;
            const tipELement = new HTML({
                className: 'poptip',
                style: {
                    innerHTML: dom('div', text, Object.assign(Object.assign({}, defaultTipStyle), tipStyle)),
                    x,
                    y,
                },
            });
            container.appendChild(tipELement);
            target.tip = tipELement;
            tips.add(tipELement);
        };
        const pointerout = (e) => {
            const { target } = e;
            if (!isTipText(target)) {
                e.stopPropagation();
                return;
            }
            if (!target.tip)
                return;
            target.tip.remove();
            target.tip = null;
            tips.delete(target.tip);
        };
        container.addEventListener('pointerover', pointerover);
        container.addEventListener('pointerout', pointerout);
        return () => {
            container.removeEventListener('pointerover', pointerover);
            container.removeEventListener('pointerout', pointerout);
            tips.forEach((tip) => tip.remove());
        };
    };
}
Poptip.props = {
    reapplyWhenUpdate: true,
};
//# sourceMappingURL=poptip.js.map