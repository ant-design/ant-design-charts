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

// src/features/check/babel722.ts
var babel722_exports = {};
__export(babel722_exports, {
  default: () => babel722_default
});
module.exports = __toCommonJS(babel722_exports);
var import_utils = require("@umijs/utils");
var DEPRECATED_DEPS = [
  "unicode-sets-regex",
  "class-static-block",
  "private-property-in-object",
  "class-properties",
  "private-methods",
  "numeric-separator",
  "logical-assignment-operators",
  "nullish-coalescing-operator",
  "optional-chaining",
  "export-namespace-from",
  "json-strings",
  "optional-catch-binding",
  "async-generator-functions",
  "object-rest-spread",
  "unicode-property-regex"
];
var BABEL_PROPOSAL_PREFIX = "@babel/plugin-proposal-";
var BABEL_TRANSFORM_PREFIX = "@babel/plugin-transform-";
var babel722_default = (api) => {
  api.onCheck(() => {
    const pkg = api.pkg;
    const breakingDeps = DEPRECATED_DEPS.map(
      (i) => `${BABEL_PROPOSAL_PREFIX}${i}`
    );
    const deps = Object.keys({
      ...(pkg == null ? void 0 : pkg.dependencies) || {},
      ...(pkg == null ? void 0 : pkg.devDependencies) || {}
    });
    const willBreakingDeps = deps.filter((i) => breakingDeps.includes(i));
    if (willBreakingDeps.length) {
      const tips = [
        ...willBreakingDeps.map((dep) => {
          const oldName = import_utils.chalk.yellow(dep);
          const newName = import_utils.chalk.green(
            `${BABEL_TRANSFORM_PREFIX}${dep.replace(
              BABEL_PROPOSAL_PREFIX,
              ""
            )}`
          );
          return ` - ${oldName} -> ${newName}`;
        })
      ];
      console.log(`
  ${import_utils.chalk.bold.yellow("Babel Deprecation Warning")}

  Babel >= 7.22.0 will remove the following plugins:
  ${tips.join("\n")}
  Please use the ${import_utils.chalk.bold.green(
        BABEL_TRANSFORM_PREFIX
      )} prefix instead of ${import_utils.chalk.bold.yellow(
        BABEL_PROPOSAL_PREFIX
      )} prefix and ${import_utils.chalk.blue("update your dependencies and config file")}.
  Refer: https://babeljs.io/blog/2023/05/26/7.22.0#renamed-packages
`);
    }
  });
};
