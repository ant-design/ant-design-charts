import { CSSGlobalKeywords, CSSRGB } from '../css';
import type { DisplayObjectConfig } from '../dom/interfaces';
import type { TextMetrics } from '../services';
import type { BaseStyleProps, ParsedBaseStyleProps, TextDecorationStyle, TextOverflow, TextDecorationLine } from '../types';
import { DisplayObject } from './DisplayObject';
import type { Path } from './Path';
export interface TextStyleProps extends BaseStyleProps {
    x?: number | string;
    y?: number | string;
    z?: number | string;
    /**
     * Always face the camera.
     */
    isBillboard?: boolean;
    /**
     * The rotation of the billboard in radians.
     */
    billboardRotation?: number;
    /**
     * Whether the size of the sprite is attenuated by the camera depth. (Perspective camera only.)
     */
    isSizeAttenuation?: boolean;
    text: number | string;
    /**
     * The text-align property sets the horizontal alignment of the inline-level content.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textAlign?: CSSGlobalKeywords | 'start' | 'center' | 'middle' | 'end' | 'left' | 'right';
    /**
     * It specifies the current text baseline used when drawing text.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline
     */
    textBaseline?: CSSGlobalKeywords | 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
    /**
     * The text-overflow property sets how hidden overflow content is signaled to users.
     * It can be clipped, display an ellipsis ('…'), or display a custom string.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow#values
     */
    textOverflow?: TextOverflow;
    /**
     * Borrow from CanvasKit ParagraphStyle.
     */
    maxLines?: number;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath
     */
    textPath?: Path;
    /**
     * The side attribute determines the side of a path the text is placed on (relative to the path direction).
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/side
     */
    textPathSide?: 'left' | 'right';
    /**
     * The startOffset attribute defines an offset from the start of the path for the initial current text position along the path after converting the path to the \<textPath\> element's coordinate system.
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/startOffset
     */
    textPathStartOffset?: number | string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line
     */
    textDecorationLine?: TextDecorationLine;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color
     */
    textDecorationColor?: string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
     */
    textDecorationStyle?: TextDecorationStyle;
    /**
     * The font-style property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
     */
    fontStyle?: CSSGlobalKeywords | 'normal' | 'italic' | 'oblique';
    /**
     * The font-size property sets the size of the font.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    fontSize?: number | string;
    /**
     * The font-family property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontFamily?: string;
    /**
     * The font-weight property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontWeight?: CSSGlobalKeywords | 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    /**
     * The font-variant shorthand property allows you to set all the font variants for a font.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
     */
    fontVariant?: CSSGlobalKeywords | 'normal' | 'small-caps' | string;
    /**
     * The line-height property sets the height of a line box.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    lineHeight?: number | string;
    /**
     * It specifies the spacing between letters when drawing text.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/letterSpacing
     */
    letterSpacing?: number | string;
    /**
     * The white-space property sets how white space inside an element is handled.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
     */
    /**
     * There is no "CSS leading" property
     * @see https://css-tricks.com/how-to-tame-line-height-in-css/
     */
    leading?: number;
    /**
     * The overflow-wrap CSS property applies to inline elements,
     * setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     *
     * The overflow-wrap property acts in the same way as the non-standard property word-wrap.
     * The word-wrap property is now treated by browsers as an alias of the standard property.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap
     */
    wordWrap?: boolean;
    /**
     * Max width of overflowing box.
     */
    wordWrapWidth?: number;
    /**
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx
     */
    dx?: number | string;
    /**
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy
     */
    dy?: number | string;
}
export interface ParsedTextStyleProps extends ParsedBaseStyleProps {
    x: number;
    y: number;
    z?: number;
    isBillboard?: boolean;
    billboardRotation?: number;
    isSizeAttenuation?: boolean;
    text: string;
    textAlign?: 'start' | 'center' | 'middle' | 'end' | 'left' | 'right';
    textBaseline?: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    fontVariant?: 'normal' | 'small-caps' | string;
    lineHeight?: number;
    letterSpacing?: number;
    leading?: number;
    wordWrap?: boolean;
    wordWrapWidth?: number;
    maxLines?: number;
    textOverflow?: TextOverflow;
    isOverflowing?: boolean;
    textPath?: Path;
    textDecorationLine?: TextDecorationLine;
    textDecorationColor?: CSSRGB;
    textDecorationStyle?: TextDecorationStyle | string;
    textPathSide?: 'left' | 'right';
    textPathStartOffset?: number;
    metrics?: TextMetrics;
    dx?: number;
    dy?: number;
}
/**
 * <text> @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTextElement
 */
export declare class Text extends DisplayObject<TextStyleProps, ParsedTextStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTextContentElement#constants
     */
    constructor({ style, ...rest }?: DisplayObjectConfig<TextStyleProps>);
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGTextContentElement
     */
    getComputedTextLength(): number;
    getLineBoundingRects(): import("..").Rectangle[];
    isOverflowing(): boolean;
}
//# sourceMappingURL=Text.d.ts.map