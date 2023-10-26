export const isValidElement = (jsxCode: string): boolean => {
  const jsxRegex = /react/i;

  return jsxRegex.test(jsxCode);
};
