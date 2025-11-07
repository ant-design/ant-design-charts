"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = void 0;
const g_1 = require("@antv/g");
function createElement(descriptor) {
    const render = typeof descriptor === 'function' ? descriptor : descriptor.render;
    return class extends g_1.CustomElement {
        connectedCallback() {
            this.draw();
        }
        attributeChangedCallback() {
            this.draw();
        }
        draw() {
            render(this);
        }
    };
}
exports.createElement = createElement;
//# sourceMappingURL=createElement.js.map