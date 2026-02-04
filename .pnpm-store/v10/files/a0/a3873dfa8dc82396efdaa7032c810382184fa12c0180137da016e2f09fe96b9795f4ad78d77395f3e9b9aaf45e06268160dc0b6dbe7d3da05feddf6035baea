import { DisplayObject } from '@antv/g';
export declare function brush(root: DisplayObject, { brushed, brushended, brushcreated, brushstarted, brushupdated, extent, brushRegion, reverse, fill, fillOpacity, stroke, selectedHandles, ...style }: Record<string, any>): {
    mask: any;
    move(x: any, y: any, x1: any, y1: any, emit?: boolean): void;
    remove(emit?: boolean): void;
    destroy(): void;
};
/**
 * @todo Brush over view for series view.
 * @todo Test perf.
 */
export declare function brushHighlight(root: any, { elements: elementof, selectedHandles, siblings: siblingsof, datum, brushRegion, extent: optionalExtent, reverse, scale, coordinate, series, key, bboxOf, state, emitter, ...rest }: {
    [x: string]: any;
    elements: any;
    selectedHandles: any;
    siblings?: (root: any) => any[];
    datum: any;
    brushRegion: any;
    extent: any;
    reverse: any;
    scale: any;
    coordinate: any;
    series?: boolean;
    key?: (d: any) => any;
    bboxOf?: (root: any) => {
        x: any;
        y: any;
        width: any;
        height: any;
    };
    state?: {};
    emitter: any;
}): {
    mask: any;
    move(x: any, y: any, x1: any, y1: any, emit?: boolean): void;
    remove(emit?: boolean): void;
    destroy(): void;
};
export declare function BrushHighlight({ facet, brushKey, ...rest }: {
    [x: string]: any;
    facet: any;
    brushKey: any;
}): (target: any, viewInstances: any, emitter: any) => {
    mask: any;
    move(x: any, y: any, x1: any, y1: any, emit?: boolean): void;
    remove(emit?: boolean): void;
    destroy(): void;
} | (() => void);
export declare namespace BrushHighlight {
    var props: {
        reapplyWhenUpdate: boolean;
    };
}
