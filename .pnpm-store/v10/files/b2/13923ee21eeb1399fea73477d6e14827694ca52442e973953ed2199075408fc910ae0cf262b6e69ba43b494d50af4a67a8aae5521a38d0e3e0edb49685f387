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

// src/features/assets.ts
var assets_exports = {};
__export(assets_exports, {
  addAtomMeta: () => addAtomMeta,
  addExampleAssets: () => addExampleAssets,
  default: () => assets_default,
  getExampleAssets: () => getExampleAssets
});
module.exports = __toCommonJS(assets_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var examples = [];
var atomsMeta = {};
function addExampleAssets(data) {
  examples.push(...data);
}
function getExampleAssets() {
  return examples;
}
function addAtomMeta(atomId, data) {
  atomsMeta[atomId] = import_plugin_utils.lodash.pick(data, ["title", "keywords", "deprecated"]);
}
var assets_default = (api) => {
  let compileDeferrer = new Promise((resolve) => {
    api.register({
      key: "onDevCompileDone",
      stage: -Infinity,
      fn: resolve
    });
    api.register({
      key: "onBuildComplete",
      stage: -Infinity,
      fn: resolve
    });
  });
  api.describe({
    config: {
      schema: (Joi) => Joi.object()
    },
    enableBy: ({ env }) => env === "development" || Boolean(api.args.assets)
  });
  api.registerMethod({
    name: "getAssetsMetadata",
    async fn() {
      await compileDeferrer;
      const { components } = api.service.atomParser ? await api.service.atomParser.parse() : (
        // allow generate assets.json without atoms when parser is not available
        { components: {} }
      );
      return await api.applyPlugins({
        key: "modifyAssetsMetadata",
        initialValue: {
          name: api.config.themeConfig.name || api.pkg.name,
          npmPackageName: api.pkg.name,
          version: api.pkg.version,
          description: api.pkg.description,
          logo: api.config.themeConfig.logo,
          homepage: api.pkg.homepage,
          repository: api.pkg.repository,
          assets: {
            atoms: Object.values(components).map(
              (atom) => (
                // assign extra meta data from md frontmatter
                Object.assign(atom, atomsMeta[atom.id] || {})
              )
            ),
            examples: import_plugin_utils.lodash.uniqBy(examples, "id")
          }
        }
      });
    }
  });
  api.onBuildComplete(async () => {
    const assets = await api.getAssetsMetadata();
    import_fs.default.writeFileSync(
      import_path.default.join(api.cwd, "assets.json"),
      JSON.stringify(assets, null, 2),
      "utf-8"
    );
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addAtomMeta,
  addExampleAssets,
  getExampleAssets
});
