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

  const matches = jsxCode.match(createElementPattern);
  if (!matches) {
    return false;
  }

  return matches.some((match) => {
    const elementMatch = match.match(/\.createElement\(\s*(['"`])([^'"`]+)\1/);
    return elementMatch && !GElements.has(elementMatch[2].toLowerCase());
  });
};
