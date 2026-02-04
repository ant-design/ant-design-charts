import { traverseElements } from './traverse-elements';
const defaultStyle = {
    visibility: 'visible',
    opacity: 1,
    fillOpacity: 1,
    strokeOpacity: 1,
};
export function getStyle(element, key) {
    let value;
    traverseElements(element, (el) => {
        var _a;
        if (el.tagName !== 'g' && ((_a = el.style) === null || _a === void 0 ? void 0 : _a[key]) !== undefined) {
            value = el.style[key];
            return true;
        }
        return false;
    });
    return value !== null && value !== void 0 ? value : defaultStyle[key];
}
export function setStyle(element, key, value, recursive) {
    element.style[key] = value;
    if (recursive) {
        element.children.forEach((child) => setStyle(child, key, value, recursive));
    }
}
export function hide(element) {
    setStyle(element, 'visibility', 'hidden', true);
}
export function show(element) {
    setStyle(element, 'visibility', 'visible', true);
}
//# sourceMappingURL=style.js.map