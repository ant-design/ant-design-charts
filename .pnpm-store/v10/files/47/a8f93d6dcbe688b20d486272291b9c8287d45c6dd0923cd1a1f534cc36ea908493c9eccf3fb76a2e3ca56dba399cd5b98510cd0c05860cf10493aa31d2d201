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

// src/features/tmpFiles/configTypes.ts
var configTypes_exports = {};
__export(configTypes_exports, {
  default: () => configTypes_default
});
module.exports = __toCommonJS(configTypes_exports);
var import_utils = require("@umijs/utils");
var import_joi = __toESM(require("@umijs/utils/compiled/@hapi/joi"));
var import_zod = require("@umijs/utils/compiled/zod");
var import_zod2ts = require("@umijs/zod2ts");
var FILTER_KEYS = ["chainWebpack"];
var configTypes_default = (api) => {
  api.onGenerateFiles(async () => {
    const { service } = api;
    let properties = {};
    let zodProperties = {};
    Object.keys(service.configSchemas).forEach((key) => {
      if (FILTER_KEYS.includes(key)) {
        return;
      }
      const schemaFn = service.configSchemas[key];
      if (typeof schemaFn !== "function") {
        return;
      }
      const schema = schemaFn({ ...import_joi.default, zod: import_zod.z });
      if (import_joi.default.isSchema(schema)) {
        properties[key] = schema;
      } else if ((0, import_utils.isZodSchema)(schema)) {
        zodProperties[key] = schema;
      }
    });
    const interfaceName = "IConfigFromPluginsJoi";
    const joi2Types = require("../../../compiled/joi2types").default;
    const content = await joi2Types(import_joi.default.object(properties), {
      interfaceName,
      bannerComment: "// Created by Umi Plugin",
      unknownAny: true
    }).catch((err) => {
      api.logger.error("Config types generated error", err);
      return Promise.resolve(`export interface ${interfaceName} {}`);
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: `core/pluginConfigJoi.d.ts`,
      content
    });
    const typeName = `IConfigTypes`;
    const typeString = (0, import_zod2ts.zodToTs)({
      zod: import_zod.z.object(zodProperties),
      identifier: typeName
    }).replace(
      // replace to support routes circular reference type
      `routes?: (any | undefined)`,
      `routes?: ${typeName}['routes']`
    );
    const typeContent = `
import { ${interfaceName} } from "./pluginConfigJoi.d";

interface ${typeName} ${typeString};

type PrettifyWithCloseable<T> = {
  [K in keyof T]: T[K] | false;
} & {};

export type IConfigFromPlugins = PrettifyWithCloseable<
  ${interfaceName} & Partial<${typeName}>
>;
    `;
    api.writeTmpFile({
      noPluginDir: true,
      path: "core/pluginConfig.ts",
      content: typeContent
    });
  });
};
