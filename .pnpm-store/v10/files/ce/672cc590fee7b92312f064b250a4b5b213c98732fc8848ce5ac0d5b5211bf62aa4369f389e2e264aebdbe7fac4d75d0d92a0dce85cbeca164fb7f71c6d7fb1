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

// src/assetParsers/utils.ts
var utils_exports = {};
__export(utils_exports, {
  createApiParser: () => createApiParser,
  createExposedClass: () => createExposedClass,
  createRemoteClass: () => createRemoteClass
});
module.exports = __toCommonJS(utils_exports);
var Comlink = __toESM(require("comlink"));
var import_node_adapter = __toESM(require("comlink/dist/umd/node-adapter"));
var import_plugin_utils = require("umi/plugin-utils");
var import_worker_threads = require("worker_threads");
var import_BaseParser = require("./BaseParser");
function createExposedClass(ClassConstructor, publicMethods = ["parse", "destroy", "patch"]) {
  let realInstance;
  const exposedClass = class {
    constructor(...params) {
      realInstance = new ClassConstructor(...params);
    }
  };
  publicMethods.forEach((method) => {
    Object.assign(exposedClass.prototype, {
      [method](...args) {
        return realInstance[method](...args);
      }
    });
  });
  return exposedClass;
}
function createRemoteClass(filename, ClassConstructor, opts = { destroyMethod: "destroy" }) {
  if (!import_worker_threads.isMainThread) {
    if (import_worker_threads.parentPort) {
      Comlink.expose(
        createExposedClass(ClassConstructor, opts.publicMethods),
        (0, import_node_adapter.default)(import_worker_threads.parentPort)
      );
    }
    return ClassConstructor;
  }
  const worker = new import_worker_threads.Worker(filename);
  const RemoteClass = Comlink.wrap((0, import_node_adapter.default)(worker));
  let pendingInstance;
  let instance = null;
  return class {
    constructor(...params) {
      pendingInstance = new RemoteClass(...params);
      return new Proxy(this, {
        get: (_, key) => {
          return async function(...args) {
            if (!instance) {
              instance = await pendingInstance;
            }
            const originalMethod = instance[key];
            if (import_plugin_utils.lodash.isFunction(originalMethod)) {
              const p = originalMethod.apply(instance, args);
              if (key === opts.destroyMethod) {
                return p.then(async () => {
                  await worker.terminate();
                });
              }
              return p;
            }
            return originalMethod;
          };
        }
      });
    }
  };
}
function createApiParser(options) {
  const { filename, worker, parseOptions } = options;
  const ParserClass = createRemoteClass(filename, worker);
  return (...args) => new import_BaseParser.BaseAtomAssetsParser({
    ...args == null ? void 0 : args[0],
    parser: new ParserClass(...args),
    ...parseOptions
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createApiParser,
  createExposedClass,
  createRemoteClass
});
