import { CSSUnitValue } from './cssom';
import type { PropertySyntax } from './interfaces';
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty#parameters
 */
export interface PropertyDefinition {
    name: string;
    /**
     * representing the expected syntax of the defined property. Defaults to "*".
     */
    syntax: PropertySyntax;
    /**
     * A boolean value defining whether the defined property should be inherited (true), or not (false). Defaults to false.
     */
    inherits?: boolean;
    interpolable?: boolean;
    initialValue?: string;
}
/**
 * holds useful CSS-related methods.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS
 *
 * * CSS Typed OM @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/factory_functions
 * * register property @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty
 * * CSS Layout API
 */
export declare const CSS: {
    /**
     * <number>
     * @see https://drafts.csswg.org/css-values-4/#number-value
     */
    number: (n: number) => CSSUnitValue;
    /**
     * <percentage>
     * @see https://drafts.csswg.org/css-values-4/#percentage-value
     */
    percent: (n: number) => CSSUnitValue;
    /**
     * <length>
     */
    px: (n: number) => CSSUnitValue;
    /**
     * <length>
     */
    em: (n: number) => CSSUnitValue;
    rem: (n: number) => CSSUnitValue;
    /**
     * <angle>
     */
    deg: (n: number) => CSSUnitValue;
    /**
     * <angle>
     */
    grad: (n: number) => CSSUnitValue;
    /**
     * <angle>
     */
    rad: (n: number) => CSSUnitValue;
    /**
     * <angle>
     */
    turn: (n: number) => CSSUnitValue;
    /**
     * <time>
     */
    s: (n: number) => CSSUnitValue;
    /**
     * <time>
     */
    ms: (n: number) => CSSUnitValue;
    /**
     * CSS Properties & Values API
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API
     * @see https://drafts.css-houdini.org/css-properties-values-api/#registering-custom-properties
     * @see https://developer.mozilla.org/en-US/docs/Web/API/CSS/RegisterProperty
     */
    registerProperty: (definition: PropertyDefinition) => void;
    /**
     * CSS Layout API
     * register layout
     *
     * @see https://github.com/w3c/css-houdini-drafts/blob/main/css-layout-api/EXPLAINER.md
     * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini#css_layout_api
     */
    registerLayout: (name: string, clazz: any) => void;
};
//# sourceMappingURL=CSS.d.ts.map