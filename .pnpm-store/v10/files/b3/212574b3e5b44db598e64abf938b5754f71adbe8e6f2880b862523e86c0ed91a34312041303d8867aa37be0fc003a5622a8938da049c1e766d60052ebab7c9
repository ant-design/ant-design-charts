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

// src/features/derivative.ts
var derivative_exports = {};
__export(derivative_exports, {
  default: () => derivative_default,
  safeExcludeInMFSU: () => safeExcludeInMFSU
});
module.exports = __toCommonJS(derivative_exports);
var import_constants = require("../constants");
var import_assert = __toESM(require("assert"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
function isMFSUAvailable(api) {
  return (
    // maybe not working on windows
    process.platform !== "win32" && // allow user to disable mfsu
    api.userConfig.mfsu !== false && // mfsu will interrupt 2-level esm for strip-ansi with unknown reason
    // ref: https://github.com/umijs/dumi/issues/1587
    api.pkg.type !== "module"
  );
}
function safeExcludeInMFSU(api, excludes) {
  if (isMFSUAvailable(api)) {
    api.modifyConfig((memo) => {
      if (memo.mfsu === false)
        return memo;
      else if (memo.mfsu === true)
        memo.mfsu = {};
      memo.mfsu ?? (memo.mfsu = {});
      memo.mfsu.exclude = (0, import_plugin_utils.deepmerge)(memo.mfsu.exclude || [], excludes);
      memo.extraBabelIncludes ?? (memo.extraBabelIncludes = []);
      memo.extraBabelIncludes.push(...excludes);
      return memo;
    });
  }
}
var derivative_default = (api) => {
  api.describe({ key: "dumi:derivative" });
  api.onCheck(() => {
    var _a, _b, _c, _d, _e, _f;
    [
      "clientLoader",
      "deadCode",
      "icons",
      "mdx",
      "mpa",
      "reactRouter5Compat",
      "verifyCommit"
    ].forEach((key) => {
      (0, import_assert.default)(!api.config[key], `${key} is not supported in dumi!`);
    });
    ["vite", "PhantomDependency"].forEach((key) => {
      (0, import_assert.default)(!api.config[key], `${key} is not supported yet!`);
    });
    if (typeof api.config.mfsu === "object") {
      (0, import_assert.default)(
        api.config.mfsu.strategy !== "eager",
        "MFSU eager mode is not supported yet!"
      );
      (0, import_assert.default)(
        api.config.mfsu.esbuild !== true,
        "MFSU esbuild bundler is not supported yet!"
      );
    }
    (0, import_assert.default)(
      !api.config.ssr || api.config.ssr.builder === "webpack" || api.config.ssr.builder === "mako",
      "Only `webpack` and mako` builder is supported in SSR mode!"
    );
    (0, import_assert.default)(
      ((_a = api.config.cssLoader) == null ? void 0 : _a.modules) === void 0 && api.config.cssLoaderModules === void 0,
      "CSS Modules is not supported! Because it is not suitable for UI library development, please use normal CSS, Less, etc. instead."
    );
    if (api.userConfig.history && api.userConfig.history.type === "hash") {
      import_plugin_utils.logger.warn(
        "Hash history is temporarily incompatible, it is recommended to use browser history for now."
      );
    }
    const { themeConfig } = api.config;
    if (themeConfig == null ? void 0 : themeConfig.nav) {
      const hasOrder = !!JSON.stringify(themeConfig.nav).includes('"order":');
      if (hasOrder) {
        import_plugin_utils.logger.warn(
          `\`order\` is deprecated in \`themeConfig.nav\`, you can order them directly in config`
        );
      }
    }
    try {
      const tsconfigPath = import_path.default.join(api.cwd, "tsconfig.json");
      const tsconfig = require(tsconfigPath);
      const dotDumiWildcard = `${import_constants.LOCAL_DUMI_DIR}/**/*`;
      if ((_b = tsconfig.include) == null ? void 0 : _b.includes(dotDumiWildcard)) {
        tsconfig.include = tsconfig.include.filter(
          (i) => i !== dotDumiWildcard
        );
        import_fs.default.writeFileSync(
          tsconfigPath,
          JSON.stringify(tsconfig, null, 2),
          "utf-8"
        );
        import_plugin_utils.logger.info(
          `tsconfig.json \`include\` option has been patched automatically, please check and commit it.
          ${import_plugin_utils.chalk.grey("see also: https://github.com/umijs/dumi/pull/1902")}`
        );
      }
      const dotDumiPath = import_path.default.join(api.cwd, import_constants.LOCAL_DUMI_DIR);
      const dotDumiTsconfigPath = import_path.default.join(dotDumiPath, "tsconfig.json");
      const hasDotDumiTsFiles = import_fs.default.existsSync(dotDumiPath) && import_fs.default.readdirSync(dotDumiPath).some(
        (f) => import_constants.LOCAL_PAGES_DIR.endsWith(`/${f}`) || import_constants.LOCAL_THEME_DIR.endsWith(`/${f}`) || /\.tsx?$/.test(f)
      );
      if (hasDotDumiTsFiles && !import_fs.default.existsSync(dotDumiTsconfigPath) && !((_c = tsconfig.include) == null ? void 0 : _c.some((i) => /(\.\/)?.dumi\//.test(i)))) {
        import_fs.default.writeFileSync(
          dotDumiTsconfigPath,
          JSON.stringify(
            { extends: "../tsconfig.json", include: ["**/*"] },
            null,
            2
          ),
          "utf-8"
        );
        import_plugin_utils.logger.info(
          "In order to make type prompt works for theme files, .dumi/tsconfig.json has been created automatically, please check and commit it."
        );
      }
      const configFileName = ((_d = api.service.configManager) == null ? void 0 : _d.mainConfigFile) && import_path.default.basename((_e = api.service.configManager) == null ? void 0 : _e.mainConfigFile);
      if (configFileName && // only .dumirc.ts need to be included in the root tsconfig.json, because the dot files will be excluded by default
      /^\..+\.ts$/.test(configFileName) && !((_f = tsconfig.include) == null ? void 0 : _f.includes(configFileName))) {
        import_plugin_utils.logger.warn(
          `Please append \`${configFileName}\` into \`include\` option of tsconfig.json, to make sure the type prompt works for it.`
        );
      }
    } catch {
    }
    if ("live" in api.config) {
      import_plugin_utils.logger.warn(
        "`live` config is deprecated and live demo is always enabled now, please remove it."
      );
    }
  });
  safeExcludeInMFSU(api, [
    new RegExp("dumi/dist/client"),
    // for useSiteSearch api
    new RegExp("compiled/_internal/searchWorker")
  ]);
  api.modifyDefaultConfig((memo) => {
    if (!isMFSUAvailable(api)) {
      memo.mfsu = false;
    } else {
      memo.mfsu.strategy = "normal";
      memo.mfsu.shared = {
        react: { singleton: true },
        "react-dom": { singleton: true }
      };
    }
    if (api.userConfig.conventionRoutes !== false) {
      memo.conventionRoutes = {
        base: import_path.default.join(api.cwd, import_constants.LOCAL_PAGES_DIR),
        exclude: [/(\/|^)(\.|_\/)/]
      };
    }
    if (api.userConfig.ssr) {
      memo.ssr = Object.assign(memo.ssr || {}, { builder: "webpack" });
    }
    memo.hash = true;
    memo.exportStatic || (memo.exportStatic = {});
    memo.esbuildMinifyIIFE = true;
    return memo;
  });
  api.modifyConfig((memo) => {
    var _a;
    if ((_a = api.userConfig.alias) == null ? void 0 : _a["@"]) {
      memo.alias["@"] = api.userConfig.alias["@"];
    } else {
      memo.alias["@"] = (0, import_plugin_utils.winPath)(
        [import_path.default.join(api.cwd, "src"), api.cwd].find(import_fs.default.existsSync)
      );
    }
    return memo;
  });
  api.modifyBabelPresetOpts((memo) => {
    delete memo.pluginAutoCSSModules;
    return memo;
  });
  api.register({
    key: "onGenerateFiles",
    // make sure after umi generate files
    stage: Infinity,
    fn() {
      import_constants.USELESS_TMP_FILES.forEach((file) => {
        import_plugin_utils.fsExtra.rmSync(import_path.default.join(api.paths.absTmpPath, file), { force: true });
      });
    }
  });
  api.registerPlugins([require.resolve("../../compiled/@umijs/plugins")]);
  [
    // skip prepare plugin since umi@4.0.48, because it is not compatible with dumi currently
    "prepare",
    // skip routeProps plugin since umi@4.0.53, because dumi support conventional route props by default
    "routeProps"
  ].forEach((plugin) => {
    if (api.isPluginEnable(plugin))
      api.skipPlugins([plugin]);
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  safeExcludeInMFSU
});
