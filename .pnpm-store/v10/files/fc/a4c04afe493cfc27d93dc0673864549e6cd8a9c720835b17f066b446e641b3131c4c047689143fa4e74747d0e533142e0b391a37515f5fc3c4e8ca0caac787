import { DisplayObject, IDocument, IAnimation as GAnimation } from '@antv/g';
export type G2Element = DisplayObject & {
    __data__?: any;
    __toData__?: any[];
    __fromElements__?: DisplayObject[];
    __facet__?: boolean;
    __removed__?: boolean;
};
export declare function select<T = any>(node: DisplayObject): Selection<T>;
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
    static registry: Record<string, new () => G2Element>;
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
    constructor(elements?: Iterable<G2Element>, data?: T[] | [T, G2Element[]][], parent?: G2Element, document?: IDocument | null, selections?: [Selection, Selection, Selection, Selection, Selection], transitions?: (GAnimation | GAnimation[])[], updateElements?: G2Element[]);
    selectAll(selector: string | G2Element[]): Selection<T>;
    selectFacetAll(selector: string | G2Element[]): Selection<T>;
    /**
     * @todo Replace with querySelector which has bug now.
     */
    select(selector: string | G2Element): Selection<T>;
    append(node: string | ((data: T, i: number) => G2Element)): Selection<T>;
    maybeAppend(id: string, node: string | (() => G2Element), className?: string): Selection<any>;
    /**
     * Bind data to elements, and produce three selection:
     * Enter: Selection with empty elements and data to be bind to elements.
     * Update: Selection with elements to be updated.
     * Exit: Selection with elements to be removed.
     */
    data<T = any>(data: T[], id?: (d: T, index?: number) => any, groupId?: (d: T, index?: number) => any): Selection<T>;
    merge(other: Selection<T>): Selection<T>;
    createElement(type: string): G2Element;
    /**
     * Apply callback for each selection(enter, update, exit)
     * and merge them into one selection.
     */
    join(enter?: (selection: Selection<T>) => any, update?: (selection: Selection<T>) => any, exit?: (selection: Selection<T>) => any, merge?: (selection: Selection<T>) => any, split?: (selection: Selection<T>) => any): Selection<T>;
    remove(): Selection<T>;
    each(callback: (datum: T, index: number, element: any) => any): Selection<T>;
    attr(key: string, value: any): Selection<T>;
    style(key: string, value: any): Selection<T>;
    transition(value: any): Selection<T>;
    on(event: string, handler: any): this;
    call(callback: (selection: Selection<T>, ...args: any[]) => any, ...args: any[]): Selection<T>;
    node(): G2Element;
    nodes(): G2Element[];
    transitions(): (GAnimation | GAnimation[])[];
    parent(): DisplayObject;
}
