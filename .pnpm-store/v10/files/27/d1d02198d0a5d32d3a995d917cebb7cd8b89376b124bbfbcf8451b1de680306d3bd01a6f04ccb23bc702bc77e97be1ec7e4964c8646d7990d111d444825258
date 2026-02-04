"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
exports.select = select;
const g_1 = require("@antv/g");
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("./helper");
function select(node) {
    return new Selection([node], null, node, node.ownerDocument);
}
/**
 * A simple implementation of d3-selection for @antv/g.
 * It has the core features of d3-selection and extended ability.
 * Every methods of selection returns new selection if elements
 * are mutated(e.g. append, remove), otherwise return the selection itself(e.g. attr, style).
 * @see https://github.com/d3/d3-selection
 * @see https://github.com/antvis/g
 * @todo Nested selections.
 * @todo More useful functor.
 */
class Selection {
    constructor(elements = null, data = null, parent = null, document = null, selections = [
        null,
        null,
        null,
        null,
        null,
    ], transitions = [], updateElements = []) {
        this._elements = Array.from(elements);
        this._data = data;
        this._parent = parent;
        this._document = document;
        this._enter = selections[0];
        this._update = selections[1];
        this._exit = selections[2];
        this._merge = selections[3];
        this._split = selections[4];
        this._transitions = transitions;
        this._facetElements = updateElements;
    }
    selectAll(selector) {
        const elements = typeof selector === 'string'
            ? this._parent.querySelectorAll(selector)
            : selector;
        return new Selection(elements, null, this._elements[0], this._document);
    }
    selectFacetAll(selector) {
        const elements = typeof selector === 'string'
            ? this._parent.querySelectorAll(selector)
            : selector;
        return new Selection(this._elements, null, this._parent, this._document, undefined, undefined, elements);
    }
    /**
     * @todo Replace with querySelector which has bug now.
     */
    select(selector) {
        const element = typeof selector === 'string'
            ? this._parent.querySelectorAll(selector)[0] || null
            : selector;
        return new Selection([element], null, element, this._document);
    }
    append(node) {
        const callback = typeof node === 'function' ? node : () => this.createElement(node);
        const elements = [];
        if (this._data !== null) {
            // For empty selection, append new element to parent.
            // Each element is bind with datum.
            for (let i = 0; i < this._data.length; i++) {
                const d = this._data[i];
                const [datum, from] = Array.isArray(d) ? d : [d, null];
                const newElement = callback(datum, i);
                newElement.__data__ = datum;
                if (from !== null)
                    newElement.__fromElements__ = from;
                this._parent.appendChild(newElement);
                elements.push(newElement);
            }
            return new Selection(elements, null, this._parent, this._document);
        }
        else {
            // For non-empty selection, append new element to
            // selected element and return new selection.
            for (let i = 0; i < this._elements.length; i++) {
                const element = this._elements[i];
                const datum = element.__data__;
                const newElement = callback(datum, i);
                element.appendChild(newElement);
                elements.push(newElement);
            }
            return new Selection(elements, null, elements[0], this._document);
        }
    }
    maybeAppend(id, node, className) {
        const element = this._elements[0];
        const child = element.getElementById(id);
        if (child) {
            return new Selection([child], null, this._parent, this._document);
        }
        const newChild = typeof node === 'string' ? this.createElement(node) : node();
        newChild.id = id;
        if (className)
            newChild.className = className;
        element.appendChild(newChild);
        return new Selection([newChild], null, this._parent, this._document);
    }
    /**
     * Bind data to elements, and produce three selection:
     * Enter: Selection with empty elements and data to be bind to elements.
     * Update: Selection with elements to be updated.
     * Exit: Selection with elements to be removed.
     */
    data(data, id = (d) => d, groupId = () => null) {
        // An Array of new data.
        const enter = [];
        // An Array of elements to be updated.
        const update = [];
        // A Set of elements to be removed.
        const exit = new Set(this._elements);
        // An Array of data to be merged into one element.
        const merge = [];
        // A Set of elements to be split into multiple datum.
        const split = new Set();
        // A Map from key to each element.
        const keyElement = new Map(this._elements.map((d, i) => [id(d.__data__, i), d]));
        // A Map from key to exist element. The Update Selection
        // can get element from this map, this is for diff among
        // facets.
        const keyUpdateElement = new Map(this._facetElements.map((d, i) => [id(d.__data__, i), d]));
        // A Map from groupKey to a group of elements.
        const groupKeyElements = (0, d3_array_1.group)(this._elements, (d) => groupId(d.__data__));
        // Diff data with selection(elements with data).
        // !!! Note
        // The switch is strictly ordered, not not change the order of them.
        for (let i = 0; i < data.length; i++) {
            const datum = data[i];
            const key = id(datum, i);
            const groupKey = groupId(datum, i);
            // Append element to update selection if incoming data has
            // exactly the same key with elements.
            if (keyElement.has(key)) {
                const element = keyElement.get(key);
                element.__data__ = datum;
                element.__facet__ = false;
                update.push(element);
                exit.delete(element);
                keyElement.delete(key);
                // Append element to update selection if incoming data has
                // exactly the same key with updateElements.
            }
            else if (keyUpdateElement.has(key)) {
                const element = keyUpdateElement.get(key);
                element.__data__ = datum;
                // Flag this element should update its parentNode.
                element.__facet__ = true;
                update.push(element);
                keyUpdateElement.delete(key);
                // Append datum to merge selection if existed elements has
                // its key as groupKey.
            }
            else if (groupKeyElements.has(key)) {
                const group = groupKeyElements.get(key);
                merge.push([datum, group]);
                for (const element of group)
                    exit.delete(element);
                groupKeyElements.delete(key);
                // Append element to split selection if incoming data has
                // groupKey as its key, and bind to datum for it.
            }
            else if (keyElement.has(groupKey)) {
                const element = keyElement.get(groupKey);
                if (element.__toData__)
                    element.__toData__.push(datum);
                else
                    element.__toData__ = [datum];
                split.add(element);
                exit.delete(element);
            }
            else {
                // @todo Data with non-unique key.
                enter.push(datum);
            }
        }
        // Create new selection with enter, update and exit.
        const S = [
            new Selection([], enter, this._parent, this._document),
            new Selection(update, null, this._parent, this._document),
            new Selection(exit, null, this._parent, this._document),
            new Selection([], merge, this._parent, this._document),
            new Selection(split, null, this._parent, this._document),
        ];
        return new Selection(this._elements, null, this._parent, this._document, S);
    }
    merge(other) {
        const elements = [...this._elements, ...other._elements];
        const transitions = [...this._transitions, ...other._transitions];
        return new Selection(elements, null, this._parent, this._document, undefined, transitions);
    }
    createElement(type) {
        if (this._document) {
            return this._document.createElement(type, {});
        }
        const Ctor = Selection.registry[type];
        if (Ctor)
            return new Ctor();
        return (0, helper_1.error)(`Unknown node type: ${type}`);
    }
    /**
     * Apply callback for each selection(enter, update, exit)
     * and merge them into one selection.
     */
    join(enter = (d) => d, update = (d) => d, exit = (d) => d.remove(), merge = (d) => d, split = (d) => d.remove()) {
        const newEnter = enter(this._enter);
        const newUpdate = update(this._update);
        const newExit = exit(this._exit);
        const newMerge = merge(this._merge);
        const newSplit = split(this._split);
        return newUpdate
            .merge(newEnter)
            .merge(newExit)
            .merge(newMerge)
            .merge(newSplit);
    }
    remove() {
        // Remove node immediately if there is no transition,
        // otherwise wait until transition finished.
        for (let i = 0; i < this._elements.length; i++) {
            const transition = this._transitions[i];
            this._elements[i].__removed__ = true;
            if (transition) {
                const T = Array.isArray(transition) ? transition : [transition];
                Promise.all(T.map((d) => d.finished)).then(() => {
                    const element = this._elements[i];
                    if (element.__removed__) {
                        element.remove();
                    }
                });
            }
            else {
                const element = this._elements[i];
                if (element.__removed__) {
                    element.remove();
                }
            }
        }
        return new Selection([], null, this._parent, this._document, undefined, this._transitions);
    }
    each(callback) {
        for (let i = 0; i < this._elements.length; i++) {
            const element = this._elements[i];
            const datum = element.__data__;
            callback(datum, i, element);
        }
        return this;
    }
    attr(key, value) {
        const callback = typeof value !== 'function' ? () => value : value;
        return this.each(function (d, i, element) {
            if (value !== undefined)
                element[key] = callback(d, i, element);
        });
    }
    style(key, value) {
        const callback = typeof value !== 'function' ? () => value : value;
        return this.each(function (d, i, element) {
            if (value !== undefined)
                element.style[key] = callback(d, i, element);
        });
    }
    transition(value) {
        const callback = typeof value !== 'function' ? () => value : value;
        const { _transitions: T } = this;
        return this.each(function (d, i, element) {
            T[i] = callback(d, i, element);
        });
    }
    on(event, handler) {
        this.each(function (d, i, element) {
            element.addEventListener(event, handler);
        });
        return this;
    }
    call(callback, ...args) {
        callback(this, ...args);
        return this;
    }
    node() {
        return this._elements[0];
    }
    nodes() {
        return this._elements;
    }
    transitions() {
        return this._transitions;
    }
    parent() {
        return this._parent;
    }
}
exports.Selection = Selection;
Selection.registry = {
    g: g_1.Group,
    rect: g_1.Rect,
    circle: g_1.Circle,
    path: g_1.Path,
    text: g_1.Text,
    ellipse: g_1.Ellipse,
    image: g_1.Image,
    line: g_1.Line,
    polygon: g_1.Polygon,
    polyline: g_1.Polyline,
    html: g_1.HTML,
};
//# sourceMappingURL=selection.js.map