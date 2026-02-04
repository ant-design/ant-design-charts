"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactNode = void 0;
const g6_1 = require("@antv/g6");
const render_1 = require("./render");
class ReactNode extends g6_1.HTML {
    getKeyStyle(attributes) {
        return Object.assign({}, super.getKeyStyle(attributes));
    }
    constructor(options) {
        super(options);
    }
    update(attr) {
        super.update(attr);
    }
    connectedCallback() {
        super.connectedCallback();
        // this.root = createRoot(this.getDomElement());
        const { component } = this.attributes;
        // component 已经被回调机制自动创建为 ReactNode
        // component has been automatically created as ReactNode by the callback mechanism
        (0, render_1.render)(component, this.getDomElement());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'component' && oldValue !== newValue) {
            (0, render_1.render)(this.attributes.component, this.getDomElement());
        }
    }
    destroy() {
        (0, render_1.unmount)(this.getDomElement());
        super.destroy();
    }
}
exports.ReactNode = ReactNode;
//# sourceMappingURL=node.js.map