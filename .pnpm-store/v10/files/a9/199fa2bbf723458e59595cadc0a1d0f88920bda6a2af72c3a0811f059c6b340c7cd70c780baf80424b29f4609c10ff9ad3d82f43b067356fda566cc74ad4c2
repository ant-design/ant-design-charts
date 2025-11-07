import { HTML } from '@antv/g6';
import { render, unmount } from './render';
export class ReactNode extends HTML {
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
        render(component, this.getDomElement());
    }
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === 'component' && oldValue !== newValue) {
            render(this.attributes.component, this.getDomElement());
        }
    }
    destroy() {
        unmount(this.getDomElement());
        super.destroy();
    }
}
//# sourceMappingURL=node.js.map