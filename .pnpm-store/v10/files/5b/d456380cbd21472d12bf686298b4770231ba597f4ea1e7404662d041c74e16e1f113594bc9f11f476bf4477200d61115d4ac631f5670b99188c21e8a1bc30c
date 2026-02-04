import type { Cullable, Geometry, Renderable, Sortable, Transform } from '../components';
import type { AABB, Rectangle } from '../shapes';
import { type BaseStyleProps, type ParsedBaseStyleProps } from '../types';
import { CustomEvent } from './CustomEvent';
import { MutationEvent } from './MutationEvent';
import { Node } from './Node';
import type { ICSSStyleDeclaration, IElement, INode } from './interfaces';
export declare function resetEntityCounter(): void;
export declare const insertedEvent: MutationEvent;
export declare const removedEvent: MutationEvent;
export declare const destroyEvent: CustomEvent<any>;
/**
 * Has following capabilities:
 * * Node insert/remove, eg. appendChild, removeChild, remove...
 * * Query eg. querySelector getElementById...
 * * Animation
 */
export declare class Element<StyleProps extends BaseStyleProps = BaseStyleProps, ParsedStyleProps extends ParsedBaseStyleProps = ParsedBaseStyleProps> extends Node implements IElement<StyleProps, ParsedStyleProps> {
    /**
     * Unique id.
     */
    entity: number;
    transformable: Transform;
    renderable: Renderable;
    geometry: Geometry;
    /**
     * Marks the element as dirty, indicating it needs re-rendering or relayout.
     *
     * @param styleFlag - Whether to update style state (default: true).
     *                   When true, sets `renderable.dirty` to true.
     * @param layoutFlag - Optional. When provided, updates layout-related dirty flags:
     *                    - `renderable.boundsDirty`
     *                    - `renderable.renderBoundsDirty`
     *                    - `geometry.dirty`
     */
    dirty(styleFlag?: boolean, layoutFlag?: boolean): void;
    cullable: Cullable;
    sortable: Sortable;
    /**
     * used with `getElementById()`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/id
     */
    id: string;
    /**
     * used in `getElementsByClassName`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
     */
    get className(): string;
    set className(className: string);
    /**
     * used in `getElementsByName`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
     */
    name: string;
    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/namespaceURI
     */
    namespaceURI: string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
     */
    get classList(): string[];
    scrollLeft: number;
    scrollTop: number;
    /**
     * We don't support border now
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop
     */
    clientTop: number;
    clientLeft: number;
    get tagName(): string;
    get children(): IElement[];
    get childElementCount(): number;
    get firstElementChild(): IElement | null;
    get lastElementChild(): IElement | null;
    get parentElement(): IElement | null;
    get nextSibling(): IElement | null;
    get previousSibling(): IElement | null;
    cloneNode(deep?: boolean): this;
    appendChild<T extends INode>(child: T, index?: number): T;
    insertBefore<T extends INode>(newChild: T, refChild: INode | null): T;
    replaceChild<T extends INode>(newChild: INode, oldChild: T): T;
    removeChild<T extends INode>(child: T): T;
    /**
     * Remove all children which can be appended to its original parent later again.
     */
    removeChildren(): void;
    /**
     * Recursively destroy all children which can not be appended to its original parent later again.
     */
    destroyChildren(): void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
     */
    matches(selector: string): boolean;
    getElementById<E extends IElement = IElement>(id: string): E | null;
    getElementsByName<E extends IElement = IElement>(name: string): E[];
    getElementsByClassName<E extends IElement = IElement>(className: string): E[];
    getElementsByTagName<E extends IElement = IElement>(tagName: string): E[];
    querySelector<E extends IElement = IElement>(selectors: string): E | null;
    querySelectorAll<E extends IElement = IElement>(selectors: string): E[];
    /**
     * should traverses the element and its parents (heading toward the document root)
     * until it finds a node that matches the specified CSS selector.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/closest
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#polyfill
     */
    closest<E extends IElement = IElement>(selectors: string): E | null;
    /**
     * search in scene group, but should not include itself
     */
    find<E extends IElement = IElement>(filter: (node: E) => boolean): E | null;
    findAll<E extends IElement = IElement>(filter: (node: E) => boolean): E[];
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/after
     */
    after(...nodes: INode[]): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/before
     */
    before(...nodes: INode[]): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceWith
     */
    replaceWith(...nodes: INode[]): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/append
     */
    append(...nodes: INode[]): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/prepend
     */
    prepend(...nodes: INode[]): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceChildren
     */
    replaceChildren(...nodes: INode[]): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/remove
     */
    remove(): this;
    destroy(): void;
    getGeometryBounds(render?: boolean): AABB;
    /**
     * get geometry bounds in world space, not accounting for children
     */
    getTransformedGeometryBounds(render?: boolean): AABB | null;
    /**
     * get bounds in world space, account for children
     */
    getBounds(): AABB;
    getRenderBounds(): AABB;
    /**
     * get bounds in local space, account for children
     */
    getLocalBounds(): AABB;
    /**
     * account for context's bounds in client space,
     * but not accounting for children
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     */
    getBoundingClientRect(): Rectangle;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getClientRects
     */
    getClientRects(): Rectangle[];
    /**
     * compatible with `style`
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     */
    style: StyleProps & ICSSStyleDeclaration<StyleProps>;
    computedStyle: {};
    /**
     * Renderers will use these used values.
     */
    parsedStyle: ParsedStyleProps;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/computedStyleMap
     * eg. circle.computedStyleMap().get('fill');
     */
    computedStyleMap(): Map<string, unknown>;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes
     */
    readonly attributes: StyleProps;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames
     */
    getAttributeNames(): string[];
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
     */
    getAttribute(name: keyof StyleProps): StyleProps[keyof StyleProps];
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes
     */
    hasAttributes(): boolean;
    /**
     * should use removeAttribute() instead of setting the attribute value to null either directly or using setAttribute(). Many attributes will not behave as expected if you set them to null.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
     */
    removeAttribute(attributeName: keyof StyleProps): void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
     */
    setAttribute<Key extends keyof StyleProps>(attributeName: Key, value: StyleProps[Key]): void;
    getAttributeNS(namespace: string, localName: string): string;
    getAttributeNode(qualifiedName: string): Attr;
    getAttributeNodeNS(namespace: string, localName: string): Attr;
    hasAttributeNS(namespace: string, localName: string): boolean;
    removeAttributeNS(namespace: string, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    setAttributeNS(namespace: string, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr;
    setAttributeNodeNS(attr: Attr): Attr;
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
}
//# sourceMappingURL=Element.d.ts.map