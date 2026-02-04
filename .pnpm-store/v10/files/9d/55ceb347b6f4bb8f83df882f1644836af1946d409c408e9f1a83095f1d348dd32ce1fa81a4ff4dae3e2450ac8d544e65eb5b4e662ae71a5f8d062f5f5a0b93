"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceChildren = void 0;
var tslib_1 = require("tslib");
var replaceChildren = function (el, content) {
    if (content == null) {
        el.innerHTML = '';
        return;
    }
    if (el.replaceChildren) {
        if (Array.isArray(content)) {
            el.replaceChildren.apply(el, tslib_1.__spreadArray([], tslib_1.__read(content), false));
        }
        else {
            el.replaceChildren(content);
        }
    }
    else {
        el.innerHTML = '';
        if (Array.isArray(content)) {
            content.forEach(function (child) { return el.appendChild(child); });
        }
        else {
            el.appendChild(content);
        }
    }
};
exports.replaceChildren = replaceChildren;
//# sourceMappingURL=replace-children.js.map