import { EventTarget } from './EventTarget';
import type { IChildNode, IDocument, IElement, IEventTarget, INode, IParentNode } from './interfaces';
import { type MutationRecord } from './MutationObserver';
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 */
export declare abstract class Node extends EventTarget implements INode {
    /**
     * Both nodes are in different documents or different trees in the same document.
     */
    static DOCUMENT_POSITION_DISCONNECTED: number;
    /**
     * otherNode precedes the node in either a pre-order depth-first traversal
     * of a tree containing both (e.g., as an ancestor or previous sibling or a descendant of a previous sibling or previous sibling of an ancestor) or (if they are disconnected) in an arbitrary but consistent ordering.
     */
    static DOCUMENT_POSITION_PRECEDING: number;
    /**
     * otherNode follows the node in either a pre-order depth-first traversal of a tree containing both (e.g., as a descendant or following sibling or a descendant of a following sibling or following sibling of an ancestor) or (if they are disconnected) in an arbitrary but consistent ordering.
     */
    static DOCUMENT_POSITION_FOLLOWING: number;
    /**
     * otherNode is an ancestor of the node.
     */
    static DOCUMENT_POSITION_CONTAINS: number;
    /**
     * otherNode is a descendant of the node.
     */
    static DOCUMENT_POSITION_CONTAINED_BY: number;
    /**
     * The result relies upon arbitrary and/or implementation-specific behavior and is not guaranteed to be portable.
     */
    static DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    static isNode(target: IEventTarget | INode): target is INode;
    shadow: boolean;
    /**
     * points to canvas.document
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument
     */
    ownerDocument: IDocument | null;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/isConnected
     * @example
        circle.isConnected; // false
        canvas.appendChild(circle);
        circle.isConnected; // true
     */
    isConnected: boolean;
    /**
     * Returns node's node document's document base URL.
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node
     */
    readonly baseURI: string;
    /**
     * Returns the children.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
     */
    childNodes: IChildNode[];
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
     */
    nodeType: number;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeName
     */
    nodeName: string;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue
     */
    nodeValue: string | null;
    mutations: MutationRecord[] | undefined;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
     */
    get textContent(): string;
    set textContent(content: string);
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/getRootNode
     */
    getRootNode(opts?: {
        composed?: boolean;
    }): INode;
    hasChildNodes(): boolean;
    isDefaultNamespace(namespace: string | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    normalize(): void;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/isEqualNode
     */
    isEqualNode(otherNode: INode | null): boolean;
    isSameNode(otherNode: INode | null): boolean;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ParentNode
     */
    parentNode: (INode & IParentNode) | null;
    /**
     * @deprecated
     * @alias parentNode
     */
    get parent(): INode | null;
    get parentElement(): IElement | null;
    get nextSibling(): IChildNode | null;
    get previousSibling(): IChildNode | null;
    get firstChild(): IChildNode | null;
    get lastChild(): IChildNode | null;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
     * @see https://github.com/b-fuze/deno-dom/blob/master/src/dom/node.ts#L338
     */
    compareDocumentPosition(other: INode): number;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
     */
    abstract cloneNode(deep?: boolean): this;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
     */
    abstract appendChild<T extends INode>(newChild: T, index?: number): T;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
     */
    abstract insertBefore<T extends INode>(newChild: T, refChild: INode | null): T;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
     */
    abstract removeChild<T extends INode>(child: T): T;
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     */
    abstract replaceChild<T extends INode>(newChild: INode, oldChild: T): T;
    destroyed: boolean;
    abstract destroy(): void;
    /**
     * @deprecated
     * @alias contains
     */
    contain<T extends INode>(other: T | null): boolean;
    contains<T extends INode>(other: T | null): boolean;
    getAncestor(n: number): INode | null;
    forEach(callback: (o: INode) => void | boolean): void;
}
//# sourceMappingURL=Node.d.ts.map