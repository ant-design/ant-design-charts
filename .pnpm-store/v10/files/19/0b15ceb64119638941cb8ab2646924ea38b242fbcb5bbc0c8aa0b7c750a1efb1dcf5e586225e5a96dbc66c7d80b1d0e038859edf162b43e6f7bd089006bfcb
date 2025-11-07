import type { DisplayObject, IElement } from '@antv/g-lite';
import { MutationEvent } from '@antv/g-lite';
import { MutationRecord } from './MutationRecord';
export declare class Registration {
    observer: MutationObserver;
    target: IElement;
    options?: MutationObserverInit;
    private transientObservedNodes;
    constructor(observer: MutationObserver, target: IElement, options?: MutationObserverInit);
    enqueue(record: MutationRecord): void;
    addListeners(): void;
    private addListeners_;
    removeListeners(): void;
    removeListeners_(node: IElement): void;
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
    nodes: IElement[];
    records: MutationRecord[];
    uid: number;
    constructor(callback: MutationCallback);
    observe(target: DisplayObject, options?: MutationObserverInit): void;
    disconnect(): void;
    takeRecords(): MutationRecord[];
}
//# sourceMappingURL=MutationObserver.d.ts.map