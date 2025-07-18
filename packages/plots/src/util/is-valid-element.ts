export const isValidElement = (jsxCode: string): boolean => {
  const basicReactPatterns = [/\breact\b/i, /\.jsx$/, /children:\s*\[/];
  const createElementPattern = /(\w+)?\.createElement\(\s*(['"`])([^'"`]+)\2/g;

  // G 元素集合
  const GElements = new Set([
    'g',
    'circle',
    'ellipse',
    'image',
    'rect',
    'line',
    'polyline',
    'polygon',
    'text',
    'path',
    'html',
    'mesh',
  ]);

  if (basicReactPatterns.some((pattern) => pattern.test(jsxCode))) {
    return true;
  }

  let match;
  let hasValidReactElement = false;

  while ((match = createElementPattern.exec(jsxCode)) !== null) {
    const elementName = match[3];

    // 如果不是 G 元素，则认为是有效的 React 元素
    if (!GElements.has(elementName.toLowerCase())) {
      hasValidReactElement = true;
      break;
    }
  }

  return hasValidReactElement;
};
