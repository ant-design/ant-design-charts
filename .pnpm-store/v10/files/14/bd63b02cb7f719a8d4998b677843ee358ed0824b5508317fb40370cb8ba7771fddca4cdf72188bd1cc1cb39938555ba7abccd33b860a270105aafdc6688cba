"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
/**
 * BFS nodes and execute callback.
 */
function bfs(node, callback) {
    const discovered = [node];
    while (discovered.length) {
        const currentNode = discovered.shift();
        callback && callback(currentNode);
        const children = currentNode.children || [];
        for (const child of children) {
            discovered.push(child);
        }
    }
}
/**
 * Hierarchy container.
 */
class Node {
    constructor(value = {}, type) {
        // The parent node.
        this.parentNode = null;
        // The children nodes.
        this.children = [];
        // The index of parent children.
        this.index = 0;
        this.type = type;
        this.value = value;
    }
    /**
     * Apply specified transform to current value. Mount the node
     * to replace the original one in the tree and then return it.
     */
    map(transform = (x) => x) {
        const newValue = transform(this.value);
        this.value = newValue;
        return this;
    }
    /**
     * Set or get the specified attribute. It the value is specified, update
     * the attribute of current value and return the node. Otherwise
     * return the the attribute of current value.
     */
    attr(key, value) {
        if (arguments.length === 1)
            return this.value[key];
        return this.map((v) => ((v[key] = value), v));
    }
    /**
     * Create a new node and append to children nodes.
     */
    append(Ctor) {
        const node = new Ctor({});
        node.children = [];
        this.push(node);
        return node;
    }
    push(node) {
        node.parentNode = this;
        node.index = this.children.length;
        this.children.push(node);
        return this;
    }
    /**
     * Remove current node from parentNode.
     */
    remove() {
        const parent = this.parentNode;
        if (parent) {
            const { children } = parent;
            const index = children.findIndex((item) => item === this);
            children.splice(index, 1);
        }
        return this;
    }
    getNodeByKey(key) {
        let targetNode = null;
        const callback = (node) => {
            if (key === node.attr('key')) {
                targetNode = node;
            }
        };
        bfs(this, callback);
        return targetNode;
    }
    getNodesByType(type) {
        const nodes = [];
        const callback = (node) => {
            if (type === node.type) {
                nodes.push(node);
            }
        };
        bfs(this, callback);
        return nodes;
    }
    getNodeByType(type) {
        let node = null;
        bfs(this, (current) => {
            if (node)
                return;
            if (type === current.type)
                node = current;
        });
        return node;
    }
    /**
     * Apply specified callback to the node value.
     */
    call(callback, ...params) {
        callback(this.map(), ...params);
        return this;
    }
    getRoot() {
        // Find the root chart and render.
        let root = this;
        while (root && root.parentNode) {
            root = root.parentNode;
        }
        return root;
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map