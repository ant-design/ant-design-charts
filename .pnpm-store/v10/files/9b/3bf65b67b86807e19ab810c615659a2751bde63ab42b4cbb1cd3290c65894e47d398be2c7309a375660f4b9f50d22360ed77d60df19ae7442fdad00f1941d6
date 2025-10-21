"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.hide = exports.setStyle = exports.getStyle = void 0;
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
exports.getStyle = getStyle;
function setStyle(element, key, value, recursive) {
    element.style[key] = value;
    if (recursive) {
        element.children.forEach((child) => setStyle(child, key, value, recursive));
    }
}
exports.setStyle = setStyle;
function hide(element) {
    setStyle(element, 'visibility', 'hidden', true);
}
exports.hide = hide;
function show(element) {
    setStyle(element, 'visibility', 'visible', true);
}
exports.show = show;
//# sourceMappingURL=style.js.map