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

// src/commands/generators/dva.ts
var dva_exports = {};
__export(dva_exports, {
  default: () => dva_default
});
module.exports = __toCommonJS(dva_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_path = require("path");
var import_utils2 = require("./utils");
var dva_default = (api) => {
  api.describe({
    key: "generator:dva"
  });
  api.registerGenerator({
    key: "dva",
    name: "Enable Dva",
    description: "Configuration, Dependencies, and Model Files for Dva",
    type: import_core.GeneratorType.enable,
    checkEnable: () => {
      return !api.config.dva;
    },
    disabledDescription: () => `dva has been enabled; you can remove \`dva\` field in ${api.appData.mainConfigFile} then run this again to re-setup.`,
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      h.addDevDeps({
        "@umijs/plugins": (0, import_utils2.getUmiJsPlugin)()
      });
      h.setUmirc("dva", {});
      h.appendInternalPlugin("@umijs/plugins/dist/dva");
      import_utils.logger.info("Update config file");
      const modelsPath = (0, import_path.join)(api.paths.absSrcPath, "models");
      import_utils.fsExtra.outputFileSync(
        (0, import_path.join)(modelsPath, "count.ts"),
        `
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default {
  namespace: 'count',
  state: {
    num: 0,
  },
  reducers: {
    add(state: any) {
      state.num += 1;
    },
  },
  effects: {
    *addAsync(_action: any, { put }: any) {
      yield delay(1000);
      yield put({ type: 'add' });
    },
  },
};
        `
      );
      import_utils.logger.info("Write example model");
      h.installDeps();
    }
  });
};
