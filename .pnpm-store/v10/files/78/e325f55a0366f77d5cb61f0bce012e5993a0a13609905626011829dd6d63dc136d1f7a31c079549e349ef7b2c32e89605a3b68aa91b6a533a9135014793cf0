import { Path } from '@antv/g';
import type { PathArray } from '@antv/util';
export interface SymbolFactor {
    (x: number, y: number, r: number): PathArray;
    style?: string[];
}
export declare const Symbols: Map<string, SymbolFactor>;
export declare function useMarker(type: string, { d, fill, lineWidth, path, stroke, color, ...style }: Record<string, any>): (x: number, y: number, r: number) => Path;
export declare function registerSymbol(type: string, marker: SymbolFactor): void;
export declare function unregisterSymbol(type: string): void;
