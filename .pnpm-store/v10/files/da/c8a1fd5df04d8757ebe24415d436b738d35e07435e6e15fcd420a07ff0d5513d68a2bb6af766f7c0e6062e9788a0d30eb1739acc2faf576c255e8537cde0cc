import { Group } from '../display-objects';
import type { DisplayObject } from '../display-objects';
import type { BaseStyleProps } from '../types';
import type { DisplayObjectConfig, IAnimationTimeline, ICanvas, IDocument, IElement, INode } from './interfaces';
import { Node } from './Node';
/**
 * the entry of DOM tree
 * Document -> Node -> EventTarget
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 */
export declare class Document extends Node implements IDocument {
    constructor();
    get children(): IElement[];
    get childElementCount(): number;
    get firstElementChild(): IElement | null;
    get lastElementChild(): IElement | null;
    /**
     * only document has defaultView, points to canvas,
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
     */
    defaultView: ICanvas | null;
    /**
     * the root element of document, eg. <html>
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
     */
    readonly documentElement: Group;
    /**
     * document.timeline in WAAPI
     */
    readonly timeline: IAnimationTimeline;
    readonly ownerDocument: any;
    /**
     * @example const circle = document.createElement('circle', { style: { r: 10 } });
     */
    createElement<T extends DisplayObject<StyleProps>, StyleProps extends BaseStyleProps>(tagName: string, options: DisplayObjectConfig<StyleProps>): T;
    createElementNS<T extends DisplayObject<StyleProps>, StyleProps extends BaseStyleProps>(namespaceURI: string, tagName: string, options: DisplayObjectConfig<StyleProps>): T;
    cloneNode(deep?: boolean): this;
    destroy(): void;
    /**
     * Picking 2D graphics with RBush based on BBox, fast but inaccurate.
     */
    elementsFromBBox(minX: number, minY: number, maxX: number, maxY: number): DisplayObject[];
    elementFromPointSync(x: number, y: number): DisplayObject;
    /**
     * Do picking with API instead of triggering interactive events.
     *
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint
     */
    elementFromPoint(x: number, y: number): Promise<DisplayObject>;
    elementsFromPointSync(x: number, y: number): DisplayObject[];
    /**
     * Do picking with API instead of triggering interactive events.
     *
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementsFromPoint
     */
    elementsFromPoint(x: number, y: number): Promise<DisplayObject[]>;
    /**
     * eg. Uncaught DOMException: Failed to execute 'appendChild' on 'Node': Only one element on document allowed.
     */
    appendChild<T extends INode>(newChild: T, index?: number): T;
    insertBefore<T extends INode>(newChild: T, refChild: INode | null): T;
    removeChild<T extends INode>(oldChild: T, destroy?: boolean): T;
    replaceChild<T extends INode>(newChild: INode, oldChild: T, destroy?: boolean): T;
    append(...nodes: INode[]): void;
    prepend(...nodes: INode[]): void;
    /**
     * Execute query on documentElement.
     */
    getElementById<E extends IElement = IElement>(id: string): E | null;
    getElementsByName<E extends IElement = IElement>(name: string): E[];
    getElementsByTagName<E extends IElement = IElement>(tagName: string): E[];
    getElementsByClassName<E extends IElement = IElement>(className: string): E[];
    querySelector<E extends IElement = IElement>(selectors: string): E | null;
    querySelectorAll<E extends IElement = IElement>(selectors: string): E[];
    find<E extends IElement = IElement>(filter: (node: E) => boolean): E | null;
    findAll<E extends IElement = IElement>(filter: (node: E) => boolean): E[];
}
//# sourceMappingURL=Document.d.ts.map