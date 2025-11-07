import { runtime } from '@antv/g';
import { memoize } from '@antv/util';
import type { DisplayObject, Text } from '../shapes';

let ctx: CanvasRenderingContext2D;
let mockMeasureTextWidth: ((text: string, fontSize: number) => number) | undefined;

export function setMockMeasureTextWidth(mock: (text: string, fontSize: number) => number) {
  mockMeasureTextWidth = mock;
}

/**
 * 计算文本在画布中的宽度
 */
export const measureTextWidth = memoize(
  (text: string, font: any): number => {
    const { fontSize, fontFamily, fontWeight, fontStyle, fontVariant } = font;

    if (mockMeasureTextWidth) {
      return mockMeasureTextWidth(text, fontSize);
    }

    if (!ctx) {
      // @ts-ignore
      ctx = runtime.offscreenCanvasCreator.getOrCreateContext(undefined) as CanvasRenderingContext2D;
    }
    ctx!.font = [fontStyle, fontVariant, fontWeight, `${fontSize}px`, fontFamily].join(' ');
    return ctx!.measureText(text).width;
  },
  (text: any, font?: any) => [text, Object.values(font || getFont(text as Text)).join()].join(''),
  4096
);

export const getFont = (textShape: Text) => {
  const fontFamily = textShape.style.fontFamily || 'sans-serif';
  const fontWeight = textShape.style.fontWeight || 'normal';
  const fontStyle = textShape.style.fontStyle || 'normal';
  const fontVariant = textShape.style.fontVariant;
  let fontSize = textShape.style.fontSize as any;
  fontSize = typeof fontSize === 'object' ? fontSize.value : fontSize;
  return { fontSize: fontSize as number, fontFamily, fontWeight, fontStyle, fontVariant };
};

export function textOf(node: DisplayObject): Text | null {
  if (node.nodeName === 'text') {
    return node as Text;
  }
  if (node.nodeName === 'g' && node.children.length === 1 && node.children[0].nodeName === 'text') {
    return node.children[0] as Text;
  }
  return null;
}

export function applyToText(node: DisplayObject, style: Record<string, any>) {
  const text = textOf(node);
  if (text!) text.attr(style);
}
