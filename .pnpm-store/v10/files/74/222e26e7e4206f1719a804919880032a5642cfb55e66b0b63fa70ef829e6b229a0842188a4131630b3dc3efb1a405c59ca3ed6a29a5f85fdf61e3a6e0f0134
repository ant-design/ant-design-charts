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

// src/checker.ts
var checker_exports = {};
__export(checker_exports, {
  check: () => check,
});
module.exports = __toCommonJS(checker_exports);
var import_fs = __toESM(require('fs'));
var import_path = __toESM(require('path'));
var import_chalk = __toESM(require('chalk'));
var import_semver = __toESM(require('semver'));
var BLACKLIST_PACKAGES = {
  'pdfjs-dist': {
    version: '<3.0.0',
    message:
      '`pdfjs-dist@2` is not supported, please use `pdfjs-dist@3` or above instead.',
  },
  'monaco-editor': {
    version: '*',
    message:
      '`monaco-editor` is not supported, please use `@monaco-editor/react` instead.',
  },
};
function check(root) {
  let pkgPath = import_path.default.join(root, 'package.json');
  if (import_fs.default.existsSync(pkgPath)) {
    let pkg = require(pkgPath);
    let bPkgs = Object.keys(BLACKLIST_PACKAGES);
    for (let name of bPkgs) {
      if (!depExists(pkg, name)) continue;
      let version = getDepVersion(root, name);
      if (
        version &&
        import_semver.default.satisfies(
          version,
          BLACKLIST_PACKAGES[name].version,
        )
      ) {
        console.error(
          import_chalk.default.red(
            `Error: ${BLACKLIST_PACKAGES[name].message}`,
          ),
        );
        process.exit(1);
      }
    }
  }
}
function depExists(pkg, name) {
  var _a, _b;
  return (
    ((_a = pkg.dependencies) == null ? void 0 : _a[name]) ||
    ((_b = pkg.devDependencies) == null ? void 0 : _b[name])
  );
}
function getDepVersion(root, name) {
  let pkgPath = import_path.default.join(
    root,
    'node_modules',
    name,
    'package.json',
  );
  if (import_fs.default.existsSync(pkgPath)) {
    let pkg = require(pkgPath);
    return pkg.version;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    check,
  });
