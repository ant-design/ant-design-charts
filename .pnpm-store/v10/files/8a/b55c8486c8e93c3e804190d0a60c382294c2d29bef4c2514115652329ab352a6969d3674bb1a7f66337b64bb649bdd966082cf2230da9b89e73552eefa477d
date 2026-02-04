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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var src_default = () => {
  return {
    plugins: [
      // registerMethods
      require.resolve("./registerMethods"),
      // features
      process.env.DID_YOU_KNOW !== "none" && require.resolve("@umijs/did-you-know/dist/plugin"),
      require.resolve("./features/404/404"),
      require.resolve("./features/aiDev/aiDev"),
      require.resolve("./features/appData/appData"),
      require.resolve("./features/appData/umiInfo"),
      require.resolve("./features/check/check"),
      require.resolve("./features/check/babel722"),
      require.resolve("./features/codeSplitting/codeSplitting"),
      require.resolve("./features/configPlugins/configPlugins"),
      require.resolve("./features/crossorigin/crossorigin"),
      require.resolve("./features/depsOnDemand/depsOnDemand"),
      require.resolve("./features/devTool/devTool"),
      require.resolve("./features/esbuildHelperChecker/esbuildHelperChecker"),
      require.resolve("./features/esmi/esmi"),
      require.resolve("./features/exportStatic/exportStatic"),
      require.resolve("./features/favicons/favicons"),
      require.resolve("./features/helmet/helmet"),
      require.resolve("./features/icons/icons"),
      require.resolve("./features/mock/mock"),
      require.resolve("./features/mpa/mpa"),
      require.resolve("./features/okam/okam"),
      require.resolve("./features/overrides/overrides"),
      require.resolve("./features/phantomDependency/phantomDependency"),
      require.resolve("./features/polyfill/polyfill"),
      require.resolve("./features/polyfill/publicPathPolyfill"),
      require.resolve("./features/prepare/prepare"),
      require.resolve("./features/routePrefetch/routePrefetch"),
      require.resolve("./features/stagewise/stagewise"),
      require.resolve("./features/terminal/terminal"),
      // 1. generate tmp files
      require.resolve("./features/tmpFiles/tmpFiles"),
      // 2. `clientLoader` and `routeProps` depends on `tmpFiles` files
      require.resolve("./features/clientLoader/clientLoader"),
      require.resolve("./features/routeProps/routeProps"),
      // 3. `ssr` needs to be run last
      require.resolve("./features/ssr/ssr"),
      require.resolve("./features/tmpFiles/configTypes"),
      require.resolve("./features/transform/transform"),
      require.resolve("./features/lowImport/lowImport"),
      require.resolve("./features/vite/vite"),
      require.resolve("./features/apiRoute/apiRoute"),
      require.resolve("./features/monorepo/redirect"),
      require.resolve("./features/test/test"),
      require.resolve("./features/clickToComponent/clickToComponent"),
      require.resolve("./features/legacy/legacy"),
      require.resolve("./features/classPropertiesLoose/classPropertiesLoose"),
      require.resolve("./features/webpack/webpack"),
      require.resolve("./features/swc/swc"),
      require.resolve("./features/ui/ui"),
      require.resolve("./features/mako/mako"),
      require.resolve("./features/utoopack/utoopack"),
      require.resolve("./features/hmrGuardian/hmrGuardian"),
      require.resolve("./features/routePreloadOnLoad/routePreloadOnLoad"),
      require.resolve("./features/forget/forget"),
      require.resolve("./features/bundler/bundler"),
      // commands
      require.resolve("./commands/build"),
      require.resolve("./commands/config/config"),
      require.resolve("./commands/dev/dev"),
      require.resolve("./commands/help"),
      require.resolve("./commands/lint"),
      require.resolve("./commands/setup"),
      require.resolve("./commands/deadcode"),
      require.resolve("./commands/version"),
      require.resolve("./commands/generators/page"),
      require.resolve("./commands/generators/prettier"),
      require.resolve("./commands/generators/tsconfig"),
      require.resolve("./commands/generators/jest"),
      require.resolve("./commands/generators/tailwindcss"),
      require.resolve("./commands/generators/dva"),
      require.resolve("./commands/generators/component"),
      require.resolve("./commands/generators/mock"),
      require.resolve("./commands/generators/cypress"),
      require.resolve("./commands/generators/api"),
      require.resolve("./commands/generators/precommit"),
      require.resolve("./commands/plugin"),
      require.resolve("./commands/verify-commit"),
      require.resolve("./commands/preview"),
      require.resolve("./commands/mfsu/mfsu"),
      require.resolve("@umijs/plugin-run")
    ].filter(Boolean)
  };
};
