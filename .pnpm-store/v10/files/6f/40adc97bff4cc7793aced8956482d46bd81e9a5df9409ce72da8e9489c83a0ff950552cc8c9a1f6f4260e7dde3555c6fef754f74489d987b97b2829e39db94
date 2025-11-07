// @ts-nocheck
import type { IAnimation, IDocument } from '@antv/g';
import { flatten } from '@antv/util';
import type { AnimationResult } from '../animation';
import type { BaseStyleProps as BP, DisplayObject } from '../shapes';
import { Circle, Ellipse, Group, HTML, Image, Line, Path, Polygon, Polyline, Rect, Text } from '../shapes';
import { group } from './group';

export type _Element = DisplayObject & {
  // Data for this element.
  __data__?: any;
  // An Array of data to be splitted to.
  __toData__?: any[];
  // An Array of elements to be merged from.
  __fromElements__?: DisplayObject[];
  // Whether to update parent if it in update selection.
  __facet__?: boolean;
};

function error(msg: string) {
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
export class Selection<T = any> {
  static registry: Record<string, new () => _Element> = {
    g: Group,
    rect: Rect,
    circle: Circle,
    path: Path,
    text: Text,
    ellipse: Ellipse,
    image: Image,
    line: Line,
    polygon: Polygon,
    polyline: Polyline,
    html: HTML,
  };

  private _elements: _Element[];

  private _parent: _Element;

  private _data: T[] | [T, _Element[]][];

  private _enter: Selection;

  private _exit: Selection;

  private _update: Selection;

  private _merge: Selection;

  private _split: Selection;

  private _document: IDocument;

  private _transitions: AnimationResult[];

  private _facetElements: _Element[];

  constructor(
    elements: Iterable<_Element> = null,
    data: T[] | [T, _Element[]][] = null,
    parent: _Element = null,
    document: IDocument | null = null,
    selections: [Selection, Selection, Selection, Selection, Selection] = [null, null, null, null, null],
    transitions: Promise<void>[] = [],
    updateElements: _Element[] = []
  ) {
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

  selectAll(selector: string | _Element[]): Selection<T> {
    const elements = typeof selector === 'string' ? this._parent.querySelectorAll<_Element>(selector) : selector;
    return new Selection<T>(elements, null, this._elements[0], this._document);
  }

  selectFacetAll(selector: string | _Element[]): Selection<T> {
    const elements = typeof selector === 'string' ? this._parent.querySelectorAll<_Element>(selector) : selector;
    return new Selection<T>(this._elements, null, this._parent, this._document, undefined, undefined, elements);
  }

  /**
   * @todo Replace with querySelector which has bug now.
   */
  select(selector: string | _Element): Selection<T> {
    const element =
      typeof selector === 'string' ? this._parent.querySelectorAll<_Element>(selector)[0] || null : selector;
    return new Selection<T>([element], null, element, this._document);
  }

  append(node: string | ((data: T, i: number) => _Element)): Selection<T> {
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
        if (from !== null) newElement.__fromElements__ = from;
        this._parent.appendChild(newElement);
        elements.push(newElement);
      }
      return new Selection(elements, null, this._parent, this._document);
    }
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

  #maybeAppend<T extends DisplayObject>(selector: string, node: string | (() => _Element)): Selection<T> {
    const element = this._elements[0];
    const child = element.querySelector<_Element>(selector);
    if (child) return new Selection([child], null, this._parent, this._document);
    const newChild = typeof node === 'string' ? this.createElement(node) : node();
    element.appendChild(newChild);
    return new Selection([newChild], null, this._parent, this._document);
  }

  maybeAppend<T = DisplayObject>(id: string, node: string | (() => _Element)) {
    const element = this.#maybeAppend<T>(id[0] === '#' ? id : `#${id}`, node);
    element.attr('id', id);
    return element;
  }

  maybeAppendByClassName<T = DisplayObject>(className: any, node: string | (() => _Element)) {
    const cls: string = className.toString();
    const element = this.#maybeAppend<T>(cls[0] === '.' ? cls : `.${cls}`, node);
    element.attr('className', cls);
    return element;
  }

  maybeAppendByName<T = DisplayObject>(name: string, node: string | (() => _Element)) {
    const element = this.#maybeAppend<T>(`[name="${name}"]`, node);
    element.attr('name', name);
    return element;
  }

  /**
   * Bind data to elements, and produce three selection:
   * Enter: Selection with empty elements and data to be bind to elements.
   * Update: Selection with elements to be updated.
   * Exit: Selection with elements to be removed.
   */
  data<T = any>(
    data: T[],
    id: (d: T, index?: number) => any = (d) => d,
    groupId: (d: T, index?: number) => any = () => null
  ): Selection<T> {
    // An Array of new data.
    const enter: T[] = [];

    // An Array of elements to be updated.
    const update: _Element[] = [];

    // A Set of elements to be removed.
    const exit = new Set<_Element>(this._elements);

    // An Array of data to be merged into one element.
    const merge: [T, _Element[]][] = [];

    // A Set of elements to be split into multiple datum.
    const split = new Set<_Element>();

    // A Map from key to each element.
    const keyElement = new Map<string, _Element>(this._elements.map((d, i) => [id(d.__data__, i), d]));

    // A Map from key to exist element. The Update Selection
    // can get element from this map, this is for diff among
    // facets.
    const keyUpdateElement = new Map<string, _Element>(this._facetElements.map((d, i) => [id(d.__data__, i), d]));

    // A Map from groupKey to a group of elements.
    const groupKeyElements = group(this._elements, (d) => groupId(d.__data__));

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
      } else if (keyUpdateElement.has(key)) {
        const element = keyUpdateElement.get(key);
        element.__data__ = datum;
        // Flag this element should update its parentNode.
        element.__facet__ = true;
        update.push(element);
        keyUpdateElement.delete(key);
        // Append datum to merge selection if existed elements has
        // its key as groupKey.
      } else if (groupKeyElements.has(key)) {
        const group = groupKeyElements.get(key);
        merge.push([datum, group]);
        for (const element of group) exit.delete(element);
        groupKeyElements.delete(key);
        // Append element to split selection if incoming data has
        // groupKey as its key, and bind to datum for it.
      } else if (keyElement.has(groupKey)) {
        const element = keyElement.get(groupKey);
        if (element.__toData__) element.__toData__.push(datum);
        else element.__toData__ = [datum];
        split.add(element);
        exit.delete(element);
      } else {
        enter.push(datum);
      }
    }

    // Create new selection with enter, update and exit.
    const S: [Selection<T>, Selection<T>, Selection<T>, Selection<T>, Selection<T>] = [
      new Selection<T>([], enter, this._parent, this._document),
      new Selection<T>(update, null, this._parent, this._document),
      new Selection<T>(exit, null, this._parent, this._document),
      new Selection<T>([], merge, this._parent, this._document),
      new Selection<T>(split, null, this._parent, this._document),
    ];

    return new Selection<T>(this._elements, null, this._parent, this._document, S);
  }

  merge(other: Selection<T>): Selection<T> {
    const elements = [...this._elements, ...other._elements];
    const transitions = [...this._transitions, ...other._transitions];
    return new Selection<T>(elements, null, this._parent, this._document, undefined, transitions);
  }

  createElement(type: string): _Element {
    if (this._document) {
      return this._document.createElement<_Element, BP>(type, {});
    }
    const Ctor = Selection.registry[type];
    if (Ctor) return new Ctor();
    return error(`Unknown node type: ${type}`);
  }

  /**
   * Apply callback for each selection(enter, update, exit)
   * and merge them into one selection.
   */
  join(
    enter: (selection: Selection<T>) => any = (d) => d,
    update: (selection: Selection<T>) => any = (d) => d,
    exit: (selection: Selection<T>) => any = (d) => d.remove(),
    merge: (selection: Selection<T>) => any = (d) => d,
    split: (selection: Selection<T>) => any = (d) => d.remove()
  ): Selection<T> {
    const newEnter = enter(this._enter);
    const newUpdate = update(this._update);
    const newExit = exit(this._exit);
    const newMerge = merge(this._merge);
    const newSplit = split(this._split);
    return newUpdate.merge(newEnter).merge(newExit).merge(newMerge).merge(newSplit);
  }

  remove(): Selection<T> {
    // Remove node immediately if there is no transition,
    // otherwise wait until transition finished.
    for (let i = 0; i < this._elements.length; i++) {
      const element = this._elements[i];
      const transition = this._transitions[i];
      if (transition) {
        transition.then(() => element.remove());
      } else {
        element.remove();
      }
    }
    return new Selection<T>([], null, this._parent, this._document, undefined, this._transitions);
  }

  each(callback: (datum: T, index: number) => any): Selection<T> {
    for (let i = 0; i < this._elements.length; i++) {
      const element = this._elements[i];
      const datum = element.__data__;
      callback.call(element, datum, i);
    }
    return this;
  }

  attr(key: string, value: any): Selection<T> {
    const callback = typeof value !== 'function' ? () => value : value;
    return this.each(function (d, i) {
      if (value !== undefined) this[key] = callback.call(this, d, i);
    });
  }

  style(key: string, value: any, callable: boolean = true): Selection<T> {
    const callback = typeof value !== 'function' || !callable ? () => value : value;
    return this.each(function (d, i) {
      if (value !== undefined) this.style[key] = callback.call(this, d, i);
    });
  }

  styles(style: Record<string, any> = {}, callable: boolean = true): Selection<T> {
    return this.each(function (d, i) {
      Object.entries(style).forEach(([key, value]) => {
        const callback = typeof value !== 'function' || !callable ? () => value : value;
        if (value !== undefined) this.attr(key, callback.call(this, d, i));
      });
    });
  }

  update(option: any, callable: boolean = true): Selection<T> {
    const callback = typeof option !== 'function' || !callable ? () => option : option;
    return this.each(function (d, i) {
      if (option && this.update) this.update(callback.call(this, d, i));
    });
  }

  /** if current stage is maybeAppend, skip update stage */
  maybeUpdate(option: any, callable: boolean = true): Selection<T> {
    const callback = typeof option !== 'function' || !callable ? () => option : option;
    return this.each(function (d, i) {
      if (option && this.update) this.update(callback.call(this, d, i));
    });
  }

  transition(callback?: (datum: T, index: number) => AnimationResult | AnimationResult[]): Selection<T> {
    const { _transitions: T } = this;
    const newTransitions = new Array<ReturnType<Exclude<typeof callback, undefined>>>(this._elements.length);
    this.each(function (d, i) {
      newTransitions[i] = callback.call(this, d, i);
    });
    this._transitions = flatten(newTransitions);
    return this;
  }

  on(event: string, handler: any) {
    this.each(function () {
      this.addEventListener(event, handler);
    });
    return this;
  }

  call(callback: (selection: Selection<T>, ...args: any[]) => any, ...args: any[]): Selection<T> {
    callback.call(this._parent, this, ...args);
    return this;
  }

  node<T extends _Element = _Element>(): T {
    return this._elements[0];
  }

  nodes(): _Element[] {
    return this._elements;
  }

  transitions() {
    return this._transitions.filter((t) => !!t);
  }

  parent(): DisplayObject {
    return this._parent;
  }
}

export function select<T = any>(node: DisplayObject) {
  return new Selection<T>([node], null, node, node.ownerDocument);
}

export function maybeAppend<T>(
  parent: Group,
  selector: string,
  node: string | ((data: T, i: number) => _Element)
): Selection<T> {
  if (!parent.querySelector(selector)) {
    return select(parent).append(node);
  }
  return select(parent).select(selector);
}
