"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = show;
exports.hide = hide;
exports.visibility = visibility;
var traverse_1 = require("./traverse");
function show(element) {
    visibility(element, true);
}
function hide(element) {
    visibility(element, false);
}
function visibility(element, visible) {
    var value = visible ? 'visible' : 'hidden';
    (0, traverse_1.traverse)(element, function (node) {
        node.attr('visibility', value);
    });
}
//# sourceMappingURL=visibility.js.map