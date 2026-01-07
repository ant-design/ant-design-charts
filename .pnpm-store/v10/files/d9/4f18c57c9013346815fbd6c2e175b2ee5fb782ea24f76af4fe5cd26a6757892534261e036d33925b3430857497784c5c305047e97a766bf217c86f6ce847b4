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

// src/features/icons/loadIcon.ts
var loadIcon_exports = {};
__export(loadIcon_exports, {
  loadIcon: () => loadIcon
});
module.exports = __toCommonJS(loadIcon_exports);
var import_modern = require("@iconify/utils/lib/loader/modern");
var import_utils = require("@umijs/utils");
var import_assert = __toESM(require("assert"));
var import_path = __toESM(require("path"));
async function loadIcon(collection, icon, opts) {
  const iconsPath = `@iconify-json/${collection}/icons.json`;
  function getIconPath() {
    let iconPath2;
    try {
      iconPath2 = import_utils.resolve.sync(iconsPath, {
        basedir: opts.cwd,
        paths: [import_path.default.join(__dirname, "../../../node_modules")]
      });
    } catch (e) {
    }
    return iconPath2;
  }
  if (!getIconPath()) {
    if (opts.autoInstall) {
      await opts.autoInstall(`@iconify-json/${collection}`);
    } else {
      throw new Error(
        `@iconify-json/${collection} is not found, and autoInstall is not specified.`
      );
    }
  }
  const iconPath = getIconPath();
  (0, import_assert.default)(iconPath, `@iconify-json/${collection} is not found.`);
  const iconSet = import_utils.fsExtra.readJSONSync(iconPath);
  const ids = [
    icon,
    icon.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    icon.replace(/([a-z])(\d+)/g, "$1-$2")
  ];
  const result = await (0, import_modern.searchForIcon)(
    iconSet,
    collection,
    ids,
    opts.iconifyLoaderOptions
  );
  if (!result) {
    import_utils.logger.error(
      `[icon] Icon ${icon} is not found in collection ${collection}.`
    );
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loadIcon
});
