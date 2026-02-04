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

// src/loaders/demo/index.ts
var demo_exports = {};
__export(demo_exports, {
  default: () => demoLoader
});
module.exports = __toCommonJS(demo_exports);
var import_utils = require("@umijs/utils");
function demoLoader(raw) {
  const opts = this.getOptions();
  const techStackName = new URLSearchParams(this.resourceQuery).get(
    "techStack"
  );
  const techStack = opts.techStacks.find((t) => t.name === techStackName);
  let code = techStack.transformCode(raw, {
    type: "external",
    fileAbsPath: this.resourcePath
  });
  code = `import '${(0, import_utils.winPath)(this.resourcePath)}?watch=parent';${code}`;
  return code;
}
