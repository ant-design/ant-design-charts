export const isValidElement = (jsxCode: string): boolean => {
  const jsxRegex =
    /react|\.jsx|children:\[\(|return\s+[A-Za-z0-9].createElement\((?!['"][g|circle|ellipse|image|rect|line|polyline|polygon|text|path|html|mesh]['"])([^\)])*,/i;

  return jsxRegex.test(jsxCode);
};
