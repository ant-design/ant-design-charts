import type { RegisteredCache, SerializedStyles } from '@emotion/utils';
import * as CSS from 'csstype';
export type { RegisteredCache, SerializedStyles };
export type CSSProperties = CSS.PropertiesFallback<number | string>;
export type CSSPropertiesWithMultiValues = {
    [K in keyof CSSProperties]: CSSProperties[K] | ReadonlyArray<Extract<CSSProperties[K], string>>;
};
export type CSSPseudos = {
    [K in CSS.Pseudos]?: CSSObject;
};
export interface ArrayCSSInterpolation extends ReadonlyArray<CSSInterpolation> {
}
export type InterpolationPrimitive = null | undefined | boolean | number | string | ComponentSelector | Keyframes | SerializedStyles | CSSObject;
export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;
export interface CSSOthersObject {
    [propertiesName: string]: CSSInterpolation;
}
export interface CSSObject extends CSSPropertiesWithMultiValues, CSSPseudos, CSSOthersObject {
}
export interface ComponentSelector {
    __emotion_styles: any;
}
export type Keyframes = {
    name: string;
    styles: string;
    anim: number;
    toString: () => string;
} & string;
export interface ArrayInterpolation<Props = unknown> extends ReadonlyArray<Interpolation<Props>> {
}
export interface FunctionInterpolation<Props = unknown> {
    (props: Props): Interpolation<Props>;
}
export type Interpolation<Props = unknown> = InterpolationPrimitive | ArrayInterpolation<Props> | FunctionInterpolation<Props>;
export declare function serializeStyles<Props>(args: Array<TemplateStringsArray | Interpolation<Props>>, registered?: RegisteredCache, mergedProps?: Props): SerializedStyles;
