"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
exports.select = select;
exports.maybeAppend = maybeAppend;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var shapes_1 = require("../shapes");
var group_1 = require("./group");
function error(msg) {
    throw new Error(msg);
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
var Selection = /** @class */ (function () {
    function Selection(elements, data, parent, document, selections, transitions, updateElements) {
        if (elements === void 0) { elements = null; }
        if (data === void 0) { data = null; }
        if (parent === void 0) { parent = null; }
        if (document === void 0) { document = null; }
        if (selections === void 0) { selections = [null, null, null, null, null]; }
        if (transitions === void 0) { transitions = []; }
        if (updateElements === void 0) { updateElements = []; }
        _Selection_instances.add(this);
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
    Selection.prototype.selectAll = function (selector) {
        var elements = typeof selector === 'string' ? this._parent.querySelectorAll(selector) : selector;
        return new _a(elements, null, this._elements[0], this._document);
    };
    Selection.prototype.selectFacetAll = function (selector) {
        var elements = typeof selector === 'string' ? this._parent.querySelectorAll(selector) : selector;
        return new _a(this._elements, null, this._parent, this._document, undefined, undefined, elements);
    };
    /**
     * @todo Replace with querySelector which has bug now.
     */
    Selection.prototype.select = function (selector) {
        var element = typeof selector === 'string' ? this._parent.querySelectorAll(selector)[0] || null : selector;
        return new _a([element], null, element, this._document);
    };
    Selection.prototype.append = function (node) {
        var _this = this;
        var callback = typeof node === 'function' ? node : function () { return _this.createElement(node); };
        var elements = [];
        if (this._data !== null) {
            // For empty selection, append new element to parent.
            // Each element is bind with datum.
            for (var i = 0; i < this._data.length; i++) {
                var d = this._data[i];
                var _b = tslib_1.__read(Array.isArray(d) ? d : [d, null], 2), datum = _b[0], from = _b[1];
                var newElement = callback(datum, i);
                newElement.__data__ = datum;
                if (from !== null)
                    newElement.__fromElements__ = from;
                this._parent.appendChild(newElement);
                elements.push(newElement);
            }
            return new _a(elements, null, this._parent, this._document);
        }
        // For non-empty selection, append new element to
        // selected element and return new selection.
        for (var i = 0; i < this._elements.length; i++) {
            var element = this._elements[i];
            var datum = element.__data__;
            var newElement = callback(datum, i);
            element.appendChild(newElement);
            elements.push(newElement);
        }
        return new _a(elements, null, elements[0], this._document);
    };
    Selection.prototype.maybeAppend = function (id, node) {
        var element = tslib_1.__classPrivateFieldGet(this, _Selection_instances, "m", _Selection_maybeAppend).call(this, id[0] === '#' ? id : "#".concat(id), node);
        element.attr('id', id);
        return element;
    };
    Selection.prototype.maybeAppendByClassName = function (className, node) {
        var cls = className.toString();
        var element = tslib_1.__classPrivateFieldGet(this, _Selection_instances, "m", _Selection_maybeAppend).call(this, cls[0] === '.' ? cls : ".".concat(cls), node);
        element.attr('className', cls);
        return element;
    };
    Selection.prototype.maybeAppendByName = function (name, node) {
        var element = tslib_1.__classPrivateFieldGet(this, _Selection_instances, "m", _Selection_maybeAppend).call(this, "[name=\"".concat(name, "\"]"), node);
        element.attr('name', name);
        return element;
    };
    /**
     * Bind data to elements, and produce three selection:
     * Enter: Selection with empty elements and data to be bind to elements.
     * Update: Selection with elements to be updated.
     * Exit: Selection with elements to be removed.
     */
    Selection.prototype.data = function (data, id, groupId) {
        var e_1, _b;
        if (id === void 0) { id = function (d) { return d; }; }
        if (groupId === void 0) { groupId = function () { return null; }; }
        // An Array of new data.
        var enter = [];
        // An Array of elements to be updated.
        var update = [];
        // A Set of elements to be removed.
        var exit = new Set(this._elements);
        // An Array of data to be merged into one element.
        var merge = [];
        // A Set of elements to be split into multiple datum.
        var split = new Set();
        // A Map from key to each element.
        var keyElement = new Map(this._elements.map(function (d, i) { return [id(d.__data__, i), d]; }));
        // A Map from key to exist element. The Update Selection
        // can get element from this map, this is for diff among
        // facets.
        var keyUpdateElement = new Map(this._facetElements.map(function (d, i) { return [id(d.__data__, i), d]; }));
        // A Map from groupKey to a group of elements.
        var groupKeyElements = (0, group_1.group)(this._elements, function (d) { return groupId(d.__data__); });
        // Diff data with selection(elements with data).
        // !!! Note
        // The switch is strictly ordered, not not change the order of them.
        for (var i = 0; i < data.length; i++) {
            var datum = data[i];
            var key = id(datum, i);
            var groupKey = groupId(datum, i);
            // Append element to update selection if incoming data has
            // exactly the same key with elements.
            if (keyElement.has(key)) {
                var element = keyElement.get(key);
                element.__data__ = datum;
                element.__facet__ = false;
                update.push(element);
                exit.delete(element);
                keyElement.delete(key);
                // Append element to update selection if incoming data has
                // exactly the same key with updateElements.
            }
            else if (keyUpdateElement.has(key)) {
                var element = keyUpdateElement.get(key);
                element.__data__ = datum;
                // Flag this element should update its parentNode.
                element.__facet__ = true;
                update.push(element);
                keyUpdateElement.delete(key);
                // Append datum to merge selection if existed elements has
                // its key as groupKey.
            }
            else if (groupKeyElements.has(key)) {
                var group_3 = groupKeyElements.get(key);
                merge.push([datum, group_3]);
                try {
                    for (var group_2 = (e_1 = void 0, tslib_1.__values(group_3)), group_2_1 = group_2.next(); !group_2_1.done; group_2_1 = group_2.next()) {
                        var element = group_2_1.value;
                        exit.delete(element);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (group_2_1 && !group_2_1.done && (_b = group_2.return)) _b.call(group_2);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                groupKeyElements.delete(key);
                // Append element to split selection if incoming data has
                // groupKey as its key, and bind to datum for it.
            }
            else if (keyElement.has(groupKey)) {
                var element = keyElement.get(groupKey);
                if (element.__toData__)
                    element.__toData__.push(datum);
                else
                    element.__toData__ = [datum];
                split.add(element);
                exit.delete(element);
            }
            else {
                enter.push(datum);
            }
        }
        // Create new selection with enter, update and exit.
        var S = [
            new _a([], enter, this._parent, this._document),
            new _a(update, null, this._parent, this._document),
            new _a(exit, null, this._parent, this._document),
            new _a([], merge, this._parent, this._document),
            new _a(split, null, this._parent, this._document),
        ];
        return new _a(this._elements, null, this._parent, this._document, S);
    };
    Selection.prototype.merge = function (other) {
        var elements = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(this._elements), false), tslib_1.__read(other._elements), false);
        var transitions = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(this._transitions), false), tslib_1.__read(other._transitions), false);
        return new _a(elements, null, this._parent, this._document, undefined, transitions);
    };
    Selection.prototype.createElement = function (type) {
        if (this._document) {
            return this._document.createElement(type, {});
        }
        var Ctor = _a.registry[type];
        if (Ctor)
            return new Ctor();
        return error("Unknown node type: ".concat(type));
    };
    /**
     * Apply callback for each selection(enter, update, exit)
     * and merge them into one selection.
     */
    Selection.prototype.join = function (enter, update, exit, merge, split) {
        if (enter === void 0) { enter = function (d) { return d; }; }
        if (update === void 0) { update = function (d) { return d; }; }
        if (exit === void 0) { exit = function (d) { return d.remove(); }; }
        if (merge === void 0) { merge = function (d) { return d; }; }
        if (split === void 0) { split = function (d) { return d.remove(); }; }
        var newEnter = enter(this._enter);
        var newUpdate = update(this._update);
        var newExit = exit(this._exit);
        var newMerge = merge(this._merge);
        var newSplit = split(this._split);
        return newUpdate.merge(newEnter).merge(newExit).merge(newMerge).merge(newSplit);
    };
    Selection.prototype.remove = function () {
        var _loop_1 = function (i) {
            var element = this_1._elements[i];
            var transition = this_1._transitions[i];
            if (transition) {
                transition.then(function () { return element.remove(); });
            }
            else {
                element.remove();
            }
        };
        var this_1 = this;
        // Remove node immediately if there is no transition,
        // otherwise wait until transition finished.
        for (var i = 0; i < this._elements.length; i++) {
            _loop_1(i);
        }
        return new _a([], null, this._parent, this._document, undefined, this._transitions);
    };
    Selection.prototype.each = function (callback) {
        for (var i = 0; i < this._elements.length; i++) {
            var element = this._elements[i];
            var datum = element.__data__;
            callback.call(element, datum, i);
        }
        return this;
    };
    Selection.prototype.attr = function (key, value) {
        var callback = typeof value !== 'function' ? function () { return value; } : value;
        return this.each(function (d, i) {
            if (value !== undefined)
                this[key] = callback.call(this, d, i);
        });
    };
    Selection.prototype.style = function (key, value, callable) {
        if (callable === void 0) { callable = true; }
        var callback = typeof value !== 'function' || !callable ? function () { return value; } : value;
        return this.each(function (d, i) {
            if (value !== undefined)
                this.style[key] = callback.call(this, d, i);
        });
    };
    Selection.prototype.styles = function (style, callable) {
        if (style === void 0) { style = {}; }
        if (callable === void 0) { callable = true; }
        return this.each(function (d, i) {
            var _this = this;
            Object.entries(style).forEach(function (_b) {
                var _c = tslib_1.__read(_b, 2), key = _c[0], value = _c[1];
                var callback = typeof value !== 'function' || !callable ? function () { return value; } : value;
                if (value !== undefined)
                    _this.attr(key, callback.call(_this, d, i));
            });
        });
    };
    Selection.prototype.update = function (option, callable) {
        if (callable === void 0) { callable = true; }
        var callback = typeof option !== 'function' || !callable ? function () { return option; } : option;
        return this.each(function (d, i) {
            if (option && this.update)
                this.update(callback.call(this, d, i));
        });
    };
    /** if current stage is maybeAppend, skip update stage */
    Selection.prototype.maybeUpdate = function (option, callable) {
        if (callable === void 0) { callable = true; }
        var callback = typeof option !== 'function' || !callable ? function () { return option; } : option;
        return this.each(function (d, i) {
            if (option && this.update)
                this.update(callback.call(this, d, i));
        });
    };
    Selection.prototype.transition = function (callback) {
        var T = this._transitions;
        var newTransitions = new Array(this._elements.length);
        this.each(function (d, i) {
            newTransitions[i] = callback.call(this, d, i);
        });
        this._transitions = (0, util_1.flatten)(newTransitions);
        return this;
    };
    Selection.prototype.on = function (event, handler) {
        this.each(function () {
            this.addEventListener(event, handler);
        });
        return this;
    };
    Selection.prototype.call = function (callback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        callback.call.apply(callback, tslib_1.__spreadArray([this._parent, this], tslib_1.__read(args), false));
        return this;
    };
    Selection.prototype.node = function () {
        return this._elements[0];
    };
    Selection.prototype.nodes = function () {
        return this._elements;
    };
    Selection.prototype.transitions = function () {
        return this._transitions.filter(function (t) { return !!t; });
    };
    Selection.prototype.parent = function () {
        return this._parent;
    };
    var _Selection_instances, _a, _Selection_maybeAppend;
    _a = Selection, _Selection_instances = new WeakSet(), _Selection_maybeAppend = function _Selection_maybeAppend(selector, node) {
        var element = this._elements[0];
        var child = element.querySelector(selector);
        if (child)
            return new _a([child], null, this._parent, this._document);
        var newChild = typeof node === 'string' ? this.createElement(node) : node();
        element.appendChild(newChild);
        return new _a([newChild], null, this._parent, this._document);
    };
    Selection.registry = {
        g: shapes_1.Group,
        rect: shapes_1.Rect,
        circle: shapes_1.Circle,
        path: shapes_1.Path,
        text: shapes_1.Text,
        ellipse: shapes_1.Ellipse,
        image: shapes_1.Image,
        line: shapes_1.Line,
        polygon: shapes_1.Polygon,
        polyline: shapes_1.Polyline,
        html: shapes_1.HTML,
    };
    return Selection;
}());
exports.Selection = Selection;
function select(node) {
    return new Selection([node], null, node, node.ownerDocument);
}
function maybeAppend(parent, selector, node) {
    if (!parent.querySelector(selector)) {
        return select(parent).append(node);
    }
    return select(parent).select(selector);
}
//# sourceMappingURL=selection.js.map