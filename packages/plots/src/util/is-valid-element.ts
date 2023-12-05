export const isValidElement = (jsxCode: string): boolean => {
  const jsxRegex = /react|\.jsx|children:\[\(/i;

  return jsxRegex.test(jsxCode);
};
