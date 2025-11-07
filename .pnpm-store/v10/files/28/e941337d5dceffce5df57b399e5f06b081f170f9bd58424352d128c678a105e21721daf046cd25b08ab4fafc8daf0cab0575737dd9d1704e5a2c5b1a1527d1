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

// src/features/tmpFiles/importsToStr.ts
var importsToStr_exports = {};
__export(importsToStr_exports, {
  importsToStr: () => importsToStr
});
module.exports = __toCommonJS(importsToStr_exports);
var import_winPath = require("@umijs/utils/dist/winPath");
function importsToStr(imports) {
  return imports.map((imp) => {
    const { source, specifier } = imp;
    if (specifier) {
      return `import ${specifier} from '${(0, import_winPath.winPath)(source)}';`;
    } else {
      return `import '${(0, import_winPath.winPath)(source)}';`;
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  importsToStr
});
