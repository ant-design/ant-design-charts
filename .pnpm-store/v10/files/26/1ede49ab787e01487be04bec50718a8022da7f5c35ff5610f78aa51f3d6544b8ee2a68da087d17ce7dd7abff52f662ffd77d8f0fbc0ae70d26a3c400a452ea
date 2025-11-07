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

// src/utils/fileSizeReporter.ts
var fileSizeReporter_exports = {};
__export(fileSizeReporter_exports, {
  measureFileSizesBeforeBuild: () => measureFileSizesBeforeBuild,
  printFileSizesAfterBuild: () => printFileSizesAfterBuild
});
module.exports = __toCommonJS(fileSizeReporter_exports);
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var gzipSize = import_utils.gzipSize.gzipSizeSync;
var WARN_GZIP_SIZE = 1024 * 1024;
function printFileSizesAfterBuild(opts) {
  var _a;
  const {
    webpackStats,
    previousSizeMap,
    buildFolder,
    suggestMaxSize = WARN_GZIP_SIZE
  } = opts;
  const { root, sizes } = previousSizeMap;
  const assets = (_a = webpackStats.toJson({ all: false, assets: true }).assets) == null ? void 0 : _a.filter((asset) => canReadAsset(asset.name)).map((asset) => {
    const content = import_fs.default.readFileSync(import_path.default.join(root, asset.name), {
      encoding: "utf-8"
    });
    const size = gzipSize(content);
    const key = removeFileNameHash(root, asset.name);
    const previousSize = sizes[key];
    const difference = getDifferenceLabel(size, previousSize);
    return {
      folder: import_path.default.join(import_path.default.basename(buildFolder), import_path.default.dirname(asset.name)),
      name: import_path.default.basename(asset.name),
      size,
      sizeLabel: import_utils.filesize.filesize(size) + (difference ? " (" + difference + ")" : "")
    };
  });
  if (!(assets == null ? void 0 : assets.length)) {
    return;
  }
  assets.sort((a, b) => b.size - a.size);
  const longestSizeLabelLength = Math.max(
    ...assets.map((a) => (0, import_utils.stripAnsi)(a.sizeLabel).length)
  );
  let suggestBundleSplitting = false;
  assets.forEach((asset) => {
    let sizeLabel = asset.sizeLabel;
    const sizeLength = (0, import_utils.stripAnsi)(sizeLabel).length;
    if (sizeLength < longestSizeLabelLength) {
      const rightPadding = " ".repeat(longestSizeLabelLength - sizeLength);
      sizeLabel += rightPadding;
    }
    const isLarge = asset.size > suggestMaxSize;
    if (isLarge && import_path.default.extname(asset.name) === ".js") {
      suggestBundleSplitting = true;
    }
    console.log(
      "  " + (isLarge ? import_utils.chalk.yellow(sizeLabel) : sizeLabel) + "  " + import_utils.chalk.dim(asset.folder + import_path.default.sep) + import_utils.chalk.cyan(asset.name)
    );
  });
  if (suggestBundleSplitting) {
    console.log();
    console.log(
      import_utils.chalk.yellow("The bundle size is significantly larger than recommended.")
    );
    console.log(
      import_utils.chalk.yellow("Consider reducing it with code splitting: "),
      import_utils.chalk.cyan("https://umijs.org/blog/code-splitting")
    );
    console.log(
      import_utils.chalk.yellow("You can also analyze the project dependencies: "),
      import_utils.chalk.cyan("https://umijs.org/docs/guides/env-variables#analyze")
    );
  }
  console.log();
}
var FIFTY_KILOBYTES = 1024 * 50;
function getDifferenceLabel(currentSize, previousSize) {
  const difference = currentSize - previousSize;
  const fileSize = !Number.isNaN(difference) ? import_utils.filesize.filesize(difference) : 0;
  if (difference >= FIFTY_KILOBYTES) {
    return import_utils.chalk.red("+" + fileSize);
  } else if (difference < FIFTY_KILOBYTES && difference > 0) {
    return import_utils.chalk.yellow("+" + fileSize);
  } else if (difference < 0) {
    return import_utils.chalk.green(fileSize);
  } else {
    return "";
  }
}
function recursive(dir) {
  const list = [];
  if (import_fs.default.existsSync(dir) && import_fs.default.statSync(dir).isDirectory()) {
    const files = import_fs.default.readdirSync(dir);
    files.forEach((file) => {
      const absPath = import_path.default.join(dir, file);
      if (import_fs.default.statSync(absPath).isDirectory()) {
        list.push(...recursive(absPath));
        return;
      }
      list.push(absPath);
    });
    return list;
  }
  return list;
}
function canReadAsset(file) {
  return /\.(js|css)$/.test(file) && !/service-worker\.js/.test(file) && !/precache-manifest\.[0-9a-f]+\.js/.test(file);
}
function removeFileNameHash(dir, fileName) {
  return fileName.replace(dir, "").replace(/\\/g, "/").replace(
    /\/?(.*)(\.[0-9a-f]+)(\.chunk)?(\.js|\.css)/,
    (_match, p1, _p2, _p3, p4) => p1 + p4
  ).replace(/^\//, "");
}
function measureFileSizesBeforeBuild(dir) {
  const fileNames = recursive(dir);
  const sizes = fileNames.filter(canReadAsset).reduce((memo, fileName) => {
    const content = import_fs.default.readFileSync(fileName, { encoding: "utf-8" });
    const key = removeFileNameHash(dir, fileName);
    memo[key] = gzipSize(content);
    return memo;
  }, {});
  return {
    root: dir,
    sizes
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  measureFileSizesBeforeBuild,
  printFileSizesAfterBuild
});
