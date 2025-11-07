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
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj)) throw TypeError('Cannot ' + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, 'read from private field');
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError('Cannot add the same private member more than once');
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, 'write to private field');
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/forkTSChecker/index.ts
var forkTSChecker_exports = {};
__export(forkTSChecker_exports, {
  ForkTSChecker: () => ForkTSChecker,
});
module.exports = __toCommonJS(forkTSChecker_exports);
var import_child_process = require('child_process');
var import_path = __toESM(require('path'));
var _opts;
var ForkTSChecker = class {
  constructor(opts) {
    __privateAdd(this, _opts, void 0);
    __privateSet(this, _opts, opts);
  }
  runTypeCheckInChildProcess() {
    const workerScript = import_path.default.join(
      __dirname,
      'childProcessFork.js',
    );
    const child = (0, import_child_process.fork)(
      workerScript,
      [__privateGet(this, _opts).root],
      {
        stdio: 'inherit',
      },
    );
    child.on('exit', (code) => {
      if (code === 1) {
        console.error('Type checking failed.');
        if (!__privateGet(this, _opts).watch) {
          process.exit(1);
        }
      }
    });
  }
};
_opts = new WeakMap();
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    ForkTSChecker,
  });
