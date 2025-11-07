var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/rustPlugins/index.ts
var rustPlugins_exports = {};
__export(rustPlugins_exports, {
  rustPluginResolver: () => rustPluginResolver,
});
module.exports = __toCommonJS(rustPlugins_exports);
var import_url = require('url');
async function rustPluginResolver(plugins) {
  const promises = plugins.map(([plugin]) => {
    let pluginPath = require.resolve(plugin);
    if (process.platform == 'win32')
      return import((0, import_url.pathToFileURL)(pluginPath).toString());
    else return import(pluginPath);
  });
  const result = await Promise.all(promises);
  return result.map((resolved, i) => [resolved.default, plugins[i][1]]);
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    rustPluginResolver,
  });
