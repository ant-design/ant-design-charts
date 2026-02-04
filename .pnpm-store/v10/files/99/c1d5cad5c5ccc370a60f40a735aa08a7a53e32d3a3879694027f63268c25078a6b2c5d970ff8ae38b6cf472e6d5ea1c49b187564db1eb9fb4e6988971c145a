import { DisplayObject } from '@antv/g';
export declare function maybeValue(specified: any, defaults: any): any;
/**
 * Finds a single element based on the mouse event in a non-series context (e.g., single item tooltip).
 * @param root - The root display object of the chart.
 * @param event - The mouse event object (e.g., pointermove, pointerdown).
 * @param elements - Array of chart elements to search within.
 * @param coordinate - The coordinate system of the chart (e.g., Cartesian, polar).
 * @param scale - The scale configurations (e.g., x, series scales).
 * @param shared - Whether the tooltip is shared among multiple elements (e.g., grouped bars).
 * @returns The matched display object or `undefined` if no element is found.
 * @description
 * - Handles bar charts by sorting elements and using bisector search for efficient lookup.
 * - For non-bar charts, directly finds the target element from the event's target.
 * - Adjusts for bar spacing in grouped charts when `shared` is false.
 */
export declare function findSingleElement({ root, event, elements, coordinate, scale, shared, }: {
    root: any;
    event: any;
    elements?: any[];
    coordinate: any;
    scale: any;
    shared: any;
}): DisplayObject | undefined;
/**
 * Finds series-related elements and data based on the mouse event for series tooltips.
 * @param root - The root display object of the chart.
 * @param event - The mouse event object (e.g., pointermove, pointerdown).
 * @param elements - Array of chart elements to search within.
 * @param coordinate - The coordinate system of the chart (e.g., Cartesian, polar).
 * @param scale - The scale configurations (e.g., x, series scales).
 * @param startX - The starting X position of the plot area.
 * @param startY - The starting Y position of the plot area.
 * @returns An object containing:
 * - `selectedElements`: Matched display objects (series and item elements).
 * - `selectedData`: Corresponding data records of the selected elements.
 * - `filteredSeriesData`: Filtered series data closest to the mouse focus.
 * - `abstractX`: A function to convert mouse coordinates to abstract X values.
 * @description
 * - Splits elements into series and item elements for targeted searching.
 * - Handles bar charts and band scales using bisector search and coordinate inversion.
 * - Sorts elements to ensure correct visual ordering (top-to-bottom or right-to-left in transposed mode).
 * - Filters and groups data to provide accurate tooltip information for series.
 */
export declare function findSeriesElement({ root, event, elements, coordinate, scale, startX, startY, }: {
    root: any;
    event: any;
    elements: any;
    coordinate: any;
    scale: any;
    startX: any;
    startY: any;
}): {
    selectedElements: DisplayObject[];
    selectedData: Record<string, any>[];
    filteredSeriesData: any[];
    abstractX: (number: any) => number;
};
/**
 * Show tooltip for series item.
 */
export declare function seriesTooltip(root: DisplayObject, { elements: elementsof, sort: sortFunction, filter: filterFunction, scale, coordinate, crosshairs, crosshairsX, crosshairsY, render, groupName, emitter, wait, leading, trailing, startX, startY, body, single, position, enterable, mount, bounding, theme, offset, disableNative, marker, preserve, style: _style, css, clickLock, disableAutoHide, ...rest }: Record<string, any>): () => void;
/**
 * Show tooltip for non-series item.
 */
export declare function tooltip(root: DisplayObject, { elements: elementsof, coordinate, scale, render, groupName, sort: sortFunction, filter: filterFunction, emitter, wait, leading, trailing, groupKey, // group elements by specified key
single, position, enterable, datum, view, mount, bounding, theme, offset, shared, body, disableNative, preserve, css, clickLock, disableAutoHide, }: Record<string, any>): () => void;
export declare function Tooltip(options: any): (target: any, viewInstances: any, emitter: any) => () => void;
export declare namespace Tooltip {
    var props: {
        reapplyWhenUpdate: boolean;
    };
}
