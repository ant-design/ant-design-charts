import { DataComponent as DC } from '../runtime';
type Callable<T> = T | ((datum: any, i: number) => T);
/**
 * See the document here: https://github.com/jasondavies/d3-cloud.
 */
export type WordCloudOptions = {
    /**
     * Internally, the layout uses setInterval to avoid locking up the browser’s event loop.
     * If specified, time is the maximum amount of time that can be spent during the current timestep.
     * If not specified, returns the current maximum time interval, which defaults to Infinity.
     */
    timeInterval: number;
    /**
     * If specified, sets the words array. If not specified, returns the current words array, which defaults to [].
     */
    words: any[];
    /**
     * If specified, sets the rectangular [width, height] of the layout.
     * If not specified, returns the current size, which defaults to [1, 1].
     */
    size: [number, number];
    /**
     * If specified, sets the font accessor function, which indicates the font face for each word.
     * If not specified, returns the current font accessor function, which defaults to "serif".
     * A constant may be specified instead of a function.
     */
    font: Callable<CSSStyleDeclaration['fontFamily']>;
    /**
     * TODO: Cname of font.
     */
    fontFamily: Callable<CSSStyleDeclaration['fontFamily']>;
    /**
     * If specified, sets the fontStyle accessor function, which indicates the font style for each word.
     * If not specified, returns the current fontStyle accessor function, which defaults to "normal".
     * A constant may be specified instead of a function.
     */
    fontStyle: Callable<CSSStyleDeclaration['fontFamily']>;
    /**
     * If specified, sets the fontWeight accessor function, which indicates the font weight for each word.
     * If not specified, returns the current fontWeight accessor function, which defaults to "normal".
     * A constant may be specified instead of a function.
     */
    fontWeight: Callable<CSSStyleDeclaration['fontFamily']>;
    /**
     * If specified, sets the fontSize accessor function, which indicates the numerical font size for each word.
     * If not specified, returns the current fontSize accessor function, which defaults to:
     *
     * > function(d) { return Math.sqrt(d.value); }
     *
     * A constant may be specified instead of a function.
     *
     * If the fontSize is an array, it will be normalized to the range of [min, max] of the data value.
     * If the fontSize is a function, it will be called with the data value.
     * If the fontSize is a number, it will be used as the constant value.
     */
    fontSize: number | [number, number] | ((d: any) => number);
    /**
     * If specified, sets the rotate accessor function, which indicates the rotation angle (in degrees) for each word.
     * If not specified, returns the current rotate accessor function, which defaults to:
     *
     * function() { return (~~(Math.random() * 6) - 3) * 30; }
     *
     * A constant may be specified instead of a function.
     */
    rotate: Callable<number>;
    /**
     * If specified, sets the text accessor function, which indicates the text for each word.
     * If not specified, returns the current text accessor function, which defaults to:
     *
     * function(d) { return d.text; }
     *
     * A constant may be specified instead of a function.
     */
    text: Callable<string>;
    /**
     * If specified, sets the padding accessor function, which indicates the numerical padding for each word.
     * If not specified, returns the current padding, which defaults to 1.
     */
    padding: Callable<number>;
    /**
     * If specified, sets the internal random number generator, used for selecting the initial position of each word,
     *  and the clockwise/counterclockwise direction of the spiral for each word.
     * This should return a number in the range [0, 1).
     * If not specified, returns the current random number generator, which defaults to Math.random.
     */
    random: () => number;
    /**
     * If specified, sets the spiral used for positioning words.
     */
    spiral: any;
    /**
     * If specified, sets the image mask used for positioning words.
     */
    canvas: HTMLCanvasElement;
};
/**
 * Process the image mask of wordCloud.
 * @param img
 * @returns
 */
export declare function processImageMask(img: HTMLImageElement | string): Promise<HTMLImageElement>;
/**
 * normalize fontSize range to d3-cloud fontSize function.
 * @param fontSize
 * @param range
 * @returns
 */
export declare function normalizeFontSize(fontSize: any, range?: [number, number]): any;
export declare const WordCloud: DC<Partial<WordCloudOptions>>;
export {};
