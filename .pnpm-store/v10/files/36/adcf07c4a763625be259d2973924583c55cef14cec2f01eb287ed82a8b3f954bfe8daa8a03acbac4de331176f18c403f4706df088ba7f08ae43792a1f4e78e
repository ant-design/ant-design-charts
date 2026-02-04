import type { INode } from '../dom/interfaces';
export declare enum SortReason {
    ADDED = 0,
    REMOVED = 1,
    Z_INDEX_CHANGED = 2
}
export interface Sortable {
    /**
     * need to re-sort
     */
    dirty: boolean;
    /**
     * sorted child entities
     */
    sorted: INode[];
    /**
     * render order in whole scenegraph
     */
    renderOrder: number;
    /**
     * dirty children
     */
    dirtyChildren: INode[];
    dirtyReason: SortReason;
}
//# sourceMappingURL=Sortable.d.ts.map