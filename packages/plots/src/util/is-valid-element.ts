export const isValidElement = (jsxCode: string): boolean => {
  const jsxRegex = /react(.*?).createElement/gi;

  return jsxRegex.test(jsxCode);
};
