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

// src/features/mpa/extractExports.ts
var extractExports_exports = {};
__export(extractExports_exports, {
  extractExports: () => extractExports
});
module.exports = __toCommonJS(extractExports_exports);
var import_esbuild = __toESM(require("@umijs/bundler-utils/compiled/esbuild"));
var import_utils = require("@umijs/utils");
var import_path = require("path");
async function extractExports(opts) {
  const res = await import_esbuild.default.build({
    format: "cjs",
    platform: "browser",
    target: "esnext",
    loader: {
      ".aac": "text",
      ".css": "text",
      ".less": "text",
      ".sass": "text",
      ".scss": "text",
      ".eot": "text",
      ".flac": "text",
      ".gif": "text",
      ".htm": "text",
      ".html": "text",
      ".ico": "text",
      ".icon": "text",
      ".jpeg": "text",
      ".jpg": "text",
      ".js": "jsx",
      ".jsx": "jsx",
      ".json": "json",
      ".md": "jsx",
      ".mdx": "jsx",
      ".mp3": "text",
      ".mp4": "text",
      ".ogg": "text",
      ".otf": "text",
      ".png": "text",
      ".svg": "text",
      ".ts": "ts",
      ".tsx": "tsx",
      ".ttf": "text",
      ".wav": "text",
      ".webm": "text",
      ".webp": "text",
      ".woff": "text",
      ".woff2": "text"
    },
    bundle: true,
    write: false,
    logLevel: "error",
    entryPoints: [`${opts.entry}?entry`],
    plugins: [
      {
        name: "virtual-entry",
        setup(build) {
          build.onResolve({ filter: /\?entry$/ }, (args) => {
            return {
              path: args.path.split("?")[0],
              namespace: "entry"
            };
          });
          build.onResolve({ filter: /^[@a-z0-9-_~]/ }, (args) => {
            return {
              path: args.path,
              external: true,
              sideEffects: false
            };
          });
          build.onResolve({ filter: /^\// }, (args) => {
            return {
              path: args.path
            };
          });
          build.onLoad({ filter: /.*/, namespace: "entry" }, (args) => {
            return {
              contents: `
import * as x from "${(0, import_utils.winPath)(args.path)}";
ret = x.${opts.exportName} || {};
              `,
              loader: "ts",
              resolveDir: (0, import_path.dirname)(args.path)
            };
          });
        }
      }
    ]
  });
  let ret = {};
  let code = res.outputFiles[0].text;
  eval(`(() => { ${code}; })();`);
  return ret;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extractExports
});
