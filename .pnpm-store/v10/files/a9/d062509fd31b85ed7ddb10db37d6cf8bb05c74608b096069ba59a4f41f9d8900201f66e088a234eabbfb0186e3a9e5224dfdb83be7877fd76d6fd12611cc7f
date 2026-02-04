import { CanvasLike, GlobalRuntime } from '..';
import type { ParsedTextStyleProps } from '../display-objects';
import { Rectangle } from '../shapes';
export interface TextMetrics {
    font: string;
    width: number;
    height: number;
    lines: string[];
    lineWidths: number[];
    lineHeight: number;
    maxLineWidth: number;
    fontProperties: IFontMetrics;
    lineMetrics: Rectangle[];
}
interface IFontMetrics {
    ascent: number;
    descent: number;
    fontSize: number;
}
/**
 * Borrow from pixi/packages/text/src/TextMetrics.ts
 */
export declare class TextService {
    private runtime;
    constructor(runtime: GlobalRuntime);
    /**
     * font metrics cache
     */
    private fontMetricsCache;
    /**
     * A global cache for character widths, keyed by font string.
     * e.g. { '16px Arial': { 'a': 8, 'b': 9 } }
     */
    private charWidthCache;
    /**
     * Calculates the ascent, descent and fontSize of a given font-style.
     */
    measureFont(font: string, offscreenCanvas: CanvasLike): IFontMetrics;
    measureText(text: string, parsedStyle: ParsedTextStyleProps, offscreenCanvas: CanvasLike): TextMetrics;
    private wordWrap;
    private isBreakingSpace;
    private isNewline;
    private trimToBreakable;
    private shouldBreakByKinsokuShorui;
    private trimByKinsokuShorui;
    private canBreakInLastChar;
    private sumTextWidthByCache;
    private findBreakableIndex;
    private getFromCache;
    clearCache(): void;
}
export {};
//# sourceMappingURL=TextService.d.ts.map