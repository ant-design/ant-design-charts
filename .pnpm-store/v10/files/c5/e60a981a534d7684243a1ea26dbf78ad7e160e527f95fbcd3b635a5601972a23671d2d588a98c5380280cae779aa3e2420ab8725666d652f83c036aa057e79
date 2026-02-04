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

// src/features/ssr/builder/less-loader.ts
var less_loader_exports = {};
__export(less_loader_exports, {
  convertLessError: () => convertLessError,
  getLessImports: () => getLessImports,
  lessLoader: () => lessLoader
});
module.exports = __toCommonJS(less_loader_exports);
var import_less = __toESM(require("@umijs/bundler-utils/compiled/less"));
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_css_loader = require("./css-loader");
var lessLoader = (opts) => {
  const { lessOptions = {} } = opts;
  return {
    name: "less-loader",
    setup: (build) => {
      build.onResolve({ filter: /\.less$/, namespace: "file" }, (args) => {
        const filePath = (0, import_path.join)(args.resolveDir, args.path);
        return {
          path: filePath,
          watchFiles: [filePath, ...getLessImports(filePath)]
        };
      });
      build.onLoad({ filter: /\.less$/, namespace: "file" }, async (args) => {
        const content = (0, import_fs.readFileSync)(args.path, "utf-8");
        const dir = (0, import_path.dirname)(args.path);
        const filename = (0, import_path.basename)(args.path);
        const relFilename = (0, import_utils.winPath)(args.path).replace(
          (0, import_css_loader.ensureLastSlash)((0, import_utils.winPath)(opts.cwd)),
          ""
        );
        try {
          const result = await import_less.default.render(content, {
            filename,
            rootpath: dir,
            ...lessOptions,
            paths: [...lessOptions.paths || [], dir]
          });
          const classNames = (0, import_css_loader.getClassNames)(
            Buffer.from(result.css),
            filename
          ).sort();
          const cssModuleObject = classNames.reduce(
            (memo, key) => {
              memo[key] = `${key}___${(0, import_css_loader.hashString)(`${relFilename}@${key}`)}`;
              return memo;
            },
            {}
          );
          return {
            contents: `export default ${JSON.stringify(cssModuleObject)};`,
            loader: "js",
            resolveDir: dir
          };
        } catch (e) {
          return {
            errors: [convertLessError(e)],
            resolveDir: dir
          };
        }
      });
    }
  };
};
var importRegex = /@import(?:\s+\((.*)\))?\s+['"](.*)['"]/;
var globalImportRegex = /@import(?:\s+\((.*)\))?\s+['"](.*)['"]/g;
var importCommentRegex = /\/\*[\s\S]*?\*\/|(\/\/.*$)/gm;
var extWhitelist = [".css", ".less"];
var getLessImports = (filePath) => {
  try {
    const dir = (0, import_path.dirname)(filePath);
    const content = (0, import_fs.readFileSync)(filePath).toString("utf8");
    const cleanContent = content.replace(importCommentRegex, "");
    const match = cleanContent.match(globalImportRegex) || [];
    const fileImports = match.map((el) => {
      const match2 = el.match(importRegex);
      return match2 ? match2[2] : "";
    }).filter((el) => !!el).map((el) => (0, import_path.resolve)(dir, (0, import_path.extname)(el) ? el : `${el}.less`));
    const recursiveImports = fileImports.reduce((result, el) => {
      return [...result, ...getLessImports(el)];
    }, fileImports);
    return recursiveImports.filter(
      (el) => extWhitelist.includes((0, import_path.extname)(el).toLowerCase())
    );
  } catch (e) {
    return [];
  }
};
var convertLessError = (error) => {
  const sourceLine = error.extract.filter((line) => line);
  const lineText = sourceLine.length === 3 ? sourceLine[1] : sourceLine[0];
  return {
    text: error.message,
    location: {
      namespace: "file",
      file: error.filename,
      line: error.line,
      column: error.column,
      lineText
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertLessError,
  getLessImports,
  lessLoader
});
