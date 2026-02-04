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
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/plugins/postcss/index.ts
var postcss_exports = {};
__export(postcss_exports, {
  PostcssPlugin: () => PostcssPlugin,
});
module.exports = __toCommonJS(postcss_exports);
var import_path = __toESM(require('path'));
var import_url = __toESM(require('url'));
var import_runLoaders = require('../../runLoaders');
var PostcssPlugin = class {
  constructor(params) {
    this.__isPatched = true;
    // @ts-ignore
    this.transform = async (_ctx, content, filename) => {
      if (!isTargetFile(filename)) {
        return;
      }
      this.parallelLoader ||
        (this.parallelLoader = (0, import_runLoaders.createParallelLoader)(
          import_path.default.resolve(__dirname, './render.js'),
        ));
      const result = await this.parallelLoader.run({
        filename,
        content,
        extOpts: this.extOpts,
      });
      let css = '';
      if (result.result) {
        const buf = result.result[0];
        if (Buffer.isBuffer(buf)) {
          css = buf.toString('utf-8');
        } else {
          css = buf ?? '';
        }
      }
      return {
        content: css,
        type: 'css',
      };
    };
    this.name = 'postcss';
    this.params = params;
    this.extOpts = {
      alias: params.resolveAlias,
      root: params.root,
    };
  }
};
function getFilename(filePath) {
  let filename = '';
  try {
    filename = decodeURIComponent(
      import_url.default.parse(filePath).pathname || '',
    );
  } catch (e) {
    return '';
  }
  return filename;
}
function isTargetFile(filePath) {
  let filename = getFilename(filePath);
  if (
    (filename == null ? void 0 : filename.endsWith('.css')) ||
    (filename == null ? void 0 : filename.endsWith('.less')) ||
    (filename == null ? void 0 : filename.endsWith('.scss'))
  ) {
    return true;
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    PostcssPlugin,
  });
