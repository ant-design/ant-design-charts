var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/overrides/overrides.ts
var overrides_exports = {};
__export(overrides_exports, {
  default: () => overrides_default,
  getOverridesCSS: () => getOverridesCSS
});
module.exports = __toCommonJS(overrides_exports);
var import_fs = require("fs");
var import_path = require("path");
var import_watch = require("../../commands/dev/watch");
var import_compileLess = require("./compileLess");
var import_transform = require("./transform");
function getOverridesCSS(absSrcPath) {
  return (0, import_watch.expandCSSPaths)((0, import_path.join)(absSrcPath, "overrides")).find(import_fs.existsSync);
}
var overrides_default = (api) => {
  let cachedContent = null;
  api.onGenerateFiles(async () => {
    var _a;
    if (api.appData.overridesCSS.length) {
      const filePath = api.appData.overridesCSS[0];
      let content = (0, import_fs.readFileSync)(filePath, "utf-8");
      if (content === cachedContent)
        return;
      const subPath = "core/overrides.css";
      const targetPath = (0, import_path.join)(api.paths.absTmpPath, subPath);
      const isLess = filePath.endsWith(".less");
      if (isLess) {
        content = await (0, import_compileLess.compileLess)({
          lessContent: content,
          filePath,
          modifyVars: {
            ...api.config.theme,
            ...(_a = api.config.lessLoader) == null ? void 0 : _a.modifyVars
          },
          alias: api.config.alias,
          targetPath
        });
      }
      content = await (0, import_transform.transform)(content, filePath);
      api.writeTmpFile({
        path: subPath,
        content: content || "/* empty */",
        noPluginDir: true
      });
      cachedContent = content;
    }
  });
  api.addEntryImports(() => {
    return [
      api.appData.overridesCSS.length && {
        source: "@@/core/overrides.css"
      }
    ].filter(Boolean);
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getOverridesCSS
});
