"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseElements = void 0;
function traverseElements(element, visitor) {
    if (visitor(element))
        return true;
    if (element.tagName === 'g') {
        const { childNodes = [] } = element;
        for (const child of childNodes) {
            if (traverseElements(child, visitor))
                return true;
        }
    }
    return false;
}
exports.traverseElements = traverseElements;
//# sourceMappingURL=traverse-elements.js.map