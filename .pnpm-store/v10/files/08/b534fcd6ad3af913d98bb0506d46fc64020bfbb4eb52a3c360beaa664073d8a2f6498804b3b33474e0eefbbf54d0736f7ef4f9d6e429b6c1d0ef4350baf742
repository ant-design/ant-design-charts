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

// src/features/classPropertiesLoose/classPropertiesLoose.ts
var classPropertiesLoose_exports = {};
__export(classPropertiesLoose_exports, {
  default: () => classPropertiesLoose_default
});
module.exports = __toCommonJS(classPropertiesLoose_exports);
var classPropertiesLoose_default = (api) => {
  api.describe({
    key: "classPropertiesLoose",
    config: {
      schema({ zod }) {
        return zod.union([zod.boolean(), zod.object({})]).describe(
          "设置 babel class-properties 启用 loose \n @doc https://umijs.org/docs/api/config#classpropertiesloose"
        );
      }
    },
    enableBy: api.EnableBy.config
  });
  api.modifyBabelPresetOpts((memo) => {
    memo.classPropertiesLoose = {};
    return memo;
  });
};
