import type { TableComponents } from 'rc-table/lib/interface';
import React from 'react';
export interface UseDragSortOptions<T> {
    dataSource?: T[];
    onDragSortEnd?: (beforeIndex: number, afterIndex: number, newDataSource: T[]) => Promise<void> | void;
    dragSortKey?: string;
    components?: TableComponents<T>;
    rowKey: any;
    DragHandle: React.FC<any>;
}
export declare function useDragSort<T>(props: UseDragSortOptions<T>): {
    DndContext: (contextProps: any) => import("react/jsx-runtime").JSX.Element;
    components: TableComponents<T>;
};
