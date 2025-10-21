"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToHTML = stringToHTML;
exports.parseHTML = parseHTML;
function stringToHTML(str) {
    var tempNode = document.createElement('div');
    tempNode.innerHTML = str;
    return tempNode.firstChild;
}
function parseHTML(element) {
    if (typeof element === 'string') {
        return stringToHTML(element);
    }
    return element;
}
//# sourceMappingURL=html.js.map