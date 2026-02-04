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

// src/commands/generators/api.ts
var api_exports = {};
__export(api_exports, {
  default: () => api_default,
  generateApiResKV: () => generateApiResKV
});
module.exports = __toCommonJS(api_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_constants = require("../../constants");
var import_utils2 = require("./utils");
var api_default = (api) => {
  api.describe({
    key: "generator:api"
  });
  api.registerGenerator({
    key: "api",
    name: "Generator api",
    description: "Generate api route boilerplate code",
    type: import_core.GeneratorType.generate,
    async fn(opts) {
      const h = new import_utils2.GeneratorHelper(api);
      let [_, ...apiNames] = opts.args._;
      if (apiNames.length === 0) {
        let apiName = await h.ensureVariableWithQuestion(null, {
          type: "text",
          message: "please input your api name:",
          initial: "foo",
          format: import_utils2.trim
        });
        apiNames = [apiName];
      }
      for (const apiName of apiNames) {
        const apiFileName = `${apiName}.ts`;
        const base = (0, import_path.join)(api.paths.absSrcPath, "api");
        const target = (0, import_path.join)(base, apiFileName);
        const kv = generateApiResKV(apiName);
        await opts.generateFile({
          target,
          path: API_TML,
          baseDir: api.paths.absSrcPath,
          data: kv
        });
      }
    }
  });
};
var API_TML = (0, import_path.join)(import_constants.TEMPLATES_DIR, "generate/api.ts.tpl");
function generateApiResKV(apiName) {
  const { name, dir } = (0, import_path.parse)(apiName);
  const match = name.match(/^\[\s*(\w+)\s*\]$/);
  const quoteStr = JSON.stringify;
  if (!match) {
    return { key: quoteStr(name), value: quoteStr("is working") };
  }
  const paramName = match[1];
  const { name: itemName } = (0, import_path.parse)(dir);
  const key = itemName ? `${itemName}${import_utils.lodash.upperFirst(paramName)}` : paramName;
  return { key: quoteStr(key), value: `req.params[${quoteStr(paramName)}]` };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateApiResKV
});
