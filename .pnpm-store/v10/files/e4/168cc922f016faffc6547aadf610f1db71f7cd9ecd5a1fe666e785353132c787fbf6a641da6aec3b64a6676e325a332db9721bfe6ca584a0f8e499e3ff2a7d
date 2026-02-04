"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _default() {
    var root = this, links = [];
    root.each(function(node) {
        if (node !== root) {
            links.push({
                source: node.parent,
                target: node
            });
        }
    });
    return links;
}
