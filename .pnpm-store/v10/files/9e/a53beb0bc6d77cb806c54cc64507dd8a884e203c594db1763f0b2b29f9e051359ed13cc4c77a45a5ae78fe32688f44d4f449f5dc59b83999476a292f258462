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

// src/build.ts
var build_exports = {};
__export(build_exports, {
  build: () => build
});
module.exports = __toCommonJS(build_exports);
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_vite = require("../compiled/vite");
var import_config = require("./config/config");
var import_deleteOutputFiles = __toESM(require("./plugins/deleteOutputFiles"));
var import_types = require("./types");
function getUmiTmpDir(cwd, entry) {
  const mainEntry = Object.values(entry).find((p) => p.includes("/umi.ts"));
  if (!mainEntry) {
    const tmp = import_path.default.join(cwd, "node_modules/.tmp");
    return tmp;
  }
  return import_path.default.dirname(mainEntry);
}
function generateTempEntry(cwd, entry) {
  if (process.env.UMI_CLI_TEST) {
    return;
  }
  const umiTmpDir = getUmiTmpDir(cwd, entry);
  if (umiTmpDir) {
    const entryTmpDir = import_path.default.join(umiTmpDir, ".bundler-vite-entry");
    import_utils.fsExtra.ensureDirSync(entryTmpDir);
    return Object.keys(entry).reduce((r, name) => {
      const entryFilePath = import_path.default.join(entryTmpDir, `${name}.html`);
      import_fs.default.writeFileSync(
        entryFilePath,
        `<html><head></head><body><script type="module" src="${entry[name]}"></script></body></html>`,
        "utf8"
      );
      return {
        ...r,
        [name]: import_path.default.relative(cwd, entryFilePath)
      };
    }, {});
  }
}
async function build(opts) {
  let extraHtmlPart;
  const startTms = +/* @__PURE__ */ new Date();
  const result = {
    isFirstCompile: true,
    time: 0
  };
  const tmpHtmlEntry = generateTempEntry(opts.cwd, opts.entry);
  const viteUserConfig = await (0, import_config.getConfig)({
    cwd: opts.cwd,
    env: import_types.Env.production,
    entry: opts.entry,
    userConfig: opts.config,
    extraBabelPlugins: [
      ...opts.beforeBabelPlugins || [],
      ...opts.extraBabelPlugins || []
    ],
    extraBabelPresets: [
      ...opts.beforeBabelPresets || [],
      ...opts.extraBabelPresets || []
    ],
    modifyViteConfig: opts.modifyViteConfig
  });
  const viteBuildConfig = (0, import_vite.mergeConfig)(
    {
      root: opts.cwd,
      mode: import_types.Env.production,
      build: {
        rollupOptions: tmpHtmlEntry ? (
          // first use entry from options
          {
            // use temp html entry for vite build
            input: tmpHtmlEntry,
            // remove temp html entry after build
            plugins: [
              (0, import_deleteOutputFiles.default)(Object.values(tmpHtmlEntry), (file) => {
                if (file.type === "asset") {
                  const $ = import_utils.cheerio.load(file.source);
                  extraHtmlPart = {
                    head: $("head").html(),
                    body: $("body").html()
                  };
                }
              })
            ]
          }
        ) : (
          // fallback to vite default entry
          {}
        )
      }
    },
    viteUserConfig
  );
  try {
    result.stats = await (0, import_vite.build)(viteBuildConfig);
    result.stats.extraHtml = extraHtmlPart;
    result.time = +/* @__PURE__ */ new Date() - startTms;
  } catch (err) {
    result.err = err;
  }
  opts.onBuildComplete && opts.onBuildComplete(result);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  build
});
