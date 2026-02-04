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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  getBinPath: () => getBinPath,
  getFileNameByPath: () => getFileNameByPath
});
module.exports = __toCommonJS(src_exports);
var import_assert = __toESM(require("assert"));
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_path = require("path");
var import_plugin_utils = require("umi/plugin-utils");
var src_default = (api) => {
  api.describe({
    key: "run",
    config: {
      schema({ zod }) {
        return zod.object({
          globals: zod.array(zod.string()).optional()
        });
      }
    }
  });
  api.registerCommand({
    name: "run",
    description: "run the script commands, support for ts and zx",
    configResolveMode: "loose",
    fn: ({ args }) => {
      var _a;
      const globals = ((_a = api.config.run) == null ? void 0 : _a.globals) || [];
      const [scriptFilePath, ...restArgs] = args._;
      const absScriptFilePath = (0, import_path.join)(api.cwd, scriptFilePath);
      const fileName = getFileNameByPath(absScriptFilePath);
      (0, import_assert.default)(fileName, `${absScriptFilePath} is not a valid file`);
      (0, import_assert.default)(
        /\.([jt])s$/.test(fileName),
        `${fileName} is not a valid js or ts file`
      );
      const absTmpFilePath = (0, import_path.join)(
        api.paths.absNodeModulesPath,
        ".cache",
        "umi-plugin-run",
        fileName
      );
      import_plugin_utils.fsExtra.mkdirpSync((0, import_path.dirname)(absTmpFilePath));
      (0, import_fs.writeFileSync)(
        absTmpFilePath,
        `${globals.map(
          (item) => `import '${item}'
`
        )}import '${absScriptFilePath}';`,
        "utf-8"
      );
      const tsxPath = getBinPath();
      (0, import_child_process.fork)(tsxPath, [absTmpFilePath, ...restArgs], {
        stdio: "inherit",
        env: {
          ...process.env,
          // disable `(node:92349) ExperimentalWarning: `--experimental-loader` may be removed in the future;` warning
          // more context: https://github.com/umijs/umi/pull/11981
          NODE_NO_WARNINGS: "1"
        }
      });
    }
  });
};
function getBinPath() {
  const pkgPath = import_plugin_utils.resolve.sync("tsx/package.json", { basedir: __dirname });
  const pkgContent = require(pkgPath);
  return (0, import_path.join)((0, import_path.dirname)(pkgPath), pkgContent.bin);
}
function getFileNameByPath(params) {
  return params.split("/").at(-1);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBinPath,
  getFileNameByPath
});
