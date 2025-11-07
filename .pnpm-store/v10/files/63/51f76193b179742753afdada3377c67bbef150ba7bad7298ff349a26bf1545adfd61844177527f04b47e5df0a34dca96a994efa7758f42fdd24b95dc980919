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

// src/features/theme/index.ts
var theme_exports = {};
__export(theme_exports, {
  default: () => theme_default
});
module.exports = __toCommonJS(theme_exports);
var import_constants = require("../../constants");
var import_utils = require("../../utils");
var import_bundler_utils = require("@umijs/bundler-utils");
var import_child_process = require("child_process");
var import_fs = __toESM(require("fs"));
var import_hosted_git_info = __toESM(require("hosted-git-info"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_derivative = require("../derivative");
var import_loader = __toESM(require("./loader"));
var DEFAULT_THEME_PATH = import_path.default.join(__dirname, "../../../theme-default");
var DEFAULT_LOADING_PATH = (0, import_plugin_utils.winPath)(
  import_path.default.resolve(__dirname, "../../client/pages/Loading")
);
function getPkgThemeName(api) {
  if (process.env.DUMI_THEME) {
    const envThemePkgPath = require.resolve(
      import_path.default.join(process.env.DUMI_THEME, "package.json"),
      { paths: [api.cwd] }
    );
    return require(envThemePkgPath).name;
  }
  const validDeps = Object.assign(
    {},
    api.pkg.dependencies,
    api.pkg.devDependencies
  );
  const pkgThemeName = Object.keys(validDeps).find(
    (pkg) => pkg.split("/").pop().startsWith(import_constants.THEME_PREFIX)
  );
  return pkgThemeName;
}
function getPkgThemePath(api) {
  const pkgThemeName = getPkgThemeName(api);
  if (process.env.DUMI_THEME) {
    return import_path.default.resolve(api.cwd, process.env.DUMI_THEME);
  }
  return pkgThemeName && import_path.default.dirname(
    import_plugin_utils.resolve.sync(`${pkgThemeName}/package.json`, {
      basedir: api.cwd,
      preserveSymlinks: true
    })
  );
}
async function getModuleExports(modulePath) {
  const [_, exports] = await (0, import_bundler_utils.parseModule)({
    path: modulePath,
    content: import_fs.default.readFileSync(modulePath, "utf-8")
  });
  return exports || [];
}
function checkMinor2ByPkg(pkg) {
  var _a, _b, _c;
  if ((_a = pkg.name) == null ? void 0 : _a.startsWith("@examples/"))
    return true;
  const ver = ((_b = pkg.peerDependencies) == null ? void 0 : _b.dumi) || ((_c = pkg.devDependencies) == null ? void 0 : _c.dumi) || "^2.0.0";
  return (0, import_utils.isVersionInRange)(ver, import_constants.VERSION_2_LEVEL_NAV);
}
var theme_default = (api) => {
  const defaultThemeData = (0, import_loader.default)(DEFAULT_THEME_PATH);
  const pkgThemePath = getPkgThemePath(api);
  const pkgThemeData = (0, import_plugin_utils.deepmerge)(
    defaultThemeData,
    pkgThemePath ? (0, import_loader.default)(import_path.default.join(pkgThemePath, "dist")) : {}
  );
  const localThemePath = import_path.default.join(api.cwd, import_constants.LOCAL_THEME_DIR);
  const localThemeData = import_fs.default.existsSync(localThemePath) ? (0, import_loader.default)(localThemePath) : void 0;
  const themeMapKeys = [
    "layouts",
    "builtins",
    "slots"
  ];
  let originalThemeData;
  api.describe({ key: "dumi:theme" });
  [pkgThemeData.plugin, localThemeData == null ? void 0 : localThemeData.plugin].forEach((plugin) => {
    if (plugin) {
      api.registerPlugins([plugin]);
    }
  });
  (0, import_derivative.safeExcludeInMFSU)(
    api,
    [
      "dumi/theme-default",
      // for svgr
      "@ant-design/icons-svg",
      getPkgThemeName(api)
    ].filter(Boolean).map((pkg) => new RegExp(pkg))
  );
  api.register({
    key: "modifyAppData",
    // prepare themeData before umi appData, for generate layout routes
    before: "appData",
    async fn(memo) {
      originalThemeData = await api.applyPlugins({
        key: "modifyTheme",
        initialValue: pkgThemeData
      });
      api.service.themeData = originalThemeData;
      if (localThemeData) {
        api.service.themeData = (0, import_plugin_utils.deepmerge)(originalThemeData, localThemeData, {
          clone: true
        });
      }
      Object.assign(api.service.themeData.builtins, {
        DumiDemo: {
          specifier: "{ DumiDemo }",
          source: "dumi"
        },
        DumiDemoGrid: {
          specifier: "{ DumiDemoGrid }",
          source: "dumi"
        },
        Link: {
          specifier: "{ Link }",
          source: "dumi"
        }
      });
      return memo;
    }
  });
  api.modifyAppData((memo) => {
    memo._2LevelNavAvailable = checkMinor2ByPkg(api.pkg);
    if (pkgThemePath && !memo._2LevelNavAvailable) {
      memo._2LevelNavAvailable = checkMinor2ByPkg(
        require(import_path.default.join(pkgThemePath, "package.json"))
      );
    }
    return memo;
  });
  api.modifyConfig((memo) => {
    var _a, _b, _c, _d;
    if (localThemeData) {
      themeMapKeys.forEach((key) => {
        Object.values(localThemeData[key] || {}).forEach((item) => {
          memo.alias[`dumi/theme/${key}/${item.specifier}`] = item.source;
        });
      });
    }
    memo.alias["dumi/theme"] = "dumi/theme-original";
    memo.alias["dumi/theme-original"] = import_path.default.join(
      api.paths.absTmpPath,
      "dumi/theme"
    );
    memo.alias["dumi/theme-default"] = DEFAULT_THEME_PATH;
    memo.extraBabelIncludes ?? (memo.extraBabelIncludes = []);
    memo.extraBabelIncludes.push(
      import_path.default.resolve(__dirname, "../../client/theme-api")
    );
    const repoUrl = ((_a = api.pkg.repository) == null ? void 0 : _a.url) || api.pkg.repository;
    const autoEditLink = (((_b = memo.themeConfig) == null ? void 0 : _b.editLink) ?? true) === true;
    const autoSourceLink = (((_c = memo.themeConfig) == null ? void 0 : _c.sourceLink) ?? true) === true;
    if ((autoEditLink || autoSourceLink) && typeof repoUrl === "string") {
      const hostedGitIns = import_hosted_git_info.default.fromUrl(repoUrl);
      let branch = "";
      try {
        branch = (0, import_child_process.execSync)("git branch --show-current", {
          stdio: "pipe"
        }).toString().trim();
      } catch {
        branch = "master";
      }
      if (hostedGitIns) {
        memo.themeConfig ?? (memo.themeConfig = {});
        const directory = api.pkg.repository.directory || "";
        if (autoSourceLink) {
          let anchorPrefix = "L";
          if (hostedGitIns.type.includes("bitbucket")) {
            anchorPrefix = "lines-";
          }
          const sourceLinkTemplate = hostedGitIns.browse(
            `${directory}/{fileName}#${anchorPrefix}{line}`,
            { committish: branch }
          );
          memo.themeConfig.sourceLink = sourceLinkTemplate;
        }
        if (autoEditLink) {
          memo.themeConfig.editLink = `${hostedGitIns.edit(
            `${directory}/{filename}`,
            { committish: branch }
          )}`;
        }
      }
    }
    memo.theme ?? (memo.theme = {});
    memo.theme["dark-selector"] = `~'[${import_constants.PREFERS_COLOR_ATTR}="dark"]'`;
    if (memo.lessLoader) {
      (_d = memo.lessLoader).modifyVars ?? (_d.modifyVars = {});
      memo.lessLoader.modifyVars["dark-selector"] = `~'[${import_constants.PREFERS_COLOR_ATTR}="dark"]'`;
    }
    return memo;
  });
  api.onGenerateFiles({
    // execute before umi tmpFiles plugin
    stage: -Infinity,
    fn() {
      const { globalLoading = DEFAULT_LOADING_PATH } = api.appData;
      const enableNProgress = !!api.config.themeConfig.nprogress;
      api.appData.globalLoading = "@@/dumi/theme/loading";
      api.writeTmpFile({
        noPluginDir: true,
        path: "dumi/theme/loading.tsx",
        content: `${enableNProgress ? `import nprogress from '${(0, import_plugin_utils.winPath)(
          import_path.default.dirname(require.resolve("nprogress/package"))
        )}';
import './nprogress.css';` : ""}
import UserLoading from '${globalLoading}';
import React, { useLayoutEffect, type FC } from 'react';
import { useSiteData } from 'dumi';

const DumiLoading: FC = () => {
  const { setLoading } = useSiteData();

  useLayoutEffect(() => {
    setLoading(true);${enableNProgress ? `
    nprogress.start();` : ""}

    return () => {
      setLoading(false);${enableNProgress ? `
      nprogress.done();` : ""}
    }
  }, []);

  return <UserLoading />
}

export default DumiLoading;
`
      });
    }
  });
  api.onGenerateFiles(async () => {
    var _a, _b, _c, _d, _e;
    const pAll = themeMapKeys.flatMap(
      (key) => Object.values(originalThemeData[key] || {}).map(async (item) => {
        if (item.source === "dumi")
          return;
        const exports = await getModuleExports(item.source);
        const contents = [];
        if (exports.includes("default")) {
          contents.push(`export { default } from '${item.source}';`);
        }
        if (exports.some((exp) => exp !== "default")) {
          contents.push(`export * from '${item.source}';`);
        }
        api.writeTmpFile({
          noPluginDir: true,
          path: `dumi/theme/${key}/${item.specifier}.ts`,
          content: contents.join("\n")
        });
      })
    );
    await Promise.all(pAll);
    const entryFile = api.config.resolve.entryFile && [import_path.default.resolve(api.cwd, api.config.resolve.entryFile)].find(import_fs.default.existsSync);
    const entryExports = entryFile ? await getModuleExports(entryFile) : [];
    const hasDefaultExport = entryExports.includes("default");
    const hasNamedExport = entryExports.some((exp) => exp !== "default");
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/theme/ContextWrapper.tsx",
      tplPath: require.resolve("../../templates/ContextWrapper.ts.tpl"),
      context: {
        contextPath: (0, import_plugin_utils.winPath)(require.resolve("../../client/theme-api/context")),
        defaultExport: hasDefaultExport ? `import entryDefaultExport from '${(0, import_plugin_utils.winPath)(entryFile)}';` : "",
        namedExport: hasNamedExport ? `import * as entryMemberExports from '${(0, import_plugin_utils.winPath)(entryFile)}';` : "",
        hasDefaultExport,
        hasNamedExport,
        pkg: JSON.stringify(
          import_plugin_utils.lodash.pick(api.pkg, ...Object.keys(import_constants.PICKED_PKG_FIELDS))
        ),
        historyType: ((_a = api.config.history) == null ? void 0 : _a.type) || "browser",
        hostname: String(JSON.stringify((_b = api.config.sitemap) == null ? void 0 : _b.hostname)),
        themeConfig: JSON.stringify(
          Object.assign(
            import_plugin_utils.lodash.pick(api.config, "logo", "description", "title"),
            api.config.themeConfig
          )
        ),
        rc_util: (0, import_plugin_utils.winPath)(import_path.default.dirname(require.resolve("rc-util/package"))),
        _2_level_nav_available: api.appData._2LevelNavAvailable
      }
    });
    const primaryColor = typeof ((_c = api.config) == null ? void 0 : _c.theme) === "object" ? (_e = (_d = api.config) == null ? void 0 : _d.theme) == null ? void 0 : _e["@c-primary"] : "#1677ff";
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/theme/nprogress.css",
      content: `
      /* https://unpkg.com/browse/nprogress@0.2.0/nprogress.css */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: var;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${primaryColor}, 0 0 5px ${primaryColor};
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }

      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${primaryColor};
        border-left-color: ${primaryColor};
        border-radius: 50%;
        animation: nprogress-spinner 400ms linear infinite;
      }

      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }

      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }

      @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      `
    });
  });
  api.addEntryCodeAhead(() => {
    const { prefersColor } = api.config.themeConfig;
    if (prefersColor.switch === false && prefersColor.default !== "auto") {
      return `typeof document !== 'undefined' && document.documentElement.setAttribute('${import_constants.PREFERS_COLOR_ATTR}', '${prefersColor.default}');`;
    }
    return `(function () {
  var cache = typeof navigator !== 'undefined' && navigator.cookieEnabled && typeof window.localStorage !== 'undefined' && localStorage.getItem('dumi:prefers-color') || '${prefersColor.default}';
  var isDark = typeof window !== 'undefined' &&  window.matchMedia('(prefers-color-scheme: dark)').matches;
  var enums = ['light', 'dark', 'auto'];

  typeof document !== 'undefined' && document.documentElement.setAttribute(
    '${import_constants.PREFERS_COLOR_ATTR}',
    cache === enums[2]
      ? (isDark ? enums[1] : enums[0])
      : (enums.indexOf(cache) > -1 ? cache : enums[0])
  );
})();`;
  });
  api.addEntryImportsAhead(() => [
    {
      specifier: "{ getPluginManager as getDumiPluginManager }",
      source: "./core/plugin"
    },
    {
      specifier: "{ setPluginManager as setDumiPluginManager }",
      source: (0, import_plugin_utils.winPath)(require.resolve("../../client/theme-api/utils"))
    }
  ]);
  api.addEntryCode(() => "setDumiPluginManager(getDumiPluginManager());");
  api.addRuntimePluginKey(() => [
    "modifyCodeSandboxData",
    "modifyStackBlitzData"
  ]);
  if (
    /*isTnpm*/
    require("@umijs/core/package").__npminstall_done && import_fs.default.existsSync(localThemePath) && import_fs.default.lstatSync(localThemePath).isSymbolicLink()
  ) {
    api.chainWebpack((memo) => {
      const devThemeNodeModules = import_path.default.join(api.cwd, "../node_modules");
      memo.snapshot(
        (0, import_plugin_utils.deepmerge)(memo.get("snapshot"), {
          immutablePaths: [devThemeNodeModules],
          managedPaths: [devThemeNodeModules]
        })
      );
      return memo;
    });
  }
};
