"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = traverse;
function traverse(element, callback) {
    callback(element);
    if (element.children) {
        element.children.forEach(function (child) {
            if (child)
                traverse(child, callback);
        });
    }
}
//# sourceMappingURL=traverse.js.map