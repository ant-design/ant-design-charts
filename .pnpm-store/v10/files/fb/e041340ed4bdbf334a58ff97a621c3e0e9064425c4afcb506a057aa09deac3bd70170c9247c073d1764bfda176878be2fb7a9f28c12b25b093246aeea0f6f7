var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { isNumber } from '@antv/util';
import { getContainerSize } from '../utils/size';
import { deepAssign } from '../utils/helper';
import { Node } from './node';
// Keys can specified by new Chart({...}).
// Keys can bubble form mark-level options to view-level options.
export const VIEW_KEYS = [
    'width',
    'height',
    'depth',
    'padding',
    'paddingLeft',
    'paddingRight',
    'paddingBottom',
    'paddingTop',
    'inset',
    'insetLeft',
    'insetRight',
    'insetTop',
    'insetBottom',
    'margin',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'autoFit',
    'theme',
    'title',
    'interaction',
];
export const REMOVE_FLAG = '__remove__';
export const CALLBACK_NODE = '__callback__';
/** Minimum chart width */
export const MIN_CHART_WIDTH = 1;
/** Minimum chart height */
export const MIN_CHART_HEIGHT = 1;
export function normalizeContainer(container) {
    if (container === undefined) {
        const container = document.createElement('div');
        container[REMOVE_FLAG] = true;
        return container;
    }
    if (typeof container === 'string') {
        const node = document.getElementById(container);
        return node;
    }
    return container;
}
export function removeContainer(container) {
    const parent = container.parentNode;
    if (parent) {
        parent.removeChild(container);
    }
}
export function normalizeRoot(node) {
    if (node.type !== null)
        return node;
    const root = node.children[node.children.length - 1];
    for (const key of VIEW_KEYS)
        root.attr(key, node.attr(key));
    return root;
}
export function valueOf(node) {
    return Object.assign(Object.assign({}, node.value), { type: node.type });
}
export function sizeOf(options, container) {
    const { width, height, autoFit, depth = 0 } = options;
    let effectiveWidth = 640;
    let effectiveHeight = 480;
    if (autoFit) {
        const { width: containerWidth, height: containerHeight } = getContainerSize(container);
        effectiveWidth = containerWidth || effectiveWidth;
        effectiveHeight = containerHeight || effectiveHeight;
    }
    effectiveWidth = width || effectiveWidth;
    effectiveHeight = height || effectiveHeight;
    return {
        width: Math.max(isNumber(effectiveWidth) ? effectiveWidth : MIN_CHART_WIDTH, MIN_CHART_WIDTH),
        height: Math.max(isNumber(effectiveHeight) ? effectiveHeight : MIN_CHART_HEIGHT, MIN_CHART_HEIGHT),
        depth,
    };
}
export function optionsOf(node) {
    const root = normalizeRoot(node);
    const discovered = [root];
    const nodeValue = new Map();
    nodeValue.set(root, valueOf(root));
    while (discovered.length) {
        const node = discovered.pop();
        const value = nodeValue.get(node);
        const { children = [] } = node;
        for (const child of children) {
            if (child.type === CALLBACK_NODE) {
                value.children = child.value;
            }
            else {
                const childValue = valueOf(child);
                const { children = [] } = value;
                children.push(childValue);
                discovered.push(child);
                nodeValue.set(child, childValue);
                value.children = children;
            }
        }
    }
    return nodeValue.get(root);
}
function isMark(type, mark) {
    if (typeof type === 'function')
        return true;
    return new Set(Object.keys(mark)).has(type);
}
function isComposition(type, composition) {
    return (typeof type !== 'function' && new Set(Object.keys(composition)).has(type));
}
function normalizeRootOptions(node, options, previousType, marks, composition) {
    const { type: oldType } = node;
    const { type = previousType || oldType } = options;
    if (isComposition(type, composition)) {
        for (const key of VIEW_KEYS) {
            if (node.attr(key) !== undefined && options[key] === undefined) {
                options[key] = node.attr(key);
            }
        }
        return options;
    }
    if (isMark(type, marks)) {
        const view = { type: 'view' };
        const mark = Object.assign({}, options);
        for (const key of VIEW_KEYS) {
            if (mark[key] !== undefined) {
                view[key] = mark[key];
                delete mark[key];
            }
        }
        return Object.assign(Object.assign({}, view), { children: [mark] });
    }
    return options;
}
function typeCtor(type, mark, composition) {
    if (typeof type === 'function')
        return mark.mark;
    const node = Object.assign(Object.assign({}, mark), composition);
    const ctor = node[type];
    if (!ctor)
        throw new Error(`Unknown mark: ${type}.`);
    return ctor;
}
// Create node from options.
function createNode(options, mark, composition) {
    if (typeof options === 'function') {
        const node = new Node();
        node.value = options;
        node.type = CALLBACK_NODE;
        return node;
    }
    const { type, children } = options, value = __rest(options, ["type", "children"]);
    const Ctor = typeCtor(type, mark, composition);
    const node = new Ctor();
    node.value = value;
    // @ts-ignore
    node.type = type;
    return node;
}
// Update node by options.
function updateNode(node, newOptions) {
    const { type, children } = newOptions, value = __rest(newOptions, ["type", "children"]);
    if (node.type === type || type === undefined) {
        // Update node.
        deepAssign(node.value, value);
    }
    else if (typeof type === 'string') {
        // Transform node.
        node.type = type;
        node.value = value;
    }
}
// Create a nested node tree from newOptions, and append it to the parent.
function appendNode(parent, newOptions, mark, composition) {
    if (!parent)
        return;
    const discovered = [[parent, newOptions]];
    while (discovered.length) {
        const [parent, nodeOptions] = discovered.shift();
        const node = createNode(nodeOptions, mark, composition);
        if (Array.isArray(parent.children))
            parent.push(node);
        const { children } = nodeOptions;
        if (Array.isArray(children)) {
            for (const child of children) {
                discovered.push([node, child]);
            }
        }
        else if (typeof children === 'function') {
            discovered.push([node, children]);
        }
    }
}
// Update node tree from options.
export function updateRoot(node, options, definedType, mark, composition) {
    const rootOptions = normalizeRootOptions(node, options, definedType, mark, composition);
    const discovered = [[null, node, rootOptions]];
    while (discovered.length) {
        const [parent, oldNode, newNode] = discovered.shift();
        // If there is no oldNode, create a node tree directly.
        if (!oldNode) {
            appendNode(parent, newNode, mark, composition);
        }
        else if (!newNode) {
            oldNode.remove();
        }
        else {
            updateNode(oldNode, newNode);
            const { children: newChildren } = newNode;
            const { children: oldChildren } = oldNode;
            if (Array.isArray(newChildren) && Array.isArray(oldChildren)) {
                // Only update node specified in newChildren,
                // the extra oldChildren will remain still.
                const n = Math.max(newChildren.length, oldChildren.length);
                for (let i = 0; i < n; i++) {
                    const newChild = newChildren[i];
                    const oldChild = oldChildren[i];
                    discovered.push([oldNode, oldChild, newChild]);
                }
            }
            else if (typeof newChildren === 'function') {
                discovered.push([oldNode, null, newChildren]);
            }
        }
    }
}
export function createEmptyPromise() {
    let reject;
    let resolve;
    const cloned = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return [cloned, resolve, reject];
}
//# sourceMappingURL=utils.js.map