"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifShow = ifShow;
function ifShow(show, container, creator, removeChildren, removeHandler) {
    if (removeChildren === void 0) { removeChildren = true; }
    if (removeHandler === void 0) { removeHandler = function (g) {
        g.node().removeChildren();
    }; }
    if (show) {
        return creator(container);
    }
    if (removeChildren)
        removeHandler(container);
    return null;
}
//# sourceMappingURL=if-show.js.map