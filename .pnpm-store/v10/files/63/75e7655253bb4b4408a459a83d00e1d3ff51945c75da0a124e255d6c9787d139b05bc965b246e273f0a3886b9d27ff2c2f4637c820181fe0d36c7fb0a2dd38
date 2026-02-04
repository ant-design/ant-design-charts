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

// src/commands/generators/mock.ts
var mock_exports = {};
__export(mock_exports, {
  default: () => mock_default
});
module.exports = __toCommonJS(mock_exports);
var import_core = require("@umijs/core");
var import_path = require("path");
var import_constants = require("../../constants");
var import_utils = require("./utils");
var mock_default = (api) => {
  api.describe({
    key: "generator:mock"
  });
  api.registerGenerator({
    key: "mock",
    type: import_core.GeneratorType.generate,
    name: "Generate mock",
    description: "Generate mock boilerplate code",
    fn: async (opts) => {
      let [_, mockName] = opts.args._;
      const h = new import_utils.GeneratorHelper(api);
      mockName = await h.ensureVariableWithQuestion(mockName, {
        type: "text",
        message: "please input your mock file name",
        initial: "mockName",
        format: import_utils.trim
      });
      opts.generateFile({
        target: (0, import_path.join)(api.paths.cwd, "mock", `${mockName}.ts`),
        baseDir: api.paths.cwd,
        path: (0, import_path.join)(import_constants.TEMPLATES_DIR, "generate/mock.ts.tpl"),
        data: { mockName }
      });
    }
  });
};
