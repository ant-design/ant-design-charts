// src/service/requireHook.ts
var import_path = require("path");
var hookPropertyMap = /* @__PURE__ */ new Map([
  ["umi", (0, import_path.join)(__dirname, "../index.js")],
  ["umi/plugin-utils", (0, import_path.join)(__dirname, "../../plugin-utils.js")]
]);
var mod = require("module");
var resolveFilename = mod._resolveFilename;
mod._resolveFilename = function(request, parent, isMain, options) {
  const hookResolved = hookPropertyMap.get(request);
  if (hookResolved)
    request = hookResolved;
  return resolveFilename.call(mod, request, parent, isMain, options);
};
