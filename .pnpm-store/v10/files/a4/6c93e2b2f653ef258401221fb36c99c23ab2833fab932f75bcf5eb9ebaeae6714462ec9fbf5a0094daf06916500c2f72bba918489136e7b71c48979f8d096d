import { Band } from '@antv/scale';
import { Primitive } from '@antv/vendor/d3-array';
import { Vector2 } from '@antv/coord';
import { Scale } from '../runtime/types/component';
import { Channel } from '../runtime';
export type ChannelOptions = {
    shapes?: (string | {
        (...args: any[]): any;
        props?: Record<string, any>;
    })[];
};
export declare function baseChannels(options?: ChannelOptions): Channel[];
export declare function baseGeometryChannels(options?: ChannelOptions): Channel[];
export declare function tooltip3d(): ({
    type: import("../runtime").TransformComponent<import("../transform").MaybeTitleOptions>;
    channel: string;
} | {
    type: import("../runtime").TransformComponent<import("../transform").MaybeTooltipOptions>;
    channel: string[];
})[];
export declare function tooltip2d(): ({
    type: import("../runtime").TransformComponent<import("../transform").MaybeTitleOptions>;
    channel: string;
} | {
    type: import("../runtime").TransformComponent<import("../transform").MaybeTooltipOptions>;
    channel: string[];
})[];
export declare function tooltip1d(): ({
    type: import("../runtime").TransformComponent<import("../transform").MaybeTitleOptions>;
    channel: string;
} | {
    type: import("../runtime").TransformComponent<import("../transform").MaybeTooltipOptions>;
    channel: string[];
})[];
export declare function tooltipXd(): ({
    type: import("../runtime").TransformComponent<import("../transform").MaybeTitleOptions>;
    channel: string;
} | {
    type: import("../runtime").TransformComponent<import("../transform").MaybeTooltipOptions>;
    channel: string[];
})[];
export declare function baseAnnotationChannels(options?: ChannelOptions): Channel[];
export declare function basePreInference(): {
    type: import("../runtime").TransformComponent<import("../transform").MaybeKeyOptions>;
}[];
export declare function basePostInference(): any[];
export declare function bandWidth(scale: Band, x: any): number;
export declare function createBandOffset(scale: Record<string, Scale>, value: Record<string, Primitive[]>, options?: Record<string, any>): (d: [number, number], i?: number) => [number, number];
export declare function p(d: any): number;
export declare function visualMark(index: number[], scale: any, value: any, coordinate: any): (number[] | Vector2[][])[];
type Encode = 'string' | ((d: any) => any);
export declare function field(encode: Encode): (d: any) => any;
export declare function valueof(data: Record<string, any>[], encode: Encode): any[];
export declare function initializeData(data: {
    nodes?: any[];
    links: any[];
}, encode: Record<string, Encode>): {
    links: {
        target: string;
        source: string;
        value: any;
    }[];
    nodes: {
        key: string;
    }[];
};
export {};
