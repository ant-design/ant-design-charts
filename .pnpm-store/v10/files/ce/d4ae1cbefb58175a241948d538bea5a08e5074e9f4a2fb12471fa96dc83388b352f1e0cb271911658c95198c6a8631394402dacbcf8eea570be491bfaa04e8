import { DisplayObject } from '@antv/g';
/**
 * highlight a group of elements.
 */
export declare function elementHighlight(root: DisplayObject, { elements: elementsof, // given the root of chart returns elements to be manipulated
datum, // given each element returns the datum of it
groupKey: eleGroupKey, // group elements by specified key
regionGroupKey, // how to group elements when hover region
link, // draw link or not
background, // draw background or not
delay, // delay to unhighlighted element
scale, coordinate, emitter, state, region, regionEleFilter, }: Record<string, any>): () => void;
export declare function ElementHighlight({ delay, createGroup, createRegionGroup, background, link, ...rest }: {
    [x: string]: any;
    delay: any;
    createGroup: any;
    createRegionGroup: any;
    background?: boolean;
    link?: boolean;
}): (context: any, _: any, emitter: any) => () => void;
export declare namespace ElementHighlight {
    var props: {
        reapplyWhenUpdate: boolean;
    };
}
