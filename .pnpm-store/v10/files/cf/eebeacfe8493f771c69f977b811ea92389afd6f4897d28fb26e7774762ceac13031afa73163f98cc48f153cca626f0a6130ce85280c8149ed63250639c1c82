import type { CompositeMarkComponent as CC } from "./types";
import type { SunburstMark } from "../spec/mark";
export type SunburstData = {
    name: string;
    children: SunburstData[];
    [key: string]: any;
}[];
export type SunburstOptions = Omit<SunburstMark, "type">;
export declare const SUNBURST_TYPE = "sunburst";
export declare const SUNBURST_TYPE_FIELD = "markType";
export declare const SUNBURST_Y_FIELD = "value";
export declare const SUNBURST_PATH_FIELD = "path";
export declare const SUNBURST_ANCESTOR_FIELD = "ancestor-node";
/**
 * Sunburst TransformData
 * @param options
 */
export declare function transformData(options: Pick<SunburstOptions, "data" | "encode">): any[];
export declare const Sunburst: CC<SunburstOptions>;
