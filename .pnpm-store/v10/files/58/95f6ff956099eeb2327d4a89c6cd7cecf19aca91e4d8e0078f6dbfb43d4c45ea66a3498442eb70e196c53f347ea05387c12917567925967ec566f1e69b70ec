"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyle = getStyle;
exports.setStyle = setStyle;
exports.hide = hide;
exports.show = show;
const traverse_elements_1 = require("./traverse-elements");
const defaultStyle = {
    visibility: 'visible',
    opacity: 1,
    fillOpacity: 1,
    strokeOpacity: 1,
};
function getStyle(element, key) {
    let value;
    (0, traverse_elements_1.traverseElements)(element, (el) => {
        var _a;
        if (el.tagName !== 'g' && ((_a = el.style) === null || _a === void 0 ? void 0 : _a[key]) !== undefined) {
            value = el.style[key];
            return true;
        }
        return false;
    });
    return value !== null && value !== void 0 ? value : defaultStyle[key];
}
function setStyle(element, key, value, recursive) {
    element.style[key] = value;
    if (recursive) {
        element.children.forEach((child) => setStyle(child, key, value, recursive));
    }
}
function hide(element) {
    setStyle(element, 'visibility', 'hidden', true);
}
function show(element) {
    setStyle(element, 'visibility', 'visible', true);
}
//# sourceMappingURL=style.js.map