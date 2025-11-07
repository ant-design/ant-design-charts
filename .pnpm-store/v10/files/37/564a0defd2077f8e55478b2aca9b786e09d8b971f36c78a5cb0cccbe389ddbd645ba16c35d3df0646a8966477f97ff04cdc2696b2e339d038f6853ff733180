/**
 * Runtime scale interface for adaptive filtering operations.
 * Represents the actual scale instance available at runtime.
 */
export interface RuntimeScale {
    getOptions(): {
        domain: unknown[];
        range?: [number, number];
        ratio?: number;
    };
    map(value: unknown): number;
    invert(value: number): unknown;
    getBandWidth?: (value?: unknown) => number;
    getStep?: (value?: unknown) => number;
}
/**
 * Adaptive filter mode configuration.
 */
export type AdaptiveFilterMode = 'filter' | false | null;
/**
 * Mark data structure for adaptive filtering.
 * Contains mark identifier and associated channel data.
 */
export interface MarkDataPair {
    markKey: string;
    channelData: {
        [key: string]: unknown[];
    };
}
/**
 * Scale information for single-axis adaptive filtering.
 */
export interface SingleAxisScaleInfo {
    currentScale: RuntimeScale;
    targetScale: RuntimeScale;
    isSourceDiscrete: boolean;
    isTargetDiscrete: boolean;
    shouldPreserveZeroBaseline: boolean;
}
/**
 * Scale information for multi-axis adaptive filtering.
 */
export interface MultiAxisScaleInfo {
    currentScale: RuntimeScale;
    targetScales: RuntimeScale[];
    isSourceDiscrete: boolean;
    isTargetDiscrete: boolean[];
    shouldPreserveZeroBaseline: boolean[];
    targetScaleKeys: string[];
}
/**
 * Parameters for single-axis adaptive filtering operations.
 */
export interface SingleAxisFilteringParams {
    markDataPairs: MarkDataPair[];
    domain: unknown[];
    scaleInfo: SingleAxisScaleInfo;
    adaptiveMode: AdaptiveFilterMode;
    shouldFilterXAxis?: boolean;
}
/**
 * Parameters for multi-axis adaptive filtering operations.
 */
export interface MultiAxisFilteringParams {
    markDataPairs: MarkDataPair[];
    domain: unknown[];
    scaleInfo: MultiAxisScaleInfo;
    markToScaleMap: Map<string, string>;
    adaptiveMode: AdaptiveFilterMode;
    isViewSlider: boolean;
    shouldFilterXAxis?: boolean;
}
/**
 * Extracts scale information for single-axis adaptive filtering.
 *
 * @param shouldFilterXAxis - Whether to adapt X-axis (true) or Y-axis (false)
 * @param scaleX - X-axis scale instance
 * @param scaleY - Y-axis scale instance
 * @returns Scale information required for single-axis filtering
 */
export declare function extractSingleAxisScaleInfo(shouldFilterXAxis: boolean, scaleX: RuntimeScale, scaleY: RuntimeScale): SingleAxisScaleInfo;
/**
 * Extracts scale information for multi-axis adaptive filtering.
 * Handles scenarios where multiple independent scales exist (x1, x2, y1, y2, etc.).
 *
 * @param shouldFilterXAxis - Whether to adapt X-axis (true) or Y-axis (false)
 * @param scale - Record of all available scale instances
 * @param scaleX - Primary X-axis scale instance
 * @param scaleY - Primary Y-axis scale instance
 * @param channelDomain - Channel domain configuration
 * @returns Scale information required for multi-axis filtering
 */
export declare function extractMultiAxisScaleInfo(shouldFilterXAxis: boolean, scale: Record<string, RuntimeScale>, scaleX: RuntimeScale, scaleY: RuntimeScale, channelDomain: Record<string, unknown[]>): MultiAxisScaleInfo;
/**
 * Filters mark data based on domain constraints with bidirectional support.
 * Supports both discrete and continuous scales with proper domain calculation.
 *
 * @param markDataPairs - Array of mark data with channel information
 * @param domain - Domain values for filtering
 * @param isSourceDiscrete - Whether the source scale is discrete
 * @param isTargetDiscrete - Whether the target scale is discrete
 * @param shouldPreserveZeroBaseline - Whether to preserve zero baseline for continuous scales
 * @param adaptiveMode - Adaptive filtering mode configuration
 * @param shouldFilterXAxis - Whether to adapt X-axis (true) or Y-axis (false)
 * @returns Filtered domain array
 */
export declare function filterMarkDataByDomain(markDataPairs: MarkDataPair[], domain: unknown[], isSourceDiscrete: boolean, isTargetDiscrete: boolean, shouldPreserveZeroBaseline: boolean, adaptiveMode?: AdaptiveFilterMode, shouldFilterXAxis?: boolean): unknown[];
/**
 * Processes adaptive filtering for single-axis scenarios.
 *
 * @param params - Single-axis filtering parameters
 * @returns Filtered domain array
 */
export declare function processSingleAxisFiltering({ markDataPairs, domain, scaleInfo, adaptiveMode, shouldFilterXAxis, }: SingleAxisFilteringParams): unknown[];
/**
 * Processes multi-axis filtering for view-level sliders.
 * Handles scenarios with independent scales across multiple marks.
 *
 * @param params - Multi-axis filtering parameters
 * @returns Map of scale keys to filtered domain arrays
 */
export declare function processMultiAxisViewFiltering({ markDataPairs, domain, scaleInfo, markToScaleMap, adaptiveMode, shouldFilterXAxis, }: MultiAxisFilteringParams): Map<string, unknown[]>;
/**
 * Processes multi-axis filtering for mark-level sliders.
 * Uses all marks that share the same target scale key instead of just the target mark.
 *
 * @param markDataPairs - Array of mark data pairs
 * @param domain - Domain values for filtering
 * @param scaleInfo - Single-axis scale information
 * @param targetMarkKey - Key of the target mark to filter
 * @param targetScaleKey - Key of the target scale to update
 * @param adaptiveMode - Adaptive filtering mode
 * @param shouldFilterXAxis - Whether to adapt X-axis (true) or Y-axis (false)
 * @param markToScaleMap - Map from mark keys to scale keys to identify shared axes
 * @returns Map of scale keys to filtered domain arrays
 */
export declare function processMultiAxisMarkFiltering(markDataPairs: MarkDataPair[], domain: unknown[], scaleInfo: SingleAxisScaleInfo, targetMarkKey: string, targetScaleKey: string, adaptiveMode: AdaptiveFilterMode, shouldFilterXAxis?: boolean, markToScaleMap?: Map<string, string>): Map<string, unknown[]>;
/**
 * Updates channel domains with filtered results.
 * Supports both single-axis and multi-axis scenarios.
 *
 * @param channelDomain - Current channel domain configuration
 * @param filteredDomain - Filtered domain values (array for single-axis, Map for multi-axis)
 * @param shouldFilterXAxis - Whether X-axis is being filtered
 * @param isMultiAxis - Whether this is a multi-axis scenario
 */
export declare function updateChannelDomains(channelDomain: Record<string, unknown[]>, filteredDomain: unknown[] | Map<string, unknown[]>, shouldFilterXAxis: boolean, isMultiAxis: boolean): void;
