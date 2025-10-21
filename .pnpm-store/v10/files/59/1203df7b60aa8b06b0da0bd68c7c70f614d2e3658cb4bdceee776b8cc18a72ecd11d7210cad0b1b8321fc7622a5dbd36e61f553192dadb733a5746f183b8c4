var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/icons/svgr.ts
var svgr_exports = {};
__export(svgr_exports, {
  generateIconName: () => generateIconName,
  generateSvgr: () => generateSvgr
});
module.exports = __toCommonJS(svgr_exports);
var import_core = require("@svgr/core");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_loadIcon = require("./loadIcon");
function camelCase(str) {
  return str.replace(/\//g, "-").replace(/-([a-zA-Z]|[0-9])/g, (g) => g[1].toUpperCase());
}
function generateIconName(opts) {
  return camelCase(`${opts.collect}-${opts.icon}`);
}
async function generateSvgr(opts) {
  const componentName = generateIconName(opts);
  let svg;
  if (opts.collect === "local") {
    svg = loadLocalIcon(opts.icon, opts.localIconDir);
  } else {
    const { autoInstall } = (opts == null ? void 0 : opts.iconifyOptions) || {};
    svg = await (0, import_loadIcon.loadIcon)(opts.collect, opts.icon, {
      cwd: opts.api.cwd,
      autoInstall,
      iconifyLoaderOptions: {
        addXmlNs: false
      }
    });
  }
  if (!svg) {
    return null;
  }
  return normalizeSvgr(
    await (0, import_core.transform)(svg, opts.svgrOptions || {}, { componentName })
  );
}
function loadLocalIcon(icon, localIconDir) {
  const iconPath = import_path.default.join(localIconDir, `${icon}.svg`);
  if (!import_fs.default.existsSync(iconPath)) {
    return void 0;
  }
  return import_fs.default.readFileSync(iconPath, "utf-8");
}
function normalizeSvgr(str) {
  return str.split("\n").filter((line) => {
    if (line.startsWith('import * as React from "react";'))
      return false;
    if (line.startsWith("export default "))
      return false;
    return true;
  }).join("\n");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateIconName,
  generateSvgr
});
