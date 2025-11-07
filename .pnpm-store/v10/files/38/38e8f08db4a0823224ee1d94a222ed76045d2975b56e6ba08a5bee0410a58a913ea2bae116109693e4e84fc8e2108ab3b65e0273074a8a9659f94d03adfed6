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

// src/features/transform/transform.ts
var transform_exports = {};
__export(transform_exports, {
  default: () => transform_default
});
module.exports = __toCommonJS(transform_exports);
var import_utils = require("@umijs/utils");
var import_babelPlugin = __toESM(require("./babelPlugin"));
var import_CodeFrameError = __toESM(require("./CodeFrameError"));
var babelCodeFrame = (0, import_utils.importLazy)(require.resolve("@umijs/bundler-utils/compiled/babel/code-frame"));
var transform_default = (api) => {
  api.addBeforeBabelPresets(() => {
    return [
      {
        plugins: [
          [
            import_babelPlugin.default,
            {
              cwd: api.cwd,
              absTmpPath: api.paths.absTmpPath,
              onCheckCode({ args }) {
                try {
                  api.applyPlugins({
                    key: "onCheckCode",
                    args: {
                      ...args,
                      CodeFrameError: import_CodeFrameError.default
                    },
                    sync: true
                  });
                } catch (err) {
                  if (err instanceof import_CodeFrameError.default) {
                    throw new Error(
                      `
${babelCodeFrame.codeFrameColumns(
                        args.code,
                        err.location,
                        {
                          highlightCode: true,
                          message: err.message
                        }
                      )}
`,
                      { cause: err }
                    );
                  } else if (err instanceof Error) {
                    throw new Error(import_utils.chalk.redBright(err.message));
                  } else {
                    api.logger.error(err);
                  }
                }
              }
            }
          ]
        ]
      }
    ];
  });
};
