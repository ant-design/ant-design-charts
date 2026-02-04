import { isStrictObject } from '../utils/helper';
function defineValueProp(Node, name, { key = name }) {
    Node.prototype[name] = function (value) {
        if (arguments.length === 0)
            return this.attr(key);
        return this.attr(key, value);
    };
}
function defineArrayProp(Node, name, { key = name }) {
    Node.prototype[name] = function (value) {
        if (arguments.length === 0)
            return this.attr(key);
        if (Array.isArray(value))
            return this.attr(key, value);
        const array = [...(this.attr(key) || []), value];
        return this.attr(key, array);
    };
}
function defineObjectProp(Node, name, { key: k = name }) {
    Node.prototype[name] = function (key, value) {
        if (arguments.length === 0)
            return this.attr(k);
        if (arguments.length === 1 && typeof key !== 'string') {
            return this.attr(k, key);
        }
        const obj = this.attr(k) || {};
        obj[key] = arguments.length === 1 ? true : value;
        return this.attr(k, obj);
    };
}
function defineMixProp(Node, name, descriptor) {
    Node.prototype[name] = function (key) {
        if (arguments.length === 0)
            return this.attr(name);
        if (Array.isArray(key))
            return this.attr(name, { items: key });
        if (isStrictObject(key) &&
            (key.title !== undefined || key.items !== undefined)) {
            return this.attr(name, key);
        }
        if (key === null || key === false)
            return this.attr(name, key);
        const obj = this.attr(name) || {};
        const { items = [] } = obj;
        items.push(key);
        obj.items = items;
        return this.attr(name, obj);
    };
}
function defineNodeProp(Node, name, { ctor }) {
    Node.prototype[name] = function (hocMark) {
        const node = this.append(ctor);
        if (name === 'mark') {
            node.type = hocMark;
        }
        return node;
    };
}
function defineContainerProp(Node, name, { ctor }) {
    Node.prototype[name] = function () {
        this.type = null;
        return this.append(ctor);
    };
}
/**
 * A decorator to define different type of attribute setter or
 * getter for current node.
 */
export function defineProps(descriptors) {
    return (Node) => {
        for (const [name, descriptor] of Object.entries(descriptors)) {
            const { type } = descriptor;
            if (type === 'value')
                defineValueProp(Node, name, descriptor);
            else if (type === 'array')
                defineArrayProp(Node, name, descriptor);
            else if (type === 'object')
                defineObjectProp(Node, name, descriptor);
            else if (type === 'node')
                defineNodeProp(Node, name, descriptor);
            else if (type === 'container')
                defineContainerProp(Node, name, descriptor);
            else if (type === 'mix')
                defineMixProp(Node, name, descriptor);
        }
        return Node;
    };
}
export function nodeProps(node) {
    return Object.fromEntries(Object.entries(node).map(([name, ctor]) => [name, { type: 'node', ctor }]));
}
//# sourceMappingURL=define.js.map