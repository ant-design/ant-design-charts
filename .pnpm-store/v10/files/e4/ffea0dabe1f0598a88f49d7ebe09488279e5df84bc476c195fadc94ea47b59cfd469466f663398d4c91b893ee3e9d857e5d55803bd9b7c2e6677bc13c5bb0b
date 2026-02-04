import type { DisplayObject, Text } from '../shapes';
export declare function setMockMeasureTextWidth(mock: (text: string, fontSize: number) => number): void;
/**
 * 计算文本在画布中的宽度
 */
export declare const measureTextWidth: (text: string, font: any) => number;
export declare const getFont: (textShape: Text) => {
    fontSize: number;
    fontFamily: string;
    fontWeight: number | "unset" | "initial" | "inherit" | "normal" | "bold" | "bolder" | "lighter";
    fontStyle: "unset" | "initial" | "inherit" | "normal" | "italic" | "oblique";
    fontVariant: string | undefined;
};
export declare function textOf(node: DisplayObject): Text | null;
export declare function applyToText(node: DisplayObject, style: Record<string, any>): void;
