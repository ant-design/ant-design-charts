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

// src/commands/lint.ts
var lint_exports = {};
__export(lint_exports, {
  default: () => lint_default
});
module.exports = __toCommonJS(lint_exports);
var import_utils = require("@umijs/utils");
var lint_default = (api) => {
  api.registerCommand({
    name: "lint",
    description: "lint source code using eslint and stylelint",
    configResolveMode: "loose",
    details: `
umi lint

# lint for specific files, default is "{src,test}/**/*.{js,jsx,ts,tsx,less}"
umi lint "**/*.{ts,scss}"

# lint eslint-only or stylelint-only
umi lint --eslint-only
umi lint --stylelint-only

# automatically fix, where possible
umi lint --fix

# disable reporting on warnings
umi lint --quiet
`,
    fn: async function() {
      const args = (0, import_utils.yParser)(process.argv.slice(3), {
        boolean: ["quiet", "fix", "eslint-only", "stylelint-only"]
      });
      try {
        require.resolve("@umijs/lint/package.json");
      } catch (err) {
        throw new Error(
          "@umijs/lint is not built-in, please install it manually before run umi lint.",
          { cause: err }
        );
      }
      if (args._.length === 0) {
        args._.unshift("{src,test}/**/*.{js,jsx,ts,tsx,less,css}");
      }
      require("@umijs/lint").default({ cwd: api.cwd }, args);
    }
  });
};
