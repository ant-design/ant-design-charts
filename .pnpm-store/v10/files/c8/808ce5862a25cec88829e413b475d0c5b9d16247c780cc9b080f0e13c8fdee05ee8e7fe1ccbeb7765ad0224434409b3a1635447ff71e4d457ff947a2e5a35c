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

// src/features/monorepo/redirect.ts
var redirect_exports = {};
__export(redirect_exports, {
  default: () => redirect_default
});
module.exports = __toCommonJS(redirect_exports);
var import_utils = require("@umijs/utils");
var import_pkg_up = require("@umijs/utils/compiled/pkg-up");
var import_assert = __toESM(require("assert"));
var import_fs = require("fs");
var import_path = require("path");
var import_get_packages = require("../../../compiled/@manypkg/get-packages");
var redirect_default = (api) => {
  api.describe({
    key: "monorepoRedirect",
    config: {
      schema({ zod }) {
        return zod.union([
          zod.boolean(),
          zod.object({
            srcDir: zod.array(zod.string()),
            exclude: zod.array(zod.instanceof(RegExp)),
            peerDeps: zod.boolean()
          }).deepPartial()
        ]);
      }
    },
    enableBy: api.EnableBy.config
  });
  api.modifyConfig(async (memo) => {
    const config = memo.monorepoRedirect || {};
    const {
      exclude = [],
      srcDir = ["src"],
      peerDeps = false,
      useRootProject = false
    } = config;
    const currentProjectRoot = process.env.APP_ROOT ? process.cwd() : api.cwd;
    const rootPkg = await (0, import_pkg_up.pkgUp)({
      // APP_ROOT: https://github.com/umijs/umi/issues/9461
      cwd: useRootProject ? currentProjectRoot : (0, import_path.dirname)(currentProjectRoot)
    });
    if (!rootPkg)
      return memo;
    const root = (0, import_path.dirname)(rootPkg);
    (0, import_assert.default)(
      (0, import_utils.isMonorepo)({ root }),
      `The 'monorepoRedirect' option can only be used in monorepo, you don't need configure.`
    );
    if ((0, import_utils.isLocalDev)()) {
      import_utils.logger.info(
        `[monorepoRedirect]: Auto excluded 'umi' package in local dev scene`
      );
      exclude.push(/^umi$/);
    }
    const usingDeps = collectPkgDeps(api.pkg).filter((name) => {
      return !exclude.some((reg) => reg.test(name));
    });
    if (!usingDeps.length)
      return memo;
    const projects = await collectAllProjects({ root });
    const alias = usingDeps.reduce((obj, name) => {
      const pkgInfo = projects[name];
      if (!pkgInfo) {
        return obj;
      }
      srcDir.some((dirName) => {
        const dirPath = (0, import_path.join)(pkgInfo.dir, dirName);
        if ((0, import_fs.existsSync)(dirPath) && (0, import_fs.statSync)(dirPath).isDirectory()) {
          obj[name] = dirPath;
          return true;
        }
      });
      return obj;
    }, {});
    const peerDepsAliasMap = {};
    if (peerDeps) {
      Object.entries(projects).forEach(([_name, pkgInfo]) => {
        var _a;
        const willResolveDeps = ((_a = pkgInfo.packageJson) == null ? void 0 : _a.peerDependencies) || {};
        Object.keys(willResolveDeps).forEach((depName) => {
          if (peerDepsAliasMap[depName]) {
            return;
          }
          if (projects[depName]) {
            return;
          }
          const resolved = tryResolveDep({
            name: depName,
            from: currentProjectRoot
          });
          if (resolved) {
            peerDepsAliasMap[depName] = resolved;
            return;
          }
          const resolvedFromOtherProject = tryResolveDep({
            name: depName,
            from: pkgInfo.dir
          });
          if (resolvedFromOtherProject) {
            peerDepsAliasMap[depName] = resolvedFromOtherProject;
          }
        });
        import_utils.logger.debug(
          `[monorepoRedirect]: resolved peer deps ${Object.keys(
            peerDepsAliasMap
          ).map((i) => import_utils.chalk.green(i)).join(", ")} from ${(0, import_path.basename)(pkgInfo.dir)}`
        );
      });
    }
    memo.alias = {
      ...memo.alias,
      ...peerDepsAliasMap,
      ...alias
    };
    return memo;
  });
};
var DEP_KEYS = ["devDependencies", "dependencies"];
function collectPkgDeps(pkg) {
  const deps = [];
  DEP_KEYS.forEach((type) => {
    deps.push(...Object.keys((pkg == null ? void 0 : pkg[type]) || {}));
  });
  return deps;
}
async function collectAllProjects(opts) {
  const workspaces = await (0, import_get_packages.getPackages)(opts.root);
  return workspaces.packages.reduce((obj, pkg) => {
    var _a;
    const name = (_a = pkg.packageJson) == null ? void 0 : _a.name;
    if (name) {
      obj[name] = pkg;
    }
    return obj;
  }, {});
}
function tryResolveDep(opts) {
  const { name, from } = opts;
  try {
    return (0, import_path.dirname)(
      import_utils.resolve.sync(`${name}/package.json`, {
        basedir: from
      })
    );
  } catch {
  }
}
