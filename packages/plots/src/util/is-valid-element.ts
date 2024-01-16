export const isValidElement = (jsxCode: string): boolean => {
  const jsxRegex = /react|\.jsx|children:\[\(|return\s+\S+.createElement\([^\)]*,/i;

  return jsxRegex.test(jsxCode);
};
