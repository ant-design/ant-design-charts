import { DisplayObject } from '@antv/g';
/**
 * Active a group of elements.
 */
export declare function elementSelect(root: DisplayObject, { elements: elementsof, // given the root of chart returns elements to be manipulated
datum, // given each element returns the datum of it
groupKey, // group elements by specified key
regionGroupKey, // how to group elements when click region
link, // draw link or not
single, // single select or not
multipleSelectHotkey, // hotkey for multi-select mode
coordinate, background, scale, emitter, state, region, regionEleFilter, }: Record<string, any>): () => void;
export declare function ElementSelect({ createGroup, createRegionGroup, background, link, ...rest }: {
    [x: string]: any;
    createGroup: any;
    createRegionGroup: any;
    background?: boolean;
    link?: boolean;
}): (context: any, _: any, emitter: any) => () => void;
export declare namespace ElementSelect {
    var props: {
        reapplyWhenUpdate: boolean;
    };
}
