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

// src/plugins/less/index.ts
var less_exports = {};
__export(less_exports, {
  LessPlugin: () => LessPlugin,
});
module.exports = __toCommonJS(less_exports);
var import_path = __toESM(require('path'));
var import_url = __toESM(require('url'));
var import_runLoaders = require('../../runLoaders');
var LessPlugin = class {
  constructor(params) {
    this.moduleGraph = /* @__PURE__ */ new Map();
    this.__isPatched = true;
    // @ts-ignore
    this.load = async (_ctx, filePath) => {
      var _a, _b;
      if (!isTargetFile(filePath)) {
        return;
      }
      const filename = getFilename(filePath);
      let module2 = this.moduleGraph.get(filename);
      if (!module2) {
        module2 = {
          id: filename,
          deps: /* @__PURE__ */ new Set(),
          missing_deps: /* @__PURE__ */ new Set(),
          ancestors: /* @__PURE__ */ new Set(),
        };
        this.moduleGraph.set(filename, module2);
      }
      this.parallelLoader ||
        (this.parallelLoader = (0, import_runLoaders.createParallelLoader)(
          import_path.default.resolve(__dirname, './render.js'),
        ));
      const result = await this.parallelLoader.run({
        filename,
        opts: this.lessOptions,
        extOpts: this.extOpts,
      });
      let content = '';
      if (result.result) {
        const buf = result.result[0];
        if (Buffer.isBuffer(buf)) {
          content = buf.toString('utf-8');
        } else {
          content = buf ?? '';
        }
      }
      if ((_a = result.fileDependencies) == null ? void 0 : _a.length) {
        const deps = new Set(
          result.fileDependencies.filter((dep) => dep !== filename),
        );
        for (const dep of deps) {
          let depModule = this.moduleGraph.get(dep);
          if (!depModule) {
            depModule = {
              id: dep,
              deps: /* @__PURE__ */ new Set(),
              missing_deps: /* @__PURE__ */ new Set(),
              ancestors: /* @__PURE__ */ new Set(),
            };
            this.moduleGraph.set(dep, depModule);
          }
          module2.deps.add(depModule);
          depModule.ancestors.add(module2);
        }
      }
      if ((_b = result.missingDependencies) == null ? void 0 : _b.length) {
        const missingDeps = new Set(result.missingDependencies);
        for (const dep of missingDeps) {
          let depModule = this.moduleGraph.get(dep);
          if (!depModule) {
            depModule = {
              id: dep,
              deps: /* @__PURE__ */ new Set(),
              missing_deps: /* @__PURE__ */ new Set(),
              ancestors: /* @__PURE__ */ new Set(),
            };
            this.moduleGraph.set(dep, depModule);
          }
          module2.missing_deps.add(depModule);
          depModule.ancestors.add(module2);
        }
      }
      return {
        content,
        type: 'css',
      };
    };
    // @ts-ignore
    this.beforeRebuild = async (_ctx, paths) => {
      const result = /* @__PURE__ */ new Set();
      paths.forEach((filePath) => {
        if (!isTargetFile(filePath)) {
          result.add(filePath);
          return;
        }
        const filename = getFilename(filePath);
        const module2 = this.moduleGraph.get(filename);
        if (!module2 || module2.ancestors.size === 0) {
          result.add(filePath);
          return;
        }
        module2.ancestors.forEach((ancestor) => {
          result.add(ancestor.id);
        });
      });
      return Array.from(result);
    };
    this.generateEnd = () => {
      var _a;
      if (!this.params.watch) {
        (_a = this.parallelLoader) == null ? void 0 : _a.destroy();
        this.parallelLoader = void 0;
      }
    };
    var _a, _b, _c, _d, _e;
    this.name = 'less';
    this.params = params;
    this.extOpts = {
      alias: params.resolveAlias,
      root: params.root,
    };
    this.lessOptions = {
      modifyVars:
        ((_a = params.config.less) == null ? void 0 : _a.modifyVars) || {},
      globalVars: (_b = params.config.less) == null ? void 0 : _b.globalVars,
      math: (_c = params.config.less) == null ? void 0 : _c.math,
      sourceMap:
        ((_d = params.config.less) == null ? void 0 : _d.sourceMap) || false,
      plugins: ((_e = params.config.less) == null ? void 0 : _e.plugins) || [],
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
  if (filename == null ? void 0 : filename.endsWith('.less')) {
    return true;
  }
  return false;
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    LessPlugin,
  });
