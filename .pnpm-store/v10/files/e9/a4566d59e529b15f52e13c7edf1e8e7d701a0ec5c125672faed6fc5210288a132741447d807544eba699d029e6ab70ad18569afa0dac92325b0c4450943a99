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

// src/commands/generators/tailwindcss.ts
var tailwindcss_exports = {};
__export(tailwindcss_exports, {
  default: () => tailwindcss_default
});
module.exports = __toCommonJS(tailwindcss_exports);
var import_core = require("@umijs/core");
var import_utils = require("@umijs/utils");
var import_fs = require("fs");
var import_path = require("path");
var import_utils2 = require("./utils");
var tailwindcss_default = (api) => {
  api.describe({
    key: "generator:tailwindcss"
  });
  api.registerGenerator({
    key: "tailwindcss",
    name: "Enable Tailwind CSS",
    description: "Setup Tailwind CSS configuration",
    type: import_core.GeneratorType.enable,
    checkEnable: () => {
      return !api.config.tailwindcss;
    },
    disabledDescription: () => `tailwindcss has been enabled; you can remove \`tailwindcss\` fields in ${api.appData.mainConfigFile} then run this to re-setup`,
    fn: async () => {
      const h = new import_utils2.GeneratorHelper(api);
      h.addDevDeps({
        "@umijs/plugins": (0, import_utils2.getUmiJsPlugin)(),
        tailwindcss: "^3"
      });
      h.setUmirc("tailwindcss", {});
      h.appendInternalPlugin("@umijs/plugins/dist/tailwindcss");
      import_utils.logger.info("Update .umirc.ts");
      const srcPrefix = api.appData.hasSrcDir ? "src/" : "";
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "tailwind.config.js"),
        `
module.exports = {
  content: [
    './${srcPrefix}pages/**/*.tsx',
    './${srcPrefix}components/**/*.tsx',
    './${srcPrefix}layouts/**/*.tsx',
  ],
}
`.trimStart()
      );
      import_utils.logger.info("Write tailwind.config.js");
      (0, import_fs.writeFileSync)(
        (0, import_path.join)(api.cwd, "tailwind.css"),
        `
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trimStart()
      );
      import_utils.logger.info("Write tailwind.css");
      h.installDeps();
    }
  });
};
