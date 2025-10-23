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

// src/features/esmi/esbuildPlugins/requireToImport.ts
var requireToImport_exports = {};
__export(requireToImport_exports, {
  default: () => requireToImportPlugin
});
module.exports = __toCommonJS(requireToImport_exports);
var import_lodash = require("@umijs/utils/compiled/lodash");
function requireToImportPlugin({
  exclude
}) {
  const regSafeExclude = exclude.map(
    (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const requireRegExp = new RegExp(`^(${regSafeExclude.join("|")})$`);
  return {
    name: "preset-umi:esmi-require-to-import",
    setup(build) {
      build.onResolve(
        {
          filter: requireRegExp
        },
        async (args) => {
          if (args.kind === "require-call") {
            return {
              path: args.path,
              namespace: "esmi-require-to-import",
              pluginData: {
                resolveDir: args.resolveDir
              }
            };
          }
        }
      );
      build.onLoad(
        {
          filter: /.*/,
          namespace: "esmi-require-to-import"
        },
        (args) => {
          const { resolveDir } = args.pluginData || {};
          const packageName = args.path;
          const starSpecifier = `${(0, import_lodash.camelCase)(packageName)}Star`;
          const defaultSpecifier = `${(0, import_lodash.camelCase)(packageName)}Default`;
          return {
            resolveDir,
            contents: [
              `import * as ${starSpecifier} from '${packageName}';`,
              "",
              `const ${defaultSpecifier} = ${starSpecifier}.default ? ${starSpecifier}.default : ${starSpecifier};`,
              "",
              `export default ${defaultSpecifier};`,
              `export * from '${packageName}';`,
              ""
            ].join("\n")
          };
        }
      );
    }
  };
}
