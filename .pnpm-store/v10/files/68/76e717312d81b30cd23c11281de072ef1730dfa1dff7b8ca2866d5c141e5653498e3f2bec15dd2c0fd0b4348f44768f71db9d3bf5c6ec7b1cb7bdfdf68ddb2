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

// src/features/esmi/esbuildPlugins/topLevelExternal.ts
var topLevelExternal_exports = {};
__export(topLevelExternal_exports, {
  default: () => topLevelExternal
});
module.exports = __toCommonJS(topLevelExternal_exports);
function topLevelExternal({
  exclude,
  resolver
}) {
  const regSafeExclude = exclude.map(
    (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const subImportRegExp = new RegExp(`^(${regSafeExclude.join("|")})/`);
  const extRegExp = /\.((?<!d)\.ts|jsx?|tsx)$/;
  return {
    name: "preset-umi:esmi-top-level-external",
    setup(build) {
      build.onResolve(
        {
          filter: subImportRegExp
        },
        async (args) => {
          const resolved = await resolver.resolve(args.resolveDir, args.path);
          if (extRegExp.test(resolved)) {
            return { path: resolved };
          }
        }
      );
    }
  };
}
