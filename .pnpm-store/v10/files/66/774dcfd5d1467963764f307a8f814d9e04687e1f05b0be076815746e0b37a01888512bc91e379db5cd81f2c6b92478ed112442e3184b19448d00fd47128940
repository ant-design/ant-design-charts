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

// src/techStacks/react.ts
var react_exports = {};
__export(react_exports, {
  default: () => ReactTechStack
});
module.exports = __toCommonJS(react_exports);
var import_utils = require("./utils");
var ReactTechStack = class {
  constructor() {
    this.name = "react";
    this.runtimeOpts = {
      compilePath: require.resolve("../client/misc/reactDemoCompiler")
    };
  }
  isSupported(...[, lang]) {
    return ["jsx", "tsx"].includes(lang);
  }
  transformCode(...[raw, opts]) {
    if (opts.type === "code-block") {
      const isTSX = opts.fileAbsPath.endsWith(".tsx");
      const code = (0, import_utils.wrapDemoWithFn)(raw, {
        filename: opts.fileAbsPath,
        parserConfig: {
          syntax: isTSX ? "typescript" : "ecmascript",
          [isTSX ? "tsx" : "jsx"]: true
        }
      });
      return `React.memo(React.lazy(${code}))`;
    }
    return raw;
  }
};
