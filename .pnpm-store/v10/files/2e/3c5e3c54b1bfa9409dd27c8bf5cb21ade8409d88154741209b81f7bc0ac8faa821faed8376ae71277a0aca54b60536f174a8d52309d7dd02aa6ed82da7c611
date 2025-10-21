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

// src/utils/transformIEAR.ts
var transformIEAR_exports = {};
__export(transformIEAR_exports, {
  IEAR_REG_EXP: () => IEAR_REG_EXP,
  default: () => transformIEAR
});
module.exports = __toCommonJS(transformIEAR_exports);
var import_bundler_utils = require("@umijs/bundler-utils");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var IEAR_REG_EXP = new RegExp(
  [
    // match content before quote ($1)
    "(",
    [
      // import/export statements
      [
        "(?:",
        // match head
        "(?:^|\\r|\\n|;)\\s*",
        // match identifier
        "(?:import|export)\\s+",
        [
          "(?:",
          "(?:",
          // match body
          [
            // match default & member import
            [
              // match default import
              [
                "(?:",
                // match type import
                "(?:type\\s*)?",
                // match variable name
                "[a-zA-Z_$][\\w_$]*\\s*,?\\s+",
                // optional
                ")?"
              ].join(""),
              // match member import/export (optional)
              "(?:{[^}]+}\\s+)?"
            ].join(""),
            // match contents import/export
            "(?:type\\s*)?\\*\\s+(?:as\\s+[a-zA-Z][\\w_$]*\\s+)?"
          ].join("|"),
          ")",
          // match from
          "from\\s+",
          // match direct file import
          "|\\s*",
          ")"
        ].join(""),
        ")"
      ].join(""),
      // import/require call
      [
        // match head (must be single function name)
        "(?:^|[^a-zA-Z\\w_$\\.])",
        // match call
        "(?:import|require)\\(\\s*"
      ].join("")
    ].join("|"),
    ")",
    "(?:",
    // match quotes ($2)
    `('|")`,
    // match absolute file path ($3)
    `((?:[a-zA-Z]:|\\/).*[^\\\\])\\2`,
    ")"
  ].join(""),
  // match full-content
  "g"
);
function transformIEAR({ content, path }, api) {
  return content.replace(IEAR_REG_EXP, (_, prefix, quote, absPath) => {
    if (absPath.startsWith(api.paths.absTmpPath)) {
      absPath = (0, import_utils.winPath)((0, import_path.relative)((0, import_path.dirname)(path), absPath)).replace(
        // prepend ./ for same or sub level imports
        /^(?!\.\.\/)/,
        "./"
      );
    } else if ((0, import_bundler_utils.isDepPath)(absPath)) {
      absPath = `@fs/${(0, import_utils.winPath)((0, import_path.relative)(api.cwd, absPath))}`;
    }
    return `${prefix}${quote}${absPath}${quote}`;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IEAR_REG_EXP
});
