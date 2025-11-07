import type { IAnimation, IDocument } from '@antv/g';
import type { AnimationResult } from '../animation';
import type { DisplayObject } from '../shapes';
import { Group } from '../shapes';
export type _Element = DisplayObject & {
    __data__?: any;
    __toData__?: any[];
    __fromElements__?: DisplayObject[];
    __facet__?: boolean;
};
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
export declare class Selection<T = any> {
    #private;
    static registry: Record<string, new () => _Element>;
    private _elements;
    private _parent;
    private _data;
    private _enter;
    private _exit;
    private _update;
    private _merge;
    private _split;
    private _document;
    private _transitions;
    private _facetElements;
    constructor(elements?: Iterable<_Element>, data?: T[] | [T, _Element[]][], parent?: _Element, document?: IDocument | null, selections?: [Selection, Selection, Selection, Selection, Selection], transitions?: Promise<void>[], updateElements?: _Element[]);
    selectAll(selector: string | _Element[]): Selection<T>;
    selectFacetAll(selector: string | _Element[]): Selection<T>;
    /**
     * @todo Replace with querySelector which has bug now.
     */
    select(selector: string | _Element): Selection<T>;
    append(node: string | ((data: T, i: number) => _Element)): Selection<T>;
    maybeAppend<T = DisplayObject>(id: string, node: string | (() => _Element)): Selection<T>;
    maybeAppendByClassName<T = DisplayObject>(className: any, node: string | (() => _Element)): Selection<T>;
    maybeAppendByName<T = DisplayObject>(name: string, node: string | (() => _Element)): Selection<T>;
    /**
     * Bind data to elements, and produce three selection:
     * Enter: Selection with empty elements and data to be bind to elements.
     * Update: Selection with elements to be updated.
     * Exit: Selection with elements to be removed.
     */
    data<T = any>(data: T[], id?: (d: T, index?: number) => any, groupId?: (d: T, index?: number) => any): Selection<T>;
    merge(other: Selection<T>): Selection<T>;
    createElement(type: string): _Element;
    /**
     * Apply callback for each selection(enter, update, exit)
     * and merge them into one selection.
     */
    join(enter?: (selection: Selection<T>) => any, update?: (selection: Selection<T>) => any, exit?: (selection: Selection<T>) => any, merge?: (selection: Selection<T>) => any, split?: (selection: Selection<T>) => any): Selection<T>;
    remove(): Selection<T>;
    each(callback: (datum: T, index: number) => any): Selection<T>;
    attr(key: string, value: any): Selection<T>;
    style(key: string, value: any, callable?: boolean): Selection<T>;
    styles(style?: Record<string, any>, callable?: boolean): Selection<T>;
    update(option: any, callable?: boolean): Selection<T>;
    /** if current stage is maybeAppend, skip update stage */
    maybeUpdate(option: any, callable?: boolean): Selection<T>;
    transition(callback?: (datum: T, index: number) => AnimationResult | AnimationResult[]): Selection<T>;
    on(event: string, handler: any): this;
    call(callback: (selection: Selection<T>, ...args: any[]) => any, ...args: any[]): Selection<T>;
    node<T extends _Element = _Element>(): T;
    nodes(): _Element[];
    transitions(): IAnimation[];
    parent(): DisplayObject;
}
export declare function select<T = any>(node: DisplayObject): Selection<T>;
export declare function maybeAppend<T>(parent: Group, selector: string, node: string | ((data: T, i: number) => _Element)): Selection<T>;
