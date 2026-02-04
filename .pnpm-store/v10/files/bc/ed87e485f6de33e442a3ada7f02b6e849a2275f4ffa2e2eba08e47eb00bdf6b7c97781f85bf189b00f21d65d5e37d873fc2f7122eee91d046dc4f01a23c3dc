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

// src/features/tabs.ts
var tabs_exports = {};
__export(tabs_exports, {
  default: () => tabs_default,
  getHostForTabRouteFile: () => getHostForTabRouteFile,
  getTabKeyFromFile: () => getTabKeyFromFile,
  isTabRouteFile: () => isTabRouteFile
});
module.exports = __toCommonJS(tabs_exports);
var import_utils = require("@umijs/core/dist/route/utils");
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_meta = require("./meta");
function isTabRouteFile(file) {
  return file.includes("$tab-");
}
function getTabKeyFromFile(file) {
  return file.match(/\$tab-([^.]+)/)[1];
}
function getHostForTabRouteFile(file) {
  return file.replace(/\$tab-[^.]+\./, "");
}
var tabs_default = (api) => {
  let tabsFromPlugins;
  const routesTabMapping = {};
  const tabs = [];
  api.describe({ key: void 0 });
  api.modifyConfig(async (memo) => {
    tabsFromPlugins = await api.applyPlugins({
      key: "addContentTab"
    });
    tabsFromPlugins.forEach((tab) => {
      tab.id ?? (tab.id = `plugin-tab-${tab.key}`);
      tab.component = (0, import_plugin_utils.winPath)(tab.component);
    });
    return memo;
  });
  api.modifyRoutes((routes) => {
    tabs.length = 0;
    Object.values(routes).forEach((route) => {
      var _a;
      if (route.file && isTabRouteFile(route.file)) {
        delete routes[route.id];
        const rtlFile = (0, import_plugin_utils.winPath)(import_path.default.relative(api.cwd, route.file));
        const routeId = (0, import_utils.createRouteId)(rtlFile);
        const tabKey = getTabKeyFromFile(rtlFile);
        const parentFile = route.file.replace(/\$tab-[^.]+\./, "");
        tabs.push({
          index: tabs.length,
          key: tabKey,
          id: routeId,
          file: route.file
        });
        if (!((_a = routesTabMapping[parentFile]) == null ? void 0 : _a.includes(routeId))) {
          routesTabMapping[parentFile] ?? (routesTabMapping[parentFile] = []);
          routesTabMapping[parentFile].push(routeId);
        }
      } else {
        tabsFromPlugins.forEach((tab) => {
          var _a2, _b;
          if ((!tab.test || route.absPath.match(tab.test)) && !((_a2 = routesTabMapping[route.file]) == null ? void 0 : _a2.includes(tab.id))) {
            routesTabMapping[_b = route.file] ?? (routesTabMapping[_b] = []);
            routesTabMapping[route.file].push(tab.id);
          }
        });
      }
    });
    tabs.push(
      ...tabsFromPlugins.map((tab, index) => ({
        index: tabs.length + index,
        key: tab.key,
        id: tab.id,
        title: tab.title || import_plugin_utils.lodash.startCase(import_path.default.parse(tab.component).name),
        titleIntlId: tab.titleIntlId,
        file: tab.component
      }))
    );
    return routes;
  });
  api.register({
    key: "dumi.modifyMetaFiles",
    fn: (metaFiles) => {
      Object.values(metaFiles).forEach((metaFile) => {
        if (routesTabMapping[metaFile.file]) {
          metaFile.tabs = JSON.stringify(routesTabMapping[metaFile.file]);
        }
      });
      tabs.forEach((tab) => {
        const isFromPlugin = tabsFromPlugins.some((item) => item.id === tab.id);
        if (!isFromPlugin) {
          metaFiles.push({
            id: tab.id,
            file: tab.file,
            index: metaFiles.length
          });
        }
      });
      return metaFiles;
    }
  });
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      noPluginDir: true,
      path: import_meta.TABS_META_PATH,
      content: import_plugin_utils.Mustache.render(
        `{{#tabs}}
import * as tab{{{index}}} from '{{{file}}}';
{{/tabs}}

export const tabs = {
  {{#tabs}}
  '{{{id}}}': { key: '{{{key}}}', title: '{{{title}}}', titleIntlId: '{{{titleIntlId}}}', components: tab{{{index}}} },
  {{/tabs}}
}
`,
        { tabs }
      )
    });
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getHostForTabRouteFile,
  getTabKeyFromFile,
  isTabRouteFile
});
