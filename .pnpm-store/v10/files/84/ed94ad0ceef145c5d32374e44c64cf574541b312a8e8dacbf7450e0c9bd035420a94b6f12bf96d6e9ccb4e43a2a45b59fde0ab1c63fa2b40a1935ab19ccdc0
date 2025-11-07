// src/requireHook.ts
var hookPropertyMap = /* @__PURE__ */ new Map([
  ["less", "@umijs/bundler-utils/compiled/less"]
]);
var mod = require("module");
var resolveFilename = mod._resolveFilename;
mod._resolveFilename = function(request, parent, isMain, options) {
  const hookResolved = hookPropertyMap.get(request);
  if (hookResolved)
    request = hookResolved;
  return resolveFilename.call(mod, request, parent, isMain, options);
};
