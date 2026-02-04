import { CustomElement } from '@antv/g';
export function createElement(descriptor) {
    const render = typeof descriptor === 'function' ? descriptor : descriptor.render;
    return class extends CustomElement {
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
//# sourceMappingURL=createElement.js.map