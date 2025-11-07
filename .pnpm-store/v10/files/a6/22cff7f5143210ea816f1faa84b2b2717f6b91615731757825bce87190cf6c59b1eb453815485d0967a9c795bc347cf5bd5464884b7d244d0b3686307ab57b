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

// src/utils/resolveProjectDep.ts
var resolveProjectDep_exports = {};
__export(resolveProjectDep_exports, {
  resolveProjectDep: () => resolveProjectDep
});
module.exports = __toCommonJS(resolveProjectDep_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
function resolveProjectDep(opts) {
  var _a, _b;
  if (((_a = opts.pkg.dependencies) == null ? void 0 : _a[opts.dep]) || ((_b = opts.pkg.devDependencies) == null ? void 0 : _b[opts.dep])) {
    return (0, import_path.dirname)(
      import_utils.resolve.sync(`${opts.dep}/package.json`, {
        basedir: opts.cwd
      })
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  resolveProjectDep
});
