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

// src/runLoaders/parallelLoader.ts
var parallelLoader_exports = {};
__export(parallelLoader_exports, {
  createParallelLoader: () => createParallelLoader,
});
module.exports = __toCommonJS(parallelLoader_exports);
var import_os = __toESM(require('os'));
var import_piscina = require('piscina');
function createParallelLoader(renderPath) {
  return new import_piscina.Piscina({
    filename: renderPath,
    idleTimeout: 3e4,
    recordTiming: false,
    useAtomics: false,
    maxThreads:
      // when cpus is less than "4", the worker pool may lead to panic on linux
      import_os.default.platform() === 'linux'
        ? Math.max(import_os.default.cpus().length - 3, 1)
        : void 0,
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    createParallelLoader,
  });
