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

// src/commands/dev/getMarkupArgs.ts
var getMarkupArgs_exports = {};
__export(getMarkupArgs_exports, {
  getMarkupArgs: () => getMarkupArgs
});
module.exports = __toCommonJS(getMarkupArgs_exports);
var import_cheerio = __toESM(require("@umijs/utils/compiled/cheerio"));
async function getMarkupArgs(opts) {
  var _a;
  const headScripts = await opts.api.applyPlugins({
    key: "addHTMLHeadScripts",
    initialValue: opts.api.config.headScripts || []
  });
  const scripts = await opts.api.applyPlugins({
    key: "addHTMLScripts",
    initialValue: opts.api.config.scripts || []
  });
  const metas = await opts.api.applyPlugins({
    key: "addHTMLMetas",
    initialValue: opts.api.config.metas || []
  });
  const links = await opts.api.applyPlugins({
    key: "addHTMLLinks",
    initialValue: opts.api.config.links || []
  });
  const styles = await opts.api.applyPlugins({
    key: "addHTMLStyles",
    initialValue: opts.api.config.styles || []
  });
  const favicons = await opts.api.applyPlugins({
    key: "modifyHTMLFavicon",
    initialValue: [].concat(opts.api.config.favicons || [])
  });
  return {
    mountElementId: opts.api.config.mountElementId,
    base: ((_a = opts.api.config.history) == null ? void 0 : _a.type) === "browser" ? opts.api.config.base : "/",
    routes: opts.api.appData.routes,
    favicons,
    headScripts,
    scripts,
    metas,
    links,
    styles,
    title: opts.api.config.title,
    async modifyHTML(memo, args) {
      let $ = import_cheerio.default.load(memo, {
        // @ts-ignore
        decodeEntities: false,
        // reduce memory overhead, to avoid oom in antd site with `exportStatic: {}`
        _useHtmlParser2: true
      });
      $ = await opts.api.applyPlugins({
        key: "modifyHTML",
        initialValue: $,
        args
      });
      let html = $.html();
      return html;
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getMarkupArgs
});
