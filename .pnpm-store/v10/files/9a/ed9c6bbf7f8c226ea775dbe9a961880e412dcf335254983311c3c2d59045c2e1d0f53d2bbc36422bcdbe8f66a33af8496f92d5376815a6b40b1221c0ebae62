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

// src/features/clickToComponent/clickToComponent.ts
var clickToComponent_exports = {};
__export(clickToComponent_exports, {
  default: () => clickToComponent_default
});
module.exports = __toCommonJS(clickToComponent_exports);
var import_utils = require("@umijs/utils");
var import_path = require("path");
var clickToComponent_default = (api) => {
  api.describe({
    key: "clickToComponent",
    config: {
      schema({ zod }) {
        return zod.object({
          editor: zod.string().describe(
            "默认情况下，点击将默认编辑器为vscode, 你可以设置编辑器 vscode 或者 vscode-insiders"
          ).optional()
        });
      }
    },
    enableBy: api.env === "development" ? api.EnableBy.config : () => false
  });
  api.modifyConfig((memo) => {
    const pkgPath = (0, import_path.dirname)(require.resolve("click-to-react-component"));
    memo.alias["click-to-react-component"] = pkgPath;
    return memo;
  });
  api.modifyAppData((memo) => {
    const pkgPath = (0, import_path.dirname)(require.resolve("click-to-react-component"));
    memo.clickToComponent = {
      pkgPath,
      version: "1.0.8"
    };
    return memo;
  });
  api.onGenerateFiles({
    name: "clickToComponent",
    fn: () => {
      api.writeTmpFile({
        path: "runtime.tsx",
        content: `
import { ClickToComponent } from 'click-to-react-component';
import React from 'react';

const pathModifier = (path) => {
  return path.startsWith('${api.paths.cwd}') ? path : '${api.paths.cwd}/' + path;
}

export function rootContainer(container, opts) {
  return React.createElement(
    (props) => {
      return (
        <>
          <ClickToComponent editor="${api.config.clickToComponent.editor || "vscode"}" pathModifier={pathModifier} />
          {props.children}
        </>
      );
    },
    opts,
    container,
  );
}
    `
      });
    }
  });
  api.addRuntimePlugin(() => [
    (0, import_utils.winPath)((0, import_path.join)(api.paths.absTmpPath, "plugin-clickToComponent/runtime.tsx"))
  ]);
};
