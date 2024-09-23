import { measureTextHeight, measureTextWidth } from '@ant-design/charts-util';
import type { Size } from '@antv/g6';

/**
 * 计算文本尺寸
 * @param text - 文本内容
 * @param offset - 水平和垂直偏移量，默认为 [0, 0]，用于调整文本节点的大小
 * @param font - 字体样式
 * @param minWidth - 最小宽度，默认为 0
 * @param maxWith - 最大宽度，默认为 Infinity；超出部分会被自动换行
 * @returns 文本尺寸（包括宽度和高度）
 */
export function measureTextSize(
  text: string,
  offset = [0, 0],
  font: any = { fontSize: 16, fontFamily: 'PingFang SC' },
  minWidth = 0,
  maxWith = Infinity,
): Size {
  const height = measureTextHeight(text, font);
  const width = measureTextWidth(text, font) + 4;

  const lineNumber = maxWith === Infinity ? 1 : Math.ceil(width / maxWith);
  const [offsetWidth, offsetHeight] = offset;

  return [
    Math.max(minWidth, Math.min(maxWith, width)) + offsetWidth,
    offsetHeight + height + height * 1.5 * (lineNumber - 1),
  ];
}
