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

// src/features/helmet/helmet.ts
var helmet_exports = {};
__export(helmet_exports, {
  default: () => helmet_default
});
module.exports = __toCommonJS(helmet_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var helmet_default = (api) => {
  api.describe({
    config: {
      schema: ({ zod }) => zod.boolean()
    }
  });
  api.onGenerateFiles(() => {
    if (api.appData.framework === "react") {
      api.writeTmpFile({
        noPluginDir: true,
        path: "core/helmet.ts",
        content: `import React from 'react';
import { HelmetProvider } from '${(0, import_utils.winPath)(
          (0, import_path.dirname)(require.resolve("@umijs/renderer-react/package"))
        )}';
import { context } from './helmetContext';

export const innerProvider = (container) => {
  return React.createElement(HelmetProvider, { context }, container);
}`
      });
      api.writeTmpFile({
        noPluginDir: true,
        path: "core/helmetContext.ts",
        content: `export const context = {};`
      });
    }
  });
  api.addRuntimePlugin(
    () => api.appData.framework === "react" ? ["@@/core/helmet.ts"] : []
  );
};
