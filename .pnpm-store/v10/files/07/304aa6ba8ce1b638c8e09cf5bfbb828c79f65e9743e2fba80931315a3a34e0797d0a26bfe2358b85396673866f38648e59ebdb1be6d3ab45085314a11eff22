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

// src/commands/generators/utils.ts
var utils_exports = {};
__export(utils_exports, {
  ETempDir: () => ETempDir,
  GeneratorHelper: () => GeneratorHelper,
  checkStatus: () => checkStatus,
  getUmiJsPlugin: () => getUmiJsPlugin,
  processGenerateFiles: () => processGenerateFiles,
  promptsExitWhenCancel: () => promptsExitWhenCancel,
  trim: () => trim,
  tryEject: () => tryEject
});
module.exports = __toCommonJS(utils_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_set = require("../config/set");
function hasDeps({ name, pkg }) {
  var _a, _b;
  return ((_a = pkg.dependencies) == null ? void 0 : _a[name]) || ((_b = pkg.devDependencies) == null ? void 0 : _b[name]);
}
function checkStatus({ pkg }) {
  let needInstall = true;
  if (hasDeps({ pkg, name: "@umijs/plugins" }) || hasDeps({ pkg, name: "@umijs/max" }) || hasDeps({ pkg, name: "@alipay/bigfish" })) {
    needInstall = false;
  }
  let needConfigPlugins = true;
  if (hasDeps({ pkg, name: "@umijs/max" }) || hasDeps({ pkg, name: "@alipay/bigfish" })) {
    needConfigPlugins = false;
  }
  return {
    needInstall,
    needConfigPlugins
  };
}
var GeneratorHelper = class {
  constructor(api) {
    this.api = api;
    const { needInstall, needConfigPlugins } = checkStatus({
      pkg: api.pkg
    });
    this.needInstallUmiPlugin = needInstall;
    this.needConfigUmiPlugin = needConfigPlugins;
  }
  setUmirc(key, val) {
    (0, import_set.set)(this.api, key, val);
  }
  appendInternalPlugin(pluginPath) {
    if (this.needConfigUmiPlugin && !(this.api.userConfig.plugins || []).includes(pluginPath)) {
      this.setUmirc(
        "plugins",
        (this.api.userConfig.plugins || []).concat(pluginPath)
      );
    }
  }
  addDevDeps(deps) {
    const { api } = this;
    const externalDeps = import_utils.lodash.omit(deps, ["@umijs/plugins"]);
    if (this.needInstallUmiPlugin) {
      api.pkg.devDependencies = {
        ...api.pkg.devDependencies,
        ...deps
      };
      (0, import_fs.writeFileSync)(api.pkgPath, JSON.stringify(api.pkg, null, 2));
      import_utils.logger.info("Write package.json");
    } else if (!import_utils.lodash.isEmpty(externalDeps)) {
      api.pkg.devDependencies = {
        ...api.pkg.devDependencies,
        ...externalDeps
      };
      (0, import_fs.writeFileSync)(api.pkgPath, JSON.stringify(api.pkg, null, 2));
      import_utils.logger.info("Update package.json for devDependencies");
    }
  }
  addScript(name, cmd) {
    const { api } = this;
    this.addScriptToPkg(name, cmd);
    (0, import_fs.writeFileSync)(api.pkgPath, JSON.stringify(api.pkg, null, 2));
    import_utils.logger.info("Update package.json for scripts");
  }
  addScripts(scripts) {
    const { api } = this;
    for (const [name, cmd] of Object.entries(scripts)) {
      this.addScriptToPkg(name, cmd);
    }
    (0, import_fs.writeFileSync)(api.pkgPath, JSON.stringify(api.pkg, null, 2));
    import_utils.logger.info("Update package.json for scripts");
  }
  addScriptToPkg(name, cmd) {
    var _a, _b, _c;
    const { api } = this;
    if (((_a = api.pkg.scripts) == null ? void 0 : _a[name]) && ((_b = api.pkg.scripts) == null ? void 0 : _b[name]) !== cmd) {
      import_utils.logger.warn(
        `scripts.${name} = "${(_c = api.pkg.scripts) == null ? void 0 : _c[name]}" already exists, will be overwritten with "${cmd}"!`
      );
    }
    api.pkg.scripts = {
      ...api.pkg.scripts,
      [name]: cmd
    };
  }
  appendGitIgnore(patterns) {
    const { api } = this;
    const gitIgnorePath = (0, import_path.join)(api.cwd, ".gitignore");
    if ((0, import_fs.existsSync)(gitIgnorePath)) {
      const gitIgnore = (0, import_fs.readFileSync)(gitIgnorePath, "utf-8");
      const toAppendPatterns = patterns.filter(
        (pattern) => !gitIgnore.includes(pattern)
      );
      if (toAppendPatterns.length > 0) {
        const toAppend = patterns.join("\n");
        (0, import_fs.writeFileSync)(gitIgnorePath, `${gitIgnore}
${toAppend}`);
        import_utils.logger.info("Update .gitignore");
      }
    }
  }
  installDeps() {
    const { npmClient } = this.api.appData;
    (0, import_utils.installWithNpmClient)({
      npmClient
    });
    import_utils.logger.info(`Install dependencies with ${npmClient}`);
  }
  async ensureVariableWithQuestion(v, question) {
    if (!v) {
      const res = await promptsExitWhenCancel({
        ...question,
        name: "variable"
      });
      return res.variable ? res.variable : question.initial;
    }
    return v;
  }
};
function getUmiJsPlugin() {
  var _a;
  const pkg = require((0, import_path.join)(__dirname, "../../../", "package.json"));
  const pkgVer = import_utils.semver.parse(pkg.version);
  const umijsPluginVersion = ((_a = pkgVer == null ? void 0 : pkgVer.prerelease) == null ? void 0 : _a.length) ? pkg.version : `^${pkg.version}`;
  return umijsPluginVersion;
}
function promptsExitWhenCancel(questions, options) {
  return (0, import_utils.prompts)(questions, {
    ...options,
    onCancel: () => {
      process.exit(1);
    }
  });
}
function trim(s) {
  return (s == null ? void 0 : s.trim()) || "";
}
var ETempDir = /* @__PURE__ */ ((ETempDir2) => {
  ETempDir2["Page"] = "page";
  ETempDir2["Component"] = "component";
  return ETempDir2;
})(ETempDir || {});
async function processGenerateFiles({
  filesMap,
  baseDir,
  presetArgs = {},
  templateVars
}) {
  const { fallback } = presetArgs;
  const choosePath = ({ from, fromFallback, exts = [] }) => {
    if (fallback) {
      return fromFallback;
    }
    if ((0, import_fs.existsSync)(from)) {
      if ((0, import_fs.statSync)(from).isDirectory() && (0, import_fs.readdirSync)(from).filter((name) => name !== ".DS_Store").length === 0) {
        return fromFallback;
      }
      return from;
    }
    for (const ext of exts) {
      const fullPath = from + ext;
      if ((0, import_fs.existsSync)(fullPath) && (0, import_fs.statSync)(fullPath).isFile()) {
        return fullPath;
      }
    }
    return fromFallback;
  };
  const names = [];
  for (const file of filesMap) {
    const { to, fromFallback } = file;
    const fromPath = choosePath(file);
    const toPath = (0, import_fs.statSync)(fromPath).isDirectory() ? to : (0, import_path.join)(
      (0, import_path.dirname)(to),
      (0, import_path.parse)(to).name + (0, import_path.extname)(fromPath.replace(/\.tpl$/, ""))
    );
    await (0, import_utils.generateFile)({
      path: fromPath,
      target: toPath,
      data: templateVars,
      baseDir
    });
    if (fromPath !== fromFallback) {
      names.push((0, import_path.basename)(to));
    }
  }
  if (names.length > 0) {
    import_utils.logger.info(`${names.join(", ")} is generated by yourself template.`);
  }
}
async function tryEject(dir, baseDir) {
  const generateBaseDir = (0, import_path.join)(__dirname, "../../../templates/generate", dir);
  const targetDir = (0, import_path.join)(baseDir, "templates", dir);
  const willCopyFiles = (0, import_fs.readdirSync)(generateBaseDir);
  if ((0, import_fs.existsSync)(targetDir) && (0, import_fs.statSync)(targetDir).isDirectory()) {
    const userExistFiles = (0, import_fs.readdirSync)(targetDir);
    const conflictFiles = willCopyFiles.filter(
      (filename) => userExistFiles.includes(filename)
    );
    if (conflictFiles.length > 0) {
      const response = await (0, import_utils.prompts)({
        type: "confirm",
        name: "value",
        message: `Will overwrites ${conflictFiles.join(
          ", "
        )} in /templates/${dir}, do you want continue ?`,
        initial: false
      });
      if (!response.value) {
        return;
      }
    }
  }
  import_utils.fsExtra.ensureDirSync(targetDir);
  import_utils.fsExtra.copySync(generateBaseDir, targetDir);
  import_utils.logger.info(
    `Ejected ${dir} template successfully. More info see: "https://umijs.org/docs/guides/generator#对${dir === "page" /* Page */ ? "页面" : "组件"}模板内容进行自定义`
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ETempDir,
  GeneratorHelper,
  checkStatus,
  getUmiJsPlugin,
  processGenerateFiles,
  promptsExitWhenCancel,
  trim,
  tryEject
});
