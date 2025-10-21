var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/favicons/favicons.ts
var favicons_exports = {};
__export(favicons_exports, {
  default: () => favicons_default
});
module.exports = __toCommonJS(favicons_exports);
var import_fs = require("fs");
var import_path = require("path");
var FAVICON_FILES = [
  "favicon.ico",
  "favicon.gif",
  "favicon.png",
  "favicon.jpg",
  "favicon.jpeg",
  "favicon.svg",
  "favicon.avif",
  "favicon.webp"
];
function getFaviconFiles(p) {
  return FAVICON_FILES.filter((f) => (0, import_fs.existsSync)((0, import_path.join)(p, f)));
}
var favicons_default = (api) => {
  api.describe({
    config: {
      schema: ({ zod }) => zod.array(zod.string())
    }
  });
  api.modifyAppData(async (memo) => {
    if (api.config.favicons)
      return memo;
    const faviconFiles = getFaviconFiles(api.paths.absSrcPath);
    if (faviconFiles) {
      memo.faviconFiles = faviconFiles;
    }
    return memo;
  });
  api.addBeforeMiddlewares(() => [
    (req, res, next) => {
      const iconFile = (api.appData.faviconFiles || []).find(
        (file) => req.path === `${api.config.publicPath}${file}`
      );
      if (!iconFile) {
        next();
      } else {
        res.sendFile((0, import_path.join)(api.paths.absSrcPath, iconFile));
      }
    }
  ]);
  api.onBuildComplete(({ err }) => {
    if (err)
      return;
    if (api.appData.faviconFiles) {
      api.appData.faviconFiles.forEach((e) => {
        (0, import_fs.copyFileSync)(
          (0, import_path.join)(api.paths.absSrcPath, e),
          (0, import_path.join)(api.paths.absOutputPath, e)
        );
      });
    }
  });
  api.modifyHTMLFavicon((memo) => {
    if (!memo.length && api.appData.faviconFiles) {
      api.appData.faviconFiles.forEach((e) => {
        memo.push(`${api.config.publicPath}${e}`);
      });
    }
    return memo;
  });
};
