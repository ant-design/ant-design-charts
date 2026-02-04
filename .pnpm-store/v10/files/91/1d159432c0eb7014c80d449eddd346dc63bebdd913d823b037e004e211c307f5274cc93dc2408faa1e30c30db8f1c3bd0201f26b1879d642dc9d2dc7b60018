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
var __reExport = (target, mod, secondTarget) => (
  __copyProps(target, mod, 'default'),
  secondTarget && __copyProps(secondTarget, mod, 'default')
);
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

// src/runLoaders/index.ts
var runLoaders_exports = {};
__export(runLoaders_exports, {
  runLoaders: () => runLoaders2,
});
module.exports = __toCommonJS(runLoaders_exports);
var import_fs = __toESM(require('fs'));
var EnhancedResolve = __toESM(require('enhanced-resolve'));
var loaderRunner = __toESM(require('loader-runner'));
var loaderUtils = __toESM(require('loader-utils'));
__reExport(runLoaders_exports, require('./parallelLoader'), module.exports);
var fileSystem = new EnhancedResolve.CachedInputFileSystem(
  import_fs.default,
  60 * 1e3,
);
function createLoaderContext(options) {
  const defaultResolverOptions = {
    fileSystem,
    alias: options.alias,
  };
  const defaultResolver = EnhancedResolve.ResolverFactory.createResolver(
    defaultResolverOptions,
  );
  const ctx = {
    version: 2,
    rootContext: options.root,
    fs: fileSystem,
    getOptions() {
      const query = this.query;
      if (typeof query === 'string' && query !== '') {
        return loaderUtils.parseQuery(query);
      }
      if (!query || typeof query !== 'object') {
        return {};
      }
      return query;
    },
    resolve(context, request, callback) {
      defaultResolver.resolve({}, context, request, {}, callback);
    },
    getResolve(options2) {
      const resolver = options2
        ? EnhancedResolve.ResolverFactory.createResolver({
            ...defaultResolverOptions,
            ...options2,
          })
        : defaultResolver;
      return (context, request, callback) => {
        if (callback) {
          resolver.resolve({}, context, request, {}, callback);
        } else {
          return new Promise((resolve, reject) => {
            resolver.resolve({}, context, request, {}, (err, result) => {
              if (err) reject(err);
              else resolve(result);
            });
          });
        }
      };
    },
    target: 'web',
    getLogger() {
      return console;
    },
    addBuildDependency(_file) {},
  };
  return ctx;
}
function runLoaders2(options) {
  return new Promise((resolve, reject) => {
    loaderRunner.runLoaders(
      {
        resource: options.resource,
        readResource: import_fs.default.readFile.bind(import_fs.default),
        context: createLoaderContext({
          root: options.root,
          alias: options.alias,
        }),
        loaders: options.loaders,
        // @ts-ignore
        processResource: options.processResource,
      },
      (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      },
    );
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    runLoaders,
    ...require('./parallelLoader'),
  });
