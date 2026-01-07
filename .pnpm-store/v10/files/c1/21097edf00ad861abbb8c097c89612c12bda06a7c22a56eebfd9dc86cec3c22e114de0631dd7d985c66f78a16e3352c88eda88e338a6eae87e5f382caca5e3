import type { DisplayObject, Node } from '..';
import { MutationEvent } from '..';
import type { MutationRecord as IMutationRecord } from '../dom/MutationObserver';
export declare class MutationRecord implements IMutationRecord {
    type: MutationRecordType;
    target: Node;
    static copy(original: MutationRecord): MutationRecord;
    addedNodes: Node[];
    attributeName: string;
    attributeNamespace: string;
    nextSibling: Node;
    oldValue: string;
    previousSibling: Node;
    removedNodes: Node[];
    constructor(type: MutationRecordType, target: Node);
}
export declare class Registration {
    observer: MutationObserver;
    target: Node;
    options?: MutationObserverInit;
    private transientObservedNodes;
    constructor(observer: MutationObserver, target: Node, options?: MutationObserverInit);
    enqueue(record: MutationRecord): void;
    addListeners(): void;
    private addListeners_;
    removeListeners(): void;
    removeListeners_(node: Node): void;
    /**
     * Adds a transient observer on node. The transient observer gets removed
     * next time we deliver the change records.
     */
    removeTransientObservers(): void;
    handleEvent(e: MutationEvent): void;
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 * @see https://github.com/googlearchive/MutationObservers/blob/master/MutationObserver.js
 */
export declare class MutationObserver {
    callback: MutationCallback;
    nodes: Node[];
    records: MutationRecord[];
    uid: number;
    constructor(callback: MutationCallback);
    observe(target: DisplayObject, options?: MutationObserverInit): void;
    disconnect(): void;
    takeRecords(): MutationRecord[];
}
//# sourceMappingURL=MutationObserver.d.ts.map