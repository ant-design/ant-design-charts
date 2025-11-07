import type { BaseStyleProps } from '..';
import type { DisplayObject } from '../display-objects';
import type { CSSProperty } from './CSSProperty';
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type
 */
export declare enum PropertySyntax {
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#coordinate
     */
    COORDINATE = "<coordinate>",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#color
     */
    COLOR = "<color>",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#paint
     */
    PAINT = "<paint>",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#number
     */
    NUMBER = "<number>",
    /**
     * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle
     */
    ANGLE = "<angle>",
    /**
     * <number> with range 0..1
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#opacity_value
     */
    OPACITY_VALUE = "<opacity-value>",
    /**
     * <number> with range 0..Infinity
     */
    SHADOW_BLUR = "<shadow-blur>",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#length
     */
    LENGTH = "<length>",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#percentage
     */
    PERCENTAGE = "<percentage>",
    LENGTH_PERCENTAGE = "<length> | <percentage>",
    LENGTH_PERCENTAGE_12 = "[<length> | <percentage>]{1,2}",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin#formal_syntax
     */
    LENGTH_PERCENTAGE_14 = "[<length> | <percentage>]{1,4}",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#list-of-ts
     */
    LIST_OF_POINTS = "<list-of-points>",
    PATH = "<path>",
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter#formal_syntax
     */
    FILTER = "<filter>",
    Z_INDEX = "<z-index>",
    OFFSET_DISTANCE = "<offset-distance>",
    DEFINED_PATH = "<defined-path>",
    MARKER = "<marker>",
    TRANSFORM = "<transform>",
    TRANSFORM_ORIGIN = "<transform-origin>",
    TEXT = "<text>",
    TEXT_TRANSFORM = "<text-transform>"
}
export interface PropertyMetadata {
    n: string;
    /**
     * The interpolable flag indicates whether a property can be animated smoothly.
     * Default to `false`.
     */
    int?: boolean;
    /**
     * The property will inherit by default if no value is specified.
     * Default to `false`.
     */
    inh?: boolean;
    /**
     * This property affects only one field on ComputedStyle, and can be set
     * directly during inheritance instead of forcing a recalc.
     */
    ind?: boolean;
    /**
     * This specifies the default value for this field.
     * - for keyword fields, this is the initial keyword
     * - for other fields, this is a string containg the C++ expression that is used to initialise the field.
     */
    d?: string | ((nodeName: string) => string);
    /**
     * The resolved value used for getComputedStyle() depends on layout for this
     * property, which means we may need to update layout to return the correct
     * value from getComputedStyle().
     */
    l?: boolean;
    /**
     * This specifies all valid keyword values for the property.
     */
    k?: string[];
    /**
     * eg. strokeWidth is an alias of lineWidth
     */
    a?: string[];
    /**
     * sort before init attributes according to this priority
     */
    p?: number;
    /**
     * eg. <color> <paint> <number>
     */
    syntax?: string;
}
export interface PropertyParseOptions {
    skipUpdateAttribute: boolean;
    skipParse: boolean;
    forceUpdateGeometry: boolean;
    usedAttributes: string[];
    memoize: boolean;
}
export interface StyleValueRegistry {
    updateSizeAttenuation: (displayObject: DisplayObject, zoom: number) => void;
    registerMetadata: (metadata: PropertyMetadata) => void;
    getPropertySyntax: (syntax: string) => CSSProperty<any, any>;
    processProperties: (object: DisplayObject, attributes: BaseStyleProps, options?: Partial<PropertyParseOptions>) => void;
}
export interface LayoutRegistry {
    registerLayout: (name: string, ctor: any) => void;
    hasLayout: (name: string) => boolean;
    getLayout: (name: string) => any;
}
//# sourceMappingURL=interfaces.d.ts.map