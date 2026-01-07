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

// src/features/stagewise/stagewise.ts
var stagewise_exports = {};
__export(stagewise_exports, {
  default: () => stagewise_default
});
module.exports = __toCommonJS(stagewise_exports);
var import_path = __toESM(require("path"));
var stagewise_default = (api) => {
  api.describe({
    key: "stagewise",
    config: {
      schema(zod) {
        return zod.any();
      }
    },
    enableBy: api.EnableBy.config
  });
  api.onGenerateFiles(() => {
    const stagewiseToolbarPath = import_path.default.join(
      import_path.default.dirname(require.resolve("@stagewise/toolbar")),
      ".."
    );
    api.writeTmpFile({
      path: "stagewise.ts",
      content: `
import { initToolbar } from '${stagewiseToolbarPath}';
const stagewiseConfig = ${JSON.stringify(api.config.stagewise, null, 2)};
function setupStagewise() {
  // Only initialize once and only in development mode
  if (process.env.NODE_ENV === 'development') {
    initToolbar(stagewiseConfig);
  }
}
setupStagewise();
      `
    });
  });
  api.addEntryImports(() => {
    if (api.name !== "dev" && api.name !== "setup") {
      return [];
    }
    return [{ source: "@@/plugin-stagewise/stagewise.ts" }];
  });
};
