import React, { CSSProperties } from 'react';
export interface HSLColor {
    a?: number | undefined;
    h: number;
    l: number;
    s: number;
}
export interface RGBColor {
    a?: number | undefined;
    b: number;
    g: number;
    r: number;
}
interface Classes<T> {
    default: Partial<T>;
    [scope: string]: Partial<T>;
}
export type Color = string | HSLColor | RGBColor;
export interface ColorResult {
    hex: string;
    hsl: HSLColor;
    rgb: RGBColor;
    source?: string;
}
export type ColorChangeHandler = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => void;
export interface SketchPickerStylesProps {
    picker: CSSProperties;
    saturation: CSSProperties;
    Saturation: CSSProperties;
    controls: CSSProperties;
    sliders: CSSProperties;
    color: CSSProperties;
    activeColor: CSSProperties;
    hue: CSSProperties;
    Hue: CSSProperties;
    alpha: CSSProperties;
    Alpha: CSSProperties;
}
export interface ColorPickerProps {
    color?: Color | undefined;
    className?: string | undefined;
    styles?: Partial<Classes<any>> | undefined;
    onChange?: ColorChangeHandler;
    onChangeComplete?: ColorChangeHandler | undefined;
}
export type PresetColor = {
    color: string;
    title: string;
} | string;
export interface SketchPickerProps extends ColorPickerProps {
    disableAlpha?: boolean | undefined;
    presetColors?: PresetColor[] | undefined;
    width?: string | undefined;
    styles?: Partial<Classes<SketchPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}
export declare const Sketch: React.FC<SketchPickerProps & {
    hex?: string;
    hsl?: HSLColor;
    rgb?: RGBColor;
    hsv?: RGBColor;
    renderers?: any;
    width?: any;
}>;
declare const SketchPicker: React.FC<SketchPickerProps>;
export { SketchPicker };
