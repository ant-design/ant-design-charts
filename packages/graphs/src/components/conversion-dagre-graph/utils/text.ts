import type { OriginNode } from '../../types';

// 获取文本的字节长度
export const getNodeStrSize = (node: OriginNode): number => {
  const { measure: { formattedValue = '', value = '', formattedUnit = '' } = {} } = node || {};
  const nodeStr =
    ((formattedValue !== undefined && formattedValue !== null
      ? `${formattedValue}${formattedUnit}`
      : value) as string) || '';
  return nodeStr.replace(/[^\x00-\xff]/g, '00').length;
};
// 获取文本最长的节点
export const getMaxSizeNode = (nodes: OriginNode[] = []): OriginNode =>
  nodes.reduce((prevNode, node) => {
    const prevSize = getNodeStrSize(prevNode);
    const nodeSize = getNodeStrSize(node);
    return prevSize > nodeSize ? prevNode : node;
  });

// 获取字符串实际渲染的宽度
export const getWordsWidth = (text: string = '', font: string): number => {
  if (text === '') {
    return 0;
  }
  let canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const { width } = context.measureText(text);
  canvas = null;
  return width;
};

// 获取最大节点宽度
export const getNodeMaxSize = (nodes: OriginNode[] = []): number => {
  if (!nodes?.length) {
    return 150;
  }
  const maxSizeNode = getMaxSizeNode(nodes);
  const { measure: { formattedValue = '', value = '', formattedUnit = '' } = {} } = maxSizeNode;
  // 是否展示formatValue
  const isShowFormatValue = formattedValue !== undefined && formattedValue !== null;
  const displayValue = isShowFormatValue ? formattedValue : value;
  const displayValueWidth = getWordsWidth(`${displayValue}`, '600 20px Roboto-Medium');
  // 单位不为空时才计算单位宽度 unit的paddingLeft 4
  const unitWidth =
    isShowFormatValue && formattedUnit
      ? getWordsWidth(`${formattedUnit}`, '600 20px PingFangSC') + 4
      : 0;
  // 节点大小 value + unit + 左右padding
  const nodeSize = displayValueWidth + unitWidth + 24;
  // 节点最小宽度 150
  return Math.max(nodeSize, 150);
};
