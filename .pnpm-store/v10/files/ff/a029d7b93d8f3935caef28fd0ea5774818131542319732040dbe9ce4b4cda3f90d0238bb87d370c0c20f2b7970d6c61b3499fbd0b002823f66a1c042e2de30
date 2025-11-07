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

// src/features/parser.ts
var parser_exports = {};
__export(parser_exports, {
  default: () => parser_default
});
module.exports = __toCommonJS(parser_exports);
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_BaseParser = require("../assetParsers/BaseParser");
var import_meta = require("./meta");
function filterIgnoredProps(props) {
  return import_utils.lodash.pickBy(props, (prop) => {
    let isHidden = false;
    if (prop.type === "array" && "items" in prop) {
      prop.items = filterIgnoredProps({ _: prop.items })._;
    } else if (prop.type === "object" && "properties" in prop) {
      prop.properties = filterIgnoredProps(prop.properties);
    } else if (prop.oneOf) {
      prop.oneOf = prop.oneOf.filter(Boolean).map((item) => filterIgnoredProps({ _: item })._);
    } else if (prop.allOf) {
      prop.allOf = prop.allOf.filter(Boolean).map((item) => filterIgnoredProps({ _: item })._);
    } else if ("hidden" in prop) {
      isHidden = true;
    }
    return !isHidden;
  });
}
var parser_default = (api) => {
  let prevData;
  const writeAtomsMetaFile = (data) => {
    const components = import_utils.lodash.mapValues(data.components, (component) => ({
      ...component,
      propsConfig: filterIgnoredProps({ _: component.propsConfig })._
    }));
    api.writeTmpFile({
      noPluginDir: true,
      path: import_meta.ATOMS_META_PATH,
      content: `export const components = ${JSON.stringify(
        components,
        null,
        2
      )};`
    });
  };
  api.describe({
    key: "apiParser",
    enableBy: api.EnableBy.config,
    config: {
      schema: (Joi) => Joi.object({
        unpkgHost: Joi.string().uri().optional(),
        resolveFilter: Joi.function().optional(),
        parseOptions: Joi.object().optional()
      })
    }
  });
  api.modifyDefaultConfig((memo) => {
    var _a;
    (0, import_assert.default)(
      (_a = api.userConfig.resolve) == null ? void 0 : _a.entryFile,
      "`resolve.entryFile` must be configured when `apiParser` enable"
    );
    return memo;
  });
  api.onCheckPkgJSON(async () => {
    if (api.service.atomParser instanceof import_BaseParser.BaseAtomAssetsParser)
      return;
    const {
      default: ReactAtomAssetsParser
    } = require("../assetParsers/atom");
    const apiParser = api.config.apiParser;
    api.service.atomParser = new ReactAtomAssetsParser({
      entryFile: api.config.resolve.entryFile,
      resolveDir: api.cwd,
      unpkgHost: apiParser.unpkgHost,
      resolveFilter: apiParser.resolveFilter,
      parseOptions: apiParser.parseOptions
    });
  });
  api.onDevCompileDone(({ isFirstCompile }) => {
    if (isFirstCompile) {
      api.service.atomParser.watch((data) => {
        prevData = data;
        writeAtomsMetaFile(prevData);
      });
    }
  });
  api.onGenerateFiles(async () => {
    if (api.env === "production") {
      writeAtomsMetaFile(await api.service.atomParser.parse());
    } else if (prevData) {
      writeAtomsMetaFile(prevData);
    }
  });
  api.onBuildComplete({
    stage: Infinity,
    fn() {
      api.service.atomParser.destroyWorker();
    }
  });
  api.modifyTheme((memo) => {
    const parserOffKey = "api.component.unavailable";
    const parserOnKey = "api.component.loading";
    Object.keys(memo.locales).forEach((locale) => {
      if (memo.locales[locale][parserOnKey]) {
        memo.locales[locale][parserOffKey] = memo.locales[locale][parserOnKey];
      }
    });
    return memo;
  });
};
