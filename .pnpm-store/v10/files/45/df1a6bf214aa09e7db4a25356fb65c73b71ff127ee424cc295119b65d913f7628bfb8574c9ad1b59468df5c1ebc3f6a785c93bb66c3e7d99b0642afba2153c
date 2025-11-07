export var matchBrowserPrefers = function matchBrowserPrefers(mode) {
  if (typeof window !== 'undefined') {
    return matchMedia && matchMedia("(prefers-color-scheme: ".concat(mode, ")"));
  }
  // 针对 ssr 做特处
  return {
    matches: false
  };
};