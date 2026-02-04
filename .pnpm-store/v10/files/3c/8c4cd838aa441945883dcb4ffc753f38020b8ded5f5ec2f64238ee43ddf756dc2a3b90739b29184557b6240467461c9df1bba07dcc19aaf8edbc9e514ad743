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

// src/features/depsOnDemand/depsOnDemand.ts
var depsOnDemand_exports = {};
__export(depsOnDemand_exports, {
  addDeps: () => addDeps,
  default: () => depsOnDemand_default
});
module.exports = __toCommonJS(depsOnDemand_exports);
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var depsOnDemand_default = (api) => {
  api.onStart(async () => {
    const deps = import_utils.lodash.uniqBy(
      await api.applyPlugins({
        key: "addOnDemandDeps",
        initialValue: []
      }),
      (dep) => {
        return dep.name;
      }
    );
    const { missingDeps } = checkDeps({ deps });
    if (missingDeps.length) {
      const hasReason = missingDeps.some((dep) => dep.reason);
      const loggerText = [
        `Install dependencies ${missingDeps.map(({ name }) => import_utils.chalk.green(name)).join(", ")} on demand.`,
        ...hasReason ? [
          `        ${import_utils.chalk.bold.bgBlue(" REASONS ")}`,
          ...missingDeps.filter((dep) => dep.reason).map(
            (dep) => `         · ${import_utils.chalk.cyan(dep.name)}${dep.outdated ? import_utils.chalk.gray("(outdated)") : ""}: ${dep.reason}`
          )
        ] : []
      ].join("\n");
      import_utils.logger.info(loggerText);
      addDeps({
        pkgPath: api.pkgPath || (0, import_path.join)(api.cwd, "package.json"),
        deps: missingDeps
      });
      (0, import_utils.installWithNpmClient)({
        npmClient: api.appData.npmClient,
        cwd: api.cwd
      });
    }
  });
  function checkDeps(opts) {
    const missingDeps = [];
    const { deps } = opts;
    deps.forEach((dep) => {
      var _a, _b;
      const { name } = dep;
      const installed = ((_a = api.pkg.dependencies) == null ? void 0 : _a[name]) || ((_b = api.pkg.devDependencies) == null ? void 0 : _b[name]);
      if (!installed) {
        missingDeps.push(dep);
      } else {
        const userVersion = import_utils.semver.minVersion(installed);
        const isOutdated = !userVersion || import_utils.semver.ltr(userVersion, dep.version);
        if (isOutdated) {
          missingDeps.push({
            ...dep,
            outdated: true
          });
        }
      }
    });
    return {
      missingDeps
    };
  }
};
function addDeps(opts) {
  const { pkgPath, deps } = opts;
  const pkg = (0, import_fs.existsSync)(pkgPath) ? import_utils.fsExtra.readJSONSync(pkgPath) : {};
  const [devDependencies, dependencies] = [
    deps.filter((dep) => dep.dev !== false),
    deps.filter((dep) => dep.dev === false)
  ];
  if (devDependencies.length) {
    pkg.devDependencies || (pkg.devDependencies = {});
    devDependencies.forEach((dep) => {
      pkg.devDependencies[dep.name] = dep.version;
    });
  }
  if (dependencies.length) {
    pkg.dependencies || (pkg.dependencies = {});
    dependencies.forEach((dep) => {
      pkg.dependencies[dep.name] = dep.version;
    });
  }
  import_utils.fsExtra.writeFileSync(
    opts.pkgPath,
    `${JSON.stringify(pkg, null, 2)}
`,
    "utf-8"
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDeps
});
