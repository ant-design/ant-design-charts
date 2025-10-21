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

// src/features/mpa/mpa.ts
var mpa_exports = {};
__export(mpa_exports, {
  default: () => mpa_default
});
module.exports = __toCommonJS(mpa_exports);
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_fs = require("fs");
var import_path = require("path");
var mpa_default = (api) => {
  api.describe({
    key: "mpa",
    config: {
      schema({ zod }) {
        return zod.object({
          template: zod.string(),
          layout: zod.string(),
          getConfigFromEntryFile: zod.boolean(),
          entry: zod.object({})
        }).deepPartial();
      }
    },
    enableBy: api.EnableBy.config
  });
  api.onStart(() => {
    import_utils.logger.warn(import_utils.chalk.yellow("[MPA] MPA Mode Enabled"));
  });
  api.modifyAppData(async (memo) => {
    memo.mpa = {
      entry: await collectEntryWithTimeCount(
        api.paths.absPagesPath,
        api.config.mpa,
        api.userConfig.mountElementId
      )
    };
    return memo;
  });
  api.onGenerateFiles(async ({ isFirstTime }) => {
    if (!isFirstTime) {
      api.appData.mpa.entry = await collectEntryWithTimeCount(
        api.paths.absPagesPath,
        api.config.mpa,
        api.userConfig.mountElementId
      );
    }
    const isGTEReact18 = api.appData.react.version.split(".")[0] >= 18;
    api.appData.mpa.entry.forEach((entry) => {
      const layout = entry.layout || api.config.mpa.layout;
      const layoutImport = layout ? `import Layout from '${layout}';` : "";
      const layoutJSX = layout ? `<Layout><App /></Layout>` : `<App />`;
      const rootElement = `document.getElementById('${entry.mountElementId}')`;
      const renderer = isGTEReact18 ? `ReactDOM.createRoot(${rootElement}).render(${layoutJSX});` : `ReactDOM.render(${layoutJSX}, ${rootElement});`;
      const reactDOMSource = isGTEReact18 ? "react-dom/client" : "react-dom";
      api.writeTmpFile({
        path: entry.tmpFilePath,
        noPluginDir: true,
        content: `
import React from 'react';
import ReactDOM from '${reactDOMSource}';
import App from '${(0, import_utils.winPath)(entry.file)}';
${layoutImport}
${renderer}
        `.trimStart()
      });
    });
    api.writeTmpFile({
      path: "mpa/template.html",
      noPluginDir: true,
      content: `
<!DOCTYPE html>
<html>
<head><title><%= title %></title></head>
<body>
<div id="<%= mountElementId %>"></div>
</body>
</html>
      `.trimStart()
    });
  });
  api.modifyEntry((memo) => {
    if ("umi" in memo)
      delete memo["umi"];
    api.appData.mpa.entry.forEach((entry) => {
      memo[entry.name] = (0, import_path.join)(api.paths.absTmpPath, entry.tmpFilePath);
    });
    return memo;
  });
  api.chainWebpack((memo) => {
    api.appData.mpa.entry.forEach((entry) => {
      memo.plugin(`html-${entry.name}`).use(require("html-webpack-plugin"), [
        {
          filename: `${entry.name}.html`,
          minify: false,
          template: entry.template ? (0, import_path.resolve)(api.cwd, entry.template) : api.config.mpa.template ? (0, import_path.resolve)(api.cwd, api.config.mpa.template) : (0, import_path.join)(api.paths.absTmpPath, "mpa/template.html"),
          // TODO: support html hmr
          templateParameters: entry,
          chunks: [entry.name]
        }
      ]);
    });
    return memo;
  });
};
async function collectEntryWithTimeCount(root, opts, mountElementId) {
  const d = /* @__PURE__ */ new Date();
  const entries = await collectEntry(root, opts, mountElementId);
  import_utils.logger.info(
    `[MPA] Collect Entries in ${(/* @__PURE__ */ new Date()).getTime() - d.getTime()}ms`
  );
  return entries;
}
function filterEntry(dir) {
  if (!process.env.MPA_FILTER) {
    return true;
  }
  const entries = process.env.MPA_FILTER.split(",");
  return entries.includes(dir);
}
async function collectEntry(root, opts, mountElementId) {
  return await (0, import_fs.readdirSync)(root).reduce(
    async (memoP, dir) => {
      var _a;
      const memo = await memoP;
      if (!filterEntry(dir)) {
        return memo;
      }
      const absDir = (0, import_path.join)(root, dir);
      if ((0, import_fs.existsSync)(absDir) && (0, import_fs.statSync)(absDir).isDirectory()) {
        const indexFile = getIndexFile(absDir);
        if (indexFile) {
          const config = opts.getConfigFromEntryFile ? await getConfigFromEntryFile(indexFile) : await getConfig(indexFile);
          const name = dir;
          const globalConfig = (_a = opts.entry) == null ? void 0 : _a[dir];
          memo.push({
            name,
            file: indexFile,
            tmpFilePath: `mpa/${dir}${(0, import_path.extname)(indexFile)}`,
            mountElementId: mountElementId || "root",
            ...globalConfig,
            ...config,
            title: (globalConfig == null ? void 0 : globalConfig.title) || config.title || dir
          });
        }
      }
      return memo;
    },
    Promise.resolve([])
  );
}
function getIndexFile(dir) {
  if ((0, import_fs.existsSync)((0, import_path.join)(dir, "index.tsx")))
    return (0, import_path.join)(dir, "index.tsx");
  if ((0, import_fs.existsSync)((0, import_path.join)(dir, "index.ts")))
    return (0, import_path.join)(dir, "index.ts");
  if ((0, import_fs.existsSync)((0, import_path.join)(dir, "index.jsx")))
    return (0, import_path.join)(dir, "index.jsx");
  if ((0, import_fs.existsSync)((0, import_path.join)(dir, "index.js")))
    return (0, import_path.join)(dir, "index.js");
  return null;
}
async function getConfig(indexFile) {
  const dir = (0, import_path.dirname)(indexFile);
  if ((0, import_fs.existsSync)((0, import_path.join)(dir, "config.json"))) {
    const config = JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(dir, "config.json"), "utf-8"));
    checkConfig(config);
    return config;
  } else {
    return {};
  }
}
async function getConfigFromEntryFile(indexFile) {
  const { extractExports } = await import("./extractExports.js");
  const config = await extractExports({
    entry: indexFile,
    exportName: "config"
  });
  checkConfig(config);
  return config;
}
function checkConfig(config) {
  if (config.layout) {
    (0, import_assert.default)(
      typeof config.layout === "string" && (config.layout.startsWith("@/") || config.layout.startsWith("/")),
      `layout must be an absolute path or start with '@/'`
    );
  }
  if (config.template) {
    (0, import_assert.default)(typeof config.template === "string", "template must be string");
  }
  if (config.title) {
    (0, import_assert.default)(typeof config.title === "string", "title must be string");
  }
  if (config.head) {
    (0, import_assert.default)(Array.isArray(config.head), "head must be string");
  }
  if (config.scripts) {
    (0, import_assert.default)(Array.isArray(config.scripts), "scripts must be string");
  }
}
