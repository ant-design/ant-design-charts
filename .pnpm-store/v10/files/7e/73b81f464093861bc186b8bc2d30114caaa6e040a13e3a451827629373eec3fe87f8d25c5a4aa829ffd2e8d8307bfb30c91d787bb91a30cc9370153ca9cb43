import { __read, __spreadArray } from "tslib";
export var replaceChildren = function (el, content) {
    if (content == null) {
        el.innerHTML = '';
        return;
    }
    if (el.replaceChildren) {
        if (Array.isArray(content)) {
            el.replaceChildren.apply(el, __spreadArray([], __read(content), false));
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
//# sourceMappingURL=replace-children.js.map